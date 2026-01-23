import React from 'react';
import { 
  Briefcase, Users, Star, ArrowUpRight, 
  Zap, Shield, Globe, Cpu, Rocket, BarChart3, 
  Layers, Hexagon, Component, Maximize
} from 'lucide-react';

const Client = () => {
  // 10 Klien dengan icon representatif untuk kesan lebih visual/modern
  const clients = [
    { name: "TechFlow", industry: "SaaS", icon: <Cpu className="w-8 h-8" /> },
    { name: "Globalize", industry: "Logistik", icon: <Globe className="w-8 h-8" /> },
    { name: "Innovate IQ", industry: "AI Research", icon: <Zap className="w-8 h-8" /> },
    { name: "Nexus Media", industry: "Marketing", icon: <BarChart3 className="w-8 h-8" /> },
    { name: "EcoSmart", industry: "Green Tech", icon: <Rocket className="w-8 h-8" /> },
    { name: "Velocity", industry: "Fintech", icon: <Shield className="w-8 h-8" /> },
    { name: "CloudScale", industry: "Cloud", icon: <Layers className="w-8 h-8" /> },
    { name: "DataVibe", industry: "Analytics", icon: <Hexagon className="w-8 h-8" /> },
    { name: "Zenith", industry: "E-commerce", icon: <Component className="w-8 h-8" /> },
    { name: "AeroJet", industry: "Aerospace", icon: <Maximize className="w-8 h-8" /> },
  ];

  const stats = [
    { label: "Klien Puas", value: "200+", detail: "Kepercayaan Global" },
    { label: "Proyek Selesai", value: "500+", detail: "Eksekusi Sempurna" },
    { label: "Rating", value: "4.9/5", detail: "Kepuasan Tertinggi" },
  ];

  return (
    <div id="client" className="bg-[#161616] text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Mesh Gradient Background Decor */}

      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        
        {/* Header Section - Modern Center Alignment */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Berkolaborasi Dengan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Raksasa Industri.
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Kami tidak hanya mengerjakan proyek; kami membangun ekosistem digital untuk merek-merek yang mendefinisikan masa depan.
          </p>
        </div>

        {/* Client Grid - Static & High Contrast */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0a0a0a] p-10 md:p-14 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Logo / Icon Area */}
              <div className="relative z-10 text-slate-500 group-hover:text-blue-500 transition-all duration-500 group-hover:scale-110">
                {client.icon}
              </div>
              
              <div className="mt-6 text-center relative z-10">
                <h3 className="text-sm font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors uppercase">
                  {client.name}
                </h3>
                <p className="text-[10px] text-slate-600 group-hover:text-blue-400/80 transition-colors mt-1 font-medium">
                  {client.industry}
                </p>
              </div>

              {/* Subtle Inner Shadow & Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Client;