import React from 'react';
import { Zap, Search, BarChart3, ArrowUpRight, Cog, Layers } from 'lucide-react';

const CaseStudySection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="case-study" className={`py-32 bg-white overflow-hidden ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* Decorative Background Glow */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#DAA059]/10 rounded-full blur-[100px] -z-10" />
          
          {/* Main Card */}
          <div className="bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] flex flex-col lg:flex-row border border-slate-50">
            
            {/* Left Content - Information Layer */}
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-24 relative">

              <h3 className={`font-black text-4xl md:text-6xl text-[#0F172A] mb-10 leading-[1] uppercase tracking-normal ${arialStack}`}>
                Enterprise <br />
                <span className="text-[#DAA059]">Workflow</span> <br />
                Automation
              </h3>
              
              <div className="space-y-10">
                <div className="grid gap-6">
                  {/* Challenge */}
                  <div className="group">
                    <h5 className={`font-black text-[11px] uppercase text-slate-400 mb-2 tracking-widest group-hover:text-[#0F172A] transition-colors ${arialStack}`}>The Challenge</h5>
                    <p className={`text-slate-600 text-base leading-relaxed max-w-sm font-bold ${arialStack}`}>
                      Proses manual yang repetitif menghambat <span className="text-[#0F172A]">output tim hingga 40%</span> dan meningkatkan resiko human error dalam input data.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="group">
                    <h5 className={`font-black text-[11px] uppercase text-[#DAA059] mb-2 tracking-widest ${arialStack}`}>The Solution</h5>
                    <p className={`text-slate-600 text-base leading-relaxed max-w-sm font-bold ${arialStack}`}>
                      Implementasi <span className="text-[#0F172A]">Sistem Otomasi End-to-End</span> yang mengintegrasikan seluruh database perusahaan ke dalam satu dashboard kendali.
                    </p>
                  </div>
                </div>

                {/* Metrics - High Impact */}
                <div className="flex gap-4 pt-4">
                  <div className="flex-1 p-6 bg-slate-50 rounded-[24px] border border-slate-100">
                    <div className={`font-black text-4xl text-[#0F172A] mb-1 ${arialStack}`}>85%</div>
                    <div className={`font-black text-[9px] text-slate-400 uppercase tracking-widest ${arialStack}`}>Manual Reduction</div>
                  </div>
                  
                  <div className="flex-1 p-6 bg-[#DAA059] rounded-[24px] shadow-xl shadow-[#DAA059]/20">
                    <div className={`font-black text-4xl text-white mb-1 ${arialStack}`}>3.2x</div>
                    <div className={`font-black text-[9px] text-white/70 uppercase tracking-widest ${arialStack}`}>Efficiency ROI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Section - Dark Industrial Preview */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative bg-[#0F172A]">
              <div className="relative z-10 w-full">
                {/* Automation Visual UI */}
                <div className="relative group">
                  <div className="absolute -inset-10 bg-[#DAA059]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-xl bg-[#DAA059] flex items-center justify-center">
                          <Cog className="w-5 h-5 text-[#0F172A] animate-spin-slow" />
                        </div>
                        <div className={`text-xs font-black text-white uppercase tracking-widest ${arialStack}`}>System Active</div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/40" />
                    </div>
                    
                    {/* Visualizing Data Streams */}
                    <div className="space-y-4">
                      {[75, 92, 60].map((width, i) => (
                        <div key={i} className="h-12 bg-white/5 rounded-2xl p-4 flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#DAA059] animate-pulse" />
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#DAA059] transition-all duration-1000" 
                              style={{ width: `${width}%` }} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Automated Stack Tags */}
                <div className="mt-16">
                  <div className={`text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 ${arialStack}`}>Core Automation Stack</div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {['N8N', 'PostgreSQL', 'Javascript'].map((tech) => (
                      <span key={tech} className={`font-black text-[12px] text-white/40 uppercase tracking-widest hover:text-[#DAA059] transition-colors cursor-default ${arialStack}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;