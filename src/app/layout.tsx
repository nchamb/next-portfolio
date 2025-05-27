/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { PostHogProvider } from './providers';
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nipun's Portfolio",
  description:
    "I'm a full-stack developer with a passion for building beautiful and functional web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.svg" type="image/png" />
      </head>
      <body className={roboto.className}>
      <PostHogProvider>
        <Layout>
          {children}
          <FixedPlugin />
          <SpeedInsights/>
        </Layout>
      </PostHogProvider>
      </body>
    </html>
  );
}
