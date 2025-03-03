import { CONVERSATIONS, FOLDERS } from "@/constants/queryKeys";
import {
  createConversation,
  deleteConversation,
  fetchAllConversations,
} from "@/lib/api/conversations";
import { createFolder, fetchFolders } from "@/lib/api/folders";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSidebarData() {
  const client = useQueryClient();
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

  const { mutate: addNewConversation } = useMutation({
    mutationFn: () => createConversation({ name: "New Chat" }),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [CONVERSATIONS],
      });
    },
  });

  const { mutate: addNewFolder } = useMutation({
    mutationFn: () => createFolder({ name: "New Folder", color: "white" }),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [FOLDERS],
      });
    },
  });

  const { mutate: removeConversation } = useMutation({
    mutationFn: (id: string): Promise<void> => deleteConversation(id),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [CONVERSATIONS],
      });
    },
  });

  return {
    conversations: conversations?.sort((a, b) =>
      b.created_at.localeCompare(a.created_at)
    ),
    standaloneConversations,
    folders,
    addNewFolder,
    addNewConversation,
    removeConversation,
  };
}
