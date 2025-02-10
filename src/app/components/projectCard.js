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
        className="bg-light-blackFill text-white p-4 rounded-xl cursor-pointer hover:opacity-80 transition"
        onClick={openModal}
      >
        <Image
          src={image}
          alt={name}
          className="rounded-lg object-cover h-[200px] object-top"
        />

        <h2 className="text-lg font-bold mt-2">{name}</h2>
        <p className="text-sm text-gray-400">{category}</p>
      </div>

      {/* Modal (Popup) */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-11/12 max-w-2xl"
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
