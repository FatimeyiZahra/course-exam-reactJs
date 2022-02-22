import React, { useState } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { data } from "./data";

import "./index.css";
import { Link } from "react-router-dom";

const SelfStudyCoursesCategory = (props) => {
  const [first, setfirst] = useState();
  const notebookEntryHandler = () => {};
  const editRecord = (data, index) => {
    console.log("Edit record", data.id);
  };
  // console.log(data[0].id);
  const clickhandler = (name) => console.log("delete", name);

  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Director",
      selector: "director",
      sortable: true,
    },
   
    {
      name: "Buttons",
      button: true,
      cell: (data, index) => {
        return (
          <>
            <div
              className="uil-trash-alt btn-outline-primary"
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: ".7em",
                padding: ".5rem",
                borderRadius: ".3rem",
                // background: "#fb6262",
              }}
              onClick={() => editRecord(data.id)}
            >
              <Link to={`/${data.id}`}>Courses</Link>
            </div>
            {/* <button
              className="btn btn-danger btn-sm"
              onClick={editRecord.bind(this, data, index)}
            >
              Delete
            </button> */}
          </>
        );
      },
    },
  ];
  const tableData = {
    columns,
    data,
  };
  const rowClickedHandler = (event, data, rowIndex) => {
    console.log("event", event);
    console.log("row data", data);
    console.log("row index", rowIndex);
  };
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
};

export default SelfStudyCoursesCategory;
