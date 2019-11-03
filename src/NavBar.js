import React, { Fragment } from "react";
import { routes } from "./routes";
import { Button } from "./component/NavButton";
import { useLocation } from "react-router";

export const NavBar = () => {
  const location = useLocation().pathname;

  return (
    <Fragment>
      <div>
        {location.indexOf(routes.REVIEW) + 1 ? null : (
          <div className="NavBar">
            <Button rout={routes.HOME}>Home</Button>
            <Button rout={routes.SHOP}>Shop</Button>
            <Button rout={routes.REVIEWS}>Reviews</Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
