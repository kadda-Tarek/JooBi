import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
//import userImage from "assets/img/team-1-800x800.jpg"; // Import direct

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!dropdownOpen) {
      createPopper(btnRef.current, dropdownRef.current, {
        placement: "bottom-start",
      });
    }
    setDropdownOpen(!dropdownOpen);
  };

  // Fermer le dropdown lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <button
        className="text-blueGray-500 block focus:outline-none"
        ref={btnRef}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="User"
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={""}
            />
          </span>
        </div>
      </button>

      <div
        ref={dropdownRef}
        className={`absolute right-0 mt-2 bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100"
        >
          Profil
        </a>
        <a
          href="#"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100"
        >
          Paramètres
        </a>
        <a
          href="#"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100"
        >
          Déconnexion
        </a>
      </div>
    </div>
  );
};

export default UserDropdown;
