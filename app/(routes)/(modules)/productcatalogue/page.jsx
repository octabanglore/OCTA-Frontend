import MainNav from "@/components/MainNav";
import Sidebar from "@/components/Sidebar";


const f1 = () => {
  return (
    <div className="flex">
      <Sidebar active={"productCatalogue"}/>
      <MainNav/>
      
    </div>
  );
};

export default f1;
