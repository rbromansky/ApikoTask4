import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes } from "./routes";
import { NavBar } from "./NavBar";
import { HomePage } from "./HomePage";
import { ShopPage } from "./ShopPage";
import { ReviewsPage } from "./review/ReviewsPage";
import { ReviewPage } from "./review/ReviewPage";

export const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.SHOP} component={ShopPage} />
      <Route exact path={routes.REVIEWS} component={ReviewsPage} />
      <Route path={routes.REVIEW} component={ReviewPage} />
    </Switch>
  </BrowserRouter>
);
