import Thumbnail from "./Thumbnail";

export default function ContentRail({ title, items, railIndex, onSelect }) {
  return (
    <div className="mb-6">
      <h3 className="text-white text-xl font-semibold mb-2 px-4">{title}</h3>
      <div className="p-4 overflow-x-auto whitespace-nowrap flex gap-4">
        {items.map((item, index) => (
          <Thumbnail
            key={item.id}
            item={item}
            index={index}
            railIndex={railIndex}
          />
        ))}
      </div>
    </div>
  );
}
