import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import mainMenu from "../data/menu.json";

const implementedScreens = ["home", "settings"];

export default function MainMenu() {
  const { activeScreen, setActiveScreen } = useContext(AppContext);

  return (
    <nav className="flex gap-6 px-8 py-4 bg-black">
      {mainMenu.map((item, index) => (
        <div
          key={item.id}
          tabIndex={0}
          className={`focusable text-white text-lg px-3 py-1 outline-none transition-all cursor-pointer
            ${
              activeScreen === item.id
                ? "font-bold border-b-2 border-yellow-400"
                : ""
            }
            focus:ring-2 focus:ring-yellow-400`}
          id={`menu-${index}`}
          data-sn-right={`#menu-${index + 1}`}
          data-sn-left={`#menu-${index - 1}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" && implementedScreens.includes(item.id)) {
              setActiveScreen(item.id);
            }
          }}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
}
