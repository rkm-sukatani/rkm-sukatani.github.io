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
  Route,
} from "lucide-react";
import rkm from "@/data/rkm.json";
import { useI18n } from "@/i18n/LanguageContext";
import { OriginalDetails } from "@/components/i18n/OriginalDetails";

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
  const { t } = useI18n();
  const label = children == null || children === "(menyusul)" ? t("common.forthcoming") : children;
  return <span className="italic text-amber-700 font-semibold">{label}</span>;
}

function Ltr({ children }: { children: React.ReactNode }) {
  return <bdi dir="ltr">{children}</bdi>;
}

function joinClauses(items: string[], tx: (s: string) => string, locale: string) {
  const sep = locale === "ar" ? "؛ " : "; ";
  return items
    .map((item) => {
      if (locale === "id") return item.replace(/\.$/, "");
      return tx(item).replace(/[.۔]$/, "");
    })
    .join(sep);
}

export function TentangSection() {
  const { t, tx, locale } = useI18n();
  const event =
    locale === "id" ? rkm.founding.event.charAt(0).toLowerCase() + rkm.founding.event.slice(1) : tx(rkm.founding.event);
  return (
    <section id="tentang" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader
        id="tentang"
        badge={t("tentang.badge")}
        title={t("tentang.title", { name: rkm.name })}
        subtitle={t("tentang.subtitle", {
          fullName: tx(rkm.fullName),
          date: tx(rkm.founding.date),
          place: tx(rkm.founding.place),
          coverage: tx(rkm.coverage.summary),
          agenda: tx(rkm.peranTpu.agenda),
          document: tx(rkm.founding.document),
        })}
      />
      <div className="grid lg:grid-cols-3 gap-6 text-start">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <FileText className="w-5 h-5 shrink-0" /> {t("tentang.foundingTitle")}
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            {t("tentang.foundingSentence", {
              date: tx(rkm.founding.date),
              place: tx(rkm.founding.place),
              event,
              rw: rkm.coverage.rw,
              founder: rkm.founding.founder,
              role: tx(rkm.founding.founderRole),
            })}
          </div>
          <div id="peran-tpu" className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-sm text-slate-700">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" /> {t("tentang.tpuTitle")}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">{tx(rkm.peranTpu.kopSurat)}</div>
            <p className="leading-relaxed">
              {t("tentang.tpuBody", { agenda: tx(rkm.peranTpu.agenda), place: tx(rkm.burial.place) })}
            </p>
            <div className="text-[11px] text-slate-500 mt-2">
              {t("common.source")} {tx(rkm.peranTpu.source)}; {tx(rkm.burial.place)}: {tx(rkm.burial.source)}.
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-slate-700">
            <div className="font-bold text-emerald-900 mb-2">{t("tentang.results")}</div>
            <ul className="space-y-1.5">
              {rkm.foundingCommitments.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {tx(item)}
                    <OriginalDetails text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-[11px] text-slate-500 mt-2">
              {t("common.source")} {tx(rkm.founding.source)}
            </div>
          </div>
          <div className="rounded-xl bg-white border border-emerald-300 p-4 text-sm text-slate-700 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">
                {t("tentang.coverage", { rt: rkm.coverage.rt, rw: rkm.coverage.rw })}
              </div>
              <div className="text-xs text-slate-600">{rkm.coverage.kampung.join(locale === "ar" ? " و " : " & ")}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-800 font-bold pt-2">
            <Info className="w-5 h-5 shrink-0" /> {t("tentang.adartStanding")}
          </div>
          <blockquote className="border-s-4 border-amber-400 ps-4 text-sm text-slate-700 leading-relaxed italic">
            “{tx(rkm.adArtQuotes.nama.text)}”
            <div className="not-italic text-xs text-slate-500 mt-1">— {tx(rkm.adArtQuotes.nama.source)}</div>
            <OriginalDetails text={rkm.adArtQuotes.nama.text} />
          </blockquote>
          <p className="text-xs text-slate-500 leading-relaxed">
            {t("tentang.note")} {tx(rkm.nameNote.text)}
            <OriginalDetails text={rkm.nameNote.text} />
          </p>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>{t("tentang.maksud", { source: tx(rkm.adArtQuotes.maksud.source) })}</b> “{tx(rkm.adArtQuotes.maksud.text)}”
            <OriginalDetails text={rkm.adArtQuotes.maksud.text} />
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            <b>{t("tentang.struktur", { source: tx(rkm.adArtQuotes.struktur.source) })}</b> {tx(rkm.adArtQuotes.struktur.intro)}{" "}
            {joinClauses(rkm.adArtQuotes.struktur.items, tx, locale)}.
          </div>
          <p className="text-[11px] text-amber-800">{t("tentang.draftNote")}</p>
        </div>
        <div className="bg-[#064e3b] text-emerald-50 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <Landmark className="w-5 h-5 shrink-0" /> {t("tentang.dataTitle")}
          </div>
          <dl className="text-sm space-y-2">
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.officialName")}</dt>
              <dd className="font-semibold">{tx(rkm.fullName)}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.address")}</dt>
              <dd>{tx(rkm.address.fullAddress)}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.coverageLabel")}</dt>
              <dd>{tx(rkm.coverage.summary)}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.adartSet")}</dt>
              <dd>{tx(rkm.adArtEstablished)}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.founded")}</dt>
              <dd>
                {tx(rkm.founding.date)}, {tx(rkm.founding.place)}
              </dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.founder")}</dt>
              <dd>
                {rkm.founding.founder} ({tx(rkm.founding.founderRole)})
              </dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.basis")}</dt>
              <dd>{tx(rkm.founding.document)}</dd>
            </div>
            <div>
              <dt className="text-emerald-300 text-xs">{t("tentang.membership")}</dt>
              <dd>
                {tx(rkm.membership.basis)} {t("tentang.memberCount")}{" "}
                <span className="italic text-amber-200">
                  <Placeholder>{rkm.membership.jumlahAnggota}</Placeholder>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function LayananSection() {
  const { t, tx, locale } = useI18n();
  const layananItems = rkm.adArtQuotes.layanan.items.map((item) => {
    const stripped = item.replace(/\.$/, "");
    return locale === "id" ? stripped.toLowerCase() : tx(item).replace(/[.۔]$/, "");
  });
  const sep = locale === "ar" ? "؛ " : "; ";
  return (
    <section id="layanan" className="py-16 bg-white border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="layanan"
          badge={t("layanan.badge")}
          title={t("layanan.title")}
          subtitle={t("layanan.subtitle", {
            intro: tx(rkm.adArtQuotes.layanan.intro),
            items: layananItems.join(sep),
            source: tx(rkm.adArtQuotes.layanan.source),
          })}
        />
        <div className="grid sm:grid-cols-3 gap-5 text-start">
          {rkm.equipment.map((eq) => {
            const Icon = ICONS[eq.icon] ?? Package;
            return (
              <div key={eq.name} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#047857] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900">{tx(eq.name)}</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{tx(eq.desc)}</p>
                <div className="text-[11px] text-slate-500 mt-3">
                  {t("layanan.count")} <Placeholder>{rkm.equipmentInfo.jumlah}</Placeholder>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-500 mt-3 text-start">
          {tx(rkm.equipmentInfo.summary)} {t("common.source")} {tx(rkm.equipmentInfo.source)}.
        </p>
        <div id="alur-layanan" className="mt-8 grid lg:grid-cols-5 gap-5 text-start">
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl border border-emerald-300 bg-emerald-50 text-sm text-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-emerald-700 shrink-0" /> {tx(rkm.sop.title)}
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#064e3b] text-amber-300 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" /> {t("layanan.hours", { hours: tx(rkm.serviceHours.text) })}
              </span>
            </div>
            <ol className="space-y-3">
              {rkm.sop.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#064e3b] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed">{tx(step)}</span>
                </li>
              ))}
            </ol>
            <div className="text-[11px] text-slate-500 mt-4">
              {t("common.source")} {tx(rkm.sop.source)}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <div className="p-5 rounded-2xl border border-emerald-300 bg-white text-sm text-slate-700">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <HandCoins className="w-4 h-4 text-emerald-700 shrink-0" /> {t("layanan.santunan")}
              </div>
              <div className="text-2xl font-extrabold text-emerald-900">
                <Ltr>{rkm.santunan.amount}</Ltr>
              </div>
              <p className="mt-1 leading-relaxed">{tx(rkm.santunan.text)}</p>
              <div className="text-[11px] text-slate-500 mt-2">
                {t("common.source")} {tx(rkm.santunan.source)}
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-emerald-300 bg-white text-sm text-slate-700">
              <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" /> {t("layanan.burial", { place: tx(rkm.burial.place) })}
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />{" "}
                  <span>
                    <b>{t("layanan.member")}</b> {tx(rkm.burial.anggota)}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />{" "}
                  <span>
                    <b>{t("layanan.nonMember")}</b> {tx(rkm.burial.nonAnggota)}
                  </span>
                </li>
              </ul>
              <div className="text-[11px] text-slate-500 mt-2">
                {t("common.source")} {tx(rkm.burial.source)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KeuanganSection() {
  const { t, tx } = useI18n();
  const f = rkm.finance;
  const cards = [
    { label: t("keuangan.iuranBulan"), value: f.iuranAmount },
    { label: t("keuangan.iuranPendatang"), value: f.iuranPendatang },
    { label: t("keuangan.saldo"), value: f.saldoKasRkm },
    { label: t("keuangan.updated"), value: tx(f.lastUpdate) },
  ];
  const report = [
    { label: t("keuangan.opening"), value: f.laporan.saldoAwal },
    { label: t("keuangan.income"), value: f.laporan.pemasukan },
    { label: t("keuangan.expense"), value: f.laporan.pengeluaran },
    { label: t("keuangan.closing"), value: f.laporan.saldoAkhir },
  ];
  return (
    <section id="keuangan" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader
        id="keuangan"
        badge={t("keuangan.badge")}
        title={t("keuangan.title")}
        subtitle={t("keuangan.subtitle", {
          iuran: tx(rkm._kutipanSections.iuran),
          besaran: tx(rkm._kutipanSections.besaranIuran),
          santunan: tx(rkm._kutipanSections.santunan),
          pencatatan: tx(rkm._kutipanSections.pencatatan),
        })}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-start mb-6">
        {cards.map((s) => (
          <div key={s.label} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-emerald-600 shrink-0" /> {s.label}
            </div>
            <div className="text-xl font-bold mt-2">
              {s.value.startsWith("(") ? (
                <Placeholder>{s.value}</Placeholder>
              ) : (
                <span className="text-slate-900">
                  <Ltr>{s.value}</Ltr>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div id="laporan-kas" className="mb-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-start text-sm text-slate-700">
        <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-600 shrink-0" /> {t("keuangan.report")}
        </div>
        <div className="text-[11px] text-emerald-700 font-semibold mb-3">
          {t("keuangan.period", { periode: tx(f.laporan.periode), asOf: tx(f.laporan.asOf) })}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {report.map((s) => (
            <div key={s.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="text-lg font-bold text-slate-900 mt-1">
                <Ltr>{s.value}</Ltr>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 text-start text-sm text-slate-700">
        {f.adArtCards.map((c, i) => (
          <div key={c.title} className={`p-5 rounded-2xl border ${i < 2 ? "bg-white border-slate-200" : "bg-emerald-50 border-emerald-200"}`}>
            <div className="font-bold text-slate-900 mb-1">{tx(c.title)}</div>
            <div className="text-[11px] text-emerald-700 font-semibold mb-2">{tx(c.source)}</div>
            {"intro" in c && typeof c.intro === "string" && c.intro !== "" && <p className="mb-1">{tx(c.intro)}</p>}
            <ul className="list-disc ps-5 space-y-0.5">
              {c.items.map((it) => (
                <li key={it}>
                  {tx(it)}
                  <OriginalDetails text={it} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="rekening" className="mt-5 p-5 rounded-2xl border-2 border-amber-300 bg-amber-50 text-start text-sm text-slate-700">
        <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Landmark className="w-4 h-4 text-amber-700 shrink-0" /> {t("keuangan.account")}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-semibold">{tx(f.rekening.bankName)}</span>
          <span className="font-mono text-lg font-extrabold text-emerald-900 tracking-wide">
            <Ltr>{f.rekening.accountNumber}</Ltr>
          </span>
          <span>
            {t("keuangan.an")} <b>{f.rekening.accountHolder}</b>
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-amber-900">{tx(f.rekening.note)}</p>
        <div className="text-[11px] text-slate-500 mt-2">
          {t("common.source")} {tx(f.rekening.source)}
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        {t("keuangan.footnote", {
          iuranNote: tx(f.iuranNote),
          basis: tx(rkm.membership.basis),
          pendatangNote: tx(f.iuranPendatangNote),
          santunan: rkm.santunan.amount,
          iuranSource: tx(f.iuranSource),
          besaran: tx(rkm._kutipanSections.besaranIuran),
          bank: tx(f.rekening.bankName),
          account: f.rekening.accountNumber,
          holder: f.rekening.accountHolder,
          laporan: tx(f.laporanRkm),
        })}
      </p>
    </section>
  );
}

function PersonList({ names }: { names: string[] }) {
  const { tx } = useI18n();
  return (
    <ul className="space-y-1 text-slate-700">
      {names.map((n) => (
        <li key={n} className="flex items-start gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
          {n.includes("(menyusul)") ? (
            <span>
              {tx(n.replace("(menyusul)", "")).trim()} <Placeholder />
            </span>
          ) : (
            <span>{tx(n)}</span>
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
  const { tx } = useI18n();
  const styles = {
    syura: "bg-[#064e3b] text-emerald-50 border-[#064e3b] shadow-lg shadow-emerald-900/20",
    ketua: "bg-white text-slate-900 border-amber-400 border-2 shadow-md shadow-amber-900/10",
    default: "bg-emerald-50 text-slate-900 border-emerald-300",
    seksi: "bg-white text-slate-900 border-slate-200 shadow-sm",
  }[variant];
  const roleColor = variant === "syura" ? "text-amber-300" : variant === "ketua" ? "text-amber-700" : "text-emerald-700";
  const shown = names.map((n) => tx(n));
  return (
    <div className={`relative z-10 w-full rounded-2xl border p-4 text-start ${styles} ${className}`}>
      <h3 className={`text-[11px] font-bold uppercase tracking-wider ${roleColor}`}>{tx(role)}</h3>
      {names.length === 1 ? (
        <div className="font-bold mt-1 text-sm sm:text-base">{shown[0]}</div>
      ) : variant === "syura" ? (
        <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {shown.map((n) => (
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
  const { t, tx } = useI18n();
  const so = rkm.strukturOrganisasi;
  const seksiCount = so.seksi.length;
  const rtSeksi = so.seksi.find((s) => s.title === "Seksi Penggalangan Dana");
  return (
    <section id="struktur-organisasi" className="py-16 bg-white border-y border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          id="struktur-organisasi"
          badge={t("struktur.badge")}
          title={t("struktur.title")}
          subtitle={t("struktur.subtitle", { date: tx(rkm.founding.date), document: tx(rkm.founding.document) })}
        />

        <div role="group" aria-label={t("struktur.chartLabel")} className="flex flex-col items-center">
          <OrgBox role={so.majelisSyura.title} names={so.majelisSyura.members} variant="syura" className="max-w-xl" />
          <VLine className="h-8" />

          <OrgBox role={so.ketua.title} names={[so.ketua.name]} variant="ketua" className="max-w-xs" />

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

          <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:gap-4 text-xs">
            {so.seksi.map((sk, i) => (
              <div key={sk.title} className="relative flex flex-col items-center">
                <div
                  aria-hidden="true"
                  className={`hidden lg:block absolute top-0 h-0.5 ${LINE} ${
                    i === 0 ? "start-1/2 -end-2" : i === seksiCount - 1 ? "-start-2 end-1/2" : "-start-2 -end-2"
                  }`}
                />
                <VLine className={`h-6 ${i === 0 ? "hidden lg:block" : ""}`} />
                <OrgBox role={sk.title} names={sk.members} variant="seksi" className="max-w-md lg:max-w-none h-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-start text-slate-500 space-y-1">
          <p>
            <b className="text-slate-600">{t("struktur.rules")}</b> {tx(so.ketentuan)}
          </p>
          <p>
            {t("common.source")} {tx(so.source)}
          </p>
        </div>
        <div id="kontak" className="mt-6 grid md:grid-cols-2 gap-4 text-start text-sm text-slate-700 scroll-mt-28">
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-700 shrink-0" /> {t("struktur.deathTitle")}
            </div>
            <p className="leading-relaxed mb-2">{t("struktur.deathBody", { seksi: tx(rtSeksi?.title ?? "") })}</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {rtSeksi?.members.map((m) => (
                <li key={m} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {tx(m)}
                </li>
              ))}
            </ul>
            <div className="text-[11px] text-slate-500 mt-2">
              {t("common.source")} {tx(rkm.sop.source)}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700 shrink-0" /> {t("struktur.contact", { role: tx(rkm.contact.role) })}
            </div>
            <p className="leading-relaxed">
              {tx(rkm.contact.name)} ·{" "}
              <a
                href={`https://wa.me/${rkm.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-semibold text-emerald-700 hover:underline"
              >
                <Ltr>{rkm.contact.phone}</Ltr>
              </a>{" "}
              {t("struktur.whatsapp")}
            </p>
            <p className="text-xs text-slate-500 mt-1">{t("struktur.hours", { hours: tx(rkm.serviceHours.text) })}</p>
            <div className="text-[11px] text-slate-500 mt-2">
              {t("common.source")} {tx(rkm.contact.source)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AturanSection({ onOpenAdArt }: { onOpenAdArt: () => void }) {
  const { t, tx, locale } = useI18n();
  return (
    <section id="aturan" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader
        id="aturan"
        badge={t("aturan.badge")}
        title={t("aturan.title")}
        subtitle={t("aturan.subtitle")}
      />
      {locale !== "id" && (
        <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-start">{t("adart.banner")}</p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-start">
        {rkm.rules.map((r) => (
          <div key={r.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
            <div className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-emerald-600 shrink-0" /> {tx(r.title)}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed flex-1">{tx(r.text)}</p>
            <OriginalDetails text={r.text} />
            <div className={`text-[11px] font-semibold mt-3 ${"uncited" in r ? "text-slate-500" : "text-emerald-700"}`}>{tx(r.source)}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="button"
          onClick={onOpenAdArt}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow transition cursor-pointer"
        >
          <BookOpen className="w-4 h-4" /> {t("aturan.open")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
    </section>
  );
}

export function CatatanSection() {
  const { t, tx } = useI18n();
  return (
    <section id="catatan" className="py-16 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-start">
        <SectionHeader id="catatan" badge={t("catatan.badge")} title={t("catatan.title")} />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <ClipboardList className="w-4 h-4 text-emerald-600 shrink-0" /> {t("catatan.tasks")}
            </div>
            <ul className="space-y-2 text-sm">
              {rkm.milestones.map((m) => (
                <li key={m.task} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {tx(m.task)} <span className="text-xs text-emerald-700 font-semibold">({tx(m.status)})</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-xs text-slate-500 mt-3">
              {t("catatan.other")} <Placeholder>{rkm.programKerjaLain}</Placeholder>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-slate-900 mb-2">{t("catatan.membersTitle")}</div>
            <p className="text-sm text-slate-600">
              {t("catatan.membersBody")} <Placeholder />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RencanaSection() {
  const { t, tx } = useI18n();
  return (
    <section id="rencana" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader id="rencana" badge={t("rencana.badge")} title={t("rencana.title")} subtitle={t("rencana.subtitle")} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-start">
        {rkm.rencanaKeDepan.items.map((item) => (
          <div key={item.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-slate-900 flex items-start gap-2">
                <Route className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{tx(item.title)}</span>
              </h3>
              <span className="inline-block shrink-0 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                {tx(item.status)}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{tx(item.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
