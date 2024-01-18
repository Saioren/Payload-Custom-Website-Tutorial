import React from "react";
import type { AppProps } from "next/app";
import { ModalProvider } from "@faceless-ui/modal";
import { GridProvider } from "@faceless-ui/css-grid";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import classes from "../css/style.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ModalProvider zIndex={30}>
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
        <Header />
        <Component {...pageProps} />
      </div>
    </GridProvider>
  </ModalProvider>
);

export default MyApp;
