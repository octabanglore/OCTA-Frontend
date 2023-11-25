import { UserSquare } from "lucide-react";
import CardComp from "./CardComp";

const BodySection = (props) => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-32 my-16  gap-4 justify-items-center">
    {/* <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  content-around mx-32 my-16 justify-items-center gap-4"> */}
      {props.cardText.vendorDetails && <CardComp text={props.cardText.vendorDetails} link={"/vendorDetails"} icon={<UserSquare/>}/>}
      {props.cardText.productCatalogue && <CardComp text={props.cardText.productCatalogue} link={"/productCatalogue"} icon={<UserSquare/>}/>}
      {props.cardText.purchaseOrder && <CardComp text={props.cardText.purchaseOrder} link={"/purchaseOrder"} icon={<UserSquare/>}/>}
      {props.cardText.insights && <CardComp text={props.cardText.insights} link={"/insights"} icon={<UserSquare/>}/>}
      {props.cardText.inventoryManage && <CardComp text={props.cardText.inventoryManage} link={"/inventoryManage"} icon={<UserSquare/>}/>}
      {props.cardText.approvals && <CardComp text={props.cardText.approvals} link={"/approvals"} icon={<UserSquare/>}/>}
    </div>
  );
};

export default BodySection;
