import ProjectCards from "./ProjectCards";
import WeatherWidget from "./WeatherWidget";
import { codeLines, deskHeroColors } from "./data";

function CodeMonitor() {
  const toneColor = {
    muted: "#8fa4c8",
    accent: deskHeroColors.orangeSoft,
    light: "#eef4fb",
  };

  return (
    <g aria-label="Code snippet monitor">
      <rect x="252" y="168" width="246" height="152" rx="10" fill={deskHeroColors.desk} />
      <rect x="264" y="180" width="222" height="128" rx="6" fill={deskHeroColors.screen} />
      <rect x="280" y="196" width="54" height="5" rx="2.5" fill={deskHeroColors.orange} />
      {codeLines.map((line, index) => (
        <text
          key={`${line.text}-${index}`}
          x="280"
          y={218 + index * 14}
          fill={toneColor[line.tone]}
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontWeight="700"
        >
          {line.text}
        </text>
      ))}
      <rect className="desk-hero__cursor" x="376" y="288" width="3" height="10" rx="1.5" fill={deskHeroColors.orange} />
      <rect x="369" y="320" width="12" height="36" rx="4" fill={deskHeroColors.desk} />
      <rect x="331" y="352" width="88" height="10" rx="5" fill={deskHeroColors.desk} />
    </g>
  );
}

function ProductMonitor({ weather }) {
  return (
    <g aria-label="Projects and Dublin weather monitor">
      <rect x="92" y="132" width="144" height="204" rx="12" fill={deskHeroColors.desk} />
      <rect x="104" y="146" width="120" height="176" rx="7" fill={deskHeroColors.screen} />
      <WeatherWidget weather={weather} x={107} y={154} compact />
      <ProjectCards x={107} y={196} layout="vertical" />
      <rect x="158" y="336" width="12" height="20" rx="4" fill={deskHeroColors.desk} />
      <rect x="124" y="352" width="80" height="10" rx="5" fill={deskHeroColors.desk} />
    </g>
  );
}

export default function MonitorSetup({ weather }) {
  return (
    <g aria-label="Dual monitor setup">
      <CodeMonitor />
      <ProductMonitor weather={weather} />
    </g>
  );
}
