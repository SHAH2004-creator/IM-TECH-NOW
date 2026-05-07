import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: "100+", label: "OUR HAPPY CLIENTS" },
    { value: "50+", label: "SOFTWARES WE DELIVERED" },
    { value: "10+", label: "UI DESIGN WE DELIVERED" },
    { value: "1400+", label: "DESIGNS WE DELIVERED" },
  ];

  return (
    <section className="bg-[#00D4FF]/30 py-16 px-6 border-y border-dark-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter font-heading">{stat.value}</h2>
              <p className="text-[10px] font-poppins font-bold text-white tracking-[0.2em] uppercase leading-tight text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
