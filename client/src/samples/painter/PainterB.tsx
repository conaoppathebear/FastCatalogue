import React from 'react';
import { 
  PaintBucket, 
  Clock, 
  Phone, 
  Zap, 
  Shield, 
  ArrowRight, 
  Star, 
  Quote, 
  ChevronDown, 
  CheckCircle, 
  ExternalLink, 
  Menu, 
  X, 
  Rocket,
  Timer,
  Flashlight,
  BadgeAlert,
  CalendarCheck,
  MapPin,
  Mail,
  ChevronRight
} from 'lucide-react';

export function PainterB() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Top Bar - Urgency */}
      <div className="bg-indigo-600 text-white py-3 px-4 text-center text-[10px] font-black uppercase tracking-[0.3em] z-50 relative animate-pulse">
        ⚠️ Immediate availability for March. Only 3 Slots Left. Book Now!
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
               <PaintBucket className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-indigo-600">PAINT<span className="text-slate-900 font-bold tracking-normal uppercase text-lg ml-1">Rapid</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex flex-col items-end mr-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Instant Quote</span>
              <a href="tel:0800111222" className="text-xl font-black text-indigo-600 hover:text-indigo-700 transition-colors">0800 111 222</a>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Get Quote Now
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Urgency & Action */}
      <section className="relative py-16 lg:py-24 px-6 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
               <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-bold text-xs uppercase mb-8 border border-indigo-100">
                 <Rocket size={14} className="animate-bounce" /> Fastest Painting Crew in the South
               </div>
               <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter uppercase">
                 Full House <br />
                 <span className="text-indigo-600 underline decoration-indigo-600/20 underline-offset-8 italic">Done In 4 Days.</span>
               </h1>
               <p className="text-xl text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                 Professional, high-quality residential painting without the mess or the 3-week wait. We quote today, start tomorrow.
               </p>

               <div className="space-y-4 mb-10">
                 {[
                   'Quote in 24 Hours - Guaranteed',
                   'Dulux & Farrow & Ball Specialist',
                   'Fully Insured & Tidy Professionals'
                 ].map(item => (
                   <div key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                     <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                       <CheckCircle size={14} />
                     </div>
                     {item}
                   </div>
                 ))}
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 shadow-xl shadow-indigo-200">
                    Get Free Quote <ArrowRight />
                  </button>
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex text-orange-500">
                      {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                    </div>
                    <span className="font-bold text-slate-500">4.9/5 TrustScore</span>
                  </div>
               </div>
            </div>

            <div className="relative">
               <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Express Quote Request</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div>
                         <label className="text-xs font-bold uppercase text-slate-400 block mb-2">Name</label>
                         <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-600" placeholder="John Doe" />
                       </div>
                       <div>
                         <label className="text-xs font-bold uppercase text-slate-400 block mb-2">Phone</label>
                         <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-600" placeholder="07xxx xxxxxx" />
                       </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 block mb-2">Service Type</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-600 appearance-none">
                        <option>Full House Interior</option>
                        <option>Single Room Refresh</option>
                        <option>Exterior Painting</option>
                        <option>Commercial Space</option>
                      </select>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-xl font-black uppercase tracking-widest text-lg shadow-xl shadow-indigo-200 transition-all">
                      Check Next Opening
                    </button>
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                      ✨ Quote given within 24 hours
                    </p>
                  </form>
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white z-0 rotate-12 shadow-2xl">
                  <span className="text-4xl font-black leading-none">FREE</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Survey</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 px-6 border-y border-slate-100">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale">
            <div className="flex items-center gap-2 font-black italic text-2xl">DULUX</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">FARROW&BALL</div>
            <div className="flex items-center gap-2 font-black text-2xl">TRUSTMARK</div>
            <div className="flex items-center gap-2 font-black italic text-2xl">CROWN</div>
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">JOHNSTONES</div>
         </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-4">
                <span className="w-12 h-1.5 bg-indigo-600 rounded-full" />
                Why We're Faster
              </h2>
              <p className="text-indigo-600 font-black uppercase text-xs tracking-widest hidden md:block">Optimized Workflow ⚡</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: 'Full Crew Deployment', desc: 'We don\'t send one guy. We send a specialist team to finish your project in 1/3 of the time.', icon: <Zap /> },
               { title: 'Spray-Finish Tech', desc: 'Our HVLP spray technology allows for a factory-smooth finish at incredible speeds.', icon: <Rocket /> },
               { title: 'Night & Weekend Shifts', desc: 'Need your shop or office painted? We work when you don\'t to minimize disruption.', icon: <Clock /> },
             ].map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase">{item.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us - Results Focus */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                   Eliminate The <br /> <span className="text-indigo-600">3-Week Headache.</span>
                 </h2>
                 <div className="space-y-8">
                    {[
                      { title: 'Zero Cleanup', desc: 'Our crews follow a clinical cleanup protocol. We leave your home spotless.' },
                      { title: 'Fixed Deadlines', desc: 'If we say 4 days, we mean 4 days. No "stretching" projects.' },
                      { title: 'Premium Results', desc: 'Speed doesn\'t mean compromise. We use the highest quality trade finishes.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                         <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                            <CheckCircle size={20} />
                         </div>
                         <div>
                            <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
                            <p className="text-slate-500 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative mt-12 lg:mt-0">
                 <div className="aspect-video bg-indigo-600 rounded-3xl p-12 flex flex-col justify-center text-white shadow-2xl">
                    <p className="text-6xl font-black tracking-tighter mb-4 italic">"Transformational."</p>
                    <p className="text-xl font-bold opacity-80 mb-8 max-w-sm">"The team arrived on Monday and we were back in our living room by Wednesday night. Unbelievable speed."</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/20 rounded-full" />
                       <div>
                          <p className="font-black uppercase tracking-widest text-xs">Sarah Jenkins</p>
                          <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Homeowner, Bristol</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl rotate-3">
                    <span className="text-5xl font-black mb-1">4.9</span>
                    <div className="flex text-orange-500 mb-2">
                      {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Google Review Score</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Process Section - Fast Timeline */}
      <section id="method" className="py-24 px-6 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Our Rapid Protocol</h2>
               <p className="text-indigo-400 font-black uppercase text-xs tracking-[0.3em]">Precision at Speed</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12 relative">
               {[
                 { title: '24hr Quote', time: 'Day 0', icon: <Timer /> },
                 { title: 'Full Prep', time: 'Day 1', icon: <Shield /> },
                 { title: 'Main Spray', time: 'Day 2-3', icon: <Rocket /> },
                 { title: 'Sign Off', time: 'Day 4', icon: <CheckCircle /> }
               ].map((step, i) => (
                 <div key={i} className="text-center group">
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                       {React.cloneElement(step.icon as React.ReactElement, { size: 36 })}
                    </div>
                    <p className="text-indigo-400 font-black uppercase text-xs tracking-widest mb-2">{step.time}</p>
                    <h4 className="text-2xl font-black uppercase">{step.title}</h4>
                 </div>
               ))}
               <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/5 -z-10" />
            </div>
         </div>
      </section>

      {/* Social Proof - Featured Project */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
              <div className="lg:grid lg:grid-cols-2 gap-20 items-center relative z-10">
                 <div>
                    <span className="text-indigo-600 font-black uppercase text-xs tracking-widest mb-6 block">Featured Transformation</span>
                    <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                      City Apartment <br /> <span className="text-slate-400 italic">48hr Refreshed.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium mb-12 italic leading-relaxed">
                      "We needed the property ready for new tenants in less than 3 days. PaintRapid deployed a crew of 4 and finished the entire 3-bed flat in 36 hours. Absolute lifesavers."
                    </p>
                    <div className="flex items-center gap-12">
                       <div>
                          <p className="text-3xl font-black text-slate-900 tracking-tighter">£1,200</p>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Saved in downtime</p>
                       </div>
                       <div>
                          <p className="text-3xl font-black text-slate-900 tracking-tighter">36hrs</p>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Turnaround Time</p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-12 lg:mt-0">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" className="rounded-2xl shadow-2xl border-8 border-white" alt="Portfolio Piece" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Local Areas Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-3xl font-black uppercase tracking-tighter mb-16">Active Crews In Your Area</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Manchester Central', 'Cheshire East', 'Stockport', 'Salford Quays', 'Wilmslow', 'Altrincham', 'Knutsford', 'Prestwich'].map(area => (
                <div key={area} className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between hover:border-indigo-200 transition-all cursor-default group">
                   <span className="font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">{area}</span>
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section - Fast Focus */}
      <section id="faq" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-center text-4xl font-black uppercase tracking-tighter mb-16">Quick Answers</h2>
           <div className="space-y-4">
              {[
                { q: 'How can you be so much faster than others?', a: 'We use professional spray technology and deploy full crews rather than solo painters. This allows us to cover vast areas with a factory finish in hours, not days.' },
                { q: 'Is the quality still high?', a: 'Absolutely. We use trade-only rapid-dry paints that provide a more durable and even finish than standard retail options.' },
                { q: 'When can you start?', a: 'Typically within 48-72 hours of your quote acceptance. We maintain local crews ready for immediate deployment.' },
                { q: 'Do you move furniture?', a: 'Yes. Our "White Glove" protocol includes heavy lifting, full masking, and reset of all items after completion.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight flex justify-between items-center">
                      {faq.q}
                      <ChevronRight size={20} className="text-indigo-600" />
                   </h4>
                   <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-indigo-600 text-white text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 italic">
              Don't Wait <span className="underline decoration-white decoration-8 underline-offset-8">3 Weeks.</span>
            </h2>
            <p className="text-2xl font-bold mb-12 opacity-90">
              Get your fixed-price quote today. We'll be in and out before you know it.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xl hover:scale-105 transition-all shadow-2xl">
                 Book Instant Quote
               </button>
               <a href="tel:0800111222" className="flex flex-col items-center justify-center">
                  <span className="text-indigo-100 text-xs font-black uppercase tracking-widest mb-1 italic">Immediate Line</span>
                  <span className="text-3xl font-black">0800 111 222</span>
               </a>
            </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-1/2" />
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-100">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">
               <div className="flex items-center gap-2 text-indigo-600">
                 <PaintBucket size={20} />
                 <span className="text-lg font-black tracking-tighter uppercase">PaintRapid</span>
               </div>
               <div className="flex gap-8">
                 <a href="#" className="hover:text-indigo-600">Privacy</a>
                 <a href="#" className="hover:text-indigo-600">Terms</a>
                 <a href="#" className="hover:text-indigo-600">Contact</a>
               </div>
               <p>© 2024 PaintRapid Services. High Speed Excellence.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}
