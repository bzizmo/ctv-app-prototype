import { useEffect, useContext } from "react";
import { AppContextProvider, AppContext } from "./context/AppContext";
import Home from "./screens/Home";
import Settings from "./screens/Settings";

function AppContent() {
  const { activeScreen } = useContext(AppContext);

  return (
    <>
      {activeScreen === "home" && <Home />}
      {activeScreen === "settings" && <Settings />}
    </>
  );
}

export default function App() {
  useEffect(() => {
    function handleFocus(e) {
      if (e.target?.scrollIntoView) {
        e.target.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }

    window.addEventListener("focus", handleFocus, true); 

    return () => {
      window.removeEventListener("focus", handleFocus, true);
    };
  }, []);

  useEffect(() => {
    window.SpatialNavigation.init();
    window.SpatialNavigation.add({
      selector: ".focusable",
    });
    window.SpatialNavigation.makeFocusable();
    window.SpatialNavigation.focus();
  }, []);

  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}
