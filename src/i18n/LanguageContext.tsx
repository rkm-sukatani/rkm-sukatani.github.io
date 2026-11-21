import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { fill, ui, type UiKey } from "./ui";
import { LOCALE_STORAGE_KEY, readStoredLocale, type Locale } from "./types";

export type Dictionary = Record<string, string>;

const loaders: Record<Exclude<Locale, "id">, () => Promise<{ dict: Dictionary }>> = {
  en: () => import("./dict/en"),
  ar: () => import("./dict/ar"),
};

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiKey, vars?: Record<string, string | number>) => string;
  /** Translated prose. Indonesian source text is returned unchanged for locale "id". */
  tx: (text: string) => string;
  /** Translation lookup that keeps the "(menyusul)" and "[belum dikonfirmasi: …]" tokens intact. */
  txRaw: (text: string) => string;
  ready: boolean;
};

const I18nContext = createContext<I18nValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === "ar" ? "rtl" : "ltr";
  document.title = ui[locale]["meta.title"];
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", ui[locale]["meta.description"]);
}

const dictionaryCache: Partial<Record<Exclude<Locale, "id">, Dictionary>> = {};

/** Keep codes, amounts, and citations in visual order inside Arabic (RTL) text. */
const LTR_TOKEN =
  /https?:\/\/[^\s)]+|001\/RKM\/[A-Z]+\/\d{4}|(?:AD |ART )?Pasal \d+(?:–\d+)?(?: ayat \(\d+\)(?:(?:, \(\d+\))* dan \(\d+\))?)?(?: huruf [A-Za-z0-9–-]+(?: dan [a-z])?)?|Rp [\d.]+|\d{4}-\d{4}-\d{4}|7203516578|\b2\/3\b|RT \d+(?:–\d+|:[ ][A-Za-z]+(?:[ ][A-Za-z]+)?)?|RW \d+|Kp\. [A-Za-z]+/g;

function isolateLtr(text: string): string {
  return text.replace(LTR_TOKEN, (token) => `\u2066${token.replace(/ /g, "\u00A0")}\u2069`);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const initial = readStoredLocale();
  const [locale, setLocaleState] = useState<Locale>(initial);
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [ready, setReady] = useState(initial === "id");

  useEffect(() => {
    let cancelled = false;
    applyDocumentLocale(locale);
    if (locale === "id") {
      setDict(null);
      setReady(true);
      return;
    }
    const cached = dictionaryCache[locale];
    if (cached) {
      setDict(cached);
      setReady(true);
      return;
    }
    setDict(null);
    setReady(false);
    loaders[locale]().then((mod) => {
      dictionaryCache[locale] = mod.dict;
      if (cancelled) return;
      setDict(mod.dict);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore quota / private mode */
    }
    applyDocumentLocale(next);
    if (next !== "id" && !dictionaryCache[next]) setReady(false);
    setLocaleState(next);
  }, []);

  const txRaw = useCallback(
    (text: string) => {
      if (!text || locale === "id" || !dict) return text;
      const translated = dict[text] ?? text;
      return locale === "ar" ? isolateLtr(translated) : translated;
    },
    [dict, locale]
  );

  const tx = useCallback(
    (text: string) => {
      const translated = txRaw(text);
      if (!translated.includes("(menyusul)")) return translated;
      return translated.replaceAll("(menyusul)", ui[locale]["common.forthcoming"]);
    },
    [locale, txRaw]
  );

  const t = useCallback(
    (key: UiKey, vars?: Record<string, string | number>) => fill(ui[locale][key], vars),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, tx, txRaw, ready }),
    [locale, setLocale, t, tx, txRaw, ready]
  );

  return (
    <I18nContext.Provider value={value}>
      {ready ? children : <div className="min-h-screen bg-slate-50" aria-busy="true" />}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
