const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl || "https://mull1gan.com"),
  title: {
    default: "JohnRussell | Mobile App Developer - React Native & iOS",
    template: "%s | John Russell",
  },
  description:
    "Mobile app developer specializing in React Native and iOS development. Creating seamless mobile experiences with beautiful design and stellar performance.",
  keywords: [
    "John Russell",
    "Mobile App Developer",
    "React Native Developer",
    "iOS Developer",
    "Swift Developer",
    "Mobile Development",
    "App Development",
    "React Native",
    "Swift",
    "iOS Development",
    "Mobile Apps",
  ],
  authors: [{ name: "John Russell" }],
  creator: "John Russell",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl, 
    title: "John Russell | Software Developer - React Native & iOS",
    description:
      "Mobile app and software developer specializing in React Native and iOS development. Creating seamless mobile experiences with beautiful design and stellar performance.",
    siteName: "John Russell",
    images: [
      {
        url: `${baseUrl}/openGraph.png`,
        width: 1200,
        height: 544,
        alt: "JohnRussell - Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnRussell | Mobile App Developer",
    description:
      "Mobile app developer specializing in React Native and iOS development.",
    creator: "@JohnRussell",
    images: [`${baseUrl}/openGraph.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};
