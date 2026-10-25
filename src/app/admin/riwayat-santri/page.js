'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function RiwayatSantriPage() {
  const [dataRiwayat, setDataRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRiwayat() {
      const { data, error } = await supabase
        .from('riwayat_santri')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setDataRiwayat(data || []);
      }
      setLoading(false);
    }

    fetchRiwayat();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Riwayat Santri</h1>
          <p className="text-sm text-gray-500">Catatan aktivitas santri langsung dari Supabase.</p>
        </div>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition text-sm font-medium">
          + Tambah Catatan
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 py-4 text-center animate-pulse">Memuat data dari Supabase...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                <th className="p-3">NIS</th>
                <th className="p-3">Nama Santri</th>
                <th className="p-3">Kelas</th>
                <th className="p-3">Kegiatan / Catatan</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y">
              {dataRiwayat.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-3 font-mono text-gray-600">{item.nis}</td>
                  <td className="p-3 font-semibold text-gray-800">{item.nama}</td>
                  <td className="p-3 text-gray-600">{item.kelas}</td>
                  <td className="p-3 text-gray-700">{item.kegiatan}</td>
                  <td className="p-3 text-gray-500 text-xs">{item.tanggal}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                      item.status === 'Lulus' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Selesai' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}