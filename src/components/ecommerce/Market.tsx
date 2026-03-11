const MarketplaceSection = () => {
  const marketplaces = [
    { 
      name: 'Shopee', 
      icon: <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zM12 15.5l-4 1.75 3.5-8.5h1l3.5 8.5-4-1.75z" />
    },
    { 
      name: 'Tokopedia', 
      icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v5h-4v2h4v3h2v-3h4v-2h-4z" />
    },
    { 
      name: 'TikTok Shop', 
      icon: <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-3.37 1.89-6.48 5.11-7.52.76-.24 1.56-.34 2.37-.31v4.03c-.31-.04-.62-.04-.93.01-1.21.14-2.31.96-2.73 2.1-.41 1.03-.23 2.27.46 3.14.7 1.01 1.91 1.61 3.15 1.55 1.25-.03 2.35-.78 2.87-1.9.23-.49.33-1.03.32-1.57.03-3.92.01-7.85.02-11.78z" />
    },
    { 
      name: 'Lazada', 
      icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21.35z" />
    },
    { 
      name: 'Shopify', 
      icon: <path d="M19.16 7.64L13.05 1c-.26-.26-.68-.26-.94 0l-6.1 6.64c-.2.22-.24.54-.11.8L8.74 15h6.52l2.84-6.56c.13-.26.09-.58-.14-.8zM12 18.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
    },
    { 
      name: 'WooCommerce', 
      icon: <path d="M22.02 12c0 5.52-4.48 10-10 10S2.02 17.52 2.02 12s4.48-10 10-10 10 4.48 10 10zm-11.05-3.5h-1.5v3h1.5v-3zm3 0h-1.5v5.5h1.5v-5.5zm-6 3h-1.5v4h1.5v-4zm9-3h-1.5v7h1.5v-7z" />
    }
  ];

  return (
    <section id="marketplaces" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[#00B288] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center justify-center gap-4 italic">
            <span className="w-12 h-px bg-[#00B288]"></span> Expertise Focus
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-20 uppercase italic leading-none text-center">
            AUTHORIZED <br /> <span className="text-slate-200 not-italic uppercase">PLATFORMS.</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {marketplaces.map((m, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-12 bg-[#FEFFFF] border border-[#00B288]/20 rounded-[40px] shadow-lg relative overflow-hidden text-center">
                 <div className="absolute top-3 left-3 text-[8px] font-black text-[#00B288]/30 uppercase tracking-widest leading-none">
                   Mod_0{i + 1}
                 </div>
                 
                 <div className="w-16 h-16 bg-[#00B288] rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg shadow-[#00B288]/20">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                     {m.icon}
                   </svg>
                 </div>
                 
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 leading-tight">
                   {m.name}
                 </span>
                 
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00B288]/20 rounded-t-full"></div>
              </div>
            ))}
          </div>
          
          <p className="mt-20 text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px] italic">
            Full Ecosystem Integration & Growth Optimization Strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;