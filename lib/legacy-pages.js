import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

const PUBLIC_DIRECTORY = path.join(process.cwd(), "public");

const BODY_PATTERN = /<body[^>]*>([\s\S]*?)<\/body>/i;
const TITLE_PATTERN = /<title[^>]*>([\s\S]*?)<\/title>/i;
const SCRIPT_PATTERN = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const IMAGE_PATTERN = /<img(?![^>]*\bloading=)([^>]*?)>/gi;

export const LEGACY_PAGE_CONFIG = {
  home: {
    fileName: "index.html",
    title: "Home",
    description:
      "Culture Hill organic farm products and services from farm to home.",
    stylesheets: ["/css/style.css"],
    scripts: ["/js/sandbox.js"],
  },
  about: {
    fileName: "about.html",
    title: "About",
    description:
      "Learn about Culture Hill's organic farming mission and sustainable values.",
    stylesheets: ["/css/about.css"],
    scripts: ["/js/about.js"],
  },
  contact: {
    fileName: "contact.html",
    title: "Contact",
    description:
      "Contact Culture Hill for farm produce, partnerships, and deliveries.",
    stylesheets: ["/css/contact.css"],
    scripts: ["/js/contact.js"],
  },
  blog: {
    fileName: "blog.html",
    title: "Blog",
    description:
      "Culture Hill stories and updates on organic farming and healthy living.",
    stylesheets: ["/css/blog.css"],
    scripts: ["/js/blog-data.js", "/js/blog.js"],
  },
  blogPage: {
    fileName: "blog-page.html",
    title: "Blog Post",
    description: "Read full Culture Hill blog articles and farming updates.",
    stylesheets: ["/css/blog-page.css"],
    scripts: ["/js/blog-data.js", "/js/blog-page.js"],
  },
  shop: {
    fileName: "shop.html",
    title: "Shop",
    description: "Browse Culture Hill farm products and place direct orders.",
    stylesheets: ["/css/style.css"],
    scripts: ["/js/shop.js"],
  },
};

const loadLegacyFile = cache(async (fileName) => {
  const absolutePath = path.join(PUBLIC_DIRECTORY, fileName);
  return fs.readFile(absolutePath, "utf8");
});

function normalizeLegacyMarkup(html) {
  const bodyMatch = html.match(BODY_PATTERN);
  const rawBody = bodyMatch ? bodyMatch[1] : html;

  return rawBody
    .replace(SCRIPT_PATTERN, "")
    .replace(/\b(src|href)="\.\/+/gi, '$1="/')
    .replace(/\b(src|href)='\.\/+/gi, "$1='/")
    .replace(/â€™/g, "'")
    .replace(IMAGE_PATTERN, '<img loading="lazy" decoding="async"$1>');
}

function extractTitle(html) {
  const titleMatch = html.match(TITLE_PATTERN);
  if (!titleMatch) {
    return "Culture Hill";
  }

  return titleMatch[1].trim();
}

export function getLegacyPageConfig(key) {
  const config = LEGACY_PAGE_CONFIG[key];

  if (!config) {
    throw new Error(`Unknown legacy page key: ${key}`);
  }

  return config;
}

export async function getLegacyPage(key) {
  const config = getLegacyPageConfig(key);
  const html = await loadLegacyFile(config.fileName);

  return {
    ...config,
    extractedTitle: extractTitle(html),
    markup: normalizeLegacyMarkup(html),
  };
}
