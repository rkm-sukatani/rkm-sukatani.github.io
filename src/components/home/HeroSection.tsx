import React from "react";
import { HandHeart, Wallet, Phone, Megaphone, ShieldCheck } from "lucide-react";
import rkm from "@/data/rkm.json";
import { KABAR_DUKA_URL } from "@/components/layout/Navbar";

export interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
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
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Rukun Kematian Muslim · Kp. Sukatani
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Pelayanan Fardhu Kifayah Jenazah Warga, <span className="text-amber-300">{rkm.name}</span>
            </h1>

            <p className="text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed">
              Mengelola perlengkapan pemulasaraan jenazah (keranda, kain kafan, pemandian, liang lahat) dan mengoordinasikan
              fardhu kifayah saat ada warga yang wafat, dengan pelaporan yang terintegrasi di bawah DKM Masjid Nurul Falah.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/layanan"
                onClick={(e) => go(e, "/layanan")}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm shadow-lg shadow-amber-500/30 transition flex items-center gap-2"
              >
                <HandHeart className="w-4 h-4" /> Layanan Jenazah
              </a>
              <a
                href="/keuangan"
                onClick={(e) => go(e, "/keuangan")}
                className="px-6 py-3 rounded-xl bg-emerald-800/70 hover:bg-emerald-800 border border-emerald-500/40 text-white font-semibold text-sm transition flex items-center gap-2"
              >
                <Wallet className="w-4 h-4" /> Keuangan &amp; Iuran RKM
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-800/60 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{rkm.equipment.length}</div>
                <div className="text-xs text-emerald-200">Jenis Perlengkapan Pemulasaraan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">Pos Terpisah</div>
                <div className="text-xs text-emerald-200">Dana Sosial / RKM di Laporan DKM</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-amber-200 italic">{rkm.finance.iuranAmount}</div>
                <div className="text-xs text-emerald-200">Besaran Iuran RKM</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-500 text-slate-950 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Kabar Duka &amp; Pelayanan
                </span>
                <span className="text-xs text-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Fardhu Kifayah
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{rkm.coordinator.role}</h3>
              <p className="text-slate-200 text-sm mb-4">
                {rkm.coordinator.name} · {rkm.coordinator.status}
              </p>

              <div className="space-y-2 bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/20 text-xs text-emerald-100 mb-5">
                <div className="flex items-center justify-between">
                  <span>Kontak Pelayanan Jenazah:</span>
                  <span className="font-bold text-amber-300 font-mono flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {rkm.coordinator.phone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Jam layanan:</span>
                  <span className="italic text-amber-200">(menyusul)</span>
                </div>
              </div>

              <a
                href={KABAR_DUKA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-1.5 shadow"
              >
                <Megaphone className="w-4 h-4 text-emerald-700" /> Sampaikan Kabar Duka via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
