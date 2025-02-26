import { Folder } from "@/lib/api/types";
import axiosInstance from "@/lib/axios-instance";

export const fetchFolders = async (): Promise<Folder[]> => {
  const response = await axiosInstance.get("/folders/");
  return response.data;
};

export const createFolder = async (folderData: {
  name: string;
  color?: string;
}): Promise<Folder> => {
  const response = await axiosInstance.post("/folders/", folderData);
  return response.data;
};

export const updateFolder = async (
  folderId: string,
  folderData: { name?: string; color?: string }
): Promise<Folder> => {
  const response = await axiosInstance.put(`/folders/${folderId}`, folderData);
  return response.data;
};

export const deleteFolder = async (folderId: string): Promise<void> => {
  await axiosInstance.delete(`/folders/${folderId}`);
};
