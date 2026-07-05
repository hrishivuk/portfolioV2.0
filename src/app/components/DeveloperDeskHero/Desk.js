import { deskHeroColors } from "./data";

export default function Desk() {
  return (
    <g aria-hidden="true">
      <rect x="86" y="350" width="468" height="48" rx="8" fill={deskHeroColors.desk} />
      <rect x="122" y="398" width="18" height="92" rx="8" fill={deskHeroColors.deskDark} opacity="0.72" />
      <rect x="500" y="398" width="18" height="92" rx="8" fill={deskHeroColors.deskDark} opacity="0.72" />
      <path d="M 114 398 L 150 398 L 134 500 L 104 500 Z" fill={deskHeroColors.deskDark} opacity="0.42" />
      <path d="M 488 398 L 526 398 L 536 500 L 506 500 Z" fill={deskHeroColors.deskDark} opacity="0.42" />
    </g>
  );
}
