import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";
import { ConversationItem } from "./conversation-item";

interface ConversationsListProps {
  conversations?: Conversation[];
  pathname: string;
  title?: string;
}

export function ConversationsList({
  conversations,
  pathname,
  title,
}: ConversationsListProps) {
  if (!conversations || conversations.length === 0) return null;

  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
