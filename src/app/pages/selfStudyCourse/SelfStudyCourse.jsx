import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import { Collapse } from "antd";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { PlusOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import "./selfStudyCourse.css";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Panel } = Collapse;

const SelfStudyCourse = () => {
  // player = {};
  const [state, setfirst] = useState({
    video: {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://video-react.js.org/assets/poster.png",
    },
  });
  // https://static.videezy.com/system/resources/previews/000/008/445/original/Dark_Haired_Girl_in_disbelief_1.mp4
  const [videoSeeked, setVideoSeeked] = useState(false);
  const [videoEnd, setVideoEnd] = useState();
  const [videoWatched, setVideoWatched] = useState();

  // console.log(videoSeeked);

  // console.log(videoEnd);

  const onVideoSeeking = (duration) => {
    setVideoSeeked(true);
    // console.log("Video seeking: ", duration);
  };

  useEffect(() => {
    if (videoSeeked === true) {
      setVideoWatched(false);
      // console.log("seeked");
    }
    if (videoSeeked === false && videoEnd === true) {
      setVideoWatched(true);
    }
  }, [videoEnd]);
  const onVideoEnd = () => {
    setVideoEnd(true);
  };
  // const onVideoTimeUpdate = (duration) => {
  //   console.log("Time updated: ", duration);
  // };

  const onPlayerReady = (player) => {
    // console.log("Player is ready: ", player);
    // this.player = player;
  };

  // const onVideoPlay = (duration) => {
  //   console.log("Video played at: ", duration);
  // };

  // const onVideoPause = (duration) => {
  //   console.log("Video paused at: ", duration);
  // };

  // const onVideoSeeked = (from, to) => {
  //   setVideoSeeked(true);
  //   console.log(`Video seeked from ${from} to ${to}`);
  // };
  const genExtra = () => (
    <PlusOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  return (
    <div style={{ marginLeft: "15px" }}>
      <Row gutter={[16, 16]}>
        <Col sm={24} xs={24} md={24} lg={16}>
          <div>
            <VideoPlayer
              className="videoResponsive"
              controls={true}
              // src={{ type: `video/mp4`, src: state.video.src }}
              src={state.video.src}
              poster={state.video.poster}
              width="720"
              height="420"
              hideControls={["playbackrates"]}
              onReady={onPlayerReady}
              // onPlay={onVideoPlay}
              // onPause={onVideoPause}
              // onTimeUpdate={onVideoTimeUpdate}
              onSeeking={onVideoSeeking}
              // onSeeked={onVideoSeeked}
              onEnd={onVideoEnd}
            />
          </div>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card
            className="card-course-content no-shadow"
            style={{ height: "420px", overflowY: "auto", marginBottom: "0" }}
          >
            <CardHeader className="cardHeaderCustom">
              <div>
                <CardTitle tag="h4">Course Units</CardTitle>
              </div>
            </CardHeader>
            <CardBody className="p-0" style={{ padding: "0 !important" }}>
              <Sider
                style={{ width: "100% !important" }}
                className="site-layout-background w-100"
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title="COURSE START"
                    className="course-unit-list-title"
                  >
                    <Menu.Item
                      key="1"
                      className={
                        videoWatched
                          ? "text-green"
                          : ""
                      }
                    >
                      option1
                    </Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title="INTRODUCTION"
                    className="course-unit-list-title"
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title="SAFETY MANAGEMENT SYSTEM"
                    className="course-unit-list-title"
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title="SAFETY ASSURANCE - SAFETY PERFORMANCE MONITORING AND MEASUREMENT"
                    className="course-unit-list-title"
                  >
                    <Menu.Item key="13">option9</Menu.Item>
                    <Menu.Item key="14">option10</Menu.Item>
                    <Menu.Item key="15">option11</Menu.Item>
                    <Menu.Item key="16">option12</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub5"
                    title="THE SAFETY PROMOTION"
                    className="course-unit-list-title"
                  >
                    <Menu.Item key="17">option9</Menu.Item>
                    <Menu.Item key="18">option10</Menu.Item>
                    <Menu.Item key="19">option11</Menu.Item>
                    <Menu.Item key="20">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
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
