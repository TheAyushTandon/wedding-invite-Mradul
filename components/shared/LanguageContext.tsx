"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, TRANSLATIONS, TranslationSchema } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: TRANSLATIONS.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check URL parameters e.g. ?lang=mr or ?lang=hi or ?lang=en
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get("lang") as Language | null;
      if (langParam && (langParam === "en" || langParam === "hi" || langParam === "mr")) {
        setLangState(langParam);
        localStorage.setItem("wedding_lang", langParam);
        return;
      }

      // 2. Check LocalStorage
      const saved = localStorage.getItem("wedding_lang") as Language | null;
      if (saved && (saved === "en" || saved === "hi" || saved === "mr")) {
        setLangState(saved);
      }
    } catch {
      // safe fallback
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wedding_lang", newLang);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        window.history.replaceState({}, "", url.toString());
      } catch {
        // safe fallback
      }
    }
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "en" as Language,
      setLang: () => {},
      t: TRANSLATIONS.en,
    };
  }
  return context;
}
