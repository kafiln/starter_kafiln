import { Message } from "@/lib/api/types";
import axiosInstance, { GetToken } from "@/lib/axios-instance";

export const fetchMessages = async (
  conversationId?: string
): Promise<Message[]> => {
  const response = await axiosInstance.get(
    `/conversations/${conversationId}/messages`
  );
  return response.data;
};

export const sendMessage = async ({
  conversationId,
  content,
  getToken,
  withSearch = false,
}: {
  conversationId: string;
  content: string;
  getToken: GetToken;
  withSearch: boolean;
}): Promise<ReadableStream<Uint8Array>> => {
  const token = await getToken();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}messages/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content,
      conversation_id: conversationId,
      search_toggle: withSearch,
    }),
  });

  if (!response.body) {
    throw new Error("ReadableStream not supported in this environment.");
  }

  return response.body; // Web Streams API's ReadableStream
};
