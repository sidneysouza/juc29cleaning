import { Clock, Facebook, Instagram, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full relative z-[60]">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs border-b border-white/10">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-brand-green" />
            <span>08:00AM - 05:00PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-brand-green" />
            <span>(813) 820-4929</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-brand-green" />
            <span>(727) 900-8730</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a href="https://www.facebook.com/juc29cleaning" target='_blank' className="hover:text-brand-green transition-colors" rel="noreferrer"><Facebook size={16} /></a>
          <a href="https://www.instagram.com/juc29cleaning/" target='_blank' className="hover:text-brand-green transition-colors" rel="noreferrer"><Instagram size={16} /></a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-3 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Logo" className="w-28 md:w-40 h-auto" />          
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium text-brand-blue">
          <li><Link to="/" className="hover:text-brand-green transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-brand-green transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
          <li><Link to="/prices" className="hover:text-brand-green transition-colors">Prices</Link></li>
          <li><Link to="/hiring" className="hover:text-brand-green transition-colors">We're Hiring</Link></li>
          <li><Link to="/faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-brand-green/80 text-brand-blue px-6 md:px-10 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm hover:bg-brand-green/90 transition-all shadow-md active:scale-95 uppercase">
            BOOK NOW
          </button>
          
          {/* Hamburger Icon */}
          <button 
            className="lg:hidden p-2 text-brand-blue hover:text-brand-green transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-brand-blue z-[70] transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo" className="w-32 brightness-0 invert" />
            </Link>
            <button className="text-white p-2" onClick={toggleMenu}>
              <X size={32} />
            </button>
          </div>
          
          <ul className="flex flex-col items-center gap-8 pt-16 text-2xl font-bold text-white uppercase tracking-widest">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">About</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">Services</Link></li>
            <li><Link to="/prices" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">Prices</Link></li>
            <li><Link to="/hiring" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">We're Hiring</Link></li>
            <li><Link to="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-green transition-colors focus:text-brand-green">FAQ</Link></li>
          </ul>

          <div className="mt-auto p-12 flex flex-col items-center gap-8">
            <button className="w-full bg-brand-green text-brand-blue py-4 rounded-full font-black text-lg shadow-2xl active:scale-95 uppercase">
              BOOK NOW
            </button>
            <div className="flex gap-8">
              <a href="https://www.facebook.com/juc29cleaning" target='_blank' rel="noreferrer" className="text-white hover:text-brand-green"><Facebook size={24} /></a>
              <a href="https://www.instagram.com/juc29cleaning/" target='_blank' rel="noreferrer" className="text-white hover:text-brand-green"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
