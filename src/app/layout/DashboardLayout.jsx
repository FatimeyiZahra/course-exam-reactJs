import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../../index.css";
import { Layout, Menu } from "antd";
import { Row, Col, Divider } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import DashboardSider from "./sider/DashboardSider";
import UserDropdown from "./userDropdown/UserDropdown";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setState] = useState(false);
  const toggle = () => {
    setState(!collapsed);
  };
  return (
    <Layout>
      {/* <DashboardSider/> */}
      <Sider  theme="light" trigger={null} collapsible collapsed={collapsed}  width={260} className="site-layout-background main-menu menu-shadow">
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background header-navbar navbar-shadow" style={{ padding: 0, margin: "24px 16px 20px", overflow: "initial" }}>
          <Row justify="space-between">
            <Col span={4}>
              {" "}
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Col>
            <Col span={4}>
              <UserDropdown />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }} className="card">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
