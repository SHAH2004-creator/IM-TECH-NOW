import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What core services does your firm specialize in?",
    answer: "We specialize in custom software development (Desktop & Web), UI/UX design, SaaS product architecture, and digital marketing. Our focus is on creating solutions that are both aesthetically pleasing and functionally robust."
  },
  {
    question: "Do you offer graphic design and branding services?",
    answer: "Yes, we offer comprehensive branding sessions, logo design, marketing collateral, and full visual identity systems."
  },
  {
    question: "What is your development process for SaaS products?",
    answer: "Our process follows a Strategy-Driven collection of phases: Discovery, Architecture, Development, Testing, and Deployment with continuous support."
  },
  {
    question: "What is your unique approach to UI/UX design?",
    answer: "We blend nature-inspired organic patterns with high-tech functional requirements to create balanced and intuitive interfaces."
  },
  {
    question: "Do you provide videography and video editing services?",
    answer: "We provide high-quality video editing and motion graphics for digital products and brand storytelling."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-dark-navy text-text-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
           <div className="flex items-center gap-3 mb-4 text-left">
             <div className="w-8 h-1 bg-primary-cyan rounded-full" />
             <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Let's Find Answers of Your Valuable Questions</p>
           </div>
           <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-left">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-dark-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-white group-hover:text-primary-cyan transition-colors">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary-cyan text-dark-navy' : 'bg-dark-card text-text-muted group-hover:bg-dark-border'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-text-muted bg-dark-card border border-dark-border p-6 rounded-xl mb-4 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
