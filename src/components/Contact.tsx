import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-dark-navy text-text-light">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary-cyan/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-12 bg-primary-cyan" />
              <span className="text-primary-cyan font-bold text-sm tracking-widest uppercase">Get in Touch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none"
            >
              Let's build the <br /><span className="text-primary-cyan">Future</span> together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-lg mb-12 max-w-md"
            >
              Have a project in mind? We're ready to help you execute your vision with high-tech precision.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl border border-dark-border flex items-center justify-center group-hover:border-primary-cyan transition-colors">
                  <Mail className="w-5 h-5 text-primary-cyan" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</p>
                  <p className="text-lg font-medium">hello@imtechnow.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl border border-dark-border flex items-center justify-center group-hover:border-primary-cyan transition-colors">
                  <MapPin className="w-5 h-5 text-primary-cyan" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Base</p>
                  <p className="text-lg font-medium">Remote / Global Terminal</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card p-10 rounded-3xl border border-dark-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Identity</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Satoshi"
                    className="w-full bg-dark-navy border border-dark-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary-cyan transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Signal (Email)</label>
                  <input 
                    type="email" 
                    placeholder="you@protocol.com"
                    className="w-full bg-dark-navy border border-dark-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary-cyan transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Mission Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project or mission..."
                  className="w-full bg-dark-navy border border-dark-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary-cyan transition-colors text-white resize-none"
                />
              </div>
              <button className="w-full bg-primary-cyan text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                <span>Broadcast Transmission</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
