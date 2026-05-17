import { motion } from 'motion/react';
import { Send, MapPin, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="heading-xl text-6xl md:text-[110px] text-slate-black mb-8"
          >
            Direct Line <br /><span className="text-oracle-red italic font-sans font-black">to Expertise.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 mb-16 max-w-lg leading-relaxed font-light"
          >
            Whether you are managing a $100M project or a $10B portfolio, we provide the architectural oversight necessary to ensure zero leakage.
          </motion.p>
          
          <div className="space-y-10">
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 bg-slate-black/5 text-oracle-red rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-black text-lg mb-1">Global Headquarters</h4>
                <p className="text-slate-500 font-light">Dubai Financial District, UAE / New York, NY</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 bg-slate-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-slate-200">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-black text-lg mb-1">Architectural Inquiry</h4>
                <p className="text-slate-500 font-light">consult@unify28.com</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-muted-slate p-12 rounded-[60px] border border-slate-100 shadow-2xl shadow-slate-100"
        >
          <form className="grid gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                <input type="text" className="p-5 rounded-3xl bg-white border border-slate-100 focus:border-oracle-red outline-none transition-all font-light" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Company</label>
                <input type="text" className="p-5 rounded-3xl bg-white border border-slate-100 focus:border-oracle-red outline-none transition-all font-light" placeholder="Enterprise Ltd" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Corporate Email</label>
              <input type="email" className="p-5 rounded-3xl bg-white border border-slate-100 focus:border-oracle-red outline-none transition-all font-light" placeholder="john@company.com" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Portfolio Value (Approx.)</label>
              <div className="relative">
                <select className="appearance-none w-full p-5 rounded-3xl bg-white border border-slate-100 focus:border-oracle-red outline-none transition-all font-light">
                  <option>$10M - $100M</option>
                  <option>$100M - $1B</option>
                  <option>$1B +</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">↓</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Brief Inquiry</label>
              <textarea className="p-5 rounded-3xl bg-white border border-slate-100 focus:border-oracle-red outline-none transition-all h-32 resize-none font-light" placeholder="Tell us about your Unifier challenge..."></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-black text-white py-6 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-oracle-red transition-all flex items-center justify-center gap-3"
            >
              Request for Consultation <Send size={14} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
