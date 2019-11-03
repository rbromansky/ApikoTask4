import React, { Fragment } from "react";
import { routes } from "../routes";
import { Button } from "../component/NavButton";
import { useLocation } from "react-router";

export const ReviewPage = () => {
  const path = useLocation().pathname;

  return (
    <Fragment>
      <Button rout={routes.REVIEWS}>Back</Button>
      <div>{path.split(":")[1]}</div>
    </Fragment>
  );
};
