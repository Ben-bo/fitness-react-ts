import { useEffect, useState } from "react";
import { SelectedPage } from "./components/shared/enumPage";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import BenefitsComponent from "./components/BenefitsComponent";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopPage, setTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setTopPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      //clean
      //remove event after component loaded or clesed
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavbarComponent
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomeComponent setSelectedPage={setSelectedPage} />
      <BenefitsComponent setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
