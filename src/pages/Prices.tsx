import { Check, Info } from 'lucide-react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const Prices = () => {
  return (
    <div className="bg-white">
      {/* Prices Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${womanCleaning})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-12 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Pricing</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Transparent and competitive rates for a spotless home.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase mb-4">Standard Cleaning Rates</h2>
            <p className="text-gray-500">Prices may vary based on specific home conditions and frequency.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              tier="Small Home"
              range="Studio / 1-2 Bedrooms"
              price="Starting at $120"
              features={["Living Room & Kitchen", "Up to 2 Bathrooms", "Complete Dusting", "Floor Sanitization"]}
            />
            <PriceCard 
              tier="Medium Home"
              range="3-4 Bedrooms"
              highlighted={true}
              price="Starting at $180"
              features={["Up to 4 Bedrooms", "Up to 3 Bathrooms", "Full Deep Dusting", "Detailed Kitchen Clean", "Window Sills"]}
            />
            <PriceCard 
              tier="Large Home"
              range="5+ Bedrooms / Estate"
              price="Custom Quote"
              features={["Custom Scope", "Teams of 3+ Cleaners", "All Areas Included", "Priority Scheduling"]}
            />
          </div>

          {/* Pricing Info */}
          <div className="mt-20 bg-brand-blue/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
            <div className="bg-brand-blue p-4 rounded-2xl text-white">
              <Info size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black text-brand-blue uppercase mb-2">Want a more accurate estimate?</h3>
              <p className="text-gray-600">Our online booking system calculates the exact price based on your square footage and specific requirements. No surprises.</p>
            </div>
            <button className="md:ml-auto bg-brand-green text-brand-blue px-8 py-4 rounded-full font-black uppercase whitespace-nowrap hover:scale-105 transition-transform">
              Get an estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const PriceCard = ({ tier, range, price, features, highlighted = false }: { tier: string, range: string, price: string, features: string[], highlighted?: boolean }) => (
  <div className={`p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all ${highlighted ? 'bg-brand-blue text-white shadow-2xl scale-105 relative z-10' : 'bg-gray-50 text-brand-blue hover:bg-white hover:shadow-xl'}`}>
    {highlighted && (
      <div className="absolute -top-5 bg-brand-green text-brand-blue font-black text-xs px-4 py-2 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    <h3 className={`text-xl font-black uppercase mb-2 ${highlighted ? 'text-brand-green' : 'text-brand-blue'}`}>{tier}</h3>
    <p className={`text-sm mb-6 ${highlighted ? 'text-white/60' : 'text-gray-400'}`}>{range}</p>
    <div className="text-4xl font-black mb-8">{price}</div>
    <ul className="space-y-4 mb-10 w-full">
      {features.map((f, i) => (
        <li key={i} className="flex items-center justify-center gap-3 font-semibold text-sm">
          <Check size={16} className={highlighted ? 'text-brand-green' : 'text-brand-green'} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-black uppercase transition-all ${highlighted ? 'bg-brand-green text-brand-blue hover:bg-white' : 'bg-brand-blue text-white hover:bg-brand-green hover:text-brand-blue'}`}>
      Book This Pack
    </button>
  </div>
);
