import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingDown, TrendingUp } from "lucide-react";

interface OptionCompareProps {
  enabled: boolean;
}

const OptionCompare = ({ enabled }: OptionCompareProps) => {
  if (!enabled) {
    return (
      <Card className="bg-muted/20 border-dashed">
        <CardContent className="flex items-center justify-center py-12">
          <p className="text-muted-foreground text-sm">
            Enable "Compare to BM2000 v1.2" to see option comparison
          </p>
        </CardContent>
      </Card>
    );
  }

  const options = [
    {
      name: "Option A: Standard Concrete",
      deltaCost: "+$47K",
      cpiRange: "2.8 - 3.2",
      confidence: "High",
      deltaCO2e: "+89.4 tCO₂e",
      lisRis: { lis: "+12%", ris: "+8%" }
    },
    {
      name: "Option B: Low-Carbon Mix",
      deltaCost: "-$12K",
      cpiRange: "1.6 - 2.1",
      confidence: "Medium",
      deltaCO2e: "-34.7 tCO₂e",
      lisRis: { lis: "-18%", ris: "+4%" }
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Option Compare</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {options.map((option, idx) => (
          <Card key={idx} className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">{option.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">ΔCost</div>
                  <div className={`text-lg font-bold ${option.deltaCost.startsWith('+') ? 'text-destructive' : 'text-primary'}`}>
                    {option.deltaCost}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-muted-foreground mb-1">ΔtCO₂e</div>
                  <div className={`text-lg font-bold flex items-center gap-1 ${option.deltaCO2e.startsWith('+') ? 'text-destructive' : 'text-primary'}`}>
                    {option.deltaCO2e.startsWith('+') ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {option.deltaCO2e}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground mb-1">CPI Range</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">{option.cpiRange}</span>
                  <Badge variant={option.confidence === "High" ? "default" : "secondary"} className="text-xs">
                    {option.confidence}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground">LIS Delta</div>
                  <div className={`text-sm font-semibold ${option.lisRis.lis.startsWith('+') ? 'text-destructive' : 'text-primary'}`}>
                    {option.lisRis.lis}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">RIS Delta</div>
                  <div className={`text-sm font-semibold ${option.lisRis.ris.startsWith('+') ? 'text-destructive' : 'text-primary'}`}>
                    {option.lisRis.ris}
                  </div>
                </div>
              </div>

              <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                Assumptions appendix →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button size="lg" className="gap-2">
          <FileText className="w-5 h-5" />
          Generate Decision Memo
        </Button>
      </div>
      
      <p className="text-xs text-center text-muted-foreground">
        Ready to commit? Generate a Decision Memo documenting ΔCost, ΔtCO₂e, LIS/RIS deltas, CPI range, sources, and caveats.
      </p>
    </div>
  );
};

export default OptionCompare;
