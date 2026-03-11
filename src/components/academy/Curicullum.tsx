import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const CurriculumSection = () => (
  <section className={`py-24 bg-white overflow-hidden ${arialStack}`}>
    <div className="container mx-auto max-w-7xl px-6">
      <SectionHeader subtitle="The Journey" title="Structured Learning Path." />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative py-10">
        {/* Progress Line - Dipertebal agar lebih terlihat industrial */}
        <div className="absolute top-[40px] lg:top-1/2 left-0 w-[2px] lg:w-full h-full lg:h-[4px] bg-gradient-to-b lg:bg-gradient-to-r from-[#010050]/5 via-[#010050]/20 to-[#010050]/5 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 z-0 hidden md:block"></div>
        
        {[
          { level: "Beginner", desc: "Fundamental & Tools Mastery" },
          { level: "Intermediate", desc: "Advanced Workflow & Logic" },
          { level: "Advanced", desc: "Complex Project Execution" },
          { level: "Professional", desc: "Industry Portfolio & Certification" }
        ].map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center group w-full lg:w-auto">
            {/* Step Number - Arial Black */}
            <div className={`${arialStack} w-20 h-20 rounded-[28px] border-4 font-black flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl 
              ${i === 2 
                ? 'bg-[#010050] border-[#010050] text-white' 
                : 'bg-white border-[#010050]/10 text-[#010050]'
              }`}>
              0{i + 1}
            </div>

            {/* Level Title - Arial Black */}
            <h4 className={`${arialStack} text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter transition-colors duration-300
              ${i === 2 ? 'text-[#010050]' : 'text-slate-400 group-hover:text-[#010050]'}`}>
              {step.level}
            </h4>

            {/* Description - Arial Black (Small) */}
            <p className={`${arialStack} text-[9px] font-black text-slate-400 group-hover:text-slate-600 uppercase tracking-[0.2em] text-center max-w-[160px] leading-tight transition-colors`}>
              {step.desc}
            </p>

            {/* Indicator Dot (Mobile) */}
            <div className={`w-3 h-3 rounded-full mt-4 lg:hidden ${i === 2 ? 'bg-[#010050]' : 'bg-slate-200'}`}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;