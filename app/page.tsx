import AboutSection from "@/components/home/AboutSection";
import Carrousel from "@/components/home/Carrousel";
import HeroSection from "@/components/home/HeroSection";
import Literation from "@/components/home/Literation";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <Carrousel />
      <Literation />
    </div>
  );
}