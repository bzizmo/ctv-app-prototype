import { useFeatureModal } from "../context/FeatureModalContext";

export default function Thumbnail({ item, index, railIndex }) {
  const { showFeatureModal } = useFeatureModal();
  return (
    <div
      tabIndex={0}
      className="focusable w-[320px] h-[180px] relative outline-none transition-all duration-200 ease-in-out transform
        focus:ring-4 focus:ring-yellow-400 focus:scale-105"
      id={`rail-${railIndex}-item-${index}`}
      data-sn-left={`#rail-${railIndex}-item-${index - 1}`}
      data-sn-right={`#rail-${railIndex}-item-${index + 1}`}
      data-sn-up={railIndex === 0 ? "#hero-0" : `#rail-${railIndex - 1}-item-0`}
      data-sn-down={`#rail-${railIndex + 1}-item-0`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          showFeatureModal(item.title, "This feature is not implemented yet.");
        }
      }}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute bottom-0 left-0 bg-black/70 text-white text-sm px-2 py-1 w-full truncate">
        {item.title}
      </div>
    </div>
  );
}
