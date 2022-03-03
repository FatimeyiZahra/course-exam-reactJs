import React, { useEffect, useState } from "react";

import { Avatar } from "antd";
import "antd/dist/antd.min.css";

import defaultAvatar from "../../../assets/image/avatar/avatar.png";
import { Menu, Dropdown, Button, Modal, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import { changeContactModal } from "../../../redux/actions/modal";
import { useDispatch } from "react-redux";
import ContactModal from "../../pages/ContactModal/ContactModal";

// import { DownOutlined } from "@ant-design/icons";
const UserDropdown = () => {
  const [userData] = useState(null);
  const dispatch = useDispatch();

  const onChangeContactClick = () => {
    dispatch(changeContactModal(true));
  };
  useEffect(() => {
    // dispatch(changeContactModal());
  }, []);
  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;
  const menu = (
    <Menu
      style={{
        minWidth: "10rem",
        padding: " 0.5rem 0",
        borderRadius: ".375rem",
      }}
    >
      <Menu.Item
        key="0"
        style={{ padding: ".375rem 1.5rem", color: "#6e84a3" }}
      >
        <Link to={"./"}>Messages</Link>
      </Menu.Item>
      <Menu.Item
        key="1"
        style={{ padding: ".375rem 1.5rem", color: "#6e84a3" }}
      >
        <Link to={"/user-information"}>Account</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ padding: ".375rem 1.5rem", color: "#6e84a3" }}
      >
        <a href="https://www.aliyun.com">Password</a>
      </Menu.Item>
      <Menu.Item
        onClick={onChangeContactClick}
        key="3"
        style={{ padding: ".375rem 1.5rem", color: "#6e84a3" }}
      >
        Contact
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="4"
        style={{ padding: ".375rem 1.5rem", color: "#6e84a3" }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      {" "}
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          href="!#"
          className="ant-dropdown-link mr-10"
          onClick={(e) => e.preventDefault()}
        >
          <span className="user-name fw-bolder mr-10">
            {(userData && userData["username"]) || "John Doe"}
          </span>
          {/* <span className="user-status">
            {(userData && userData.role) || "Admin"}
          </span>{" "} */}
          <Avatar size="large" src={userAvatar} />
        </a>
      </Dropdown>
      <ContactModal />
    </>
  );
};

export default UserDropdown;
