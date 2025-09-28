import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      value: "2,847",
      label: "Materials Analyzed",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      value: "156",
      label: "Active Projects",
      color: "text-accent", 
      bgColor: "bg-accent/10",
    },
    {
      value: "89%",
      label: "Sustainability Score",
      color: "text-primary-glow",
      bgColor: "bg-primary-glow/10",
    },
    {
      value: "$2.3M",
      label: "Cost Savings",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="group relative overflow-hidden bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-6 text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <span className={`text-2xl font-bold ${stat.color}`}>
                {stat.value.charAt(0)}
              </span>
            </div>
            
            <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
              {stat.value}
            </div>
            
            <div className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        </Card>
      ))}
    </div>
  );
};

export default StatsSection;