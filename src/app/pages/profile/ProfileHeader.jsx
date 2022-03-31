import { useState } from "react";
import { AlignJustify, Rss } from "react-feather";
import UserAvatar from "../../../assets/image/avatar/avatar.png";
import BackGroundPic from "../../../assets/image/background/profile-cover-9.jpg";
// ** Reactstrap Imports
import {
  Card,
  CardImg,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const ProfileHeader = () => {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [navLinks] = useState([
    {
      path: "/user-information",
      main: "Information",
      icon:"info"
    },
    {
      path: "/update-profile",
      main: "Update Profile",
      icon:"edit"
    },
  ]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="profile-header mb-2">
      <CardImg src={BackGroundPic} alt="User Profile Image" top />
      <div className="position-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="profile-img">
            <img className="rounded img-fluid" src={UserAvatar} alt="Card" />
          </div>
          <div className="profile-title ms-3">
            <h2 className="text-black">Stanislav Karimov</h2>
            {/* <p className="text-white">Designer</p> */}
          </div>
        </div>
      </div>
      <div className="profile-header-nav">
        <Navbar
          container={false}
          className="justify-content-end justify-content-md-between w-100"
          expand="md"
          light
        >
          <Button color="" className="btn-icon navbar-toggler" onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
              <Nav className="mb-0" pills>
                {navLinks.map((nav) => (
                  <NavItem  key={nav.path}>
                    <NavLink
                      tag={Link}
                      to={nav.path}
                     
                      active={location.pathname === nav.path ? true : false}
                    >
                      <span className="d-none d-md-block">{nav.main}</span>
                      <span className="d-block d-md-none" id={nav.icon} />
                      {/* <Rss className="d-block d-md-none" size={14} /> */}
                    </NavLink>{" "}
                  </NavItem>
                ))}

                {/* <NavItem>
                  <NavLink className="fw-bold">
                    <span className="d-none d-md-block">Profile Image</span>
                    <Image className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem> */}
              </Nav>
              {/* <Button color="primary">
                <Edit className="d-block d-md-none" size={14} />
                <span className="fw-bold d-none d-md-block">Inbox</span>
              </Button> */}
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  );
};

export default ProfileHeader;
