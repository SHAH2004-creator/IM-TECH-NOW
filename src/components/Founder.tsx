import { motion } from 'motion/react';
import { Linkedin, Instagram, Facebook, MessageCircle, Share2 } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <img 
                src="https://framerusercontent.com/images/Usman.jpg" 
                alt="Usman Haider"
                className="w-full h-full object-cover"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              {/* Light blue border overlay from image */}
              <div className="absolute inset-0 border-[12px] border-primary-cyan/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Background decorative corner element */}
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary-cyan/10 -z-10 rounded-2xl" />
          </motion.div>

          <div>
             <div className="mb-6">
               <span className="px-4 py-2 bg-dark-navy text-white text-xs font-bold uppercase tracking-widest rounded">THE FOUNDER</span>
             </div>
             
             <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Usman Haider</h2>
             
             <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-1 bg-dark-navy rounded-full" />
               <p className="text-sm font-bold uppercase tracking-wider text-gray-500">UI Designer & CEO</p>
             </div>

             <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
               Driven by a passion for nature-inspired design and advanced data science, I lead our team in bridging the gap between complex engineering and intuitive user experiences. With a foundation in full-stack development and AI, my mission is to build scalable SaaS solutions that empower businesses to thrive in a digital-first world.
             </p>

             <p className="font-bold text-gray-900 mb-6">Join me on social media platforms</p>
             
             <div className="flex gap-6">
               <a href="#" title="WhatsApp" className="hover:scale-110 transition-transform text-black"><MessageCircle className="w-6 h-6" /></a>
               <a href="#" title="LinkedIn" className="hover:scale-110 transition-transform text-black"><Linkedin className="w-6 h-6" /></a>
               <a href="#" title="Pinterest" className="hover:scale-110 transition-transform text-black"><Share2 className="w-6 h-6" /></a>
               <a href="#" title="Facebook" className="hover:scale-110 transition-transform text-black"><Facebook className="w-6 h-6" /></a>
               <a href="#" title="Instagram" className="hover:scale-110 transition-transform text-black"><Instagram className="w-6 h-6" /></a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
