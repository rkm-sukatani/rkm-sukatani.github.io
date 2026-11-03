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
  BookOpen,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Phone,
  Landmark,
  MapPin,
  FileText,
  Clock,
  HandCoins,
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
        subtitle={`Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 didirikan pada ${rkm.founding.date} di ${rkm.founding.place}, dengan wilayah layanan ${rkm.coverage.summary}, sebagai ${rkm.peranTpu.agenda} (${rkm.founding.document}).`}
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
          <div id="peran-tpu" className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-700" /> Pelayanan Kematian &amp; Pengelolaan TPU
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">{rkm.peranTpu.kopSurat}</div>
            <p className="leading-relaxed">
              RKM didirikan sebagai {rkm.peranTpu.agenda}. Pemakaman warga dilaksanakan di <b>{rkm.burial.place}</b>.
            </p>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.peranTpu.source}; {rkm.burial.place}: {rkm.burial.source}.</div>
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
            <Info className="w-5 h-5" /> Kedudukan dalam AD/ART RKM
          </div>
          <blockquote className="border-l-4 border-amber-400 pl-4 text-sm text-slate-700 leading-relaxed italic">
            “{rkm.adArtQuotes.nama.text}”
            <div className="not-italic text-xs text-slate-500 mt-1">— {rkm.adArtQuotes.nama.source}</div>
          </blockquote>
          <p className="text-xs text-slate-500 leading-relaxed">Catatan: {rkm.nameNote.text}</p>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Maksud ({rkm.adArtQuotes.maksud.source}):</b> “{rkm.adArtQuotes.maksud.text}”
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>Struktur ({rkm.adArtQuotes.struktur.source}):</b> {rkm.adArtQuotes.struktur.intro}{" "}
            {rkm.adArtQuotes.struktur.items.map((it) => it.replace(/\.$/, "")).join(", ")}.
          </div>
          <p className="text-[11px] text-amber-800">AD/ART RKM masih berupa draf yang menunggu konfirmasi Pak Badar Rustandi (Pendiri RKM).</p>
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
              <dt className="text-emerald-300 text-xs">Keanggotaan</dt>
              <dd>{rkm.membership.basis} Jumlah anggota: <span className="italic text-amber-200">{rkm.membership.jumlahAnggota}</span></dd>
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
          subtitle={`${rkm.adArtQuotes.layanan.intro} ${rkm.adArtQuotes.layanan.items.map((it) => it.replace(/\.$/, "").toLowerCase()).join("; ")} (${rkm.adArtQuotes.layanan.source}).`}
        />
        <div className="grid sm:grid-cols-3 gap-5 text-left">
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
                  Jumlah: <Placeholder>{rkm.equipmentInfo.jumlah}</Placeholder>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-500 mt-3 text-left">
          {rkm.equipmentInfo.summary} Sumber: {rkm.equipmentInfo.source}.
        </p>
        <div id="alur-layanan" className="mt-8 grid lg:grid-cols-5 gap-5 text-left">
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl border border-emerald-300 bg-emerald-50 text-sm text-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-emerald-700" /> {rkm.sop.title}
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#064e3b] text-amber-300 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" /> Layanan {rkm.serviceHours.text}
              </span>
            </div>
            <ol className="space-y-3">
              {rkm.sop.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#064e3b] text-white font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="pt-1 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="text-[11px] text-slate-500 mt-4">Sumber: {rkm.sop.source}</div>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <div className="p-5 rounded-2xl border border-emerald-300 bg-white text-sm text-slate-700">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <HandCoins className="w-4 h-4 text-emerald-700" /> Santunan Kematian
              </div>
              <div className="text-2xl font-extrabold text-emerald-900">{rkm.santunan.amount}</div>
              <p className="mt-1 leading-relaxed">{rkm.santunan.text}</p>
              <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.santunan.source}</div>
            </div>
            <div className="p-5 rounded-2xl border border-emerald-300 bg-white text-sm text-slate-700">
              <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" /> Pemakaman di {rkm.burial.place}
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span><b>Anggota:</b> {rkm.burial.anggota}</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> <span><b>Non-anggota:</b> {rkm.burial.nonAnggota}</span></li>
              </ul>
              <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.burial.source}</div>
            </div>
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
        subtitle="Iuran masyarakat termasuk sumber keuangan RKM (AD Pasal 14 huruf a). Besaran iuran diatur dalam ART Pasal 24 ayat (7), dan santunan kematian bagi keluarga anggota yang meninggal diatur dalam ART Pasal 24 ayat (8). Setiap penerimaan dan pengeluaran wajib dicatat dalam administrasi organisasi (AD Pasal 15 ayat (4))."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-6">
        {[
          { label: "Iuran Anggota / Bulan", value: f.iuranAmount },
          { label: "Iuran Pendatang", value: f.iuranPendatang },
          { label: "Saldo Kas RKM", value: f.saldoKasRkm },
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
        {f.adArtCards.map((c, i) => (
          <div key={c.title} className={`p-5 rounded-2xl border ${i < 2 ? "bg-white border-slate-200" : "bg-emerald-50 border-emerald-200"}`}>
            <div className="font-bold text-slate-900 mb-1">{c.title}</div>
            <div className="text-[11px] text-emerald-700 font-semibold mb-2">{c.source}</div>
            {"intro" in c && c.intro && <p className="mb-1">{c.intro}</p>}
            <ul className="list-disc pl-5 space-y-0.5">
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="rekening" className="mt-5 p-5 rounded-2xl border-2 border-amber-300 bg-amber-50 text-left text-sm text-slate-700">
        <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Landmark className="w-4 h-4 text-amber-700" /> Rekening Pembayaran RKM
        </div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-semibold">{f.rekening.bankName}</span>
          <span className="font-mono text-lg font-extrabold text-emerald-900 tracking-wide">{f.rekening.accountNumber}</span>
          <span>a.n. <b>{f.rekening.accountHolder}</b></span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-amber-900">{f.rekening.note}</p>
        <div className="text-[11px] text-slate-500 mt-2">Sumber: {f.rekening.source}</div>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        Iuran anggota: {f.iuranNote} {rkm.membership.basis} Iuran pendatang: {f.iuranPendatangNote}{" "}
        Santunan kematian: {rkm.santunan.amount} per anggota yang meninggal, diserahkan kepada keluarga melalui perwakilan RT. Sumber: {f.iuranSource}; ART Pasal 24 ayat (7) dan (8).{" "}
        Rekening pembayaran RKM: {f.rekening.bankName} {f.rekening.accountNumber} a.n. {f.rekening.accountHolder} (rekening bersama DKM Masjid Nurul Falah, sementara). Laporan pemasukan/pengeluaran RKM: <Placeholder>{f.laporanRkm}</Placeholder>.
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

const LINE = "bg-emerald-300";

function OrgBox({
  role,
  names,
  variant = "default",
  children,
  className = "",
}: {
  role: string;
  names: string[];
  variant?: "syura" | "ketua" | "default" | "seksi";
  children?: React.ReactNode;
  className?: string;
}) {
  const styles = {
    syura: "bg-[#064e3b] text-emerald-50 border-[#064e3b] shadow-lg shadow-emerald-900/20",
    ketua: "bg-white text-slate-900 border-amber-400 border-2 shadow-md shadow-amber-900/10",
    default: "bg-emerald-50 text-slate-900 border-emerald-300",
    seksi: "bg-white text-slate-900 border-slate-200 shadow-sm",
  }[variant];
  const roleColor = variant === "syura" ? "text-amber-300" : variant === "ketua" ? "text-amber-700" : "text-emerald-700";
  return (
    <div className={`relative z-10 w-full rounded-2xl border p-4 text-left ${styles} ${className}`}>
      <h3 className={`text-[11px] font-bold uppercase tracking-wider ${roleColor}`}>{role}</h3>
      {names.length === 1 ? (
        <div className="font-bold mt-1 text-sm sm:text-base">{names[0]}</div>
      ) : variant === "syura" ? (
        <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {names.map((n) => (
            <li key={n} className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-2 shrink-0"></span>
              {n}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-2 text-xs">
          <PersonList names={names} />
        </div>
      )}
      {children}
    </div>
  );
}

function VLine({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`w-0.5 mx-auto ${LINE} ${className}`} />;
}

export function StrukturOrganisasiSection() {
  const so = rkm.strukturOrganisasi;
  const seksiCount = so.seksi.length;
  const rtSeksi = so.seksi.find((s) => s.title === "Seksi Penggalangan Dana");
  return (
    <section id="struktur-organisasi" className="py-16 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          id="struktur-organisasi"
          badge="Organisasi"
          title="Struktur Organisasi RKM"
          subtitle={`Ditetapkan dalam musyawarah pendirian, ${rkm.founding.date} (${rkm.founding.document}).`}
        />

        <div role="group" aria-label="Bagan struktur organisasi RKM Sukatani" className="flex flex-col items-center">
          {/* Level 1: Majelis Syura */}
          <OrgBox role={so.majelisSyura.title} names={so.majelisSyura.members} variant="syura" className="max-w-xl" />
          <VLine className="h-8" />

          {/* Level 2: Ketua */}
          <OrgBox role={so.ketua.title} names={[so.ketua.name]} variant="ketua" className="max-w-xs" />

          {/* Level 3: Sekretaris & Bendahara (cabang dari garis Ketua) */}
          <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-center">
            <VLine className="h-6 lg:hidden" />
            <div className="w-full max-w-xs lg:w-64 lg:py-6 flex items-center">
              <OrgBox role={so.sekretaris.title} names={[so.sekretaris.name]} />
            </div>
            <div aria-hidden="true" className="hidden lg:flex items-center w-16">
              <div className={`h-0.5 w-full ${LINE}`} />
            </div>
            <VLine className="h-6 lg:h-auto lg:mx-0" />
            <div aria-hidden="true" className="hidden lg:flex items-center w-16">
              <div className={`h-0.5 w-full ${LINE}`} />
            </div>
            <div className="w-full max-w-xs lg:w-64 lg:py-6 flex items-center">
              <OrgBox role={so.bendahara.title} names={[so.bendahara.name]} />
            </div>
          </div>
          <VLine className="h-6 lg:h-8" />

          {/* Level 4: Seksi-seksi */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:gap-4 text-xs">
            {so.seksi.map((sk, i) => (
              <div key={sk.title} className="relative flex flex-col items-center">
                {/* garis horizontal penghubung antarseksi (desktop) */}
                <div
                  aria-hidden="true"
                  className={`hidden lg:block absolute top-0 h-0.5 ${LINE} ${
                    i === 0 ? "left-1/2 -right-2" : i === seksiCount - 1 ? "-left-2 right-1/2" : "-left-2 -right-2"
                  }`}
                />
                <VLine className={`h-6 ${i === 0 ? "hidden lg:block" : ""}`} />
                <OrgBox role={sk.title} names={sk.members} variant="seksi" className="max-w-md lg:max-w-none h-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-left text-slate-500 space-y-1">
          <p>
            <b className="text-slate-600">Ketentuan:</b> {so.ketentuan}
          </p>
          <p>Sumber: {so.source}</p>
        </div>
        <div id="kontak" className="mt-6 grid md:grid-cols-2 gap-4 text-left text-sm text-slate-700 scroll-mt-24">
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-700" /> Saat Ada Warga Meninggal
            </div>
            <p className="leading-relaxed mb-2">
              Keluarga terlebih dahulu menghubungi perwakilan RKM di RT masing-masing ({rtSeksi?.title}):
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {rtSeksi?.members.map((m) => (
                <li key={m} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {m}
                </li>
              ))}
            </ul>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.sop.source}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" /> Kontak RKM · {rkm.contact.role}
            </div>
            <p className="leading-relaxed">
              {rkm.contact.name} ·{" "}
              <a href={`https://wa.me/${rkm.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono font-semibold text-emerald-700 hover:underline">
                {rkm.contact.phone}
              </a>{" "}
              (WhatsApp)
            </p>
            <p className="text-xs text-slate-500 mt-1">Layanan {rkm.serviceHours.text}.</p>
            <div className="text-[11px] text-slate-500 mt-2">Sumber: {rkm.contact.source}</div>
          </div>
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
        badge="AD/ART RKM (Draf)"
        title="Ketentuan AD/ART RKM tentang Pelayanan"
        subtitle="Kutipan pasal-pasal AD/ART RKM tentang pelayanan kematian, TPU, inventaris, dan sanksi, ditambah satu ketentuan pengurus RKM yang sumbernya dicantumkan. Naskah AD/ART masih draf yang menunggu konfirmasi Pak Badar Rustandi."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {rkm.rules.map((r) => (
          <div key={r.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
            <div className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-emerald-600 shrink-0" /> {r.title}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed flex-1">{r.text}</p>
            <div className={`text-[11px] font-semibold mt-3 ${"uncited" in r ? "text-slate-500" : "text-emerald-700"}`}>{r.source}</div>
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
            <div className="text-xs text-slate-500 mt-3">Program kerja RKM lainnya: <Placeholder>{rkm.programKerjaLain}</Placeholder></div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-slate-900 mb-2">Data Keanggotaan &amp; Catatan Warga Wafat</div>
            <p className="text-sm text-slate-600">
              Data anggota, kartu anggota, dan catatan warga yang wafat: <Placeholder />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
