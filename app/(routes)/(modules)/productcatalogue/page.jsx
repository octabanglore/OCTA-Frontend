"use client";

import { useEffect, useState } from "react";
import { Calendar2 } from "@/components/ui/calendar2";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const F1 = () => {
  const [date, setDate] = useState();
  const [date1, setDate1] = useState();
  const [inputValue, setInputValue] = useState("11");
  useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <div className="bg-customGrey000 p-8">
      <Tabs
        defaultValue="account"
        className="w-[] bg-transparent to-transparent"
      >
        <TabsList className="bg-transparent space-x-6">
          <TabsTrigger
            value="account"
            className="bg-transparent p-0 w-[152px] h-[38px] border-[1px] flex flex-col data-[state=active]:border-customPrimaryLight2  data-[state=active]:text-customPrimaryLight3"
          >
            <div className="w-full h-full relative rounded-sm">
              <p className="absolute top-[-9px] bg-customGrey000 p-0.5 text-[10px] font-normal leading-[12px] ml-2 self-start">
                From Date
              </p>
              <div
                variant={"outline"}
                className={cn(
                  "w-full flex h-full justify-between text-[12px] font-normal px-2 leading-[11px] items-center",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
                <CalendarIcon className="ml-4 self-right h-4 w-4" />
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="bg-transparent p-0 w-[152px] h-[42px] border-[1px] flex flex-col data-[state=active]:border-customPrimaryLight2  data-[state=active]:text-customPrimaryLight3"
          >
          <div className="w-full h-full relative rounded-sm">
            <p className="absolute top-[-9px] bg-customGrey000 p-0.5 text-[10px] font-normal leading-[12px] ml-2 self-start">
              To Date
            </p>
            <div
              variant={"outline"}
              className={cn(
                "w-full flex h-full justify-between text-[12px] font-normal px-2 leading-[11px] items-center",
                !date1 && "text-muted-foreground"
              )}
            >
              {date1 ? format(date1, "PP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-4 self-right h-4 w-4" />
            </div>
          </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className=" bg-customGrey100 rounded-lg w-[335px] flex justify-center items-center">
            <Calendar2
              mode="single"
              captionLayout="dropdown-buttons"
              selected={date}
              onSelect={setDate}
              fromYear={1960}
              toYear={2050}
              defaultMonth={date && date}
              maxDate={new Date(2023, 11, 31)}
            />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className=" bg-customGrey100 rounded-lg w-[335px] flex justify-center items-center">
            <Calendar2
              mode="single"
              captionLayout="dropdown-buttons"
              selected={date1}
              onSelect={setDate1}
              fromYear={1960}
              toYear={2030}
              defaultMonth={date1 && date1}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default F1;
