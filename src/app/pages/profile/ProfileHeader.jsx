// ** React Imports

// ** Icons Imports
import { useState } from "react";
import { AlignJustify, Rss, Info } from "react-feather";
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
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  // ** States
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [acn1, setAcn1] = useState("active"); // assumes link 1 is default active
  const [acn2, setAcn2] = useState("");
  // const [acn3,setAcn3] = useState('')

  const startChangeVis = (id) => {
    console.log(id);
    setAcn1("");
    setAcn2("");
    // setAcn3('')
    if (id === "a") {
      setAcn1("active");
    } else if (id === "b") {
      setAcn2("active");
    }
    // else if(id === 'c') setAcn3('active')
  };
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
                <NavItem
                  onClick={() => {
                    startChangeVis("a");
                  }}
                >
                  <NavLink
                    tag={Link}
                    to={"/user-information"}
                    id="a"
                    className={acn1?acn1:""}
                  >
                    <span className="d-none d-md-block">Information</span>

                    <Rss className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem
                  onClick={() => {
                    startChangeVis("b");
                  }}
                >
                  <NavLink
                    tag={Link}
                    to={"/update-profile"}
                    id="b"
                    className={acn2?acn2 :""}
                  >
                    <span className="d-none d-md-block">Update Profile</span>

                    <Info className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
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
