"use client"

import { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-[#FFF] w-full h-[100%]">
            <Header />
            {children}
            <Footer />
        </div>
    )
}