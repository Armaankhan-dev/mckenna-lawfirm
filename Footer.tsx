
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Gavel } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled || isMobileMenuOpen ? 'bg-primary/95 backdrop-blur-md py-3 shadow-xl border-b border-accent-gold/20' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-accent-gold p-2 rounded transform group-hover:rotate-12 transition-transform">
            <Gavel className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="font-heading text-2xl tracking-tighter text-white block leading-none">McKenna Laws</span>
            <span className="text-[10px] text-accent-gold font-bold tracking-[0.2em] uppercase">Florida Defense & Injury</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Practice Areas', 'Attorneys', 'Case Results', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-white font-medium text-sm uppercase tracking-widest hover:text-accent-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a 
            href="tel:1800MCKENNA" 
            className="flex items-center space-x-2 bg-accent-gold hover:bg-accent-warm text-white px-6 py-2.5 rounded-sm font-bold transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Phone size={18} />
            <span>(800) MCKENNA</span>
          </a>
        </div>

        {/* Mobile Toggle - Persistent and clear */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-[120]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-[100] transform transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-10 ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-10 select-none">
          <h1 className="text-[150px] font-heading leading-none">MENU</h1>
        </div>
        
        <div className="flex flex-col space-y-10 text-center relative z-10">
          {['Practice Areas', 'Attorneys', 'Case Results', 'Contact'].map((item, idx) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-white font-heading text-5xl md:text-7xl hover:text-accent-gold transition-all transform hover:scale-105"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </Link>
          ))}
          
          <div className="pt-12 space-y-6 w-full max-w-xs mx-auto">
             <a href="tel:1800MCKENNA" className="flex items-center justify-center space-x-4 bg-accent-gold text-white py-5 text-xl font-bold rounded shadow-2xl hover:bg-accent-warm transition-colors w-full">
               <Phone size={24} />
               <span>Call Us Now</span>
             </a>
             <Link to="/contact" className="flex items-center justify-center bg-white text-primary py-5 text-xl font-bold rounded shadow-xl hover:bg-gray-100 transition-colors w-full">
               Free Case Review
             </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 text-center">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">Florida Statewide Advocacy</p>
        </div>
      </div>
    </nav>
  );
};
