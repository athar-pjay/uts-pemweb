export default function RewardsPointsPage() {
  const dataPoints = [
    { id: 1, nis: '2026001', nama: 'Pajay', kelas: '10-A', points: 150, reward: 'Bebas Piket Seminggu' },
    { id: 2, nis: '2026002', nama: 'Barnet', kelas: '11-B', points: 320, reward: 'Voucher Buku Perpustakaan' },
    { id: 3, nis: '2026003', nama: 'Ober', kelas: '10-B', points: 80, reward: '-' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Rewards & Points Santri</h1>
          <p className="text-sm text-gray-500">Manajemen poin apresiasi dan hadiah pencapaian santri.</p>
        </div>
        <button className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition text-sm font-medium">
          + Input Poin Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
          <p className="text-xs text-teal-600 font-bold uppercase">Total Poin Terdistribusi</p>
          <p className="text-2xl font-bold text-teal-900 mt-1">5,450 Poin</p>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-600 font-bold uppercase">Reward Diklaim Bulan Ini</p>
          <p className="text-2xl font-bold text-yellow-900 mt-1">28 Hadiah</p>
        </div>
        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-xs text-purple-600 font-bold uppercase">Santri Poin Tertinggi</p>
          <p className="text-2xl font-bold text-purple-900 mt-1">Muhammad Rizky</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">NIS</th>
              <th className="p-3">Nama Santri</th>
              <th className="p-3">Kelas</th>
              <th className="p-3">Poin Prestasi</th>
              <th className="p-3">Kualifikasi Reward</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y">
            {dataPoints.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-3 font-mono">{item.nis}</td>
                <td className="p-3 font-semibold text-gray-700">{item.nama}</td>
                <td className="p-3">{item.kelas}</td>
                <td className="p-3">
                  <span className="bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full text-xs">
                    ⭐ {item.points} Poin
                  </span>
                </td>
                <td className="p-3 text-gray-600">{item.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}