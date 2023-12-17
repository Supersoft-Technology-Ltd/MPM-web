"use client";
import { DashboardHeader } from "./header";
import Sidebar from "./sidebar";
import { ReactNode } from "react";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full relative bg-hero-pattern h-[100vh] bg-container bg-center bg-cover ">
      <Sidebar />
      <div className="">
        <DashboardHeader />
        <div className="mt-[125px] w-[80%] pt-2 ml-[20%] px-6 relative">{children}</div>
      </div>
    </div>
  );
};
