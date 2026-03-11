import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-5xl md:text-7xl lg:text-8xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.85] uppercase`}>
      {title}
    </h3>
  </div>
);

const MonetizationSystemSection = () => (
  <section className={`py-32 bg-white relative overflow-hidden ${arialStack}`}>
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <SectionHeader subtitle="Revenue Logic" title="Sistem Monetisasi Creator." />

      {/* Workflow Step - Arial Black */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-10">
        {['Audience Growth', 'Engagement', 'Brand Deal', 'Recurring Revenue'].map((step, i) => (
          <React.Fragment key={i}>
            <div className="group relative flex flex-col items-center text-center p-12 bg-white border border-slate-100 rounded-[50px] w-full lg:w-72 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(253,161,28,0.2)] transition-all duration-500 hover:-translate-y-2">
              {/* Number - Arial Black */}
              <span className="font-black text-6xl text-[#FDA11C] mb-6 tracking-tighter leading-none group-hover:scale-110 transition-transform">
                0{i + 1}
              </span>
              {/* Step Title - Arial Black */}
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 leading-snug">
                {step}
              </p>
              {/* Decorative Line */}
              <div className="absolute bottom-6 w-8 h-[3px] bg-slate-100 group-hover:w-16 group-hover:bg-[#FDA11C] transition-all duration-500 rounded-full"></div>
            </div>

            {/* Connecting Arrows / Lines */}
            {i < 3 && (
              <div className="flex items-center justify-center opacity-20">
                <div className="hidden lg:block w-12 h-[3px] bg-slate-400 rounded-full"></div>
                <div className="lg:hidden w-[3px] h-12 bg-slate-400 rounded-full"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Stat Cards - Arial Black */}
      <div className="mt-24 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Revenue Potential Card */}
        <div className="relative p-14 bg-[#FDA11C] rounded-[60px] text-white shadow-[0_40px_80px_-15px_rgba(253,161,28,0.4)] overflow-hidden group">
          <div className="relative z-10">
            <p className="font-black text-8xl md:text-9xl tracking-tighter mb-2 leading-none uppercase">3X</p>
            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white/70">Revenue Potential</p>
          </div>
        </div>

        {/* Brand Partnership Card */}
        <div className="relative p-14 bg-slate-900 rounded-[60px] text-white shadow-[0_40px_80px_-15px_rgba(15,23,42,0.4)] overflow-hidden group">
          <div className="relative z-10">
            <p className="font-black text-5xl md:text-6xl tracking-tighter mb-6 uppercase leading-none">Long-Term</p>
            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40">Brand Partnership</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MonetizationSystemSection;