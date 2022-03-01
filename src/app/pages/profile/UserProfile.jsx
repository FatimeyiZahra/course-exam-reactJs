import React from "react";
import { Row, Col, Button } from "reactstrap";
import ProfileHeader from "./ProfileHeader";
import "./profile.css";
const UserProfile = ({ children }) => {
  return (
    <div id="user-profile">
      <Row>
        <Col sm="12">
          <ProfileHeader />
        </Col>
      </Row>
      <section id="profile-info">{children}</section>
    </div>
  );
};

export default UserProfile;
