"use server";

import { NextResponse } from "next/server";

// Weather proxy using Open-Meteo API (free, no API key required)
// Uses geocoding to find location, then fetches current weather

// Weather code to description mapping (simplified)
const weatherCodeMap = {
  0: { main: "Clear", icon: "01d" },
  1: { main: "Clear", icon: "01d" },
  2: { main: "Partly Cloudy", icon: "02d" },
  3: { main: "Cloudy", icon: "03d" },
  45: { main: "Fog", icon: "50d" },
  48: { main: "Fog", icon: "50d" },
  51: { main: "Drizzle", icon: "09d" },
  53: { main: "Drizzle", icon: "09d" },
  55: { main: "Drizzle", icon: "09d" },
  56: { main: "Freezing Drizzle", icon: "09d" },
  57: { main: "Freezing Drizzle", icon: "09d" },
  61: { main: "Rain", icon: "10d" },
  63: { main: "Rain", icon: "10d" },
  65: { main: "Rain", icon: "10d" },
  66: { main: "Freezing Rain", icon: "10d" },
  67: { main: "Freezing Rain", icon: "10d" },
  71: { main: "Snow", icon: "13d" },
  73: { main: "Snow", icon: "13d" },
  75: { main: "Snow", icon: "13d" },
  77: { main: "Snow", icon: "13d" },
  80: { main: "Rain", icon: "09d" },
  81: { main: "Rain", icon: "09d" },
  82: { main: "Rain", icon: "09d" },
  85: { main: "Snow", icon: "13d" },
  86: { main: "Snow", icon: "13d" },
  95: { main: "Thunderstorm", icon: "11d" },
  96: { main: "Thunderstorm", icon: "11d" },
  99: { main: "Thunderstorm", icon: "11d" },
};

export async function GET() {
  const cityName = process.env.WEATHER_CITY || "Dublin";
  const countryCode = process.env.WEATHER_COUNTRY || "IE";

  try {
    // Step 1: Geocoding - get coordinates for the city
    const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      cityName
    )}&count=1&language=en&format=json`;

    const geoRes = await fetch(geocodeUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!geoRes.ok) {
      throw new Error("Geocoding failed");
    }

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const location = geoData.results[0];
    const latitude = location.latitude;
    const longitude = location.longitude;
    const name = location.name;
    const country = location.country_code?.toUpperCase() || countryCode;

    // Step 2: Get current weather using coordinates
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;

    const weatherRes = await fetch(weatherUrl, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!weatherRes.ok) {
      throw new Error("Weather fetch failed");
    }

    const weatherData = await weatherRes.json();

    if (!weatherData.current) {
      throw new Error("No current weather data");
    }

    const weatherCode = weatherData.current.weather_code;
    const weatherInfo = weatherCodeMap[weatherCode] || {
      main: "Clouds",
      icon: "03d",
    };

    // Return data in a format compatible with the frontend
    return NextResponse.json({
      name: name,
      sys: { country: country },
      main: { temp: Math.round(weatherData.current.temperature_2m) },
      weather: [
        {
          main: weatherInfo.main,
          icon: weatherInfo.icon,
        },
      ],
      _fallback: false,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Open-Meteo API error:", error);
    }
    // Return fallback data
    return NextResponse.json({
      name: "Dublin",
      sys: { country: "IE" },
      main: { temp: 14 },
      weather: [{ main: "Clouds", icon: "03d" }],
      _fallback: true,
    });
  }
}


