import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import Sidebar from "./components/sidebar/sidebar.component";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="*" />
      </Switch>
    </>
  );
}

export default App;
