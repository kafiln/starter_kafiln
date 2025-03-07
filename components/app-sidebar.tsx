"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useMemo } from "react";

import { LogoInMenu } from "@/components/logo";
import { ConversationsList } from "@/components/modules/sidebar/conversations-list";
import { FoldersList } from "@/components/modules/sidebar/folders-list";
import { navigationItems } from "@/components/modules/sidebar/navigation-items";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CONVERSATIONS } from "@/constants/queryKeys";
import { useSidebarData } from "@/lib/hooks/use-sidebar-data";
import { useQueryClient } from "@tanstack/react-query";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const query = useQueryClient();
  const { user } = useUser();
  const {
    conversations,
    standaloneConversations,
    folders,
    addNewConversation,
    addNewFolder,
    removeConversation,
  } = useSidebarData();

  const navItems = useMemo(() => 
    navigationItems.map((item) => ({
      ...item,
      isActive: item.url === pathname,
    })), [pathname]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <LogoInMenu />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <NavMain items={navItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <FoldersList
          folders={folders || []}
          conversations={conversations}
          pathname={pathname}
          title="Folders"
          onCreateFolder={addNewFolder}
          onConversationMoved={() =>
            query.invalidateQueries({
              queryKey: [CONVERSATIONS],
            })
          }
        />
        <ConversationsList
          title="Conversations"
          conversations={standaloneConversations || []}
          pathname={pathname}
          onCreateConversation={addNewConversation}
          onDeleteConversation={removeConversation}
          onConversationMoved={() =>
            query.invalidateQueries({
              queryKey: [CONVERSATIONS],
            })
          }
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
