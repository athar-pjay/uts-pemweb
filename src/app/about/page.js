import Link from 'next/link';

export default function Home() {
  return (
    <main 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-photo.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* KOTAK KACA TRANSPARAN (GLASSMORPHISM) */}
      <div 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
        className="w-full max-w-4xl text-white rounded-3xl p-8 sm:p-12 shadow-2xl"
      >
        <span className="inline-block bg-amber-500 text-amber-950 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-md">
          Official Landing Page
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
          Al-Irsyad Boarding School Tengaran
        </h1>

        <p className="text-teal-100 text-xl font-medium max-w-2xl mb-8 leading-relaxed drop-shadow">
          Mendidik Sesuai Sunnah, Mengasuh Sesuai Fitrah
        </p>

        <Link 
          href="/about" 
          className="inline-block bg-white text-emerald-950 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-teal-50 transition-all text-lg"
        >
          Pelajari Tentang Kami &rarr;
        </Link>
      </div>
    </main>
  );
}