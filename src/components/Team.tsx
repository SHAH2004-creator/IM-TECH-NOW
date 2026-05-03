import { motion } from 'motion/react';

const team = [
  {
    name: "Ammar Haider",
    role: "Fullstack Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Muhammad Ali",
    role: "SEO Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mishal Fatima",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-gray-200 rounded mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Our People</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Meet Our Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl aspect-[4/5] flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center mb-4">
               <span className="text-white text-xl">?</span>
            </div>
            <h3 className="text-white font-bold mb-2">Join Us</h3>
            <p className="text-gray-500 text-xs">We're always looking for talents.</p>
          </motion.div>

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-0.5 bg-primary-cyan rounded-full" />
                 <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
