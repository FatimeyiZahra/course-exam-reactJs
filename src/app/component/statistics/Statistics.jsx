import React from "react";
import "antd/dist/antd.min.css";
import { Statistic, Card, Row, Col,Typography  } from "antd";
import { PlusSquareOutlined,VideoCameraOutlined,CopyOutlined,CheckSquareOutlined} from "@ant-design/icons";

const { Title,Text } = Typography;

const Statistics = () => {
  return (
    <>
      <Col span={12}   xs={24}  sm={12} md={6} lg={6}>
          <Card  className="card" style={{borderRadius:" 0.5rem"}}>
            <Row type="flex" justify="space-around" align="middle">
              <Col flex={10}>
                <Statistic
                  title={<Title level={5} style={{  color:"#95aac9"}}>Courses Completed</Title>}
                  value={1}
                  valueStyle={{ color: "#12263f",fontWeight: "400" }}
                />
              </Col>
              <Col flex="auto" offset={2}>
                <PlusSquareOutlined   style={{ fontSize: "23px", color:"#95aac9"}}/>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}   xs={24}  sm={12} md={6} lg={6}>
          <Card  className="card" style={{borderRadius:" 0.5rem"}}>
            <Row type="flex" justify="space-around" align="middle">
              <Col flex={10}>
                <Statistic
                  title={<Title level={5} style={{  color:"#95aac9"}}>Slides Watched</Title>}
                  value={23}
                  valueStyle={{ color: "#12263f",fontWeight: "400" }}
                />
              </Col>
              <Col flex="auto" offset={2}>
                <VideoCameraOutlined   style={{ fontSize: "23px", color:"#95aac9"}}/>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}   xs={24}  sm={12} md={6} lg={6}>
          <Card  className="card" style={{borderRadius:" 0.5rem"}}>
            <Row type="flex" justify="space-around" align="middle">
              <Col flex={10}>
                <Statistic
                  title={<Title level={5} style={{  color:"#95aac9"}}>Exams Entered</Title>}
                  value={42}
                  valueStyle={{ color: "#12263f" ,fontWeight: "400"}}
                />
              </Col>
              <Col flex="auto" offset={2}>
                <CopyOutlined   style={{ fontSize: "23px", color:"#95aac9"}}/>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}   xs={24}  sm={12} md={6} lg={6}>
          <Card className="card" style={{borderRadius:" 0.5rem"}}>
            <Row type="flex" justify="space-around" align="middle">
              <Col flex={15}>
                <Statistic
                  title={<Title level={5} style={{  color:"#95aac9"}}>Questions Solved</Title>}
                  value={73}
                  valueStyle={{ color: "#12263f",fontWeight: "400" }}
                />
              </Col>
              <Col flex="auto" offset={2}>
                <CheckSquareOutlined   style={{ fontSize: "23px", color:"#95aac9"}}/>
              </Col>
            </Row>
          </Card>
        </Col>
    </>
  )
}

export default Statistics