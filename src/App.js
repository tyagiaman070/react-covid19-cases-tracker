import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import HelpfulLinks from "./Components/HelpfulLinks/HelpfulLinks";
import Faq from "./Components/FAQ/Faq";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/helpfullinks" exact component={HelpfulLinks} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
