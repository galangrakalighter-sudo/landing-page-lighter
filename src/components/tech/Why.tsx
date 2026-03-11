import React from 'react';
import { Code2, Layers, CheckCircle2, Lock } from 'lucide-react';

const WhyUsSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const points = [
    { 
      title: "Scalable Architecture", 
      icon: <Layers className="w-7 h-7" />, 
      desc: "Sistem yang kami bangun dirancang untuk menangani pertumbuhan pengguna dari ribuan hingga jutaan tanpa hambatan" 
    },
    { 
      title: "Clean & Maintainable Code", 
      icon: <Code2 className="w-7 h-7" />, 
      desc: "Kami mengikuti standar dokumentasi dan coding clean-code internasional agar sistem mudah dikembangkan di masa depan" 
    },
    { 
      title: "Secure by Design", 
      icon: <Lock className="w-7 h-7" />, 
      desc: "Enkripsi tingkat lanjut dan audit keamanan berkala adalah bagian tak terpisahkan dari setiap produk yang kami rilis" 
    },
    { 
      title: "Technical Partnership", 
      icon: <CheckCircle2 className="w-7 h-7" />, 
      desc: "Kami bukan sekadar vendor, melainkan partner teknologi yang mendukung operasional Anda hingga jangka panjang" 
    }
  ];

  return (
    <section id="why-us" className={`py-32 bg-slate-50 ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          {/* Badge - Arial Black */}
          <h2 className={`font-black text-[#DAA059] tracking-[0.3em] uppercase text-xs mb-4 ${arialStack}`}>
            Why Lighter Tech
          </h2>
          {/* Title - Arial Black */}
          <h3 className={`font-black text-4xl md:text-5xl text-[#0F172A] leading-[1.1] uppercase tracking-normal ${arialStack}`}>
            Engineering <br /> Excellence for <br />
            <span className="text-[#DAA059]">Better Digital Outcomes</span>
          </h3>
          <div className="w-20 h-1.5 bg-[#DAA059] mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col sm:flex-row gap-8 p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#DAA059]/20 transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-[24px] bg-[#DAA059]/5 text-[#DAA059] flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAA059] group-hover:text-white transition-all duration-500">
                {p.icon}
              </div>

              <div>
                {/* Title - Arial Black */}
                <h4 className={`font-black text-xl text-[#0F172A] mb-4 uppercase tracking-normal group-hover:text-[#DAA059] transition-colors ${arialStack}`}>
                  {p.title}
                </h4>
                {/* Description - Arial Bold */}
                <p className={`text-slate-500 text-sm leading-relaxed font-bold ${arialStack}`}>
                  {p.desc}
                </p>
                
                {/* Decorative Line */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#DAA059] mt-6 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;