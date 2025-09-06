import HomepageHero from "@/components/homepage/HomepageHero";
import AboutDiningExperiences from "@/components/homepage/AboutDiningExperiences";
import OccasionsSection from "@/components/homepage/OccassionsSection";
import Slider from "@/components/homepage/Slider";
import ChefSelection from "@/components/homepage/ChefSelection";

export default function Home() {
  return (
   <>
   <Slider/>
   <ChefSelection />
  <HomepageHero />
  <OccasionsSection />
  <AboutDiningExperiences />
  
   </>
  );
}
