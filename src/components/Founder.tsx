import { motion } from 'motion/react';
import { Linkedin, Instagram, Facebook, MessageCircle, Share2 } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-24 px-6 bg-dark-navy text-text-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl border border-dark-border">
              <img 
                src="https://framerusercontent.com/images/Usman.jpg" 
                alt="Usman Haider"
                className="w-full h-full object-cover grayscale"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 border-[12px] border-primary-cyan/10 pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary-cyan/10 -z-10 rounded-2xl blur-3xl" />
          </motion.div>

          <div>
             <div className="mb-6">
               <span className="px-4 py-1.5 border border-dark-border text-primary-cyan text-[10px] font-poppins font-bold uppercase tracking-[0.3em] rounded">THE FOUNDER</span>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tighter text-white">Usman Haider</h2>
             
             <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-0.5 bg-primary-cyan rounded-full" />
               <p className="text-[10px] font-poppins font-bold uppercase tracking-[0.2em] text-text-muted">UI Designer & CEO</p>
             </div>

             <p className="text-text-muted font-poppins font-medium text-lg leading-relaxed mb-10 max-w-xl">
               Driven by a passion for nature-inspired design and advanced data science, I lead our team in bridging the gap between complex engineering and intuitive user experiences. With a foundation in full-stack development and AI, my mission is to build scalable SaaS solutions.
             </p>

             <p className="font-poppins font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Join me on social media</p>
             
             <div className="flex gap-6">
               <a href="#" title="WhatsApp" className="hover:scale-110 transition-transform text-text-muted hover:text-primary-cyan"><MessageCircle className="w-6 h-6" /></a>
               <a href="#" title="LinkedIn" className="hover:scale-110 transition-transform text-text-muted hover:text-primary-cyan"><Linkedin className="w-6 h-6" /></a>
               <a href="#" title="Facebook" className="hover:scale-110 transition-transform text-text-muted hover:text-primary-cyan"><Facebook className="w-6 h-6" /></a>
               <a href="#" title="Instagram" className="hover:scale-110 transition-transform text-text-muted hover:text-primary-cyan"><Instagram className="w-6 h-6" /></a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
