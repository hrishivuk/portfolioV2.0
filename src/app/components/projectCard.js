"use client";

import { useState } from "react";
import Image from "next/image";

const ProjectCardWithPopup = ({
  name,
  image,
  category,
  description,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Project Card */}
      <div
        className="bg-light-blackFill dark:bg-light-grey rounded-[36px] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={openModal}
      >
        <div className="relative h-48 bg-gradient-to-br from-light-purple to-light-orange flex items-center justify-center">
          <div className="text-4xl">
            {category === "Design"
              ? "🎨"
              : category === "Development"
              ? "💻"
              : "🚀"}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-light-purple/20 text-light-purple px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
          <h2 className="text-lg font-bold text-white dark:text-black mb-3 line-clamp-2">
            {name}
          </h2>
          <p className="text-light-text dark:text-gray-600 text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Modal (Popup) */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-11/12 max-w-2xl  max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">{name}</h2>
              <button onClick={closeModal} className="text-xl font-semibold">
                X
              </button>
            </div>
            {/* <Image
              src={image}
              alt={name}
              width={600}
              height={400}
              className="rounded-lg mt-4"
            /> */}

            {/* Render Children (Content passed directly into the modal) */}
            <p className="mt-4 text-sm text-gray-600">{description}</p>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardWithPopup;
