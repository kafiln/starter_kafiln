"use client";
import LoadingSpinner from "@/components/loading-spinner";
import { MessageInput } from "@/components/ui/message-input";
import { MessageList } from "@/components/ui/message-list";
import { CONVERSATIONS, MESSAGES } from "@/constants/queryKeys";
import { getConversationByid } from "@/lib/api/conversations";
import { fetchMessages, sendMessage } from "@/lib/api/messages";
import { Message as MessageLocalInput } from "@/lib/api/types";
import { ChatMessageList } from "@/src/components/ui/chat/chat-message-list";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const mapInternalMessagesToMessages = (
  messages: MessageLocalInput[]
): { id: string; role: string; content: string; createdAt: Date }[] => {
  return messages
    .sort((a, b) => a.order - b.order)
    .map((message) => {
      return {
        id: message.id,
        role: message.is_user_message ? "user" : "assistant",
        content: message.content,
        createdAt: new Date(message.created_at),
      };
    });
};

export default function ChatPage() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  const sendMessageMutation = useMutation({
    mutationFn: sendMessage,
    onMutate: () => {
      console.log("Mutating ...");
      setValue("");
      setContent("");
      setIsStreaming(true);
    },
    onSuccess: async (stream: ReadableStream) => {
      setContent("");
      setIsStreaming(true);
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        const chunk = decoder.decode(value);
        accumulatedContent += chunk;
        setContent(accumulatedContent);
      }
      queryClient.invalidateQueries({ queryKey: [CONVERSATIONS, id] });
      queryClient
        .invalidateQueries({
          queryKey: [MESSAGES, id],
        })
        .then(() => {
          setContent("");
          setUserQuestion("");
          setIsStreaming(false);
        });
    },
  });

  const { data: conversation } = useQuery({
    queryKey: [CONVERSATIONS, id],
    queryFn: () => getConversationByid(id),
  });

  const { data: messages, isLoading } = useQuery({
    queryKey: [MESSAGES, id],
    queryFn: () => fetchMessages(id),
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages, messages?.length, content]);

  if (isLoading) return <LoadingSpinner />;

  const handleSubmit = () => {
    setUserQuestion(value);
    sendMessageMutation.mutate({
      conversationId: id,
      content: value,
      getToken,
      withSearch: false,
    });
  };

  return (
    <div className="flex h-full flex-col space-y-2 px-2" id="chat-container">
      <div className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex flex-col items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {conversation?.name}
          </h2>
          <ChatMessageList>
            {messages && messages.length > 0 && (
              <MessageList messages={mapInternalMessagesToMessages(messages)} />
            )}
            {isStreaming && (
              <MessageList
                isTyping={content.length === 0}
                messages={[
                  {
                    id: new Date().toISOString() + "sqdfds",
                    role: "user",
                    content: userQuestion,
                    createdAt: new Date(),
                  },
                  {
                    id: new Date().toISOString(),
                    role: "assistant",
                    content,
                    createdAt: new Date(),
                  },
                ]}
              />
            )}
          </ChatMessageList>
        </div>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <MessageInput
            submitOnEnter
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            allowAttachments={false}
            stop={() => {
              console.log("Stoping ...");
            }}
            isGenerating={false}
          />
        </form>
      </div>
      <div>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
