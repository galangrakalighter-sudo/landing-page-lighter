import React from 'react';
import { ArrowRight, Cpu, Database, Cloud } from 'lucide-react';

const HeroSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    // Jarak pt-28 dan pb-20 disamakan dengan referensi Anda
    <section className={`relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white ${arialStack}`}>
      
      {/* Background Gradients - Statis sesuai warna asli Hero 1 */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#ADE5F9]/20 to-transparent -z-10" />
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#ADE5F9]/10 rounded-full blur-[120px] -z-10" />

      {/* Kontainer disamakan menggunakan max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="lg:col-span-7">
            {/* Headline - Arial Black */}
            <h1 className={`font-black text-5xl md:text-7xl lg:text-[80px] text-[#0F172A] leading-[1.05] mb-8 uppercase tracking-normal ${arialStack}`}>
              Engineering <br />
              <span className="text-[#DAA059]">Scalable</span> <br />
              Digital Solutions
            </h1>
            
            {/* Subtitle - Arial Bold */}
            <p className={`text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-bold tracking-normal ${arialStack}`}>
              Lighter Tech membantu perusahaan membangun website, aplikasi, dan sistem digital yang <span className="text-[#0F172A] font-black underline decoration-[#ADE5F9] decoration-4 underline-offset-4">scalable, secure, dan future-ready</span> dengan standar engineering kelas dunia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Button - Arial Black */}
              <button className={`px-10 py-5 bg-[#DAA059] hover:bg-[#c48d4b] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(218,160,89,0.3)] flex items-center justify-center gap-3 ${arialStack}`}>
                Consult with Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Visual Card Section */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Glow Effect menggunakan warna asli */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#DAA059]/20 to-[#ADE5F9]/30 rounded-[40px] blur-2xl -z-10" />
              
              <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-2xl">
                {/* Window Bar */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${i === 1 ? 'bg-[#ADE5F9]/30 text-[#0F172A]' : 'bg-slate-50 text-slate-400'}`}>
                        {i === 1 ? <Cpu className="w-6 h-6" /> : i === 2 ? <Database className="w-6 h-6" /> : <Cloud className="w-6 h-6" />}
                      </div>
                      <div className="flex-1 space-y-2 text-left">
                        <div className={`h-2 rounded w-1/4 ${i === 1 ? 'bg-[#DAA059]' : 'bg-slate-200'}`} />
                        <div className="h-2 bg-slate-100 rounded w-full" />
                        <div className="h-2 bg-slate-50 rounded w-5/6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;