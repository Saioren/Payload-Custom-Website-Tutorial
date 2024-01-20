import React from "react";
import Link from "next/link";
import { Type as LinkType } from "../../Fields/link";

type Props = {
  className?: string;
} & LinkType;

const CMSLink: React.FC<Props> = ({ type, page, url, children, className }) => {
  const isRelativeURL = url?.indexOf("/") === 0;

  if (type === "page" ? `/${[page?.slug]}` : url) {
    return (
      <Link href={type === "page" ? `/${page?.slug}` : url} scroll={false}>
        {children}
      </Link>
    );
  }
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};

export default CMSLink;
