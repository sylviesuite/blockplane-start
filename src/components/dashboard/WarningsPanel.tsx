import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, FileWarning } from "lucide-react";

interface WarningsPanelProps {
  onViewLedger: () => void;
}

const WarningsPanel = ({ onViewLedger }: WarningsPanelProps) => {
  const warnings = [
    {
      type: "Price age",
      message: "Structural steel price is 124 days old",
      severity: "warning",
      icon: Clock
    },
    {
      type: "Price age",
      message: "Aluminum price is 98 days old",
      severity: "warning",
      icon: Clock
    },
    {
      type: "EPD age",
      message: "Concrete EPD is 5.2 years old",
      severity: "warning",
      icon: FileWarning
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Data Warnings</CardTitle>
        <Button variant="link" size="sm" onClick={onViewLedger} className="text-xs">
          View full ledger →
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {warnings.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No warnings. All data is fresh and verified.
          </div>
        ) : (
          warnings.map((warning, idx) => {
            const IconComponent = warning.icon;
            return (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-destructive mb-0.5">{warning.type}</div>
                  <div className="text-sm text-foreground">{warning.message}</div>
                </div>
                <IconComponent className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            );
          })
        )}
        
        {warnings.length > 0 && (
          <p className="text-xs text-muted-foreground pt-2">
            Update stale data to increase confidence score.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default WarningsPanel;
