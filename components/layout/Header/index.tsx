import React from "react";
import classes from "./index.module.scss";
import Icon from "../../Graphics/Icon";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useModal } from "@faceless-ui/modal";

const menuSlug = "menu";

export const Header: React.FC = () => {
  const { currentModal, toggle } = useModal();

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Icon className={classes.icon} />
      </Link>
      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggle(menuSlug)}
      >
        <Hamburger active={currentModal === menuSlug} />
      </button>
    </header>
  );
};
