import React from 'react';

// Definisi Font Stack agar konsisten
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FF6600]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`${arialStack} text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);

const ProductionShowcaseSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#FF6600] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header diset light={true} agar teks menjadi putih di atas background orange */}
        <SectionHeader subtitle="Visuals" title="Production Showcase" light={true} />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26"
          ].map((img, i) => (
            <div key={i} className="relative aspect-square bg-white/10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={`${img}?auto=format&fit=crop&q=80&w=400`} 
                  alt="Showcase" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay transparan */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionShowcaseSection;