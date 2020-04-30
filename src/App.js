import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.page";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="*" />
      </Switch>
    </>
  );
}

export default App;
