import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
// import AnimatedCursor from "../components/cursor/AnimatedCursor";
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
        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color="0, 0, 0"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2}
          outerStyle={{
            border: "1px solid #000",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "iframe",
          ]}
        />
        <Header />
        {/* <CustomCursor /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
