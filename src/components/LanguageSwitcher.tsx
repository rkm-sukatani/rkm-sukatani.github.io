import { useI18n } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";

const OPTIONS: Array<{ id: Locale; short: string; lang: string }> = [
  { id: "id", short: "ID", lang: "id" },
  { id: "en", short: "EN", lang: "en" },
  { id: "ar", short: "ع", lang: "ar" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const names: Record<Locale, string> = {
    id: t("lang.id"),
    en: t("lang.en"),
    ar: t("lang.ar"),
  };

  return (
    <div
      role="group"
      aria-label={t("lang.group")}
      className={`inline-flex items-center rounded-lg border border-slate-300 bg-white p-0.5 ${className}`}
    >
      {OPTIONS.map((option) => {
        const active = locale === option.id;
        return (
          <button
            key={option.id}
            type="button"
            lang={option.lang}
            aria-pressed={active}
            aria-label={names[option.id]}
            title={names[option.id]}
            onClick={() => setLocale(option.id)}
            className={`min-w-9 px-2 py-1 rounded-md text-xs font-bold leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-1 ${
              active ? "bg-[#047857] text-white" : "text-slate-800 hover:bg-emerald-50"
            }`}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
