// src/components/ThemeButton.jsx
import React, { useState, useEffect, useRef } from "react";
import { setTheme } from "../theme";

const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "system"
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    setTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const themes = [
    {
      label: "Light",
      value: "light",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-sun h-4 w-4"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      ),
    },
    {
      label: "Dark",
      value: "dark",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-moon h-4 w-4"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      ),
    },
    {
      label: "System",
      value: "system",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-monitor h-4 w-4"
        >
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 dark:bg-gray-800 text-sm px-2 py-2 rounded flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <span className="flex items-center justify-center gap-2 text-sm">
          {themes.find((t) => t.value === currentTheme)?.icon}{" "}
          {themes.find((t) => t.value === currentTheme)?.label}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down size-4 opacity-50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white dark:bg-gray-800 rounded shadow-lg border dark:border-gray-700">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value)}
              className={`w-full px-2 py-2 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 ${
                currentTheme === theme.value
                  ? "bg-gray-100 dark:bg-gray-700 text-sm font-medium"
                  : ""
              }`}
            >
              <span className="flex items-center gap-2 text-sm">
                {theme.icon} {theme.label}
              </span>
              {currentTheme === theme.value && (
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    stroke="currentColor"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
