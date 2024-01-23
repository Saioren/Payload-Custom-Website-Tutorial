import React, { Fragment } from "react";
import Footer from "../Footer";
import { Type as FooterType } from "../../../globals/footer";
import { Type as SocialMediaType } from "../../../globals/SocialMedia";

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Template: React.FC<Props> = ({ children, footer, socialMedia }) => (
  <Fragment>
    {children}
    <Footer footer={footer} socialMedia={socialMedia} />
  </Fragment>
);

export default Template;
