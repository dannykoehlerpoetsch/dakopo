export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dakopo.vercel.app/sitemap.xml",
  };
}
