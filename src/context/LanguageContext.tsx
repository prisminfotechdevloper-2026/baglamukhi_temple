"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Language, Translations } from "@/i18n/types";
import { translations } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "baglamukhi_preferred_language";
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", callback);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", callback);
    }
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "hi";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved === "en" ? "en" : "hi";
  } catch {
    return "hi";
  }
}

function getServerSnapshot(): Language {
  return "hi";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (newLang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
    } catch {
      // Ignore storage errors
    }
    emitChange();
  };

  const toggleLanguage = () => {
    const nextLang = language === "hi" ? "en" : "hi";
    setLanguage(nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
