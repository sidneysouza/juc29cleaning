import { Clock, CreditCard, Star } from 'lucide-react';

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-4 uppercase">5 Star Customer Rated</h2>
          <div className="flex justify-center gap-1 mb-12">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} className="text-orange-400 fill-orange-400" />)}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Hayley Phillips" 
              date="2022-08-18" 
              text="JUC29 did an incredible job deep cleaning my home! They truly went above and beyond and paid attention to every detail. I will definitely be using them again."
            />
            <TestimonialCard 
              name="Jack Santana" 
              date="2022-07-11" 
              text="I use JUC29 Cleaning service for a long time. They are incredible. My house is always shiny and spotless after every cleaning. It's a cleaning service that everyone need."
            />
            <TestimonialCard 
              name="Ana Ferreira" 
              date="2022-07-09" 
              text="They were very prompt (came right on time) and did a fantastic cleaning service on my home. The owner was also very patient, respectful and very helpful. I will definitely use them again."
            />
          </div>
        </div>

        {/* Bag Illustration Section Placeholder */}
        <div className="bg-brand-green/20 rounded-3xl p-12 mb-20 flex flex-col items-center justify-center min-h-[500px] border border-brand-green/30 relative overflow-hidden group">
          <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl relative flex items-center justify-center p-8 transition-transform group-hover:scale-105 duration-500">
             <div className="w-full h-full border-4 border-dashed border-brand-green/20 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full"></div>
             </div>
             {/* Decorative Handle */}
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-24 border-8 border-brand-blue/10 rounded-t-full"></div>
          </div>
          <div className="mt-8 text-center max-w-2xl">
            <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">What we do</span>
            <h2 className="text-3xl font-black text-brand-blue uppercase">We Offer Different Services to Clean Your Area</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <ServiceIconCard 
            icon={<Clock size={40} className="text-brand-blue" />}
            title="Book in 60s"
            text="Get free online estimate selecting the size of your home, then select the date and time you'd like your professional to show up."
          />
          <ServiceIconCard 
            icon={<CreditCard size={40} className="text-brand-blue" />}
            title="Pay Online"
            text="We accept online payments. No cash, no checks! You get an email confirmation at the end of your booking."
          />
          <ServiceIconCard 
            icon={<Star size={40} className="text-brand-blue" />}
            title="We clean, You Relax"
            text="A certified cleaner comes over and cleans your place. You receive a receipt on your email when we leave your home."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, date, text }: { name: string; date: string; text: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-left hover:shadow-2xl transition-shadow">
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="text-orange-400 fill-orange-400" />)}
    </div>
    <p className="text-gray-600 italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-brand-blue rounded-full"></div>
      <div>
        <p className="font-bold text-brand-blue text-sm">{name}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  </div>
);

const ServiceIconCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="flex flex-col items-center">
    <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-brand-green/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-black text-brand-blue mb-4 uppercase">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{text}</p>
  </div>
);
