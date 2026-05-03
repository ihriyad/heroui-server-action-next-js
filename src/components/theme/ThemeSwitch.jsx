"use client"
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitch;
