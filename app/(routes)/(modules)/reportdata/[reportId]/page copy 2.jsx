"use client";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useCallback, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import { fetchData } from "../../../../../actions/purchaseorder-gridData";

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);

  const columns = [
    { headerName: "id", field: "id" ,cellRenderer:'loading'},
    { headerName: "name", field: "name" },
  ];

  const datasource = {
    async getRows(params) {
      // console.log(JSON.stringify(params, null, 1));
      const { startRow, endRow, filterModel, sortModel } = params;
      // let url = `http://localhost:4000/olympic?`;
      //Sorting
      // if (sortModel.length) {
      //   const { colId, sort } = sortModel[0];
      //   url += `_sort=${colId}&_order=${sort}&`;
      // }
      // //Filtering
      // const filterKeys = Object.keys(filterModel);
      // filterKeys.forEach((filter) => {
      //   url += `${filter}=${filterModel[filter].filter}&`;
      // });
      //Pagination
      // url += `_start=${startRow}&_end=${endRow}`;
      // fetch(url)
      //   .then((httpResponse) => httpResponse.json())
      //   .then((response) => {
      //     params.successCallback(response, 499);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     params.failCallback();
      //   });
      const resp = await fetchData(startRow, endRow);
      console.log(resp);
      if (resp.length > 0) {
        // If there is data, pass it to the grid using successCallback
        params.successCallback(resp);
      } else {
        // If there is no more data, pass an empty array to indicate the end
        params.failCallback();
      }
    },
  };

  const onGridReady = (params) => {
    setGridApi(params);
    // register datasource with the grid
    params.api.setGridOption('datasource', datasource);
    // params.api.setDatasource(datasource);
  };
  const components = {
    loading: (params) => {
      if (params.value === undefined) {
        return "loading...";
      } else {
        return params.value;
      }
    },
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          columnDefs={columns}
          // pagination={true}
          // paginationPageSize={8}
          // domLayout="autoHeight"
          rowModelType="infinite"
          onGridReady={onGridReady}
          components={components}
          defaultColDef={{}}
        />
      </div>
    </div>
  );
};

export default GridExample;

    // <div>
    //   <div className="ag-theme-alpine" style={{ height: 400 }}>
    //     <AgGridReact
    //       columnDefs={columns}
    //       // pagination={true}
    //       // paginationPageSize={8}
    //       // domLayout="autoHeight"
    //       rowModelType="infinite"
    //       onGridReady={onGridReady}
    //       components={components}
    //       defaultColDef={{}}
    //     />
    //   </div>
    // </div>