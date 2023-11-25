"use client";

import useLogin from "@/hooks/use-auth";
import { redirect } from "next/navigation";

const Home = () => {
  const user = useLogin();

  if (user.user) {
    redirect("/homepage");
  }

  if (!user.user) {
    redirect("/login");
  }

  return <div>a</div>;
};

export default Home;
