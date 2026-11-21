#!/usr/bin/env python3
"""Build EN/AR dictionaries from Indonesian source strings.

Patterns cover article numbers, chapter numbers, and repeated source labels.
Everything else must be listed in src/i18n/dict/pairs.json as {"id": {"en", "ar"}}.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAIRS = json.loads((ROOT / "src/i18n/dict/pairs.json").read_text())

BAB_AR = {
    "I": "الأول",
    "II": "الثاني",
    "III": "الثالث",
    "IV": "الرابع",
    "V": "الخامس",
    "VI": "السادس",
    "VII": "السابع",
    "VIII": "الثامن",
    "IX": "التاسع",
    "X": "العاشر",
    "XI": "الحادي عشر",
}

MONTHS_EN = {
    "Januari": "January",
    "Februari": "February",
    "Maret": "March",
    "April": "April",
    "Mei": "May",
    "Juni": "June",
    "Juli": "July",
    "Agustus": "August",
    "September": "September",
    "Oktober": "October",
    "November": "November",
    "Desember": "December",
    "Nov": "November",
}
MONTHS_AR = {
    "Januari": "يناير",
    "Februari": "فبراير",
    "Maret": "مارس",
    "April": "أبريل",
    "Mei": "مايو",
    "Juni": "يونيو",
    "Juli": "يوليو",
    "Agustus": "أغسطس",
    "September": "سبتمبر",
    "Oktober": "أكتوبر",
    "November": "نوفمبر",
    "Desember": "ديسمبر",
    "Nov": "نوفمبر",
}
DAYS_EN = {"Jumat": "Friday", "Senin": "Monday", "Selasa": "Tuesday", "Rabu": "Wednesday", "Kamis": "Thursday", "Sabtu": "Saturday", "Minggu": "Sunday"}
DAYS_AR = {"Jumat": "الجمعة", "Senin": "الاثنين", "Selasa": "الثلاثاء", "Rabu": "الأربعاء", "Kamis": "الخميس", "Sabtu": "السبت", "Minggu": "الأحد"}


def shift_dates(text: str, lang: str) -> str:
    days = DAYS_EN if lang == "en" else DAYS_AR
    months = MONTHS_EN if lang == "en" else MONTHS_AR
    for src, dst in days.items():
        text = re.sub(rf"\b{src}\b", dst, text)
    # Longer month names first so "November" is not partly matched after "Nov".
    for src, dst in sorted(months.items(), key=lambda kv: -len(kv[0])):
        text = re.sub(rf"\b{src}\b", dst, text)
    return text


def pattern(s: str, lang: str) -> str | None:
    m = re.fullmatch(r"Pasal (\d+)", s)
    if m:
        return f"Article {m.group(1)}" if lang == "en" else f"المادة {m.group(1)}"
    m = re.fullmatch(r"BAB ([IVX]+)", s)
    if m:
        return f"Chapter {m.group(1)}" if lang == "en" else f"الباب {BAB_AR[m.group(1)]}"
    m = re.fullmatch(r"Tambahan dari usulan Pak Badar \(Pasal (\d+)\)", s)
    if m:
        return (
            f"Added from Mr. Badar's proposal (Pasal {m.group(1)})"
            if lang == "en"
            else f"إضافة من مقترح السيد Badar (Pasal {m.group(1)})"
        )
    m = re.fullmatch(r"Tambahan dari usulan Pak Badar, (Pasal \d+ huruf [A-Za-z](?: butir \d+)?)", s)
    if m:
        return (
            f"Added from Mr. Badar's proposal, {m.group(1)}"
            if lang == "en"
            else f"إضافة من مقترح السيد Badar، {m.group(1)}"
        )
    m = re.fullmatch(r"Tambahan dari usulan Pak Badar, (Pasal \d+ ayat \(\d+\))", s)
    if m:
        return (
            f"Added from Mr. Badar's proposal, {m.group(1)}"
            if lang == "en"
            else f"إضافة من مقترح السيد Badar، {m.group(1)}"
        )
    m = re.fullmatch(r"Naskah dasar: AD/ART lama, ((?:AD|ART) Pasal [\d]+(?: ayat \(\d+\))?) \(disesuaikan untuk RKM\)", s)
    if m:
        return (
            f"Base text: earlier AD/ART, {m.group(1)} (adapted for RKM)"
            if lang == "en"
            else f"النص الأساسي: AD/ART السابق، {m.group(1)} (عُدِّل لـ RKM)"
        )
    m = re.fullmatch(r"Keputusan Ketua RKM, (\d+ Nov 2026)", s)
    if m:
        when = shift_dates(m.group(1), lang)
        return f"Decision of the RKM Chair, {when}" if lang == "en" else f"قرار رئيس RKM، {when}"
    if re.fullmatch(r"[A-D]\.", s):
        return s
    return None


def translate(s: str, lang: str) -> str | None:
    if s in PAIRS and lang in PAIRS[s]:
        return PAIRS[s][lang]
    return pattern(s, lang)


def emit(lang: str, strings: list[str]) -> dict[str, str]:
    out: dict[str, str] = {}
    missing = []
    for s in strings:
        value = translate(s, lang)
        if value is None:
            missing.append(s)
        else:
            out[s] = value
    if missing:
        raise SystemExit(f"{lang}: missing {len(missing)}\n" + "\n".join(missing[:30]))
    return out


if __name__ == "__main__":
    import subprocess, sys
    # The checker extracts strings; this script is invoked with a JSON list on stdin when building.
    strings = json.loads(sys.stdin.read())
    for lang in ("en", "ar"):
        data = emit(lang, strings)
        target = ROOT / "src/i18n/dict" / f"{lang}.ts"
        body = json.dumps(data, ensure_ascii=False, indent=2)
        target.write_text(f"export const dict: Record<string, string> = {body};\n")
        print(f"wrote {target} ({len(data)} entries)")
