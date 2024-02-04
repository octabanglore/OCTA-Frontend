"use client";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { fetchData } from "@/actions/purchaseorder-gridData";

var ALPHABET = "ab".split("");

const getColumnDefs = () => {
  const columnDefs = [
    { checkboxSelection: true, headerName: "", width: 40 },
    // { headerName: "#", width: 50, valueGetter: "node.rowIndex" },
  ];
  ALPHABET.forEach((letter) => {
    columnDefs.push({
      headerName: letter.toUpperCase(),
      field: letter,
      width: 100,
    });
  });
  return columnDefs;
};

const getDataSource = (count) => {
  const dataSource = {
    getRows: async (params) => {
      const { startRow, endRow } = params;
      const resp = await fetchData(startRow, endRow);
      // console.log(resp.length);
      // console.log(endRow);
      let lastRow = -1;
      // if (resp.length < endRow) {
      //   lastRow = resp.length;
      // }
      console.log(dataSource.length);
      // if (resp.length > 0) {
      // If there is data, pass it to the grid using successCallback
      params.successCallback(resp, 300);
    },
  };
  // console.log(dataSource);
  return dataSource;
};

const GridExample = () => {

  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState(getColumnDefs());
  const getRowId = useMemo(() => {
    return (params) => {
      return params.data.a;
    };
  }, []);
  const datasource = useMemo(() => {
    return getDataSource(100);
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      sortable: false,
    };
  }, []);

  const changecol = () => {
    setColumnDefs([
      {
        headerName: "Po number 123",
        field: "Po number",
        width: 100,
      },
      {
        headerName: "p",
        field: "p",
        width: 100,
      },
    ]);
  };
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    // <div style={containerStyle}>
    //   <div
    //     style={gridStyle}
    //     className={
    //       "ag-theme-quartz-dark"
    //     }
    //   >
    <div>
      <button onClick={changecol}>click</button>
      <input
        type="text"
        id="filter-text-box"
        placeholder="Filter..."
        onInput={onFilterTextBoxChanged}
      />
      <div className="ag-theme-quartz-dark" style={{ height: 400 }}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowModelType={"infinite"}
          rowSelection={"multiple"}
          maxBlocksInCache={2}
          suppressRowClickSelection={true}
          getRowId={getRowId}
          datasource={datasource}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default GridExample;
