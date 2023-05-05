'use client';

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})

type ThemeContextProviderType = {
  children: React.ReactNode;
}

type UseThemeContextType = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    const handleSetDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    useEffect(() => {
      if (darkMode === null) {
        const isDarkSet = localStorage.theme === 'dark';
        setDarkMode(isDarkSet)
      } else {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
        handleSetDarkMode()
        setDarkMode(darkMode)
      }

    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext) as UseThemeContextType;