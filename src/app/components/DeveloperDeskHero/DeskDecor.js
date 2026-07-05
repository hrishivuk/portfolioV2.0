import { deskHeroColors } from "./data";

export default function DeskDecor({ showLampAndPlant = false }) {
  return (
    <g aria-label="Desk decor">
      {showLampAndPlant && (
        <g className="desk-hero__lamp" aria-hidden="true" transform="translate(706 0) scale(-0.86 0.86)">
          <ellipse cx="126" cy="348" rx="34" ry="7" fill={deskHeroColors.deskDark} />
          <path d="M 128 344 L 150 268" stroke={deskHeroColors.orange} strokeWidth="8" strokeLinecap="round" />
          <path d="M 150 268 L 106 218" stroke={deskHeroColors.orange} strokeWidth="8" strokeLinecap="round" />
          <circle cx="150" cy="268" r="9" fill={deskHeroColors.deskDark} />
          <path d="M 78 204 L 126 178 L 144 214 L 94 240 Z" fill={deskHeroColors.orange} />
          <path className="desk-hero__lamp-glow" d="M 86 238 L 150 352 L 48 352 Z" fill={deskHeroColors.orangeSoft} opacity="0.12" />
        </g>
      )}

      <g aria-label="Coffee cup">
        <path className="desk-hero__steam" d="M 236 319 C 226 306 246 298 234 284" fill="none" stroke={deskHeroColors.orangeSoft} strokeWidth="3" strokeLinecap="round" opacity="0.65" />
        <path className="desk-hero__steam" d="M 254 320 C 244 306 264 302 252 288" fill="none" stroke={deskHeroColors.orangeSoft} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        <rect x="224" y="326" width="44" height="32" rx="7" fill={deskHeroColors.paper} />
        <path d="M 267 335 C 286 333 286 351 267 350" fill="none" stroke={deskHeroColors.paper} strokeWidth="7" strokeLinecap="round" />
        <rect x="230" y="333" width="31" height="6" rx="3" fill={deskHeroColors.orangeSoft} />
      </g>

      {showLampAndPlant && (
        <g aria-label="Plant">
          <rect x="58" y="319" width="52" height="39" rx="7" fill={deskHeroColors.deskDark} />
          <path d="M 84 322 L 84 258" stroke={deskHeroColors.plantDark} strokeWidth="5" strokeLinecap="round" />
          <ellipse className="desk-hero__plant-leaf" cx="60" cy="277" rx="15" ry="34" fill={deskHeroColors.plant} transform="rotate(-38 60 277)" />
          <ellipse className="desk-hero__plant-leaf" cx="88" cy="263" rx="14" ry="36" fill={deskHeroColors.plantDark} transform="rotate(16 88 263)" />
          <ellipse className="desk-hero__plant-leaf" cx="112" cy="284" rx="15" ry="35" fill={deskHeroColors.plant} transform="rotate(40 112 284)" />
          <ellipse className="desk-hero__plant-leaf" cx="68" cy="314" rx="12" ry="25" fill={deskHeroColors.plantDark} transform="rotate(-55 68 314)" />
        </g>
      )}

      <g aria-hidden="true">
        <rect x="286" y="334" width="54" height="9" rx="3" fill={deskHeroColors.orange} />
        <rect x="276" y="343" width="66" height="9" rx="3" fill={deskHeroColors.paper} />
        <rect x="268" y="352" width="78" height="9" rx="3" fill={deskHeroColors.deskDark} />
      </g>
    </g>
  );
}
