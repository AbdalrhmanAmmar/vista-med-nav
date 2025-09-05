import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="medical-rep-theme">
        <TooltipProvider>
          <SidebarProvider defaultOpen={true}>
            <div className="min-h-screen flex w-full">
              <SidebarInset>
                <header className="h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="flex items-center gap-2 px-4" style={{ direction: 'rtl' }}>
                    <h1 className="text-lg font-semibold text-foreground">نظام إدارة المندوبين الطبيين</h1>
                  </div>
                  <SidebarTrigger className="mr-4 ml-auto" />
                </header>
                
                <main className="flex-1 p-6 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/dashboards" element={<Dashboard />} />
                    <Route path="/reports" element={<Dashboard />} />
                    <Route path="/visits" element={<Dashboard />} />
                    <Route path="/orders" element={<Dashboard />} />
                    <Route path="/collections" element={<Dashboard />} />
                    <Route path="/evaluations" element={<Dashboard />} />
                    <Route path="/management" element={<Dashboard />} />
                    <Route path="/users" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </SidebarInset>
              <AppSidebar />
            </div>
          </SidebarProvider>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
