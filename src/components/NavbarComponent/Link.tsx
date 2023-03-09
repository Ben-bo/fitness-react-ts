import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/enumPage";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerPageName = page.toLowerCase().replace(/ /g, "") as SelectedPage;
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
