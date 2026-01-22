import React from 'react';

// Definisi tipe data untuk konten (Opsional jika ingin dibuat dinamis)
interface TermSection {
  id: number;
  title: string;
  content: string | React.ReactNode;
}

const TermsOfService: React.FC = () => {
  const lastUpdated: string = "20 Januari 2026";

  const sections: TermSection[] = [
    {
      id: 1,
      title: "Penerimaan Ketentuan",
      content: "Dengan mengakses dan menggunakan situs web ini, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda keberatan dengan poin mana pun, kami menyarankan untuk tidak melanjutkan penggunaan layanan kami."
    },
    {
      id: 2,
      title: "Hak Kekayaan Intelektual",
      content: "Seluruh konten yang tersedia di situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, dan gambar adalah milik sah perusahaan kami dan dilindungi oleh undang-undang hak cipta Indonesia dan internasional."
    },
    {
      id: 3,
      title: "Batasan Kewajiban",
      content: (
        <p>
          Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan layanan kami. 
          <span className="block mt-2 font-semibold">Layanan disediakan "AS IS" (sebagaimana adanya) tanpa jaminan apa pun.</span>
        </p>
      )
    },
    {
      id: 4,
      title: "Hukum yang Mengatur",
      content: "Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan di yurisdiksi pengadilan yang berwenang."
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm border border-gray-200 rounded-2xl p-8 md:p-12">
        
        {/* Header Section */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 italic">
            Terakhir diperbarui pada: <span className="text-gray-700 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-blue text-gray-600 mb-10">
          <p>
            Selamat datang di layanan kami. Syarat dan Ketentuan ini mengatur penggunaan situs web dan layanan yang kami sediakan. 
            Mohon baca dengan saksama sebelum Anda mulai menggunakan platform kami.
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} className="scroll-mt-20">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-3 text-blue-600 opacity-50">{section.id}.</span>
                {section.title}
              </h2>
              <div className="text-gray-600 leading-relaxed pl-7">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600">
            Hubungi tim kami melalui email di 
            <a href="mailto:admin@lightermediagroup.com" className="text-blue-600 hover:underline ml-1">
              admin@lightermediagroup.com
            </a>
          </p>
        </div>

        {/* Back to Top / Home Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            &larr; Kembali ke Beranda
          </button>
        </div>

      </div>
      
      {/* Footer Branding */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} PT Nama Perusahaan Anda. All rights reserved.
      </div>
    </div>
  );
};

export default TermsOfService;