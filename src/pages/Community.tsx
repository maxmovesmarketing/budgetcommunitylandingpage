
import { Sidebar, SidebarProvider, SidebarContent, SidebarTrigger, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, Users, Settings, Bell, MessageSquare } from "lucide-react";

const Community = () => {
  const menuItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Users, label: "Members", href: "#" },
    { icon: MessageSquare, label: "Discussions", href: "#" },
    { icon: Bell, label: "Notifications", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-lg font-semibold">Community</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild>
                        <a href={item.href} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome to the Community</h1>
          {/* Content will be added here */}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Community;

