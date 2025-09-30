import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, FileUp, Download, FolderPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActionBarProps {
  compareEnabled: boolean;
  onCompareToggle: (enabled: boolean) => void;
}

const ActionBar = ({ compareEnabled, onCompareToggle }: ActionBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg border border-border">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="default" size="sm">
          <FolderPlus className="w-4 h-4 mr-2" />
          New Project
        </Button>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Material
        </Button>
        <Button variant="outline" size="sm">
          <FileUp className="w-4 h-4 mr-2" />
          Import CSV
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Switch 
            id="compare-toggle" 
            checked={compareEnabled}
            onCheckedChange={onCompareToggle}
          />
          <Label htmlFor="compare-toggle" className="text-sm font-medium cursor-pointer">
            Compare to BM2000 v1.2
          </Label>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Snapshot ID:</span>
          <Badge variant="secondary" className="font-mono text-xs">
            #a17c4f2e
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
