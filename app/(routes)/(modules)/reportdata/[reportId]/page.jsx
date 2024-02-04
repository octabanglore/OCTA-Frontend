"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { fetchData } from "@/actions/purchaseorder-gridData";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@/app/gridStyles.css";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  ChevronDown,
  MoreVertical,
  Search,
  Settings2,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import useLogin from "@/hooks/use-auth";
import * as Icons from "@/components/svgs/POListIcons";
import { downloadFileApi, exportFileApi } from "@/actions/purchase-order";
import { ScrollArea } from "@/components/ui/scroll-area";

const AgGridComponent = ({ params }) => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [selectedRows, setSelectedRows] = useState("");

  const [columns, setColumns] = useState([]);
  const [rowsLength, setRowsLength] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  const users = useLogin();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    fetchData(params.reportId, users.user).then((data) => {
      setColumns(data?.columnDefs);
      setRowData(data?.rowData);
      setRowsLength(data?.rowData.length);
    });
  }, [params.reportId, users.user]);

  useEffect(() => {
    if (gridRef.current?.api && columns.length > 0) {
      gridRef.current.api.sizeColumnsToFit();
    }
  }, [columns]);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);
  if (!isMounted) {
    return null;
  }

  const onSelectionChanged = (params) => {
    const selectedGridRows = params.api.getSelectedRows();
    const ids = selectedGridRows.map((item) => item.po_id);
    setSelectedRows(ids);
  };

  const valueGetter = (params) => params.value;

  function cellRenderer(props) {
    return <div>{props.value}</div>;
  }
  const hanldeExportFile = async (type) => {
    try {
      exportFileApi(type, params.reportId, users.user);
      console.log(selectedRows.length);
    } catch (error) {
      console.log(error.response.data.errorMessage);
    }
  };
  const hanldeDownloadFile = async (type) => {
    try {
      await downloadFileApi(type, selectedRows, users.user);
    } catch (error) {
      console.log(error.response.data.errorMessage);
    }
  };

  const toggleColumnVisibility = (field) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.field === field ? { ...column, hide: !column.hide } : column
      )
    );
  };
  const gridOptions = {
    columnTypes: {
      String: {},
      Number: {},
      Date: {},
      Currency: {},
    },
    defaultColDef: {
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    },
    columnDefs: columns,
  };
  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };
  const filteredColumns = columns.filter((column) =>
    column.headerName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="bg-customGrey000 pb-8">
      <div className="flex justify-between ml-5 pt-3 mr-8">
        <div className="flex items-center ">
          <div className=" relative">
            <Input
              type="text"
              id="filter-text-box"
              placeholder="Search Orders"
              className=" bg-customGrey100 text-customGrey600 custom-caption h-8 w-[360px] custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
              onInput={onFilterTextBoxChanged}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-customGrey600">
              <Search />
            </div>
          </div>
          <div className="custom-b2 flex justify-center items-center px-4 ">
            <Settings2 className="mr-2" />
            Apply Filter
          </div>
        </div>
        <div className="flex space-x-6 h-10 custom-b1">
          {/* <Button>Generate Invoice</Button> */}
          <Popover className="border-customPrimary">
            <PopoverTrigger
              className={`w-[170px] bg-customGrey600 custom-b1 p-2 border-[0.5px] rounded flex justify-center items-center hover:bg-customGrey100 ${
                selectedRows.length === 0 ? "bg-customGrey300 " : ""
              }`}
              disabled={selectedRows.length === 0}
            >
              Download File <ChevronDown className="ml-2" />{" "}
            </PopoverTrigger>
            <PopoverContent className="w-[152px] custom-s1 px-0 py-2 ">
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeDownloadFile("pdf")}
              >
                .PDF
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeDownloadFile("xls")}
              >
                .XlS
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeDownloadFile("csv")}
              >
                .CSV
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeDownloadFile("xml")}
              >
                .XML
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeDownloadFile("html")}
              >
                .HTML
              </button>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="border-customGrey600 w-[152px] custom-b1 p-2 border-[0.5px] rounded flex justify-center items-center hover:bg-customGrey100">
              Export File <ChevronDown className="ml-2" />{" "}
            </PopoverTrigger>
            <PopoverContent className="w-[152px] custom-s1 px-0 py-2 ">
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeExportFile("pdf")}
              >
                .PDF
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeExportFile("xls")}
              >
                .XlS
              </button>
              <button
                className="w-full border-b-customGrey200 px-4 py-2 border-b-[0.5px] text-left hover:bg-customGrey100"
                onClick={() => hanldeExportFile("jpeg")}
              >
                .JPEG
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="ag-theme-quartz custom-b2 h-[70vh] mb-10 ml-5 mt-8">
            <AgGridReact
              columnDefs={columns}
              ref={gridRef}
              onGridReady={onGridReady}
              rowData={rowData}
              gridOptions={gridOptions}
              rowSelection={"multiple"}
              suppressRowClickSelection={true}
              onSelectionChanged={onSelectionChanged}
              cellRenderer={cellRenderer}
              valueGetter={valueGetter}
            />
          </div>
        </div>
        <div className="flex-shrink-0 ml-4 mr-[60px] mt-12 ">
          <Popover>
            <PopoverTrigger>
              <MoreVertical />
            </PopoverTrigger>
            <PopoverContent className="mr-[60px] flex flex-col justify-center items-start py-1 px-0 w-[170px] h-20 custom-b2 text-customGrey800 space-y-2">
              <div className="w-full">
                <Dialog className="w-full">
                  <DialogTrigger asChild className="w-full">
                    <button className="w-full flex justify-center items-center pb-1 border-b-[1px] hover:text-customSecondaryLight1">
                      <div className="mr-2">{Icons["editAttriIcon"]}</div>
                      Edit Attributes
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md rounded-[8px] w-[431px] h-[605px] py-0 px-6 flex flex-col justify-start  items-start ">
                    <DialogHeader className="flex mt-11 h-[120px] items-center space-y-6 border-b-[1px] border-customGrey200">
                      <DialogTitle className="custom-b1 px-4 text-customGrey800">
                        Select PO attributes
                      </DialogTitle>
                      <DialogDescription className="custom-b1 px-4 text-customGrey800">
                        <span className=" relative">
                          <Input
                            type="text"
                            id="filter-text-box"
                            placeholder="Search Orders"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className=" bg-customGrey100 text-customGrey600 custom-caption h-8 w-[360px] custom-input-stlyes focus:custom-border-secondary-light-1 focus:custom-input-stlyes"
                          />
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-customGrey600">
                            <Search />
                          </span>
                        </span>
                        <span className="text-customPrimary flex items-center custom-caption mt-2">
                          <AlertCircle
                            height={16}
                            width={16}
                            className="mr-2"
                          />
                          Select less than 9 at once
                        </span>
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[380px] w-[380px]">
                    <div className="custom-b2 flex flex-col justify-start  items-start  space-y-4 ml-4">
                      {filteredColumns.map((column) => (
                        <div key={column.field}>
                          <label>
                            <input
                              type="checkbox"
                              checked={!column.hide}
                              className="mr-2"
                              onChange={() =>
                                toggleColumnVisibility(column.field)
                              }
                            />
                            {column.headerName}
                          </label>
                        </div>
                      ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="w-full flex justify-center items-center hover:text-customSecondaryLight1">
                <div className="mr-2">{Icons["highlightIcon"]}</div>
                Highlights
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="pl-6 pr-10 text-customGrey800 custom-b2">
        <Separator className=" bg-customGrey300 mb-4" />
        Rows: {rowsLength}
      </div>
    </div>
  );
};

export default AgGridComponent;
