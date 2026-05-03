import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Founder from './components/Founder';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-navy selection:bg-primary-cyan/30 text-text-light selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Founder />
        <Team />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
