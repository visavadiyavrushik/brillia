import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
// import CustomCursor from "@/components/customCursor/CustomCursor";

const inter = Poppins({
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
      <body className={inter.className}>
        <Header />
        {/* <CustomCursor /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
