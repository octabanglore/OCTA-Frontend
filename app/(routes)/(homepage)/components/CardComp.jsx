import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight, UserSquare } from "lucide-react";
import Link from "next/link";

const CardComp = (props) => {
  return (
    <div>
      <Card className="w-[320px]  rounded-[10px] border-customGrey200 bg-customGrey000">
        <CardHeader className="p-[32px_36px_32px_36px]">
          <CardTitle className="flex flex-row custom-s1 text-customGrey800">
            <div className="mr-4 flex items-center">{props.icon}</div> {props.text.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="custom-b2 text-customGrey600 p-[0px_36px_32px_36px]">
          <p>
            {props.text.description}
          </p>
        </CardContent>
        <CardFooter className="p-[0px_36px_32px_36px]">
          <Button asChild variant="outline" className="custom-b2 text-customPrimary border-customPrimary rounded-[4px]">
            <Link href={props.link}>{props.text.buttonText} <MoveRight className="ml-1"/> </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComp;
