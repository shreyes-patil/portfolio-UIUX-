import React from 'react';
import { ChevronRight, ArrowDown, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial from-blue-100/40 to-transparent opacity-70 blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up opacity-0">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-blue-100 shadow-sm backdrop-blur-md">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">Open for Work 2026</span>
           </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold text-dark tracking-[-0.04em] mb-6 leading-[1.05] animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          Code that feels <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-intelligence animate-text-gradient">
            Human.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="mt-2 max-w-2xl mx-auto text-xl md:text-2xl text-secondary leading-relaxed font-medium tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          iOS Engineer specialized in building fluid, intuitive, and AI-integrated mobile experiences.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className="group relative flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-dark rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0071e3] to-[#00a8e3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1VHMEftO6itfCqUBXK_yJgQxTuOcWkFjx/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300 shadow-sm"
          >
            Resume
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Tech Stack Float */}
        <div className="mt-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
           <p className="text-[10px] text-secondary font-semibold mb-8 tracking-widest uppercase opacity-60">Trusted Stack</p>
           <div className="flex gap-10 justify-center items-center">
             {[
               { name: "Swift", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
               { name: "SwiftUI", img: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png" },
               { name: "CoreML", img: "https://developer.apple.com/assets/elements/icons/core-ml/core-ml-96x96_2x.png" },
               { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
             ].map((tech, i) => (
               <div key={i} className="group relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-apple-card flex items-center justify-center border border-slate-100 group-hover:shadow-glow transition-shadow duration-500">
                    <img src={tech.img} alt={tech.name} className="h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;