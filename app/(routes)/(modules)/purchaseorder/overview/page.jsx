import { ViewPOIcon, OpenOrderIcon } from "@/components/svgs/PurchaseOrderIcons";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Overview = () => {
  return (
    <>
    <div className="w-full h-[360px] custom-bg-grey000 custom-text-grey800 flex flex-col mb-1">
      <div className="m-6 flex custom-s2 space-x-2">
        {" "}
        <div>{ViewPOIcon}</div>
        <div>View Purchase Orders</div>
        <ChevronRight />
      </div>
      <div className="mt-2 ml-14 h-[256px] w-[824px] flex justify-between">
        <Card className="w-[232px] custom-border-grey200">
          <CardHeader className="py-6 pr-0 pl-4">
            <CardTitle className="custom-s1 custom-text-primary flex items-center space-x-2"><div className="w-10 h-10 flex justify-center items-center custom-bg-grey100">{OpenOrderIcon}</div><div>Open Orders</div></CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
    <div className="w-full h-[360px] custom-bg-grey000 custom-text-grey800 flex flex-col">
      <div className="m-6 flex custom-s2 space-x-2">
        {" "}
        <div>{ViewPOIcon}</div>
        <div>Key Performance Indicators</div>
        <ChevronRight />
      </div>
    </div>
    </>
  );
};

export default Overview;
