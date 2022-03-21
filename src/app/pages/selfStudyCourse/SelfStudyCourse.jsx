import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import { Collapse } from "antd";
import { Card, CardBody, CardText, CardTitle, CardHeader } from "reactstrap";
import { SettingOutlined } from "@ant-design/icons";
import { Player } from "video-react";
import { Tabs } from "antd";
import "./selfStudyCourse.css";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Panel } = Collapse;

const SelfStudyCourse = () => {
  return (
    <div style={{ marginLeft: "15px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16} lg={16}>
          <Player
            playsInline
            poster="/assets/poster.png"
            onEnded={() => console.log("Finished!")}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            className="card-browser-states no-shadow"
            // style={{ height: "507px", overflowY: "auto" }}
          >
            <CardHeader className="cardHeaderCustom">
              <div>
                <CardTitle tag="h4">Course Units</CardTitle>
              </div>
            </CardHeader>
            <CardBody className="p-0" style={{ padding: "0 !important" }}>
              <Collapse bordered={false}>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="INTRODUCTION"
                  key="1"
                  extra="0"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="SAFETY MANAGEMENT SYSTEM"
                  key="2"
                  extra="1"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="SAFETYPOLICY AND OBJECTIVES - MANAGEMENT COMMITMENT AND RESPONSIBILITY "
                  key="3"
                  extra="5"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="SAFETYPOLICY AND OBJECTIVES - MANAGEMENT COMMITMENT AND RESPONSIBILITY "
                  key="4"
                  extra="5"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="SAFETY RISK MANAGEMENT - HAZARD IDENTIFICATION - HAZARD IDENTIFICATION METHODS"
                  key="5"
                  extra="23"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
                <Panel
                  className="course-unit-list-title"
                  showArrow={false}
                  header="THE SAFETY PROMOTION "
                  key="6"
                  extra="8"
                >
                  <ul className="course-unit-list">
                    <li className="course-unit-list-sub-unit-title">
                      What is Safety Management System (Sms)
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Sms is Focus On
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Key /Main Phase Of Sms
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      Safety Goals and Safety Manual
                    </li>
                    <li className="course-unit-list-sub-unit-title">
                      What is The Benefits Of Sms
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
        <Col xs={24} md={24} lg={24}>
          <Card>
            <CardBody>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="About" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Feedback" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Documents" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SelfStudyCourse;
