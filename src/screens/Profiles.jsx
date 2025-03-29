import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const profiles = [
  { id: "user1", name: "User 1", icon: "👤", color: "bg-blue-500" },
  { id: "user2", name: "User 2", icon: "🧑", color: "bg-green-500" },
  { id: "user3", name: "User 3", icon: "👩", color: "bg-pink-500" },
];

export default function Profiles() {
  const { profile, setProfile, theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <ul className="space-y-4 mb-8">
        {profiles.map((p, index) => (
          <li
            key={p.id}
            id={`profile-${index}`}
            tabIndex={0}
            className={`focusable flex items-center justify-between p-4 rounded-lg outline-none transition-all
              ${
                profile === p.id
                  ? "bg-zinc-300 text-black"
                  : "bg-zinc-800 text-white"
              }
              focus:ring-4 focus:ring-yellow-400`}
            data-sn-left="#side-1"
            data-sn-up={index === 0 ? "#menu-5" : `#profile-${index - 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setProfile(p.id);
              }
            }}
            onClick={() => setProfile(p.id)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 flex items-center justify-center text-xl text-white rounded-full ${p.color}`}
              >
                {p.icon}
              </div>
              <span>{p.name}</span>
            </div>
            {profile === p.id && <span className="text-sm">✓ Selected</span>}
          </li>
        ))}
      </ul>

      <div
        tabIndex={0}
        id="theme-toggle"
        className="focusable text-center px-4 py-2 rounded bg-zinc-700 text-white focus:ring-2 focus:ring-yellow-400 cursor-pointer"
        data-sn-up={`#profile-${profiles.length - 1}`}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleTheme();
        }}
        onClick={toggleTheme}
      >
        Toggle Theme (Current: {theme})
      </div>
    </div>
  );
}
