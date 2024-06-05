"use client";
import React from "react";
import type { NextPage } from "next";
import { useAppSelector } from "@/lib/store/hooks/hooks";
interface HomePageProps {
  username: string;
}

const HomePage: NextPage<HomePageProps> = ({ username }) => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2">Hi, {user.id}!</p>
    </div>
  );
};

export default HomePage;
