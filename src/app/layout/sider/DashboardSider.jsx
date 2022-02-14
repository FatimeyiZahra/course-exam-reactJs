import React, {useState} from 'react'
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    FileOutlined,
  } from "@ant-design/icons";
  const { SubMenu } = Menu;
  const { Header, Sider, Content } = Layout;

const DashboardSider = () => {
    const [collapsed, setState] = useState(false);
    const toggle = () => {
        setState(!collapsed);
      };
  return (
    <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    //   style={{
    //   overflow: 'auto',
    //   height: '100vh',
    //   position: 'fixed',
    //   left: 0,
    //   top: 0,
    //   bottom: 0,
    // }}
  >
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
  )
}

export default DashboardSider