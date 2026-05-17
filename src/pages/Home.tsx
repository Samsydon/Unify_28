import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-white px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-oracle-red-soft to-transparent rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-slate-black/10 to-transparent rounded-full blur-[100px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-block px-5 py-1.5 mb-10 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-black-light text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-sm"
          >
            The Global Benchmark in Capital Governance
          </motion.div>
          
          <div className="relative inline-block mb-12">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="heading-xl text-5xl sm:text-7xl md:text-[120px] text-slate-black leading-[0.85] relative"
            >
              Beyond Software. <br />
              <span className="text-oracle-red italic drop-shadow-[0_10px_30px_rgba(248,0,0,0.2)]">Absolute Authority.</span>
            </motion.h1>
            
            {/* Decal Background Text */}
            <div className="absolute -top-10 -left-20 opacity-[0.03] select-none pointer-events-none text-[200px] font-black font-display rotate-[-5deg] whitespace-nowrap">
              GOVERNANCE
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-black-muted mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            UNIFY28 architects the <span className="font-bold text-slate-black">Gold Standard</span> for Oracle Unifier. We transform chaotic capital programs into disciplined digital assets.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link to="/case-studies" className="relative h-16 px-12 bg-slate-black text-white rounded-full font-bold text-[11px] uppercase tracking-widest overflow-hidden group transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <span className="relative z-10">View Proven Outcomes</span>
              <motion.div 
                initial={false}
                whileHover={{ scale: 1.5, opacity: 1 }}
                className="absolute inset-0 bg-oracle-red opacity-0 transition-opacity duration-500" 
              />
            </Link>
            <Link to="/contact" className="group flex items-center gap-3 text-slate-black font-bold text-[11px] uppercase tracking-widest hover:text-oracle-red transition-all py-4 relative">
              <span className="relative z-10">Consult an Elite Architect</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
              <div className="absolute bottom-2 left-0 w-0 h-0.5 bg-oracle-red group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
        
        {/* Floating Decals */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-24 h-24 border border-slate-100 rounded-2xl rotate-12 opacity-10 hidden lg:block" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-10 w-16 h-16 bg-oracle-red-soft rounded-full opacity-20 hidden lg:block" 
        />
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,var(--color-oracle-red-dark)_0%,transparent_70%)] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Assets Managed', value: '$50B+' },
              { label: 'Success Rate', value: '100%' },
              { label: 'Budget Var. Reduction', value: '25%' },
              { label: 'Industries Served', value: '14+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-black text-primary-white mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-black-light font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Authority */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-left"
          >
            <h2 className="heading-xl text-5xl md:text-7xl text-slate-black mb-8 font-display">Sectoral <br/><span className="text-oracle-red italic font-sans underline decoration-oracle-red/20 underline-offset-[16px]">Mastery.</span></h2>
            <p className="text-slate-500 max-w-lg text-xl font-light leading-relaxed">We don't use templates. We build specialized frameworks for the specific risk profiles of your industry.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Infrastructure & Works', icon: '🏗️', desc: 'Managing mega-projects with extreme complexity in land acquisition and multi-year funding cycles.', paper: '01' },
              { title: 'Energy & Utilities', icon: '⚡', desc: 'Precision cost-control for grid modernization and renewable energy transitions.', paper: '04' },
              { title: 'Government & Public Sector', icon: '🏛️', desc: 'Architecting total transparency and auditability for public fund utilization.', paper: '06' },
            ].map((sector, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-12 rounded-[50px] bg-muted-slate border border-slate-100 group hover:border-oracle-red hover:bg-white transition-all duration-500 cursor-default shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-oracle-red-soft rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-5xl mb-10 transform group-hover:scale-110 transition-transform duration-500">{sector.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-6 text-slate-black">{sector.title}</h3>
                <p className="text-slate-black-muted text-base leading-relaxed mb-10 font-light">{sector.desc}</p>
                <Link to={`/white-papers/${sector.paper}`} className="text-[11px] font-black uppercase tracking-[0.2em] text-oracle-red group-hover:text-oracle-red-dark flex items-center gap-3">
                  Technical Abstract <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-32 bg-muted-slate border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="heading-xl text-4xl md:text-6xl text-slate-black mb-6 font-display">Specialized <br/><span className="text-oracle-red italic font-sans">Architectures.</span></h2>
            <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">
              We architect high-fidelity solutions across the entire Oracle Unifier ecosystem. Our BPs (Business Processes) are engineered for extreme precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: 'Cost Management', 
                desc: 'Cash flow forecasting, funding sheet management, and automated payment application processing.',
                features: ['Automated Allocations', 'Multi-Currency', 'WBS Alignment']
              },
              { 
                title: 'Contract Management', 
                desc: 'End-to-end procurement cycles, change management, and automated close-out protocols.',
                features: ['Retainage Tracking', 'Compliance Gates', 'Digital Signatures']
              },
              { 
                title: 'Portfolio Manager', 
                desc: 'Strategic capital planning and scenario modeling across global asset classes.',
                features: ['Scenario Modeling', 'ROI Analysis', 'Investment Mapping']
              },
              { 
                title: 'Facilities & Real Estate', 
                desc: 'Lease management and facility maintenance logic integrated with project spend.',
                features: ['Lease Accounting', 'Work Order BPs', 'Asset Tracking']
              }
            ].map((module, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: '#fff', borderColor: 'var(--color-oracle-red)' }}
                className="p-8 rounded-[32px] border border-transparent transition-all"
              >
                <h3 className="text-lg font-display font-bold mb-4">{module.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">{module.desc}</p>
                <div className="space-y-2">
                  {module.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <div className="w-1 h-1 bg-oracle-red" /> {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/solutions" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:text-oracle-red transition-all group">
              Explore Our Full Solution Stack <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-32 bg-muted-slate border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="heading-xl text-4xl md:text-5xl text-slate-black mb-4">Strategic <br/><span className="text-oracle-red italic font-sans">Intelligence.</span></h2>
              <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">Deep-dive analyses into the architectural challenges of world-class capital project governance.</p>
            </div>
            <Link to="/insights" className="text-xs font-black uppercase tracking-widest hover:text-oracle-red transition-colors flex items-center gap-2 pb-2 border-b-2 border-oracle-red">
              Explore Full Knowledge Hub <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/white-papers/02" className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:border-oracle-red transition-all">
              <span className="text-[9px] font-black text-oracle-red uppercase tracking-widest block mb-4">Featured Analysis 02</span>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-oracle-red transition-colors">The Configuration Drift</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">Why 80% of Oracle Unifier environments lose operational efficiency within 24 months—and how to engineer permanent stability.</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 flex items-center gap-2">
                Read Abstract <ArrowRight size={10} />
              </span>
            </Link>
            <Link to="/white-papers/08" className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:border-oracle-red transition-all">
              <span className="text-[9px] font-black text-oracle-red uppercase tracking-widest block mb-4">Featured Analysis 08</span>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-oracle-red transition-colors">Future of Control</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">The integration of Predictive Analytics and AI into standard capital governance frameworks to de-risk global portfolios.</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 flex items-center gap-2">
                Read Abstract <ArrowRight size={10} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
