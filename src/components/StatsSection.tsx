import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Leaf, DollarSign } from "lucide-react";
import earthImage from "@/assets/earth-space.png";

const StatsSection = () => {
  const stats = [
    {
      value: "2,847",
      label: "Materials Analyzed",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      icon: TrendingUp,
      trend: "+12% this month"
    },
    {
      value: "156",
      label: "Active Projects",
      color: "text-blue-600", 
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      icon: Users,
      trend: "+8 new projects"
    },
    {
      value: "89%",
      label: "Sustainability Score",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      icon: Leaf,
      trend: "Above industry avg"
    },
    {
      value: "$2.3M",
      label: "Cost Savings",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      icon: DollarSign,
      trend: "+15% vs last year"
    },
  ];

  return (
    <div className="px-6 py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="text-center mb-16 animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
          <img 
            src={earthImage} 
            alt="Earth from space" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Real results from construction professionals using BlockPlane Enhanced
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="group relative overflow-hidden bg-gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-scale-in rounded-3xl" style={{animationDelay: `${index * 150}ms`}}>
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-accent rounded-t-full"></div>
              
              <div className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                <div className="text-base font-semibold text-muted-foreground mb-4">
                  {stat.label}
                </div>
                
                <div className="text-sm text-muted-foreground/80 bg-muted/30 rounded-full px-4 py-2">
                  {stat.trend}
                </div>
                
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="w-full bg-muted/30 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 group-hover:animate-pulse" 
                      style={{width: index === 0 ? '92%' : index === 1 ? '78%' : index === 2 ? '89%' : '85%'}}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;