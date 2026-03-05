import { Search, Star, ShieldCheck, Clock, CreditCard, MessageSquare } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-20 bg-brand-blue text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-4 block">Why choose us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
              We provide for people rest, free time and health
            </h2>
            <p className="text-lg text-white/80 mb-12">
              We have a highly trained team to ensure your satisfaction is guaranteed. Flexible hours, competitive prices and fast scheduling are some of our differentials.
            </p>
          </div>
          
          <div className="relative">
             <div className="bg-white/10 rounded-3xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cleaning professional" 
                  className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-brand-green p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce">
                <Star size={32} className="text-brand-blue fill-brand-blue" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          <FeatureItem 
            icon={<Search size={24} className="text-brand-green" />}
            title="Saves you time"
            text="Online estimate form with upfront, fair pricing, no surprises. Easy cleaning packs you can choose from."
          />
          <FeatureItem 
            icon={<Star size={24} className="text-brand-green" />}
            title="Only the best quality"
            text="Our skilled professionals go above and beyond on every job. Thorough checklist different for each service."
          />
          <FeatureItem 
            icon={<ShieldCheck size={24} className="text-brand-green" />}
            title="Safety first"
            text="We rigorously vet all of our Cleaners, who undergo identity checks as well as in-person interviews."
          />
          <FeatureItem 
            icon={<Clock size={24} className="text-brand-green" />}
            title="Easy to get help"
            text="Select your ZIP code, number of bedrooms and bathrooms, date and relax while we take care of your home."
          />
          <FeatureItem 
            icon={<CreditCard size={24} className="text-brand-green" />}
            title="Cash-free payment"
            text="Pay securely online only when the cleaning is complete. No cash or checks."
          />
          <FeatureItem 
            icon={<MessageSquare size={24} className="text-brand-green" />}
            title="Seamless communication"
            text="Online communication makes it easy for you to stay in touch with your Cleaners."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-black text-white mb-4 uppercase">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed max-w-xs">{text}</p>
  </div>
);
