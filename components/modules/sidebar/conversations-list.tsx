import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "lucide-react";
import { ConversationItem } from "./conversation-item";

interface ConversationsListProps {
  conversations?: Conversation[];
  pathname: string;
  title?: string;
  onCreateConversation?: () => void;
  onDeleteConversation?: (id: string) => void;
}

export function ConversationsList({
  conversations,
  pathname,
  title,
  onCreateConversation = () => {
    console.log("create conversation");
  },
  onDeleteConversation = () => {
    console.log("delete conversation");
  },
}: ConversationsListProps) {
  if (!conversations || conversations.length === 0) return null;

  return (
    <SidebarGroup>
      {title && (
        <SidebarGroupLabel>
          <div className="flex justify-between w-full">
            <Label>{title}</Label>
            <PlusIcon
              className="cursor-pointer"
              onClick={onCreateConversation}
              size={16}
            />
          </div>
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              pathname={pathname}
              onDeleteConversation={onDeleteConversation}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
