import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import "./courseDetails.css";
import CourseDetailsTable from "../../component/courseDetailsTable/CourseDetailsTable";
import CourseDetailsHeader from "./CourseDetailsHeader";
import { Collapse } from "antd";
import { Card, CardBody,  CardTitle, CardHeader } from "reactstrap";
import { SettingOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const text = (
  <ul className="course-unit-list">
  <li className="course-unit-list-sub-unit-title">Sms is Focus On</li>
  <li className="course-unit-list-sub-unit-title">Safety Goals and Safety Manual</li>
  <li className="course-unit-list-sub-unit-title">What is The Benefits Of Sms</li>
  </ul>
);
const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const CourseDetails = () => {
  return (
    <div style={{ marginLeft: "15px" }}>
      <div
        style={{
          marginBottom: " 2rem",
          borderBottom: "1px solid #dbe6f4",
          paddingBottom: "1.5rem",
        }}
      >
        <CourseDetailsHeader />
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={16} lg={16}>
          <CourseDetailsTable />
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card className="card-course-content-states no-shadow">
            <CardHeader className="cardHeaderCustom">
              <div>
                <CardTitle tag="h4">Course Units</CardTitle>
                {/* <CardText className="font-small-2">
                  Counter August 2020
                </CardText> */}
              </div>
            </CardHeader>
            <CardBody className="p-0" style={{padding:"0 !important"}}>
            {/* <Collapse bordered={false} defaultActiveKey={["1"]}> */}
              <Collapse bordered={false} >
              {/* <Panel className="course-unit-list-title" showArrow={false} header="INTRODUCTION" key="1" extra={genExtra()}>
                  {text}
                </Panel> */}
                <Panel className="course-unit-list-title" showArrow={false} header="INTRODUCTION" key="1" extra="0">
                  {text}
                </Panel>
                <Panel className="course-unit-list-title" showArrow={false} header="SAFETY MANAGEMENT SYSTEM" key="2" extra="1">
                  {text}
                </Panel>
                <Panel className="course-unit-list-title" showArrow={false} header="SAFETYPOLICY AND OBJECTIVES - MANAGEMENT COMMITMENT AND RESPONSIBILITY " key="3" extra="5">
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">What is Safety Management System (Sms)</li>
                    <li className="course-unit-list-sub-unit-title">Sms is Focus On</li>
                    <li className="course-unit-list-sub-unit-title">What is The Key /Main Phase Of Sms</li>
                    <li className="course-unit-list-sub-unit-title">Safety Goals and Safety Manual</li>
                    <li className="course-unit-list-sub-unit-title">What is The Benefits Of Sms</li>
                    </ul>
                </Panel>
                <Panel className="course-unit-list-title" showArrow={false} header="SAFETYPOLICY AND OBJECTIVES - MANAGEMENT COMMITMENT AND RESPONSIBILITY " key="4" extra="5">
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">What is Safety Management System (Sms)</li>
                    <li className="course-unit-list-sub-unit-title">Sms is Focus On</li>
                    <li className="course-unit-list-sub-unit-title">What is The Key /Main Phase Of Sms</li>
                    <li className="course-unit-list-sub-unit-title">Safety Goals and Safety Manual</li>
                    <li className="course-unit-list-sub-unit-title">What is The Benefits Of Sms</li>
                    </ul>
                </Panel>
                <Panel className="course-unit-list-title" showArrow={false} header="SAFETY RISK MANAGEMENT - HAZARD IDENTIFICATION - HAZARD IDENTIFICATION METHODS" key="5" extra="23">
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">What is Safety Management System (Sms)</li>
                    <li className="course-unit-list-sub-unit-title">Sms is Focus On</li>
                    <li className="course-unit-list-sub-unit-title">What is The Key /Main Phase Of Sms</li>
                    <li className="course-unit-list-sub-unit-title">Safety Goals and Safety Manual</li>
                    <li className="course-unit-list-sub-unit-title">What is The Benefits Of Sms</li>
                    </ul>
                </Panel>
                <Panel className="course-unit-list-title" showArrow={false} header="THE SAFETY PROMOTION " key="6" extra="8">
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">What is Safety Management System (Sms)</li>
                    <li className="course-unit-list-sub-unit-title">Sms is Focus On</li>
                    <li className="course-unit-list-sub-unit-title">What is The Key /Main Phase Of Sms</li>
                    <li className="course-unit-list-sub-unit-title">Safety Goals and Safety Manual</li>
                    <li className="course-unit-list-sub-unit-title">What is The Benefits Of Sms</li>
                    </ul>
                </Panel>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
       
      </Row>
    </div>
  );
};

export default CourseDetails;
