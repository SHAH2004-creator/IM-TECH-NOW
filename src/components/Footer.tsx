import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, MessageCircle, Send, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 px-6 bg-dark-navy text-text-light border-t-2 border-primary-cyan">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-dark-border pb-12 mb-12 flex flex-col lg:flex-row gap-12 justify-between items-start">
          <div className="max-w-sm">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">IMTECH<span className="text-primary-cyan">NOW</span></h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Strategy driven tech solution provider empowering businesses with high-tech software solutions.
            </p>
            <div className="flex gap-4">
               {[Github, Linkedin, Twitter, Instagram, MessageCircle].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center hover:border-primary-cyan hover:text-primary-cyan transition-all">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6">Navigation</h4>
              <ul className="space-y-4 text-text-muted">
                <li><a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">Home</a></li>
                <li><a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">About Us</a></li>
                <li><a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">Our Portfolio</a></li>
                <li><a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">Our Products</a></li>
                <li><a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-center gap-2">
                  <div className="w-0.5 h-4 bg-primary-cyan" />
                  0302 5009485
                </li>
                <li className="flex items-center gap-2 text-primary-cyan">
                   <div className="w-0.5 h-4 bg-primary-cyan" />
                   imtechnow2@gmail.com
                </li>
                <li className="flex items-center gap-2">
                   <div className="w-0.5 h-4 bg-primary-cyan" />
                   Wah Cantt, Punjab, Pakistan
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <h4 className="text-lg font-bold text-primary-cyan mb-6">Get Our Service Sheet</h4>
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-transparent border border-dark-border rounded-full px-6 py-3 focus:outline-none focus:border-primary-cyan pr-12"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-dark-border rounded-full hover:bg-primary-cyan hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 min-w-fit">
            <p className="text-sm text-text-muted whitespace-nowrap">
              Copyright © {currentYear} ImTechNow | All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-text-muted">
              <a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="no-underline transition-all hover:text-primary-cyan hover:underline hover:underline-offset-4">Term of Use</a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center xl:justify-end xl:max-w-xl">
             {[
               ["Mobile App Development", "Website Development", "SaaS Products"],
               ["UI/UX Design", "Graphic Design", "Poster Design"]
             ].map((group, groupIdx) => (
               <div key={groupIdx} className="flex flex-wrap gap-2 justify-center xl:justify-end">
                 {group.map(tag => (
                   <span key={tag} className="px-3 py-1 border border-dark-border rounded-full text-[10px] text-text-muted whitespace-nowrap hover:border-primary-cyan transition-colors">
                     {tag}
                   </span>
                 ))}
               </div>
             ))}
          </div>
        </div>
        
        {/* Large background text footer */}
        <div className="mt-20 opacity-[0.03] select-none">
          <h2 className="text-[15vw] font-bold text-center leading-none tracking-tighter">IMTECHNOW</h2>
        </div>
      </div>
    </footer>
  );
}
