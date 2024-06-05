"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import { setUser } from "@/lib/store/feature/user/userSlice";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // const cachedUser = localStorage.getItem("user");
    // if (cachedUser) {
    //   // If the user is not null, set the User
    //   storeRef.current.dispatch(setUser(JSON.parse(cachedUser)));
    // }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
