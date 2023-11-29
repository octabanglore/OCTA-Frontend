import { UserSquare } from "lucide-react";
import CardComp from "./CardComp";
import { productCatalogueIcon, purchaseOrderIcon, insightsIcon, inventoryManageIcon, approvalsIcon } from "@/components/svgs/ModulesPageIcons";

const BodySection = (props) => {

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-32 my-16  gap-4 justify-items-center">
      {props.cardData.vendorDetails && <CardComp text={props.cardData.vendorDetails} link={"/vendordetails"} icon={<UserSquare/>}/>}
      {props.cardData.productCatalogue && <CardComp text={props.cardData.productCatalogue} link={"/productcatalogue"} icon={productCatalogueIcon}/>}
      {props.cardData.purchaseOrder && <CardComp text={props.cardData.purchaseOrder} link={"/purchaseorder/overview"} icon={purchaseOrderIcon}/>}
      {props.cardData.insights && <CardComp text={props.cardData.insights} link={"/insights"} icon={insightsIcon}/>}
      {props.cardData.inventoryManage && <CardComp text={props.cardData.inventoryManage} link={"/inventorymanage"} icon={inventoryManageIcon}/>}
      {props.cardData.approvals && <CardComp text={props.cardData.approvals} link={"/approvals"} icon={approvalsIcon}/>}
    </div>
  );
};

export default BodySection;
