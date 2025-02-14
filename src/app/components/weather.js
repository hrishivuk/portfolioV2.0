"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Dublin, IE");
  const [loading, setLoading] = useState(true);
  const [dateTime, setDateTime] = useState("");

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
            temp: Math.round(data.main.temp),
            temp_max: Math.round(data.main.temp_max),
            temp_min: Math.round(data.main.temp_min),
          },
        });

        setLocation(data.name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full max-w-sm mx-auto p-5 rounded-3xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      {loading ? (
        <p className="text-gray-100">Fetching weather data...</p>
      ) : (
        weather && (
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold">{location}</h2>
            <p className="text-sm">{dateTime}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-16 h-16"
            />
            <p className="text-5xl font-bold">{weather.main.temp}°C</p>
            <p className="text-lg capitalize">
              {weather.weather[0].description}
            </p>
            <div className="flex gap-4 text-sm">
              <p>High: {weather.main.temp_max}°C</p>
              <p>Low: {weather.main.temp_min}°C</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
