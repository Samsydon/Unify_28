import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Insights = () => {
  const papers = [
    { id: "01", category: "Analysis", title: "Budget Variance Reduction", desc: "Algorithmic control strategies to eliminate financial leakage in mega-projects." },
    { id: "02", category: "Audit", title: "The Configuration Drift", desc: "Why Unifier environments fail after 24 months and how to sustain a 'Gold Standard'." },
    { id: "03", category: "Integration", title: "ERP Integration Patterns", desc: "Optimizing the data bridge between Unifier, SAP, and Oracle Fusion." },
    { id: "04", category: "Architecture", title: "Global Blueprinting", desc: "Standardizing capital workflows across multi-national regional offices." },
    { id: "05", category: "Process", title: "The Logic of BPs", desc: "Re-engineering Business Processes to reduce approval lag by 40%." },
    { id: "06", category: "Compliance", title: "Audit Compliance", desc: "Automating the paper trail for federal and external capital audits." },
    { id: "07", category: "Intelligence", title: "Dashboard Strategy", desc: "Converting raw Unifier data into actionable Executive Intelligence." },
    { id: "08", category: "Innovation", title: "Future of Control", desc: "Integrating AI and Predictive Analytics into Unifier project controls." }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-muted-slate min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="heading-xl text-6xl md:text-[140px] text-slate-black mb-8"
          >
            Technical <br /><span className="text-oracle-red italic font-sans font-black">Intelligence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Our white papers provide a deep-dive into the architectural challenges of capital project management. We translate complex requirements into operational success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {papers.map((paper, i) => (
            <MotionLink 
              key={paper.id}
              to={`/white-papers/${paper.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-oracle-red hover:bg-oracle-red-soft transition-all cursor-pointer flex flex-col h-full scroll-mt-24 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="px-2 py-1 bg-oracle-red-soft text-[8px] font-black text-oracle-red uppercase tracking-widest rounded-md">{paper.category} {paper.id}</span>
                <FileText size={16} className="text-slate-200 group-hover:text-oracle-red transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-oracle-red transition-colors text-slate-black">{paper.title}</h3>
              <p className="text-slate-black-muted text-sm leading-relaxed flex-grow font-light">{paper.desc}</p>
              <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-black-light group-hover:text-slate-black transition-colors">
                Read Analysis <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Insights;
