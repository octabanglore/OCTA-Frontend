"use client";

import { getModuleData } from "@/actions/home-page";
import BodySection from "../components/BodySection";
import { useEffect, useState } from "react";
import useLogin from "@/hooks/use-auth";

const Modules = () => {
  const users = useLogin();
  const [moduleData, setModuleData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setModuleData(getModuleData(users));
  }, [users]);

  if (!isMounted) {
    return null;
  }

  return <BodySection cardData={moduleData} />;
};

export default Modules;
