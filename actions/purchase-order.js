export const getCardsData = () => {
  const cardData = {
    groups: [
      {
        groupid: "12",
        groupName: "Open Orders",
        groupIcon: "openOrdersIcon",
        reports: [
          {
            reportId: "23",
            reportName: "View New Orders",
            reportIcon: "viewNewOrderIcon",
          },
          {
            reportId: "24",
            reportName: "Cost Approvals",
            reportIcon: "costApprovalsIcon",
          },
        ],
      },
      {
        groupid: "13",
        groupName: "Confirmed Orders",
        groupIcon: "confirmedOrdersIcon",
        reports: [
          {
            reportId: "26",
            reportName: "Delivery Update",
            reportIcon: "deliveryUpdateIcon",
          },
          {
            reportId: "27",
            reportName: "Payment Update",
            reportIcon: "paymentUpdateIcon",
          },
        ],
      },
    ],
  };
  return cardData;
};

export const exportFileApi = (type, reportId, user) => {
  console.log(type, reportId, user);
};
export const downloadFileApi = (type, selectedRows, user) => {
  console.log(type, selectedRows, user);
};


 //! for ref
// const auth = async (data) => {
// var customConfig = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

//   let formdata = JSON.stringify(data);
//   const response = await axios.post(
//     "http://localhost:8080/api/v1/authenticate/authenticateuser",
//     formdata,
//     customConfig
//   );

//   return response;
// };
