import React from 'react'
import { Link } from "react-router-dom";
import {  Menu } from "antd";
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const SideBarMenuItem = () => {
  return (
    <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        
          <Menu.Item key="1" icon={<PieChartOutlined style={{ fontSize: "20px" }}/>} style={{ fontWeight:"400",fontSize: "1.1rem ",color:"#625f6e" }}>
          <Link to="/">Login</Link>
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
  )
}

export default SideBarMenuItem