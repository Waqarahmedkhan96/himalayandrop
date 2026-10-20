'use client';
// Makes the page language available to every client component.
import { createContext, useContext } from 'react';

const LangContext = createContext('en');

export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// const t = useT({ en: {...}, da: {...} })
export function useT(dict) {
  const lang = useContext(LangContext);
  return dict[lang] ?? dict.en;
}
