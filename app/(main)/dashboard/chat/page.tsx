import { Input } from "@/components/ui/input";

const ChatLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl dark:text-gray-200">Hi 👋</h1>
        <h2 className="text-xl dark:bg-gray-800 dark:text-gray-300">
          How can I help you today ?
        </h2>
      </div>
      <div className="w-1/2">
        <Input placeholder="Search..." />
      </div>
    </div>
  );
};

export default ChatLandingPage;
