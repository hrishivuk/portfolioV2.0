"use client";
import { useState, useEffect } from "react";

const DateTime = () => {
  const [day, setDay] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [time, setTime] = useState("");

  // Format the date to "Jan 05, 2025"
  const formatDate = (date) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Get current date and time without seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDay(currentDate.toLocaleDateString("en-US", { weekday: "long" }));
      setFormattedDate(formatDate(currentDate));

      // Format time to exclude seconds
      setTime(
        currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto bg-white p-4 rounded-[36px] shadow-md flex flex-col gap-2 items-center">
      <div className="">
        <p className="text-gray-600 text-[28px] font-bold">{time}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-800 text-[24px] font-bold uppercase">{day}</p>
        <p className="text-gray-600 text-[18px] font-bold">{formattedDate}</p>
      </div>
    </div>
  );
};

export default DateTime;
