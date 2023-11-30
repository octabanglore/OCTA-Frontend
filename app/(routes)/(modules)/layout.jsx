import MainNav from "@/components/MainNav";
import Sidebar from "@/components/Sidebar";

const Overview = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex flex-col h- w-full custom-bg-grey100">
        <MainNav />
        <div className="ml-[116px] mb-1 flex-1">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Overview;
