"use client";
import AppHeaderBar from "@/components/app-header-bar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSetupAxiosInterceptors } from "@/lib/axios-instance";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSetupAxiosInterceptors();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-1 flex-col min-h-screen">
            <AppHeaderBar />
            <div className="flex-1">{children}</div>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
