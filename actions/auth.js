import axios from "axios";

var customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const auth = async (data) => {
  let formdata = JSON.stringify(data);
  const response = await axios.post(
    "http://localhost:8080/api/v1/authenticate/authenticateuser",
    formdata,
    customConfig
  );

  return response;
};

export default auth;
