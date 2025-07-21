import type { Metadata } from "next";
import { lusitana } from "./ui/fonts";
import "./globals.css";
import { Header } from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import Head from "next/head";
import FadeInOnScroll from "./ui/fade-in-on-scroll";

export const metadata: Metadata = {
  title: {
    template: "%s | Knight's Creek",
    default: "Knight's Creek – Outdoor Lifestyle",
  },
  description:
    "Experience the great outdoors with Knight's Creek. Book your adventure today!",
  metadataBase: new URL("https://knights-creek.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Knight&apos;s Creek – Outdoor Lifestyle</title>
        <meta name="description" content="Knight's Creek – Outdoor Lifestyle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/knightscreeklogo.png" />
      </Head>
      <body className={`${lusitana.className} antialiased`}>
        <Header />
        {children}
        <FadeInOnScroll animationType="fade-in">
          <Footer />
        </FadeInOnScroll>
      </body>
    </html>
  );
}
