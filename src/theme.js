// src/theme.js

export const setTheme = (theme) => {

    const root = document.documentElement;

    if (theme === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", "system");
    } else {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }
};

export const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
};
