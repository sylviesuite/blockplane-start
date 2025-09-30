import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Edit3, Download, Package } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      action: "Imported CSV",
      detail: "Materials_Q4.csv (247 items)",
      timestamp: "2 hours ago",
      icon: FileUp,
      color: "text-accent"
    },
    {
      action: "Edited project",
      detail: "Downtown Office Complex",
      timestamp: "5 hours ago",
      icon: Edit3,
      color: "text-primary"
    },
    {
      action: "Exported report",
      detail: "Q4_Carbon_Analysis.pdf",
      timestamp: "Yesterday",
      icon: Download,
      color: "text-muted-foreground"
    },
    {
      action: "Added material",
      detail: "Low-carbon concrete mix",
      timestamp: "2 days ago",
      icon: Package,
      color: "text-primary"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, idx) => {
          const IconComponent = activity.icon;
          return (
            <div key={idx} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-foreground">{activity.action}</div>
                <div className="text-xs text-muted-foreground truncate">{activity.detail}</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.timestamp}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
