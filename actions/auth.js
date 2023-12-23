import axios from "axios";

var customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const auth = async (data) => {
  let formdata = JSON.stringify(data);
  const response = await axios.post(
    `${process.env.API_BASE_URL}/api/v1/authenticate/authenticateuser`,
    formdata,
    customConfig
  );

  return response;
};

export const logOff = async(user)=>{
  const response = await axios.post(
    `${process.env.API_BASE_URL}/api/v1/auth/logout`,
    {},
    {
      headers: {
        'Authorization': user.data.access_token ? `Bearer ${user.data.access_token}` : "",
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json'
      },
    }
  );
  return response;

}
export default auth;
