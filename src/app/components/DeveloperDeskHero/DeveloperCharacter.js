import { deskHeroColors } from "./data";

export default function DeveloperCharacter() {
  return (
    <g aria-label="Cartoon developer seated at the desk">
      <g aria-hidden="true">
        <rect x="322" y="314" width="96" height="116" rx="30" fill={deskHeroColors.chair} />
        <rect x="396" y="352" width="28" height="104" rx="14" fill={deskHeroColors.deskDark} />
        <rect x="334" y="420" width="22" height="70" rx="11" fill={deskHeroColors.deskDark} />
        <rect x="376" y="426" width="24" height="66" rx="12" fill={deskHeroColors.chair} />
      </g>

      <g>
        <path d="M 318 282 C 338 252 386 250 406 284 L 418 350 L 306 350 Z" fill={deskHeroColors.orange} />
        <path d="M 325 348 C 338 382 390 382 408 348 Z" fill={deskHeroColors.orangeSoft} opacity="0.35" />
        <rect x="350" y="226" width="38" height="50" rx="18" fill={deskHeroColors.skin} />
        <path d="M 342 226 C 344 202 386 198 398 220 C 393 218 386 220 381 225 C 371 218 358 219 342 226 Z" fill={deskHeroColors.deskDark} />
        <circle cx="394" cy="236" r="12" fill={deskHeroColors.deskDark} />
        <rect x="392" y="228" width="14" height="36" rx="7" fill={deskHeroColors.chair} />

        <path
          className="desk-hero__hand"
          d="M 322 304 C 282 320 274 342 236 344"
          fill="none"
          stroke={deskHeroColors.skin}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          className="desk-hero__hand"
          d="M 404 306 C 434 324 444 342 478 342"
          fill="none"
          stroke={deskHeroColors.skin}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <ellipse cx="236" cy="344" rx="12" ry="6" fill={deskHeroColors.skin} />
        <ellipse cx="478" cy="342" rx="12" ry="6" fill={deskHeroColors.skin} />
      </g>
    </g>
  );
}
