import Sidebar from "./components/Sidebar";
import { Bell, Settings, User } from "lucide-react";

const f1 = () => {
  return (
    <div className="flex">
      <Sidebar />
      <card/>
      
      <div className="ml-[116px] mb-1 flex-1">
        <div className="custom-bg-grey000 h-12  flex justify-between items-center">
          <div className="custom-bg-grey800 ml-6 custom-text-grey800 flex items-center justify-center">
            Overview
          </div>
          <div className="custom-text-grey600 flex justify-between space-x-10 mr-8">
            <div>
              <Bell height={24} width={24} />
            </div>
            <div>
              <Settings height={24} width={24} />
            </div>
            <div>
              <User height={24} width={24} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default f1;
