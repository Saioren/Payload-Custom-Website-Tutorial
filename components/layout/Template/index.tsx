import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Footer } from "../Footer";

export const Template: React.FC = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
};
