import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'
import "./index.css";

import DashboardLayout from "./app/layout/DashboardLayout";
import SignIn from "./app/pages/signIn/SignIn";
import DashBoard from "./app/pages/dashboard/DashBoard";

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
         
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
