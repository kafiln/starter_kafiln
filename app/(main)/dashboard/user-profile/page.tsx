"use client";
import { Button } from "@/components/ui/button";
import UserProfileCard from "@/components/user-profile";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["exampleData"],
    queryFn: fetchExampleData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-8 p-2">
      <div className="flex justify-end">
        <Button onClick={() => refetch()}>New user</Button>
      </div>
      {data && data.results[0] && <UserProfileCard user={data.results[0]} />}
    </div>
  );
};

const fetchExampleData = async () => {
  const response = await fetch("https://randomuser.me/api/");
  console.log(response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default DashboardPage;
