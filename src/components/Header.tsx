import { Clock, Facebook, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs border-b border-white/10">
        <div className="flex items-center gap-6 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-green" />
            <span>08:00AM - 05:00PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-green" />
            <span>(813) 820-4929</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-green" />
            <span>(727) 900-8730</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/juc29cleaning" target='_blank' className="hover:text-brand-green transition-colors" rel="noreferrer"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/juc29cleaning/" target='_blank' className="hover:text-brand-green transition-colors" rel="noreferrer"><Instagram size={18} /></a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="w-40 h-auto" />          
        </Link>
        
        <ul className="hidden md:flex items-center gap-10 text-xl font-medium text-brand-blue">
          <li><Link to="/" className="hover:text-brand-green transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-brand-green transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
          <li><Link to="/prices" className="hover:text-brand-green transition-colors">Prices</Link></li>
          <li><Link to="/hiring" className="hover:text-brand-green transition-colors">We're Hiring</Link></li>
          <li><Link to="/faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
        </ul>

        <button className="bg-brand-green/80 text-brand-blue px-10 py-3 rounded-full font-bold text-sm hover:bg-brand-green/90 transition-all shadow-md active:scale-95 uppercase">
          BOOK NOW
        </button>
      </nav>
    </header>
  );
};
