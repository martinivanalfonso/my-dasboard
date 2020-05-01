import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import Sidebar from "./components/sidebar/sidebar.component";
import AppWrapper from "./components/app-wrapper/app-wrapper.component";
import RightSidebar from "./components/right-sidebar/right-sidebar.component";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route path="*" />
        </Switch>
        <RightSidebar />
      </AppWrapper>
    </>
  );
}

export default App;
