import Link from 'next/link';

export default async function DetailBeritaPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const detailData = {
    1: {
      title: 'Penerimaan Santri Baru Tahun Ajaran 2026/2027',
      date: '01 Oktober 2026',
      content: 'Pendaftaran gelombang pertama resmi dibuka untuk tingkat SMP dan SMA Boarding Al-Irsyad Tengaran. Program ini dirancang untuk menjaring calon santri pilihan yang memiliki semangat tinggi dalam mendalami ilmu agama berlandaskan Al-Qur`an dan As-Sunnah.'
    },
    2: {
      title: 'Prestasi Gemilang Santri dalam Olimpiade Sains',
      date: '25 September 2026',
      content: 'Santri Al-Irsyad kembali membawa pulang medali emas tingkat nasional dalam ajang kompetisi sains bergengsi berkat bimbingan intensif para dewan asatidzah.'
    },
    3: {
      title: 'Kegiatan Pesantren Kilat dan Bakti Sosial',
      date: '15 September 2026',
      content: 'Sebagai wujud kepedulian sosial kepada masyarakat sekitar Tengaran Salatiga, para santri mengadakan kegiatan bakti sosial dan santunan.'
    },
    4: {
      title: 'Seminar Internasional Pendidikan Karakter',
      date: '05 September 2026',
      content: 'Menghadirkan narasumber ahli pendidikan untuk membahas pentingnya penanaman akidah dan akhlak mulia di era digital.'
    },
    5: {
      title: 'Pekan Olahraga dan Seni Antar Pesantren',
      date: '20 Agustus 2026',
      content: 'Ajang mengasah bakat, sportivitas, dan ukhuwah melalui cabang olahraga sunnah seperti memanah, berkuda, dan bela diri.'
    },
    6: {
      title: 'Wisuda Tahfidz Al-Qur`an 30 Juz',
      date: '10 Agustus 2026',
      content: 'Pesantren kembali melahirkan puluhan hafidz dan hafidzah berprestasi 30 juz pada tahun ajaran ini dengan penuh rasa haru dan bangga.'
    },
  };

  const berita = detailData[id] || {
    title: 'Berita Tidak Ditemukan',
    date: '-',
    content: 'Maaf, informasi berita yang Anda cari tidak tersedia.'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-3">
          {berita.title}
        </h1>
        <p className="text-sm text-slate-400 font-medium mb-6">
          Dipublikasikan pada: {berita.date}
        </p>
        <div className="w-full h-64 md:h-80 bg-teal-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-8 shadow-md">
          FOTO / GAMBAR BERITA #{id}
        </div>
        <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4 mb-10">
          <p>{berita.content}</p>
        </div>
        <div>
          <Link 
            href="/berita" 
            className="inline-block bg-teal-800 text-white font-semibold py-3 px-6 rounded-xl hover:bg-teal-700 transition-colors shadow"
          >
            &larr; Kembali ke Berita
          </Link>
        </div>
      </div>
    </div>
  );
}