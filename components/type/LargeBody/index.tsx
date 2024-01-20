import React from "react";
import classes from "./index.module.scss";

type Props = {
  className?: string;
};

export const LargeBody: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={[className].filter(Boolean).join(" ")}>{children}</div>
  );
};
