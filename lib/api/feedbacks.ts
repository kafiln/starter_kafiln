import axiosInstance from "@/lib/axios-instance";
import { useMutation } from "@tanstack/react-query";

// feedbackService.ts
type FeedbackResponse = {
  created_at: string;
  content: string | null;
  id: string;
  is_positive: boolean;
  message_id: string;
};

type FeedbackCreate = {
  content: string | null;
  is_positive: boolean;
  message_id: string;
};

export const submitFeedback = async (
  feedbackData: FeedbackCreate
): Promise<FeedbackResponse> => {
  const response = await axiosInstance.post("/feedbacks/", feedbackData);
  return response.data;
};
export const fetchFeedbackForMessage = async (
  messageId: string
): Promise<FeedbackResponse> => {
  const response = await axiosInstance.get("/feedbacks/" + messageId);
  return response.data;
};

// Create the mutation hook useSubmitFeedback
export const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: submitFeedback,
  });
};
