import React,{useState} from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { data } from "./data";

import "./index.css";

const SelfStudyCoursesCategory = (props) => {
  const [first, setfirst] = useState()
  const notebookEntryHandler = () => {

  };
  const clickhandler = name => console.log("delete", name);
 
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Director",
      selector: "director",
      sortable: true
    },
    {
      name: "Genres",
      selector: "genres",
      sortable: true,
      cell: d => <span>{d.genres.join(", ")}</span>
    },
    {
      name: "Year",
      selector: "year",
      sortable: true
    },{
      name: "Buttons",
      button: true,
      cell: row =>
        row.showButtons ? (
          <>
            <button 
             onClick={() => props.click(row.name)}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button >Delete</button>
          </>
        ) : null
    }
  ];
  const tableData = {
    columns,
    data
  };
 const rowClickedHandler = (event, data, rowIndex) => {
    console.log("event", event);
    console.log("row data", data);
    console.log("row index", rowIndex);
}
  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
           onRowClicked={rowClickedHandler}
          click={clickhandler}
        />
      </DataTableExtensions>
    </div>
  );
}


export default SelfStudyCoursesCategory
