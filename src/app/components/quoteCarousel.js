"use client";
import { useState, useEffect } from "react";

// Sample quotes related to designers and developers
const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
];

// Gen Z-inspired background colors
const colors = [
  "#F48FB1", // Light Pink
  "#81C784", // Light Green
  "#FFEB3B", // Yellow
  "#4FC3F7", // Light Blue
  "#FF9800", // Orange
  "#9C27B0", // Purple
  "#E91E63", // Pink
];

const QuoteCarousel = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentBgColor, setCurrentBgColor] = useState(colors[0]);

  // Automatically change the quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentQuoteIndex === quotes.length - 1 ? 0 : currentQuoteIndex + 1;
      setCurrentQuoteIndex(nextIndex);
      setCurrentBgColor(colors[nextIndex % colors.length]); // Change background color
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentQuoteIndex]);

  const currentQuote = quotes[currentQuoteIndex];

  // Function to dynamically set text color based on background
  const getTextColor = (bgColor) => {
    // Use dark text for lighter backgrounds and light text for darker backgrounds
    const lightColors = ["#FFEB3B", "#F48FB1", "#FF9800"];
    return lightColors.includes(bgColor) ? "text-gray-800" : "text-white";
  };

  return (
    <div
      className={`flex justify-center flex-col col-span-2 w-full mx-auto p-3 rounded-[36px] shadow-md text-center ${getTextColor(
        currentBgColor
      )}`}
      style={{ backgroundColor: currentBgColor }}
    >
      <p className="text-xl font-semibold">"{currentQuote.text}"</p>
      <p className="text-md mt-2">- {currentQuote.author}</p>
    </div>
  );
};

export default QuoteCarousel;
