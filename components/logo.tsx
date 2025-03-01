"use client";

import { GalleryVerticalEnd } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PRODUCT_NAME } from "@/constants/names";

export function Logo() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <GalleryVerticalEnd className="size-4" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg">{PRODUCT_NAME}</h2>
      </div>
    </div>
  );
}

export function LogoInMenu() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Logo />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
