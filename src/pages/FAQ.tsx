import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const FAQ = () => {
  return (
    <div className="bg-white">
      {/* FAQ Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${womanCleaning})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-12 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl text-white font-black uppercase mb-4">FAQ</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need to know about our cleaning services.
          </p>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
           <div className="flex items-center gap-4 mb-16 justify-center">
              <div className="bg-brand-green p-3 rounded-2xl text-brand-blue">
                 <HelpCircle size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase">Frequently Asked Questions</h2>
           </div>

           <div className="space-y-6">
              <FAQItem 
                question="Are you insured and bonded?" 
                answer="Yes! JUC29 Cleaning is fully insured and bonded. Your property and peace of mind are our top priorities. We take full responsibility for our professional team while they are on your premises."
              />
              <FAQItem 
                question="Do I need to be home for the cleaning?" 
                answer="Not at all. Many of our clients are at work or running errands during their cleaning appointments. You can provide us with a spare key, garage code, or make arrangements with a concierge. We ensure your home is locked and secure when we leave."
              />
              <FAQItem 
                question="What if I'm not satisfied with the cleaning?" 
                answer="Your satisfaction is our primary goal. If you're not completely happy with an area we've cleaned, please notify us within 24 hours, and we will send a team back to re-clean those specific areas at no additional cost."
              />
              <FAQItem 
                question="Do you provide the cleaning supplies?" 
                answer="We bring everything needed to make your home sparkling clean, including high-quality vacuums, microfiber cloths, and safe cleaning solutions. If you have specific products you'd prefer us to use, just let us know!"
              />
              <FAQItem 
                question="What is your cancellation policy?" 
                answer="We understand that schedules change. We ask for a 24-hour notice for any cancellations or rescheduling to avoid a fee, allowing us to offer the slot to another client on our waiting list."
              />
           </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 text-center text-brand-blue">
           <h3 className="text-2xl font-black uppercase mb-4">Still have questions?</h3>
           <p className="text-gray-500 mb-8 max-w-xl mx-auto">We're here to help you. Reach out to us via phone or email and we'll get back to you as soon as possible.</p>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue font-black">P</div>
                 <span className="font-bold">(813) 820-4929</span>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue font-black">E</div>
                 <span className="font-bold">support@juc29cleaning.com</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`overflow-hidden rounded-[2rem] transition-all duration-300 border ${isOpen ? 'bg-brand-blue text-white border-brand-blue shadow-2xl' : 'bg-gray-50 text-brand-blue border-transparent hover:bg-white hover:border-brand-blue/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between group"
      >
        <span className="text-xl font-black uppercase tracking-tight">{question}</span>
        <div className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-brand-green text-brand-blue' : 'bg-brand-blue text-brand-green group-hover:bg-brand-green group-hover:text-brand-blue'}`}>
           {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out px-8 ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className={`text-lg italic font-medium leading-relaxed ${isOpen ? 'text-white/80' : 'text-gray-500'}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};
