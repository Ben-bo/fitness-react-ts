import { useState } from "react";
import { SelectedPage } from "./components/enum/enumPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app bg-gray-20">
      <NavbarComponent
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
