import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Implementation = () => {
  const steps = [
    {
      id: "01",
      title: "Strategic Blueprinting",
      desc: "We don't start with code. We start with your Business Process (BP). We map every approval chain and reporting requirement.",
      insight: "04"
    },
    {
      id: "02",
      title: "Data Schema Architecture",
      desc: "Designing a scalable data model. Custom data picklists and calculated fields that eliminate manual entry errors.",
      insight: "02"
    },
    {
      id: "03",
      title: "Agile Development",
      desc: "Iterative cycles of configuration and validation, ensuring the system maps perfectly to your organizational logic.",
      insight: "05"
    },
    {
      id: "04",
      title: "Enterprise Integration (ETL)",
      desc: "Building the API bridges to SAP, Oracle Fusion, or custom data lakes for real-time visibility.",
      insight: "03"
    },
    {
      id: "05",
      title: "Governed Go-Live",
      desc: "Data migration, user training, and hyper-care support to ensure 100% operational adoption.",
      insight: "06"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading-xl text-4xl sm:text-5xl md:text-8xl text-slate-black mb-8"
        >
          Full-Lifecycle <br /><span className="text-oracle-red italic">Deployment.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light mb-20"
        >
          Implementation is not a software installation; it is a business transformation. We replace fragmented spreadsheets and outdated processes with a single, authoritative source of truth.
        </motion.p>
        
        <div className="grid gap-0 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-slate-100 hidden md:block" />
          
          {steps.map((step, i) => (
             <motion.div 
               key={step.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group flex gap-8 md:gap-16 pb-20 last:pb-0 relative"
             >
               {/* Dot on line */}
               <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 bg-white border-2 border-slate-100 rounded-full items-center justify-center z-10 group-hover:border-oracle-red transition-colors">
                 <div className="w-2 h-2 bg-slate-200 group-hover:bg-oracle-red rounded-full transition-colors" />
               </div>

               <div className="text-4xl md:text-6xl font-display font-black text-slate-100 group-hover:text-oracle-red transition-colors shrink-0 md:pl-20">
                 {step.id}
               </div>
               <div className="pt-2 md:pt-4">
                 <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-slate-black transition-colors">{step.title}</h3>
                 <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl mb-6">{step.desc}</p>
                 <Link 
                   to={`/white-papers/${step.insight}`}
                   className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 text-[10px] font-black text-slate-black uppercase tracking-widest hover:bg-oracle-red hover:text-white transition-all shadow-sm"
                 >
                   Strategic Protocol <ArrowRight size={12} />
                 </Link>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Implementation;
