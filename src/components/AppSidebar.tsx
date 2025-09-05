import { 
  Home, 
  BarChart3, 
  FileText, 
  Users, 
  ShoppingCart,
  DollarSign,
  Star,
  Settings,
  UserCog,
  Moon,
  Sun
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "الصفحة الرئيسية", url: "/", icon: Home },
  { title: "لوحات التحكم", url: "/dashboards", icon: BarChart3 },
  { title: "التقارير", url: "/reports", icon: FileText },
  { title: "الزيارات", url: "/visits", icon: Users },
  { title: "الطلبات", url: "/orders", icon: ShoppingCart },
  { title: "التحصيلات", url: "/collections", icon: DollarSign },
  { title: "التقييمات", url: "/evaluations", icon: Star },
];

const managementItems = [
  { title: "الإدارة العامة", url: "/management", icon: Settings },
  { title: "إدارة المستخدمين", url: "/users", icon: UserCog },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-primary font-medium" : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">نظام المندوبين</h2>
              <p className="text-sm text-sidebar-foreground/70">الطبيين</p>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-right">القوائم الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClasses}
                      style={{ direction: 'rtl' }}
                    >
                      <item.icon className="ml-2 h-5 w-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-right">الإدارة</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClasses}
                      style={{ direction: 'rtl' }}
                    >
                      <item.icon className="ml-2 h-5 w-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!isCollapsed ? (
          <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full justify-start"
            style={{ direction: 'rtl' }}
          >
            {theme === "dark" ? (
              <>
                <Sun className="ml-2 h-4 w-4" />
                الوضع النهاري
              </>
            ) : (
              <>
                <Moon className="ml-2 h-4 w-4" />
                الوضع الليلي
              </>
            )}
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}