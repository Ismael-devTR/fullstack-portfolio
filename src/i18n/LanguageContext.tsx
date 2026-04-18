import { useState, type ReactNode } from "react";
import translations, { type Lang } from "./translations";
import { LanguageContext } from "./context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return saved === "es" ? "es" : "en";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
