import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "sand" | "noir" | "forest";

export interface ThemeConfig {
  id: Theme;
  label: string;
  swatch: string;
  bg: string;
}

export const THEMES: ThemeConfig[] = [
  { id: "sand",   label: "Sand",   swatch: "#F5F3EE", bg: "#F5F3EE" },
  { id: "noir",   label: "Noir",   swatch: "#0A0A0A", bg: "#0A0A0A" },
  { id: "forest", label: "Forest", swatch: "#0D1A12", bg: "#0D1A12" },
];

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "sand",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem("rj-theme") as Theme) || "noir";
    } catch {
      return "noir";
    }
  });

  useEffect(() => {
    try { localStorage.setItem("rj-theme", theme); } catch {}
    const cfg = THEMES.find((t) => t.id === theme);
    if (cfg) document.body.style.background = cfg.bg;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`} style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);