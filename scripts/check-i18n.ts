/**
 * Checks that public Indonesian source strings have EN/AR translations,
 * that citations, amounts, and names survive translation, and that the
 * published cash figures are unchanged.
 */
import { adArtData } from "../src/data/adArt";
import rkm from "../src/data/rkm.json";
import { dict as en } from "../src/i18n/dict/en";
import { dict as ar } from "../src/i18n/dict/ar";

const SKIP_KEYS = new Set(["icon", "whatsapp", "ref", "style", "part", "id", "subItemStyle"]);

const ALLOW = new Set([
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "Badar Rustandi",
  "Ugan Sugandi",
  "M. Bibin",
  "Ustadz Sholeh",
  "Ustadz Jarnudzi",
  "Burhan Mubarok S.Kom",
  "Angga Maulana",
  "Kholid Muhsin",
  "M. Udu",
  "Ustadz Solehudin",
  "Ustadz Bibin",
  "Ustadz Basri",
  "Ustadz Enjar",
  "Engkom Komariyah",
  "Sumarsih",
  "Fajrin",
  "Odah",
  "Itoh",
  "Uyun",
  "RT 01: Dian",
  "RT 02: Ip",
  "RT 03: Nana",
  "RT 04: Armat",
  "RT 05: Angga Maulana",
  "RT 06: Misbah",
  "RKM Sukatani",
  "43366",
  "Rp 4.000",
  "Rp 600.000",
  "Rp 19.372.163",
  "Rp 7.590.000",
  "Rp 27.893.000",
  "Rp 16.110.837",
  "Bank Syariah Indonesia (BSI)",
  "7203516578",
  "MASJID NURUL FALAH SUKATANI",
  "0856-4038-0652",
]);

const KEEP_NAMES = [
  "Badar Rustandi",
  "Burhan",
  "Dede Dzulkipli",
  "Angga Maulana",
  "Kholid Muhsin",
  "Marni S",
  "Joni Purnama",
  "Holid",
  "Nurul Falah",
  "Sukatani",
  "Citespong",
  "Wangunsari",
  "Cisolok",
  "Sukabumi",
];

function walk(value: unknown, key: string, out: Set<string>) {
  if (typeof value === "string") {
    if (SKIP_KEYS.has(key) || key.startsWith("_")) return;
    out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) walk(item, key, out);
    return;
  }
  if (value && typeof value === "object") {
    if (key.startsWith("_") && key !== "_kutipanSections") return;
    for (const [childKey, child] of Object.entries(value)) walk(child, childKey, out);
  }
}

const strings = new Set<string>();
walk(adArtData, "", strings);
walk(rkm, "", strings);

const problems: string[] = [];
const dicts = { en, ar } as const;

for (const source of strings) {
  if (ALLOW.has(source)) continue;
  for (const lang of ["en", "ar"] as const) {
    const translated = dicts[lang][source];
    if (translated == null) {
      problems.push(`${lang} missing: ${source.slice(0, 120)}`);
      continue;
    }
    if (source.includes("[belum dikonfirmasi") && !translated.includes("[belum dikonfirmasi")) {
      problems.push(`${lang} dropped unconfirmed marker: ${source.slice(0, 80)}`);
    }
    if (source.includes("(menyusul)") && source !== "(menyusul)" && !translated.includes("(menyusul)")) {
      problems.push(`${lang} dropped (menyusul): ${source.slice(0, 80)}`);
    }
    for (const amount of source.match(/Rp [\d.]+/g) ?? []) {
      if (!translated.includes(amount)) problems.push(`${lang} dropped ${amount}: ${source.slice(0, 80)}`);
    }
    for (const token of ["7203516578", "001/RKM/VIII/2023", "https://rkm-sukatani.github.io", "2/3", "MASJID NURUL FALAH SUKATANI"]) {
      if (source.includes(token) && !translated.includes(token)) problems.push(`${lang} dropped ${token}: ${source.slice(0, 80)}`);
    }
    for (const name of KEEP_NAMES) {
      if (source.includes(name) && !translated.includes(name)) problems.push(`${lang} dropped ${name}: ${source.slice(0, 80)}`);
    }
  }
}

const finance = rkm.finance;
if (finance.saldoKasRkm !== "Rp 19.372.163") problems.push("saldoKasRkm changed");
if (finance.laporan.saldoAkhir !== "Rp 19.372.163") problems.push("saldoAkhir changed");
if (finance.lastUpdate !== "20 November 2026" || finance.laporan.asOf !== "20 November 2026") problems.push("cash date changed");

if (problems.length) {
  console.error(problems.slice(0, 40).join("\n"));
  console.error(`${problems.length} i18n problem(s)`);
  process.exit(1);
}

console.log(`i18n ok: ${strings.size} source strings, ${Object.keys(en).length} translations`);
