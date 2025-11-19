import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-32 pb-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center reveal">
        
        <h2 className="text-5xl md:text-7xl font-bold text-dark tracking-tighter mb-8">Let's build.</h2>
        <p className="text-secondary text-xl max-w-xl mx-auto mb-16 font-medium">
          Open to iOS & Full Stack opportunities. <br />
          <span className="text-primary">Boston, MA</span> or Remote.
        </p>

        <div className="flex justify-center gap-8 mb-20">
            {[
                { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: "Email" },
                { icon: Linkedin, href: `https://${CONTACT_INFO.linkedin}`, label: "LinkedIn" },
                { icon: Github, href: `https://${CONTACT_INFO.github}`, label: "GitHub" },
                { icon: Globe, href: `https://${CONTACT_INFO.website}`, label: "Website" }
            ].map((item) => (
                 <a 
                    key={item.label}
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-6 bg-[#f5f5f7] rounded-3xl hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2"
                >
                    <item.icon className="w-6 h-6 transition-colors" />
                </a>
            ))}
        </div>

        <div className="flex flex-col items-center pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm font-medium">
            Designed & Engineered by Shreyas H Patil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;