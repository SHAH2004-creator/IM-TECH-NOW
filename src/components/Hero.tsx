import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24 overflow-hidden bg-white text-black">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Strategy Driven Tech Solution Provider</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-10"
          >
            Bridge the gap <br className="hidden md:block" />
            between <span className="text-gray-400">vision</span> and <br className="hidden md:block" />
            <span className="italic">execution</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-primary-cyan text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-xl">
              <span>See Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-full hover:border-black hover:text-black transition-all">
              Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Hero Image Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
              alt="Team Strategy"
              className="w-full h-auto"
            />
            
            {/* Corner interaction badge */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-black" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Get Result</span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Empower your business with high-tech software solutions.
              </p>
            </div>
          </div>
          
          {/* Floating background shape */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-cyan/5 -z-10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
