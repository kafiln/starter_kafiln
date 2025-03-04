"use client";

import { Input } from "@/components/ui/input";
import { createConversation } from "@/lib/api/conversations";
import { sendMessage } from "@/lib/api/messages";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChatLandingPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { getToken } = useAuth();

  const createConversationMutation = useMutation({
    mutationFn: (name: string) => createConversation({ name }),
    onSuccess: async (conversation) => {
      // Send the initial message
      // Redirect to the new conversation
      router.push(`/chat/${conversation.id}`);
      await sendMessage({
        conversationId: conversation.id,
        content,
        getToken,
        withSearch: false,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setContent(inputValue);
    setInputValue("");

    // Create a new conversation with the input as the name
    createConversationMutation.mutate(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl">Hi 👋</h1>
        <h2 className="text-xl">How can I help you today ?</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-1/2">
        <Input
          className="dark:bg-gray-800"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatLandingPage;
