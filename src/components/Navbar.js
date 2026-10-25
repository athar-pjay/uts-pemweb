import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-teal-100">
      {/* Top Bar Kecil */}
      <div className="bg-teal-700 text-teal-50 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Pesantren Islam Al Irsyad Tengaran - Mendidik Sesuai Sunnah, Mengasuh Sesuai Fitrah</span>
          <span className="hidden md:inline">Salatiga, Jawa Tengah</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          
          {/* 1. KIRI: Logo Sekolah */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-48 md:w-56">
                <Image 
                  src="/logo Al irsyad.png" 
                  alt="Logo Al-Irsyad Boarding School"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* 2. TENGAH: Menu Navigasi Utama */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/" className="text-teal-900 hover:text-teal-600 font-semibold transition-colors">Home</Link>
            <Link href="/about" className="text-teal-900 hover:text-teal-600 font-semibold transition-colors">About</Link>
            <Link href="/berita" className="text-teal-900 hover:text-teal-600 font-semibold transition-colors">Berita</Link>
          </div>

          {/* 3. KANAN: Tombol Aksi */}
          <div className="flex items-center justify-end space-x-3">
            <Link 
              href="/berita" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-bold px-5 py-2 rounded-full transition-all text-sm"
            >
              Info Pendaftaran
            </Link>

            <Link 
              href="/admin" 
              className="bg-slate-800 text-white hover:bg-slate-700 font-bold px-4 py-2 rounded-full transition-all text-sm"
            >
              Admin Panel
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}