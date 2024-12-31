// DashboardSidebar.tsx
import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  Package,
  Settings,
  Repeat, History, Sun, Moon,
} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";


const sidebarItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/dashboard/products', icon: Package },
  { name: 'Renew Product', href: '/dashboard/renew', icon: Repeat },
  { name: 'Older Product', href: '/dashboard/older', icon: History },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {

  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  return (
      <aside className="w-16 md:w-64 flex-col fixed inset-y-0 mt-20">
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto border-r">
          <nav className="flex-1 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                  <TooltipProvider key={item.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                            href={item.href}
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive
                                    ? 'bg-secondary text-secondary-foreground'
                                    : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                            }`}
                        >
                          <item.icon className="w-5 h-5 md:mr-3"/>
                          <span className="sr-only md:not-sr-only">{item.name}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="md:hidden">
                        {item.name}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
              )
            })}
          </nav>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="md:hidden">
                Toggle theme
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>

  );
}
