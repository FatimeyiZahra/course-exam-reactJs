// ** React Imports

// ** Icons Imports
import { useState } from "react";
import { AlignJustify, Rss, Info, Image, Users, Edit } from "react-feather";

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
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ProfileHeader = () => {
  // ** States
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="profile-header mb-2">
      <CardImg
        src="http://localhost:3001/static/media/timeline.91041dd4.jpg"
        alt="User Profile Image"
        top
      />
      <div className="position-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="profile-img">
            <img
              className="rounded img-fluid"
              src="http://localhost:3001/static/media/avatar-s-2.d21f2121.jpg"
              alt="Card image"
            />
          </div>
          <div className="profile-title ms-3">
            <h2 className="text-white">Stanislav Karimov</h2>
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
                <NavItem>
                  <NavLink tag={Link} to={"/user-information"} className="fw-bold" active>
                      <span className="d-none d-md-block">Information</span>
                   
                    <Rss className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={"/update-profile"} className="fw-bold">
                  <span className="d-none d-md-block">Update Profile</span>
                    
                    <Info className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fw-bold">
                    <span className="d-none d-md-block">Profile Image</span>
                    <Image className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
               
              </Nav>
              <Button color="primary">
                <Edit className="d-block d-md-none" size={14} />
                <span className="fw-bold d-none d-md-block">Inbox</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  );
};

export default ProfileHeader;
