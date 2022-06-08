import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import AboutMePage from "./views/AboutMe";
import ProjectsPage from "./views/Projects";
import ResumePage from "./views/Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/aboutme" component={AboutMePage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/resume" component={ResumePage} />
  </Switch>
);

export default Main;
