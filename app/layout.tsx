import type { Metadata } from "next";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import "./globals.css";
import BackgroundVectors from "./components/BackgroundVectors";

export const metadata: Metadata = {
  title: "پدربزرگ",
  description: "Generated by create next app",
  icons: {
    icon: "/Image/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" className='bg-base-100 overflow-x-hidden'>
      <body>
        <Header />
        <ScrollToTop />
        <BackgroundVectors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
