import React from "react";
import Link from "../NavbarComponent/Link";
import { SelectedPage } from "../shared/enumPage";

import { motion } from "framer-motion";

type Props = {
  isMenuToggled: boolean;
  selectedPage: SelectedPage;
  setIsMenuToggled: (value: boolean) => void;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function SideBarComponent({
  setIsMenuToggled,
  isMenuToggled,
  selectedPage,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      className="fixed right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition duration-500 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.1 }}
      variants={{
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {/* close icon sidebars */}
      <div className="flex justify-end p-12 ">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* menu items */}
      <div className="ml-[33%] flex flex-col gap-10 text-md">
        <Link
          page={"Home"}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={"Benetits"}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={"Our Classes"}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={"Contact Us"}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </motion.div>
  );
}
