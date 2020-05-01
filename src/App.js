import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home-page";
import DashboardPage from "./pages/dashboard/dashboard-page";
import NotFoundPage from "./pages/not-found/not-found-page";

import AppWrapper from "./components/app-wrapper/app-wrapper.component";
import Sidebar from "./components/sidebar/sidebar.component";
import RightSidebar from "./components/right-sidebar/right-sidebar.component";

import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <RightSidebar />
      </AppWrapper>
    </>
  );
}

export default App;
