"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function DualSidebars() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="flex fixed inset-y-0">
      <div
        className={`custom-bg-secondary transition-all duration-300 overflow-y-auto flex flex-col justify-between
        ${isLeftOpen ? "w-[200px]" : "w-[72px]"}`}
      >
        <div>
          <div className="custom-text-primary custom-bg-grey000 w-12 h-9 my-6 mx-3 flex place-items-center justify-center rounded-[8px]">
            O
          </div>
          <div className="h-6  flex place-items-center justify-center custom-text-grey000  ">
            <Separator className="h-[0.5px] w-7 ml-3" />
            <button
              className="hover:custom-bg-secondary"
              onClick={() => setIsLeftOpen(!isLeftOpen)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div>
          <button onClick={() => setIsLeftOpen(!isLeftOpen)}>
            Toggle Left
          </button>
          {isLeftOpen && <div className="px-4">Left Links</div>}
        </div>
      </div>

      {
        //! right navbar
      }

      <div
        className={` custom-bg-grey200 relative transition-all duration-300 ml-auto
        ${isRightOpen ? "w-[200px]" : "w-[40px]"}`}
      >
        {!isRightOpen && (
          <div className="absolute inset-y-0 right-1/2 ml-px">
            <div className="custom-bg-primary h-full w-px relative">
              <div className="custom-bg-grey200 absolute top-1/2 -translate-y-1/2 p-[18px] -translate-x-1/2">
                <div className="custom-bg-primary rounded-full custom-text-grey000  absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-6 w-6">
                  <button
                    className="hover:custom-bg-secondary rounded-full"
                    onClick={() => setIsRightOpen(!isRightOpen)}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isRightOpen && (
          <div className=" flex justify-end ">
            <div className="custom-bg-grey200 rounded-full custom-text-grey800 mt-5 mr-4 h-6 w-6">
              <button
                className="hover:custom-bg-grey100 rounded-full"
                onClick={() => setIsRightOpen(!isRightOpen)}
              >
                <ChevronLeft />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const SidebarIcon = ({ icon, href }) => {
//   const router = useRouter();
//   const isActive = router.asPath === href;

//   return (
//     <Link href={href}>
//       <a className={`sidebar-icon ${isActive && 'active'}`}>
//         {icon}
//       </a>
//     </Link>
//   );
// };

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <SidebarIcon icon={<HomeIcon />} href="/" />
//       <SidebarIcon icon={<DocumentIcon />} href="/page2" />
//       <SidebarIcon icon={<UserIcon />} href="/page3" />
//       <SidebarIcon icon={<SettingsIcon />} href="/settings" />
//     </div>
//   );
// };
