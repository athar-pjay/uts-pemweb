import Image from 'next/image';
import Link from 'next/link';

export default function SemuaBeritaPage() {
  // Data 6 Berita Lengkap sesuai ketentuan
  const daftarBerita = [
    { 
      id: 1, 
      title: 'Penerimaan Santri Baru Tahun Ajaran 2026/2027', 
      date: '01 Oktober 2026',
      excerpt: 'Pendaftaran santri baru resmi dibuka untuk jenjang SMP dan SMA Boarding School.',
      image: '/psb.jpg' 
    },
    { 
      id: 2, 
      title: 'Prestasi Gemilang Santri dalam Olimpiade Sains', 
      date: '25 September 2026',
      excerpt: 'Santri Al-Irsyad berhasil membawa pulang medali emas tingkat nasional.',
      image: '/olimpiade.jpg' 
    },
    { 
      id: 3, 
      title: 'Kunjungan Studi Banding Internasional', 
      date: '10 September 2026',
      excerpt: 'Memperluas wawasan global melalui kerja sama dengan institusi pendidikan luar negeri.',
      image: '/study banding.jpg' 
    },
    { 
      id: 4, 
      title: 'Pelatihan Bahasa Arab Intensif', 
      date: '05 September 2026',
      excerpt: 'Program khusus peningkatan kemampuan komunikasi bahasa Arab aktif bagi seluruh santri.',
      image: '/berita1.jpg' 
    },
    { 
      id: 5, 
      title: 'Pekan Olahraga dan Seni Antar Pesantren', 
      date: '20 Agustus 2026',
      excerpt: 'Menjalin ukhuwah dan sportivitas melalui berbagai cabang perlombaan menarik.',
      image: '/berita2.jpg' 
    },
    { 
      id: 6, 
      title: 'Kajian Akbar Bersama Ulama Tamu', 
      date: '15 Agustus 2026',
      excerpt: 'Memberikan pencerahan ilmu syar i dan motivasi belajar bagi para santri di asrama.',
      image: '/berita3.jpg' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-teal-900">Arsip Berita & Kegiatan</h1>
        <p className="text-slate-600 mt-2">Informasi terkini seputar aktivitas dan prestasi di Al-Irsyad Boarding School Tengaran.</p>
      </div>

      {/* Grid 6 Berita yang Rapi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {daftarBerita.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-amber-700 font-semibold">{item.date}</span>
                <h3 className="font-bold text-slate-900 text-lg mt-1 mb-2 leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.excerpt}</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link href={`/berita/${item.id}`} className="inline-block text-teal-700 font-semibold text-sm hover:underline">
                Baca Selengkapnya &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}