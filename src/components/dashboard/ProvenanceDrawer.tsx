import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Calendar, MapPin, Shield } from "lucide-react";

interface ProvenanceDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProvenanceDrawer = ({ open, onOpenChange }: ProvenanceDrawerProps) => {
  const provenanceEntries = [
    {
      metric: "Structural Steel Price",
      source: "RSMeans CostWorks",
      date: "2024-06-15",
      unit: "$/ton",
      region: "Pacific Northwest",
      confidence: "High"
    },
    {
      metric: "Concrete EPD",
      source: "EPD Hub",
      date: "2019-08-20",
      unit: "kgCO₂e/m³",
      region: "North America",
      confidence: "Medium"
    },
    {
      metric: "Labor Rate - Carpentry",
      source: "BLS Regional Data",
      date: "2024-09-01",
      unit: "$/hr",
      region: "Seattle Metro",
      confidence: "High"
    },
    {
      metric: "Aluminum Extrusion",
      source: "Industry Survey",
      date: "2024-05-10",
      unit: "$/lb",
      region: "West Coast",
      confidence: "Medium"
    }
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Provenance Ledger</SheetTitle>
          <SheetDescription>
            Source-tracked data, dates, units, regions, and confidence scores for all metrics on the current screen.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {provenanceEntries.map((entry, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border bg-card space-y-3">
              <div className="font-semibold text-foreground">{entry.metric}</div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Source</div>
                    <div className="font-medium text-foreground">{entry.source}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Date</div>
                    <div className="font-medium text-foreground">{entry.date}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Region</div>
                    <div className="font-medium text-foreground">{entry.region}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Confidence</div>
                    <Badge 
                      variant={entry.confidence === "High" ? "default" : "secondary"}
                      className="text-xs mt-1"
                    >
                      {entry.confidence}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                Unit: {entry.unit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Export includes this ledger. All PDF and CSV exports contain full provenance data for audit purposes.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProvenanceDrawer;
