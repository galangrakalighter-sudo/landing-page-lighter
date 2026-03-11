import React from 'react';

const SectionHeader = ({ subtitle, title, centered = true }: { subtitle: string; title: string; centered?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Subtitle - Arial Black, No Italic */}
      <h2 className={`font-black text-white tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 opacity-80 ${arialStack}`}>
        {centered ? null : <span className="w-12 h-px bg-white/40"></span>}
        {subtitle}
      </h2>
      {/* Title - Arial Black, No Italic */}
      <h3 className={`font-black text-4xl md:text-6xl text-white tracking-normal uppercase leading-[0.95] ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const AboutLumineSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-32 bg-[#6B3BA7] relative overflow-hidden ${arialStack}`}>
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FEFFFF]/[0.02] pointer-events-none" />
      <div className="absolute -left-20 top-0 w-80 h-80 bg-white/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Gallery Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-16">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400" alt="Detail 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="h-44 rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" alt="Story" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-44 rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" alt="Story" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400" alt="Detail 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <SectionHeader subtitle="The Architecture" title="Creative Experience System." centered={false} />
            
            <div className="space-y-8">
              {/* Highlight Text - Arial Black, No Italic */}
              <p className={`font-black text-2xl md:text-3xl text-white leading-[1.1] tracking-normal mb-8 uppercase ${arialStack}`}>
                LUMINA adalah lebih dari sekadar penyelenggara. Kami adalah <span className="text-white/40">Arsitek Pengalaman</span> yang menghubungkan visi brand dengan detak jantung audiens
              </p>
              
              <div className="h-[2px] w-24 bg-white/20" />
              
              {/* Body Text - Arial Bold, No Italic */}
              <p className={`text-white/70 text-lg leading-relaxed font-bold ${arialStack}`}>
                Kami memfokuskan energi pada kekuatan <span className="text-white font-black">storytelling</span> dan rekayasa pengalaman sensorik. Setiap pencahayaan, sinkronisasi multimedia, hingga alur panggung dirancang untuk memicu emosi yang mendalam dan keterlibatan yang tulus
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutLumineSection;