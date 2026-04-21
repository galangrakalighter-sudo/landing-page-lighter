import React from 'react';
import Raddine from '@/assets/Raddine Branding.png'
export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-neutral-950 font-[Arial,Helvetica,sans-serif]">
    {/* Background Decor */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    </div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-4/5 xl:w-3/5 px-4 md:px-0">
          {/* Main Title - Responsive dari Mobile ke Desktop */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-black leading-[1] md:leading-[0.95] text-white tracking-tighter mb-6 uppercase font-[Arial,Helvetica,sans-serif]">
            Solusi Branding yang <span className="text-red-600">Menghasilkan</span> Penjualan, Bukan Sekadar Tampilan
          </h1>
          
          {/* Paragraph - Optimal untuk SEO dan Keterbacaan */}
          <h2 className="text-neutral-400 text-sm sm:text-base md:text-lg lg:text-3xl mb-10 max-w-2xl leading-relaxed font-medium tracking-tight font-[Arial,Helvetica,sans-serif]">
            Branding bukan sekadar visual, ini adalah strategi untuk membuat brand Anda diingat, dipercaya, dan dipilih oleh market
          </h2>
          
          {/* Button - Full width di mobile, auto di desktop */}
          <button 
            className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-red-600 text-white font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] active:scale-95 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-[Arial,Helvetica,sans-serif]"
            aria-label="Dapatkan Audit Branding Gratis"
          >
            <span className="relative z-10">Audit Branding Gratis</span>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <div className="lg:w-2/5 relative">
          <div className="aspect-[4/5] bg-neutral-900 border border-white/10 rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500">
            <img src={Raddine} alt="Gambar Radinne" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;