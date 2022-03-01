import React from 'react'
import { Card } from "antd";
const Information = () => {
  return (
    <Card
      className="cardWithTable"
      style={{ padding: 0 , marginBottom:" 1.5rem"}}
    >
      <table className="table table-sm card-table">
        <tbody className="list font-size-sm">
          <tr>
            <th style={{width:"191px",border:"none"}}>FIRST NAME</th>
            <td>Stanislav</td>
          </tr>
          <tr>
            <th>LAST NAME</th>
            <td>Karimov</td>
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
            <td>stanislav.karimov@silkwayltd.com</td>
          </tr>
          <tr>
            <th>MOBILE </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}

export default Information