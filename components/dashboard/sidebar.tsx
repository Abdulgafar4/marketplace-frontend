// DashboardSidebar.tsx
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  BarChart,
} from "lucide-react";

interface DashboardSidebarProps {
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ setActiveTab }: DashboardSidebarProps) {
  return (
    <aside className="w-64 bg-card text-card-foreground p-4 hidden md:block">
      <div className="flex items-center mb-8">
        <ShoppingCart className="mr-2 h-6 w-6" />
        <span className="text-lg font-bold">DASHBORAD</span>
      </div>
      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setActiveTab("overview")}
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Overview
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setActiveTab("products")}
        >
          <Package className="mr-2 h-4 w-4" />
          Products
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setActiveTab("analytics")}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </aside>
  );
}
