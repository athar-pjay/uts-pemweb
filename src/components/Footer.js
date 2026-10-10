// components/Footer.jsx
// Next.js + Tailwind CSS. Ganti href "#" dengan alamat halaman yang sebenarnya.
import Link from "next/link";

const satuanPendidikan = [
  {
    nama: "SD Islam Tahfizhul Qur’an",
    unit: [{ label: "SDITQ Putra Putri", href: "#" }],
  },
  {
    nama: "Madrasah Tsanawiyah",
    unit: [
      { label: "MTs Putra", href: "#" },
      { label: "MTs Putri", href: "#" },
    ],
  },
  {
    nama: "I’dad Lughawi",
    unit: [
      { label: "IL Putra", href: "#" },
      { label: "IL Putri", href: "#" },
    ],
  },
  {
    nama: "Madrasah Aliyah",
    unit: [
      { label: "MA Putra", href: "#" },
      { label: "MA Putri", href: "#" },
    ],
  },
];

const tautan = [
  { label: "Informasi Pendaftaran", href: "#" },
  { label: "Brosur Pendaftaran", href: "#" },
  { label: "Prosedur Pembayaran", href: "#" },
  { label: "Kalender Pendidikan", href: "#" },
  { label: "Lowongan Kerja", href: "#" },
];

const linkClass =
  "text-emerald-100/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline";

export default function Footer() {
  return (
    <footer className="bg-[#022c22] text-emerald-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Tentang */}
        <section className="lg:pr-4">
          <h2 className="text-lg font-bold text-white">
            Al-Irsyad Boarding School Tengaran
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
            Wadah pendidikan Islam terpadu yang mengembangkan pendidikan
            keislaman dan umum secara harmonis, untuk mencetak generasi Muslim
            yang kuat dalam iman, luas dalam ilmu, dan adaptif terhadap
            perkembangan zaman.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
            Sistem asrama dipakai untuk memaksimalkan pembinaan karakter,
            Bahasa Arab, dan kemandirian santri.
          </p>
        </section>

        {/* Satuan Pendidikan */}
        <nav aria-label="Satuan pendidikan">
          <h2 className="text-base font-bold text-emerald-400">
            Satuan Pendidikan
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {satuanPendidikan.map((s) => (
              <li key={s.nama}>
                <p className="font-semibold text-white">{s.nama}</p>
                <ul className="mt-1 space-y-1 pl-4">
                  {s.unit.map((u) => (
                    <li key={u.label}>
                      <Link href={u.href} className={linkClass}>
                        {u.label} »
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tautan */}
        <nav aria-label="Tautan">
          <h2 className="text-base font-bold text-emerald-400">Tautan</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {tautan.map((t) => (
              <li key={t.label}>
                <Link href={t.href} className={linkClass}>
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hubungi Kami */}
        <section>
          <h2 className="text-base font-bold text-emerald-400">Hubungi Kami</h2>
          <address className="mt-4 space-y-4 text-sm not-italic leading-relaxed text-emerald-100/80">
            <p>
              Jalan Raya Solo – Semarang Km. 45, Ds. Butuh, Kec. Tengaran, Kab.
              Semarang, 50775.{" "}
              <a
                href="https://maps.google.com/?q=Pesantren+Islam+Al+Irsyad+Tengaran"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Lihat maps
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Telp.</span>{" "}
              <a href="tel:+62298321658" className={linkClass}>
                (0298) 321658
              </a>
              <br />
              <span className="font-semibold text-white">WhatsApp</span>{" "}
              <a
                href="https://wa.me/6285747504750"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                0857 4750 4750
              </a>
            </p>
            <p>
              <a href="mailto:info@pesantrenalirsyad.org" className={linkClass}>
                info@pesantrenalirsyad.org
              </a>
            </p>
          </address>
        </section>
      </div>

      {/* Hak cipta */}
      <div className="border-t border-emerald-100/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-emerald-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Jl. Raya Solo - Semarang, Tengaran, Kabupaten Semarang, Jawa Tengah</p>
          <p>© 2026 Al-Irsyad Boarding School Tengaran. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}