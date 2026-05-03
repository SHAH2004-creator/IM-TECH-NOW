import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Software Development",
    description: "Engineering scalable, high-performance desktop and SaaS solutions tailored to your unique business logic.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile App Design", "Website Design", "Desktop App Design"]
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive digital interfaces where organic nature-inspired patterns meet modern user-centric design.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800",
    tags: ["User Interface", "User Experience", "Responsive Design"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">ImTechNow — Services</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
              An Innovation Driven Digital Agency
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-black text-white rounded font-medium flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center hover:bg-primary-cyan hover:border-primary-cyan transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-primary-cyan rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border border-gray-100 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-4 bg-dark-navy text-white font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary-cyan group-hover:text-black transition-colors">
                  <span>Let's Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-primary-cyan w-6' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
