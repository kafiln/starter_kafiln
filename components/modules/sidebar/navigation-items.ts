import { NavItem } from "@/components/nav-main";
import { HelpCircle, Home, Settings, User } from "lucide-react";

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
  {
    title: "Settings",
    url: "/chat/settings",
    icon: Settings,
  },
  {
    title: "FAQ",
    url: "/chat/faq",
    icon: HelpCircle,
  },
];
