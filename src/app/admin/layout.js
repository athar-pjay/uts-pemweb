import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar Kiri */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-5 text-xl font-bold border-b border-slate-800 tracking-wide">
          Admin Panel
        </div>

        {/* Profil Singkat Sidebar */}
        <div className="p-4 flex items-center space-x-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-teal-400">
            Jay
          </div>
          <div>
            <p className="text-xs text-slate-400">Welcome,</p>
            <p className="text-sm font-bold text-white">Jay</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1 text-sm">
          <div className="text-xs font-semibold text-slate-400 px-2 py-1 uppercase">General</div>
          
          <Link href="/admin" className="flex items-center px-3 py-2 rounded bg-slate-800 text-white hover:bg-slate-700">
            Dashboard
          </Link>
          
          <Link href="/admin/riwayat-santri" className="flex items-center px-3 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Riwayat Santri
          </Link>
          
          <Link href="/admin/rewards-points" className="flex items-center px-3 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Rewards & Points Santri
          </Link>

          <div className="text-xs font-semibold text-slate-400 px-2 py-1 pt-4 uppercase">Live On</div>
          <Link href="/" className="flex items-center px-3 py-2 rounded text-yellow-400 hover:bg-slate-800">
            ← Ke Website Utama
          </Link>
        </nav>
      </aside>

      {/* Area Konten Utama */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Kanan */}
        <header className="bg-white shadow-sm border-b px-6 py-3 flex justify-between items-center">
          <button className="text-gray-600 hover:text-gray-900 text-lg">☰</button>
          <span className="text-sm font-semibold text-gray-700">Jay</span>
        </header>

        <main className="p-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}