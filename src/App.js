import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./index.css";

import DashboardLayout from "./app/layout/DashboardLayout";
import SignIn from "./app/pages/signIn/SignIn";
import DashBoard from "./app/pages/dashboard/DashBoard";
import SelfStudyCoursesCategory from "./app/pages/selfStudyCoursesCategory/SelfStudyCoursesCategory";
import CourseDetails from "./app/pages/courseDetails/CourseDetails";
import Probnik from "./app/pages/courseDetails/probnik";
import UserProfile from "./app/pages/profile/UserProfile";
import Information from "./app/pages/profile/Information";
import UpdateProfile from "./app/pages/profile/UpdateProfile";
// import '@fortawesome/fontawesome-free/css/all.min.css';
//  import 'bootstrap-css-only/css/bootstrap.min.css';
//   import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <DashboardLayout>
          <Route exact path="/home">
            <DashBoard />
          </Route>
          <Route exact path="/SelfStudyCourse">
            <SelfStudyCoursesCategory />
          </Route>
          <Route exact path="/courseDetails">
            <CourseDetails />
          </Route>
          <Route exact path="/table">
            <Probnik />
          </Route>
          <Route>
            <Route exact path={"/user-information"}>
              <UserProfile>
                <Information />
              </UserProfile>
            </Route>
            <Route path="/update-profile">
            <UserProfile>
              <UpdateProfile />
            </UserProfile>
            </Route>
          </Route>
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
