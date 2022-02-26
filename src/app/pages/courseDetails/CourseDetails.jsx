import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import "./courseDetails.css";
import { Card } from "antd";

const CourseDetails = () => {
  return (
    <div>
      <div style={{ marginBottom: " 2rem" }}>
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className="header-pretitle"> Courses</p>
            <h1 className="header-title">Course Details</h1>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} align="right">
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
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={16} lg={16}>
          <Card
            title="SAFETY MANAGEMENT SYSTEM - SMS"
            className="cardWithTable"
            style={{ padding: 0 }}
          >
            <table className="table table-sm card-table">
              <tbody className="list font-size-sm">
                <tr>
                  <th>Category</th>
                  <td>GENERAL SUBJECT COURSES</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span className="badge badge-warning">SELF STUDY</span>
                    <small style={{ paddingLeft: "10px" }}>
                      Course is either completed or is not in certification
                      period. Reference only
                    </small>
                  </td>
                </tr>
                <tr>
                  <th>Version</th>
                  <td>1.3 </td>
                </tr>
                <tr>
                  <th>Total Slides </th>
                  <td>74 </td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>00:35:10</td>
                </tr>
                <tr>
                  <th>Subtitle </th>
                  <td>en</td>
                </tr>
                <tr>
                  <th>Exam Pass</th>
                  <td>
                    <b>%80</b> grade in <b>10</b> questions{" "}
                  </td>
                </tr>
                <tr>
                  <th>Used Exam Trial</th>
                  <td>0</td>
                </tr>
                <tr className="d-none d-lg-table-row">
                  <th className="vertical-align-top">Course Description</th>
                  <td>
                    Safety Management System Online Course starts with
                    definitions and Basic Parts of an SMS Program which are
                    Organizational Commitment, Safety Organization and Planning,
                    Provision for Compliance with Legal and Regulatory. The
                    course then focuses on Procedures and Control, Safety Risk
                    Management Procedures, Safety Policy, Staff Reporting and
                    Responsibilities. A short summary is presented for you at
                    the end of the course.{" "}
                  </td>
                </tr>
                <tr>
                  <th>Course Files</th>
                  <td className="pl-0">
                    <button
                      type="button"
                      className="btn btn-round btn-block  btn-sm btn-outline-primary btn-disable-block"
                    >
                      <i className="fe fe-file-text"></i> FULL COURSE TEXT
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetails;
