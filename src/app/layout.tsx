import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Poppins } from "next/font/google";
import AppLayout from "../components/Layout/AppLayout";
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The UNILAG GREENHUB",
  description:
    "At The UNILAG GREEN HUB, we're passionate about waste management and transforming waste into wealth, educating young people and vulnerable communities on circular economy, environmental sustainability, climate change, and carbon literacy.",
  keywords:
    "Greeenhub, UNILAG, UNILAG GREENHUB, charity, education, outreach, recycle",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "UNILAG GREENHUB",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
