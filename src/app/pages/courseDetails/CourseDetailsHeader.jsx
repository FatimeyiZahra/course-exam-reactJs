import React from "react";
import { Row, Col } from "antd";
const CourseDetailsHeader = () => {
  return (
    <Row justify="space-between">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <p className="header-pretitle"> Courses</p>
        <h1 className="header-title">Course Details</h1>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}  style={{display:"flex",justifyContent:"end",alignItems:"end"}}>
        <a
          href="!#"
          className="btn btn-round btn-block btn-warning lift btn-disable-block"
          style={{ padding: "0.5rem 0.75rem" }}
        >
          Self Study Exam
        </a>
        <a
          href="!#"
          className="btn btn-round btn-block btn-warning lift btn-disable-block"
          style={{ marginLeft: "10px", padding: "0.5rem 0.75rem" }}
        >
          Self Study Course
        </a>
      </Col>
    </Row>
  );
};

export default CourseDetailsHeader;
