import { Input } from "@/components/ui/input";

const ChatLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl">Hi 👋</h1>
        <h2 className="text-xl">How can I help you today ?</h2>
      </div>
      <div className="w-1/2 ">
        {/* I Need a proper colors in dark mode for this input */}
        <Input className="dark:bg-gray-800 " placeholder="Search..." />
      </div>
    </div>
  );
};

export default ChatLandingPage;
