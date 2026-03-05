import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import logo from '../assets/logo.png';

export const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Social Feed Placeholder Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
             <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center p-1 shadow-xl">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-brand-blue">Juc29 Cleaning</h3>
                <p className="text-gray-500 font-medium">✨ We are specialized in detailed cleaning</p>
                <p className="text-gray-500 font-medium">✨ We provide you rest, free time and health</p>
                <button className="mt-4 bg-[#3182ce] text-white px-8 py-1.5 rounded-lg font-bold text-sm hover:bg-[#2b6cb0] transition-colors shadow-lg">
                  Follow
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <FeedItem 
               image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               alt="Cleaning process 1"
             />
             <FeedItem 
               image="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               alt="Cleaning process 2"
             />
             <FeedItem 
               image="https://images.unsplash.com/photo-1556911220-e150240974ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               alt="Happy team"
             />
          </div>
        </div>
      </section>

      <Services />
      <Features />
    </>
  );
};

const FeedItem = ({ image, alt }: { image: string; alt: string }) => (
  <div className="aspect-square relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white">
     <img 
       src={image} 
       alt={alt} 
       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
     />
     <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);
