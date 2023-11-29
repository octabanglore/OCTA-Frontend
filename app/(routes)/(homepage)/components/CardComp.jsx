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
      <Card className="w-[300px] h-[260px] rounded-[10px] custom-border-grey200 custom-bg-grey000">
        <CardHeader className="p-[32px_36px_32px_36px]">
          <CardTitle className="flex flex-row custom-s1 custom-text-grey800">
            <div className="mr-4 flex items-center">{props.icon}</div> {props.text.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="custom-b2 custom-text-grey600 p-[0px_36px_32px_36px]">
          <p>
            {props.text.description}
          </p>
        </CardContent>
        <CardFooter className="p-[0px_36px_32px_36px]">
          <Button asChild variant="outline" className="custom-b2 custom-text-primary custom-border-primary rounded-[4px]">
            <Link href={props.link}>{props.text.buttonText} <MoveRight className="ml-1"/> </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComp;
