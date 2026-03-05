import { CheckCircle2, Home, Building2, Paintbrush, MoveHorizontal } from 'lucide-react';
import womanCleaning from '../assets/woman-cleaning.jpg';

export const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Services Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${womanCleaning})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-12 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Our Services</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <ServiceDetail 
              icon={<Home className="text-brand-green" size={40} />}
              title="Residential Cleaning"
              description="A thorough cleaning of your entire home, covering bedrooms, bathrooms, kitchen, and living areas. Perfect for busy families."
              items={["Dusting & Wiping", "Vacuuming & Mopping", "Kitchen Sanitization", "Bathroom Deep Clean"]}
            />
            <ServiceDetail 
              icon={<Building2 className="text-brand-green" size={40} />}
              title="Office Cleaning"
              description="Maintain a professional and healthy workspace for your team. We handle desks, common areas, and restrooms with care."
              items={["Desk Disinfection", "Trash Removal", "Restroom Sanitization", "Floor Maintenance"]}
            />
            <ServiceDetail 
              icon={<MoveHorizontal className="text-brand-green" size={40} />}
              title="Move-In / Move-Out"
              description="Make your transition seamless. We ensure the property is spotless for the next occupants or ready for your arrival."
              items={["Inside Cabinets & Drawers", "Deep Oven & Fridge Clean", "Wall Spot Cleaning", "Baseboard Detailing"]}
            />
            <ServiceDetail 
              icon={<Paintbrush className="text-brand-green" size={40} />}
              title="Deep Cleaning"
              description="For homes that need extra attention. We go into every nook and cranny to remove built-up grime and dust."
              items={["Behind Appliances", "Vent Grills", "Detailed Baseboards", "Full Scale Disinfection"]}
            />
          </div>
        </div>
      </section>

      {/* Why Our Services? */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-16">The JUC29 Standard</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-brand-green uppercase">Certified Staff</h3>
              <p className="text-white/70">Every cleaner is rigorously trained and verified for your peace of mind.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-brand-green uppercase">Eco-Friendly</h3>
              <p className="text-white/70">We use safe, non-toxic products that are effective yet gentle on your space.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-brand-green uppercase">Guaranteed</h3>
              <p className="text-white/70">Not satisfied? We'll come back and re-clean at no extra cost to you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceDetail = ({ icon, title, description, items }: { icon: React.ReactNode, title: string, description: string, items: string[] }) => (
  <div className="group p-8 lg:p-12 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-8">{icon}</div>
    <h3 className="text-2xl font-black text-brand-blue uppercase mb-4">{title}</h3>
    <p className="text-gray-600 mb-8 text-lg">{description}</p>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-brand-blue font-semibold">
          <CheckCircle2 size={18} className="text-brand-green shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
