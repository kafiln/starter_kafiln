import FolderItem from "@/components/modules/sidebar/folder-item";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Conversation, Folder } from "@/lib/api/types";
import { Collapsible } from "@radix-ui/react-collapsible";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

interface FoldersListProps {
  folders: Folder[];
  conversations: Conversation[] | undefined;
  pathname: string;
  title?: string;
  onCreateFolder: () => void;
  onConversationMoved?: () => void;
}

export function FoldersList({
  folders,
  conversations,
  pathname,
  title,
  onCreateFolder = () => {
    console.log("create folder");
  },
  onConversationMoved,
}: FoldersListProps) {
  // State to track which folder is currently open
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);

  // Function to handle folder toggle
  const handleFolderToggle = (folderId: string, isOpen: boolean) => {
    setOpenFolderId(isOpen ? folderId : null);
  };

  if (!folders || folders.length === 0) return null;

  return (
    <SidebarGroup>
      {title && (
        <SidebarGroupLabel>
          <div className="flex justify-between w-full">
            <Label>{title}</Label>
            <PlusIcon
              className="cursor-pointer"
              onClick={onCreateFolder}
              size={16}
            />
          </div>
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {folders.map((folder) => (
            <Collapsible
              key={folder.id}
              asChild
              defaultOpen={false}
              open={openFolderId === folder.id}
              onOpenChange={(isOpen) => handleFolderToggle(folder.id, isOpen)}
              className="group/collapsible"
            >
              <FolderItem
                folder={folder}
                conversations={conversations}
                pathname={pathname}
                onConversationMoved={onConversationMoved}
              />
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
