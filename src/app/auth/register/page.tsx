"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setUser, registerUser } from "@/lib/store/feature/user/userSlice";

const UserRegister = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const handleRegister = (e: any) => {
    e.preventDefault();
    // dispatch(setUser({ id: 1, token: "1234" }));
    dispatch(
      registerUser({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );

    router.push("/home");

    console.log(e.target.email.value, e.target.password.value);
    console.log("Registering user...");
  };

  return (
    <Card className="w-[350px] shadow-lg">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-center text-2xl font-bold">
          User Registration The use is {user?.token}
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-center mb-4">
        Register to access our services.
      </CardDescription>
      <CardContent>
        <form onSubmit={handleRegister}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <Button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 mt-4"
            >
              Register
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserRegister;
