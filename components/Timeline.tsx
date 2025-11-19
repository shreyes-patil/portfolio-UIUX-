import React from 'react';
import { EXPERIENCES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-dark tracking-tighter mb-20 text-center reveal">Experience.</h2>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`group relative reveal delay-${index * 100}`}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                 
                 {/* Left: Date */}
                 <div className="md:w-1/4 md:text-right md:pt-1">
                    <span className="text-sm font-bold text-secondary block">{exp.period}</span>
                 </div>

                 {/* Center Line (Visual) */}
                 <div className="hidden md:flex flex-col items-center self-stretch">
                    <div className="w-3 h-3 bg-primary rounded-full outline outline-4 outline-white z-10"></div>
                    <div className="w-px flex-1 bg-slate-200 my-2 group-last:hidden"></div>
                 </div>

                 {/* Right: Details */}
                 <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-dark tracking-tight mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-primary mb-4">{exp.company} <span className="text-slate-300 px-2">•</span> <span className="text-secondary text-base font-normal">{exp.location}</span></h4>
                    <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                        <li key={idx} className="text-secondary text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full">
                            {item}
                        </li>
                        ))}
                    </ul>
                 </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;