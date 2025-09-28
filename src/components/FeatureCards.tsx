import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Market Data",
      description: "Live pricing and availability from Northern Michigan suppliers",
      items: [
        { label: "Regional Pricing", status: "Live", color: "bg-green-500" },
        { label: "Stock Levels", status: "Real-time", color: "bg-blue-500" },
        { label: "Market Trends", status: "↗️ Rising", color: "bg-orange-500" },
      ],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Zap,
      title: "Intelligent Project Setup",
      description: "Guided workflows with smart templates and defaults",
      items: [
        { label: "Project Templates", value: "12 Types", color: "bg-purple-500" },
        { label: "Smart Defaults", value: "Climate Zone", color: "bg-indigo-500" },
        { label: "Guided Wizards", value: "Step-by-step", color: "bg-blue-500" },
      ],
      gradient: "from-accent to-primary",
    },
    {
      icon: BarChart3,
      title: "Advanced Comparison",
      description: "Professional decision-making with weighted analysis",
      items: [
        { label: "Side-by-Side Analysis", value: "2-5 Materials", color: "bg-green-500" },
        { label: "Weighted Scoring", value: "Custom Priorities", color: "bg-orange-500" },
        { label: "Professional Reports", value: "Client-ready", color: "bg-purple-500" },
      ],
      gradient: "from-primary-glow to-accent",
    },
  ];

  return (
    <div className="px-6 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold text-foreground mb-6">Intelligent Construction Platform</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Advanced tools and analytics to streamline your construction projects from planning to completion
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="group relative overflow-hidden bg-gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-scale-in rounded-3xl" style={{animationDelay: `${index * 200}ms`}}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-3xl"></div>
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                {feature.description}
              </p>
              
              <div className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between py-3 px-4 bg-muted/20 rounded-2xl group-hover:bg-muted/30 transition-all duration-300 border border-transparent hover:border-primary/20">
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    <Badge 
                      className={`${item.color} text-white text-xs px-3 py-2 rounded-full font-medium shadow-md border-0`}
                    >
                      {item.status || item.value}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Enterprise Ready</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;