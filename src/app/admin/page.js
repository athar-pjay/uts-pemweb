'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function DashboardAdmin() {
  const [dbConnected, setDbConnected] = useState(false);

  // Cek koneksi ke Supabase saat komponen di-load
  useEffect(() => {
    async function checkConnection() {
      const { error } = await supabase.from('riwayat_santri').select('id').limit(1);
      if (!error) {
        setDbConnected(true);
      }
    }
    checkConnection();
  }, []);

  const dataBerita = [
    { id: 1, judul: 'Pendaftaran Santri Baru Tahun Ajaran 2026/2027 Resmi Dibuka', tanggal: '24 Okt 2026', kategori: 'Informasi', status: 'Diterbitkan' },
    { id: 2, judul: 'Kunjungan Studi Banding dari Pesantren Al-Binaa', tanggal: '22 Okt 2026', kategori: 'Kegiatan', status: 'Diterbitkan' },
    { id: 3, judul: 'Juara 1 Lomba Musabaqah Tilawatil Qur’an Tingkat Provinsi', tanggal: '18 Okt 2026', kategori: 'Prestasi', status: 'Diterbitkan' },
    { id: 4, judul: 'Draf: Jadwal Ujian Akhir Semester Ganjil 2026', tanggal: '15 Okt 2026', kategori: 'Akademik', status: 'Draf' },
  ];

  return (
    <div className="space-y-6">
      {/* Cards Stats (5 Kolom Simetris) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Santri Aktif</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">2,500</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Mata Pelajaran</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">35</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Berita</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">32</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Berita Diterbitkan</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">32</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Berita Draf</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">4</p>
        </div>
      </div>

      {/* Banner Notifikasi Supabase Terhubung */}
      {dbConnected && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
            <div>
              <p className="text-sm font-bold text-emerald-800">Supabase PostgreSQL Terhubung</p>
              <p className="text-xs text-emerald-600">Tabel aktif. Data tersinkronisasi langsung dengan database Supabase.</p>
            </div>
          </div>
          <span className="text-xs font-mono bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded border border-emerald-300">
            NEXT_PUBLIC_SUPABASE_URL
          </span>
        </div>
      )}

      {/* Section Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Berita & Informasi Sekolah */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-bold text-gray-800">Berita & Informasi Sekolah</h2>
            <span className="text-xs text-teal-600 font-semibold cursor-pointer hover:underline">Lihat Semua →</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                  <th className="p-3">Judul Berita</th>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y">
                {dataBerita.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-800">{item.judul}</td>
                    <td className="p-3 text-gray-500">{item.kategori}</td>
                    <td className="p-3 text-gray-500 text-xs">{item.tanggal}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                        item.status === 'Diterbitkan' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Pendaftaran Santri Tahun 2026</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1">
                <span>IL/IM</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1">
                <span>MTW</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-2.5 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1">
                <span>ITQ</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}