import { NextResponse } from "next/server";

export async function GET() {
  const apiKey =
    process.env.WEATHER_API_KEY || process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  // Check if API key exists
  if (!apiKey) {
    console.error("Weather API key is missing");
    return NextResponse.json(
      { error: "Weather API key not configured" },
      { status: 500 }
    );
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the API returned an error
    if (data.cod && data.cod !== 200) {
      throw new Error(data.message || "Weather API returned an error");
    }

    const weatherData = {
      ...data,
      main: {
        ...data.main,
        temp: Math.round(data.main.temp),
        temp_max: Math.round(data.main.temp_max),
        temp_min: Math.round(data.main.temp_min),
      },
    };

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch weather data",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
