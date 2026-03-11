import React from 'react';
import { 
  Monitor, 
  Code2, 
  Smartphone, 
  Layout, 
  Bot, 
  Zap 
} from 'lucide-react';

const ServicesSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const services = [
    { 
      title: "Website Development", 
      icon: <Monitor className="w-8 h-8" />, 
      desc: "Custom web development focused on speed, aesthetics, and high conversion rates" 
    },
    { 
      title: "Web App Development", 
      icon: <Code2 className="w-8 h-8" />, 
      desc: "Scalable SaaS and enterprise web applications with complex functional requirements" 
    },
    { 
      title: "Artificial Intelligence", 
      icon: <Bot className="w-8 h-8" />, 
      desc: "Implementing LLMs, predictive modeling, and AI-driven insights to automate decision making" 
    },
    { 
      title: "Automation Systems", 
      icon: <Zap className="w-8 h-8" />, 
      desc: "End-to-end workflow automation and API integrations to eliminate manual bottlenecks" 
    },
    { 
      title: "UI/UX Design", 
      icon: <Layout className="w-8 h-8" />, 
      desc: "User-centric design systems that ensure seamless and intuitive digital experiences" 
    },
    { 
      title: "Mobile App Development", 
      icon: <Smartphone className="w-8 h-8" />, 
      desc: "High-performance native and cross-platform mobile solutions for iOS and Android" 
    }
  ];

  return (
    <section id="services" className={`py-32 bg-[#FEFFFF] relative overflow-hidden ${arialStack}`}>
      {/* Top Border Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA059]/20 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Badge Style - Arial Black */}
          <h2 className={`font-black text-[#DAA059] tracking-[0.3em] uppercase text-xs mb-4 ${arialStack}`}>
            Core Technology Services
          </h2>
          {/* Main Title - Arial Black */}
          <h3 className={`font-black text-4xl md:text-6xl text-slate-900 uppercase tracking-normal ${arialStack}`}>
            Precision <span className="text-[#DAA059]">Engineering</span>
          </h3>
          <div className="w-24 h-1.5 bg-[#DAA059] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i}
              className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(218,160,89,0.15)] transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#DAA059]/5 flex items-center justify-center text-[#DAA059] group-hover:bg-[#DAA059] group-hover:text-white transition-all duration-500 shadow-inner">
                {s.icon}
              </div>

              {/* Title - Arial Black */}
              <h4 className={`font-black text-2xl text-slate-900 mt-8 mb-4 group-hover:text-[#DAA059] transition-colors uppercase tracking-normal ${arialStack}`}>
                {s.title}
              </h4>

              {/* Description - Arial Bold */}
              <p className={`text-slate-500 leading-relaxed text-sm font-bold tracking-normal ${arialStack}`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;