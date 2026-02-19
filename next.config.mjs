import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/about", destination: "/about.html" },
        { source: "/contact", destination: "/contact.html" },
        { source: "/blog", destination: "/blog.html" },
        { source: "/blog-page", destination: "/blog-page.html" },
        { source: "/shop", destination: "/shop.html" },
      ],
    };
  },
};

export default nextConfig;
