import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  PaintBucket, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Hammer, 
  HardHat, 
  ChevronRight,
  Quote,
  CheckCircle2,
  Calendar,
  Zap,
  BadgeCheck,
  House,
  Building2,
  Users
} from 'lucide-react';

export function PainterA() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 px-6 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-blue-500" /> Serving London & Home Counties</span>
            <span className="flex items-center gap-2"><Clock size={12} className="text-blue-500" /> Mon-Sat: 08:00 - 18:00</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Client Login</a>
            <a href="#" className="hover:text-white transition-colors">Trade Portal</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center shadow-lg shadow-blue-200">
              <PaintBucket className="text-white" size={28} />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter block leading-none">HERITAGE</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Painting & Decorating</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#method" className="hover:text-blue-600 transition-colors">Our Method</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <a href="tel:02081234567" className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enquiries</span>
              <span className="text-lg font-black text-slate-900">020 8123 4567</span>
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-200">
              Book Survey
            </button>
          </div>
        </div>
      </nav>

      {/* Authority Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest mb-8 border border-blue-100">
              <BadgeCheck size={14} /> Dulux Select Decorator Accredited
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Bespoke <br />
              <span className="text-blue-600 italic">Residential</span> <br />
              Restoration.
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium italic border-l-4 border-blue-600 pl-8">
              "We don't just apply paint. We stabilize, restore, and preserve the architectural integrity of your most valuable asset."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-4 shadow-2xl">
                Request a Site Audit <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                     </div>
                   ))}
                 </div>
                 <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted by 500+ Homeowners</p>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-12">
               <div>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">30yr</p>
                  <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Heritage</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">100%</p>
                  <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Referral Rate</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">5yr</p>
                  <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Guarantee</p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl relative z-10 border-[1rem] border-white grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="https://images.unsplash.com/photo-1589939705384-5185138a047a?w=800&h=1000&fit=crop" className="w-full h-full object-cover" alt="Heritage Work" />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-y border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
           <span className="text-xl font-black tracking-tighter italic">DULUX SELECT</span>
           <span className="text-xl font-black tracking-tighter">FARROW & BALL</span>
           <span className="text-xl font-black tracking-tighter italic">TRUSTMARK</span>
           <span className="text-xl font-black tracking-tighter">CITY & GUILDS</span>
           <span className="text-xl font-black tracking-tighter italic">CHAS ACCREDITED</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Specialisms</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Mastering the Art of <br /> <span className="text-slate-400 italic font-light">Surface Perfection.</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-sm italic">
              We provide a comprehensive suite of decorating services tailored for high-value residential estates and heritage properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Interior Restoration', 
                desc: 'Specialist preparation, dustless sanding, and application of premium pigments for a factory-smooth finish.', 
                icon: <House className="text-blue-600" />,
                tags: ['Dust-Free', 'Low VOC']
              },
              { 
                title: 'Exterior Preservation', 
                desc: 'Advanced weather-shield systems designed to protect masonry and woodwork against the British elements.', 
                icon: <Shield className="text-blue-600" />,
                tags: ['10yr Protection', 'Weatherproof']
              },
              { 
                title: 'Heritage Decorating', 
                desc: 'Historical color matching and application of traditional lime washes and mineral paints for period homes.', 
                icon: <Award className="text-blue-600" />,
                tags: ['Listed Buildings', 'Traditional']
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.desc}</p>
                <div className="flex gap-2 mb-10">
                   {service.tags.map(tag => (
                     <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-slate-50 text-slate-400 px-3 py-1 rounded-full">{tag}</span>
                   ))}
                </div>
                <a href="#" className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                  Request Technical Data <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">The Heritage Difference</span>
              <h2 className="text-5xl font-black tracking-tighter leading-tight mb-12">
                Why Discerning Clients <br /> <span className="text-blue-400 italic">Trust Our Team.</span>
              </h2>
              <div className="space-y-12">
                 {[
                   { title: 'Obsessive Preparation', desc: '80% of our time is spent on substrate stabilization. We fix the foundation before we ever open a tin of paint.' },
                   { title: 'Project Management', desc: 'A dedicated site manager for every project. We provide daily progress reports and adhere to strict timelines.' },
                   { title: 'White Glove Service', desc: 'Complete floor-to-ceiling protection. We leave your property cleaner than we found it, guaranteed.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="text-4xl font-black text-white/10 group-hover:text-blue-500 transition-colors duration-500 tracking-tighter">0{i+1}</div>
                      <div>
                         <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                         <p className="text-slate-400 font-medium italic leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1595814432314-90095f342694?w=400&h=500&fit=crop" className="rounded-2xl grayscale" alt="Interior Details" />
                    <div className="bg-blue-600 p-8 rounded-2xl text-center">
                       <p className="text-5xl font-black mb-2">30+</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years Excellence</p>
                    </div>
                 </div>
                 <div className="pt-12 space-y-4">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center backdrop-blur-md">
                       <p className="text-5xl font-black mb-2 text-blue-400">98%</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Referral Rate</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=600&fit=crop" className="rounded-2xl grayscale" alt="Luxury Finish" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="method" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Execution Logic</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase">The Method.</h2>
              <p className="text-slate-500 font-medium italic leading-relaxed">Our clinical approach to decorating ensures generational longevity and a flawless aesthetic result.</p>
           </div>

           <div className="grid md:grid-cols-4 gap-12">
              {[
                { title: 'Diagnosis', desc: 'Moisture testing and substrate analysis to determine the correct prep strategy.', icon: <Zap size={24} /> },
                { title: 'Sanitization', desc: 'Dust-free sanding using HEPA filtration systems to ensure a clean environment.', icon: <Clock size={24} /> },
                { title: 'Application', desc: 'Multi-layer application using trade-only pigments for depth and durability.', icon: <PaintBucket size={24} /> },
                { title: 'Handover', desc: 'Final site audit, touch-up kit delivery, and 5-year warranty activation.', icon: <CheckCircle2 size={24} /> }
              ].map((step, i) => (
                <div key={i} className="relative group">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {step.icon}
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{step.title}</h4>
                   <p className="text-slate-500 text-sm font-medium italic leading-relaxed">{step.desc}</p>
                   {i < 3 && <div className="hidden lg:block absolute top-8 left-20 w-full h-px border-t-2 border-dashed border-slate-200" />}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Social Proof / Case Study */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?w=600&h=800&fit=crop" className="rounded-3xl shadow-xl" alt="Case Study 1" />
                 <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop" className="rounded-3xl shadow-xl mt-12" alt="Case Study 2" />
              </div>
              <div>
                 <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Case Study: Knightsbridge</span>
                 <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                   A Modern Heritage <br /> <span className="italic text-slate-400 font-light">Transformation.</span>
                 </h2>
                 <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium italic">
                   "Heritage Painting exceeded every expectation. Their team treated our property with absolute respect, and the finish on the period cornicing is simply world-class."
                 </p>
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden">
                       <img src="https://i.pravatar.cc/100?u=estate" alt="Client" />
                    </div>
                    <div>
                       <p className="text-lg font-black text-slate-900">Sir Alexander Thorne</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Belgravia Estate Manager</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-4 text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] hover:gap-6 transition-all">
                    View Full Portfolio <ArrowRight size={14} />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Common Enquiries</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-8">FAQ.</h2>
           </div>
           <div className="space-y-6">
              {[
                { q: 'How do you ensure a dust-free environment?', a: 'We utilize Mirka and Festool HEPA-rated dust extraction systems which capture 99.9% of particles at source, ensuring your home remains habitable throughout.' },
                { q: 'What paint brands do you recommend?', a: 'We specialize in premium trade-grade finishes from Farrow & Ball, Little Greene, and Dulux Heritage for their superior pigment depth and longevity.' },
                { q: 'Is there a guarantee on your work?', a: 'Every residential project is backed by our comprehensive 5-year workmanship guarantee, giving you complete peace of mind.' },
                { q: 'Do you provide color consultations?', a: 'Yes, our lead decorators provide on-site color theory sessions to help you select the perfect palette based on your property\'s natural light.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="text-lg font-bold text-slate-900 mb-4 flex justify-between items-center italic">
                      {faq.q}
                      <ChevronRight size={18} className="text-blue-600 rotate-90" />
                   </h4>
                   <p className="text-slate-500 font-medium italic text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="relative bg-blue-600 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-blue-200">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                 <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12 italic uppercase">
                   Your Heritage <br /> <span className="text-blue-200">Restored.</span>
                 </h2>
                 <p className="text-2xl text-blue-100 font-bold mb-16 opacity-90 leading-relaxed italic">
                   "Quality is never an accident; it is always the result of high intention, sincere effort, and skillful execution."
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xl hover:scale-105 transition-all shadow-2xl">
                       Request Survey
                    </button>
                    <a href="tel:02081234567" className="flex flex-col items-center justify-center">
                       <span className="text-blue-100 text-[10px] font-black uppercase tracking-widest mb-1 italic">Direct Line</span>
                       <span className="text-3xl font-black text-white">020 8123 4567</span>
                    </a>
                 </div>
              </div>
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-32 pb-12 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-20 mb-20">
               <div className="col-span-2">
                  <div className="flex items-center gap-3 mb-10">
                     <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                        <PaintBucket className="text-white" size={24} />
                     </div>
                     <span className="text-2xl font-black tracking-tighter uppercase">Heritage</span>
                  </div>
                  <p className="text-slate-400 text-xl font-medium leading-relaxed italic max-w-md mb-12">
                     Preserving the past, perfecting the present. The gold standard in high-end residential decorating.
                  </p>
                  <div className="flex gap-6">
                     <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Mail size={18} /></a>
                     <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Phone size={18} /></a>
                  </div>
               </div>
               <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-10">Navigation</h5>
                  <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                     <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Our Method</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Enquiries</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-10">Local Areas</h5>
                  <ul className="space-y-4 text-xs font-bold italic text-slate-500">
                     <li>Kensington & Chelsea</li>
                     <li>Mayfair & Belgravia</li>
                     <li>Richmond & Twickenham</li>
                     <li>Hampstead & Highgate</li>
                  </ul>
               </div>
            </div>
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
               <p>© 2024 Heritage Painting Ltd. Registered in England & Wales.</p>
               <div className="flex gap-12">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
