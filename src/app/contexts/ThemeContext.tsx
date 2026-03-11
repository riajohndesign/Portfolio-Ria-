import { createContext, useContext, useEffect, ReactNode } from "react";

export type Theme = "noir";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "noir" });

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Clear any previously saved theme so localStorage never overrides noir
    try { localStorage.removeItem("rj-theme"); } catch {}
    document.body.style.background = "#0A0A0A";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "noir" }}>
      <div className="theme-noir">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);