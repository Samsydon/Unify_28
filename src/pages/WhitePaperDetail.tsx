import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Share2 } from 'lucide-react';
import { useEffect } from 'react';

const paperContent: Record<string, any> = {
  "01": {
    title: "Budget Variance Reduction",
    category: "Analysis",
    summary: "Algorithmic control strategies to eliminate financial leakage in mega-projects.",
    content: "Our analysis of Budget Variance Reduction reveals a critical gap in most Oracle Unifier deployments. By shifting from a reactive to a proactive architectural model, organizations can achieve significant reductions in capital leakage and improve project predictability by over 20%. Within the context of Budget Variance Reduction, the primary failure point is typically a lack of data synchronization between the field and the executive suite. This results in 'phantom budgets' where a project appears healthy on a dashboard while bleeding costs in reality."
  },
  "02": {
    title: "The Configuration Drift",
    category: "Audit",
    summary: "Why Unifier environments fail after 24 months and how to sustain a 'Gold Standard'.",
    content: "The phenomenon of 'Configuration Drift' is the primary cause of system decay in enterprise Unifier deployments. As organizations evolve, the original architectural logic often becomes diluted by ad-hoc patches and inconsistent data entry. Our research shows that 80% of environments experience a 40% reduction in reporting accuracy within two years. Sustaining the 'Gold Standard' requires a immutable governance layer and automated health-checks that prevent logic corruption."
  },
  "03": {
    title: "ERP Integration Patterns",
    category: "Integration",
    summary: "Optimizing the data bridge between Unifier, SAP, and Oracle Fusion.",
    content: "Seamless integration between project controls and corporate ERPs is the holy grail of capital governance. This paper outlines high-performance ETL patterns that synchronize cost data in real-time. We explore the architectural trade-offs between batch processing and event-driven API synchronization, providing a blueprint for data integrity across fragmented ecosystems."
  },
  "04": {
    title: "Global Blueprinting",
    category: "Architecture",
    summary: "Standardizing capital workflows across multi-national regional offices.",
    content: "Scale introduces complexity that breaks local workflows. Global Blueprinting is the methodology of distilling organizational best practices into a single, scalable schema that respects regional compliance while enforcing global standards. We detail the 'Regional Schema' approach which allows 100% executive visibility while maintaining local operational flexibility."
  },
  "05": {
    title: "The Logic of BPs",
    category: "Process",
    summary: "Re-engineering Business Processes to reduce approval lag by 40%.",
    content: "Business Processes (BPs) are the nervous system of Oracle Unifier. Most efficiency gains are lost in poorly architected approval chains. By applying 'Lean Logic' to BP design—eliminating redundant approval steps and implementing parallel workflow branches—organizations can reduce operational lag by nearly half without compromising governance."
  },
  "06": {
    title: "Audit Compliance",
    category: "Compliance",
    summary: "Automating the paper trail for federal and external capital audits.",
    content: "Compliance is often viewed as a burden; we view it as an automated byproduct of good architecture. This white paper explains how to engineer Unifier to automatically generate defensible audit trails for every dollar spent. We focus on the 'Strict Gate' verification pattern which prevents non-compliant data from ever entering the system of truth."
  },
  "07": {
    title: "Dashboard Strategy",
    category: "Intelligence",
    summary: "Converting raw Unifier data into actionable Executive Intelligence.",
    content: "Data is useless without clarity. The UNIFY28 Dashboard Strategy moves beyond simple charts to 'Predictive KPIs'. We explain how to map raw document data to strategic board-level metrics, enabling executives to see project risks weeks before they manifest as budget overruns."
  },
  "08": {
    title: "Future of Control",
    category: "Innovation",
    summary: "Integrating AI and Predictive Analytics into Unifier project controls.",
    content: "The next frontier of capital governance is proactive. This paper explores the integration of machine learning models with historical Unifier data to predict schedule delays and cost variance. We provide a roadmap for moving from 'Historical Reporting' to 'Predictive Governance' using the latest advancements in AI."
  }
};

const WhitePaperDetail = () => {
  const { id } = useParams();
  const paper = id ? paperContent[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!paper) return <Navigate to="/insights" />;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/insights" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-oracle-red transition-colors mb-12"
        >
          <ArrowLeft size={12} /> Back to Insights
        </Link>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="bg-oracle-red text-white text-[9px] font-black uppercase px-3 py-1 rounded-full">{paper.category}</span>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Clock size={12} /> 12 Min Read
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <BookOpen size={12} /> Research Paper
          </div>
        </div>

        <h1 className="heading-xl text-3xl sm:text-5xl md:text-7xl text-slate-900 mb-8">{paper.title}</h1>
        
        <p className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed mb-16 italic border-l-4 border-slate-100 pl-4 md:pl-8">
          {paper.summary}
        </p>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-12 text-base md:text-lg font-light">
          <div className="p-6 md:p-10 bg-slate-50 rounded-[24px] md:rounded-[40px] border border-slate-100">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-4 uppercase tracking-widest text-[11px]">Executive Summary</h3>
            <p>{paper.content}</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Architectural Implications</h2>
            <p>
              The implications of these findings for multi-billion dollar portfolios are profound. Implementing the strategies outlined here requires a fundamental shift in how digital assets are governed at the enterprise level.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[24px] md:rounded-3xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest">The Risk of Inaction</h4>
                <p className="text-sm">Continued reliance on fragmented reporting layers leads to a compound loss of capital efficiency of approximately 3.2% per quarter.</p>
              </div>
              <div className="p-6 md:p-8 bg-slate-900 text-white rounded-[24px] md:rounded-3xl shadow-xl">
                <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest">The UNIFY28 Advantage</h4>
                <p className="text-sm opacity-80">Our proprietary architectural gates ensure that data integrity is maintained as a hard constraint, not a soft guideline.</p>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-100 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-oracle-red transition-colors">
                <Share2 size={14} /> Share Analysis
              </button>
            </div>
            <Link 
              to="/contact" 
              className="bg-black text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-oracle-red transition-all"
            >
              Consult on this Topic
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhitePaperDetail;
