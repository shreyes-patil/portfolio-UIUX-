import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#1d1d1f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-20 reveal">What people say.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={t.id} className={`reveal delay-${index * 100} bg-[#2d2d2f] p-12 rounded-[32px] relative transition-transform duration-500 hover:scale-[1.01]`}>
              <div className="absolute top-12 left-12 text-6xl text-white/10 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl text-[#f5f5f7] font-medium leading-relaxed mb-10 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center font-bold text-white text-lg border border-white/10">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold tracking-wide">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;