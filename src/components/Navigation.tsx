import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Dashboard", active: true },
    { name: "Projects", active: false },
    { name: "Materials", active: false },
    { name: "Market Data", active: false },
    { name: "Comparison", active: false },
    { name: "Suppliers", active: false },
    { name: "Settings", active: false },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-card border-b border-border">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-foreground">BlockPlane</span>
          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            Enhanced
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-1">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant={item.active ? "secondary" : "ghost"}
            className="text-sm font-medium"
          >
            {item.name}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;