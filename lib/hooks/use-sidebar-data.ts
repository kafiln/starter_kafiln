import { CONVERSATIONS, FOLDERS } from "@/constants/queryKeys";
import { fetchAllConversations } from "@/lib/api/conversations";
import { fetchFolders } from "@/lib/api/folders";
import { useQuery } from "@tanstack/react-query";

export function useSidebarData() {
  const { data: conversations } = useQuery({
    queryKey: [CONVERSATIONS],
    queryFn: fetchAllConversations,
  });

  const { data: folders } = useQuery({
    queryKey: [FOLDERS],
    queryFn: fetchFolders,
  });

  const standaloneConversations = conversations?.filter(
    (conversation) => !conversation.folder_id
  );

  return {
    conversations,
    standaloneConversations,
    folders,
  };
}
