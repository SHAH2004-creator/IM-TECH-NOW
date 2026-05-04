import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Laptop, Smartphone, Palette, Code } from 'lucide-react';

const allServices = [
  {
    title: "Software Development",
    description: "Engineering scalable, high-performance desktop and SaaS solutions tailored to your unique business logic.",
    icon: <Code className="w-6 h-6" />,
    tags: ["Mobile App Design", "Website Design", "Desktop App Design"]
  },
  {
    title: "Digital Strategy",
    description: "We help brands navigate the digital landscape with data-driven strategies and innovative technology.",
    icon: <Laptop className="w-6 h-6" />,
    tags: ["Market Analysis", "Brand Strategy", "Growth"]
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive digital interfaces where organic nature-inspired patterns meet modern user-centric design.",
    icon: <Palette className="w-6 h-6" />,
    tags: ["User Interface", "User Experience", "Responsive"]
  },
  {
    title: "App Development",
    description: "Building robust mobile applications that offer seamless user experiences across all platforms.",
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["iOS", "Android", "Cross-Platform"]
  }
];

export default function Services() {
  const [page, setPage] = useState(0); // 0 for "1-2", 1 for "3-4"
  const servicesPerPage = 2;
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] mb-4">ImTechNow — Services</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white max-w-2xl leading-[1.1]">
              An Innovation Driven <br /> Digital Agency
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-8 py-3 bg-dark-card border border-dark-border text-text-light text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-white hover:text-dark-navy transition-all uppercase tracking-widest whitespace-nowrap">
              View all <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={prevPage}
                disabled={page === 0}
                className={`w-12 h-12 rounded-lg border border-dark-border flex items-center justify-center transition-all ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:text-dark-navy text-white'}`}
                aria-label="Previous services"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <span className="text-sm font-bold text-white min-w-[40px] text-center tracking-tighter">
                {page === 0 ? '1 - 2' : '3 - 4'}
              </span>
              
              <button 
                onClick={nextPage}
                disabled={(page + 1) * servicesPerPage >= allServices.length}
                className={`w-12 h-12 rounded-lg bg-primary-cyan flex items-center justify-center text-dark-navy transition-all ${(page + 1) * servicesPerPage >= allServices.length ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:scale-105'}`}
                aria-label="Next services"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group p-10 bg-dark-card/40 border border-dark-border rounded-2xl hover:border-primary-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-cyan/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-dark-navy border border-dark-border rounded-xl flex items-center justify-center text-primary-cyan mb-8 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-cyan transition-colors">{service.title}</h3>
                  <p className="text-text-muted mb-10 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-dark-navy border border-dark-border text-[10px] uppercase font-bold text-primary-cyan/70 tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
