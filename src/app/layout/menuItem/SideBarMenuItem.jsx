import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  FormOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  TeamOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const SideBarMenuItem = () => {
  return (
    <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item
        key="1"
        icon={<HomeOutlined style={{ fontSize: "20px" }} />}
        style={{ fontWeight: "400", fontSize: "0.938rem ", color: "#625f6e" }}
      >
        <Link to="/home">Main Panel</Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<TeamOutlined style={{ fontSize: "20px" }} />}
        title="Course"
        style={{ fontWeight: "400", fontSize: "0.938rem ", color: "#625f6e" }}
      >
        <Menu.Item key="2">
          <Link to="/SelfStudyCourse">Seld Study Course Category</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/course">Seld Study Course</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/courseDetails">Course Details</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub2"
        icon={<FormOutlined style={{ fontSize: "20px" }} />}
        title="Exams"
        style={{ fontWeight: "400", fontSize: "0.938rem ", color: "#625f6e" }}
      >
        <Menu.Item key="5">
          <Link to="/exam">Exam</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        key="6"
        icon={
          <SafetyCertificateOutlined
            style={{ fontSize: "20px", margin: "0px 6px 0px 0px" }}
          />
        }
        style={{ fontWeight: "400", fontSize: "0.938rem ", color: "#625f6e" }}
      >
        <Link to="/certificates">Certificates</Link>
      </Menu.Item>
      <SubMenu
        key="sub3"
        icon={<FileTextOutlined style={{ fontSize: "20px" }} />}
        title="Documentation"
        style={{ fontWeight: "400", fontSize: "0.938rem ", color: "#625f6e" }}
      >
        <Menu.Item key="7">
          <Link to="/installation">Installation</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/dependencies">Dependencies</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/usage">Usage</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideBarMenuItem;
