import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: "100+", label: "OUR HAPPY CLIENTS" },
    { value: "50+", label: "SOFTWARES WE DELIVERED" },
    { value: "10+", label: "UI DESIGN WE DELIVERED" },
    { value: "1400+", label: "DESIGNS WE DELIVERED" },
  ];

  return (
    <section className="bg-primary-cyan py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <h2 className="text-5xl font-extrabold text-black mb-2">{stat.value}</h2>
              <p className="text-sm font-bold text-black/70 tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
