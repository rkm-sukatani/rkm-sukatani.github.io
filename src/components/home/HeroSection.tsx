import React from "react";
import { HandHeart, Wallet, Phone, Megaphone, ShieldCheck } from "lucide-react";
import rkm from "@/data/rkm.json";
import { kabarDukaUrl } from "@/components/layout/Navbar";
import { useI18n } from "@/i18n/LanguageContext";

export interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

function joinKampung(names: string[], locale: string) {
  return names.join(locale === "ar" ? " و " : " & ");
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t, tx, locale } = useI18n();
  const kampung = joinKampung(rkm.coverage.kampung, locale);
  const hours = tx(rkm.serviceHours.text);
  const coverage = tx(rkm.coverage.summary);
  const role = tx(rkm.contact.role);
  const waUrl = kabarDukaUrl(t("nav.waMessage", { name: rkm.contact.name, role }));

  const go = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <section id="beranda" className="relative bg-pattern text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/90 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {t("hero.badge", { kampung })}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {t("hero.title")} <span className="text-amber-300">{rkm.name}</span>
            </h1>

            <p className="text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t("hero.lead", { hours, coverage })}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/layanan"
                onClick={(e) => go(e, "/layanan")}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm shadow-lg shadow-amber-500/30 transition flex items-center gap-2"
              >
                <HandHeart className="w-4 h-4" /> {t("hero.ctaLayanan")}
              </a>
              <a
                href="/keuangan"
                onClick={(e) => go(e, "/keuangan")}
                className="px-6 py-3 rounded-xl bg-emerald-800/70 hover:bg-emerald-800 border border-emerald-500/40 text-white font-semibold text-sm transition flex items-center gap-2"
              >
                <Wallet className="w-4 h-4" /> {t("hero.ctaKeuangan")}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-800/60 text-center sm:text-start">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{rkm.equipment.length}</div>
                <div className="text-xs text-emerald-200">{t("hero.statEquipment")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{rkm.coverage.rt}</div>
                <div className="text-xs text-emerald-200">{t("hero.statCoverage", { rw: rkm.coverage.rw, kampung })}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <bdi dir="ltr">{rkm.finance.iuranAmount}</bdi>
                </div>
                <div className="text-xs text-emerald-200">{t("hero.statIuran")}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 text-start">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -end-12 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4 gap-2">
                <span className="bg-amber-500 text-slate-950 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider">
                  {t("hero.cardBadge")}
                </span>
                <span className="text-xs text-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> {t("hero.fardhu")}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-1">{role}</h2>
              <p className="text-slate-200 text-sm mb-4">{tx(rkm.contact.name)}</p>

              <div className="space-y-2 bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/20 text-xs text-emerald-100 mb-5">
                <div className="flex items-center justify-between gap-3">
                  <span>{t("hero.contact")}</span>
                  <span className="font-bold text-amber-300 font-mono flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> <bdi dir="ltr">{rkm.contact.phone}</bdi>
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>{t("hero.hours")}</span>
                  <span className="font-bold text-amber-300">{hours}</span>
                </div>
                <div className="pt-1.5 border-t border-emerald-500/20 text-emerald-200">{t("hero.familyNote")}</div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-1.5 shadow"
              >
                <Megaphone className="w-4 h-4 text-emerald-700" /> {t("hero.wa")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
