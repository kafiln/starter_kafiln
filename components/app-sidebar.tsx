"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/logo";
import { ConversationsList } from "@/components/modules/sidebar/conversations-list";
import { FoldersList } from "@/components/modules/sidebar/folders-list";
import { navigationItems } from "@/components/modules/sidebar/navigation-items";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useSidebarData } from "@/lib/hooks/use-sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user } = useUser();
  const { conversations, standaloneConversations, folders } = useSidebarData();

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
              items={navigationItems.map((item) => ({
                ...item,
                isActive: item.url === pathname,
              }))}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <FoldersList
          folders={folders || []}
          conversations={conversations}
          pathname={pathname}
          title="Folders"
        />
        <ConversationsList
          title="Conversations"
          conversations={standaloneConversations || []}
          pathname={pathname}
        />
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
