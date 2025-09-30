import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Materials", path: "/materials" },
    { name: "Market Data", path: "/market-data" },
    { name: "CPI Analysis", path: "/comparison" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Settings", path: "/settings" },
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
            variant={location.pathname === item.path ? "secondary" : "ghost"}
            className="text-sm font-medium"
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;