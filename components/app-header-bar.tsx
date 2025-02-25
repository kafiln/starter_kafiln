import { ThemeToggle } from "@/components/theme-switch";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppHeaderBar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-slate-100 dark:bg-slate-800 border-b-2">
      <SidebarTrigger />
      <ThemeToggle />
    </div>
  );
};

export default AppHeaderBar;
