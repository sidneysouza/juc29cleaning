import { CalendarCheck, Star } from 'lucide-react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-blue/60 z-10"></div>
      
      {/* Placeholder for Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: `url(${womanCleaning})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="text-brand-green font-bold tracking-widest text-xs uppercase mb-4 block">Clean your house now</span>
          <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-6">
            Cleaning services for your Home, Short Time Rentals and Office. Book in less than a minute.
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-lg">
            Your Satisfaction is our joy. Quote and schedule up your Professional Cleaning Service. It's fast, easy and online!
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="bg-brand-green p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <CalendarCheck size={48} className="text-brand-blue" />
            </div>
            <h3 className="text-2xl font-black text-brand-blue mb-4">BOOK NOW</h3>
            <div className="space-y-2 text-brand-blue/80 text-sm font-bold">
              <p>100% Guaranteed</p>
              <p>Bonded and Insured</p>
              <p>5 Stars Rated Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Float */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4 md:gap-12 px-4">
        <RatingCard label="5.0 Rating" />
        <RatingCard label="5.0 Rating" />
      </div>
    </section>
  );
};

const RatingCard = ({ label }: { label: string }) => (
  <div className="bg-white/95 p-4 rounded-xl shadow-lg flex items-center gap-4 border border-brand-blue/5">
    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
      <Star size={24} className="text-brand-blue fill-brand-blue" />
    </div>
    <div>
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} className="text-orange-400 fill-orange-400" />)}
      </div>
      <p className="text-xs font-black text-brand-blue uppercase">{label}</p>
    </div>
  </div>
);
