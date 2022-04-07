import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import { Collapse } from "antd";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { Tabs } from "antd";
import "./selfStudyCourse.css";
import { Layout, Menu } from "antd";

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
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [items, setMenuItems] = useState([]);
  const [subMenu, setsubMenu] = useState([
    {
      key: "sub1",
      title: "COURSE START",
      menuItem: [
        {
          key: "1",
          name: "Slider1",
        },
        {
          key: "2",
          name: "What is Safety Management System (Sms)",
        },
      ],
    },
    {
      key: "sub2",
      title: "INTRODUCTION",
      menuItem: [
        {
          key: "3",
          name: "Safety Goals and Safety Manual",
        },
        {
          key: "4",
          name: "What is The Benefits Of Sms",
        },
      ],
    },
    {
      key: "sub3",
      title: "SAFETY MANAGEMENT SYSTEM",
      menuItem: [
        {
          key: "5",
          name: "What s The Difference Between Sms and Qms",
        },
        {
          key: "6",
          name: "Safety Management Strategies",
        },
      ],
    },
    {
      key: "sub4",
      title: "SAFETY ASSURANCE - SAFETY PERFORMANCE MONITORING AND MEASUREMENT",
      menuItem: [
        {
          key: "7",
          name: "The Employee Role",
        },
        {
          key: "8",
          name: "Sms Documentation",
        },
      ],
    },
  ]);
  // console.log(filteredData);
  const onVideoSeeking = (duration) => {
    setVideoSeeked(true);
    // console.log("Video seeking: ", duration);
  };
  useEffect(() => {
    setMenuItems([]);
    subMenu.map((men) =>
      men.menuItem.map((as) =>
        setMenuItems((prevState) => [
          ...prevState,
          { subMenuKey: men.key, MenuItemkey: as.key, name: as.name },
        ])
      )
    );
  }, []);
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

  const handleFilter = (e) => {
    const value = e.target.value;
    let upData = [];
    setSearchValue(value);
    if (value.length) {
      upData = items.filter((men) => {
        const startsWith = men.name
          .toLowerCase()
          .startsWith(value.toLowerCase());
        const includes = men.name.toLowerCase().includes(value.toLowerCase());
        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(upData);
      setSearchValue(value);
    } else {
      setFilteredData([]);
      return null;
    }
  };
  const clickedResult = (e) => {
    console.log(e.target.id);
  };
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
            <div className="course-searchbox">
              <input
                className="dataTable-filter mb-50"
                type="text"
                id="search-input"
                placeholder="Search terms in the course"
                autoComplete="off"
                value={searchValue}
                onChange={handleFilter}
                style={{ outline: "none", display: "block" }}
              />
            </div>
            {searchValue.length ? (
              <>
                <CardBody
                  className="p-0 search-result"
                  style={{ padding: "0 !important" }}
                >
                  <ul className="unit-tree-list">
                    {filteredData.map((item, index) => (
                      <li
                        key={item.MenuItemkey}
                        id={item.subMenuKey}
                        // name={item.MenuItemkey}
                        onClick={clickedResult}
                      >
                        {" "}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </>
            ) : (
              <>
                <span></span>
              </>
            )}

            <CardBody className="p-0" style={{ padding: "0 !important" }}>
              <Sider
                style={{ width: "100% !important" }}
                className="site-layout-background w-100"
              >
                <Menu
                  mode="inline"
                  // defaultSelectedKeys={["1"]}
                  // defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  {subMenu.map((item) => (
                    <SubMenu
                      key={item.key}
                      title={item.title}
                      className="course-unit-list-title"
                    >
                      {item.menuItem.map((itm) => (
                        <Menu.Item
                          key={itm.key}
                          className={videoWatched ? "text-green" : ""}
                        >
                          {itm.name}
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ))}
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
