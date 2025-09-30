import { useState } from "react";
import Navigation from "@/components/Navigation";
import MetricsHeader from "@/components/dashboard/MetricsHeader";
import ActionBar from "@/components/dashboard/ActionBar";
import AccuracyBanner from "@/components/dashboard/AccuracyBanner";
import OptionCompare from "@/components/dashboard/OptionCompare";
import RecentActivity from "@/components/dashboard/RecentActivity";
import WarningsPanel from "@/components/dashboard/WarningsPanel";
import ProvenanceDrawer from "@/components/dashboard/ProvenanceDrawer";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [compareEnabled, setCompareEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <h1 className="text-3xl font-bold text-foreground">BlockPlane Dashboard</h1>
        
        <MetricsHeader />
        
        <ActionBar 
          compareEnabled={compareEnabled}
          onCompareToggle={setCompareEnabled}
        />
        
        <AccuracyBanner onViewLedger={() => setIsDrawerOpen(true)} />
        
        <OptionCompare enabled={compareEnabled} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <WarningsPanel onViewLedger={() => setIsDrawerOpen(true)} />
        </div>
      </main>

      <ProvenanceDrawer 
        open={isDrawerOpen} 
        onOpenChange={setIsDrawerOpen}
      />
    </div>
  );
};

export default Dashboard;
