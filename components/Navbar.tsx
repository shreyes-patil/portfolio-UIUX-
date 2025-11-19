import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Specs', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-black/[0.03]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}>
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-[17px] font-semibold text-dark tracking-tight hover:opacity-70 transition-opacity">
              Shreyas Patil
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-[12px] font-medium text-dark/70 hover:text-dark transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className="bg-dark text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-primary transition-colors duration-300 shadow-lg shadow-black/5"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
         <div className="flex flex-col h-full pt-24 px-8 pb-10">
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-bold text-dark tracking-tight"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto">
               <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 text-center rounded-full text-lg font-semibold bg-primary text-white"
              >
                Get in touch
              </a>
            </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;