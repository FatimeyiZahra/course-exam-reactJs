import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import { Collapse } from "antd";
import { Card, CardBody,  CardTitle, CardHeader } from "reactstrap";
import { PlusOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import "./selfStudyCourse.css";
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
      onClick={event => {
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
              hideControls={['playbackrates']}
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
            style={{ height: "420px", overflowY: "auto",marginBottom:"0" }}
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
                  // extra={genExtra()}
                >
                  <ul className="course-unit-list">
                    <li
                      className={
                        videoWatched
                          ? "course-unit-list-sub-unit-title text-green"
                          : "course-unit-list-sub-unit-title"
                      }
                    >
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
                  // extra={genExtra()}
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
                  // extra={genExtra()}
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
                  // extra={genExtra()}
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
                  // extra={genExtra()}
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
                  // extra={genExtra()}
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
