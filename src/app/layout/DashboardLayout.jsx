import React from "react";
import "antd/dist/antd.min.css";
import "../../index.css";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import DashboardSider from "./sider/DashboardSider";
import DashboardHeader from "./header/DashboardHeader";
import { changeCollapsed, changeMenuOpen } from "../../redux/actions/navbar";
const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.NavbarReducer.collapsed.val);
  const menuOpen = useSelector((state) => state.NavbarReducer.menuOpen.val);
  const ChangeCollapse = () => {
    dispatch(changeCollapsed(!collapsed));
    dispatch(changeMenuOpen(!menuOpen));
  };
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
      <div
        onClick={ChangeCollapse}
        className={collapsed ? "sidenav-overlay" : "sidenav-overlay show"}
      ></div>
    </Layout>
  );
};

export default DashboardLayout;
