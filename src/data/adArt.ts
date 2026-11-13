// AD/ART GABUNGAN Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 — DRAF, belum disahkan.
// Naskah dasar: AD/ART lama (DKM) yang disesuaikan untuk RKM; tambahan dari usulan Pak Badar Rustandi.
// Catatan perubahan & penanda "[belum dikonfirmasi: ...]": /workspace/rkm-plans/adart-rkm-gabungan.md.
// Dihasilkan dari rkm-plans/gen/adart_merged.py + build_merged.py. Jangan disunting langsung.

export type AdArtItemStyle = "plain" | "ayat" | "huruf" | "bagian";

export interface AdArtPasal {
  number: string;
  title: string;
  /** plain = tanpa nomor; ayat = (1), (2); huruf = a., b.; bagian = A./B. dengan butir 1., 2. */
  style: AdArtItemStyle;
  intro?: string;
  /** Asal pasal: naskah dasar (AD/ART lama) atau tambahan dari usulan Pak Badar. */
  source?: string;
  highlight?: boolean;
  badge?: string;
  items: Array<{
    label?: string;
    text: string;
    subItems?: string[];
    /** angka (bawaan) = 1., 2.; huruf = a., b. */
    subItemStyle?: "huruf";
    /** Asal ayat bila berbeda dari asal pasal (mis. ayat tambahan, keputusan Ketua). */
    source?: string;
  }>;
}

export interface AdArtBab {
  id: string;
  part: "AD" | "ART";
  babNumber: string;
  title: string;
  summary?: string;
  pasals: AdArtPasal[];
}

export interface AdArtDocument {
  title: string;
  subtitle: string;
  organization: string;
  address: string;
  documentYear: string;
  establishedDate: string;
  draftNotice?: { title: string; text: string };
  mukadimah: {
    bismillah: string;
    opening: string;
    quranQuote?: { text: string; source: string };
    body: string[];
  };
  babs: AdArtBab[];
  susunan?: {
    note: string;
    groups: Array<{ title: string; members: string[] }>;
    ketentuan: string;
  };
  pengesahan?: {
    paragraphs: string[];
    place: string;
    date: string;
    signatureNote?: string;
  };
  signatories: Array<{
    role: string;
    name: string;
    status: string;
  }>;
  penutup?: string[];
}

/** Penanda isian yang belum diputuskan: "[belum dikonfirmasi: ...]" atau "(menyusul)". */
export const UNCONFIRMED_PATTERN = /(\[belum dikonfirmasi(?::[^\]]*)?\]|\(menyusul\))/g;

export function hasUnconfirmed(text: string): boolean {
  return /\[belum dikonfirmasi|\(menyusul\)/.test(text);
}

export const adArtData: AdArtDocument = {
  "title": "Anggaran Dasar & Anggaran Rumah Tangga (AD/ART)",
  "subtitle": "Aturan Dasar & Tata Tertib Organisasi",
  "organization": "Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03",
  "address": "Majelis Nurul Falah, Kp. Sukatani, RT 05 RW 03, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat 43366",
  "documentYear": "(menyusul) [belum dikonfirmasi: tahun penetapan naskah gabungan; sampul usulan Pak Badar menulis 'TAHUN 2026', Lembar Pengesahannya 4 Agustus 2023]",
  "establishedDate": "(menyusul) [belum dikonfirmasi: tanggal penetapan naskah gabungan belum ditentukan; usulan Pak Badar menulis 4 Agustus 2023 di Lembar Pengesahan dan 'TAHUN 2026' di sampul, sedangkan naskah dasar (AD/ART DKM) bertanggal 1 November 2026]",
  "draftNotice": {
    "title": "Draf gabungan — belum disahkan",
    "text": "Naskah dasar adalah AD/ART lama yang sebelumnya tayang di situs ini, disesuaikan untuk RKM: DKM diganti RKM dan bagian khusus masjid (TPA, zakat/UPZ, Baitul Mal, pembangunan masjid) dihapus. Poin-poin dari AD/ART usulan Pak Badar Rustandi (Pendiri RKM) yang belum ada di naskah dasar ditambahkan, dan setiap pasal mencantumkan sumbernya. Keputusan Ketua RKM (masa bakti 10 tahun, iuran, santunan, biaya pemakaman, pengurusan jenazah) dipertahankan. Bagian yang belum jelas diberi tanda “belum dikonfirmasi”. Naskah belum berlaku sampai disahkan."
  },
  "mukadimah": {
    "bismillah": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "opening": "Dengan memanjatkan puji syukur kehadirat Allah SWT, serta memohon rahmat dan ridha-Nya, masyarakat Kampung Sukatani RW 03 menyadari bahwa kematian merupakan ketentuan Allah SWT yang pasti dihadapi oleh setiap manusia. Oleh karena itu, penyelenggaraan kewajiban terhadap orang yang meninggal dunia merupakan tanggung jawab keagamaan dan sosial yang perlu dilaksanakan secara bersama-sama.",
    "body": [
      "Dalam kehidupan bermasyarakat, diperlukan suatu wadah yang mampu mengoordinasikan pelayanan kematian, membantu keluarga yang mengalami musibah, serta mengelola fasilitas pemakaman umum secara tertib, terarah, dan bertanggung jawab.",
      "Atas dasar kesadaran tersebut, masyarakat Kampung Sukatani RW 03 membentuk Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) sebagai organisasi sosial kemasyarakatan yang berlandaskan nilai-nilai ajaran Islam, semangat gotong royong, persaudaraan, kepedulian, dan tanggung jawab bersama.",
      "Bahwa pengelolaan organisasi merupakan amanah yang harus dilaksanakan dengan penuh kejujuran, keadilan, keterbukaan, dan tanggung jawab. Setiap pengurus wajib menjaga kepercayaan masyarakat serta menjalankan tugas sesuai dengan ketentuan syariat Islam dan aturan organisasi.",
      "Untuk menjamin keberlangsungan organisasi, ketertiban administrasi, kepastian kewenangan, serta pengelolaan keuangan dan aset secara bertanggung jawab, dipandang perlu menetapkan Anggaran Dasar dan Anggaran Rumah Tangga sebagai pedoman penyelenggaraan organisasi.",
      "Dengan mengharap ridha dan pertolongan Allah Subhanahu wa Ta'ala, warga dan pengurus Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 menetapkan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) RKM sebagai berikut:"
    ]
  },
  "babs": [
    {
      "id": "ad-bab-i",
      "part": "AD",
      "babNumber": "BAB I",
      "title": "Nama, Waktu, Kedudukan, dan Wilayah Kerja",
      "summary": "Identitas resmi RKM, waktu pendirian, kedudukan, dan wilayah kerjanya di Kampung Sukatani RW 03.",
      "pasals": [
        {
          "number": "Pasal 1",
          "title": "Nama Organisasi",
          "style": "plain",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 1 (disesuaikan untuk RKM; klausul integrasi dengan DKM dihapus)",
          "items": [
            {
              "text": "Organisasi ini bernama Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03, selanjutnya dalam AD/ART ini disebut RKM. [belum dikonfirmasi: nama mengikuti Berita Acara No. 001/RKM/VIII/2023; usulan Pak Badar (Pasal 1) menamai organisasi 'Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU)', dan kop Berita Acara juga memuat 'dan Pengelolaan TPU'; perlu dipastikan nama resmi yang dipakai]"
            }
          ]
        },
        {
          "number": "Pasal 2",
          "title": "Waktu Pendirian",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 2 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "RKM didirikan oleh masyarakat Kampung Sukatani RW 03 untuk jangka waktu yang tidak ditentukan."
            },
            {
              "text": "RKM didirikan pada hari Jumat, 4 Agustus 2023, melalui musyawarah para tokoh agama dan masyarakat RT 01–06 yang dipimpin oleh Badar Rustandi, sebagaimana tercatat dalam Berita Acara Pendirian dan Pembentukan Pengurus RKM Nomor: 001/RKM/VIII/2023.",
              "source": "Tambahan dari Berita Acara No. 001/RKM/VIII/2023"
            }
          ]
        },
        {
          "number": "Pasal 3",
          "title": "Kedudukan",
          "style": "plain",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 3 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "RKM berkedudukan di Majelis Nurul Falah, beralamat di Kp. Sukatani, RT 05 RW 03, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat, Kode Pos 43366.",
              "source": "Alamat sesuai konfirmasi Ketua RKM, 3 Nov 2026; usulan Pak Badar (Pasal 2) menulis 'Kampung Sukatani RW 03, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat'"
            }
          ]
        },
        {
          "number": "Pasal 4",
          "title": "Wilayah Kerja",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 3)",
          "items": [
            {
              "text": "Wilayah pelayanan utama RKM meliputi masyarakat Kampung Sukatani RW 03, yang mencakup RT 01, RT 02, RT 03, RT 04, RT 05, dan RT 06."
            },
            {
              "text": "Keanggotaan RKM tidak terbatas pada warga Kampung Sukatani RW 03. Masyarakat dari luar wilayah tersebut dapat diterima menjadi anggota sepanjang menyatakan kesediaan untuk menaati AD/ART dan ketentuan organisasi. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 14 ayat (2); dipertahankan, tidak digabung]"
            },
            {
              "text": "Pelayanan kepada anggota dari luar wilayah dilaksanakan sesuai ketentuan organisasi, kemampuan RKM, serta hasil musyawarah yang sah."
            },
            {
              "text": "Perluasan wilayah pelayanan dapat dilakukan berdasarkan kesepakatan musyawarah organisasi."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-ii",
      "part": "AD",
      "babNumber": "BAB II",
      "title": "Asas, Aqidah, Nilai Dasar, Landasan, dan Sifat Organisasi",
      "summary": "Landasan syariat Islam, 3 Pilar Nilai Dasar (Murni, Mandiri, Tumbuh Berkelanjutan), serta landasan dan sifat RKM sebagai organisasi sosial kemasyarakatan.",
      "pasals": [
        {
          "number": "Pasal 5",
          "title": "Asas dan Aqidah",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 4 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "RKM berasaskan Islam yang berpedoman pada Al-Qur'an dan As-Sunnah sesuai dengan pemahaman Ahlussunnah wal Jama'ah. [belum dikonfirmasi: usulan Pak Badar (Pasal 4) berbunyi 'RKM berasaskan Pancasila dan berlandaskan nilai-nilai ajaran agama Islam'; yang dipakai rumusan naskah dasar, perlu dipastikan apakah rumusan Pak Badar ditambahkan]"
            },
            {
              "text": "Dalam kehidupan berbangsa dan bernegara, RKM mematuhi hukum dan peraturan perundang-undangan yang berlaku di Negara Kesatuan Republik Indonesia sepanjang tidak bertentangan dengan syariat Islam."
            }
          ]
        },
        {
          "number": "Pasal 6",
          "title": "Doktrin 3 (Tiga) Pilar Nilai Dasar",
          "style": "plain",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 5 (disesuaikan untuk RKM)",
          "intro": "[belum dikonfirmasi: Doktrin 3 Pilar berasal dari AD/ART DKM; butir khusus masjid (memakmurkan masjid, pendidikan Al-Qur'an anak-anak, kaderisasi imam, pembangunan fisik masjid) dihapus dan sisanya disesuaikan untuk RKM; perlu disetujui]",
          "highlight": true,
          "badge": "Fondasi Utama",
          "items": [
            {
              "text": "1. MURNI (Integritas Niat & Kebersihan Adab):",
              "subItems": [
                "Mengelola RKM semata-mata lillahi ta'ala.",
                "Bebas Politisasi: Menolak segala bentuk politik praktis, barter suara, maupun kesepakatan transaksional dengan partai politik atau calon legislatif/eksekutif yang menggadaikan independensi RKM dan marwah warga.",
                "Musyawarah Beradab: Mengedepankan musyawarah yang santun, terjadwal, fokus pada solusi, dan berkeadilan; serta menolak segala bentuk penghakiman sepihak, fitnah, caci maki, atau intimidasi personal.",
                "Transparansi Total: Pelaporan keuangan dan program kerja wajib terbuka 100% melalui papan informasi (mading) RKM dan portal web resmi RKM (https://rkm-sukatani.github.io). [belum dikonfirmasi: lokasi papan informasi (mading) RKM belum ditentukan]"
              ]
            },
            {
              "text": "2. MANDIRI (Kedaulatan Marwah & Berdikari):",
              "subItems": [
                "Pantang Mengemis (Anti-Nyapir): Dilarang keras menghimpun dana dengan cara meminta-minta di jalan raya (nyapir) atau cara-cara lain yang merendahkan martabat dan kehormatan umat Islam.",
                "Mengutamakan kemandirian melalui swadaya gotong royong warga serta kemitraan wakaf dan infaq umat yang terhormat."
              ]
            },
            {
              "text": "3. TUMBUH BERKELANJUTAN (Pertumbuhan SDM & Pengembangan Sarana Bertahap):",
              "subItems": [
                "Menempatkan pembangunan manusia (pelayanan kematian dan kepedulian sosial) di atas sekadar kemegahan fisik sarana.",
                "Melaksanakan pengadaan dan pembangunan sarana secara bertahap, rasional, terukur, bebas dari jeratan utang yang membebani warga, dan mendahulukan sarana fungsional agar pelayanan kematian kepada warga tidak pernah terhenti."
              ]
            }
          ]
        },
        {
          "number": "Pasal 7",
          "title": "Landasan Organisasi",
          "style": "huruf",
          "source": "Tambahan dari usulan Pak Badar (Pasal 5)",
          "intro": "Dalam menjalankan kegiatan, RKM berpedoman pada:",
          "items": [
            {
              "text": "Al-Qur'an dan As-Sunnah."
            },
            {
              "text": "Ketentuan syariat Islam."
            },
            {
              "text": "Prinsip ukhuwah Islamiyah."
            },
            {
              "text": "Prinsip tolong-menolong dalam kebaikan."
            },
            {
              "text": "Musyawarah dan mufakat."
            },
            {
              "text": "Amanah, kejujuran, keadilan, dan tanggung jawab."
            },
            {
              "text": "Peraturan perundang-undangan yang berlaku."
            }
          ]
        },
        {
          "number": "Pasal 8",
          "title": "Sifat Organisasi",
          "style": "huruf",
          "source": "Tambahan dari usulan Pak Badar (Pasal 6)",
          "intro": "RKM merupakan organisasi sosial kemasyarakatan yang bersifat:",
          "items": [
            {
              "text": "Keagamaan."
            },
            {
              "text": "Sosial dan kemanusiaan."
            },
            {
              "text": "Kekeluargaan."
            },
            {
              "text": "Gotong royong."
            },
            {
              "text": "Mandiri."
            },
            {
              "text": "Tidak berorientasi pada keuntungan pribadi."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-iii",
      "part": "AD",
      "babNumber": "BAB III",
      "title": "Visi, Misi, Maksud, Tujuan, dan Ruang Lingkup Kegiatan",
      "summary": "Arah RKM: visi dan misi dari naskah dasar, serta maksud, tujuan, dan ruang lingkup kegiatan dari usulan Pak Badar.",
      "pasals": [
        {
          "number": "Pasal 9",
          "title": "Visi",
          "style": "plain",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 6 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Terwujudnya RKM Kampung Sukatani RW 03 sebagai wadah pelayanan sosial dan keagamaan masyarakat yang Murni dalam adab dan niat, Mandiri dalam ekonomi dan marwah, serta Tumbuh Berkelanjutan dalam membina generasi rabbani dan masyarakat madani. [belum dikonfirmasi: rumusan visi disesuaikan dari visi DKM: 'Masjid Nurul Falah Sukatani sebagai pusat peradaban umat' diganti 'RKM ... sebagai wadah pelayanan sosial dan keagamaan masyarakat' (frasa dari usulan Pak Badar, Pasal 7); perlu disetujui]"
            }
          ]
        },
        {
          "number": "Pasal 10",
          "title": "Misi",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 7 (disesuaikan untuk RKM; misi Imarah dan Ri'ayah khusus masjid dihapus)",
          "items": [
            {
              "text": "Idarah (Tata Kelola & Administrasi): Menyelenggarakan manajemen organisasi, administrasi, dan keuangan RKM secara satu pintu, modern, transparan, dan akuntabel."
            },
            {
              "text": "Ijtima'iyah (Sosial & Pelayanan Kematian): Mengelola layanan fardhu kifayah pengurusan jenazah serta pengelolaan Taman Pemakaman Umum (TPU).",
              "source": "Pengelolaan TPU ditambahkan dari usulan Pak Badar, Pasal 8 huruf d; UPZ dan Baitul Mal dihapus"
            }
          ]
        },
        {
          "number": "Pasal 11",
          "title": "Maksud",
          "style": "plain",
          "source": "Tambahan dari usulan Pak Badar (Pasal 7)",
          "items": [
            {
              "text": "RKM dibentuk sebagai wadah pelayanan sosial dan keagamaan masyarakat dalam membantu penyelenggaraan kewajiban terhadap warga yang meninggal dunia serta mengelola Taman Pemakaman Umum (TPU)."
            }
          ]
        },
        {
          "number": "Pasal 12",
          "title": "Tujuan",
          "style": "huruf",
          "source": "Tambahan dari usulan Pak Badar (Pasal 8)",
          "intro": "RKM bertujuan:",
          "items": [
            {
              "text": "Membantu masyarakat dalam penyelenggaraan pengurusan jenazah sesuai tuntunan syariat Islam."
            },
            {
              "text": "Meringankan beban keluarga yang mengalami musibah kematian."
            },
            {
              "text": "Mengoordinasikan pelayanan pemakaman masyarakat."
            },
            {
              "text": "Mengelola dan memelihara Taman Pemakaman Umum."
            },
            {
              "text": "Meningkatkan kepedulian sosial dan semangat gotong royong."
            },
            {
              "text": "Menjaga persatuan dan kerukunan masyarakat."
            },
            {
              "text": "Mengelola keuangan dan kekayaan organisasi secara amanah, tertib, dan transparan."
            },
            {
              "text": "Menjamin keberlangsungan pelayanan organisasi bagi masyarakat."
            }
          ]
        },
        {
          "number": "Pasal 13",
          "title": "Ruang Lingkup Kegiatan",
          "style": "huruf",
          "source": "Tambahan dari usulan Pak Badar (Pasal 9)",
          "intro": "Ruang lingkup kegiatan RKM meliputi:",
          "items": [
            {
              "text": "Pelayanan dan bantuan pengurusan jenazah."
            },
            {
              "text": "Koordinasi penyelenggaraan pemakaman."
            },
            {
              "text": "Pengelolaan dan pemeliharaan Taman Pemakaman Umum."
            },
            {
              "text": "Pengadaan dan pemeliharaan perlengkapan kematian."
            },
            {
              "text": "Penggalangan dana berdasarkan kesepakatan masyarakat."
            },
            {
              "text": "Pengelolaan administrasi dan keuangan organisasi."
            },
            {
              "text": "Pemberian bantuan kepada keluarga yang mengalami musibah kematian sesuai kemampuan organisasi."
            },
            {
              "text": "Kegiatan sosial dan keagamaan lainnya yang sesuai dengan tujuan organisasi."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-iv",
      "part": "AD",
      "babNumber": "BAB IV",
      "title": "Keanggotaan dan Kepengurusan",
      "summary": "Keanggotaan RKM serta susunan struktur organisasi: Pendiri, Majelis Syura, Pengurus Harian, dan Seksi-Seksi Pelaksana.",
      "pasals": [
        {
          "number": "Pasal 14",
          "title": "Keanggotaan",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 10); menggantikan AD Pasal 8 lama (Jamaah Masjid Nurul Falah)",
          "items": [
            {
              "text": "Keanggotaan RKM terbuka bagi masyarakat Kampung Sukatani RW 03 maupun masyarakat dari luar wilayah tersebut."
            },
            {
              "text": "Calon anggota dari luar wilayah dapat diterima setelah menyatakan kesediaan menaati AD/ART dan memenuhi ketentuan keanggotaan yang ditetapkan organisasi. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 4 ayat (2); dipertahankan, tidak digabung]"
            },
            {
              "text": "Setiap anggota berhak memperoleh pelayanan sesuai ketentuan organisasi."
            },
            {
              "text": "Setiap anggota berhak memperoleh informasi mengenai kegiatan dan pengelolaan keuangan organisasi."
            },
            {
              "text": "Setiap anggota berkewajiban menjaga persatuan, mendukung kegiatan organisasi, dan menaati AD/ART."
            },
            {
              "text": "Setiap anggota berkewajiban menjaga serta memelihara fasilitas organisasi sesuai kemampuan dan ketentuan yang disepakati."
            },
            {
              "text": "Hak dan kewajiban anggota dilaksanakan secara adil tanpa membedakan kedudukan sosial."
            }
          ]
        },
        {
          "number": "Pasal 15",
          "title": "Struktur Organisasi",
          "style": "huruf",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 9 (disesuaikan untuk RKM; unsur dari usulan Pak Badar, Pasal 11)",
          "intro": "Struktur organisasi RKM terdiri atas:",
          "items": [
            {
              "text": "Pendiri.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 11 huruf a"
            },
            {
              "text": "Majelis Syura (Dewan Penasehat / Pembina).",
              "source": "Nama Majelis Syura dari usulan Pak Badar, Pasal 11 huruf b; uraian Dewan Penasehat dipindah ke Pasal 17 ayat (1)"
            },
            {
              "text": "Pengurus Harian (Pelaksana), terdiri atas Ketua RKM, Sekretaris RKM, dan Bendahara RKM.",
              "source": "Sejalan dengan usulan Pak Badar, Pasal 11 huruf c–e"
            },
            {
              "text": "Seksi-Seksi Pelaksana, terdiri atas Seksi Pemakaman, Seksi Pengurusan Jenazah Perempuan, Seksi Perlengkapan, dan Seksi Penggalangan Dana.",
              "source": "Seksi dari usulan Pak Badar, Pasal 11 huruf f–i, menggantikan bidang-bidang DKM (Imarah, Ri'ayah, Sosial & RKM, Zakat & Baitul Mal)"
            }
          ]
        },
        {
          "number": "Pasal 16",
          "title": "Pendiri",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 12)",
          "items": [
            {
              "text": "Pendiri RKM adalah Badar Rustandi."
            },
            {
              "text": "Pendiri merupakan pihak yang memprakarsai pembentukan organisasi dan memimpin musyawarah pendirian."
            },
            {
              "text": "Pendiri mempunyai tanggung jawab moral dalam menjaga maksud, tujuan, dan nilai dasar pendirian organisasi."
            },
            {
              "text": "Pendiri menjalankan peran sesuai dengan AD/ART dan mekanisme musyawarah organisasi."
            }
          ]
        },
        {
          "number": "Pasal 17",
          "title": "Majelis Syura",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 13)",
          "items": [
            {
              "text": "Majelis Syura (Dewan Penasehat / Pembina): Tokoh agama, sesepuh masyarakat, dan aparatur lingkungan setempat yang memberikan nasihat syar'i dan pertimbangan kebijaksanaan.",
              "source": "Naskah dasar: AD/ART lama, AD Pasal 9 ayat (1)"
            },
            {
              "text": "Majelis Syura merupakan unsur pertimbangan, nasihat, dan pengawasan organisasi."
            },
            {
              "text": "Majelis Syura memberikan pertimbangan terhadap kebijakan strategis organisasi."
            },
            {
              "text": "Majelis Syura membantu menjaga pelaksanaan organisasi agar sesuai dengan syariat Islam dan ketentuan AD/ART."
            },
            {
              "text": "Majelis Syura dapat memberikan pertimbangan terhadap persoalan kepengurusan dan penyelesaian perselisihan."
            },
            {
              "text": "Pelaksanaan fungsi Majelis Syura dilakukan melalui musyawarah dan tidak bersifat sepihak."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-v",
      "part": "AD",
      "babNumber": "BAB V",
      "title": "Musyawarah dan Pengambilan Keputusan",
      "summary": "Jenis-jenis forum musyawarah resmi, syarat mutlak keabsahan musyawarah, dan prinsip pengambilan keputusan berbasis bukti.",
      "pasals": [
        {
          "number": "Pasal 18",
          "title": "Jenis Musyawarah",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 10 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Musyawarah Tahunan (Musyawarah Ramadhan): Forum evaluasi tahunan, penyampaian laporan pertanggungjawaban program dan keuangan, serta penetapan rencana kerja tahun berjalan yang diselenggarakan setiap bulan Ramadhan. [belum dikonfirmasi: jadwal setiap bulan Ramadhan berasal dari AD/ART DKM; perlu dipastikan apakah RKM memakai jadwal yang sama]"
            },
            {
              "text": "Musyawarah Pleno / Pemilihan Pengurus: Forum tertinggi untuk memilih atau menetapkan Ketua RKM pada akhir masa jabatan atau apabila terjadi kekosongan jabatan."
            },
            {
              "text": "Musyawarah Pengurus / Rapat Koordinasi: Rapat berkala antar pengurus untuk membahas pelaksanaan program kerja dan teknis pelayanan."
            },
            {
              "text": "Musyawarah Khusus Warga: Pertemuan bersama warga untuk membahas agenda strategis tertentu yang membutuhkan kesepakatan bersama warga."
            }
          ]
        },
        {
          "number": "Pasal 19",
          "title": "Keabsahan Musyawarah",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 11 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Ketentuan Krusial",
          "items": [
            {
              "text": "Setiap musyawarah resmi mengatasnamakan RKM WAJIB diketahui, disetujui, dan diundang secara sah oleh Ketua RKM (atau pejabat yang diberikan mandat tertulis oleh Ketua RKM)."
            },
            {
              "text": "Pertemuan yang diadakan secara mendadak, sepihak, tanpa pemberitahuan agenda yang jelas, atau tanpa koordinasi dan persetujuan Ketua RKM dinyatakan TIDAK SAH dan keputusannya tidak mengikat organisasi."
            }
          ]
        },
        {
          "number": "Pasal 20",
          "title": "Prinsip Musyawarah dan Pengambilan Keputusan",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 16)",
          "items": [
            {
              "text": "Musyawarah merupakan mekanisme utama dalam pengambilan keputusan organisasi."
            },
            {
              "text": "Musyawarah dilaksanakan dengan mengutamakan kepentingan bersama dan kemaslahatan masyarakat."
            },
            {
              "text": "Setiap peserta musyawarah diberikan kesempatan menyampaikan pendapat, usulan, alasan, dan bukti pendukung yang dapat diperiksa."
            },
            {
              "text": "Setiap usulan yang berkaitan dengan kebijakan, penggunaan dana, perubahan fasilitas, atau tindakan organisasi harus disertai alasan yang jelas serta bukti atau dasar pertimbangan yang dapat dipertanggungjawabkan."
            },
            {
              "text": "Usulan yang tidak disertai bukti atau dasar yang memadai tidak dapat dijadikan dasar pengambilan keputusan."
            },
            {
              "text": "Usulan atau tindakan yang nyata-nyata bertentangan dengan syariat Islam, menimbulkan mafsadat, atau berpotensi mendatangkan kerusakan dan kerugian bagi organisasi maupun masyarakat, dinyatakan tertolak dan tidak dapat dilaksanakan."
            },
            {
              "text": "Keputusan diutamakan melalui mufakat. Apabila mufakat tidak tercapai, keputusan dapat diambil melalui mekanisme yang disepakati dalam musyawarah."
            },
            {
              "text": "Setiap keputusan penting wajib dituangkan dalam berita acara atau dokumen administrasi organisasi."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-vi",
      "part": "AD",
      "babNumber": "BAB VI",
      "title": "Keuangan dan Kekayaan Organisasi",
      "summary": "Sumber dana yang halal, Sistem Kas Satu Pintu, keterbukaan uang fisik, dan pengelolaan kekayaan organisasi.",
      "pasals": [
        {
          "number": "Pasal 21",
          "title": "Sumber Dana",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 12 (disesuaikan untuk RKM; dana zakat/UPZ/Baitul Mal dihapus)",
          "items": [
            {
              "text": "Swadaya Warga Sukatani: Iuran anggota RKM, iuran sukarela warga, serta gotong royong tenaga dan material."
            },
            {
              "text": "Donatur & Wakaf Umat: Wakaf tunai, wakaf material, dan infaq jariyah dari para muhsinin/simpatisan luar maupun dalam daerah yang tidak mengikat."
            },
            {
              "text": "Bantuan dari masyarakat dan pihak lain yang sah.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 14 huruf c"
            },
            {
              "text": "Hasil kegiatan organisasi yang sah.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 14 huruf d"
            },
            {
              "text": "Sumber penerimaan lainnya yang tidak bertentangan dengan hukum dan syariat Islam.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 14 huruf e"
            }
          ]
        },
        {
          "number": "Pasal 22",
          "title": "Sistem Kas Satu Pintu, Keterbukaan Uang Fisik, & Status Aset Wakaf",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 13 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Hak Keuangan Warga",
          "items": [
            {
              "text": "Kesiapan Menunjukkan Uang Fisik: Pengurus RKM wajib bersedia menunjukkan uang fisik kas dan/atau bukti mutasi rekening kapan pun diminta oleh warga, dengan sikap terbuka dan tanpa merasa tersinggung, karena mengetahui keamanan keuangan adalah hak bagi setiap warga."
            },
            {
              "text": "Seluruh dana RKM disatukan dalam satu kesatuan kas RKM."
            },
            {
              "text": "Penyimpanan dana wajib mengutamakan rekening bank syariah resmi atas nama organisasi."
            },
            {
              "text": "Sampai RKM memiliki rekening sendiri, pembayaran RKM untuk sementara menggunakan rekening Bank Syariah Indonesia (BSI) No. Rek. 7203516578 a.n. MASJID NURUL FALAH SUKATANI, yaitu rekening DKM Masjid Nurul Falah yang saat ini dipakai bersama.",
              "source": "Keputusan Ketua RKM, 4 Nov 2026"
            },
            {
              "text": "Status Mutlak Aset Wakaf & Infaq: Seluruh lahan, bangunan, material, inventaris, maupun dana yang telah diserahkan kepada RKM sebagai wakaf atau infaq otomatis berstatus milik Allah SWT untuk kemaslahatan umat, sehingga tidak dapat ditarik kembali atau diklaim kepemilikan pribadinya oleh siapapun (baik oleh donatur, ahli waris, maupun pengurus) dalam kondisi apapun. [belum dikonfirmasi: ketentuan status aset wakaf berasal dari AD/ART DKM dan sebelumnya sudah dihapus dari ringkasan aturan di situs; perlu diputuskan apakah dipertahankan untuk RKM, termasuk kaitannya dengan penyelesaian kekayaan saat pembubaran (Pasal 25 ayat (4)) dan status lahan TPU yang belum dikonfirmasi]"
            }
          ]
        },
        {
          "number": "Pasal 23",
          "title": "Pengelolaan Keuangan dan Kekayaan",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 15)",
          "items": [
            {
              "text": "Seluruh dana dan kekayaan yang diperoleh atas nama RKM merupakan kekayaan organisasi."
            },
            {
              "text": "Dana dan kekayaan organisasi tidak boleh digunakan untuk kepentingan pribadi."
            },
            {
              "text": "Pengelolaan keuangan wajib dilaksanakan secara tertib, transparan, dan dapat dipertanggungjawabkan."
            },
            {
              "text": "Setiap penerimaan dan pengeluaran wajib dicatat dalam administrasi organisasi."
            },
            {
              "text": "Penggunaan dana harus sesuai dengan tujuan organisasi."
            },
            {
              "text": "Kekayaan organisasi meliputi uang, perlengkapan, inventaris, dan aset lain yang diperoleh secara sah."
            },
            {
              "text": "Laporan keuangan disampaikan kepada forum musyawarah sebagai bentuk pertanggungjawaban."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-vii",
      "part": "AD",
      "babNumber": "BAB VII",
      "title": "Perubahan Anggaran Dasar, Pembubaran, dan Penutup",
      "summary": "Mekanisme kuorum dan mufakat untuk perubahan Anggaran Dasar, pembubaran organisasi, dan ketentuan penutup Anggaran Dasar.",
      "pasals": [
        {
          "number": "Pasal 24",
          "title": "Perubahan Anggaran Dasar",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, AD Pasal 14 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Perubahan terhadap Anggaran Dasar ini hanya dapat dilakukan melalui Musyawarah Tahunan atau Musyawarah Khusus yang dihadiri oleh sekurang-kurangnya 2/3 (dua pertiga) pengurus aktif dan perwakilan tokoh masyarakat, serta disetujui secara mufakat."
            },
            {
              "text": "Usulan perubahan harus disertai alasan yang jelas dan dasar atau bukti pendukung yang dapat dipertanggungjawabkan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 17 ayat (2)"
            },
            {
              "text": "Usulan yang tidak memiliki dasar yang memadai, atau yang bertentangan dengan syariat Islam maupun menimbulkan mafsadat dan kerusakan, ditolak dan tidak dapat ditetapkan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 17 ayat (3)"
            },
            {
              "text": "Perubahan harus didasarkan pada kebutuhan organisasi dan kepentingan masyarakat.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 17 ayat (4)"
            },
            {
              "text": "Setiap perubahan wajib dicatat dan menjadi bagian dari dokumen resmi organisasi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 17 ayat (5)"
            }
          ]
        },
        {
          "number": "Pasal 25",
          "title": "Pembubaran Organisasi",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 18)",
          "items": [
            {
              "text": "Pembubaran RKM hanya dapat dilakukan melalui musyawarah khusus. [belum dikonfirmasi: 'musyawarah khusus' kini dapat dibaca sebagai Musyawarah Khusus Warga (Pasal 18 ayat (4)), tetapi peserta dan kuorum untuk pembubaran belum diatur; perlu diputuskan apakah memakai kuorum 2/3 seperti perubahan Anggaran Dasar (Pasal 24 ayat (1))]"
            },
            {
              "text": "Keputusan pembubaran harus mempertimbangkan kepentingan masyarakat dan keberlangsungan pelayanan sosial."
            },
            {
              "text": "Penyelesaian seluruh aset, kewajiban, dan administrasi organisasi wajib dilakukan secara transparan dan dapat dipertanggungjawabkan."
            },
            {
              "text": "Penyelesaian kekayaan organisasi dilakukan berdasarkan keputusan musyawarah dan ketentuan hukum yang berlaku."
            }
          ]
        },
        {
          "number": "Pasal 26",
          "title": "Ketentuan Penutup Anggaran Dasar",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 19)",
          "items": [
            {
              "text": "Hal-hal yang belum diatur dalam Anggaran Dasar akan diatur lebih lanjut dalam Anggaran Rumah Tangga."
            },
            {
              "text": "Anggaran Rumah Tangga merupakan bagian yang tidak terpisahkan dari Anggaran Dasar."
            },
            {
              "text": "Ketentuan Anggaran Rumah Tangga tidak boleh bertentangan dengan Anggaran Dasar."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-i",
      "part": "ART",
      "babNumber": "BAB I",
      "title": "Hak, Kewajiban, dan Adab Anggota & Pengurus",
      "summary": "Hak dan kewajiban anggota serta kriteria integritas pengurus RKM.",
      "pasals": [
        {
          "number": "Pasal 1",
          "title": "Hak dan Kewajiban Anggota",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 1 (disesuaikan untuk RKM; hak memakai fasilitas masjid, akses Baitul Mal, dan adab bebas asap rokok di masjid dihapus)",
          "items": [
            {
              "text": "Hak Anggota:",
              "subItems": [
                "Mendapatkan pelayanan sosial keagamaan, termasuk layanan RKM (pengurusan jenazah), sesuai ketentuan yang berlaku.",
                "Memperoleh informasi laporan keuangan secara transparan melalui papan informasi (mading) RKM dan portal web resmi.",
                "Meminta pengurus RKM untuk menunjukkan uang fisik kas maupun bukti saldo rekening guna memastikan keamanan keuangan RKM.",
                "Menyampaikan saran, masukan, atau pertanyaan secara santun, beradab, dan konstruktif di dalam forum resmi maupun langsung kepada pengurus."
              ]
            },
            {
              "text": "Kewajiban & Adab Anggota:",
              "subItems": [
                "Menjaga kebersihan, ketertiban, dan fasilitas RKM.",
                "Memperhatikan Maklumat Resmi: Setiap informasi, laporan keuangan, dan maklumat yang telah ditempelkan di Papan Informasi (Mading) RKM dan/atau dipublikasikan di Portal Web Resmi dianggap telah disampaikan secara sah kepada seluruh warga. Warga wajib membaca dan melakukan tabayyun sebelum menyimpulkan sesuatu.",
                "Memelihara ukhuwah Islamiyah, kerukunan warga, serta mematuhi keputusan musyawarah yang telah ditetapkan secara sah.",
                "Menghindari ghibah, provokasi, penyebaran berita yang belum terkonfirmasi (tabayyun), atau tindakan yang memecah belah warga."
              ]
            }
          ]
        },
        {
          "number": "Pasal 2",
          "title": "Syarat Pengurus RKM",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 2 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Beragama Islam, berakhlak mulia, dan menjaga shalat lima waktu."
            },
            {
              "text": "Jujur (shiddiq), dapat dipercaya (amanah), komunikatif (tabligh), dan memiliki kecakapan (fathanah) sesuai bidang tugasnya."
            },
            {
              "text": "Berkomitmen memegang teguh 3 Pilar Nilai Dasar (Murni, Mandiri, Tumbuh Berkelanjutan)."
            },
            {
              "text": "Tidak menggunakan jabatan RKM untuk kepentingan politik praktis atau keuntungan pribadi."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-ii",
      "part": "ART",
      "babNumber": "BAB II",
      "title": "Tugas Pokok dan Wewenang Pengurus",
      "summary": "Peran Pendiri dan Majelis Syura, tupoksi Ketua, Sekretaris, Bendahara, dan Seksi-Seksi, serta disiplin koordinasi.",
      "pasals": [
        {
          "number": "Pasal 3",
          "title": "Pendiri dan Majelis Syura",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 20)",
          "items": [
            {
              "text": "Pendiri berperan menjaga maksud dan tujuan awal pembentukan RKM."
            },
            {
              "text": "Majelis Syura memberikan nasihat dan pertimbangan kepada pengurus dalam menjalankan organisasi."
            },
            {
              "text": "Majelis Syura melakukan pengawasan terhadap pelaksanaan kebijakan organisasi."
            },
            {
              "text": "Majelis Syura memberikan pertimbangan apabila terdapat persoalan yang menyangkut pelanggaran AD/ART."
            },
            {
              "text": "Majelis Syura membantu menyelesaikan perselisihan melalui tabayyun dan musyawarah."
            },
            {
              "text": "Setiap pelaksanaan kewenangan tetap berpedoman pada AD/ART."
            }
          ]
        },
        {
          "number": "Pasal 4",
          "title": "Ketua RKM",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 3 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Memimpin, mengoordinasikan, dan mengendalikan seluruh kebijakan strategis serta kegiatan RKM."
            },
            {
              "text": "Menetapkan visi dan tahapan prioritas program, serta mengesahkan pengangkatan/pergantian pengurus seksi."
            },
            {
              "text": "Memberikan persetujuan atas penyelenggaraan musyawarah resmi dan pengeluaran dana strategis."
            },
            {
              "text": "Mengingat kesibukan kerja profesional Ketua RKM, pelaksanaan teknis harian di lapangan didelegasikan kepada Sekretaris dan seksi-seksi sesuai porsi tanggung jawab masing-masing dengan tetap berada dalam garis koordinasi Ketua RKM."
            },
            {
              "text": "Keabsahan Koordinasi Daring/Virtual: Mengingat seluruh pengurus RKM mengabdi secara sukarela tanpa gaji (non-profit) dan memiliki kewajiban mencari nafkah bagi keluarganya, maka koordinasi, arahan kebijakan, maupun rapat yang dilakukan secara daring/virtual (melalui WhatsApp, telepon, atau dokumen digital) memiliki kekuatan hukum yang sama sahnya dengan kehadiran fisik."
            },
            {
              "text": "Bertanggung jawab terhadap pelaksanaan program organisasi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf A butir 2"
            },
            {
              "text": "Mengawasi pelaksanaan tugas seluruh pengurus dan seksi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf A butir 3"
            },
            {
              "text": "Mewakili organisasi dalam hubungan dengan pihak lain.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf A butir 4"
            },
            {
              "text": "Mengambil keputusan administratif sesuai kewenangan dan hasil musyawarah.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf A butir 5"
            },
            {
              "text": "Menjaga agar organisasi berjalan sesuai dengan tujuan pendirian, syariat Islam, dan AD/ART.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf A butir 6"
            }
          ]
        },
        {
          "number": "Pasal 5",
          "title": "Sekretaris RKM",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 4 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Disiplin Koordinasi",
          "items": [
            {
              "text": "Menjalankan administrasi kesekretariatan, surat-menyurat, arsip, serta pengumuman/maklumat resmi kepada warga."
            },
            {
              "text": "Kewajiban Penyampaian Informasi: Sekretaris wajib meneruskan secara utuh, akurat, dan tepat waktu setiap penjelasan, skema pendanaan, dan arahan kebijakan dari Ketua RKM kepada pengurus lain serta warga agar tidak terjadi kesalahpahaman (miskomunikasi)."
            },
            {
              "text": "Kepatuhan Koordinasi: Sekretaris dilarang menginisiasi atau memaksakan penyelenggaraan musyawarah warga tanpa persetujuan Ketua RKM, terlebih apabila Ketua RKM telah menginstruksikan penundaan demi menjaga kondusivitas dan meredam potensi konflik warga."
            },
            {
              "text": "Mencatat notulensi setiap musyawarah resmi dan mempublikasikan hasilnya di papan informasi (mading) RKM."
            },
            {
              "text": "Membuat dan menyimpan berita acara serta notulen musyawarah.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf B butir 2"
            },
            {
              "text": "Menyusun laporan kegiatan bersama ketua.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf B butir 4"
            },
            {
              "text": "Membantu kelancaran administrasi kepengurusan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf B butir 5"
            }
          ]
        },
        {
          "number": "Pasal 6",
          "title": "Bendahara RKM",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 5 (disesuaikan untuk RKM; pemisahan pos dana masjid/UPZ/Baitul Mal dihapus)",
          "items": [
            {
              "text": "Menerima, menyimpan, membukukan, dan mengeluarkan dana kas RKM atas sepengetahuan dan persetujuan Ketua RKM."
            },
            {
              "text": "Menyusun laporan keuangan berkala (bulanan/tahunan)."
            },
            {
              "text": "Mempublikasikan laporan posisi saldo, pemasukan, dan pengeluaran secara rutin di papan informasi (mading) RKM dan menyerahkan datanya untuk diperbarui di portal digital."
            },
            {
              "text": "Bersama pengurus RKM bersedia menunjukkan uang fisik disaat ada warga yang meminta, tanpa merasa tersinggung, karena mengetahui keamanan keuangan adalah hak bagi setiap warga."
            },
            {
              "text": "Mencatat seluruh transaksi keuangan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf C butir 2"
            },
            {
              "text": "Menyimpan bukti penerimaan dan pengeluaran.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf C butir 3"
            },
            {
              "text": "Menjaga keamanan dan keterbukaan keuangan organisasi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf C butir 5"
            },
            {
              "text": "Melaporkan kondisi keuangan kepada ketua dan forum musyawarah.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf C butir 6"
            }
          ]
        },
        {
          "number": "Pasal 7",
          "title": "Pelayanan Jenazah dan Perlindungan Inventaris",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 7–8 (bidang-bidang DKM), hanya butir yang berlaku untuk RKM",
          "items": [
            {
              "text": "Pelayanan Jenazah: RKM mengelola perlengkapan pemulasaraan jenazah (keranda, kain kafan, pemandian, liang lahat) dan mengoordinasikan fardhu kifayah saat ada warga yang wafat.",
              "source": "Naskah dasar: AD/ART lama, ART Pasal 8 ayat (1); klausul 'pelaporan yang terintegrasi di bawah DKM' dihapus"
            },
            {
              "text": "Perlindungan Inventaris RKM: Seluruh inventaris RKM (keranda, kain kafan, alat pemandian, dan perlengkapan lainnya) adalah harta wakaf/umat yang wajib dicatat, dirawat, dan dilarang dibawa pulang atau digunakan untuk kepentingan pribadi tanpa izin resmi pengurus.",
              "source": "Naskah dasar: AD/ART lama, ART Pasal 7 ayat (5); daftar inventaris masjid diganti inventaris RKM yang tercatat (keranda, kain kafan, alat pemandian)"
            }
          ]
        },
        {
          "number": "Pasal 8",
          "title": "Tugas Seksi-Seksi Pelaksana",
          "style": "bagian",
          "source": "Tambahan dari usulan Pak Badar (Pasal 21 huruf D–G); menggantikan tugas bidang-bidang DKM (ART Pasal 6–8 lama)",
          "items": [
            {
              "label": "A.",
              "text": "SEKSI PEMAKAMAN",
              "subItems": [
                "Mengoordinasikan persiapan tempat pemakaman.",
                "Membantu pelaksanaan proses pemakaman.",
                "Menjaga ketertiban dan kelayakan area pemakaman.",
                "Mengoordinasikan kebutuhan petugas pemakaman.",
                "Melaporkan kebutuhan dan kondisi TPU kepada ketua."
              ],
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf D"
            },
            {
              "label": "B.",
              "text": "SEKSI PENGURUSAN JENAZAH PEREMPUAN",
              "subItems": [
                "Membantu pelaksanaan pengurusan jenazah perempuan.",
                "Mengoordinasikan petugas yang diperlukan.",
                "Membantu penyediaan perlengkapan pengurusan jenazah.",
                "Melaksanakan tugas berdasarkan tuntunan syariat Islam.",
                "Menjaga kehormatan dan privasi jenazah serta keluarga yang berduka."
              ],
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf E"
            },
            {
              "label": "C.",
              "text": "SEKSI PERLENGKAPAN",
              "subItems": [
                "Mengelola perlengkapan milik organisasi.",
                "Melakukan pencatatan seluruh inventaris.",
                "Menjaga dan memelihara perlengkapan.",
                "Mengoordinasikan relawan masyarakat.",
                "Melaporkan kebutuhan perlengkapan kepada ketua."
              ],
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf F"
            },
            {
              "label": "D.",
              "text": "SEKSI PENGGALANGAN DANA",
              "subItems": [
                "Membantu pengumpulan dana berdasarkan keputusan dan kesepakatan organisasi.",
                "Melaksanakan koordinasi penggalangan dana pada masing-masing RT.",
                "Menyerahkan seluruh hasil penerimaan kepada bendahara.",
                "Menyampaikan laporan pengumpulan dana.",
                "Menjaga keterbukaan dan kejelasan sumber penerimaan."
              ],
              "source": "Tambahan dari usulan Pak Badar, Pasal 21 huruf G"
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-iii",
      "part": "ART",
      "babNumber": "BAB III",
      "title": "Masa Jabatan, Penyelesaian Pelanggaran Etika, dan Pergantian Pengurus",
      "summary": "Periode khidmat 10 tahun, pergantian terhormat, musyawarah etik (anti-tradisi barbar), larangan, sanksi, dan penyelesaian perselisihan.",
      "pasals": [
        {
          "number": "Pasal 9",
          "title": "Masa Jabatan & Kewajiban Estafet Program",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 9 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Masa khidmat kepengurusan RKM adalah 10 (sepuluh) tahun untuk satu periode dan dapat dipilih kembali melalui musyawarah.",
              "source": "Masa 10 tahun sesuai keputusan Ketua RKM, 13 Nov 2026"
            },
            {
              "text": "Selama masa bakti, ketua dan pengurus menjalankan amanah kepengurusan secara berkelanjutan sepanjang masih mampu melaksanakan tugas dan tanggung jawabnya dengan baik serta menaati syariat Islam dan ketentuan organisasi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 22 ayat (2)"
            },
            {
              "text": "Pengurus melaksanakan amanah secara sukarela (tathawwu') sebagai amal shalih."
            },
            {
              "text": "Siapa pun pengurus yang terpilih pada periode baru wajib menjaga kesinambungan dan melanjutkan program kerja jangka panjang yang telah dirintis oleh kepengurusan sebelumnya."
            }
          ]
        },
        {
          "number": "Pasal 10",
          "title": "Berakhirnya Jabatan dan Pergantian Terhormat",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 10 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Perlindungan Marwah",
          "items": [
            {
              "text": "Jabatan pengurus berakhir karena: (a) Habis masa periode kepengurusan; (b) Mengundurkan diri atas permintaan sendiri; (c) Meninggal dunia atau berhalangan tetap; atau (d) Diberhentikan melalui mekanisme organisasi yang sah karena melanggar syariat atau AD/ART secara berat."
            },
            {
              "text": "Perlindungan Marwah & Larangan Kudeta Sepihak: Evaluasi atau pergantian Ketua RKM maupun pengurus HANYA dapat dilakukan melalui Musyawarah Resmi yang dijadwalkan secara terbuka, diberitahukan sekurang-kurangnya 7 (tujuh) hari sebelumnya, dihadiri oleh pihak yang bersangkutan untuk memberikan penjelasan (hak jawab), serta dilaksanakan secara adil dan terhormat."
            },
            {
              "text": "Setiap upaya penggulingan, penyidangan sepihak, atau pemaksaan pergantian pengurus melalui rapat mendadak tanpa kehadiran dan persetujuan yang bersangkutan adalah BATAL DEMI HUKUM ORGANISASI dan merupakan pelanggaran berat terhadap adab berorganisasi."
            },
            {
              "text": "Kebebasan Menerima Amanah Generasi Berikutnya: Jabatan di dalam RKM adalah amanah sukarela dan tidak boleh dipaksakan kepada siapapun (termasuk keluarga atau keturunan pengurus sebelumnya) apabila penunjukan tersebut tidak disertai dukungan ikhlas dan jaminan tata krama musyawarah yang sehat dari warga."
            },
            {
              "text": "Masa Transisi & Mekanisme Pengunduran Diri yang Manusiawi: Apabila seorang pengurus terbukti melakukan kesalahan fatal yang mengharuskan pergantian kepengurusan, proses pergantian wajib dilakukan secara manusiawi dan beradab melalui pemberian masa tenggang/transisi (1 hingga 3 bulan). Pengurus yang bersangkutan diberikan kesempatan untuk menyelesaikan laporan pertanggungjawaban serta mengundurkan diri atas kesadaran sendiri secara terhormat, guna menghindari stigma pengusiran sepihak dan menjaga keharmonisan sosial warga."
            },
            {
              "text": "Pemberhentian sebagaimana dimaksud pada ayat (1) huruf (d) harus didasarkan pada bukti dan pertimbangan yang dapat dipertanggungjawabkan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 22 ayat (5); rujukan 'ayat (3) dan ayat (4)' disesuaikan ke ayat (1) huruf (d)"
            },
            {
              "text": "Keputusan pemberhentian ditetapkan melalui musyawarah yang sah dengan melibatkan unsur pengurus, Majelis Syura, dan perwakilan masyarakat sesuai mekanisme organisasi.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 22 ayat (7)"
            },
            {
              "text": "Pergantian ketua atau pengurus dilakukan melalui musyawarah dan ditetapkan dalam berita acara pergantian kepengurusan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 22 ayat (8)"
            },
            {
              "text": "Seluruh proses pemberhentian dan pergantian pengurus wajib mengedepankan prinsip amanah, keadilan, tabayyun, musyawarah, dan kemaslahatan bersama.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 22 ayat (9)"
            }
          ]
        },
        {
          "number": "Pasal 11",
          "title": "Penyelesaian Pelanggaran Etika Pengurus & Peniadaan Tradisi Barbar",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 11 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Mediasi & Keadilan",
          "items": [
            {
              "text": "Larangan Tradisi Barbar, Komplotan, & Main Hakim Sendiri: Apabila terdapat seorang pengurus RKM yang melakukan kekhilafan individu, seperti melontarkan bahasa atau ucapan yang dinilai kurang etis bagi warga, maka dilarang keras melakukan penghakiman massa, penggalangan komplotan, penghasutan, petisi liar, keributan sepihak, intimidasi, demonstrasi/gerudukan, atau tradisi barbar di lingkungan kampung."
            },
            {
              "text": "Wajib Melalui Musyawarah Resmi yang Dihadiri MUI: Tata cara menyikapi atau mengadili dugaan pelanggaran etika pengurus WAJIB ditempuh melalui forum Musyawarah Resmi yang tertib dan WAJIB dihadiri oleh perwakilan Majelis Ulama Indonesia (MUI) setempat sebagai penengah (mediator) serta pemberi pertimbangan hukum syar'i yang netral dan objektif. [belum dikonfirmasi: kewajiban kehadiran perwakilan MUI setempat berasal dari AD/ART DKM; perlu diputuskan apakah tetap berlaku untuk RKM, karena usulan Pak Badar (Pasal 14 ayat (7)) menyerahkan pertimbangan kepada tokoh agama, tokoh masyarakat, atau pihak lain yang disepakati bersama]"
            },
            {
              "text": "Sanksi Proporsional & Tolok Ukur Kesalahan (Bukan Pidana Fatal = Tidak Boleh Diturunkan): Pengurus yang terbukti melakukan kekhilafan lisan atau etika TIDAK SERTA-MERTA DIBERHENTIKAN dari jabatannya, melainkan dipertimbangkan secara adil dan bijaksana berdasarkan bobot kesalahan individu tersebut:",
              "subItems": [
                "Kekhilafan Lisan / Etika Ringan: Diselesaikan melalui tabayyun, nasihat/teguran kekeluargaan, permohonan maaf terbuka, dan ishlah (perdamaian) yang disaksikan oleh MUI.",
                "Pelanggaran Sedang / Berulang: Diberikan teguran tertulis dan pembinaan adab di bawah bimbingan Majelis Syura (Dewan Penasehat) serta MUI.",
                "Pelanggaran Administratif & Perdata Ringan: Tidak dapat dijadikan alasan untuk menurunkan pengurus dari jabatannya, melainkan diselesaikan secara musyawarah dan pemulihan keadaan.",
                "Pelanggaran Fatal (Pidana Terbukti / Penggelapan Kas / Khianat Syariat Berat): Dipertimbangkan sanksi pengunduran diri secara terhormat melalui masa transisi beradab atas rekomendasi MUI dalam Musyawarah Resmi."
              ]
            },
            {
              "text": "Pertanggungjawaban Bersifat Individual: Kekhilafan seorang pengurus merupakan tanggung jawab pribadi individu yang bersangkutan dan tidak dapat dijadikan alasan untuk merombak atau menjatuhkan kepengurusan RKM secara keseluruhan."
            },
            {
              "text": "Penanganan Persoalan 100% Baru & Jaminan Perlindungan Marwah: Apabila ditemukan persoalan yang 100% baru dan belum pernah terjadi sebelumnya, maka pengurus RKM atau warga berhak meminta diadakannya Musyawarah Resmi untuk membahas kasus tersebut secara jernih dan mencarikan solusi yang tidak merugikan satu sama lain, dengan ketentuan:",
              "subItems": [
                "Tetap melindungi marwah dan kehormatan masing-masing individu agar tidak menjadi faktor yang membebani warga yang berkeinginan menjadi anggota atau pengurus RKM karena hak harga dirinya dilindungi oleh AD/ART ini.",
                "Apabila sanksi diperlukan, maka sanksi ditentukan secara proporsional sesuai tingkat kesalahan; misalnya jika kesalahan tersebut bukan merupakan tindak korupsi/penggelapan kas, maka sanksinya cukup berbentuk Surat Peringatan (SP) saja."
              ]
            }
          ]
        },
        {
          "number": "Pasal 12",
          "title": "Larangan bagi Pengurus",
          "style": "huruf",
          "source": "Tambahan dari usulan Pak Badar (Pasal 29)",
          "intro": "Setiap pengurus dilarang:",
          "items": [
            {
              "text": "Menyalahgunakan jabatan dan kewenangan."
            },
            {
              "text": "Menggunakan dana organisasi untuk kepentingan pribadi."
            },
            {
              "text": "Melakukan tindakan yang bertentangan dengan syariat Islam dan tujuan organisasi."
            },
            {
              "text": "Membuat laporan keuangan atau administrasi yang tidak benar."
            },
            {
              "text": "Mengambil keputusan strategis secara sepihak tanpa kewenangan."
            },
            {
              "text": "Menguasai atau mengalihkan aset organisasi tanpa persetujuan yang sah."
            },
            {
              "text": "Melakukan tindakan yang merugikan organisasi dan masyarakat."
            }
          ]
        },
        {
          "number": "Pasal 13",
          "title": "Sanksi Organisasi",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 30)",
          "items": [
            {
              "text": "Pengurus yang melakukan pelanggaran terhadap AD/ART dapat dikenakan teguran lisan."
            },
            {
              "text": "Apabila pelanggaran berlanjut, dapat diberikan teguran tertulis."
            },
            {
              "text": "Terhadap pelanggaran berat dapat dilakukan pemberhentian melalui mekanisme Pasal 10. [belum dikonfirmasi: rujukan 'Pasal 22' pada usulan Pak Badar disesuaikan ke Pasal 10; naskah dasar (Pasal 11 ayat (3)) mengatur pelanggaran fatal melalui pengunduran diri secara terhormat dengan masa transisi, sedangkan usulan Pak Badar menyebut pemberhentian; perlu dipastikan mana yang berlaku]"
            },
            {
              "text": "Penetapan sanksi wajib mempertimbangkan jenis pelanggaran, bukti, klarifikasi, dan tingkat tanggung jawab pihak yang bersangkutan."
            },
            {
              "text": "Pemberian sanksi harus mengutamakan keadilan dan tidak boleh dilakukan secara sewenang-wenang."
            }
          ]
        },
        {
          "number": "Pasal 14",
          "title": "Penyelesaian Perselisihan",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 31)",
          "items": [
            {
              "text": "Setiap perselisihan internal organisasi wajib diselesaikan terlebih dahulu melalui tabayyun dan musyawarah."
            },
            {
              "text": "Setiap pihak diberikan kesempatan yang sama untuk menyampaikan pendapat dan bukti."
            },
            {
              "text": "Penyelesaian perselisihan mengutamakan persaudaraan, keadilan, dan kemaslahatan bersama."
            },
            {
              "text": "Tidak diperkenankan mengambil keputusan sepihak dengan mengatasnamakan organisasi tanpa kewenangan yang sah."
            },
            {
              "text": "Setiap pihak wajib menyampaikan keterangan secara jujur dan, apabila mengajukan tuduhan atau usulan yang menjadi dasar keputusan, menyertakan bukti atau dasar yang dapat diperiksa."
            },
            {
              "text": "Usulan atau tuntutan yang tidak disertai bukti atau dasar yang memadai tidak dapat dijadikan landasan keputusan. Usulan yang bertentangan dengan syariat Islam atau nyata-nyata mendatangkan mafsadat, kerusakan, maupun kerugian bagi organisasi dan masyarakat dinyatakan tertolak."
            },
            {
              "text": "Apabila musyawarah internal tidak menghasilkan penyelesaian, persoalan dapat dimintakan pertimbangan kepada tokoh agama, tokoh masyarakat, atau pihak lain yang disepakati bersama."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-iv",
      "part": "ART",
      "babNumber": "BAB IV",
      "title": "Tata Tertib Musyawarah Beradab",
      "summary": "Prosedur undangan H-3, urutan acara baku, serta larangan keras menyerang pribadi (ad hominem) dan intimidasi.",
      "pasals": [
        {
          "number": "Pasal 15",
          "title": "Prosedur Penyelenggaraan & Mengikatnya Keputusan Musyawarah",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 12 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "SOP Musyawarah",
          "items": [
            {
              "text": "Undangan & Agenda Tertulis: Undangan musyawarah wajib disampaikan minimal 3 (tiga) hari sebelum pelaksanaan (kecuali keadaan darurat bencana/kematian) dengan mencantumkan daftar agenda dan alokasi waktu yang jelas."
            },
            {
              "text": "Struktur Acara Musyawarah: Setiap musyawarah wajib dipimpin oleh pimpinan rapat/moderator yang menjaga ketertiban acara dengan urutan baku:",
              "subItems": [
                "1. Pembukaan dan pembacaan ayat suci Al-Qur'an / doa awal majelis;",
                "2. Pembacaan tata tertib dan susunan agenda beserta batas waktu masing-masing sesi;",
                "3. Pemaparan materi/laporan oleh Ketua RKM atau pengurus terkait tanpa interupsi sebelum sesi pemaparan selesai;",
                "4. Sesi tanya jawab dan diskusi solusi yang terarah pada pokok bahasan;",
                "5. Pengambilan kesimpulan / mufakat yang dicatat secara tertulis beserta tindak lanjutnya;",
                "6. Doa penutup (kafaratul majelis) dan mushafahah (bersalam-salaman)."
              ]
            },
            {
              "text": "Konsekuensi Ketidakhadiran (Absen = Menerima Keputusan): Warga atau pengurus yang telah diundang secara sah pada Musyawarah Resmi (termasuk Musyawarah Tahunan Ramadhan) namun memilih tidak hadir tanpa alasan syar'i, dianggap menyetujui dan wajib tunduk pada seluruh keputusan yang diambil dalam musyawarah tersebut, serta tidak berhak menggugat atau membuat forum tandingan di luar musyawarah."
            }
          ]
        },
        {
          "number": "Pasal 16",
          "title": "Larangan di Dalam Musyawarah",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 13 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Adab Majelis",
          "items": [
            {
              "text": "Membahas urusan pribadi atau menyerang kehormatan personal (ad hominem) pengurus maupun warga di luar agenda kerja organisasi."
            },
            {
              "text": "Berbicara dengan nada tinggi, mencaci maki, menghina, mengintimidasi, atau memotong pembicaraan sebelum diberikan izin oleh pimpinan musyawarah."
            },
            {
              "text": "Mengubah forum musyawarah menjadi ajang pencarian kesalahan atau pengadilan sepihak terhadap pengurus yang telah bekerja secara sukarela."
            },
            {
              "text": "Apabila seorang peserta melanggar ketentuan di atas dan telah diperingatkan sebanyak 2 (dua) kali oleh pimpinan musyawarah namun tetap tidak mengindahkan, pimpinan musyawarah berhak mencabut hak bicara peserta tersebut atau menutup/menunda jalannya musyawarah demi menjaga kehormatan majelis."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-v",
      "part": "ART",
      "babNumber": "BAB V",
      "title": "Pedoman Program Jangka Panjang dan Kode Etik Pendanaan",
      "summary": "Kewajiban melanjutkan program jangka panjang lintas pengurus dengan evaluasi konstruktif berbasis data, dan kode etik penghimpunan dana.",
      "pasals": [
        {
          "number": "Pasal 17",
          "title": "Kewajiban Melanjutkan Program Jangka Panjang & Sistem Evaluasi Konstruktif",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 14 (disesuaikan untuk RKM)",
          "highlight": true,
          "badge": "Estafet & Evaluasi Objektif",
          "items": [
            {
              "text": "Siapa pun yang menjabat sebagai Pengurus RKM wajib melanjutkan program kerja jangka panjang yang telah ditetapkan.",
              "source": "Rumusan ulang untuk RKM, keputusan Ketua RKM, 4 Nov 2026"
            },
            {
              "text": "Lingkup Program Jangka Panjang yang Wajib Dilanjutkan:",
              "subItems": [
                "Program Layanan Sosial & Keumatan: Pengelolaan kas satu pintu, pelayanan jenazah, dan pengelolaan Taman Pemakaman Umum (TPU). [belum dikonfirmasi: daftar program kerja jangka panjang RKM belum ditetapkan; butir program kajian/TPA dan pembangunan masjid dihapus, pengelolaan TPU ditambahkan dari usulan Pak Badar]"
              ]
            },
            {
              "text": "Sistem Evaluasi dan Perbaikan yang Objektif, Konstruktif, dan Berdasar: Agar pelaksanaan program jangka panjang tetap objektif dan relevan, setiap penyesuaian atau penyempurnaan program wajib melalui mekanisme evaluasi berkala yang memenuhi prinsip:",
              "subItems": [
                "Konstruktif (Membangun): Evaluasi bertujuan mencari solusi perbaikan dan meningkatkan efektivitas program, bukan mencari-cari kesalahan pengurus sebelumnya atau menyerang kehormatan pribadi.",
                "Berdasar Data & Fakta (Evidence-Based): Setiap usulan perbaikan wajib memiliki landasan yang jelas, terukur, dan berbasis data nyata di lapangan (laporan keuangan, rekap realisasi tugas, atau kajian teknis), bukan berdasarkan asumsi sepihak atau sentimen subjektif.",
                "Terdokumentasi & Mufakat: Hasil evaluasi dan tindak lanjut perbaikan disepakati dalam musyawarah resmi serta dicatat secara terbuka sebagai pedoman bersama."
              ]
            }
          ]
        },
        {
          "number": "Pasal 18",
          "title": "Kode Etik Penghimpunan Dana",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 16 (disesuaikan untuk RKM; 'panitia pembangunan', batas minimal infaq PHBI, dan QRIS masjid dihapus)",
          "items": [
            {
              "text": "Penghimpunan dana RKM wajib menjaga kemuliaan Islam dan harga diri warga Kp. Sukatani."
            },
            {
              "text": "Larangan Mutlak: Pengurus maupun perwakilan penggalangan dana di setiap RT dilarang:",
              "subItems": [
                "Meminta-minta sumbangan di pinggir jalan raya dengan jaring/kotak (nyapir);",
                "Mengajukan atau menerima bantuan yang disertai syarat dukungan politik praktis/suara pemilu;",
                "Menetapkan pungutan wajib dengan nominal paksaan yang memberatkan warga kurang mampu. [belum dikonfirmasi: iuran anggota Rp 4.000 per bulan (Pasal 20 ayat (7)) adalah iuran keanggotaan yang ditetapkan; perlu dipastikan bahwa iuran ini tidak dianggap pungutan paksa, termasuk perlakuan bagi anggota yang kurang mampu]"
              ]
            },
            {
              "text": "Seluruh konfirmasi iuran, wakaf, dan infaq digital diarahkan ke rekening resmi yang digunakan RKM sebagaimana dimaksud dalam AD Pasal 22 ayat (3) dan (4)."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-vi",
      "part": "ART",
      "babNumber": "BAB VI",
      "title": "Pengelolaan Administrasi dan Keuangan",
      "summary": "Administrasi organisasi, pengelolaan keuangan (termasuk besaran iuran dan santunan), dan rekening organisasi.",
      "pasals": [
        {
          "number": "Pasal 19",
          "title": "Administrasi Organisasi",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 23)",
          "items": [
            {
              "text": "Organisasi wajib memiliki administrasi yang tertib dan teratur."
            },
            {
              "text": "Administrasi meliputi surat-menyurat, daftar anggota, berita acara, laporan kegiatan, dokumen keuangan, serta dokumen inventaris."
            },
            {
              "text": "Seluruh dokumen organisasi disimpan oleh sekretaris."
            },
            {
              "text": "Dokumen penting organisasi harus dijaga agar tidak hilang, rusak, atau disalahgunakan."
            }
          ]
        },
        {
          "number": "Pasal 20",
          "title": "Pengelolaan Keuangan",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 24)",
          "items": [
            {
              "text": "Seluruh penerimaan dan pengeluaran dana wajib dicatat oleh bendahara."
            },
            {
              "text": "Setiap penggunaan dana harus memiliki tujuan yang jelas."
            },
            {
              "text": "Pengeluaran dana organisasi harus diketahui dan disetujui sesuai kewenangan pengurus."
            },
            {
              "text": "Penggunaan dana dalam jumlah atau kepentingan strategis harus memperoleh persetujuan melalui musyawarah."
            },
            {
              "text": "Bendahara wajib menyampaikan laporan keuangan secara berkala."
            },
            {
              "text": "Anggota dan masyarakat berhak memperoleh informasi mengenai pengelolaan keuangan sesuai mekanisme organisasi."
            },
            {
              "text": "Iuran anggota ditetapkan sebesar Rp 4.000 per anggota per bulan, dan iuran pendatang (non-anggota) ditetapkan sebesar Rp 600.000.",
              "source": "Nominal sesuai keputusan Ketua RKM, 3 Nov 2026"
            },
            {
              "text": "RKM memberikan santunan kematian sebesar Rp 600.000 kepada keluarga setiap anggota yang meninggal dunia, yang diserahkan melalui perwakilan RKM di RT masing-masing.",
              "source": "Nominal dan cara penyerahan sesuai keputusan Ketua RKM, 3 Nov 2026"
            }
          ]
        },
        {
          "number": "Pasal 21",
          "title": "Rekening Organisasi",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 25)",
          "items": [
            {
              "text": "RKM dapat memiliki rekening bank atas nama organisasi."
            },
            {
              "text": "Pembukaan rekening dilakukan berdasarkan keputusan organisasi dan memenuhi ketentuan perbankan."
            },
            {
              "text": "Pengelolaan rekening dilakukan oleh pihak yang diberi kewenangan melalui keputusan organisasi."
            },
            {
              "text": "Setiap transaksi melalui rekening organisasi wajib dicatat dan dapat dipertanggungjawabkan."
            },
            {
              "text": "Pergantian pengurus yang berwenang mengelola rekening wajib diikuti dengan penyesuaian administrasi perbankan sesuai ketentuan bank."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-vii",
      "part": "ART",
      "babNumber": "BAB VII",
      "title": "Pengelolaan Taman Pemakaman Umum",
      "summary": "Pengelolaan, pemeliharaan, dan penggunaan TPU, termasuk penguburan anggota dari luar wilayah dan non-anggota.",
      "pasals": [
        {
          "number": "Pasal 22",
          "title": "Pengelolaan Taman Pemakaman Umum",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 26)",
          "items": [
            {
              "text": "Pengelolaan TPU dilaksanakan untuk kepentingan masyarakat sesuai tujuan organisasi."
            },
            {
              "text": "Pengurus bertanggung jawab mengoordinasikan pemeliharaan dan ketertiban area pemakaman."
            },
            {
              "text": "Pengelolaan TPU meliputi kebersihan, pemeliharaan, penataan, dan kebutuhan fasilitas pemakaman."
            },
            {
              "text": "Setiap penggunaan dan pengelolaan fasilitas TPU harus memperhatikan kepentingan umum."
            },
            {
              "text": "Penguburan jenazah anggota RKM yang berasal dari luar wilayah Kampung Sukatani RW 03 dapat dilaksanakan di TPU sepanjang tersedia tempat, mendapat persetujuan pengelola sesuai prosedur, serta tidak bertentangan dengan syariat Islam dan ketentuan hukum yang berlaku. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 23 ayat (5); dipertahankan, tidak digabung]"
            },
            {
              "text": "Penguburan jenazah yang bukan anggota RKM atau [belum dikonfirmasi: maksud kata 'atau' perlu dikonfirmasi: apakah juga mencakup anggota RKM dari luar wilayah yang sudah diatur pada ayat (5); teks asli dipertahankan] berasal dari luar wilayah dapat dipertimbangkan berdasarkan keadaan, ketersediaan lahan, ketentuan organisasi, dan keputusan pengurus melalui musyawarah. Pelaksanaannya tidak boleh mengurangi hak anggota atau mengganggu ketertiban TPU."
            },
            {
              "text": "Pengambilan keputusan mengenai perubahan, pemanfaatan, atau pengembangan fasilitas TPU harus melalui musyawarah dan memperhatikan ketentuan hukum yang berlaku."
            },
            {
              "text": "Pengurus wajib menjaga agar pengelolaan TPU tidak menimbulkan perselisihan dan merugikan masyarakat."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-viii",
      "part": "ART",
      "babNumber": "BAB VIII",
      "title": "Pelayanan Kematian",
      "summary": "Pelayanan kematian bagi anggota dan non-anggota, pembagian tugas pemandian jenazah, dan biaya pemakaman.",
      "pasals": [
        {
          "number": "Pasal 23",
          "title": "Pelayanan Kematian",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 27)",
          "items": [
            {
              "text": "Pelayanan kematian diberikan kepada seluruh anggota RKM, baik yang berdomisili di Kampung Sukatani RW 03 maupun yang berasal dari luar wilayah, sesuai hak dan ketentuan organisasi."
            },
            {
              "text": "Pengurus wajib memberikan pelayanan secara adil dan tidak diskriminatif."
            },
            {
              "text": "Pelaksanaan pengurusan jenazah dilakukan berdasarkan tuntunan syariat Islam."
            },
            {
              "text": "Pengurus mengoordinasikan kebutuhan pelayanan sejak adanya laporan kematian sampai dengan proses pemakaman."
            },
            {
              "text": "Jenazah anggota yang berasal dari luar wilayah dapat dimakamkan di TPU RKM sepanjang memenuhi ketentuan penggunaan TPU, tersedia tempat, dan pelaksanaannya tidak bertentangan dengan syariat Islam serta peraturan yang berlaku. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 22 ayat (5); dipertahankan, tidak digabung]"
            },
            {
              "text": "Pelayanan bagi orang yang bukan anggota dapat diberikan berdasarkan pertimbangan kemanusiaan, kemampuan organisasi, ketersediaan fasilitas, dan keputusan pengurus sesuai mekanisme organisasi."
            },
            {
              "text": "Setiap pelayanan dilaksanakan dengan mengutamakan kepentingan dan kemudahan keluarga yang berduka."
            },
            {
              "text": "Ketentuan teknis pelayanan dapat disempurnakan berdasarkan hasil musyawarah."
            },
            {
              "text": "Jenazah perempuan dimandikan dan dikafani oleh Seksi Pengurusan Jenazah Perempuan, sedangkan jenazah laki-laki dimandikan dan dikafani oleh petugas laki-laki.",
              "source": "Keputusan Ketua RKM, 4 Nov 2026"
            },
            {
              "text": "Pemakaman anggota RKM di TPU tidak dipungut biaya, sedangkan non-anggota yang dimakamkan di TPU membayar iuran pendatang sebagaimana dimaksud dalam Pasal 20 ayat (7).",
              "source": "Keputusan Ketua RKM, 3 Nov 2026"
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-ix",
      "part": "ART",
      "babNumber": "BAB IX",
      "title": "Inventaris Organisasi",
      "summary": "Pencatatan, pemeliharaan, penggunaan, dan pengalihan inventaris RKM.",
      "pasals": [
        {
          "number": "Pasal 24",
          "title": "Inventaris Organisasi",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 28)",
          "items": [
            {
              "text": "Seluruh perlengkapan dan inventaris RKM wajib dicatat dalam administrasi organisasi."
            },
            {
              "text": "Pengurus yang bertanggung jawab atas inventaris wajib menjaga dan memeliharanya."
            },
            {
              "text": "Penggunaan inventaris harus sesuai dengan kepentingan organisasi."
            },
            {
              "text": "Kerusakan atau kehilangan inventaris wajib dilaporkan kepada ketua."
            },
            {
              "text": "Pengalihan, penjualan, atau penghapusan inventaris harus memperoleh persetujuan melalui mekanisme musyawarah."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-x",
      "part": "ART",
      "babNumber": "BAB X",
      "title": "Perubahan Anggaran Rumah Tangga",
      "summary": "Tata cara perubahan Anggaran Rumah Tangga.",
      "pasals": [
        {
          "number": "Pasal 25",
          "title": "Perubahan Anggaran Rumah Tangga",
          "style": "ayat",
          "source": "Tambahan dari usulan Pak Badar (Pasal 32)",
          "items": [
            {
              "text": "Perubahan Anggaran Rumah Tangga hanya dapat dilakukan melalui musyawarah organisasi yang sah. [belum dikonfirmasi: peserta dan kuorum musyawarah untuk perubahan Anggaran Rumah Tangga belum diatur; naskah dasar hanya menetapkan kuorum 2/3 untuk perubahan Anggaran Dasar (AD Pasal 24 ayat (1))]"
            },
            {
              "text": "Usulan perubahan harus disertai alasan yang jelas serta bukti atau dasar pertimbangan yang dapat dipertanggungjawabkan."
            },
            {
              "text": "Usulan yang tidak disertai bukti atau dasar yang memadai, atau yang bertentangan dengan syariat Islam maupun mendatangkan mafsadat dan kerusakan, ditolak dan tidak dapat ditetapkan."
            },
            {
              "text": "Perubahan ditetapkan berdasarkan kesepakatan musyawarah."
            },
            {
              "text": "Setiap perubahan wajib dicatat dalam berita acara dan menjadi bagian dari dokumen resmi organisasi."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-xi",
      "part": "ART",
      "babNumber": "BAB XI",
      "title": "Penutup",
      "summary": "Penanganan persoalan baru dengan perlindungan marwah individu dan mulai berlakunya AD/ART.",
      "pasals": [
        {
          "number": "Pasal 26",
          "title": "Ketentuan Penutup & Penanganan Persoalan Baru",
          "style": "ayat",
          "source": "Naskah dasar: AD/ART lama, ART Pasal 17 (disesuaikan untuk RKM)",
          "items": [
            {
              "text": "Hal-hal teknis operasional yang belum diatur secara rinci dalam Anggaran Rumah Tangga ini akan ditetapkan melalui Keputusan Pengurus RKM sepanjang tidak bertentangan dengan jiwa dan pasal-pasal AD/ART ini."
            },
            {
              "text": "Apabila terdapat persoalan yang 100% baru dan tidak pernah terjadi sebelumnya, pengurus RKM atau warga berhak meminta diadakan musyawarah resmi untuk membahas kasus tersebut dan mencarikan solusi yang tidak merugikan satu sama lain. Jika sanksi diperlukan, maka sanksi ditentukan sesuai tingkat kesalahan (misalnya jika tidak korupsi, sanksinya cukup berbentuk Surat Peringatan saja), dengan tetap melindungi marwah masing-masing individu agar warga tidak terbebani untuk menjadi anggota atau pengurus RKM."
            },
            {
              "text": "Anggaran Dasar dan Anggaran Rumah Tangga ini merupakan satu kesatuan yang tidak terpisahkan.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 33 ayat (1)"
            },
            {
              "text": "Seluruh pengurus dan anggota wajib menaati serta melaksanakan ketentuan yang tercantum di dalamnya.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 33 ayat (2)"
            },
            {
              "text": "Hal-hal yang belum diatur akan diselesaikan melalui musyawarah sepanjang tidak bertentangan dengan AD/ART, syariat Islam, dan ketentuan hukum yang berlaku.",
              "source": "Tambahan dari usulan Pak Badar, Pasal 33 ayat (3)"
            },
            {
              "text": "Anggaran Dasar dan Anggaran Rumah Tangga ini mulai berlaku sejak tanggal ditetapkan."
            }
          ]
        }
      ]
    }
  ],
  "susunan": {
    "note": "Disamakan dengan bagan struktur organisasi terbaru di situs (koreksi Ketua RKM, 3–4 November 2026).",
    "groups": [
      {
        "title": "A. MAJELIS SYURA",
        "members": [
          "Badar Rustandi",
          "Ugan Sugandi",
          "M. Bibin",
          "Ustadz Sholeh",
          "Ustadz Jarnudzi"
        ]
      },
      {
        "title": "B. KETUA",
        "members": [
          "Burhan Mubarok S.Kom"
        ]
      },
      {
        "title": "C. SEKRETARIS",
        "members": [
          "Angga Maulana"
        ]
      },
      {
        "title": "D. BENDAHARA",
        "members": [
          "Kholid Muhsin"
        ]
      },
      {
        "title": "E. SEKSI PEMAKAMAN",
        "members": [
          "M. Udu",
          "Ustadz Solehudin",
          "Ustadz Bibin",
          "Ustadz Basri",
          "Ustadz Enjar"
        ]
      },
      {
        "title": "F. SEKSI PENGURUSAN JENAZAH PEREMPUAN",
        "members": [
          "Engkom Komariyah",
          "Sumarsih",
          "Fajrin",
          "Odah",
          "Itoh",
          "Uyun"
        ]
      },
      {
        "title": "G. SEKSI PERLENGKAPAN",
        "members": [
          "Koordinator: Bpk. Dede Dzulkipli",
          "Anggota: Warga masyarakat yang bersedia menjadi relawan."
        ]
      },
      {
        "title": "H. SEKSI PENGGALANGAN DANA",
        "members": [
          "RT 01: Dian",
          "RT 02: Ip",
          "RT 03: Nana",
          "RT 04: Armat",
          "RT 05: Angga Maulana",
          "RT 06: Misbah"
        ]
      }
    ],
    "ketentuan": "Susunan kepengurusan dapat dilengkapi atau disempurnakan sesuai kebutuhan organisasi berdasarkan hasil musyawarah dan ketentuan AD/ART."
  },
  "pengesahan": {
    "paragraphs": [
      "Anggaran Dasar dan Anggaran Rumah Tangga Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 ini ditetapkan sebagai pedoman penyelenggaraan organisasi, pelaksanaan tugas kepengurusan, pengelolaan keuangan, pelayanan kematian, serta pengelolaan Taman Pemakaman Umum.",
      "Dokumen ini disusun dengan mengacu pada Berita Acara Pendirian dan Pembentukan Pengurus RKM Nomor: 001/RKM/VIII/2023 tanggal 4 Agustus 2023.",
      "Dengan ditetapkannya AD/ART ini, seluruh pengurus berkewajiban melaksanakan amanah dan tanggung jawab organisasi sesuai dengan ketentuan yang berlaku."
    ],
    "place": "Kampung Sukatani, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi",
    "date": "(menyusul) [belum dikonfirmasi: tanggal penetapan naskah gabungan belum ditentukan; usulan Pak Badar menulis 4 Agustus 2023 di Lembar Pengesahan dan 'TAHUN 2026' di sampul, sedangkan naskah dasar (AD/ART DKM) bertanggal 1 November 2026]",
    "signatureNote": "[belum dikonfirmasi: apakah Lembar Pengesahan perlu 'Mengetahui' Ketua RW 03 (Marni S) dan Kepala Desa Wangunsari (Joni Purnama) seperti pada Berita Acara No. 001/RKM/VIII/2023]"
  },
  "signatories": [
    {
      "role": "PENDIRI RKM",
      "name": "Badar Rustandi",
      "status": "Tanda tangan (menyusul)"
    },
    {
      "role": "KETUA RKM",
      "name": "Burhan Mubarok S.Kom",
      "status": "Tanda tangan (menyusul)"
    },
    {
      "role": "SEKRETARIS",
      "name": "Angga Maulana",
      "status": "Tanda tangan (menyusul)"
    },
    {
      "role": "BENDAHARA",
      "name": "Kholid Muhsin",
      "status": "Tanda tangan (menyusul)"
    }
  ],
  "penutup": [
    "Demikian Anggaran Dasar dan Anggaran Rumah Tangga Rukun Kematian Masyarakat (RKM) Kampung Sukatani RW 03 ini disusun sebagai pedoman dalam menjalankan organisasi dan melaksanakan seluruh kegiatan pelayanan kepada masyarakat.",
    "Setiap pengurus hendaknya senantiasa menjaga amanah, menjunjung tinggi nilai-nilai ajaran Islam, melaksanakan tugas dengan penuh tanggung jawab, serta mengutamakan kepentingan dan kemaslahatan masyarakat.",
    "Keberadaan RKM diharapkan dapat terus memberikan manfaat bagi masyarakat, menjaga persatuan, memperkuat kepedulian sosial, serta menjadi sarana pengabdian dan amal kebaikan.",
    "Semoga Allah SWT senantiasa memberikan petunjuk, kekuatan, dan keberkahan kepada seluruh pihak yang mengabdikan diri dalam penyelenggaraan organisasi ini."
  ]
};
