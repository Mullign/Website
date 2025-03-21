export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://mull1gan.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
