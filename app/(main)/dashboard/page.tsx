"use client";
import { fetchFolders } from "@/lib/api/folders";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data } = useQuery({
    queryKey: ["folders"],
    queryFn: fetchFolders,
  });
  console.log(data);
  return <div></div>;
};

export default DashboardPage;
