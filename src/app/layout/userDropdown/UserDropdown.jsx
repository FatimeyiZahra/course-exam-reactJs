import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";
import { Avatar, Image } from "antd";
import "antd/dist/antd.css";
// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import defaultAvatar from "../../../assets/image/avatar/avatar-s-11.jpg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const UserDropdown = () => {
  const [userData] = useState(null);

  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <span className="user-name fw-bold">
            {(userData && userData["username"]) || "John Doe"}
          </span>
          {/* <span className="user-status">
            {(userData && userData.role) || "Admin"}
          </span>{" "} */}
          <Avatar src={userAvatar} /> <DownOutlined />
        </a>
      </Dropdown>
    </>
    // <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
    //   <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
    //     <div className='user-nav d-sm-flex d-none'>
    //       <span className='user-name fw-bold'>{(userData && userData['username']) || 'John Doe'}</span>
    //       <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
    //     </div>
    // <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
    //   </DropdownToggle>
    //   <DropdownMenu end>
    //     <DropdownItem tag='a' href='/pages/profile' onClick={e => e.preventDefault()}>
    //       <User size={14} className='me-75' />
    //       <span className='align-middle'>Profile</span>
    //     </DropdownItem>
    //     <DropdownItem tag='a' href='/apps/email' onClick={e => e.preventDefault()}>
    //       <Mail size={14} className='me-75' />
    //       <span className='align-middle'>Inbox</span>
    //     </DropdownItem>
    //     <DropdownItem tag='a' href='/apps/todo' onClick={e => e.preventDefault()}>
    //       <CheckSquare size={14} className='me-75' />
    //       <span className='align-middle'>Tasks</span>
    //     </DropdownItem>
    //     <DropdownItem tag='a' href='/apps/chat' onClick={e => e.preventDefault()}>
    //       <MessageSquare size={14} className='me-75' />
    //       <span className='align-middle'>Chats</span>
    //     </DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem tag='a' href='/pages/account-settings' onClick={e => e.preventDefault()}>
    //       <Settings size={14} className='me-75' />
    //       <span className='align-middle'>Settings</span>
    //     </DropdownItem>
    //     <DropdownItem tag='a' href='/pages/pricing' onClick={e => e.preventDefault()}>
    //       <CreditCard size={14} className='me-75' />
    //       <span className='align-middle'>Pricing</span>
    //     </DropdownItem>
    //     <DropdownItem tag='a' href='/pages/faq' onClick={e => e.preventDefault()}>
    //       <HelpCircle size={14} className='me-75' />
    //       <span className='align-middle'>FAQ</span>
    //     </DropdownItem>
    //     {/* <DropdownItem tag={Link} to='/login'>
    //       <Power size={14} className='me-75' />
    //       <span className='align-middle'>Logout</span>
    //     </DropdownItem> */}
    //   </DropdownMenu>
    // </UncontrolledDropdown>
  );
};

export default UserDropdown;
