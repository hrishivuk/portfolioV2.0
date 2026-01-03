"use server";

import { NextResponse } from "next/server";

// Simple weather proxy for the hero card.
// Uses OpenWeather API if OPENWEATHER_API_KEY is set,
// otherwise falls back to a static stub so the UI never breaks.

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const defaultCity = process.env.WEATHER_CITY || "Dublin,IE";

  // Fallback static payload if no API key is configured
  if (!apiKey) {
    return NextResponse.json({
      name: "Dublin",
      sys: { country: "IE" },
      main: { temp: 14 },
      weather: [{ main: "Clouds", icon: "03d" }],
      _fallback: true,
    });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    defaultCity
  )}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("Weather API error:", res.status, res.statusText);
      }
      // Return a graceful fallback instead of an error status
      return NextResponse.json({
        name: "Dublin",
        sys: { country: "IE" },
        main: { temp: 14 },
        weather: [{ main: "Clouds", icon: "03d" }],
        _fallback: true,
      });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Weather API request failed:", error);
    }
    // Final safety fallback
    return NextResponse.json({
      name: "Dublin",
      sys: { country: "IE" },
      main: { temp: 14 },
      weather: [{ main: "Clouds", icon: "03d" }],
      _fallback: true,
    });
  }
}


