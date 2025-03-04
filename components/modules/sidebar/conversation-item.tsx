import ConversationItemMenu from "@/components/modules/sidebar/conversation-item-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Conversation } from "@/lib/api/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

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
  const [isDragging, setIsDragging] = useState(false);
  const url = `/chat/${conversation.id}`;

  const onDragStart = (event: React.DragEvent) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData("conversationId", conversation.id);
      setIsDragging(true);
      event.stopPropagation();
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <SidebarMenuItem
      key={conversation.id}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={isDragging ? "opacity-50" : ""}
    >
      <SidebarMenuButton asChild isActive={pathname === url}>
        <Link href={url}>{conversation.name}</Link>
      </SidebarMenuButton>
      <ConversationItemMenu
        onDeleteConversation={() => {
          onDeleteConversation(conversation.id);
          redirect("/chat");
        }}
      />
    </SidebarMenuItem>
  );
}
