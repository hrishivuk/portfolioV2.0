"use client";

import Desk from "./Desk";
import DeskDecor from "./DeskDecor";
import MonitorSetup from "./MonitorSetup";
import StickyNote from "./StickyNote";
import TimeWidget from "./TimeWidget";
import { deskHeroColors, mockWeather } from "./data";

export default function DeveloperDeskHero({ weather = mockWeather }) {
  return (
    <div
      className="mx-auto w-full max-w-[650px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f] p-3 shadow-2xl shadow-black/25 sm:p-4"
      aria-label="Interactive coded illustration of a frontend developer desk"
    >
      <svg
        className="block h-auto w-full"
        viewBox="0 0 640 540"
        role="img"
        aria-labelledby="developer-desk-hero-title developer-desk-hero-desc"
      >
        <title id="developer-desk-hero-title">Developer desk hero illustration</title>
        <desc id="developer-desk-hero-desc">
          A flat SVG illustration with dual monitors, Dublin time and weather, project cards, code, and desk details.
        </desc>

        <rect width="640" height="540" rx="26" fill={deskHeroColors.card} />
        <path
          className="desk-hero__background-blob"
          d="M 136 156 C 178 62 314 54 398 96 C 508 152 548 274 480 382 C 406 494 226 470 138 396 C 58 328 88 238 136 156 Z"
          fill={deskHeroColors.cardBlob}
        />
        <path d="M 94 374 H 548" stroke="#26343a" strokeWidth="3" strokeLinecap="round" opacity="0.75" />

        <TimeWidget x={58} y={58} />
        <StickyNote />
        <MonitorSetup weather={weather} />
        <Desk />
        <DeskDecor />

        <g aria-hidden="true">
          <ellipse cx="322" cy="510" rx="210" ry="16" fill="#07111f" opacity="0.16" />
        </g>
      </svg>
    </div>
  );
}
