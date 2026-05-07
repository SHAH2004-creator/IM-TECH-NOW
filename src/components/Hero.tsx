import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-40 pb-24 overflow-hidden bg-dark-navy">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[18px] font-poppins font-medium text-primary-cyan mb-6"
            >
              Precision Design. Scalable Code. SaaS Excellence.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[64px] font-heading font-black tracking-tight leading-[1.1] mb-8 text-white max-w-2xl"
            >
              Building the Next Generation <br /> 
              of <span className="text-primary-cyan">Digital</span> Experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] font-poppins font-medium text-white mb-10 leading-relaxed max-w-xl"
            >
              We empower businesses through custom software development, intuitive UI/UX design, and robust SaaS solutions tailored for growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <button className="w-[160px] h-[48px] bg-primary-cyan text-[#101820] font-poppins font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-primary-cyan/20">
                <span className="text-[16px]">Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex flex-wrap gap-3"
            >
               {["Mobile App Development", "Website Development", "SaaS Products", "UI/UX Design", "Graphic Design", "Poster Design"].map((tag) => (
                 <span key={tag} className="px-4 py-1.5 border border-dark-border rounded-full text-[11px] font-poppins font-medium text-white whitespace-nowrap">
                   {tag}
                 </span>
               ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-border bg-dark-card group">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
                alt="Modern Tech Desk"
                className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              
              <div className="absolute top-8 right-8 bg-dark-navy/90 backdrop-blur-md p-6 rounded-xl border border-dark-border shadow-2xl max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-dark-navy" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-cyan font-heading">Get Result</span>
                </div>
                <p className="text-[11px] text-text-muted font-poppins font-medium leading-relaxed">
                  Empower your business with high-tech software solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
