import { Bell, Settings, User } from "lucide-react";

const MainNav = () => {
  return (
    <div className="ml-[116px] mb-1 flex-1">
        <div className="bg-customGrey000 h-12  flex justify-between items-center">
          <div className=" ml-6 text-customGrey800 flex items-center justify-center">
            Overview
          </div>
          <div className="text-customGrey600 flex justify-between space-x-10 mr-8">
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
  )
}

export default MainNav