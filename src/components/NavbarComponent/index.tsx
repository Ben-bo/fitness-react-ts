import React, { useState } from "react";

import logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../enum/enumPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function NavbarComponent({
  selectedPage,
  setSelectedPage,
}: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
      <div className="flex-between-utils fixed top-0 z-30 w-full py-6">
        <div className="flex-between-utils mx-auto w-5/6">
          <div className="flex-between-utils w-full gap-16">
            {/* logo */}
            <img src={logo} alt="logo" />
            {/* left content */}

            {isAboveMediumScreens ? (
              <div className="flex-between-utils w-full">
                <div className="flex-between-utils gap-8 text-sm">
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

                {/* sign in side */}
                <div className="flex-between-utils gap-5">
                  <p>Sign In</p>
                  <button>Join Us</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
