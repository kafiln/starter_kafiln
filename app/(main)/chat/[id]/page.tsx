"use client";
import LoadingSpinner from "@/components/loading-spinner";
import { MessageList } from "@/components/ui/message-list";
import { CONVERSATIONS, MESSAGES } from "@/constants/queryKeys";
import { getConversationByid } from "@/lib/api/conversations";
import { fetchMessages } from "@/lib/api/messages";
import { Message as MessageInput } from "@/lib/api/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const mapInternalMessagesToMessages = (
  messages: MessageInput[]
): { id: string; role: string; content: string; createdAt: Date }[] => {
  return messages.map((message) => {
    return {
      id: message.id,
      role: message.is_user_message ? "user" : "assistant",
      content: message.content,
      createdAt: new Date(message.created_at),
    };
  });
};

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();

  const { data: conversation } = useQuery({
    queryKey: [CONVERSATIONS, id],
    queryFn: () => getConversationByid(id),
  });

  const { data: messages, isLoading } = useQuery({
    queryKey: [MESSAGES, id],
    queryFn: () => fetchMessages(id),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex flex-col items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {conversation?.name}
          </h2>
          <div className="py-4">
            {messages && messages.length > 0 && (
              <MessageList
                messages={mapInternalMessagesToMessages(messages)}
                isTyping={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
