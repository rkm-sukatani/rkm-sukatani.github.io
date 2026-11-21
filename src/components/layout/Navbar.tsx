import React, { useEffect, useState } from "react";
import { Megaphone, Menu, X } from "lucide-react";
import rkm from "@/data/rkm.json";
import { useI18n } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function kabarDukaUrl(message: string) {
  return `https://wa.me/${rkm.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function Navbar({ currentPath = "/", onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, tx, locale } = useI18n();

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const apply = () => {
      document.documentElement.style.setProperty("--site-header-h", `${header.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, [mobileMenuOpen, locale]);
  const role = tx(rkm.contact.role);
  const waUrl = kabarDukaUrl(t("nav.waMessage", { name: rkm.contact.name, role }));

  const navLinks = [
    { label: t("nav.tentang"), shortLabel: t("nav.tentangShort"), href: "/tentang" },
    { label: t("nav.layanan"), shortLabel: t("nav.layananShort"), href: "/layanan" },
    { label: t("nav.keuangan"), shortLabel: t("nav.keuanganShort"), href: "/keuangan" },
    { label: t("nav.struktur"), shortLabel: t("nav.strukturShort"), href: "/struktur-organisasi" },
    { label: t("nav.adart"), shortLabel: t("nav.adart"), href: "/ad-art" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const linkClass = (active: boolean) =>
    `px-2.5 xl:px-3 py-2 rounded-lg transition whitespace-nowrap ${
      active ? "text-emerald-800 bg-emerald-50 font-bold" : "hover:text-emerald-700 hover:bg-emerald-50"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 min-h-20 py-2">
          <a href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2.5 sm:gap-3 group text-start shrink-0">
            <img
              src="/favicon.svg"
              alt={t("common.logoAlt", { name: rkm.name })}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="max-w-36 sm:max-w-none">
              <div className="font-bold text-base sm:text-lg leading-tight text-[#064e3b] whitespace-nowrap">{rkm.name}</div>
              <div className="hidden max-md:block xl:block text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide max-w-[9.5rem] sm:max-w-[11rem] truncate">{t("nav.tagline")}</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 xl:gap-2">
            <nav className="flex items-center gap-1 text-xs xl:text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass(currentPath === link.href)}>
                  <span className="hidden xl:inline">{link.label}</span>
                  <span className="xl:hidden">{link.shortLabel}</span>
                </a>
              ))}
            </nav>
            <LanguageSwitcher />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.kabar")}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-xs xl:text-sm shadow-sm hover:shadow-md transition active:scale-95 ms-1 whitespace-nowrap shrink-0"
            >
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span className="hidden xl:inline">{t("nav.kabar")}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]"
              aria-label={mobileMenuOpen ? t("nav.menuClose") : t("nav.menuOpen")}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition text-center ${
                  currentPath === link.href ? "text-emerald-800 bg-emerald-50 font-bold" : "text-slate-700 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-medium text-sm shadow"
              >
                <Megaphone className="w-4 h-4 text-amber-300" />
                <span>{t("nav.kabar")}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
