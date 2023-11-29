"use client";

import { Bell, Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logoutIcon } from "./svgs/ModulesPageIcons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import useTextData from "../hooks/use-getText";


const Navbar = (props) => {
  const pathname = usePathname();
  const { textData } = useTextData();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="custom-bg-secondary w-full h-16  flex justify-between items-center">
      <div className="custom-bg-grey000 h-8 w-[122px] m-[16px_48px] rounded-lg custom-bg-primary flex items-center justify-center">
        Octa
      </div>
      <div className="custom-s1 custom-text-grey100 flex justify-between items-center space-x-10 h-full ">
        {props.navbarData.bulletins && (
          <div
            key={props.navbarData.bulletins}
            className={`h-full flex justify-between items-center ${
              pathname === "/bulletins" &&
              "custom-border-b-grey200 border-b-[2.4px]"
            } `}
          >
            <Link href="bulletins">{props.navbarData.bulletins}</Link>
          </div>
        )}
        {props.navbarData.help && (
          <div
            key={props.navbarData.help}
            className={`h-full flex justify-between items-center ${
              pathname === "/help" && "custom-border-b-grey200 border-b-[2.4px]"
            } `}
          >
            <Link href="help">{props.navbarData.help}</Link>
          </div>
        )}
        {props.navbarData.modules && (
          <div
            key={props.navbarData.modules}
            className={`h-full flex justify-between items-center ${
              pathname === "/modules" &&
              "custom-border-b-grey200 border-b-[2.4px]"
            } `}
          >
            <Link href="modules">{props.navbarData.modules}</Link>
          </div>
        )}
        {props.navbarData.tasks && (
          <div
            key={props.navbarData.tasks}
            className={`h-full flex justify-between items-center ${
              pathname === "/tasks" &&
              "custom-border-b-grey200 border-b-[2.4px]"
            } `}
          >
            <Link href="tasks">{props.navbarData.tasks}</Link>
          </div>
        )}
        {props.navbarData.dashboard && (
          <div
            key={props.navbarData.dashboard}
            className={`h-full flex justify-between items-center ${
              pathname === "/dashboard" &&
              "custom-border-b-grey200 border-b-[2.4px]"
            } `}
          >
            <Link href="dashboard">{props.navbarData.dashboard}</Link>
          </div>
        )}
      </div>
      <div className="custom-text-grey100 flex justify-between space-x-10 mr-12">
        <div>
          <Bell height={24} width={24} />
        </div>
        <div>
          <Settings height={24} width={24} />
        </div>
        <div>
          {/* <User height={24} width={24} /> */}
          <Popover>
            <PopoverTrigger>
              <User height={24} width={24} />
            </PopoverTrigger>
            <PopoverContent className="mt-5 mr-8 flex flex-col justify-center items-start py-1 px-0 w-[170px] h-20 custom-b2 custom-text-grey800 space-y-2">
              <div className="flex w-full justify-center border-b-[1px]">
                <User height={24} width={24} className="mr-2" /> {textData?.modules_manage_profile}
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex justify-center ml-4 ">
                      <div className="mr-2">{logoutIcon}</div>{textData?.modules_logout}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md rounded-[8px] h-[135px] w-[320px] p-0">
                    <DialogHeader className="flex justify-center items-center">
                      <DialogDescription className="custom-b1 px-4 mt-6 custom-text-grey800">
                      {textData?.modules_logout_confirm}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-center justify-center space-x-9 items-center flex-row border-t-[1px] custom-text-grey800">
                      <DialogClose
                        asChild
                        className="w-full h-full border-r-[1px]"
                      >
                        <button>{textData?.text_cancel}</button>
                      </DialogClose>
                      <button className="w-full h-full">{textData?.text_confirm}</button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
