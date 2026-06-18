import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jonathanlyashko.com"),
  title: {
    default: "Jonathan Lyashko",
    template: "%s | Jonathan Lyashko",
  },
  description:
    "Computer Engineering student building toward quantum hardware, control systems, DSP, and hardware-first systems work.",
  openGraph: {
    title: "Jonathan Lyashko",
    description:
      "Computer Engineering student building toward quantum hardware, control systems, DSP, and hardware-first systems work.",
    url: "https://www.jonathanlyashko.com",
    siteName: "Jonathan Lyashko",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jonathan Lyashko portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Lyashko",
    description:
      "Computer Engineering student building toward quantum hardware, control systems, DSP, and hardware-first systems work.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
