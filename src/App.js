import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

import DashboardLayout from "./app/layout/DashboardLayout";
import Sfsd from "./sfsd";
import SignIn from "./app/pages/signIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <DashboardLayout>
          <Route exact path="/home">
             <Sfsd />
          </Route>
         
        </DashboardLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
