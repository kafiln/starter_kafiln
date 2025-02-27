import { NavItem } from "@/components/nav-main";
import { Home, Sparkles, User } from "lucide-react";

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard/user-profile",
    icon: User,
  },
  {
    title: "Ask AI",
    url: "/dashboard/chat",
    icon: Sparkles,
  },
];
