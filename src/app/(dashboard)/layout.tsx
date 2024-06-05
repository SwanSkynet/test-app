"use client";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import React, { useEffect } from "react";
import { getUser } from "@/lib/store/feature/user/userSlice";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const user = useAppSelector((state) => state.user.user);
  
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">
          Dashboard of user {user?.id}
        </h1>
      </header>
      <main className="flex-grow p-4 overflow-auto">{children}</main>
      <footer className="p-4 bg-blue-500 text-white">
        <p>© 2022 My Company</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
