import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/VideoPlayer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TypingEffect from "@/components/Typingeffect";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VideoPlayer />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
