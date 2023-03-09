import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./enumPage";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  pageName: SelectedPage;
};

export default function ActionButton({
  children,
  setSelectedPage,
  pageName,
}: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-200 hover:cursor-pointer"
      onClick={() => setSelectedPage(pageName)}
      href={`#${pageName}`}
    >
      {children}
    </AnchorLink>
  );
}
