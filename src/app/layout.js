import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import CookiesBanner from "@/components/CookiesBanner/CookiesBanner";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
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
        {/* <AnimatedCursor
          // innerSize={10}
          // outerSize={50}
          // color="0, 0, 0"
          // outerAlpha={0}
          // innerScale={1}
          // outerScale={2}
          // innerStyle={{ mixBlendMode: "multiply" }}
          // outerStyle={{
          //   border: "2px solid #000",
          //   mixBlendMode: "revert",
          // }}
          color="0, 0, 0"
          innerSize={10}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid #000",
            mixBlendMode: "exclusion",
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
        /> */}

        <AnimatedCursor
          innerSize={10}
          outerSize={8}
          // color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={1.7}
          outerScale={10}
          outerStyle={
            {
              // border: "2px solid #000",
            }
          }
          innerStyle={{
            mixBlendMode: "revert",
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
            {
              target: ".footer_footer__AQTwI",
              options: {
                innerSize: 15,
                outerSize: 15,
                color: "255, 255, 255",
                outerAlpha: 10,
                innerScale: 1.7,
                outerScale: 15,
              },
            },
          ]}
        />
        <Header />
        {/* <CustomCursor /> */}
        {children}
        <CookiesBanner />
        <Footer />
      </body>
    </html>
  );
}
