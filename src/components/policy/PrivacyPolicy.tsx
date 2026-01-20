import React from 'react';

interface PolicySection {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

const PrivacyPolicy: React.FC = () => {
  const lastUpdated: string = "20 Januari 2026";

  const policies: PolicySection[] = [
    {
      id: "informasi-kami-kumpulkan",
      title: "Informasi yang Kami Kumpulkan",
      content: (
        <>
          <p>Kami mengumpulkan informasi untuk memberikan layanan yang lebih baik kepada semua pengguna kami. Jenis informasi yang kami kumpulkan meliputi:</p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li><strong>Informasi Identitas Pribadi:</strong> Nama, alamat email, dan nomor telepon saat Anda mendaftar.</li>
            <li><strong>Data Log:</strong> Alamat IP, jenis peramban, dan halaman yang Anda kunjungi.</li>
            <li><strong>Cookies:</strong> Data kecil yang disimpan di perangkat Anda untuk meningkatkan pengalaman navigasi.</li>
          </ul>
        </>
      )
    },
    {
      id: "penggunaan-informasi",
      title: "Bagaimana Kami Menggunakan Informasi",
      content: "Informasi yang kami kumpulkan digunakan untuk mengelola akun Anda, memproses transaksi, mengirimkan pembaruan layanan, dan mencegah aktivitas penipuan. Kami tidak akan menjual informasi pribadi Anda kepada pihak ketiga."
    },
    {
      id: "keamanan-data",
      title: "Keamanan Data",
      content: "Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang dirancang untuk melindungi keamanan informasi pribadi apa pun yang kami proses. Namun, perlu diingat bahwa transmisi internet tidak pernah 100% aman."
    },
    {
      id: "hak-anda",
      title: "Hak-Hak Anda",
      content: "Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi yang kami miliki tentang Anda. Anda dapat melakukan ini melalui pengaturan akun atau dengan menghubungi tim dukungan kami secara langsung."
    }
  ];

  return (
    <div className="bg-[#F3F4F6] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        
        {/* Dekorasi Atas */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        <div className="p-8 md:p-16">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center text-sm text-gray-500 bg-blue-50 w-fit px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Terakhir diperbarui: {lastUpdated}
            </div>
          </header>

          {/* Intro */}
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Privasi Anda sangat penting bagi kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
            menggunakan, dan melindungi data Anda saat Anda menggunakan layanan kami.
          </p>

          {/* Konten Utama */}
          <div className="space-y-12">
            {policies.map((policy) => (
              <section key={policy.id} id={policy.id} className="group">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {policy.title}
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  {policy.content}
                </div>
              </section>
            ))}
          </div>

          {/* Kontak & Penutup */}
          <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pertanyaan & Keluhan</h3>
            <p className="text-gray-600">
              Jika Anda memiliki kekhawatiran mengenai privasi data Anda, silakan hubungi petugas perlindungan data kami di:
            </p>
            <p className="mt-4 font-semibold text-indigo-600">
              privacy@lightermediagroup.com
            </p>
          </div>

          <div className="mt-12 flex justify-between items-center border-t pt-8">
            <button 
              onClick={() => window.history.back()}
              className="text-gray-500 hover:text-gray-800 font-medium transition-colors"
            >
              &larr; Kembali
            </button>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Lighter Media Group.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;