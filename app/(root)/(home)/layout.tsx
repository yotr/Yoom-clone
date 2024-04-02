import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "YOOM",
  description: "Meetings App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-28 max-md:pb-14 max-md:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;
