/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import { PostHogProvider } from './providers';
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nipun's Portfolio",
  description: "I'm a software engineer with a passion for building beautiful and functional web applications and exploring the world of data science.",
  metadataBase: new URL('http://nipunbandara.vercel.app/'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': 'http://nipunbandara.vercel.app/rss.xml',
    },
  },
  keywords: ['Blog', 'Data Science', 'Nipun Bandara', 'Portfolio', 'Full Stack Developer', 'Software Engineer', 'AI Engineer', 'Machine Learning', 'Web Development'],
  openGraph: {
    title: "Nipun's Portfolio | Nipun's Blog",
    description: "I'm a software engineer with a passion for building beautiful and functional web applications and exploring the world of data science.",
    url: 'http://nipunbandara.vercel.app/',
    siteName: "Nipun's Portfolio",
    images: [
      {
        url: 'http://nipunbandara.vercel.app/image/mypic.png',
        width: 1200,
        height: 630,
        alt: "Nipun's Portfolio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
      </head>
      <body className={roboto.className}>
      <PostHogProvider>
        <Layout>
          {children}
          <SpeedInsights/>
        </Layout>
      </PostHogProvider>
      </body>
    </html>
  );
}
