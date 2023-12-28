"use client";

import { topbarData } from "@/actions/home-page";
import Navbar from "@/components/Navbar";
import useTextData from "../../../hooks/use-getText";
import { useEffect, useState } from "react";

const HomePage = ({ children }) => {
  
  return (
    <div className=" flex flex-col h-screen bg-customGrey100">
      <Navbar navbarData={topbarData} />
      {children}
    </div>
  );
};

export default HomePage;
