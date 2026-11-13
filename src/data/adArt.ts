// AD/ART Rukun Kematian Masyarakat (RKM) & Pengelolaan TPU Kampung Sukatani RW 03.
// Sumber: "AD ART RKM KP.SUKATANI 2023.pdf" (Pak Badar Rustandi). DRAF terkoreksi, menunggu konfirmasi Pak Badar.
// Teks dipertahankan; perbaikan & penanda "[belum dikonfirmasi: ...]" dicatat di /workspace/rkm-plans/adart-rkm-terkoreksi.md.
// Dihasilkan dari satu sumber (rkm-plans/gen/adart_rkm.py) agar sama persis dengan naskah .md.

export type AdArtItemStyle = "plain" | "ayat" | "huruf" | "bagian";

export interface AdArtPasal {
  number: string;
  title: string;
  /** plain = tanpa nomor; ayat = (1), (2); huruf = a., b.; bagian = A./B. dengan butir 1., 2. */
  style: AdArtItemStyle;
  intro?: string;
  highlight?: boolean;
  badge?: string;
  items: Array<{
    label?: string;
    text: string;
    subItems?: string[];
    /** angka (bawaan) = 1., 2.; huruf = a., b. */
    subItemStyle?: "huruf";
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
  "subtitle": "Pedoman Dasar Penyelenggaraan Organisasi, Kepengurusan, Pelayanan Kematian, dan Pengelolaan Taman Pemakaman Umum",
  "organization": "Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) Kampung Sukatani RW 03",
  "address": "Kampung Sukatani RW 03, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat",
  "documentYear": "TAHUN 2026 [belum dikonfirmasi: sampul menulis 'TAHUN 2026', sedangkan Lembar Pengesahan menulis 'Pada tanggal: 4 Agustus 2023' dan nama berkas memuat '2023'; tahun penetapan menunggu jawaban Pak Badar]",
  "establishedDate": "4 Agustus 2023 [belum dikonfirmasi: sampul menulis 'TAHUN 2026'; tanggal penetapan menunggu jawaban Pak Badar]",
  "draftNotice": {
    "title": "Draf — menunggu konfirmasi Pak Badar Rustandi (Pendiri RKM)",
    "text": "Naskah ini disalin dari AD/ART RKM yang disusun Pak Badar Rustandi. Penomoran ayat dipulihkan, salah ketik dan ejaan dibetulkan, dan susunan pengurus disamakan dengan bagan struktur terbaru (koreksi Ketua RKM, 3 November 2026). Bagian yang masih perlu dijelaskan tidak ditafsirkan: teks aslinya dibiarkan dan diberi tanda “belum dikonfirmasi”. Naskah belum berlaku sampai dikonfirmasi."
  },
  "mukadimah": {
    "bismillah": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "opening": "Dengan memanjatkan puji syukur kehadirat Allah SWT, serta memohon rahmat dan ridha-Nya, masyarakat Kampung Sukatani RW 03 menyadari bahwa kematian merupakan ketentuan Allah SWT yang pasti dihadapi oleh setiap manusia. Oleh karena itu, penyelenggaraan kewajiban terhadap orang yang meninggal dunia merupakan tanggung jawab keagamaan dan sosial yang perlu dilaksanakan secara bersama-sama.",
    "body": [
      "Dalam kehidupan bermasyarakat, diperlukan suatu wadah yang mampu mengoordinasikan pelayanan kematian, membantu keluarga yang mengalami musibah, serta mengelola fasilitas pemakaman umum secara tertib, terarah, dan bertanggung jawab.",
      "Atas dasar kesadaran tersebut, masyarakat Kampung Sukatani RW 03 membentuk Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) sebagai organisasi sosial kemasyarakatan yang berlandaskan nilai-nilai ajaran Islam, semangat gotong royong, persaudaraan, kepedulian, dan tanggung jawab bersama.",
      "Bahwa pengelolaan organisasi merupakan amanah yang harus dilaksanakan dengan penuh kejujuran, keadilan, keterbukaan, dan tanggung jawab. Setiap pengurus wajib menjaga kepercayaan masyarakat serta menjalankan tugas sesuai dengan ketentuan syariat Islam dan aturan organisasi.",
      "Untuk menjamin keberlangsungan organisasi, ketertiban administrasi, kepastian kewenangan, serta pengelolaan keuangan dan aset secara bertanggung jawab, dipandang perlu menetapkan Anggaran Dasar dan Anggaran Rumah Tangga sebagai pedoman penyelenggaraan organisasi.",
      "Berdasarkan pertimbangan tersebut, disusunlah Anggaran Dasar dan Anggaran Rumah Tangga Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) Kampung Sukatani RW 03."
    ]
  },
  "babs": [
    {
      "id": "ad-bab-i",
      "part": "AD",
      "babNumber": "BAB I",
      "title": "Nama, Kedudukan, dan Wilayah Kerja",
      "pasals": [
        {
          "number": "Pasal 1",
          "title": "Nama Organisasi",
          "style": "plain",
          "items": [
            {
              "text": "Organisasi ini bernama Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU), selanjutnya disebut RKM."
            }
          ]
        },
        {
          "number": "Pasal 2",
          "title": "Kedudukan",
          "style": "plain",
          "items": [
            {
              "text": "RKM berkedudukan di Kampung Sukatani RW 03, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat."
            }
          ]
        },
        {
          "number": "Pasal 3",
          "title": "Wilayah Kerja",
          "style": "ayat",
          "items": [
            {
              "text": "Wilayah pelayanan utama RKM meliputi masyarakat Kampung Sukatani RW 03, yang mencakup RT 01, RT 02, RT 03, RT 04, RT 05, dan RT 06."
            },
            {
              "text": "Keanggotaan RKM tidak terbatas pada warga Kampung Sukatani RW 03. Masyarakat dari luar wilayah tersebut dapat diterima menjadi anggota sepanjang menyatakan kesediaan untuk menaati AD/ART dan ketentuan organisasi. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 10 ayat (2); dipertahankan, tidak digabung]"
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
      "title": "Asas, Landasan, dan Sifat Organisasi",
      "pasals": [
        {
          "number": "Pasal 4",
          "title": "Asas",
          "style": "plain",
          "items": [
            {
              "text": "RKM berasaskan Pancasila dan berlandaskan nilai-nilai ajaran agama Islam."
            }
          ]
        },
        {
          "number": "Pasal 5",
          "title": "Landasan Organisasi",
          "style": "huruf",
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
          "number": "Pasal 6",
          "title": "Sifat Organisasi",
          "style": "huruf",
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
      "title": "Maksud dan Tujuan",
      "pasals": [
        {
          "number": "Pasal 7",
          "title": "Maksud",
          "style": "plain",
          "items": [
            {
              "text": "RKM dibentuk sebagai wadah pelayanan sosial dan keagamaan masyarakat dalam membantu penyelenggaraan kewajiban terhadap warga yang meninggal dunia serta mengelola Taman Pemakaman Umum (TPU)."
            }
          ]
        },
        {
          "number": "Pasal 8",
          "title": "Tujuan",
          "style": "huruf",
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
        }
      ]
    },
    {
      "id": "ad-bab-iv",
      "part": "AD",
      "babNumber": "BAB IV",
      "title": "Ruang Lingkup Kegiatan",
      "pasals": [
        {
          "number": "Pasal 9",
          "title": "",
          "style": "huruf",
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
      "id": "ad-bab-v",
      "part": "AD",
      "babNumber": "BAB V",
      "title": "Keanggotaan",
      "pasals": [
        {
          "number": "Pasal 10",
          "title": "",
          "style": "ayat",
          "items": [
            {
              "text": "Keanggotaan RKM terbuka bagi masyarakat Kampung Sukatani RW 03 maupun masyarakat dari luar wilayah tersebut."
            },
            {
              "text": "Calon anggota dari luar wilayah dapat diterima setelah menyatakan kesediaan menaati AD/ART dan memenuhi ketentuan keanggotaan yang ditetapkan organisasi. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 3 ayat (2); dipertahankan, tidak digabung]"
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
        }
      ]
    },
    {
      "id": "ad-bab-vi",
      "part": "AD",
      "babNumber": "BAB VI",
      "title": "Struktur Organisasi",
      "pasals": [
        {
          "number": "Pasal 11",
          "title": "",
          "style": "huruf",
          "intro": "Struktur organisasi RKM terdiri atas:",
          "items": [
            {
              "text": "Pendiri."
            },
            {
              "text": "Majelis Syura."
            },
            {
              "text": "Ketua."
            },
            {
              "text": "Sekretaris."
            },
            {
              "text": "Bendahara."
            },
            {
              "text": "Seksi Pemakaman."
            },
            {
              "text": "Seksi Pengurusan Jenazah Perempuan."
            },
            {
              "text": "Seksi Perlengkapan."
            },
            {
              "text": "Seksi Penggalangan Dana."
            }
          ]
        },
        {
          "number": "Pasal 12",
          "title": "Pendiri",
          "style": "ayat",
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
          "number": "Pasal 13",
          "title": "Majelis Syura",
          "style": "ayat",
          "items": [
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
      "id": "ad-bab-vii",
      "part": "AD",
      "babNumber": "BAB VII",
      "title": "Keuangan dan Kekayaan Organisasi",
      "pasals": [
        {
          "number": "Pasal 14",
          "title": "Sumber Keuangan",
          "style": "huruf",
          "intro": "Sumber keuangan organisasi dapat berasal dari:",
          "items": [
            {
              "text": "Iuran masyarakat berdasarkan kesepakatan."
            },
            {
              "text": "Sumbangan sukarela yang tidak mengikat."
            },
            {
              "text": "Bantuan dari masyarakat dan pihak lain yang sah."
            },
            {
              "text": "Hasil kegiatan organisasi yang sah."
            },
            {
              "text": "Sumber penerimaan lainnya yang tidak bertentangan dengan hukum dan syariat Islam."
            }
          ]
        },
        {
          "number": "Pasal 15",
          "title": "Pengelolaan Keuangan dan Kekayaan",
          "style": "ayat",
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
      "id": "ad-bab-viii",
      "part": "AD",
      "babNumber": "BAB VIII",
      "title": "Musyawarah dan Pengambilan Keputusan",
      "pasals": [
        {
          "number": "Pasal 16",
          "title": "",
          "style": "ayat",
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
      "id": "ad-bab-ix",
      "part": "AD",
      "babNumber": "BAB IX",
      "title": "Perubahan Anggaran Dasar",
      "pasals": [
        {
          "number": "Pasal 17",
          "title": "",
          "style": "ayat",
          "items": [
            {
              "text": "Perubahan Anggaran Dasar hanya dapat dilakukan melalui musyawarah organisasi yang sah. [belum dikonfirmasi: peserta dan kuorum musyawarah untuk perubahan Anggaran Dasar belum diatur]"
            },
            {
              "text": "Usulan perubahan harus disertai alasan yang jelas dan dasar atau bukti pendukung yang dapat dipertanggungjawabkan."
            },
            {
              "text": "Usulan yang tidak memiliki dasar yang memadai, atau yang bertentangan dengan syariat Islam maupun menimbulkan mafsadat dan kerusakan, ditolak dan tidak dapat ditetapkan."
            },
            {
              "text": "Perubahan harus didasarkan pada kebutuhan organisasi dan kepentingan masyarakat."
            },
            {
              "text": "Setiap perubahan wajib dicatat dan menjadi bagian dari dokumen resmi organisasi."
            }
          ]
        }
      ]
    },
    {
      "id": "ad-bab-x",
      "part": "AD",
      "babNumber": "BAB X",
      "title": "Pembubaran Organisasi",
      "pasals": [
        {
          "number": "Pasal 18",
          "title": "",
          "style": "ayat",
          "items": [
            {
              "text": "Pembubaran RKM hanya dapat dilakukan melalui musyawarah khusus. [belum dikonfirmasi: pengertian, peserta, dan kuorum 'musyawarah khusus' belum diatur dalam AD/ART]"
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
        }
      ]
    },
    {
      "id": "ad-bab-xi",
      "part": "AD",
      "babNumber": "BAB XI",
      "title": "Ketentuan Penutup Anggaran Dasar",
      "pasals": [
        {
          "number": "Pasal 19",
          "title": "",
          "style": "ayat",
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
      "title": "Tugas dan Wewenang Pengurus",
      "pasals": [
        {
          "number": "Pasal 20",
          "title": "Pendiri dan Majelis Syura",
          "style": "ayat",
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
          "number": "Pasal 21",
          "title": "Tugas dan Tanggung Jawab Pengurus",
          "style": "bagian",
          "items": [
            {
              "label": "A.",
              "text": "KETUA",
              "subItems": [
                "Memimpin dan mengoordinasikan seluruh kegiatan RKM.",
                "Bertanggung jawab terhadap pelaksanaan program organisasi.",
                "Mengawasi pelaksanaan tugas seluruh pengurus dan seksi.",
                "Mewakili organisasi dalam hubungan dengan pihak lain.",
                "Mengambil keputusan administratif sesuai kewenangan dan hasil musyawarah.",
                "Menjaga agar organisasi berjalan sesuai dengan tujuan pendirian, syariat Islam, dan AD/ART."
              ]
            },
            {
              "label": "B.",
              "text": "SEKRETARIS",
              "subItems": [
                "Mengelola administrasi dan surat-menyurat organisasi.",
                "Membuat dan menyimpan berita acara serta notulen musyawarah.",
                "Menyimpan dokumen dan arsip organisasi.",
                "Menyusun laporan kegiatan bersama ketua.",
                "Membantu kelancaran administrasi kepengurusan."
              ]
            },
            {
              "label": "C.",
              "text": "BENDAHARA",
              "subItems": [
                "Mengelola penerimaan dan pengeluaran keuangan organisasi.",
                "Mencatat seluruh transaksi keuangan.",
                "Menyimpan bukti penerimaan dan pengeluaran.",
                "Menyusun laporan keuangan secara berkala.",
                "Menjaga keamanan dan keterbukaan keuangan organisasi.",
                "Melaporkan kondisi keuangan kepada ketua dan forum musyawarah."
              ]
            },
            {
              "label": "D.",
              "text": "SEKSI PEMAKAMAN",
              "subItems": [
                "Mengoordinasikan persiapan tempat pemakaman.",
                "Membantu pelaksanaan proses pemakaman.",
                "Menjaga ketertiban dan kelayakan area pemakaman.",
                "Mengoordinasikan kebutuhan petugas pemakaman.",
                "Melaporkan kebutuhan dan kondisi TPU kepada ketua."
              ]
            },
            {
              "label": "E.",
              "text": "SEKSI PENGURUSAN JENAZAH PEREMPUAN",
              "subItems": [
                "Membantu pelaksanaan pengurusan jenazah perempuan.",
                "Mengoordinasikan petugas yang diperlukan.",
                "Membantu penyediaan perlengkapan pengurusan jenazah.",
                "Melaksanakan tugas berdasarkan tuntunan syariat Islam.",
                "Menjaga kehormatan dan privasi jenazah serta keluarga yang berduka."
              ]
            },
            {
              "label": "F.",
              "text": "SEKSI PERLENGKAPAN",
              "subItems": [
                "Mengelola perlengkapan milik organisasi.",
                "Melakukan pencatatan seluruh inventaris.",
                "Menjaga dan memelihara perlengkapan.",
                "Mengoordinasikan relawan masyarakat.",
                "Melaporkan kebutuhan perlengkapan kepada ketua."
              ]
            },
            {
              "label": "G.",
              "text": "SEKSI PENGGALANGAN DANA",
              "subItems": [
                "Membantu pengumpulan dana berdasarkan keputusan dan kesepakatan organisasi.",
                "Melaksanakan koordinasi penggalangan dana pada masing-masing RT.",
                "Menyerahkan seluruh hasil penerimaan kepada bendahara.",
                "Menyampaikan laporan pengumpulan dana.",
                "Menjaga keterbukaan dan kejelasan sumber penerimaan."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-ii",
      "part": "ART",
      "babNumber": "BAB II",
      "title": "Masa Bakti dan Pemberhentian Pengurus",
      "pasals": [
        {
          "number": "Pasal 22",
          "title": "Masa Bakti Ketua dan Pengurus",
          "style": "ayat",
          "items": [
            {
              "text": "Masa bakti ketua dan pengurus RKM adalah 10 (sepuluh) tahun untuk satu periode."
            },
            {
              "text": "Selama masa bakti, ketua dan pengurus menjalankan amanah kepengurusan secara berkelanjutan sepanjang masih mampu melaksanakan tugas dan tanggung jawabnya dengan baik serta menaati syariat Islam dan ketentuan organisasi."
            },
            {
              "text": "Ketua atau pengurus dapat diberhentikan sebelum berakhirnya masa bakti apabila terbukti melakukan perbuatan yang bertentangan dengan hukum dan syariat Islam, melanggar ketentuan AD/ART, menyalahgunakan wewenang, atau melakukan tindakan yang merugikan organisasi dan masyarakat."
            },
            {
              "text": "Pemberhentian juga dapat dilakukan apabila ketua atau pengurus tidak lagi mampu menjalankan tugas dan tanggung jawabnya secara objektif, mengundurkan diri, meninggal dunia, atau mengalami keadaan lain yang menyebabkan tidak dapat melaksanakan amanah kepengurusan."
            },
            {
              "text": "Pemberhentian sebagaimana dimaksud pada ayat (3) dan ayat (4) harus didasarkan pada bukti dan pertimbangan yang dapat dipertanggungjawabkan."
            },
            {
              "text": "Sebelum keputusan pemberhentian ditetapkan, pengurus yang bersangkutan harus diberikan kesempatan untuk menyampaikan klarifikasi atau pembelaan diri."
            },
            {
              "text": "Keputusan pemberhentian ditetapkan melalui musyawarah yang sah dengan melibatkan unsur pengurus, Majelis Syura, dan perwakilan masyarakat sesuai mekanisme organisasi."
            },
            {
              "text": "Pergantian ketua atau pengurus dilakukan melalui musyawarah dan ditetapkan dalam berita acara pergantian kepengurusan."
            },
            {
              "text": "Seluruh proses pemberhentian dan pergantian pengurus wajib mengedepankan prinsip amanah, keadilan, tabayyun, musyawarah, dan kemaslahatan bersama."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-iii",
      "part": "ART",
      "babNumber": "BAB III",
      "title": "Pengelolaan Administrasi dan Keuangan",
      "pasals": [
        {
          "number": "Pasal 23",
          "title": "Administrasi Organisasi",
          "style": "ayat",
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
          "number": "Pasal 24",
          "title": "Pengelolaan Keuangan",
          "style": "ayat",
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
              "text": "Iuran anggota ditetapkan sebesar Rp 4.000 per anggota per bulan, dan iuran pendatang (non-anggota) ditetapkan sebesar Rp 600.000."
            },
            {
              "text": "RKM memberikan santunan kematian sebesar Rp 600.000 kepada keluarga setiap anggota yang meninggal dunia, yang diserahkan melalui perwakilan RKM di RT masing-masing."
            }
          ]
        },
        {
          "number": "Pasal 25",
          "title": "Rekening Organisasi",
          "style": "ayat",
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
      "id": "art-bab-iv",
      "part": "ART",
      "babNumber": "BAB IV",
      "title": "Pengelolaan Taman Pemakaman Umum",
      "pasals": [
        {
          "number": "Pasal 26",
          "title": "",
          "style": "ayat",
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
              "text": "Penguburan jenazah anggota RKM yang berasal dari luar wilayah Kampung Sukatani RW 03 dapat dilaksanakan di TPU sepanjang tersedia tempat, mendapat persetujuan pengelola sesuai prosedur, serta tidak bertentangan dengan syariat Islam dan ketentuan hukum yang berlaku. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 27 ayat (5); dipertahankan, tidak digabung]"
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
      "id": "art-bab-v",
      "part": "ART",
      "babNumber": "BAB V",
      "title": "Pelayanan Kematian",
      "pasals": [
        {
          "number": "Pasal 27",
          "title": "",
          "style": "ayat",
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
              "text": "Jenazah anggota yang berasal dari luar wilayah dapat dimakamkan di TPU RKM sepanjang memenuhi ketentuan penggunaan TPU, tersedia tempat, dan pelaksanaannya tidak bertentangan dengan syariat Islam serta peraturan yang berlaku. [belum dikonfirmasi: ketentuan serupa juga ada di Pasal 26 ayat (5); dipertahankan, tidak digabung]"
            },
            {
              "text": "Pelayanan bagi orang yang bukan anggota dapat diberikan berdasarkan pertimbangan kemanusiaan, kemampuan organisasi, ketersediaan fasilitas, dan keputusan pengurus sesuai mekanisme organisasi."
            },
            {
              "text": "Setiap pelayanan dilaksanakan dengan mengutamakan kepentingan dan kemudahan keluarga yang berduka."
            },
            {
              "text": "Ketentuan teknis pelayanan dapat disempurnakan berdasarkan hasil musyawarah."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-vi",
      "part": "ART",
      "babNumber": "BAB VI",
      "title": "Inventaris Organisasi",
      "pasals": [
        {
          "number": "Pasal 28",
          "title": "",
          "style": "ayat",
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
      "id": "art-bab-vii",
      "part": "ART",
      "babNumber": "BAB VII",
      "title": "Larangan dan Sanksi Organisasi",
      "pasals": [
        {
          "number": "Pasal 29",
          "title": "Larangan",
          "style": "huruf",
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
          "number": "Pasal 30",
          "title": "Sanksi Organisasi",
          "style": "ayat",
          "items": [
            {
              "text": "Pengurus yang melakukan pelanggaran terhadap AD/ART dapat dikenakan teguran lisan."
            },
            {
              "text": "Apabila pelanggaran berlanjut, dapat diberikan teguran tertulis."
            },
            {
              "text": "Terhadap pelanggaran berat dapat dilakukan pemberhentian melalui mekanisme Pasal 22."
            },
            {
              "text": "Penetapan sanksi wajib mempertimbangkan jenis pelanggaran, bukti, klarifikasi, dan tingkat tanggung jawab pihak yang bersangkutan."
            },
            {
              "text": "Pemberian sanksi harus mengutamakan keadilan dan tidak boleh dilakukan secara sewenang-wenang."
            }
          ]
        }
      ]
    },
    {
      "id": "art-bab-viii",
      "part": "ART",
      "babNumber": "BAB VIII",
      "title": "Penyelesaian Perselisihan",
      "pasals": [
        {
          "number": "Pasal 31",
          "title": "",
          "style": "ayat",
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
      "id": "art-bab-ix",
      "part": "ART",
      "babNumber": "BAB IX",
      "title": "Perubahan Anggaran Rumah Tangga",
      "pasals": [
        {
          "number": "Pasal 32",
          "title": "",
          "style": "ayat",
          "items": [
            {
              "text": "Perubahan Anggaran Rumah Tangga hanya dapat dilakukan melalui musyawarah organisasi yang sah. [belum dikonfirmasi: peserta dan kuorum musyawarah untuk perubahan Anggaran Rumah Tangga belum diatur]"
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
      "id": "art-bab-x",
      "part": "ART",
      "babNumber": "BAB X",
      "title": "Ketentuan Penutup",
      "pasals": [
        {
          "number": "Pasal 33",
          "title": "",
          "style": "ayat",
          "items": [
            {
              "text": "Anggaran Dasar dan Anggaran Rumah Tangga ini merupakan satu kesatuan yang tidak terpisahkan."
            },
            {
              "text": "Seluruh pengurus dan anggota wajib menaati serta melaksanakan ketentuan yang tercantum di dalamnya."
            },
            {
              "text": "Hal-hal yang belum diatur akan diselesaikan melalui musyawarah sepanjang tidak bertentangan dengan AD/ART, syariat Islam, dan ketentuan hukum yang berlaku."
            },
            {
              "text": "AD/ART ini berlaku sejak tanggal ditetapkan melalui musyawarah organisasi."
            }
          ]
        }
      ]
    }
  ],
  "susunan": {
    "note": "Disamakan dengan bagan struktur organisasi terbaru (koreksi Ketua RKM, 3 November 2026).",
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
      "Anggaran Dasar dan Anggaran Rumah Tangga Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) Kampung Sukatani RW 03 ini ditetapkan sebagai pedoman penyelenggaraan organisasi, pelaksanaan tugas kepengurusan, pengelolaan keuangan, pelayanan kematian, serta pengelolaan Taman Pemakaman Umum.",
      "Dokumen ini disusun dengan mengacu pada Berita Acara Pendirian dan Pembentukan Pengurus RKM Nomor: 001/RKM/VIII/2023 tanggal 4 Agustus 2023.",
      "Dengan ditetapkannya AD/ART ini, seluruh pengurus berkewajiban melaksanakan amanah dan tanggung jawab organisasi sesuai dengan ketentuan yang berlaku."
    ],
    "place": "Kampung Sukatani, Desa Wangunsari, Kecamatan Cisolok, Kabupaten Sukabumi",
    "date": "4 Agustus 2023 [belum dikonfirmasi: sampul menulis 'TAHUN 2026'; tanggal penetapan menunggu jawaban Pak Badar]",
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
    "Demikian Anggaran Dasar dan Anggaran Rumah Tangga Rukun Kematian Masyarakat (RKM) dan Pengelolaan Taman Pemakaman Umum (TPU) Kampung Sukatani RW 03 ini disusun sebagai pedoman dalam menjalankan organisasi dan melaksanakan seluruh kegiatan pelayanan kepada masyarakat.",
    "Setiap pengurus hendaknya senantiasa menjaga amanah, menjunjung tinggi nilai-nilai ajaran Islam, melaksanakan tugas dengan penuh tanggung jawab, serta mengutamakan kepentingan dan kemaslahatan masyarakat.",
    "Keberadaan RKM diharapkan dapat terus memberikan manfaat bagi masyarakat, menjaga persatuan, memperkuat kepedulian sosial, serta menjadi sarana pengabdian dan amal kebaikan.",
    "Semoga Allah SWT senantiasa memberikan petunjuk, kekuatan, dan keberkahan kepada seluruh pihak yang mengabdikan diri dalam penyelenggaraan organisasi ini."
  ]
};
