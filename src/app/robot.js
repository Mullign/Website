export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://mull1gan.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/private/",
        "/*.json$", // Disallow JSON files
        "/*.xml$", // Disallow XML files except sitemap
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
