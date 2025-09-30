import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, FolderOpen, Package, Leaf, DollarSign, TrendingUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MetricsHeader = () => {
  const metrics = [
    {
      label: "Active Projects",
      value: "12",
      icon: FolderOpen,
      formula: "Count of projects with status = 'active'",
      color: "text-accent"
    },
    {
      label: "Materials Analyzed",
      value: "2,847",
      icon: Package,
      formula: "Sum of unique materials across all projects",
      color: "text-primary"
    },
    {
      label: "Carbon Saved",
      value: "156.3",
      unit: "tCO₂e vs BM2000",
      icon: Leaf,
      formula: "Σ(Baseline - Actual) emissions per material",
      color: "text-primary"
    },
    {
      label: "Cost Savings",
      value: "$487K",
      unit: "vs baseline",
      icon: DollarSign,
      formula: "Σ(Baseline cost - Actual cost) with 2-dec precision",
      color: "text-accent"
    },
    {
      label: "Paris Alignment",
      value: "67%",
      unit: "of projects",
      icon: TrendingUp,
      formula: "% of projects within 1.5°C pathway target",
      color: "text-primary"
    },
    {
      label: "Data Confidence",
      value: <Badge variant="secondary" className="bg-primary/10 text-primary border-0">High</Badge>,
      icon: Shield,
      formula: "Weighted freshness (<90d) & completeness score",
      color: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric, idx) => {
        const IconComponent = metric.icon;
        return (
          <Card key={idx} className="p-4 bg-card border-border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <IconComponent className={`w-4 h-4 ${metric.color}`} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">{metric.formula}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {metric.label}
            </div>
            {metric.unit && (
              <div className="text-xs text-muted-foreground mt-1">
                {metric.unit}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsHeader;
