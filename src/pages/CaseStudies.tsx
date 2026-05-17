import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [activeTag, setActiveTag] = useState('All');
  
  const cases = [
    {
      id: "01",
      tag: "Infrastructure",
      date: "2024 - 2025",
      title: "Mega-Bridge Project: $4.2B Capital Control",
      challenge: "Multi-agency funding and extreme budget variance due to fragmented contractor claims reporting.",
      solution: "Architected a custom Unifier Cost Module with automated claim validation and real-time budget-to-actual tracking.",
      outcome: "Reduced budget variance by 12% and accelerated approval cycles by 40%.",
      relevantInsight: "01"
    },
    {
      id: "02",
      tag: "Energy",
      date: "2023 - 2024",
      title: "Utility Grid Modernization: Global Rollout",
      challenge: "Inconsistent project reporting across 4 different geographic regions, leading to 'blind spots' in capital spending.",
      solution: "Deployed a standardized Global Unifier Blueprint with regional data schemas and centralized executive dashboards.",
      outcome: "Achieved 100% real-time visibility of project health across all regions within 6 months.",
      relevantInsight: "04"
    },
    {
      id: "03",
      tag: "Government",
      date: "2025 - Present",
      title: "Public Works Agency: Audit Compliance",
      challenge: "High risk of audit failure due to non-compliant documentation and manual approval workflows.",
      solution: "Re-engineered Unifier Business Processes to enforce strict compliance gates and automated audit trails.",
      outcome: "Successfully passed a federal audit with zero major findings on capital project controls.",
      relevantInsight: "06"
    },
    {
      id: "04",
      tag: "Industrial",
      date: "2022 - 2023",
      title: "Manufacturing Hub: ERP Integration",
      challenge: "Manual data re-entry between Unifier and SAP ERP, leading to 5% data error rate in financial reporting.",
      solution: "Built a high-performance API bridge to synchronize cost data in real-time between Unifier and SAP.",
      outcome: "Eliminated 98% of manual data re-entry and reduced reporting lag from 7 days to 0.",
      relevantInsight: "03"
    }
  ];

  const tags = ['All', ...new Set(cases.map(c => c.tag))];
  const filteredCases = activeTag === 'All' ? cases : cases.filter(c => c.tag === activeTag);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-muted-slate min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="heading-xl text-4xl sm:text-6xl md:text-[120px] text-slate-black mb-8"
          >
            Proven <br /><span className="text-oracle-red italic">Outcomes.</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light"
            >
              We don't promise results; we deliver them. Our success is measured by the precision of the capital control and the speed of project delivery.
            </motion.p>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeTag === tag 
                      ? 'bg-slate-black text-white border-slate-black shadow-lg shadow-black/10' 
                      : 'bg-white text-slate-400 border-slate-100 hover:border-oracle-red hover:text-oracle-red'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c, i) => (
              <motion.div 
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-slate-100 hover:border-oracle-red transition-all group flex flex-col h-full shadow-sm hover:shadow-xl"
              >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-slate-black/5 text-oracle-red text-[9px] font-black uppercase tracking-widest rounded-full">{c.tag}</span>
                  <span className="text-slate-400 text-[10px] font-mono">{c.date}</span>
                </div>
                <span className="text-4xl font-display font-black text-slate-100 group-hover:text-slate-black/10 transition-colors">{c.id}</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6 text-slate-black">{c.title}</h3>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed mb-8 flex-grow">
                <p><strong className="text-slate-black font-bold uppercase text-[10px] tracking-widest block mb-2">Challenge</strong> {c.challenge}</p>
                <p><strong className="text-slate-black font-bold uppercase text-[10px] tracking-widest block mb-2">Solution</strong> {c.solution}</p>
                <div className="pt-6 border-t border-slate-50">
                  <p className="text-slate-black font-bold italic">
                    <span className="text-oracle-red not-italic font-black text-[10px] uppercase tracking-widest block mb-1">Impact</span>
                    {c.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <Link 
                  to={`/white-papers/${c.relevantInsight}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-oracle-red transition-colors"
                >
                  Read Relevant Whitepaper <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
