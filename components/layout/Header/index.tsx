import React from "react";
import classes from "./index.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>Logo</div>
      <div>Menu</div>
    </header>
  );
};
