import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayo Productions — Digital Marketing & Experiences",
  description:
    "Rayo Productions is a digital marketing and experience studio blending storytelling, design, and technology for brands ready to stand out.",
  keywords: [
    "Rayo Productions",
    "digital marketing",
    "videography",
    "creative agency",
    "lead generation",
    "social media agency",
    "web experiences",
  ],
  openGraph: {
    title: "Rayo Productions — Digital Marketing & Experiences",
    description:
      "We craft magnetic digital stories, campaigns, and immersive websites for ambitious brands.",
    type: "website",
    locale: "en_US",
    url: "https://rayoproductions.in",
    siteName: "Rayo Productions",
  },
  metadataBase: new URL("https://rayoproductions.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base">
      <body
        className={`${sans.variable} relative min-h-screen overflow-x-hidden bg-base text-white`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
