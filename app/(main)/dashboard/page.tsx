"use client";
import { CONVERSATIONS, FOLDERS } from "@/constants/queryKeys";
import { fetchAllConversations } from "@/lib/api/conversations";
import { fetchFolders } from "@/lib/api/folders";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data: folders } = useQuery({
    queryKey: [FOLDERS],
    queryFn: fetchFolders,
  });

  const { data: conversations } = useQuery({
    queryKey: [CONVERSATIONS],
    queryFn: fetchAllConversations,
  });
  console.log(folders);
  console.log(conversations);
  return <div></div>;
};

export default DashboardPage;
