import { Instagram, Facebook, Phone, Mail, MapPin, CreditCard, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-2xl shadow-xl">
                J
              </div>
              <span className="font-bold text-white text-xl">Juc29 Cleaning</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              We treat your home and business as if they were our own.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl font-black text-brand-green">(727) 900-8730</h3>
            <h3 className="text-4xl font-black text-brand-green">(813) 820-4929</h3>
            <p className="text-white/80 font-semibold italic">support@juc29cleaning.com</p>
            <p className="text-white/60">Tampa, FL</p>
            <button className="bg-brand-green text-brand-blue px-8 py-4 rounded-xl font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
              <CreditCard size={20} />
              BUY A GIFT CARD
            </button>
          </div>
        </div>

        {/* Google Reviews Badge Placeholder */}
        <div className="flex flex-col items-center md:items-end mb-12">
           <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                 <Star size={24} className="text-brand-blue fill-brand-blue" />
              </div>
              <div>
                 <p className="font-black text-xs uppercase">Google Customer Reviews</p>
                 <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={10} className="text-orange-400 fill-orange-400" />)}
                 </div>
              </div>
           </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest">
            Copyright © 2023 JUC29 GROUP, Inc - All rights reserved. <span className="text-brand-green font-bold">STAN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
