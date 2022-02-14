import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
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
import DashboardLayout from "./app/layout/DashboardLayout";
import Sfsd from "./sfsd";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setState] = useState(false);
  const toggle = () => {
    setState(!collapsed);
  };
  return (
    <DashboardLayout>
      <Sfsd />
    </DashboardLayout>
  );
}

export default App;
