import Image from 'next/image';
import Link from 'next/link';
import SchoolProfile from '@/components/SchoolProfile';

export default function Home() {
  const semuaBerita = [
    { id: 1, title: 'Penerimaan Santri Baru Tahun Ajaran 2026/2027', date: '01 Oktober 2026', image: '/psb.jpg' },
    { id: 2, title: 'Prestasi Gemilang Santri dalam Olimpiade Sains', date: '25 September 2026', image: '/olimpiade.jpg' },
    { id: 3, title: 'Kunjungan Studi Banding Internasional', date: '10 September 2026', image: '/kunjungan.jpg' },
    { id: 4, title: 'Pelatihan Bahasa Arab Intensif', date: '05 September 2026', image: '/berita1.jpg' },
    { id: 5, title: 'Pekan Olahraga dan Seni Antar Pesantren', date: '20 Agustus 2026', image: '/berita2.jpg' },
    { id: 6, title: 'Kajian Akbar Bersama Ulama Tamu', date: '15 Agustus 2026', image: '/berita3.jpg' },
  ];

  const galeriSekolah = [
    { id: 1, title: 'Gedung Utama PIAT', image: '/vector atas masbah.jpg' },
    { id: 2, title: 'Proses Belajar Mengajar', image: '/kelas.png' },
    { id: 3, title: 'Ekstrakurikuler Berkuda', image: '/ekskul.jpg' },
  ];

  const jenjangPendidikan = [
    {
      id: 1,
      name: 'SD Islam Tahfizhul Qur’an',
      tag: '#SDITQ',
      type: 'Nonasrama',
      desc: 'Memadukan kurikulum pendidikan umum dengan penguatan Tahfizhul Qur’an, pembiasaan ibadah, serta penanaman akidah dan akhlak mulia sejak usia dini.',
      profileLink: '#',
      profileText: 'Profil SDITQ'
    },
    {
      id: 2,
      name: 'Madrasah Tsanawiyah',
      tag: '#Mutawasithah',
      type: 'Berasrama',
      desc: 'Jenjang pendidikan menengah berasrama yang mengintegrasikan kurikulum nasional dan pesantren guna membentuk santri yang berilmu, berprestasi, dan berakidah.',
      profileLink: '#',
      profileText: 'Profil MTs Putra / Putri'
    },
    {
      id: 3,
      name: 'I’dad Lughawi',
      tag: '#Pra-MA',
      type: 'Berasrama',
      desc: 'Program persiapan intensif satu tahun yang memfokuskan pada akselerasi Bahasa Arab dan ilmu syar’i sebagai jembatan bagi lulusan selain MTs Al Irsyad.',
      profileLink: '#',
      profileText: 'Profil I’dad Lughawi'
    },
    {
      id: 4,
      name: 'Madrasah Aliyah',
      tag: '#Ulya',
      type: 'Berasrama',
      desc: 'Jenjang pendidikan tingkat atas berasrama yang menerapkan lingkungan berbahasa Arab secara aktif serta pendalaman ilmu syar’i dan sains komprehensif.',
      profileLink: '#',
      profileText: 'Profil Madrasah Aliyah'
    }
  ];

  const sebaranAlumni = [
    {
      id: 1,
      category: 'Middle East',
      icon: '🕌',
      description: 'Universitas di Timur Tengah',
      items: [
        'Universitas Islam Madinah (KSA)',
        'Universitas Al-Azhar (Mesir)',
        'Universitas King Saud (KSA)',
        'Universitas Ummul Qura (KSA)'
      ]
    },
    {
      id: 2,
      category: 'PTLN (Luar Negeri)',
      icon: '🌏',
      description: 'Perguruan Tinggi Luar Negeri',
      items: [
        'Jepang (University of Tokyo, Waseda)',
        'Turki (Istanbul University, METU)',
        'Jerman (TU Munich, RWTH Aachen)',
        'Australia (University of Melbourne)',
        'Malaysia (Universiti Malaya)'
      ]
    },
    {
      id: 3,
      category: 'PTN (Dalam Negeri)',
      icon: '🏛️',
      description: 'Perguruan Tinggi Negeri Unggulan',
      items: [
        'Universitas Indonesia (UI)',
        'Universitas Gadjah Mada (UGM)',
        'Institut Teknologi Bandung (ITB)',
        'Institut Teknologi Sepuluh Nopember (ITS)',
        'Universitas Airlangga (UNAIR)',
        'Universitas Brawijaya (UB)',
        'Universitas Diponegoro (UNDIP)',
        'Dan PTN Favorit Lainnya'
      ]
    },
    {
      id: 4,
      category: 'Kedinasan',
      icon: '⭐',
      description: 'Ikatan Dinas & Kepolisian',
      items: [
        'Akademi Kepolisian (AKPOL)',
        'STAN, STIS, IPDN',
        'Sekolah Kedinasan Resmi Lainnya'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 1. BAGIAN HERO BANNER */}
      <div className="relative bg-emerald-900 text-white rounded-3xl overflow-hidden shadow-xl mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/atas masbah.jpg" 
            alt="Al-Irsyad Boarding School Campus View"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight drop-shadow-lg">
            Al-Irsyad Boarding School Tengaran
          </h1>
          <p className="text-teal-100 text-xl font-medium max-w-2xl mb-12 leading-relaxed drop-shadow-md">
            Mendidik Sesuai Sunnah, Mengasuh Sesuai Fitrah
          </p>
          <Link 
            href="/about" 
            className="inline-block bg-white text-emerald-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-teal-50 transition-colors text-lg"
          >
            Pelajari Tentang Kami &rarr;
          </Link>
        </div>
      </div>

      {/* 2. PROFIL SEKOLAH */}
      <div className="mb-12">
        <SchoolProfile />
      </div>

      {/* 3. JENJANG PENDIDIKAN */}
      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-teal-900">Jenjang Pendidikan</h2>
          <p className="text-slate-600 text-sm mt-1">Pilihan jenjang pendidikan berstandar mutu tinggi untuk buah hati Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jenjangPendidikan.map((jenjang) => (
            <div key={jenjang.id} className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-lg shadow-inner">
                    🎓
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {jenjang.type}
                  </span>
                </div>
                <span className="text-xs text-teal-700 font-bold tracking-wide">{jenjang.tag}</span>
                <h3 className="text-xl font-bold text-teal-900 mt-1 mb-3 leading-tight">{jenjang.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{jenjang.desc}</p>
              </div>

              <div>
                <a 
                  href={jenjang.profileLink} 
                  className="block text-center w-full py-2.5 px-4 rounded-xl border border-teal-700 text-teal-800 font-semibold text-sm hover:bg-teal-700 hover:text-white transition-colors shadow-sm"
                >
                  {jenjang.profileText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PROGRAM UNGGULAN KAMI */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl shadow-md border border-teal-100 p-8 md:p-10 mb-12">
        <h2 className="text-2xl font-bold text-teal-900 mb-8 border-b-2 pb-4 border-teal-200">
          Program Unggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-3xl font-bold mb-1 shadow-inner">
              🗣️
            </div>
            <h3 className="font-bold text-teal-900 text-lg">Bilingual Daily Speech</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Arabic & English communication practice for daily environment.</p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-bold mb-1 shadow-inner">
              ⚖️
            </div>
            <h3 className="font-bold text-teal-900 text-lg">Imtek & Imtak Seimbang</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Harmonisasi ilmu pengetahuan/teknologi dengan iman dan takwa.</p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-3xl font-bold mb-1 shadow-inner">
              🌍
            </div>
            <h3 className="font-bold text-teal-900 text-lg">Studi Lanjut Global</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Peluang studi lanjut berkualitas di dalam maupun luar negeri.</p>
          </div>

        </div>
      </div>

      {/* 5. GALERI KEGIATAN & FASILITAS */}
      <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-10 mb-12">
        <h2 className="text-2xl font-bold text-teal-900 mb-8 border-b-2 pb-4 border-slate-100">
          Galeri Kegiatan & Fasilitas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galeriSekolah.map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-60 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5 text-center bg-white border-t border-slate-100">
                <h3 className="font-bold text-teal-900 text-base leading-snug">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SEBARAN ALUMNI */}
      <div className="mb-12 p-8 md:p-10 bg-white rounded-3xl shadow-lg border border-slate-100">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-teal-900">Sebaran Alumni</h2>
          <p className="text-slate-600 text-sm mt-1 max-w-3xl">Komitmen mencetak lulusan berkualitas yang tersebar di berbagai institusi bergengsi dalam dan luar negeri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sebaranAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-2xl shadow border border-slate-100 p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center text-3xl mb-5 shadow-inner">
                  {alumni.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-1">{alumni.category}</h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">{alumni.description}</p>
                <ul className="space-y-2.5">
                  {alumni.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                      <span className="text-teal-600 font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. BERITA TERBARU */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8 pb-3 border-b-2 border-slate-100">
          <h2 className="text-2xl font-bold text-teal-900">Berita Terbaru</h2>
          <Link href="/berita" className="text-teal-700 hover:underline font-semibold text-sm flex items-center gap-1.5">
            Lihat Semua Berita <span className="text-lg">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semuaBerita.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="relative h-52 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">{item.date}</span>
                  <h3 className="font-bold text-slate-800 text-lg mt-1.5 mb-5 leading-snug">{item.title}</h3>
                </div>
                <Link href={`/berita/${item.id}`} className="text-teal-700 font-semibold text-sm hover:underline flex items-center gap-1">
                  Baca Selengkapnya <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}