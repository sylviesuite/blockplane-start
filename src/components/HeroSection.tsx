import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero rounded-2xl mx-6 mt-6 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="relative px-8 py-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            BlockPlane Enhanced
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Sustainable Construction Intelligence Platform
          </p>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </Button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input 
                placeholder="Search projects, materials, suppliers..."
                className="pl-10 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;