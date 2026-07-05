"use client";

import { useEffect, useState } from "react";
import { deskHeroColors } from "./data";

function getDublinTime() {
  return new Intl.DateTimeFormat("en-IE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Dublin",
  }).format(new Date());
}

export default function TimeWidget({ x = 488, y = 80 }) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    setTime(getDublinTime());
    const interval = window.setInterval(() => {
      setTime(getDublinTime());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <g aria-label={`Current Dublin time ${time}`}>
      <rect
        x={x}
        y={y}
        width="118"
        height="34"
        rx="17"
        fill="#eef4fb"
        opacity="0.92"
      />
      <circle cx={x + 18} cy={y + 17} r="8" fill="none" stroke={deskHeroColors.desk} strokeWidth="2" />
      <path d={`M ${x + 18} ${y + 17} L ${x + 18} ${y + 12} M ${x + 18} ${y + 17} L ${x + 22} ${y + 17}`} stroke={deskHeroColors.orange} strokeWidth="1.5" strokeLinecap="round" />
      <text
        x={x + 34}
        y={y + 22}
        fill={deskHeroColors.ink}
        fontSize="12"
        fontWeight="700"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        {time}
      </text>
    </g>
  );
}
