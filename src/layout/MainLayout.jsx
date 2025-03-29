import { useEffect } from "react";
import MainMenu from "../components/MainMenu";

export default function MainLayout({ children }) {
  useEffect(() => {
    const firstHero = document.getElementById("hero-0");
    if (firstHero) {
      firstHero.focus();
    }
  }, []);

  return (
    <div className="bg-black text-white flex flex-col h-screen overflow-y-auto overflow-x-auto scrollbar-hide">
      <MainMenu />
      <main className="flex-grow overflow-hidden p-4">{children}</main>
    </div>
  );
}
