import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "KRC Cars",
  description: "High quality vehicles and services",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Footer />

        <script
          src="https://kit.fontawesome.com/94a0c02d39.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
