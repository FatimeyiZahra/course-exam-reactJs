import React from "react";
import { Row, Col } from "antd";
const ExamHeader = () => {
  return (
    <div
      style={{
        marginBottom: " 2rem",
        borderBottom: "1px solid #dbe6f4",
        paddingBottom: "1rem",
        marginLeft:"15px"
      }}
    >
      <Row justify="space-between">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <p className="header-pretitle"> Exams</p>
          <h1 className="header-title">Safety Management System - Sms</h1>
        </Col>
      </Row>
    </div>
  );
};

export default ExamHeader;
