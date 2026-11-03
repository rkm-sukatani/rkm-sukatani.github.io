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
  Quote,
  TreePine,
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
        subtitle={`Rukun Kematian Muslim (RKM) adalah bidang pelayanan jenazah / fardhu kifayah yang terintegrasi secara kelembagaan dengan DKM Masjid Nurul Falah Sukatani. ${rkm.coverage.summary}`}
      />
      <div className="grid lg:grid-cols-3 gap-6 text-left">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <Info className="w-5 h-5" /> Identitas &amp; Kedudukan
          </div>
          <blockquote className="border-l-4 border-amber-400 pl-4 text-sm text-slate-700 leading-relaxed italic">
            “{rkm.identity}”
            <div className="not-italic text-xs text-slate-500 mt-1">— AD/ART, Bab I</div>
          </blockquote>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Misi bidang sosial:</b> {rkm.mission}
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Struktur:</b> RKM berada dalam <i>{rkm.bidang}</i>, salah satu bidang pelaksana DKM Nurul Falah (AD Pasal 9).
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-slate-700 leading-relaxed">
            <div className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4" /> Jangkauan RKM lebih luas dari DKM
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              <div className="rounded-lg bg-white border border-emerald-300 p-3">
                <div className="text-xs text-emerald-700 font-semibold">RKM</div>
                <div className="font-bold text-slate-900">{rkm.coverage.rt}</div>
                <div className="text-xs text-slate-600">2 kampung: Kp. Sukatani &amp; Kp. Tespong</div>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-3">
                <div className="text-xs text-slate-500 font-semibold">DKM</div>
                <div className="font-bold text-slate-900">RT 03–06</div>
                <div className="text-xs text-slate-600">1 kampung</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.coverage.source}</div>
          </div>
        </div>
        <div className="bg-[#064e3b] text-emerald-50 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> Data Lembaga
          </div>
          <dl className="text-sm space-y-2">
            <div>
              <dt className="text-emerald-300 text-xs">Nama resmi (AD/ART)</dt>
              <dd className="font-semibold">{rkm.fullName}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Alamat</dt>
              <dd>
                {rkm.address.fullAddress}, {rkm.address.provinsi} {rkm.address.kodepos}{" "}
                <span className="italic text-amber-200">(belum dikonfirmasi)</span>
              </dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Wilayah layanan</dt>
              <dd>{rkm.coverage.rt} · Kp. Sukatani &amp; Kp. Tespong</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">AD/ART ditetapkan</dt>
              <dd>{rkm.adArtEstablished}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">Tahun berdiri RKM</dt>
              <dd><span className="italic text-amber-200">(menyusul)</span></dd>
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
        <div id="wilayah-layanan" className="mt-8 grid md:grid-cols-2 gap-5 text-left">
          <div className="p-5 rounded-2xl border border-emerald-300 bg-emerald-50 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" /> Wilayah Layanan RKM
            </div>
            <div className="text-2xl font-extrabold text-emerald-900">{rkm.coverage.rt}</div>
            <div className="text-sm">Dua kampung: <b>Kp. Sukatani</b> dan <b>Kp. Tespong</b>.</div>
            <div className="text-xs text-slate-600 mt-1">{rkm.coverage.dkmComparison}</div>
            <blockquote className="mt-3 border-l-4 border-amber-400 pl-3 text-xs italic text-slate-700 flex gap-1.5">
              <Quote className="w-3.5 h-3.5 shrink-0 text-amber-500" />“{rkm.coverage.quote}”
            </blockquote>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.coverage.source}</div>
          </div>
          <div className="p-5 rounded-2xl border border-emerald-300 bg-emerald-50 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <TreePine className="w-4 h-4 text-emerald-700" /> {rkm.landWakaf.title}
            </div>
            <ul className="space-y-1.5">
              {rkm.landWakaf.roles.map((r) => (
                <li key={r.bani} className="flex items-center justify-between gap-3 rounded-lg bg-white border border-emerald-200 px-3 py-2">
                  <span className="font-semibold text-slate-900">{r.bani}</span>
                  <span className="text-xs text-emerald-800">{r.role}</span>
                </li>
              ))}
            </ul>
            <div className="text-xs text-slate-600 mt-2">{rkm.landWakaf.note}</div>
            <div className="text-[11px] text-slate-500 mt-1">Sumber: {rkm.landWakaf.source}</div>
          </div>
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
      <div className="grid md:grid-cols-3 gap-5 text-left mb-6">
        {[
          { label: "Besaran Iuran RKM", value: f.iuranAmount },
          { label: "Saldo Kas Pos Sosial / RKM", value: f.saldoKasRkm },
          { label: "Pembaruan Terakhir", value: f.lastUpdate },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-emerald-600" /> {s.label}
            </div>
            <div className="text-xl font-bold mt-2">
              <Placeholder>{s.value}</Placeholder>
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
        Rekening khusus RKM: <Placeholder />. Laporan pemasukan/pengeluaran RKM: <Placeholder />.
      </p>
    </section>
  );
}

export function PengurusSection() {
  const c = rkm.coordinator;
  return (
    <section id="pengurus" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader id="pengurus" badge="Kepengurusan" title="Pengurus & Kontak RKM" />
        <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-left text-slate-700">
          <b>Catatan:</b> {rkm.leadership.note}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300">
            <div className="font-bold text-slate-800 mb-0.5">Ketua RKM</div>
            <div><Placeholder>{rkm.leadership.ketuaRkm}</Placeholder></div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 shadow-2xs">
            <div className="font-bold text-slate-800 mb-0.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {c.role}</div>
            <div className="text-slate-600 font-medium">{c.name}</div>
            <div className="text-slate-500">{c.status}</div>
            <a
              href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(`Assalamu'alaikum ${c.name} (${c.role})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#047857] font-mono mt-3 flex items-center gap-1.5 font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> {c.phone}
            </a>
          </div>
          {["Sekretaris RKM", "Bendahara RKM", "Petugas Pemulasaraan"].map((role) => (
            <div key={role} className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300">
              <div className="font-bold text-slate-800 mb-0.5">{role}</div>
              <div><Placeholder /></div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left text-slate-600">
          <b>Koordinasi DKM:</b> RKM melapor secara terintegrasi di bawah DKM.{" "}
          {rkm.dkmContacts.map((d, i) => (
            <span key={d.role}>
              {i > 0 && " · "}
              {d.role}: {d.name} ({d.phone})
            </span>
          ))}
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
