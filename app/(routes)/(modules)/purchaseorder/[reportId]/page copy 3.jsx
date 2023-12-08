"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { fetchData } from "@/actions/purchaseorder-gridData";
import "ag-grid-community/styles/ag-theme-quartz.css";

const AgGridComponent = () => {
  const gridRef = useRef()
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData().then((data) => {
      setRowData(data);
    });
  }, []);

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);

  const rowModelType = 'infinite';
  const [dataSource, setDataSource] = useState({
    getRows: (params) => {
      // call server here 
      fetchData().then(rows => {
        params.successCallback(rows,50);
      })
    }
  });

  return (
    <div>
      <div className="example-header">
        <span>Quick Filter:</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className="ag-theme-quartz-dark" style={{ height: 600 }}>
        <AgGridReact
          columnDefs={[
            { headerName: "ID", field: "a" },
            { headerName: "Name", field: "b" },
            { headerName: "Email", field: "Po number" },
            { headerName: "Address", field: "p" },
          ]}
          ref={gridRef}
          onGridReady={onGridReady}
          // rowData={rowData}
          rowModelType={rowModelType}
          datasource={dataSource}
        />
      </div>
    </div>
  );
};

export default AgGridComponent;
