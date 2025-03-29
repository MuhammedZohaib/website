import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/public"],
    },
    sitemap: "https://zoha1b.vercel.app/sitemap.xml",
    host: "https://zoha1b.vercel.app",
  };
}
