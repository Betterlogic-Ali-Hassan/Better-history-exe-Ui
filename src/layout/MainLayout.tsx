import Header from "@/components/header/Header";
import TopBar from "@/components/header/TopBar";
import Sidebar from "@/components/sidebar/Sidebar";
import ThemeCards from "@/components/themeCards/ThemeCards";
import { usePageContext } from "@/context/PageContext";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  const { page } = usePageContext();
  return (
    <div
      className={cn(
        "flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen bg-background ",
        className
      )}
    >
      <Header />
      {page !== "blackList" && <TopBar />}
      <ThemeCards />
      {children}
      <Sidebar />
    </div>
  );
}
