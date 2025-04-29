import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
