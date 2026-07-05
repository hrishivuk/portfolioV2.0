import { deskHeroColors, projectCards } from "./data";

export default function ProjectCards({ x = 386, y = 228, layout = "grid" }) {
  return (
    <g aria-label="Featured project cards">
      {projectCards.map((project, index) => {
        const isVertical = layout === "vertical";
        const column = index % 2;
        const row = Math.floor(index / 2);
        const cardX = isVertical ? x : x + column * 68;
        const cardY = isVertical ? y + index * 36 : y + row * 34;
        const cardWidth = isVertical ? 114 : 58;
        const cardHeight = isVertical ? 30 : 28;
        const titleSize = isVertical ? 8.4 : 6.4;
        const metaSize = isVertical ? 6.3 : 5.2;
        const titleX = isVertical ? cardX + 30 : cardX + 6;
        const titleY = isVertical ? cardY + 15 : cardY + 21;
        const metaY = isVertical ? cardY + 24 : cardY + 26;

        return (
          <g
            key={project.title}
            className="cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1"
            tabIndex="0"
            aria-label={`${project.title}, ${project.meta}`}
          >
            <rect x={cardX} y={cardY} width={cardWidth} height={cardHeight} rx="7" fill="#12222b" />
            <rect x={cardX + 6} y={cardY + 7} width="16" height="10" rx="2" fill={deskHeroColors.orange} />
            <path d={`M ${cardX + 8} ${cardY + 7} L ${cardX + 13} ${cardY + 4} L ${cardX + 22} ${cardY + 7}`} fill={deskHeroColors.orange} />
            <text x={titleX} y={titleY} fill="#eef4fb" fontSize={titleSize} fontWeight="800">
              {project.title}
            </text>
            <text x={titleX} y={metaY} fill="#9bb0b8" fontSize={metaSize} fontWeight="700">
              {project.meta}
            </text>
          </g>
        );
      })}
    </g>
  );
}
