import type { Metadata } from "next";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import "./globals.css";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
