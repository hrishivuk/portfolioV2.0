import { deskHeroColors, mockWeather } from "./data";

function WeatherIcon({ condition }) {
  const label = condition?.toLowerCase() || "";

  if (label.includes("clear")) {
    return (
      <g aria-hidden="true">
        <circle cx="0" cy="0" r="9" fill={deskHeroColors.orange} />
        <path d="M -3 5 C 4 0 12 2 15 7 C 8 9 2 9 -5 8 Z" fill="#eef4fb" opacity="0.9" />
      </g>
    );
  }

  if (label.includes("rain") || label.includes("drizzle")) {
    return (
      <g aria-hidden="true">
        <path d="M -11 3 C -8 -8 7 -9 11 1 C 18 1 18 12 9 12 L -8 12 C -17 12 -18 4 -11 3 Z" fill={deskHeroColors.plant} />
        <path d="M -5 17 L -7 22 M 3 17 L 1 22 M 11 17 L 9 22" stroke={deskHeroColors.orange} strokeWidth="2" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g aria-hidden="true">
      <path d="M -12 5 C -9 -8 7 -10 12 1 C 20 1 20 13 10 13 L -8 13 C -18 13 -20 5 -12 5 Z" fill={deskHeroColors.plant} />
      <path d="M -5 7 C 0 3 8 5 11 10" fill="none" stroke="#eef4fb" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

export default function WeatherWidget({ weather = mockWeather, x = 394, y = 166, compact = false }) {
  if (compact) {
    return (
      <g aria-label={`${weather.location} weather placeholder: ${weather.temp} degrees and ${weather.condition}`}>
        <rect x={x} y={y} width="114" height="34" rx="9" fill={deskHeroColors.screenSoft} />
        <g transform={`translate(${x + 18} ${y + 17}) scale(0.66)`}>
          <WeatherIcon condition={weather.condition} />
        </g>
        <text x={x + 36} y={y + 14} fill="#eef4fb" fontSize="8" fontWeight="800">
          {weather.location}
        </text>
        <text x={x + 36} y={y + 27} fill={deskHeroColors.orangeSoft} fontSize="11" fontWeight="900">
          {weather.temp}°C
        </text>
        <text x={x + 72} y={y + 27} fill="#8fa4c8" fontSize="6.4" fontWeight="700">
          {weather.condition}
        </text>
      </g>
    );
  }

  return (
    <g aria-label={`${weather.location} weather placeholder: ${weather.temp} degrees and ${weather.condition}`}>
      <rect x={x} y={y} width="120" height="52" rx="10" fill={deskHeroColors.screenSoft} />
      <g transform={`translate(${x + 26} ${y + 25})`}>
        <WeatherIcon condition={weather.condition} />
      </g>
      <text x={x + 48} y={y + 22} fill="#eef4fb" fontSize="9" fontWeight="700">
        {weather.location}
      </text>
      <text x={x + 48} y={y + 38} fill={deskHeroColors.orangeSoft} fontSize="14" fontWeight="800">
        {weather.temp}°C
      </text>
      <text x={x + 86} y={y + 38} fill="#8fa4c8" fontSize="8" fontWeight="700">
        {weather.condition}
      </text>
    </g>
  );
}
