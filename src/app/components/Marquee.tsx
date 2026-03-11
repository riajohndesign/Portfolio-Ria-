const ITEMS = [
  "UX Research",
  "·",
  "Product Design",
  "·",
  "Design Systems",
  "·",
  "Service Design",
  "·",
  "Healthcare UX",
  "·",
  "User Testing",
  "·",
  "Content Strategy",
  "·",
  "Figma",
  "·",
  "Journey Mapping",
  "·",
  "Prototyping",
  "·",
  "AI-Assisted Design",
  "·",
  "Medical Devices",
  "·",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{ borderColor: "var(--divider)" }}
    >
      <div className="marquee-track flex items-center gap-7 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 text-sm tracking-wide select-none"
            style={{
              color: item === "·" ? "var(--fg-3)" : "var(--fg-2)",
              fontFamily: item !== "·" ? "'Syne', sans-serif" : "inherit",
              fontWeight: item !== "·" ? 500 : 400,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
