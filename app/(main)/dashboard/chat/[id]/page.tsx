"use client";
import { useParams } from "next/navigation";

export default function ChatPage() {
  // get the id from the route
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Chat in conversation {id}
          </h2>
        </div>
      </div>
    </div>
  );
}
