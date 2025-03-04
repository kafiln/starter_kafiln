import { ConversationsList } from "@/components/modules/sidebar/conversations-list";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { updateConversation } from "@/lib/api/conversations";
import { Conversation, Folder } from "@/lib/api/types";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight, FolderIcon } from "lucide-react";

interface FolderItemProps {
  folder: Folder;
  conversations: Conversation[] | undefined;
  pathname: string;
  onConversationMoved?: () => void;
}

const FolderItem = ({
  folder,
  conversations,
  pathname,
  onConversationMoved,
}: FolderItemProps) => {
  const folderConversation = conversations?.filter(
    (c) => c.folder_id === folder.id
  );
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = async (e: React.DragEvent, folderId: string) => {
    e.preventDefault();
    e.stopPropagation();

    const conversationId = e.dataTransfer.getData("conversationId");
    if (!conversationId) return;

    try {
      await updateConversation(conversationId, { folder_id: folderId });
      onConversationMoved?.();
    } catch (error) {
      console.error("Failed to move conversation:", error);
    }
  };

  return (
    <SidebarMenuItem
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, folder.id)}
    >
      <CollapsibleTrigger asChild disabled={folderConversation?.length === 0}>
        <SidebarMenuButton tooltip={folder.name}>
          <div className="flex items-center">
            <FolderIcon size={16} className="mr-2" />
            <div className="flex gap-2">
              <span>{folder.name}</span>
              {/* <Badge
                className="text-xs p-0 rounded-sm border"
                variant={"secondary"}
              >
                {folderConversation?.length}
              </Badge> */}
            </div>
          </div>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <ConversationsList
            conversations={folderConversation}
            pathname={pathname}
          />
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  );
};

export default FolderItem;
