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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                  Audit-Ready
                </span>
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-3 leading-tight">
                BlockPlane: Carbon Intelligence
              </h1>
              <p className="text-lg text-white/70 mb-8 font-medium">
                Powered by Marginshield
              </p>
              <p className="text-xl text-white/95 mb-6 leading-relaxed font-medium">
                The first platform to treat carbon reduction as a financial instrument.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Introducing the defensible Carbon Performance Index (CPI) — the new benchmark for capital allocation in construction.
              </p>
              <p className="text-base text-white/70 mb-14 leading-relaxed">
                Audit-ready carbon tracking with source-tracked data, confidence scores, and verifiable reporting for construction projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-scale-in mb-10">
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
                className="text-white border-2 border-white/40 bg-transparent hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300 font-semibold"
                onClick={() => navigate('/dashboard')}
              >
                <Plus className="w-5 h-5 mr-2" />
                Start Project CPI
              </Button>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60 mb-3 font-medium">How it works</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Upload your Revit model → See your most cost-effective carbon reductions in minutes
              </p>
            </div>
          </div>

          {/* Right Column - Visual Stats */}
          <div className="hidden lg:flex flex-col space-y-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-glow transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/70 text-sm mb-2">Average Cost Savings</p>
                  <p className="text-4xl font-bold text-white">23%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-white/60" />
              </div>
              <p className="text-white/60 text-xs">Typical project savings through CPI optimization</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-glow transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/70 text-sm mb-2">Carbon Reduction</p>
                  <p className="text-4xl font-bold text-white">34%</p>
                </div>
                <Zap className="w-8 h-8 text-white/60" />
              </div>
              <p className="text-white/60 text-xs">Average reduction across all projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-glow transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/70 text-sm mb-2">Audit Confidence</p>
                  <p className="text-4xl font-bold text-white">98%</p>
                </div>
                <Search className="w-8 h-8 text-white/60" />
              </div>
              <p className="text-white/60 text-xs">Data integrity verified by Marginshield</p>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-white/50 text-xs italic">
                *Projected savings based on model analysis of 50+ commercial assemblies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;