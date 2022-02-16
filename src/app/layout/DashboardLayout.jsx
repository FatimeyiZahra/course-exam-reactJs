import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../../index.css";
import { Layout, Menu } from "antd";
import { Row, Col, Divider } from "antd";
import logo from "../../assets/image/logo/logo.svg"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  FileOutlined,
  CloseOutlined
} from "@ant-design/icons";
import DashboardSider from "./sider/DashboardSider";
import UserDropdown from "./userDropdown/UserDropdown";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [menuOpen, setMenu] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
    setMenu(!menuOpen);
  };
  // const IsMenuOpen = () => {
  //   setMenu(!menuOpen);
  // };
  return (
    <Layout>
      {/* <DashboardSider/> */}
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={260}
        // breakpoint="lg"
        // collapsedWidth="0"
        // onBreakpoint={broken => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        className= {menuOpen? "site-layout-background main-menu menu-shadow  menu-open" :"site-layout-background main-menu menu-shadow hide"}
        style={{
          // overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1031,
        }}
      >
        <div className="sidebar-header">
          <ul>
            <li className="nav-item me-auto">
               <div className="logo" ><img src={logo} alt="" /></div>
            </li>
            <li className="nav-item">
             <div className="nav-toggle">
                <CloseOutlined style={{color:"#7367f0"}} onClick={toggle}></CloseOutlined>
              </div>
           </li>
          </ul>
        </div>
    
        
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        
          <Menu.Item key="1" icon={<PieChartOutlined style={{ fontSize: "20px" }}/>} style={{ fontWeight:"400",fontSize: "1.1rem ",color:"#625f6e" }}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined style={{ fontSize: "20px" }}/>} style={{ fontWeight:"400",fontSize: "1.1rem ",color:"#625f6e" }}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined style={{ fontSize: "20px" }}/>} title="User" style={{ fontWeight:"400",fontSize: "1.1rem ",color:"#625f6e"  }}> 
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined style={{ fontSize: "20px"}}/>} title="Team" style={{ fontWeight:"400",fontSize: "1.1rem ",color:"#625f6e"  }}>
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined  style={{ fontSize: "20px",margin: "0px 6px 0px 0px"}}/>} style={{ fontWeight:"400",fontSize: "1.1rem " ,color:"#625f6e" }}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className= {collapsed ?  "site-layout-background header-navbar navbar-shadow " : "site-layout-background header-navbar navbar-shadow floating-nav "}
          style={{overflow: "initial" }}
        >
          <Row justify="space-between">
            <Col span={6}>
              {" "}
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Col>
            <Col span={6} align="right" style={{display: "contents"}}>
              <UserDropdown />
            </Col>
          </Row>
        </Header>
        <Content className={collapsed ? "content app-content collapsedStyle" : "content app-content  uncollapsedStyle"} >
        <div className="header-navbar-shadow"></div>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
