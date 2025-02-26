export type Folder = {
  id: string;
  name: string;
  color?: string;
};

export type Conversation = {
  id: string;
  name: string;
  folder_id?: string;
  created_at: string;
};

export type Message = {
  id: string;
  content: string;
  created_at: string;
  conversation_id: string;
  is_user_message: boolean;
  order: number;
  source?: [SourceItem];
};
export type SourceItem = {
  title: string;
  link: string;
};

export type User = {
  id: string;
  name: string | undefined;
  email: string | undefined;
  picture: string | undefined;
};
