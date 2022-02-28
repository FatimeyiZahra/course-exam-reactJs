import React, {useState } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.min.css'
import "../../index.css";
import { Layout } from "antd";
import { Row, Col } from "antd";
import logo from "../../assets/image/logo/logo.svg"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CloseOutlined
} from "@ant-design/icons";
import UserDropdown from "./userDropdown/UserDropdown";
import SideBarMenuItem from "./menuItem/SideBarMenuItem";
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
            <Link to="/home"> 
              <div className="logo" ><img src={logo} alt="" /></div>
            </Link>
            </li>
            <li className="nav-item">
             <div className="nav-toggle">
                <CloseOutlined style={{color:"#7367f0"}} onClick={toggle}></CloseOutlined>
              </div>
           </li>
          </ul>
        </div>
        
        <SideBarMenuItem/>
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
            <Col className="DropDownPosition" span={6} align="right" style={{display: "contents"}}>
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
