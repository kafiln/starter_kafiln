import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Conversation, Folder } from "@/lib/api/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight, Folder as FolderIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { ConversationsList } from "./conversations-list";

interface FoldersListProps {
  folders: Folder[];
  conversations: Conversation[] | undefined;
  pathname: string;
  title?: string;
  onCreateFolder: () => void;
}

export function FoldersList({
  folders,
  conversations,
  pathname,
  title,
  onCreateFolder = () => {
    console.log("create folder");
  },
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
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={folder.name}>
                    <div className="flex items-center">
                      <FolderIcon size={16} className="mr-2" />
                      <span>{folder.name}</span>
                    </div>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <ConversationsList
                      conversations={conversations?.filter(
                        (conversation) => conversation.folder_id === folder.id
                      )}
                      pathname={pathname}
                    />
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
