"use client";
import LoadingSpinner from "@/components/loading-spinner";
import UserProfileCard from "@/components/user-profile";
import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <LoadingSpinner />;

  return (
    <div className="flex flex-col gap-8 p-2">
      <div className="flex justify-end"></div>
      {user && <UserProfileCard user={user} />}
    </div>
  );
};

export default DashboardPage;
