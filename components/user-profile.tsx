import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserResource } from "@clerk/types";
import { Mail, Phone } from "lucide-react";

const getRandomGradient = () => {
  const gradients = [
    "from-blue-500 to-green-500",
    "from-red-500 to-yellow-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-purple-500",
    "from-teal-500 to-cyan-500",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const UserProfileCard = ({ user }: { user: UserResource }) => {
  return (
    <Card className="max-w-sm w-full mx-auto shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sm:max-w-md md:max-w-lg lg:max-w-xl">
      <CardHeader
        className={`flex flex-col items-center text-center p-6 bg-gradient-to-r ${getRandomGradient()} text-white dark:opacity-90`}
      >
        <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-white dark:border-gray-800 shadow-lg">
          <AvatarImage
            src={user.imageUrl}
            alt={`${user.firstName} ${user.lastName}`}
          />
          <AvatarFallback>
            {user.firstName?.split(" ")[0]}
            {user.lastName?.split(" ")[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-3 text-xl md:text-2xl font-bold">
          {user.firstName} {user.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 text-gray-700 dark:text-gray-300">
        <Separator className="my-4 dark:bg-gray-700" />
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-300" />
            <span className="text-sm md:text-base font-medium break-words">
              {user.emailAddresses[0].emailAddress}
            </span>
          </div>
          {user && user.phoneNumbers && user.phoneNumbers.length > 0 && (
            <div className="flex items-center gap-2 md:gap-3">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-300" />
              <span className="text-sm md:text-base font-medium">
                {user.phoneNumbers[0].phoneNumber}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
