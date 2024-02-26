"use client";
import { DashboardHeader } from "./header";
import Sidebar from "./sidebar";
import { ReactNode, useState } from "react";
import { useMediaQuery } from "../../hooks/usemediaquery";
import { MobileSidebar } from "./mobile-sidebar";
import { MobileHeader } from "./mobile-header";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const matches = useMediaQuery("(min-width: 767px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="w-full overflow-auto relative bg-hero-pattern h-screen pb-12 bg-container bg-center bg-cover ">
      {matches ? <Sidebar /> : openDrawer && <MobileSidebar setOpenDrawer={setOpenDrawer} />}
      <div className="">
        {matches ? (
          <DashboardHeader />
        ) : (
          <MobileHeader setOpenDrawer={setOpenDrawer} />
        )}
        <div className="mt-[115px] lg:w-[82%] w-full md:w-[77%] pt-2 lg:ml-[18%] md:ml-[22%] px-6 relative">
          {children}
        </div>
      </div>
    </div>
  );
};
