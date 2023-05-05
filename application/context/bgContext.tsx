import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  bg: string,
  setBg: (value: string) => void
}

const defaultColor = ''
export const bgContext = createContext({});

export const BgProvider = ({ children }: { children: React.ReactNode }) => {
  const [bg, setBg] = useState<string>(defaultColor)
console.log(bg)
  return (
    <bgContext.Provider value={{bg, setBg}}>{children}</bgContext.Provider>
  )
}
export const useBgContext = () => useContext(bgContext) as ThemeContextType;
