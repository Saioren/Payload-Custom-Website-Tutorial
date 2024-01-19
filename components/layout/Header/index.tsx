import React from "react";
import classes from "./index.module.scss";
import Icon from "../../Graphics/Icon";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { Modal, useModal } from "@faceless-ui/modal";
import { useState } from "react";
import GridContainer from "../GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import { Props } from "./types";

const menuSlug = "menu";

export const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  console.log("megaMenu:", megaMenu);
  const [isMenuActive, setMenuActive] = useState(false);
  const { toggleModal } = useModal();

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const handleToggle = () => {
    toggleMenu();
    toggleModal("my-modal");
  };

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Icon className={classes.icon} />
      </Link>
      <button
        onClick={handleToggle}
        type="button"
        className={classes.menuButton}
      >
        <Hamburger active={isMenuActive} />
      </button>
      <Modal slug="my-modal">
        <GridContainer>
          <Grid>
            <Cell cols={8} htmlElement="nav">
              {megaMenu?.nav?.map(({ link }, i) => (
                <h3 key={i}>{link.label}</h3>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};
