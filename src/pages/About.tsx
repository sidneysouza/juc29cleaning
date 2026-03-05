import { Users, Target, Heart, ShieldCheck } from 'lucide-react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const About = () => {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${womanCleaning})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-12 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-black uppercase mb-4">About Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dedicated to providing the highest quality cleaning services in Tampa and beyond.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl font-black text-brand-blue uppercase mb-8">At Juc29 Cleaning, we believe that a good cleaning can transform your home and relieve stress</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
               <p>As a local professional cleaning company based in Tampa, FL, we offer a wide range of cleaning services to suit any business and budget.</p><p>Our team is committed to earning your trust by always working with great care, as if it were our own home. We take great pride in solving problems and leaving you feeling calm and carefree.</p><p>We understand that every home and business has unique cleaning needs, which is why we offer personalized cleaning plans to meet your specific requirements. Whether you need a one-time deep clean or a regular cleaning schedule, we’re here to help.</p><p>If you have any questions or special requests, please don’t hesitate to contact us. We’re always happy to discuss our services and find the best solution for your cleaning needs.</p><p>Thank you for considering Juc29 Cleaning as your trusted cleaning partner. We look forward to hearing from you soon!</p>				
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-blue/5 p-8 rounded-3xl flex flex-col items-center text-center">
                <Users size={40} className="text-brand-green mb-4" />
                <h3 className="font-black text-brand-blue uppercase text-sm">Expert Team</h3>
              </div>
              <div className="bg-brand-green/10 p-8 rounded-3xl flex flex-col items-center text-center">
                <Target size={40} className="text-brand-blue mb-4" />
                <h3 className="font-black text-brand-blue uppercase text-sm">Reliable Results</h3>
              </div>
              <div className="bg-brand-green/10 p-8 rounded-3xl flex flex-col items-center text-center">
                <Heart size={40} className="text-brand-blue mb-4" />
                <h3 className="font-black text-brand-blue uppercase text-sm">Happy Clients</h3>
              </div>
              <div className="bg-brand-blue/5 p-8 rounded-3xl flex flex-col items-center text-center">
                <ShieldCheck size={40} className="text-brand-green mb-4" />
                <h3 className="font-black text-brand-blue uppercase text-sm">Insured Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-20">
          <div className="border-l-4 border-brand-green pl-8">
            <h3 className="text-2xl font-black uppercase mb-6 text-brand-green">Our Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To provide our clients with a clean, healthy, and stress-free environment through professional cleaning services that exceed expectations. We strive to empower our customers by giving them back their most valuable resource: time.
            </p>
          </div>
          <div className="border-l-4 border-brand-green pl-8">
            <h3 className="text-2xl font-black uppercase mb-6 text-brand-green">Our Vision</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To be the most trusted and sought-after cleaning service provider in our region, recognized for our commitment to quality, integrity, and social responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
