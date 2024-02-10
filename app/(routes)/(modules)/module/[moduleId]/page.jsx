"use client";

import * as Icons from "@/components/svgs/PurchaseOrderIcons";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCardsData,getCardsData123 } from "../../../../../actions/purchase-order";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLogin from "@/hooks/use-auth";
import { Kpi } from "@/components/svgs/Demo";

const Overview = ({ params }) => {
  const [cardsData, setCardsData] = useState({});
  const users = useLogin();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    const getDatafunc = async () => {
      try {
        const resp = await getCardsData(users.user , params.moduleId);
        setCardsData(resp);
      } catch (error) {
        console.log(error);
        // console.error('Error during login:',error.response.data.errorMessage);
      }
    };
    getDatafunc();
  }, [params.moduleId, users.user]);
  return (
    <>
      <div className="w-full h-[360px] bg-customGrey000 text-customGrey800 flex flex-col mb-1">
        <div className="m-6 flex custom-s2 space-x-2">
          {" "}
          <div>{Icons["viewPOIcon"]}</div>
          <div>View Purchase Orders</div>
          <ChevronRight />
        </div>
       {cardsData.groups && <div className={`mt-2 ml-14 h-[256px]  flex justify-start`}>
          {cardsData.groups.map((group) => (
            <Card
              className="w-[232px] border-customGrey200 ml-16"
              key={group.groupid}
            >
              <CardHeader className="py-6 w-full pr-0 pl-4">
                <CardTitle className="custom-s1 text-customPrimary flex items-center space-x-2">
                  <div className="w-10 h-10 flex justify-center items-center bg-customGrey100">
                    {Icons[group.groupIcon]}
                  </div>
                  <div>{group.groupName}</div>
                </CardTitle>
              </CardHeader>
              {group.reports.map((report) => (
                <CardContent
                  key={report.reportId}
                  className="custom-caption text-customGrey600  pb-4"
                >
                  <Link
                    href={`/purchaseorder/${report.reportId}`}
                    className="flex space-x-[6px] hover:text-customGrey800 transition-transform transform hover:scale-105 hover:underline"
                  >
                    <div>{Icons[report.reportIcon]}</div>
                    <p>{report.reportName}</p>
                  </Link>
                </CardContent>
              ))}
            </Card>
          ))}
        </div>}
      </div>
      {/* <div className="w-full h-[360px] bg-customGrey000 text-customGrey800 flex flex-col">
        <div className="m-6 flex custom-s2 space-x-2">
          {" "}
          <div>{Icons["viewPOIcon"]}</div>
          <div>Key Performance Indicators</div>
          <ChevronRight />
        </div>
        ge
      </div> */}
      <div>{Kpi}</div>
    </>
  );
};

export default Overview;
