import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24 overflow-hidden bg-dark-navy">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-dark-border rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Strategy Driven Tech Solution Provider</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-white"
            >
              Bridge the gap <br />
              between <span className="text-primary-cyan">vision</span> <br />
              and execution.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-row items-center gap-4 mb-16"
            >
              <button className="px-8 py-4 bg-primary-cyan text-dark-navy font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-primary-cyan/20">
                <span className="uppercase tracking-wider text-sm">See Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-dark-border text-text-light font-bold rounded-lg hover:border-primary-cyan hover:text-primary-cyan transition-all uppercase tracking-wider text-sm">
                Portfolio
              </button>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="Team Collaboration"
                className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              
              <div className="absolute top-8 right-8 bg-dark-navy/90 backdrop-blur-md p-6 rounded-xl border border-dark-border shadow-2xl max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-dark-navy" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-cyan">Get Result</span>
                </div>
                <p className="text-[11px] text-text-muted font-medium leading-relaxed">
                  Empower your business with high-tech software solutions.
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-cyan/10 -z-10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
