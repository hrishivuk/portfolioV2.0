"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Dublin, IE"); // Default to Dublin
  const [loading, setLoading] = useState(true);

  // Fetch weather data for the default location (Dublin)
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "113a1e834fe3383411bfb784fad3d9a1";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        const data = response.data;

        setWeather({
          ...data,
          main: {
            ...data.main,
            temp: Math.round(data.main.temp), // Round temperature to whole number
            temp_max: Math.round(data.main.temp_max), // Round max temp
            temp_min: Math.round(data.main.temp_min), // Round min temp
          },
        });

        setLocation(data.name); // Dynamically set the location name
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    // Call fetchWeather function
    fetchWeather();
  }, []);

  // Determine the gradient color based on weather condition
  const getBackgroundStyle = (condition) => {
    switch (condition) {
      case "Clear":
        return "bg-gradient-to-b from-yellow-400 via-orange-400 to-red-500"; // Sunny
      case "Clouds":
        return "bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600"; // Cloudy
      case "Rain":
        return "bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800"; // Rainy
      case "Snow":
        return "bg-gradient-to-b from-white via-blue-200 to-blue-400"; // Snowy
      case "Thunderstorm":
        return "bg-gradient-to-b from-gray-700 via-purple-700 to-black"; // Thunderstorm
      case "Drizzle":
        return "bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500"; // Light Rain
      case "Mist":
      case "Fog":
        return "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500"; // Misty
      case "Windy":
        return "bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700"; // Windy
      default:
        return "bg-gradient-to-b from-green-300 via-blue-300 to-purple-400"; // Default
    }
  };

  return (
    <div
      className={`w-full mx-auto p-3 rounded-[36px] shadow-md text-center text-white ${
        weather ? getBackgroundStyle(weather.weather[0].main) : ""
      }`}
    >
      {loading ? (
        <p className="text-gray-100">Loading weather data...</p>
      ) : (
        weather && (
          <div className="flex-col flex items-start gap-2">
            <div className="flex gap-2 justify-between items-center w-full">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                className="w-8 h-8"
              />
              <p className="text-xl font-bold">{location}</p>
            </div>
            <p className="text-4xl font-bold">{weather.main.temp}°C</p>
            <div className="flex gap-2">
              <p className="text-lg">{weather.main.temp_max}°C</p>
              <p className="text-lg">{weather.main.temp_min}°C</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
