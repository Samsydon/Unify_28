import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-oracle-red origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] bg-oracle-red-soft rounded-full blur-[140px] pointer-events-none z-[9999] opacity-[0.2] mix-blend-multiply"
      animate={{
        x: mousePos.x - 250,
        y: mousePos.y - 250,
      }}
      transition={{ type: 'spring', damping: 35, stiffness: 200, mass: 0.5 }}
    />
  );
};

// Pages
import Home from './pages/Home';
import Implementation from './pages/Implementation';
import Optimization from './pages/Optimization';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import WhitePaperDetail from './pages/WhitePaperDetail';
import Solutions from './pages/Solutions';
import Training from './pages/Training';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Implementation', path: '/implementation' },
    { name: 'Optimization', path: '/optimization' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Technical Intelligence', path: '/insights' },
    { name: 'Training', path: '/training' },
  ];

  return (
    <nav className="fixed w-full z-50 nav-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <div className="w-9 h-9 bg-slate-black rounded-sm flex items-center justify-center text-primary-white font-black text-lg shadow-sm group-hover:bg-oracle-red transition-colors">U</div>
          <span className="text-2xl font-black tracking-tighter text-slate-black">UNIFY<span className="text-oracle-red">28</span></span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-black-muted">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-oracle-red transition-all duration-300 ${location.pathname === link.path ? 'text-oracle-red font-black' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-oracle-red text-white px-6 py-2.5 rounded-full hover:bg-oracle-red-dark transition-all duration-300 shadow-lg shadow-oracle-red/20"
          >
            Book Consultation
          </Link>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 px-6 py-10 flex flex-col gap-6 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-display font-bold uppercase tracking-[0.2em] relative group inline-block ${location.pathname === link.path ? 'text-oracle-red' : 'text-slate-black-muted'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-oracle-red group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-oracle-red text-white px-8 py-5 rounded-full text-center font-bold uppercase tracking-widest text-[11px] block shadow-xl shadow-oracle-red/20 hover:bg-oracle-red-dark transition-colors"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-deep-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-oracle-red to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8 group cursor-default"
            >
              <div className="w-8 h-8 bg-white rounded-sm text-slate-black font-black flex items-center justify-center text-xs group-hover:bg-oracle-red group-hover:text-white transition-all group-hover:rotate-12">U</div>
              <span className="text-2xl font-black tracking-tighter text-white">UNIFY<span className="text-oracle-red">28</span></span>
            </motion.div>
            <p className="text-slate-black-light text-sm leading-relaxed mb-8 max-w-xs font-light">
              The global benchmark in Oracle Unifier architectural governance. We ensure the integrity of the world's most complex capital portfolios.
            </p>
            <div className="flex gap-4 text-slate-black-light">
              {[
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/unify28" },
                { icon: <Twitter size={20} />, href: "https://twitter.com/unify28" },
                { icon: <Github size={20} />, href: "https://github.com/unify28" },
                { icon: <Instagram size={20} />, href: "https://instagram.com/unify28" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -5, scale: 1.1, color: '#f80000' }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-primary-white uppercase tracking-widest mb-6">Verticals</h4>
            <ul className="space-y-4 text-sm text-slate-black-light font-medium">
              {[
                { name: 'Digital Solutions', path: '/solutions' },
                { name: 'Implementation', path: '/implementation' },
                { name: 'System Rescue', path: '/optimization' },
                { name: 'Training Mastery', path: '/training' }
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="hover:text-oracle-red transition-colors inline-block w-full">{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-primary-white uppercase tracking-widest mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-black-light font-medium">
              {[
                { name: 'Technical Hub', path: '/insights' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Integrations', path: '/white-papers/03' }
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <Link to={link.path} className="hover:text-oracle-red transition-colors inline-block w-full">{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-primary-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-black-light font-medium">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="hover:text-oracle-red transition-colors inline-block w-full">Privacy Policy</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="hover:text-oracle-red transition-colors inline-block w-full">SLA</a>
              </motion.li>
            </ul>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-black-light font-bold uppercase tracking-widest"
        >
          <motion.p 
            whileHover={{ scale: 1.02, color: "#f80000" }}
            className="transition-colors cursor-default"
          >
            © {new Date().getFullYear()} UNIFY28 GLOBAL SERVICES. ALL RIGHTS RESERVED.
          </motion.p>
          <div className="flex gap-8">
            <motion.span whileHover={{ y: -2 }} className="hover:text-primary-white cursor-pointer transition-colors">Sitemap</motion.span>
            <motion.span whileHover={{ y: -2 }} className="hover:text-primary-white cursor-pointer transition-colors">Compliance</motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Pages
const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white grainy-overlay overflow-x-hidden">
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/implementation" element={<Implementation />} />
              <Route path="/optimization" element={<Optimization />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/white-papers/:id" element={<WhitePaperDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/training" element={<Training />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
