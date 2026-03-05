import { Briefcase, MapPin, DollarSign, Send } from 'lucide-react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const Hiring = () => {
  return (
    <div className="bg-white">
      {/* Hiring Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${womanCleaning})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-12 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">We're Hiring</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join the most professional cleaning team in Tampa. Grow with us.
          </p>
        </div>
      </section>

      {/* Why Join Us? */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-black text-brand-blue uppercase mb-8">Why work at JUC29?</h2>
                <div className="space-y-8">
                   <BenefitItem 
                      icon={<DollarSign className="text-brand-green" size={28} />}
                      title="Competitive Pay"
                      text="We offer one of the best rates in the industry, plus great tips from satisfied regular clients."
                   />
                   <BenefitItem 
                      icon={<Briefcase className="text-brand-green" size={28} />}
                      title="Flexible Hours"
                      text="Plan your work around your life. We offer morning, afternoon, and full-day shifts."
                   />
                   <BenefitItem 
                      icon={<MapPin className="text-brand-green" size={28} />}
                      title="Local Work"
                      text="All our clients are centrally located in the Tampa area, reducing your travel time."
                   />
                </div>
             </div>
             <div className="bg-brand-blue p-10 lg:p-16 rounded-[3rem] text-white">
                <h3 className="text-3xl font-black uppercase mb-6">Requirements</h3>
                <ul className="space-y-6 mb-12">
                   <li className="flex gap-4">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0 mt-1">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-semibold italic">Cleaning experience preferred but not required.</p>
                   </li>
                   <li className="flex gap-4">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0 mt-1">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-semibold italic">Own transportation and valid driver's license.</p>
                   </li>
                   <li className="flex gap-4">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0 mt-1">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-semibold italic">Punctuality and professional attitude.</p>
                   </li>
                   <li className="flex gap-4">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0 mt-1">
                         <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      </div>
                      <p className="text-white/80 font-semibold italic">Background check required.</p>
                   </li>
                </ul>
                <button className="w-full bg-brand-green text-brand-blue py-5 rounded-2xl font-black uppercase flex items-center justify-center gap-3 hover:scale-105 transition-transform group">
                   Apply Now 
                   <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex gap-6">
     <div className="bg-brand-blue/5 p-4 rounded-2xl shrink-0 mt-1 text-brand-green font-black">
        {icon}
     </div>
     <div>
        <h4 className="text-xl font-bold text-brand-blue uppercase mb-2">{title}</h4>
        <p className="text-gray-500">{text}</p>
     </div>
  </div>
);
