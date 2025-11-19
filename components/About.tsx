import React from 'react';
import { RESUME_SUMMARY } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">About</span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tighter mb-8">Designed for impact.</h2>
                <p className="text-lg text-secondary leading-relaxed mb-6">
                    {RESUME_SUMMARY}
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                    Currently pursuing a Master of Science in Information Systems at Northeastern University (Boston, MA), graduating December 2025.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal delay-200">
                <div className="bg-[#f5f5f7] p-10 rounded-[32px] text-center flex flex-col justify-center aspect-square">
                    <span className="block text-5xl md:text-6xl font-bold text-dark mb-2 tracking-tighter">3+</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Years Exp</span>
                </div>
                <div className="bg-[#f5f5f7] p-10 rounded-[32px] text-center flex flex-col justify-center aspect-square">
                    <span className="block text-5xl md:text-6xl font-bold text-dark mb-2 tracking-tighter">5+</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Projects</span>
                </div>
                <div className="bg-[#f5f5f7] p-10 rounded-[32px] text-center col-span-2">
                    <span className="block text-5xl md:text-6xl font-bold text-dark mb-2 tracking-tighter">40%</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Avg. Performance Gain</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;