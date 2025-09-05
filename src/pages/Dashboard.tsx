import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, ShoppingCart, DollarSign, TrendingUp, Calendar } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "إجمالي الزيارات",
      value: "1,247",
      change: "+12.5%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "الطلبات الجديدة", 
      value: "89",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-success"
    },
    {
      title: "المبيعات اليوم",
      value: "₹45,750",
      change: "+15.3%", 
      icon: DollarSign,
      color: "text-warning"
    },
    {
      title: "معدل النمو",
      value: "23.1%",
      change: "+2.4%",
      icon: TrendingUp,
      color: "text-primary-light"
    }
  ];

  return (
    <div className="space-y-8" style={{ direction: 'rtl' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">لوحة التحكم الرئيسية</h1>
          <p className="text-muted-foreground mt-2">مرحباً بك في نظام إدارة المندوبين الطبيين</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>اليوم: {new Date().toLocaleDateString('ar-SA')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-gradient-card shadow-card-medical hover:shadow-medical transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-primary/10 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-card shadow-card-medical">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">أداء الزيارات الشهرية</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">يناير</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-medical"></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">فبراير</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-medical"></div>
                </div>
                <span className="text-sm font-medium">80%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">مارس</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-medical"></div>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card shadow-card-medical">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">أفضل المندوبين</h3>
          </div>
          <div className="space-y-3">
            {["أحمد محمد", "فاطمة علي", "محمد حسن", "نور الدين"].map((name, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <span className="font-medium">{name}</span>
                </div>
                <Badge variant="secondary">
                  {100 - index * 15} زيارة
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;