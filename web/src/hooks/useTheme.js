import { useEffect, useState } from "react";

const STORAGE_KEY = "aquib-theme";

function themeColor(theme) {
  return theme === "light" ? "#f6f2eb" : "#100e0c";
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const current = document.documentElement.getAttribute("data-theme");
    return current === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themeColor(theme));
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Storage can be blocked. The in-memory theme still applies. */
    }
  }, [theme]);

  const toggle = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
