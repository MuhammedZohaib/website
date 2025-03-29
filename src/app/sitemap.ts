import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourwebsite.com";

  // Define all your routes
  const routes = [
    "/home",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
  ];

  // Current date for lastModified
  const currentDate = new Date();

  // Generate sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;
}
