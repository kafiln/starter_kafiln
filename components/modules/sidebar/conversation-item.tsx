import ConversationItemMenu from "@/components/modules/sidebar/conversation-item-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";

import Link from "next/link";

interface ConversationItemProps {
  conversation: Conversation;
  pathname: string;
  onDeleteConversation: (id: string) => void;
}

export function ConversationItem({
  conversation,
  pathname,
  onDeleteConversation,
}: ConversationItemProps) {
  const url = `/chat/${conversation.id}`;

  return (
    <SidebarMenuItem key={conversation.id}>
      <SidebarMenuButton asChild isActive={pathname === url}>
        <Link href={url}>{conversation.name}</Link>
      </SidebarMenuButton>
      <ConversationItemMenu
        onDeleteConversation={() => onDeleteConversation(conversation.id)}
      />
    </SidebarMenuItem>
  );
}
