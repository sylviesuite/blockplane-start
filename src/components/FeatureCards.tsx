import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, BarChart3, ArrowRight } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Market Data",
      description: "Live pricing and availability from Northern Michigan suppliers",
      items: [
        { label: "Regional Pricing", status: "Live", color: "bg-primary" },
        { label: "Stock Levels", status: "Real-time", color: "bg-accent" },
        { label: "Market Trends", status: "Rising", color: "bg-primary-glow" },
      ],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Zap,
      title: "Intelligent Project Setup",
      description: "Guided workflows with smart templates and defaults",
      items: [
        { label: "Project Templates", value: "12 Types", color: "bg-accent" },
        { label: "Smart Defaults", value: "Climate Zone", color: "bg-primary" },
        { label: "Guided Wizards", value: "Step-by-step", color: "bg-accent" },
      ],
      gradient: "from-accent to-primary",
    },
    {
      icon: BarChart3,
      title: "Advanced Comparison",
      description: "Professional decision-making with weighted analysis",
      items: [
        { label: "Side-by-Side Analysis", value: "2-5 Materials", color: "bg-primary" },
        { label: "Weighted Scoring", value: "Custom Priorities", color: "bg-accent" },
        { label: "Professional Reports", value: "Client-ready", color: "bg-primary-glow" },
      ],
      gradient: "from-primary-glow to-accent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-8">
      {features.map((feature, index) => (
        <Card key={index} className="group relative overflow-hidden bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-md`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {feature.description}
            </p>
            
            <div className="space-y-3">
              {feature.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <Badge 
                    variant="secondary" 
                    className={`${item.color} text-white border-0 shadow-sm`}
                  >
                    {item.status || item.value}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;