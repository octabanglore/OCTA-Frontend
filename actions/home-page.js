export const topbarData = {
  bulletins: "Bulletins",
  help: "Help",
  modules: "Modules",
  tasks: "Tasks",
  dashboard: "Dashboards",
};

export const getModuleData = (user) => {
  const response = [
    {
      moduleId: 1,
      title: "Vendor Details",
      description:
        "serves as a comprehensive repository, providing vendors with essential information on their profile, and communication logs for streamlined collaboration and efficient management of the vendor relationship.",
      buttonText: "Inspect",
      imagePath: "vendorDetailsIcon",
    },
    {
      moduleId: 2,
      title: "Product Catalog",
      description:
        "facilitates comprehensive product management, enabling vendors to showcase, update, and manage detailed information about their offerings, including descriptions, specifications, and pricing",
      buttonText: "Inspect",
      imagePath: "productCatalogueIcon",
    },
    {
      moduleId: 3,
      title: "Purchase Order",
      description:
        "streamlines transactional interactions by providing vendors with a centralized platform to view, acknowledge, and manage purchase orders, fostering efficient communication and order fulfillment",
      buttonText: "Inspect",
      imagePath: "purchaseOrderIcon",
    },
  ];
  return response;
};
