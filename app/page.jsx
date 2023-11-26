"use client";

import useLogin from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const users = useLogin();
  const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
  
    if (!isMounted) {
      return null;
    }
  

  if (users.user) {
    // console.log(users);
    redirect("/homepage");
  }
  
  if (!users.user) {
    // console.log(users);
    redirect("/login");
  }

  return <div>a</div>;
};

export default Home;
