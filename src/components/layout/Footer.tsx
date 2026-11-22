import React from "react";
import { MessageCircle } from "lucide-react";
import rkm from "@/data/rkm.json";
import { useI18n } from "@/i18n/LanguageContext";

export interface FooterProps {
  onNavigate?: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, tx, locale } = useI18n();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const links = [
    { href: "/", label: t("footer.home") },
    { href: "/tentang", label: t("footer.about") },
    { href: "/layanan", label: t("footer.services") },
    { href: "/keuangan", label: t("footer.finance") },
    { href: "/struktur-organisasi", label: t("footer.structure") },
    { href: "/rencana", label: t("footer.plans") },
    { href: "/ad-art", label: t("footer.adart") },
  ];

  return (
    <footer className="bg-[#064e3b] text-slate-300 text-xs pt-12 pb-8 border-t border-[#065f46] text-start print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#065f46]">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <img src="/favicon.svg" alt={t("common.logoAlt", { name: rkm.name })} className="w-7 h-7 rounded-lg shadow-sm" />
              <span>{rkm.name}</span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              {tx(rkm.fullName)}. {tx(rkm.adArtQuotes.maksud.text)}{" "}
              <span className="text-emerald-200">({tx(rkm.adArtQuotes.maksud.source)})</span>
            </p>
            {locale !== "id" && (
              <p lang="id" dir="ltr" className="text-emerald-200/90 leading-relaxed max-w-md text-start">
                {t("common.translationMark")} {t("common.originalId")}: {rkm.adArtQuotes.maksud.text}
              </p>
            )}
            <div className="text-slate-300">
              <b>{t("footer.address")}</b> {tx(rkm.address.fullAddress)}.<br />
              <b>{t("footer.coverage")}</b> {tx(rkm.coverage.summary)}.
            </div>
          </div>

          <div>
            <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">{t("footer.nav")}</h2>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => handleLinkClick(e, l.href)} className="hover:text-amber-300 transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">{t("footer.channels")}</h2>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${rkm.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />{" "}
                {t("footer.whatsapp", { role: tx(rkm.contact.role), name: rkm.contact.name })}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-300 text-center sm:text-start">
          <div>{t("footer.copy", { name: rkm.name })}</div>
          <div className="text-emerald-300 font-semibold">{t("footer.motto")}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
