import { projects } from "../data/projects";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hrishivuk.com";

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aboutme`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic project routes - safely handle projects array
  const projectRoutes = Array.isArray(projects) && projects.length > 0
    ? projects.map((project) => ({
        url: `${baseUrl}/works/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      }))
    : [];

  return [...routes, ...projectRoutes];
}

