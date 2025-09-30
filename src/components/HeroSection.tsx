import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden bg-gradient-hero rounded-3xl mx-6 mt-6 mb-12 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative px-8 py-16">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                v2.6 Enhanced
              </span>
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-3 leading-tight">
              BlockPlane
            </h1>
            <h2 className="text-5xl font-bold text-white/95 mb-6 leading-tight">
              Marginshield
            </h2>
            <p className="text-xl text-white/95 mb-4 leading-relaxed max-w-3xl font-medium">
              The first platform to treat carbon reduction as a financial instrument.
            </p>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-3xl">
              Introducing the defensible Carbon Performance Index (CPI) — the new benchmark for capital allocation in construction.
            </p>
            <p className="text-base text-white/70 mb-12 leading-relaxed max-w-2xl">
              Audit-ready carbon tracking with source-tracked data, confidence scores, and verifiable reporting for construction projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-scale-in">
            <Button 
              variant="default" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow font-semibold text-lg px-10 py-6 h-auto"
            >
              Request a Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/dashboard')}
            >
              <Plus className="w-6 h-6 mr-2" />
              Start Your First Analysis
            </Button>
            
            <p className="text-sm text-white/70 ml-4">
              Upload your Revit model — see your most cost-effective carbon reductions in minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;