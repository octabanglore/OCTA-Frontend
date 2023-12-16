"use client";
import {
  BaggageClaim,
  UserSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  productCatalogueIcon,
  purchaseOrderIcon,
  insightsIcon,
  inventoryManageIcon,
  approvalsIcon,
  sidebarCloseIcon,
} from "@/components/svgs/SidebarIcons";
import { moduleData } from "@/actions/home-page";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "next/navigation";
import { rightSidebarData } from "../actions/sidebar-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as icons from "./svgs/PurchaseOrderIcons";


export default function Sidebar() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isTransitionEnded, setIsTransitionEnded] = useState(false);
  const pathname = usePathname();
  const urlTextArray = pathname.split("/");
  const handleLeftOpenClick = () => {
    setIsLeftOpen(!isLeftOpen);
    setIsTransitionEnded(false);
  };

  const handleTransitionEnd = () => {
    setIsTransitionEnded(true);
  };

  const router = useRouter();

  return (
    <div className="flex fixed z-[1] inset-y-0">
      {
        //! left side bar
      }
      <div
        className={`custom-bg-secondary transition-all duration-300 overflow-y-auto flex flex-col justify-between
        ${isLeftOpen ? "w-[200px]" : "w-[72px]"}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div>
          <div className="flex">
            <div
              className={`custom-text-primary custom-bg-grey000  h-9 my-6 mx-3 flex place-items-center justify-center rounded-[8px] ${
                isLeftOpen ? "w-[122px]" : "w-12"
              }`}
            >
              <button onClick={() => router.push("/modules")}>
                {isLeftOpen ? "OCTA" : "O"}
              </button>
            </div>
            {isLeftOpen && (
              <button
                className=" self-center pl-4"
                onClick={handleLeftOpenClick}
              >
                {sidebarCloseIcon}
              </button>
            )}
          </div>
          {!isLeftOpen ? (
            <div className="h-6 flex place-items-center justify-center custom-text-grey000  ">
              <button
                className="flex place-items-center justify-center"
                onClick={handleLeftOpenClick}
              >
                <Separator className="h-[0.5px] w-7 ml-3" />
                <ChevronRight />
              </button>
            </div>
          ) : (
            <Separator />
          )}
          <div className="custom-text-grey000 flex flex-col place-items-center justify-around py-6 space-y-4">
            {moduleData.vendorDetails && (
              <button
                onClick={() => router.push("/vendordetails")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "vendordetails" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <UserSquare />{" "}
                <div>
                  {isLeftOpen &&
                    isTransitionEnded &&
                    moduleData.vendorDetails.title}
                </div>
              </button>
            )}
            {moduleData.productCatalogue && (
              <button
                onClick={() => router.push("/productcatalogue")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "productcatalogue" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <div>{productCatalogueIcon} </div>{" "}
                <div>
                  {isLeftOpen &&
                    isTransitionEnded &&
                    moduleData.productCatalogue.title}
                </div>
              </button>
            )}
            {moduleData.purchaseOrder && (
              <button
                onClick={() => router.push("/purchaseorder/overview")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "purchaseorder" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <div>{purchaseOrderIcon} </div>{" "}
                <div>
                  {isLeftOpen &&
                    isTransitionEnded &&
                    moduleData.purchaseOrder.title}
                </div>
              </button>
            )}
            {moduleData.insights && (
              <button
                onClick={() => router.push("/insights")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "insights" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <div>{insightsIcon} </div>{" "}
                <div>
                  {isLeftOpen && isTransitionEnded && moduleData.insights.title}
                </div>
              </button>
            )}
            {moduleData.inventoryManage && (
              <button
                onClick={() => router.push("/inventorymanage")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "inventorymanage" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <div>{inventoryManageIcon} </div>{" "}
                <div>
                  {isLeftOpen &&
                    isTransitionEnded &&
                    moduleData.inventoryManage.title}
                </div>
              </button>
            )}
            {moduleData.approvals && (
              <button
                onClick={() => router.push("/approvals")}
                className={`flex place-items-center justify-center  p-2 rounded-full ${
                  urlTextArray[1] === "approvals" && "custom-bg-primary "
                } ${
                  isLeftOpen &&
                  isTransitionEnded &&
                  "rounded-[16px] space-x-2 self-start ml-3"
                }`}
              >
                <div>{approvalsIcon} </div>{" "}
                <div>
                  {isLeftOpen &&
                    isTransitionEnded &&
                    moduleData.approvals.title}
                </div>
              </button>
            )}
          </div>
        </div>

        <div className=" text-white">
          {/* <button onClick={() => setIsLeftOpen(!isLeftOpen)}>{pathname}</button>
          {isLeftOpen && <div className="px-4">Left Links</div>} */}
        </div>
      </div>

      {
        //! right navbar
      }

      <div
        className={` custom-bg-grey100 custom-border-r-grey200 border-[1px] relative transition-all duration-500 ml-auto
        ${isRightOpen ? "w-[228px]" : "w-[40px]"}`}
      >
        {!isRightOpen && (
          <div className="absolute inset-y-0 right-1/2 ml-px">
            <div className="custom-bg-primary h-full w-px relative">
              <div className="custom-bg-grey100 absolute top-1/2 -translate-y-1/2 p-[18px] -translate-x-1/2">
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
          <div className=" flex flex-col ">
            <div className="custom-bg-grey200 self-end rounded-full custom-text-grey800 mt-5 mr-4 h-6 w-6">
              <button
                className="hover:custom-bg-grey100 rounded-full"
                onClick={() => setIsRightOpen(!isRightOpen)}
              >
                <ChevronLeft />
              </button>
            </div>
            <div className="mt-[42px] ml-8">
              <div className="custom-text-primary-light-1 custom-h6">
                {rightSidebarData.micon}
                {rightSidebarData.moduleName}
              </div>
              <div className="mt-8 custom-b2 pl-4 custom-text-grey800">
                <div>Overview</div>
                {rightSidebarData.groups.map((group) => (
                  <Accordion type="single" collapsible key={group.groupid}>
                    <AccordionItem
                      value={group.groupid}
                      className="border-b-transparent w-[150px] "
                    >
                      <AccordionTrigger className=" pb-0 ">
                        {group.groupName}
                      </AccordionTrigger>
                      {group.reports.map((report) => (
                        <AccordionContent
                          className="pt-4 pb-0 custom-b2 custom-text-grey600 flex items-center"
                          key={report.reportId}
                        >
                          {/* {report.reportId === "23" && (
                            <span className="mr-1">
                              {<BadgeAlert className="h-4 w-4" />}
                            </span>
                          )}
                          {report.reportId === "24" && (
                            <span className="mr-1">
                              {<Tag className="h-4 w-4" />}
                            </span>
                          )}
                          {report.reportId === "26" && (
                            <span className="mr-1">
                              {<PackageCheck className="h-4 w-4" />}
                            </span>
                          )} */}
                          {
                            <span className="mr-1 h-4 w-4">
                              {icons[report.ic]}
                            </span>
                          }
                          {report.reportName}
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
