import { createContext } from "react";
import type { Lang, Translations } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
