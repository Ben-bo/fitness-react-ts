import React from "react";

import logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export default function NavbarComponent({
  selectedPage,
  setSelectedPage,
}: Props) {
  return (
    <nav>
      <div className="flex-between-utils fixed top-0 z-30 w-full py-6">
        <div className="flex-between-utils mx-auto w-5/6">
          <div className="flex-between-utils w-full gap-16">
            {/* logo */}
            <img src={logo} alt="logo" />
            {/* left content */}
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
                  page={"Our Clasess"}
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
          </div>
        </div>
      </div>
    </nav>
  );
}
