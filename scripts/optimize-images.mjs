import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const TARGET_DIRECTORY = path.join(ROOT, "public", "assets");
const COMPRESSIBLE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const MIN_REDUCTION_RATIO = 0.02;

const stats = {
  files: 0,
  optimized: 0,
  skipped: 0,
  errors: 0,
  beforeBytes: 0,
  afterBytes: 0,
};

function bytesToMb(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

async function walk(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

function shouldResize(metadata) {
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;
  return width > MAX_WIDTH || height > MAX_HEIGHT;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!COMPRESSIBLE_EXTENSIONS.has(ext)) {
    return;
  }

  stats.files += 1;

  const originalBuffer = await fs.readFile(filePath);
  stats.beforeBytes += originalBuffer.length;

  let metadata;
  try {
    metadata = await sharp(originalBuffer, { failOn: "none" }).metadata();
  } catch (error) {
    stats.errors += 1;
    stats.afterBytes += originalBuffer.length;
    console.error(`Failed metadata read: ${filePath}`);
    console.error(error.message);
    return;
  }

  let pipeline = sharp(originalBuffer, { failOn: "none" }).rotate();
  if (shouldResize(metadata)) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  let optimizedBuffer;
  try {
    if (ext === ".png") {
      optimizedBuffer = await pipeline
        .png({
          quality: 80,
          compressionLevel: 9,
          palette: true,
          effort: 10,
        })
        .toBuffer();
    } else {
      optimizedBuffer = await pipeline
        .jpeg({
          quality: 74,
          progressive: true,
          mozjpeg: true,
          chromaSubsampling: "4:2:0",
        })
        .toBuffer();
    }
  } catch (error) {
    stats.errors += 1;
    stats.afterBytes += originalBuffer.length;
    console.error(`Failed transform: ${filePath}`);
    console.error(error.message);
    return;
  }

  const bytesSaved = originalBuffer.length - optimizedBuffer.length;
  const reductionRatio = bytesSaved / originalBuffer.length;

  if (bytesSaved > 0 && reductionRatio >= MIN_REDUCTION_RATIO) {
    await fs.writeFile(filePath, optimizedBuffer);
    stats.optimized += 1;
    stats.afterBytes += optimizedBuffer.length;
  } else {
    stats.skipped += 1;
    stats.afterBytes += originalBuffer.length;
  }
}

async function main() {
  const allFiles = await walk(TARGET_DIRECTORY);

  for (const filePath of allFiles) {
    await optimizeImage(filePath);
  }

  const savings = stats.beforeBytes - stats.afterBytes;
  const reductionPercent =
    stats.beforeBytes === 0 ? 0 : (savings / stats.beforeBytes) * 100;

  console.log("Image optimization complete.");
  console.log(`Scanned files: ${stats.files}`);
  console.log(`Optimized files: ${stats.optimized}`);
  console.log(`Skipped files: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(
    `Size before: ${bytesToMb(stats.beforeBytes)} MB, after: ${bytesToMb(
      stats.afterBytes
    )} MB`
  );
  console.log(
    `Saved: ${bytesToMb(savings)} MB (${reductionPercent.toFixed(1)}%)`
  );
}

main().catch((error) => {
  console.error("Image optimization failed.");
  console.error(error);
  process.exit(1);
});
