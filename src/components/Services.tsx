import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Laptop, Smartphone, Palette, Code } from 'lucide-react';

const allServices = [
  {
    title: "Software Development",
    description: "Engineering scalable, high-performance desktop and SaaS solutions tailored to your unique business logic.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile App Development", "Website Development", "Desktop App Development"],
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, aesthetic, and user-centric interfaces that drive engagement and business growth.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    tags: ["User Interface", "User Experience", "Responsive Design & Wireframing"],
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Videography & Editing",
    description: "Professional video production and motion graphics to tell your brand's story effectively.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    tags: ["Motion Graphics", "Islamic Editing", "Videography & Video Editing"],
    icon: <Smartphone className="w-6 h-6" />
  }
];

export default function Services() {
  const [page, setPage] = useState(0); 
  const servicesPerPage = 3;
  const currentServices = allServices.slice(page * servicesPerPage, (page + 1) * servicesPerPage);

  const nextPage = () => {
    if ((page + 1) * servicesPerPage < allServices.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-dark-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <p className="text-[10px] font-poppins font-bold text-text-muted uppercase tracking-[0.3em] mb-4">ImTechNow — Services</p>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-white max-w-2xl leading-[1.1]">
              An Innovation Driven <br /> Digital Agency
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-8 py-4 bg-white text-[#101820] text-sm font-poppins font-bold rounded-lg flex items-center gap-2 hover:bg-primary-cyan transition-all uppercase tracking-widest whitespace-nowrap group">
              View all <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="hidden md:block w-px h-10 bg-dark-border/50" />
            
            <div className="flex items-center gap-4">
              <button 
                onClick={prevPage}
                className={`w-12 h-12 rounded-lg bg-primary-cyan flex items-center justify-center text-[#101820] transition-all hover:scale-105 active:scale-95`}
                aria-label="Previous services"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <span className="text-sm font-poppins font-bold text-text-muted min-w-[40px] text-center tracking-tighter">
                {page === 0 ? '1 - 3' : '4 - 6'}
              </span>
              
              <button 
                onClick={nextPage}
                className={`w-12 h-12 rounded-lg bg-primary-cyan flex items-center justify-center text-[#101820] transition-all hover:scale-105 active:scale-95`}
                aria-label="Next services"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-dark-border/20"
              >
                {/* Top Half: Image */}
                <div className="relative h-[240px] overflow-hidden bg-dark-card">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-primary-cyan border border-white/20">
                    {service.icon}
                  </div>
                </div>

                {/* Bottom Half: Content */}
                <div className="flex-1 p-8 bg-dark-card flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">{service.title}</h3>
                  <p className="text-text-muted mb-8 leading-relaxed text-sm font-poppins">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-primary-cyan/30 text-[9px] uppercase font-bold text-primary-cyan tracking-wider rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] group/btn w-fit">
                    <span className="relative">
                      Let's Visit
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all group-hover/btn:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-cyan transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
