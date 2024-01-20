import React from "react";
import classes from "./index.module.scss";
import Icon from "../../Graphics/Icon";
import NextLink from "next/link";
import Hamburger from "./Hamburger";
import { Modal, useModal } from "@faceless-ui/modal";
import { useState } from "react";
import GridContainer from "../GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import { Props } from "./types";
import { LargeBody } from "../../type/LargeBody";
import CMSLink from "../../Link";

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
      <NextLink href="/" className={classes.logo}>
        <Icon className={classes.icon} />
      </NextLink>
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
                <CMSLink {...link} key={i}>
                  <h3 key={i} style={{ marginTop: i === 0 ? 0 : undefined }}>
                    {link.label}
                  </h3>
                </CMSLink>
              ))}
            </Cell>
            <Cell cols={3}>
              {socialMedia?.links?.map(({ url, label }) => (
                <LargeBody>
                  <a href={url} className={classes.secondaryNavItem}>
                    {label}
                  </a>
                </LargeBody>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};
