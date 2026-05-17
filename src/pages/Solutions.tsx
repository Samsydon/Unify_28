import { motion } from 'motion/react';
import { ArrowRight, Layers, CreditCard, ClipboardCheck, Building2, Terminal, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Cost & Financial Management",
      icon: <CreditCard className="text-oracle-red" />,
      desc: "Architecting zero-leakage cost controls through automated cash flow, funding sources, and earned value analytics.",
      details: [
        "Cash Flow Curve Analysis (Baseline vs. Actual vs. Forecast)",
        "Funding Sheet Automation for multi-agency projects",
        "WBS/CBS Alignment with standard accounting codes",
        "Automated Payment Application processing with retention gates"
      ],
      insight: "01"
    },
    {
      title: "Contract & Procurement",
      icon: <ClipboardCheck className="text-oracle-red" />,
      desc: "Governing the entire procurement lifecycle from requisition to final close-out with strict compliance validation.",
      details: [
        "Procurement BP blueprints for bidding and evaluation",
        "Change Order control with automated impact analysis",
        "Submittal and RFI tracking with bottleneck reporting",
        "Compliance gates for bond and insurance verification"
      ],
      insight: "03"
    },
    {
      title: "Portfolio & Capital Planning",
      icon: <Layers className="text-oracle-red" />,
      desc: "Translating strategic vision into operational reality through scenario modeling and capital deployment logic.",
      details: [
        "Scenario Modeling for 10-year capital programs",
        "Portfolio scorecards based on ESG and ROI metrics",
        "Project prioritization logic using custom weighted data elements",
        "Cross-project rollups for enterprise visibility"
      ],
      insight: "04"
    },
    {
      title: "Facilities & Operations",
      icon: <Building2 className="text-oracle-red" />,
      desc: "Bridging the gap between project delivery and long-term asset maintenance and space management.",
      details: [
        "Lease Management with automated critical date notifications",
        "FASB 842 compliance reporting integration",
        "Preventative Maintenance workflows (PM schedules)",
        "Work Order BPs with labor and material tracking"
      ],
      insight: "06"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h1 className="heading-xl text-4xl sm:text-5xl md:text-8xl text-slate-black mb-8">Solution <br/><span className="text-oracle-red italic">Verticals.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            We don't just 'use' Oracle Unifier; we engineer it. Below are the core technical verticals where UNIFY28 delivers absolute authority.
          </p>
        </div>

        <div className="grid gap-12">
          {solutions.map((sol, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-12 bg-muted-slate rounded-[32px] md:rounded-[48px] border border-slate-100 hover:border-oracle-red hover:bg-white transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-oracle-red-soft transition-colors">
                    {sol.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-slate-black">{sol.title}</h2>
                  <p className="text-slate-black-muted font-light leading-relaxed mb-8">{sol.desc}</p>
                  <Link 
                    to={`/white-papers/${sol.insight}`}
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-oracle-red hover:text-oracle-red-dark transition-colors"
                  >
                    Technical Abstract <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {sol.details.map((detail, j) => (
                      <div key={j} className="p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:border-oracle-red-light/30 transition-colors">
                        <div className="flex gap-4 items-start">
                          <div className="w-1.5 h-1.5 bg-oracle-red mt-2 shrink-0 rounded-full" />
                          <p className="text-sm text-slate-black-muted leading-relaxed font-light">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Section */}
        <section className="mt-40 pt-32 border-t border-slate-100">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="heading-xl text-4xl md:text-6xl text-slate-black mb-8 font-display">Technical <br/><span className="text-oracle-red italic font-sans">Engineering.</span></h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                Our architecture team goes beyond standard configuration. we leverage uDesigner and the Unifier API ecosystem to build automation that rivals custom enterprise software.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-black text-white rounded-xl flex items-center justify-center">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-black mb-1">Advanced uDesigner Modeling</h4>
                    <p className="text-sm text-slate-500 font-light">Custom Business Process (BP) logic with advanced data elements and linked record flows.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-black text-white rounded-xl flex items-center justify-center">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-black mb-1">Integration & ETL Patterns</h4>
                    <p className="text-sm text-slate-500 font-light">Real-time synchronization with SAP, Oracle Fusion, and Maximo using the RESTful Web Services API.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-muted-slate rounded-[32px] md:rounded-[48px] p-8 md:p-12 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-oracle-red-soft opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-center relative z-10">
                 <div className="text-oracle-red font-black text-xs uppercase tracking-widest mb-4">Architecture Metric</div>
                 <div className="text-4xl md:text-8xl font-display font-black text-slate-black mb-4">98%</div>
                 <p className="text-slate-black-muted font-light text-sm md:text-base">Reduction in manual data re-entry through automated integration bridges.</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Solutions;
