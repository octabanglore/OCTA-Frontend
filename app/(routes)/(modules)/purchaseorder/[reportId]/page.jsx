"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { fetchData } from "@/actions/purchaseorder-gridData";
import "ag-grid-community/styles/ag-theme-quartz.css";

const AgGridComponent = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [columns, setColumns] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);

  useEffect(() => {
    // Fetch columns from API
    // fetchColumns().then(serverColumns => {
    setColumns(["a", "b", "p"]);
    setVisibleColumns(["a", "b", "p"]);
    // });
  }, []);

  const onCheckboxChange = useCallback((field) => {
    setVisibleColumns((prev) => {
      if (prev.includes(field)) {
        gridRef.current.columnApi.setColumnVisible(field, false);
        return prev.filter((x) => x !== field);
      } else {
        gridRef.current.columnApi.setColumnVisible(field, true);
        return [...prev, field];
      }
    });
  }, []);

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

  return (
    <div className="custom-bg-grey000 pb-24">
      <div className="example-header">
        <span>Quick Filter:</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className="ag-theme-quartz-dark h-[70vh] mb-10 mr-24">
        <AgGridReact
          columnDefs={visibleColumns.map(f => ({field: f}))}
          ref={gridRef}
          onGridReady={onGridReady}
          rowData={rowData}
        />
      </div>
      <div className="mt-5 box p-4">
        {columns.map(c => (
          <label key={c} className="checkbox">
             <input 
               type="checkbox"
               checked={visibleColumns.includes(c)}
               onChange={() => onCheckboxChange(c)} 
             />
             {c}
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgGridComponent;
