import { motion } from 'motion/react';
import { Target, Zap, Layout, Search } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-neon-cyan" />,
    title: "Discovery Phase",
    description: "Deep dive into your project requirements, goals, and target audience.",
    color: "neon-cyan"
  },
  {
    icon: <Target className="w-6 h-6 text-neon-magenta" />,
    title: "Strategy & UX",
    description: "Architecting the solution and defining the user journey with precision.",
    color: "neon-magenta"
  },
  {
    icon: <Layout className="w-6 h-6 text-neon-yellow" />,
    title: "High-Tech Design",
    description: "Creating futuristic, polished visual interfaces that stand out.",
    color: "neon-yellow"
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-cyan" />,
    title: "Development & AI",
    description: "Transforming designs into functional code with AI-powered features.",
    color: "neon-cyan"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-dark-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-primary-cyan" />
            <span className="text-primary-cyan font-mono text-xs tracking-widest uppercase">Workflow</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-white"
          >
            Our Mission <span className="text-primary-cyan">Protocol</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-dark-card border border-dark-border rounded-3xl p-8 h-full hover:border-primary-cyan transition-all duration-500 text-left relative z-10 group-hover:-translate-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-dark-navy border border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:text-primary-cyan`}>
                    <step.icon.type className="w-6 h-6 text-primary-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-heading tracking-tight">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-poppins font-medium">
                    {step.description}
                  </p>
                  
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-[40px] font-bold text-white/5 font-mono select-none">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
