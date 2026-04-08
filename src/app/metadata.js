const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl || "https://mull1gan.com"),
  title: {
    default: "John Russell | Software Engineer — Full-Stack (React, TypeScript, Node)",
    template: "%s | John Russell",
  },
  description:
    "Full-stack software engineer: React, TypeScript, Next.js, Node.js, PostgreSQL. M.S. CS @ Clemson. Production web apps, APIs, and iOS. Open to SWE roles.",
  keywords: [
    "John Russell",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Software Engineering",
  ],
  authors: [{ name: "John Russell" }],
  creator: "John Russell",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "John Russell | Software Engineer",
    description:
      "Full-stack engineer — React, TypeScript, Node.js. Production systems, clean architecture, M.S. CS @ Clemson.",
    siteName: "John Russell",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "John Russell — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Russell | Software Engineer",
    description: "Full-stack · React · TypeScript · Node.js · M.S. CS @ Clemson",
    creator: "@JohnRussell",
    images: ["/og.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
};
