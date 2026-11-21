import { useI18n } from "@/i18n/LanguageContext";

/** Keeps the Indonesian source available under a translated legal excerpt. */
export function OriginalDetails({ text }: { text: string }) {
  const { locale, t } = useI18n();
  if (locale === "id" || !text.trim()) return null;
  return (
    <details className="mt-2 text-[11px] text-slate-500">
      <summary className="cursor-pointer font-semibold text-slate-600">{t("common.originalId")}</summary>
      <p lang="id" dir="ltr" className="mt-1 leading-relaxed text-start">
        {text}
      </p>
    </details>
  );
}
