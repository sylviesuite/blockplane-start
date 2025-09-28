import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import FeatureCards from "@/components/FeatureCards";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <StatsSection />
    </div>
  );
};

export default Index;
