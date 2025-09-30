import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import FeatureCards from "@/components/FeatureCards";
import TargetMarketSection from "@/components/TargetMarketSection";
import StatsSection from "@/components/StatsSection";
import earthImage from "@/assets/earth-space.png";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${earthImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better content readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeatureCards />
        <TargetMarketSection />
        <StatsSection />
      </div>
    </div>
  );
};

export default Index;
