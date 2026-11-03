import React from "react";
import {
  Package,
  Shirt,
  Droplets,
  Shovel,
  Info,
  Scale,
  Wallet,
  Users,
  Phone,
  BookOpen,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  ExternalLink,
  Landmark,
  MapPin,
  FileText,
} from "lucide-react";
import rkm from "@/data/rkm.json";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = { Package, Shirt, Droplets, Shovel };

function SectionHeader({ id, badge, title, subtitle }: { id: string; badge: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10" id={`${id}-header`}>
      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
        {badge}
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500 mt-3 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Placeholder({ children }: { children?: React.ReactNode }) {
  return <span className="italic text-amber-700 font-semibold">{children ?? "(menyusul)"}</span>;
}

export function TentangSection() {
  return (
    <section id="tentang" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader
        id="tentang"
        badge="Profil Lembaga"
        title={`Tentang ${rkm.name}`}
        subtitle={`Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 didirikan pada ${rkm.founding.date} di ${rkm.founding.place}, dengan wilayah layanan ${rkm.coverage.summary}. RKM terintegrasi secara kelembagaan dengan DKM Masjid Nurul Falah Sukatani.`}
      />
      <div className="grid lg:grid-cols-3 gap-6 text-left">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <FileText className="w-5 h-5" /> Pendirian RKM
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            RKM didirikan pada <b>{rkm.founding.date}</b> di {rkm.founding.place}, dalam {rkm.founding.event.charAt(0).toLowerCase() + rkm.founding.event.slice(1)}{" "}
            di lingkungan {rkm.coverage.rw}, yang dipimpin oleh <b>{rkm.founding.founder}</b> selaku {rkm.founding.founderRole}.
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-slate-700">
            <div className="font-bold text-emerald-900 mb-2">Hasil musyawarah pendirian</div>
            <ul className="space-y-1.5">
              {rkm.foundingCommitments.items.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.founding.source}</div>
          </div>
          <div className="rounded-xl bg-white border border-emerald-300 p-4 text-sm text-slate-700 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Wilayah layanan: {rkm.coverage.rt}, {rkm.coverage.rw}</div>
              <div className="text-xs text-slate-600">{rkm.coverage.kampung.join(" & ")}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-800 font-bold pt-2">
            <Info className="w-5 h-5" /> Kedudukan dalam AD/ART DKM &amp; RKM
          </div>
          <blockquote className="border-l-4 border-amber-400 pl-4 text-sm text-slate-700 leading-relaxed italic">
            “{rkm.identity}”
            <div className="not-italic text-xs text-slate-500 mt-1">— AD/ART, Bab I</div>
          </blockquote>
          <p className="text-xs text-slate-500 leading-relaxed">Catatan: {rkm.nameNote.text}</p>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Misi bidang sosial:</b> {rkm.mission}
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Struktur:</b> RKM berada dalam <i>{rkm.bidang}</i>, salah satu bidang pelaksana DKM Nurul Falah (AD Pasal 9).
          </div>
        </div>
        <div className="bg-[#064e3b] text-emerald-50 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> Data Lembaga
          </div>
          <dl className="text-sm space-y-2">
            <div>
              <dt className="text-emerald-300 text-xs">Nama resmi (Berita Acara)</dt>
              <dd className="font-semibold">{rkm.fullName}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Alamat</dt>
              <dd>{rkm.address.fullAddress}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Wilayah layanan</dt>
              <dd>{rkm.coverage.summary}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">AD/ART ditetapkan</dt>
              <dd>{rkm.adArtEstablished}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Didirikan</dt>
              <dd>{rkm.founding.date}, {rkm.founding.place}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Pendiri</dt>
              <dd>{rkm.founding.founder} ({rkm.founding.founderRole})</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Dasar pendirian</dt>
              <dd>{rkm.founding.document}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Jumlah anggota</dt>
              <dd><span className="italic text-amber-200">(menyusul)</span></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function LayananSection() {
  return (
    <section id="layanan" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="layanan"
          badge="Pelayanan Jenazah"
          title="Layanan Pemulasaraan Jenazah"
          subtitle="RKM mengelola perlengkapan pemulasaraan jenazah dan mengoordinasikan fardhu kifayah saat ada warga yang wafat (ART Pasal 8)."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {rkm.equipment.map((eq) => {
            const Icon = ICONS[eq.icon] ?? Package;
            return (
              <div key={eq.name} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#047857] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900">{eq.name}</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{eq.desc}</p>
                <div className="text-[11px] text-slate-500 mt-3">
                  Jumlah &amp; kondisi: <Placeholder />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5 text-left">
          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-1">Alur pelaporan &amp; pelayanan saat ada warga wafat</div>
            <Placeholder>(menyusul — SOP belum tercantum di sumber)</Placeholder>
          </div>
          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-1">Area pemakaman (TPU) &amp; ketentuan pemakaman</div>
            <Placeholder>(menyusul)</Placeholder>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KeuanganSection() {
  const f = rkm.finance;
  return (
    <section id="keuangan" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader
        id="keuangan"
        badge="Transparansi Kas"
        title="Keuangan & Iuran RKM"
        subtitle="Iuran RKM termasuk sumber dana swadaya jamaah, dan dilaporkan dalam Pos Dana Sosial / RKM yang terpisah dari pos pembangunan dan operasional masjid."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-6">
        {[
          { label: "Iuran Anggota", value: f.iuranAmount },
          { label: "Iuran Pendatang", value: f.iuranPendatang },
          { label: "Saldo Kas Pos Sosial / RKM", value: f.saldoKasRkm },
          { label: "Pembaruan Terakhir", value: f.lastUpdate },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-emerald-600" /> {s.label}
            </div>
            <div className="text-xl font-bold mt-2">
              {s.value.startsWith("(") ? <Placeholder>{s.value}</Placeholder> : <span className="text-slate-900">{s.value}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5 text-left text-sm text-slate-700">
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
          <div className="font-bold text-slate-900 mb-1">Sumber Dana (AD Pasal 12)</div>
          {f.sources}
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
          <div className="font-bold text-slate-900 mb-1">Pemisahan Pos Dana (ART Pasal 5)</div>
          {f.separatePost}
        </div>
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="font-bold text-slate-900 mb-1">Hak Warga Melihat Uang Fisik (AD Pasal 13)</div>
          {f.physicalCash}
        </div>
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="font-bold text-slate-900 mb-1">Status Aset Wakaf &amp; Infaq (AD Pasal 13)</div>
          {f.assetStatus}
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        Sumber iuran: {f.iuranSource}. Rekening khusus RKM: <Placeholder>{f.rekeningRkm}</Placeholder> (rencana pembukaan rekening bank atas nama RKM
        telah disetujui dalam {rkm.founding.document}). Laporan pemasukan/pengeluaran RKM: <Placeholder />.
      </p>
    </section>
  );
}

function PersonList({ names }: { names: string[] }) {
  return (
    <ul className="space-y-1 text-slate-700">
      {names.map((n) => (
        <li key={n} className="flex items-start gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
          {n.includes("(menyusul)") ? (
            <span>
              {n.replace("(menyusul)", "")}
              <Placeholder />
            </span>
          ) : (
            <span>{n}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function PengurusSection() {
  const c = rkm.coordinator;
  const p = rkm.pengurus;
  return (
    <section id="pengurus" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          id="pengurus"
          badge="Kepengurusan"
          title="Susunan Pengurus RKM"
          subtitle={`Ditetapkan dalam musyawarah pendirian, ${rkm.founding.date} (${rkm.founding.document}).`}
        />
        <div className="grid md:grid-cols-4 gap-4 text-left text-sm mb-4">
          <div className="md:col-span-1 p-4 rounded-xl bg-[#064e3b] text-emerald-50">
            <div className="font-bold text-amber-300 mb-2 flex items-center gap-1.5"><Users className="w-4 h-4" /> Majelis Syura</div>
            <ul className="space-y-1">
              {p.majelisSyura.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          {[
            { role: "Ketua", name: p.ketua },
            { role: "Bendahara", name: p.bendahara },
            { role: "Sekretaris", name: p.sekretaris },
          ].map((o) => (
            <div key={o.role} className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">{o.role}</div>
              <div className="font-bold text-slate-900 mt-1">{o.name}</div>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left text-xs">
          {p.seksi.map((sk) => (
            <div key={sk.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-2 text-sm">{sk.name}</div>
              <PersonList names={sk.members} />
              {sk.name === "Seksi Perlengkapan" && (
                <a
                  href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(`Assalamu'alaikum ${c.name} (${c.role})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#047857] font-mono mt-3 flex items-center gap-1.5 font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> {c.phone} ({c.name})
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-left text-slate-500">
          Catatan: {p.note} Sumber: {rkm.founding.document}; konfirmasi Ketua RKM, 3 Nov 2026.
        </div>
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left text-slate-600">
          <b>Koordinasi dengan DKM:</b> RKM terintegrasi secara kelembagaan dengan {rkm.parentOrganization}.{" "}
          <a href={rkm.parentSiteUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">
            Portal Masjid Nurul Falah (DKM)
          </a>
        </div>
      </div>
    </section>
  );
}

export function AturanSection({ onOpenAdArt }: { onOpenAdArt: () => void }) {
  return (
    <section id="aturan" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader
        id="aturan"
        badge="AD/ART DKM & RKM"
        title="Ketentuan AD/ART yang Mengatur RKM"
        subtitle="Kutipan pasal-pasal AD/ART DKM & RKM Masjid Nurul Falah Sukatani yang menyebut RKM secara langsung."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {rkm.rules.map((r) => (
          <div key={r.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
            <div className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-emerald-600 shrink-0" /> {r.title}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed flex-1">{r.text}</p>
            <div className="text-[11px] text-emerald-700 font-semibold mt-3">{r.source}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="button"
          onClick={onOpenAdArt}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow transition cursor-pointer"
        >
          <BookOpen className="w-4 h-4" /> Baca AD/ART Lengkap <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export function CatatanSection() {
  return (
    <section id="catatan" className="py-16 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        <SectionHeader id="catatan" badge="Rekap & Program" title="Rekap Kegiatan RKM" />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <ClipboardList className="w-4 h-4 text-emerald-600" /> Rekap Tugas Terkait RKM
            </div>
            <ul className="space-y-2 text-sm">
              {rkm.milestones.map((m) => (
                <li key={m.task} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{m.task} <span className="text-xs text-emerald-700 font-semibold">({m.status})</span></span>
                </li>
              ))}
            </ul>
            <div className="text-xs text-slate-500 mt-3">Program kerja RKM lainnya: <Placeholder /></div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-slate-900 mb-2">Data Keanggotaan &amp; Catatan Warga Wafat</div>
            <p className="text-sm text-slate-600">
              Data anggota, kartu anggota, dan catatan warga yang wafat: <Placeholder />
            </p>
            <a
              href={rkm.parentSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-700 font-semibold mt-4 hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Kunjungi Portal Masjid Nurul Falah (DKM)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
