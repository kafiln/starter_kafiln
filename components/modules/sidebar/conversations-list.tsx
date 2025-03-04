import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { unassignConversationFolder } from "@/lib/api/conversations";
import { Conversation } from "@/lib/api/types";
import { useMutation } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { ConversationItem } from "./conversation-item";

interface ConversationsListProps {
  conversations?: Conversation[];
  pathname: string;
  title?: string;
  onCreateConversation?: () => void;
  onDeleteConversation?: (id: string) => void;
  onConversationMoved?: () => void;
}

export function ConversationsList({
  conversations,
  pathname,
  title,
  onCreateConversation = () => {},
  onDeleteConversation = () => {},
  onConversationMoved,
}: ConversationsListProps) {
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const { mutate: updateConversationMutation } = useMutation({
    mutationFn: unassignConversationFolder,
  });

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const conversationId = e.dataTransfer.getData("conversationId");
    if (!conversationId) return;

    try {
      updateConversationMutation(conversationId);
      onConversationMoved?.();
    } catch (error) {
      console.error("Failed to move conversation:", error);
    }
  };

  if (!conversations || conversations.length === 0) return null;

  return (
    <SidebarGroup onDragOver={onDragOver} onDrop={onDrop}>
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
