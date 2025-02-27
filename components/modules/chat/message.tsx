import { Message as MessageType } from "@/lib/api/types";

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.is_user_message;
  return (
    <div
      className={`${
        isUser ? "bg-primary self-end text-white" : "self-start bg-gray-100"
      } p-4 my-2 rounded-xl`}
    >
      {message.content}
    </div>
  );
};

export default Message;
