"use client";
import LoadingSpinner from "@/components/loading-spinner";
import Message from "@/components/modules/chat/message";
import { CONVERSATIONS, MESSAGES } from "@/constants/queryKeys";
import { getConversationByid } from "@/lib/api/conversations";
import { fetchMessages } from "@/lib/api/messages";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

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
          {messages && messages.length > 0 && (
            <div className="flex flex-col items-center space-y-4">
              <span className="text-sm text-gray-500">
                {messages.length} messages
              </span>
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
