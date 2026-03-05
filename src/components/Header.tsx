import { Clock, Facebook, Instagram, Phone } from 'lucide-react';

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
          <a href="https://www.facebook.com/juc29cleaning" target='_blank' className="hover:text-brand-green transition-colors"><Facebook size={14} /></a>
          <a href="https://www.instagram.com/juc29cleaning/" target='_blank' className="hover:text-brand-green transition-colors"><Instagram size={14} /></a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-md flex items-center justify-center text-white font-bold text-xl">
            J
          </div>
          <span className="font-bold text-brand-blue text-lg hidden sm:block">Juc29 Cleaning</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-blue">
          <li><a href="#" className="hover:text-brand-green transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-brand-green transition-colors">About</a></li>
          <li><a href="#" className="hover:text-brand-green transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-brand-green transition-colors">Prices</a></li>
          <li><a href="#" className="hover:text-brand-green transition-colors">We're Hiring</a></li>
          <li><a href="#" className="hover:text-brand-green transition-colors">FAQ</a></li>
        </ul>

        <button className="bg-brand-green text-brand-blue px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-green/90 transition-all shadow-md">
          BOOK NOW
        </button>
      </nav>
    </header>
  );
};
