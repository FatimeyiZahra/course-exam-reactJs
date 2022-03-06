import React from "react";
import "antd/dist/antd.min.css";
import "../../index.css";
import { Layout } from "antd";
import {useSelector } from "react-redux";
import DashboardSider from "./sider/DashboardSider";
import DashboardHeader from "./header/DashboardHeader";
const { Content } = Layout;

const DashboardLayout = ({ children }) => {

  const collapsed = useSelector((state) => state.NavbarReducer.collapsed.val);

  return (
    <Layout>
      <DashboardSider />
      <Layout className="site-layout">
        <DashboardHeader />
        <Content
          className={
            collapsed
              ? "content app-content collapsedStyle"
              : "content app-content  uncollapsedStyle"
          }
        >
          <div className="header-navbar-shadow"></div>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
