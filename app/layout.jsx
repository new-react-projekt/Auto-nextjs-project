"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ChildNav from "./components/childNav";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="tr">
      <head>
        <title>React code test</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <Nav />
        {pathname.startsWith("/childpage") && <ChildNav />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
