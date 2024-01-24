"use client";
import { DashboardHeader } from "./header";
import Sidebar from "./sidebar";
import { ReactNode } from "react";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-auto relative bg-hero-pattern h-screen pb-12 bg-container bg-center bg-cover ">
      <Sidebar />
      <div className="">
        <DashboardHeader />
        <div className="mt-[115px] w-[82%] pt-2 ml-[18%] px-6 relative">{children}</div>
      </div>
    </div>
  );
};
