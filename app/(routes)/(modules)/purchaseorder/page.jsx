import MainNav from "@/components/MainNav";
import Sidebar from "@/components/Sidebar";


const f1 = () => {
  return (
    <div className="flex">
      <Sidebar active={"purchaseOrder"}/>
      <MainNav/>
      
    </div>
  );
};

export default f1;
