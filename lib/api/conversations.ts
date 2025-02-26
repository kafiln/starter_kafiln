import { Conversation } from "@/lib/api/types";
import axiosInstance from "@/lib/axios-instance";

export const fetchConversations = async (
  folderId?: string
): Promise<Conversation[]> => {
  const url = folderId
    ? `/folders/${folderId}/conversations`
    : "/conversations/";
  const response = await axiosInstance.get(url);
  return response.data;
};

export const createConversation = async (conversationData: {
  name: string;
  folder_id?: string | null;
}): Promise<Conversation> => {
  const response = await axiosInstance.post(
    "/conversations/",
    conversationData
  );
  return response.data;
};

export const updateConversation = async (
  conversationId: string,
  conversationData: { name?: string; folder_id?: string }
): Promise<Conversation> => {
  const response = await axiosInstance.put(
    `/conversations/${conversationId}`,
    conversationData
  );
  return response.data;
};
export const unassignConversationFolder = async (
  conversationId: string
): Promise<Conversation> => {
  const response = await axiosInstance.put(
    `/conversations/${conversationId}/unassign`
  );
  return response.data;
};

export const deleteConversation = async (
  conversationId: string
): Promise<void> => {
  await axiosInstance.delete(`/conversations/${conversationId}`);
};
