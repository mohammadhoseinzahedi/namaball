"use client";
import { useThemeContext } from "@/context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center space-x-2">
      <Sun className="w-5 h-5 text-yellow-500 dark:text-gray-500" />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700"
      />
      <Moon className="w-5 h-5 text-gray-500 dark:text-yellow-500" />
    </div>
  );
};

export default ThemeSwitch;
