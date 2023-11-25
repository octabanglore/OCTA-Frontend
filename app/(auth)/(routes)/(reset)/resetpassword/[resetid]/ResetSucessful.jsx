import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const ResetSucessful = () => {
  return (
    <>
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="mt-2 mb-[72.5px] custom-s1 custom-text-grey800 text-center">
          Reset your password
        </CardTitle>
        <CardDescription className="custom-b1 custom-text-grey600 text-center flex flex-row space-x-2">
          Password was reset successfully <CheckCircle2 height={24} className="custom-text-system-green ml-2" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <Button
            asChild
            className="custom-b1 self-center w-10/12 mt-[56.5px] mb-[78px] custom-bg-primary text-white hover:custom-bg-secondary"
          >
            <Link href="/login">Back to login</Link>
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default ResetSucessful;
