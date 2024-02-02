import axios from "axios";

export const getCardsData123 = (user) => {
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
export const downloadFileApi = async (type, selectedRows, user) => {

  const dataToSend = {
    'selectedValues':selectedRows
  };

  let formdata = JSON.stringify(dataToSend);

try {
  //http://localhost:8080/api/v1 
  const response = await axios.post('http://localhost:8080/api/v1/bcmreports/'+type, formdata, { 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true  // Add this line
    }
  });

  const blob = new Blob([response.data], { type: response.headers['content-type'] });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'downloaded_file.'+type;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
} catch (error) {
  if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
  } else {
      console.error('Error:', error.message);
  }
}
  //console.log(type, selectedRows, user);
};


export const getCardsData = async(user)=>{
  debugger;
  const response = await axios.get(
    `${process.env.API_BASE_URL}/api/v1/modules/getModulesGroupData/3`,
    {},
    {
      headers: {
        'Authorization': user.data.access_token ? `Bearer ${user.data.access_token}` : "",
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json'
      },
    }
  );
  return response.data;
};