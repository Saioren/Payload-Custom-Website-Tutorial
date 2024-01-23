import React from "react";
import classes from "./index.module.scss";

type Props = {
  className?: string;
};

const GridContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={[classes.gridContainer, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};

export default GridContainer;
