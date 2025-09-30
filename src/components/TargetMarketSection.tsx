import { Card } from "@/components/ui/card";
import { Building2, FileCheck, DollarSign } from "lucide-react";

const TargetMarketSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "For Developers",
      description: "De-risk projects and secure green financing."
    },
    {
      icon: FileCheck,
      title: "For AEC Firms",
      description: "Win bids with verifiable, low-carbon proposals."
    },
    {
      icon: DollarSign,
      title: "For Capital Partners",
      description: "Underwrite projects with auditable carbon data."
    }
  ];

  return (
    <div className="px-6 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built for the teams who need defensible carbon data to win projects and secure financing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in rounded-3xl"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow shadow-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetMarketSection;
