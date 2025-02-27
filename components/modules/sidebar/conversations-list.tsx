import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";
import { PlusIcon } from "lucide-react";
import { ConversationItem } from "./conversation-item";

interface ConversationsListProps {
  conversations?: Conversation[];
  pathname: string;
  title?: string;
  onCreateConversation?: () => void;
  onDeleteConversation?: () => void;
}

export function ConversationsList({
  conversations,
  pathname,
  title,
  onCreateConversation = () => {
    console.log("create conversation");
  },
  onDeleteConversation = () => {
    console.log("create conversation");
  },
}: ConversationsListProps) {
  if (!conversations || conversations.length === 0) return null;

  return (
    <SidebarGroup>
      {title && (
        <SidebarGroupLabel>
          <div className="flex justify-between w-full">
            <h1 className="text-base font-semibold text-black">{title}</h1>
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
