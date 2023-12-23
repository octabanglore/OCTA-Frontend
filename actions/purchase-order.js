export const getCardsData = (user) => {
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
          {
            reportId: "22",
            reportName: "Schedule Delivery",
            reportIcon: "scheduleDeliveryIcon",
          },
          {
            reportId: "25",
            reportName: "Generate ASN",
            reportIcon: "generateASNIcon",
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
            reportId: "28",
            reportName: "Generate Invoice",
            reportIcon: "generateInvoiceIcon",
          },
          {
            reportId: "27",
            reportName: "Payment Update",
            reportIcon: "paymentUpdateIcon",
          },
        ],
      },
      {
        groupid: "14",
        groupName: "Fulfilled Orders",
        groupIcon: "fulfilledOrdersIcon",
        reports: [
          {
            reportId: "29",
            reportName: "Review Costs",
            reportIcon: "costApprovalsIcon",
          },
          {
            reportId: "30",
            reportName: "Schedule Deliveries",
            reportIcon: "scheduleDeliveryIcon",
          },
          {
            reportId: "31",
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
