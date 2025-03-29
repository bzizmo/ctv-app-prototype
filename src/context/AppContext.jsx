import { createContext, useState, useEffect } from "react";
import Storage from "../utils/storage";

export const AppContext = createContext({
  theme: "light",
  profile: "user1",
  activeScreen: "home",
  setTheme: () => {},
  setProfile: () => {},
  setActiveScreen: () => {},
});

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [profile, setProfile] = useState("user1");
  const [activeScreen, setActiveScreen] = useState("home");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Storage.openStore();

    const storedTheme = Storage.get("theme");
    const storedProfile = Storage.get("profile");

    if (storedTheme) setTheme(storedTheme);
    if (storedProfile) setProfile(storedProfile);

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return; 
    Storage.set("theme", theme);
    Storage.set("profile", profile);
  }, [theme, profile, ready]);

  const contextValue = {
    theme,
    setTheme,
    profile,
    setProfile,
    activeScreen,
    setActiveScreen,
  };

  if (!ready) return null;

  return (
    <AppContext.Provider value={contextValue}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
}
