import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    category: "Mobile Application",
    title: "Fast Food Delivery App Design",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    color: "bg-red-50"
  },
  {
    category: "Web Application",
    title: "Project Management Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-dark-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
           <p className="text-[10px] font-bold text-primary-cyan uppercase tracking-[0.3em] mb-4">Our Work</p>
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white max-w-3xl leading-[0.9]">
             A Strategy Driven Tech <span className="text-primary-cyan">Collection</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Poster Designs */}
          <div className="space-y-16">
            <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center mb-8"
                >
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Poster Design - Journey Of Kindness (JOK)</h3>
                  <a href="#" className="text-primary-cyan text-sm flex items-center gap-1 hover:underline">
                    See all <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-2xl overflow-hidden aspect-[3/4] border border-dark-border"
                  >
                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600" alt="poster 1" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-2xl overflow-hidden aspect-[3/4] border border-dark-border"
                  >
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" alt="poster 2" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
            </div>
            
             <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center mb-8"
                >
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Dua Series Design</h3>
                  <a href="#" className="text-primary-cyan text-sm flex items-center gap-1 hover:underline">
                    See all <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-2xl overflow-hidden aspect-[3/4] border border-dark-border"
                  >
                    <img src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=600" alt="dua 1" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="rounded-2xl overflow-hidden aspect-[3/4] border border-dark-border"
                  >
                    <img src="https://images.unsplash.com/photo-1626806819102-3652d3a3d3a?auto=format&fit=crop&q=80&w=600" alt="dua 2" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
          </div>

          {/* Right Column - UI Design */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-center mb-8"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">UI Designs</h3>
              <a href="#" className="text-primary-cyan text-sm flex items-center gap-1 hover:underline">
                See all <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl overflow-hidden border-8 border-dark-border aspect-[9/16] shadow-2xl relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                alt="UI Portfolio" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">ImTechNow Protocol</h4>
                  <p className="text-primary-cyan">Premium SaaS Dashboard Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
