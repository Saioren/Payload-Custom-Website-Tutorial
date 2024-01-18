import React from "react";
import classes from "./index.module.scss";

const GridContainer: React.FC = ({ children }) => {
  return <div className={classes.gridContainer}>{children}</div>;
};

export default GridContainer;
