const devices = [
  { id: "tv1", name: "Samsung TV (Living Room)" },
  { id: "tv2", name: "LG OLED (Bedroom)" },
  { id: "ps5", name: "PlayStation 5" },
];

export default function Devices() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registered Devices</h2>
      <ul className="space-y-4">
        {devices.map((device, index) => (
          <li key={device.id} className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg">
            <div className="text-white">{device.name}</div>
            <div className="flex gap-2">
              <button
                tabIndex={0}
                className="focusable px-3 py-1 bg-yellow-500 text-black rounded focus:ring-2 focus:ring-yellow-400"
                id={`devices-${index}`}
                data-sn-up={index === 0 ? "#menu-5" : `#devices-${index - 1}`}
                data-sn-left="#side-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Rename:", device.name);
                  }
                }}
              >
                ✏️
              </button>
              <button
                tabIndex={0}
                className="focusable px-3 py-1 bg-red-500 text-white rounded focus:ring-2 focus:ring-yellow-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Delete:", device.name);
                  }
                }}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
