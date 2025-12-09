import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import MenuSection from "@/components/MenuSection";
import NewsSection from "@/components/NewsSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MenuSection />
        <NewsSection />
      </main>
    </div>
  );
};

export default Index;