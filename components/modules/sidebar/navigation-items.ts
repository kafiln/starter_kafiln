import { NavItem } from "@/components/nav-main";
import { Home, User } from "lucide-react";

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    url: "/chat/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/chat/user-profile",
    icon: User,
  },
];
