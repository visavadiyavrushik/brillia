import HomeSlider from "@/components/HomeSlider/HomeSlider";
import HomeGallary from "@/sections/home/HomeGallery";
import HomeReviews from "@/sections/home/HomeReviews";
import HomeVideo from "@/sections/home/Homevideo";
import OurValues from "@/sections/home/OurValues";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <OurValues />
      <HomeGallary />
      <HomeVideo />
      <HomeReviews />
    </>
  );
}
