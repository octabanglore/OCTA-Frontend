import axios from "axios";
var customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const forgotpassword = async (data) => {
  let formdata = JSON.stringify(data);
  const response = await axios.post(
    "http://localhost:8080/api/v1/authenticate/userresetpasswordrequest",
    formdata,
    customConfig
  );

  return formdata;
};

export default forgotpassword;
