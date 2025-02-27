"use client";
import LoadingSpinner from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import UserProfileCard from "@/components/user-profile";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["exampleData"],
    queryFn: fetchExampleData,
  });

  if (isFetching) return <LoadingSpinner />;
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
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default DashboardPage;
