import { useEffect, useState } from "react";
import MainMenu from "../components/MainMenu";
import SideMenu from "../components/SideMenu";

export default function SettingsLayout({ children }) {
  const [activeSection, setActiveSection] = useState("subscription");

  useEffect(() => {
    const firstItem = document.getElementById("side-0");
    if (firstItem) {
      firstItem.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainMenu />
      <div className="flex flex-1">
        <div className="w-[260px] p-4">
          <SideMenu selected={activeSection} onSelect={setActiveSection} />
        </div>
        <div className="flex-1 p-4">{children(activeSection)}</div>
      </div>
    </div>
  );
}
