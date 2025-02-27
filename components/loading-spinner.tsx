import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
}
