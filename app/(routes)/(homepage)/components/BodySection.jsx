import CardComp from "./CardComp";
import * as moduleIcons from "@/components/svgs/ModulesPageIcons";

const BodySection = (props) => {


  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-32 my-16  gap-4 justify-items-center">
      {props.cardData.map(item => {
        return <CardComp text={item} link={`/module/${item.moduleId}`} icon={moduleIcons[item.imagePath]} key={item.moduleId}/>
      })}
    </div>
  );
};

export default BodySection;
