import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

interface UserProfile {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  phone: string;
  cell: string;
  picture: {
    large: string;
  };
  nat: string;
}

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

const UserProfileCard = ({ user }: { user: UserProfile }) => {
  return (
    <Card className="max-w-sm w-full mx-auto shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sm:max-w-md md:max-w-lg lg:max-w-xl">
      <CardHeader
        className={`flex flex-col items-center text-center p-6 bg-gradient-to-r ${getRandomGradient()} text-white dark:opacity-90`}
      >
        <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-white dark:border-gray-800 shadow-lg">
          <AvatarImage
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <AvatarFallback>
            {user.name.first[0]}
            {user.name.last[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-3 text-xl md:text-2xl font-bold">
          {user.name.first} {user.name.last}
        </CardTitle>
        <Badge
          variant="secondary"
          className="mt-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 font-semibold px-3 py-1 rounded-full"
        >
          {user.nat}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 md:p-6 text-gray-700 dark:text-gray-300">
        <Separator className="my-4 dark:bg-gray-700" />
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-300" />
            <span className="text-sm md:text-base font-medium break-words">
              {user.email}
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-300" />
            <span className="text-sm md:text-base font-medium">
              {user.phone} / {user.cell}
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-300" />
            <span className="text-sm md:text-base font-medium break-words">
              {user.location.street.number} {user.location.street.name},{" "}
              {user.location.city}, {user.location.state},{" "}
              {user.location.country}, {user.location.postcode}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
