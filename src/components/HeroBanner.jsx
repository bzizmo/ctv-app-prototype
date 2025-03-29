import { useEffect, useState } from "react";
import { useFeatureModal } from "../context/FeatureModalContext";
import content from "../data/content.json";

export default function HeroBanner() {
  const heroes = content.hero;
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const { showFeatureModal } = useFeatureModal();

  useEffect(() => {
    if (isFocused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroes.length, isFocused]);

  return (
    <div className="w-full h-[450px] mb-6 relative">
      {heroes.map((item, i) => (
        <div
          key={item.id}
          tabIndex={0}
          className={`focusable absolute top-0 left-0 w-full h-full transition-opacity duration-500
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
            outline-none focus:ring-4 focus:ring-yellow-400`}
          id={`hero-${i}`}
          data-sn-left={`#hero-${i - 1}`}
          data-sn-right={`#hero-${i + 1}`}
          data-sn-up="#menu-0"
          data-sn-down="#rail-0-item-0"
          onFocus={() => {
            setIndex(i);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              showFeatureModal(item.title, "This feature is not implemented yet.");
            }
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white bg-black/60 p-4 rounded-lg max-w-[60%]">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
