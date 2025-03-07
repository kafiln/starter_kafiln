import { ConversationsList } from "@/components/modules/sidebar/conversations-list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import {
  ChevronRight,
  FolderIcon,
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";
import { useCallback } from "react";

interface FolderItemProps {
  folder: Folder;
  conversations: Conversation[] | undefined;
  pathname: string;
  onConversationMoved?: () => void;
  onFolderRename?: (id: string, name: string) => void;
  onFolderDelete?: (id: string) => void;
}

const FolderItem = ({
  folder,
  conversations,
  pathname,
  onConversationMoved,
  onFolderRename,
  onFolderDelete,
}: FolderItemProps) => {
  const folderConversation = conversations?.filter(
    (c) => c.folder_id === folder.id
  );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDrop = useCallback(async (e: React.DragEvent, folderId: string) => {
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
  }, [onConversationMoved]);

  return (
    <SidebarMenuItem
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, folder.id)}
    >
      <CollapsibleTrigger asChild disabled={folderConversation?.length === 0}>
        <SidebarMenuButton tooltip={folder.name}>
          <div className="flex items-center w-full">
            <FolderIcon size={16} className="mr-2" />
            <div className="flex gap-2 items-center justify-between w-full">
              <span>{folder.name}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="p-1 hover:bg-accent rounded-sm cursor-pointer">
                    <MoreVertical className="h-4 w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      onFolderRename?.(folder.id, folder.name);
                    }}
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      onFolderDelete?.(folder.id);
                    }}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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