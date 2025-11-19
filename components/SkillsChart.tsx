import React from 'react';
import { SKILLS } from '../constants';
import { Smartphone, Code, Cloud, Zap, Layers, Cpu } from 'lucide-react';

const SkillsChart: React.FC = () => {
  // Mapping icons to categories
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Smartphone className="w-8 h-8 text-white" />;
      case 1: return <Code className="w-8 h-8 text-blue-400" />;
      case 2: return <Cloud className="w-8 h-8 text-indigo-400" />;
      case 3: return <Cpu className="w-8 h-8 text-purple-400" />;
      default: return <Layers className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Technical <span className="text-[#86868b]">Specs.</span>
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl leading-relaxed">
             Engineered for performance. Built with a deep understanding of the Apple ecosystem and modern architecture patterns.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-6">
            
            {/* Card 1: Core Competencies (Large) */}
            <div className="col-span-1 md:col-span-4 bg-[#1d1d1f] rounded-[30px] p-8 md:p-10 hover:scale-[1.01] transition-transform duration-500 border border-white/5 shadow-2xl reveal delay-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Smartphone className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                             {getIcon(0)}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{SKILLS[0].name}</h3>
                        <p className="text-[#86868b] font-medium">The foundation of my engineering philosophy.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-10">
                        {SKILLS[0].skills.map(skill => (
                             <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/5">
                                 {skill}
                             </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Card 2: Performance Stat (Small) */}
            <div className="col-span-1 md:col-span-2 bg-[#0071e3] rounded-[30px] p-8 md:p-10 flex flex-col justify-center items-center text-center reveal delay-200 hover:scale-[1.02] transition-transform duration-500 shadow-glow">
                 <Zap className="w-12 h-12 text-white mb-4 opacity-80" />
                 <span className="text-6xl font-bold tracking-tighter mb-2">90<span className="text-4xl align-top">+</span></span>
                 <p className="text-blue-100 font-medium">FPS on AR/VR Scenes</p>
            </div>

            {/* Card 3: Languages (Tall) */}
            <div className="col-span-1 md:col-span-2 row-span-2 bg-[#1d1d1f] rounded-[30px] p-8 md:p-10 border border-white/5 reveal delay-300 hover:bg-[#2d2d2f] transition-colors duration-500 flex flex-col">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                    {getIcon(1)}
                </div>
                <h3 className="text-2xl font-bold mb-6">{SKILLS[1].name}</h3>
                <ul className="space-y-4 mt-auto">
                    {SKILLS[1].skills.map((skill, i) => (
                        <li key={skill} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                            <span className="font-medium text-gray-300">{skill}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Card 4: Tools (Wide) */}
            <div className="col-span-1 md:col-span-4 bg-[#1d1d1f] rounded-[30px] p-8 md:p-10 border border-white/5 reveal delay-400 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-white/10 transition-colors">
                 <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                            {getIcon(2)}
                        </div>
                        <h3 className="text-2xl font-bold">{SKILLS[2].name}</h3>
                    </div>
                    <p className="text-[#86868b] max-w-md">
                        Production-grade tooling for CI/CD, version control, and scalable backend integration.
                    </p>
                 </div>
                 <div className="flex flex-wrap gap-2 md:justify-end max-w-lg">
                    {SKILLS[2].skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-[#2d2d2f] text-gray-300 rounded-lg text-sm font-semibold border border-white/5">
                            {skill}
                        </span>
                    ))}
                 </div>
            </div>

            {/* Card 5: Specialized Tech (Medium) */}
            <div className="col-span-1 md:col-span-4 bg-[#1d1d1f] rounded-[30px] p-8 md:p-10 border border-white/5 reveal delay-500 group hover:scale-[1.01] transition-transform duration-500">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 bg-purple-500/10 rounded-2xl">
                         {getIcon(3)}
                    </div>
                    <div className="flex-1">
                         <h3 className="text-2xl font-bold mb-2">{SKILLS[3].name}</h3>
                         <p className="text-[#86868b] mb-6">Pushing the boundaries of what's possible on mobile hardware.</p>
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {SKILLS[3].skills.map(skill => (
                                <div key={skill} className="text-center p-3 bg-[#000] rounded-xl border border-white/10">
                                    <span className="text-sm font-semibold text-white">{skill}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsChart;