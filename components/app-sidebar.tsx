"use client";
import { Home, Inbox, Sparkles, User } from "lucide-react";
import * as React from "react";

const items: NavItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard/user-profile",
    icon: User,
  },
  {
    title: "Ask AI",
    url: "#",
    icon: Sparkles,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    badge: "10",
  },
];

import { Logo } from "@/components/logo";
import { NavItem, NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // get current url
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Favorites</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <NavMain
              items={items.map((item) => ({
                ...item,
                isActive: item.url === pathname,
              }))}
            />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="#">Tourba</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="#">SP2M</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
