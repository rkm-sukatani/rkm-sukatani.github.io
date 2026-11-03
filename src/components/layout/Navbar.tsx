import React, { useState } from "react";
import { Megaphone, Menu, X } from "lucide-react";
import rkm from "@/data/rkm.json";

export interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const KABAR_DUKA_URL = `https://wa.me/${rkm.contact.whatsapp}?text=${encodeURIComponent(
  `Assalamu'alaikum ${rkm.contact.name} (${rkm.contact.label}), saya ingin menyampaikan kabar duka.`
)}`;

export function Navbar({ currentPath = "/", onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Tentang RKM", shortLabel: "Tentang", href: "/tentang" },
    { label: "Layanan Jenazah", shortLabel: "Layanan", href: "/layanan" },
    { label: "Keuangan & Iuran", shortLabel: "Keuangan", href: "/keuangan" },
    { label: "Struktur Organisasi", shortLabel: "Struktur", href: "/struktur-organisasi" },
    { label: "AD/ART", shortLabel: "AD/ART", href: "/ad-art" },
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
        <div className="flex items-center justify-between h-20">
          <a href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2.5 sm:gap-3 group text-left shrink-0">
            <img
              src="/favicon.svg"
              alt={`Logo ${rkm.name}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="font-bold text-base sm:text-lg leading-tight text-[#064e3b]">{rkm.name}</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">Rukun Kematian Masyarakat · Desa Wangunsari</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 xl:gap-2">
            <nav className="flex items-center gap-1 text-xs xl:text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass(currentPath === link.href)}>
                  <span className="hidden lg:inline">{link.label}</span>
                  <span className="lg:hidden">{link.shortLabel}</span>
                </a>
              ))}
            </nav>
            <a
              href={KABAR_DUKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs xl:text-sm shadow-sm hover:shadow-md transition active:scale-95 ml-1 whitespace-nowrap shrink-0"
            >
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span>Lapor Kabar Duka</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-700" /> : <Menu className="w-6 h-6" />}
          </button>
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
                href={KABAR_DUKA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-medium text-sm shadow"
              >
                <Megaphone className="w-4 h-4 text-amber-300" />
                <span>Lapor Kabar Duka</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
