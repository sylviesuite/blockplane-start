import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
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
            
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              BlockPlane Enhanced
            </h1>
            <p className="text-2xl text-white/90 mb-4 leading-relaxed max-w-3xl">
              Sustainable Construction Intelligence Platform
            </p>
            <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-2xl">
              Advanced analytics, real-time market data, and intelligent project management for the modern construction industry
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-scale-in">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Browse Materials
            </Button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input 
                placeholder="Search projects, materials, suppliers..."
                className="pl-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus:ring-white/50 focus:bg-white/25 transition-all duration-300 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;