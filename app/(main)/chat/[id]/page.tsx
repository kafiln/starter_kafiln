"use client";
import LoadingSpinner from "@/components/loading-spinner";
import { MessageList } from "@/components/ui/message-list";
import { CONVERSATIONS, MESSAGES } from "@/constants/queryKeys";
import { getConversationByid } from "@/lib/api/conversations";
import { fetchMessages } from "@/lib/api/messages";
import { Message as MessageLocalInput } from "@/lib/api/types";
import { ChatMessageList } from "@/src/components/ui/chat/chat-message-list";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

const mapInternalMessagesToMessages = (
  messages: MessageLocalInput[]
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("Scrolling to bottom");
  }, []); // Runs once when the component mounts

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex h-full flex-col space-y-2 px-2" id="chat-container">
      <div className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex flex-col items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {conversation?.name}
          </h2>
          <ChatMessageList>
            {messages && messages.length > 0 && (
              <MessageList
                messages={mapInternalMessagesToMessages(messages)}
                isTyping={false}
              />
            )}
          </ChatMessageList>
        </div>
      </div>
      <div>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
