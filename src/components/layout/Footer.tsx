import React from "react";
import { MessageCircle, ExternalLink } from "lucide-react";
import rkm from "@/data/rkm.json";

export interface FooterProps {
  onNavigate?: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang RKM" },
    { href: "/layanan", label: "Layanan Pemulasaraan Jenazah" },
    { href: "/keuangan", label: "Keuangan & Iuran RKM" },
    { href: "/struktur-organisasi", label: "Struktur Organisasi & Kontak" },
    { href: "/ad-art", label: "AD/ART Organisasi DKM & RKM" },
  ];

  return (
    <footer className="bg-[#064e3b] text-slate-300 text-xs pt-12 pb-8 border-t border-[#065f46] text-left print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#065f46]">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <img src="/favicon.svg" alt={`Logo ${rkm.name}`} className="w-7 h-7 rounded-lg shadow-sm" />
              <span>{rkm.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              {rkm.fullName}, terintegrasi secara kelembagaan dengan {rkm.parentOrganization}.
            </p>
            <div className="text-slate-400">
              <b>Alamat:</b> {rkm.address.fullAddress}.<br />
              <b>Wilayah layanan:</b> {rkm.coverage.summary}.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Navigasi</h4>
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
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Kanal Informasi</h4>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${rkm.coordinator.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp {rkm.coordinator.role}
              </a>
              <a href={rkm.parentSiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <ExternalLink className="w-4 h-4 text-emerald-400" /> Portal Masjid Nurul Falah (DKM)
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-400">
          <div>&copy; 2026 {rkm.name}. Seluruh hak cipta dilindungi.</div>
          <div className="text-emerald-300 font-semibold">Amanah &amp; Transparan dalam Pelayanan Fardhu Kifayah</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
