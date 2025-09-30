import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AccuracyBannerProps {
  onViewLedger: () => void;
  hasWarnings?: boolean;
}

const AccuracyBanner = ({ onViewLedger, hasWarnings = false }: AccuracyBannerProps) => {
  if (hasWarnings) {
    return (
      <Alert variant="destructive" className="border-destructive/50 bg-destructive/5">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="font-semibold">Warnings:</span>
            <span>2 prices older than 90 days</span>
            <span>•</span>
            <span>1 EPD older than 5 years</span>
            <span>•</span>
            <span className="font-medium">Confidence: Medium</span>
          </div>
          <Button 
            variant="link" 
            size="sm" 
            onClick={onViewLedger}
            className="text-destructive hover:text-destructive/80"
          >
            View Provenance Ledger →
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="border-primary/30 bg-primary/5">
      <CheckCircle2 className="h-4 w-4 text-primary" />
      <AlertDescription className="text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium text-primary">Export parity: OK</span>
          <span className="text-muted-foreground">(PDF = CSV)</span>
          <span>•</span>
          <span className="text-muted-foreground">Rounding: currency 2-dec, tCO₂e 3-dec</span>
          <span>•</span>
          <span className="text-muted-foreground">Snapshot: <code className="text-xs font-mono">#a17c4f2e</code></span>
          <span>•</span>
          <span className="text-muted-foreground">BM2000 v1.2 (read-only)</span>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default AccuracyBanner;
