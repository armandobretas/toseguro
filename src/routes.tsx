/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Restaurantes from "./pages/Restaurantes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurantes" component={Restaurantes} />
      </Switch>
    </BrowserRouter>
  );
}
