import React from "react";
import { ModalContainer, ModalProvider } from "@faceless-ui/modal";
import { GridProvider } from "@faceless-ui/css-grid";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import App from "next/app";
import { Type } from "../collections/Page";
import { Type as MegaMenuType } from "../globals/MegaMenu";
import { Type as FooterType } from "../globals/Footer";
import { Type as SocialMediaType } from "../globals/SocialMedia";

type AppProps = {
  pageProps: object;
  Component: React.FC<{ footer: FooterType; socialMedia: SocialMediaType }>;
} & {
  megaMenu: MegaMenuType;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

import classes from "../css/style.css";

const MyApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps, megaMenu, footer, socialMedia } = appProps;

  return (
    <ModalProvider transTime={250} zIndex={20}>
      <GridProvider
        rowGap={{
          s: "2",
          m: "2",
          l: "2",
          xl: "2",
        }}
        colGap={{
          s: "2",
          m: "2",
          l: "2",
          xl: "2",
        }}
        cols={{
          s: 8,
          m: 8,
          l: 12,
          xl: 12,
        }}
      >
        <div className={classes.app}>
          <Header megaMenu={megaMenu} socialMedia={socialMedia} />
          <Component {...pageProps} footer={footer} socialMedia={socialMedia} />
        </div>
      </GridProvider>
      <ModalContainer />
    </ModalProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [megaMenu, footer, socialMedia] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mega-menu`).then(
      (res) => res.json()
    ),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then(
      (res) => res.json()
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/social-media`
    ).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    megaMenu,
    footer,
    socialMedia,
  };
};

export default MyApp;
