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
    url: "/dashboard/chat",
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
import { CONVERSATIONS, FOLDERS } from "@/constants/queryKeys";
import { fetchAllConversations } from "@/lib/api/conversations";
import { fetchFolders } from "@/lib/api/folders";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user } = useUser();

  const { data: conversations } = useQuery({
    queryKey: [CONVERSATIONS],
    queryFn: fetchAllConversations,
  });

  const { data: folders } = useQuery({
    queryKey: [FOLDERS],
    queryFn: fetchFolders,
  });

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
        {folders && folders.length > 0 && (
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Folders</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {folders.map((folder) => (
                  <SidebarMenuItem key={folder.id}>
                    <SidebarMenuButton>{folder.name}</SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        {conversations && conversations.length > 0 && (
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Conversations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {conversations.map((conversation) => (
                  <SidebarMenuItem key={conversation.id}>
                    <SidebarMenuButton>
                      <Link href={`/dashboard/chat/${conversation.id}`}>
                        {conversation.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.fullName || "",
            email: user?.emailAddresses[0].emailAddress || "",
            avatar: user?.imageUrl || "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
