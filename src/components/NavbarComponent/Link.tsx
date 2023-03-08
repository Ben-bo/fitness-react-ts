import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerPageName = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${
        selectedPage == lowerPageName ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerPageName}`}
      onClick={() => setSelectedPage(lowerPageName)}
    >
      {page}
    </AnchorLink>
  );
}
