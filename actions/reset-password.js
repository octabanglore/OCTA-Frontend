import axios from "axios";

var customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const validationConditions = {
  length: 4,
  specialCharacter: true,
  casing: true,
  number: true,
};

export const resetpassword = async (data) => {
  let formdata = JSON.stringify(data);
//   console.log("form data {} ", formdata);
  const response = await axios.post(
    `${process.env.API_BASE_URL}/api/v1/authenticate/userresetpassword`,
    formdata,
    customConfig
  );

  return response;
};
