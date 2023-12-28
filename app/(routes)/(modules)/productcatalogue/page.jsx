"use client";

import { useEffect, useState } from "react";
import { Calendar2 } from "@/components/ui/calendar2";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className=" m-4 bg-white p-8">
      <Tabs
        defaultValue="account"
        className="w-[] bg-transparent to-transparent"
      >
        <TabsList className="bg-transparent space-x-6">
          <TabsTrigger value="account" className="bg-transparent p-0 w-[152px] h-[38px] ">
            {/* <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal ",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button> */}
            <div className="relative w-full h-full">
              {/* <label
                for="first"
                className="absolute z-[1] bg-[white] px-[5px]  left-[1em] top-[-1.4ex]"
              >
                First
              </label> */}
              <input
                type="text"
                className="border relative w-full h-full rounded-md border-solid border-[gray]"
                value={date}
              />
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="bg-transparent p-0 w-[152px] h-[38px] border-[1px] data-[state=active]:border-customPrimaryLight2 "
          >
            <div
              variant={"outline"}
              className={cn(
                "w-full flex h-full justify-between items-center px-3 custom-overline ",
                !date1 && "text-muted-foreground"
              )}
            >
              {date1 ? format(date1, "PP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-4 self-right h-4 w-4" />
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
