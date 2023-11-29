import axios from "axios";
var customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const localization = async (data) => {
//   let formdata = JSON.stringify(data);
  // console.log('data- ', data);
//   const response = await axios.post(
//     "http://localhost:8080/api/v1/authenticate/userresetpasswordrequest",
//     formdata,
//     customConfig
//   );
    const response = {
        modules_manage_profile:"Manage Profile",
        modules_logout:"Logout",
        modules_logout_confirm:"Are you sure you want to log out?",
        text_confirm:"Yes, I am sure",
        text_cancel:"Cancel",
    }

  return response
};

export default localization;
