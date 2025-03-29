const menuItems = [
  { id: "subscription", label: "Subscription" },
  { id: "profiles", label: "Profiles" },
  { id: "devices", label: "Devices" },
];

export default function SideMenu({ selected, onSelect }) {
  return (
    <nav className="flex flex-col gap-4 px-4 py-4 rounded-lg">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          id={`side-${index}`}
          tabIndex={0}
          className={`focusable px-4 py-2 rounded cursor-pointer text-white outline-none transition-all
            ${selected === item.id ? "bg-yellow-500 text-black font-bold" : "bg-zinc-700"}
            focus:ring-2 focus:ring-yellow-400`}
          data-sn-up={index === 0 ? "#menu-5" : `#side-${index - 1}`}
          data-sn-down={index === menuItems.length - 1 ? `#side-${index}` : `#side-${index + 1}`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSelect(item.id);
            }
          }}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
}
