import React from "react";
import { Card } from "antd";
const Information = () => {
  return (
    <Card
      className="cardWithTable"
      style={{ padding: 0, marginBottom: " 1.5rem" }}
    >
      <div className="table-responsive">
        <table className="table table-sm card-table ">
          <tbody className="list font-size-sm table-body">
            <tr>
              <th style={{ width: "191px", border: "none" }}>FIRST NAME</th>
              <td>Kataraban</td>
            </tr>
            <tr>
              <th>LAST NAME</th>
              <td>Sharifova</td>
            </tr>
            <tr>
              <th>AIRCRAFT TYPE</th>
              <td>-</td>
            </tr>
            <tr>
              <th>USER TYPE</th>
              <td>-</td>
            </tr>
            <tr>
              <th>EMAIL </th>
              <td>fake@email.useless</td>
            </tr>
            <tr>
              <th>MOBILE </th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Information;
