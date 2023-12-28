import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Emailsent = () => {
  return (
    <>
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="mt-2 mb-[71px] custom-s1 text-customGrey800 text-center">
          Forgot your Password
        </CardTitle>
        <CardDescription className="custom-b1 text-customGrey600 text-center">
          Reset link has been sent to your registered email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <Button
            asChild
            className="custom-b1 self-center w-10/12 mt-10 mb-[74px] bg-customPrimary text-white hover:bg-customSecondary"
          >
            <Link href="/login">Back to login</Link>
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default Emailsent;
