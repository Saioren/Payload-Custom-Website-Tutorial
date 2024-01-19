import React from "react";
import classes from "./index.module.scss";
import Icon from "../../Graphics/Icon";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useModal } from "@faceless-ui/modal";
import { useState, useRef } from "react";

const menuSlug = "menu";

export const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Icon className={classes.icon} />
      </Link>
      <button onClick={toggleMenu} type="button" className={classes.menuButton}>
        <Hamburger active={isMenuActive} />
      </button>
    </header>
  );
};
