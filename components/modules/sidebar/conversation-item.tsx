import ConversationItemMenu from "@/components/modules/sidebar/conversation-item-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";

import Link from "next/link";

interface ConversationItemProps {
  conversation: Conversation;
  pathname: string;
}

export function ConversationItem({
  conversation,
  pathname,
}: ConversationItemProps) {
  const url = `/dashboard/chat/${conversation.id}`;

  return (
    <SidebarMenuItem key={conversation.id}>
      <SidebarMenuButton asChild isActive={pathname === url}>
        <Link href={url}>{conversation.name}</Link>
      </SidebarMenuButton>
      <ConversationItemMenu />
    </SidebarMenuItem>
  );
}
