"use client";
import { ChevronRight, Home, Sparkles, User } from "lucide-react";
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
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { CONVERSATIONS, FOLDERS } from "@/constants/queryKeys";
import { fetchAllConversations } from "@/lib/api/conversations";
import { fetchFolders } from "@/lib/api/folders";
import { useUser } from "@clerk/nextjs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
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
          <SidebarGroup>
            <SidebarGroupLabel>Folders</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {folders.map((folder) => (
                  <Collapsible
                    key={folder.id}
                    asChild
                    defaultOpen={false}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={folder.name}>
                          {/* {item.icon && <item.icon />} */}
                          <span>{folder.name}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {conversations
                            ?.filter(
                              (conversations) =>
                                conversations.folder_id === folder.id
                            )
                            ?.map((conversation) => {
                              const url = `/dashboard/chat/${conversation.id}`;
                              return (
                                <SidebarMenuItem key={conversation.id}>
                                  <SidebarMenuButton
                                    asChild
                                    isActive={pathname === url}
                                  >
                                    <Link href={url}>{conversation.name}</Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              );
                            })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        {conversations && conversations.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Conversations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {conversations.map((conversation) => {
                  const url = `/dashboard/chat/${conversation.id}`;
                  return (
                    <SidebarMenuItem key={conversation.id}>
                      <SidebarMenuButton asChild isActive={pathname === url}>
                        <Link href={url}>{conversation.name}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
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
