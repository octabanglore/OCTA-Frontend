import { Bell, Settings, User } from "lucide-react";

const Navbar = (props) => {
  return (
    <div className="custom-bg-secondary w-full h-16  flex justify-between items-center">
      <div className="custom-bg-grey000 h-8 w-[122px] m-[16px_48px] rounded-lg custom-bg-primary flex items-center justify-center">
        Octa
      </div>
      <div className="custom-s1 custom-text-grey100 flex justify-between space-x-10">
        {props.navbarText.bulletins && (
          <div key={props.navbarText.bulletins}>
            {props.navbarText.bulletins}
          </div>
        )}
        {props.navbarText.help && (
          <div key={props.navbarText.help}>{props.navbarText.help}</div>
        )}
        {props.navbarText.modules && (
          <div key={props.navbarText.modules}>{props.navbarText.modules}</div>
        )}
        {props.navbarText.tasks && (
          <div key={props.navbarText.tasks}>{props.navbarText.tasks}</div>
        )}
        {props.navbarText.dashboard && (
          <div key={props.navbarText.dashboard}>
            {props.navbarText.dashboard}
          </div>
        )}
      </div>
      <div className="custom-text-grey100 flex justify-between space-x-10 mr-12">
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
  );
};

export default Navbar;
