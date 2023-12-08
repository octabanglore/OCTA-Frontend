// api.js

import axios from "axios";

const BASE_URL = "https://api.example.com";

// Simulate an API call to fetch data
export const fetchDatacc = (start, pageSize) => {
  const url = `${BASE_URL}/your-api-endpoint?start=${start}&pageSize=${pageSize}`;
  // Simulate a delay (replace with actual API call)
  console.log("api called ");
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dummy response
      // const responseData = [...Array(pageSize)].map((_, index) => ({
      //   a: start + index,
      //   b: `Item ${start + index}`,
      // }));
      if (pageSize <= 300) {
        const responseData = Array.from(
          { length: pageSize - start },
          (value, index) => ({
            a: start + index,
            b: `Item  ${start + index}`,
            "Po number": `Item l ${start + index}`,
            p: `Item p ${start + index}`,
          })
        );
        resolve(responseData);
      } else {
        const responseData = [];
        resolve(responseData);
      }
      // console.log(responseData);
      // console.log(start);
    }, 1000); // Simulated delay of 1 second
  });

  // Uncomment the following lines for a real API call
  // return axios.get(url)
  //   .then(response => response.data);
};
