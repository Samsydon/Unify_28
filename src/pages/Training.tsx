import { motion } from 'motion/react';
import { UserCheck, GraduationCap, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training = () => {
  const tiers = [
    {
      title: "Administrator Mastery",
      icon: <ShieldCheck className="text-oracle-red" />,
      target: "System Admins & Architects",
      desc: "Deep-dive into uDesigner, Company and Shell administration, and environment lifecycle management.",
      topics: ["uDesigner Configuration", "Data Element Logic", "BPs and Integration", "User/Security Prefixes"]
    },
    {
      title: "Business Process Champion",
      icon: <UserCheck className="text-oracle-red" />,
      target: "Project Managers & Controllers",
      desc: "Mastering the end-to-end execution of Business Processes, cost sheets, and reporting tools.",
      topics: ["Cost Sheet Navigation", "Cash Flow Entry", "BP Submission Protocols", "Dashboard Personalization"]
    },
    {
      title: "Executive Intelligence",
      icon: <GraduationCap className="text-oracle-red" />,
      target: "Project Directors & CXOs",
      desc: "High-level training focused on data consumption, trend analysis, and decision-making using Unifier data.",
      topics: ["Strategic KPI Analysis", "Portfolio Rollup Reports", "Bottleneck Identification", "Earned Value Intelligence"]
    },
    {
      title: "Technical Adoption",
      icon: <Users className="text-oracle-red" />,
      target: "Wider Organization",
      desc: "Accelerated onboarding for occasional users to ensure 100% operational compliance across the enterprise.",
      topics: ["Mobile UI Submission", "Task Notification Management", "Basic Document Control", "BP Search & Filter"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-muted-slate min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black text-oracle-red uppercase tracking-[0.2em] mb-6"
          >
            Digital Adoption Strategy
          </motion.div>
          <h1 className="heading-xl text-4xl sm:text-5xl md:text-8xl text-slate-black mb-8 max-w-4xl">Architecture <br/><span className="text-oracle-red italic">Empowerment.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            An architect's vision is only as good as the team's ability to execute. UNIFY28 provides elite training tiers to ensure your Oracle Unifier deployment is used to its full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-oracle-red hover:bg-oracle-red-soft/50 transition-all group"
            >
              <div className="flex gap-8 mb-8">
                <div className="w-14 h-14 bg-muted-slate rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  {tier.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-black mb-1">{tier.title}</h3>
                  <div className="text-[10px] font-black text-slate-black-light uppercase tracking-widest">Audience: {tier.target}</div>
                </div>
              </div>
              
              <p className="text-slate-black-muted font-light leading-relaxed mb-10 border-l-2 border-slate-100 pl-6 italic">
                {tier.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {tier.topics.map((topic, j) => (
                  <div key={j} className="flex items-center gap-3 text-xs text-slate-black-muted font-medium">
                    <div className="w-1.5 h-1.5 bg-oracle-red rounded-full" /> {topic}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-black hover:text-oracle-red transition-all">
                Inquire about this module <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Methodology Callout */}
        <section className="mt-40 p-8 md:p-16 bg-slate-black rounded-[32px] md:rounded-[64px] text-white">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6 italic">The UNIFY28 "Train-the-Trainer" <span className="text-primary-white border-b border-white">Gold Standard.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                We believe in sustainable knowledge. Our signature methodology focuses on empowering your internal Lead Users to become the first line of architectural governance within your organization.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">Zero-Gap Onboarding</div>
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">Custom Case Scenarios</div>
                <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">BP User Guides</div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <Link to="/contact" className="w-full h-32 md:h-40 bg-white text-slate-black hover:bg-slate-200 transition-all duration-500 rounded-[30px] md:rounded-[40px] flex items-center justify-center text-center p-8 group">
                <span className="text-lg md:text-xl font-black uppercase tracking-widest">Request Training Syllabus &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Training;
