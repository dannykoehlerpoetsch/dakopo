import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const links = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/about",
    changefreq: "daily",
    priority: 0.8,
  },
  {
    url: "/contact",
    changefreq: "daily",
    priority: 0.8,
  },
  {
    url: "/projects",
    changefreq: "daily",
    priority: 0.8,
  },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://dakopo.vercel.app/",
  });
  const writeStream = fs.createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);
  for (const link of links) {
    sitemap.write({
      url: link.url,
      changefreq: link.changefreq,
      priority: link.priority,
    });
  }
  sitemap.end();
  const sitemapXML = await streamToPromise(sitemap);
  console.log("Sitemap generated:", sitemapXML.toString());
}

generateSitemap().catch((err) => {
  console.error(err);
});
