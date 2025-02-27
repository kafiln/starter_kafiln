import { Message as MessageType } from "@/lib/api/types";

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isBold = message.is_user_message ? "font-bold" : "";
  return <div className={`${isBold}`}>{message.content}</div>;
};

export default Message;
