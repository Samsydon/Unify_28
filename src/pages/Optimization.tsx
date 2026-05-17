import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Optimization = () => {
  const issues = [
    { symptom: "BP Workflow Bottlenecks", cure: "Lean BP Engineering & Parallel Approval Cycles", insight: "05" },
    { symptom: "Data Integrity & Duplication", cure: "Schema Normalization & Automated Validation Gates", insight: "06" },
    { symptom: "Slow Dashboard Load Times", cure: "Query Optimization & Aggregate Data Mapping", insight: "07" },
    { symptom: "Lack of Executive Visibility", cure: "Architecture of Strategic KPIs & Cross-Project Rollups", insight: "07" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="pt-32 pb-24 bg-slate-black text-white px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl text-3xl sm:text-5xl md:text-[100px] mb-8"
          >
            System <span className="text-oracle-red italic font-sans">Rescue</span> <br /> & Optimization.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl leading-relaxed font-light"
          >
            Most Unifier instances suffer from "Configuration Drift"—a gradual decay in system efficiency. We perform surgical audits to resolve these bottlenecks and recover your operational ROI.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl font-display font-black text-slate-black">The UNIFY28 <br /><span className="text-oracle-red">Audit Framework</span></h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest max-w-xs">Restoring precision to aging capital governance systems.</p>
          </div>
          
          <div className="grid gap-4">
            {issues.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-slate-100 hover:border-oracle-red hover:bg-oracle-red-soft transition-all rounded-3xl group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black text-slate-black-light uppercase tracking-widest mb-1">Symptom</span>
                  <span className="text-xl font-display font-bold text-slate-black">{item.symptom}</span>
                </div>
                <div className="flex flex-col md:text-right gap-1">
                  <span className="text-[9px] font-black text-oracle-red uppercase tracking-widest mb-1">UNIFY28 Cure</span>
                  <span className="text-xl font-display font-medium text-slate-black-muted italic font-serif mb-2">"{item.cure}"</span>
                  <Link 
                    to={`/white-papers/${item.insight}`}
                    className="text-[9px] font-black text-slate-black-light uppercase tracking-widest flex items-center md:justify-end gap-2 hover:text-oracle-red transition-colors"
                  >
                    View Protocol Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Optimization;
