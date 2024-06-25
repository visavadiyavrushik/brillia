import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Helvetica"],
});

export const metadata = {
  title: "Brillia",
  description: "BUILDING THE FUTURE WITH BRILLIA-nt IDEAS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
