import React from 'react';

const ServicesScopeSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const services = [
    {
      title: "E-Commerce Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: ["Custom Online Store", "Headless Commerce", "Mobile-Optimized Store"]
    },
    {
      title: "Optimization & CRO",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      items: ["A/B Testing", "Funnel Optimization", "Checkout Simplification"]
    },
    {
      title: "Automation & Retention",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: ["Email Automation", "CRM Integration", "Retargeting Setup"]
    },
    {
      title: "Analytics & Tracking",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      items: ["GA Setup", "Conversion Tracking", "Performance Dashboard"]
    }
  ];

  return (
    <section className={`py-24 bg-[#FEFFFF] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-20">
          {/* Main Title - Arial Black */}
          <h2 className={`font-black text-4xl md:text-5xl text-slate-900 mb-6 uppercase tracking-normal ${arialStack}`}>
            Scope of <span className="text-[#00B288]">Revenue Engineering</span>
          </h2>
          {/* Description - Arial Bold */}
          <p className={`text-slate-600 max-w-2xl mx-auto text-lg font-bold ${arialStack}`}>
            Layanan komprehensif untuk memastikan setiap aspek e-commerce Anda menghasilkan profit secara sistematis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#00B288]/20 transition-all duration-500 group relative overflow-hidden">
              {/* Decorative background icon */}
              <div className="absolute -right-4 -top-4 text-slate-50 group-hover:text-[#00B288]/5 transition-colors duration-500 pointer-events-none">
                <div className="scale-[3] transform rotate-12">
                  {s.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#00B288] text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_20px_-5px_#00B288]">
                  {s.icon}
                </div>
                
                {/* Service Title - Arial Black */}
                <h3 className={`font-black text-2xl text-slate-900 mb-8 uppercase tracking-normal ${arialStack}`}>
                  {s.title}
                </h3>
                
                <ul className="space-y-5">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-600 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B288]/10 flex items-center justify-center group-hover/item:bg-[#00B288] transition-colors duration-300">
                        <svg className="w-3 h-3 text-[#00B288] group-hover/item:text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* List Item - Arial Bold */}
                      <span className={`font-black uppercase text-xs tracking-wider group-hover/item:text-slate-900 transition-colors ${arialStack}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesScopeSection;