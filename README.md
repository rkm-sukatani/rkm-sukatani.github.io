# RKM TPU SUKATANI

> **Portal RKM TPU SUKATANI — Rukun Kematian Muslim (RKM) Nurul Falah Sukatani**
> *Kp. Sukatani, RT 05 RW 03, Desa Wangunsari, Cisolok, Sukabumi, Jawa Barat 43366.*

RKM terintegrasi secara kelembagaan dengan DKM Masjid Nurul Falah Sukatani
(lihat AD/ART DKM & RKM). Portal masjid (DKM): https://nurul-falah.github.io

Situs ini direplikasi dari tema & struktur `nurul-falah.github.io`. Seluruh fakta
diambil dari repo tersebut (`src/data/masjid.json`, `src/data/adArt.ts`) dan
dikumpulkan di `src/data/rkm.json`. Isian yang belum ada sumbernya ditandai
**(menyusul)** dan tidak boleh dikarang.

## Pengembangan Lokal

```bash
bun install
bun run dev -- --port 5174
```

## Deploy

- Target situs: https://rkm-sukatani.github.io/ (akun/organisasi GitHub `rkm-sukatani`,
  repo `rkm-sukatani.github.io`). Remote belum diatur dan belum pernah di-push.
- Karena dideploy di root domain, `base` Vite = `"/"` (lihat `vite.config.ts`).
- Workflow `.github/workflows/deploy.yml` menjalankan `bun run build` lalu
  mengunggah `dist/` ke GitHub Pages setiap push ke `main`
  (aktifkan *Settings → Pages → Source: GitHub Actions* di repo).
- Build menyalin `index.html` ke `404.html` dan ke setiap rute SPA
  (`/tentang`, `/layanan`, `/keuangan`, `/pengurus`, `/aturan`, `/catatan`, `/ad-art`)
  agar kunjungan langsung mendapat HTTP 200.
