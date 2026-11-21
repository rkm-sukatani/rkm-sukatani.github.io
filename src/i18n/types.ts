export type Locale = "id" | "en" | "ar";

export const LOCALES: Locale[] = ["id", "en", "ar"];

export const LOCALE_STORAGE_KEY = "rkm-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "id" || value === "en" || value === "ar";
}

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "id";
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* private mode */
  }
  return "id";
}
