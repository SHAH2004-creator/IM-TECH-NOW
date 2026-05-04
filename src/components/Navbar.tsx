import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Our Products', href: '#products' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-navy/90 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-black tracking-tighter text-white uppercase">IMTECH<span className="text-primary-cyan">NOW</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-widest text-text-light/80 hover:text-primary-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="px-6 py-3 bg-primary-cyan text-dark-navy font-bold rounded flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105">
            <span className="text-sm uppercase tracking-wide">Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-navy border-b border-dark-border px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-light hover:text-primary-cyan"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-primary-cyan text-black font-bold rounded flex items-center justify-center gap-2">
                Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
