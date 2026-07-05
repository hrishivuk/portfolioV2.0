import { deskHeroColors, workNotes } from "./data";

const handwritingFont = '"Bradley Hand", "Segoe Print", "Comic Sans MS", cursive';

export default function StickyNote({ x = 468, y = 58 }) {
  return (
    <g aria-label="What I do sticky note">
      <rect x={x} y={y} width="132" height="112" rx="10" fill={deskHeroColors.paper} />
      <rect x={x + 44} y={y - 6} width="44" height="14" rx="3" fill={deskHeroColors.orangeSoft} opacity="0.85" />
      <text x={x + 16} y={y + 28} fill={deskHeroColors.ink} fontSize="18" fontWeight="700" fontFamily={handwritingFont}>
        What I do
      </text>
      {workNotes.map((note, index) => (
        <g key={note}>
          <circle cx={x + 18} cy={y + 48 + index * 15} r="2.5" fill={deskHeroColors.orange} />
          <text
            x={x + 27}
            y={y + 52 + index * 15}
            fill={deskHeroColors.muted}
            fontSize="10.5"
            fontWeight="650"
            fontFamily={handwritingFont}
          >
            {note}
          </text>
        </g>
      ))}
    </g>
  );
}
