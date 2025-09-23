import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme ? savedTheme === "dark" : true;
    setIsDark(prefersDark);
    updateTheme(prefersDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    updateTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
    </Button>
  );
}