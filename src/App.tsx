import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
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
