import React from 'react';
import { Zap, Clock, Phone, AlertCircle, Shield, ArrowRight, Star, CheckCircle, MapPin, Menu, X, Hammer, Users, Award, ChevronDown, HeartHandshake, Timer, BadgeCheck, Truck, Wrench, Home, CloudRain } from 'lucide-react';

export function RooferB() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-['Archivo',sans-serif] text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Top Banner - Urgency */}
      <div className="bg-red-600 text-white py-3 px-4 text-center text-sm font-black uppercase tracking-wider z-50 relative animate-pulse">
        🚨 Emergency Leak? We Have Teams Standing By In Your Area Now. Call 0800 777 888
      </div>

      {/* Navigation - Clean White */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
              <Zap className="text-red-500" size={28} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">ROOF<span className="text-red-600">RAPID</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">Services</a>
            <a href="#process" className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">How It Works</a>
            <a href="#reviews" className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">Reviews</a>
            <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">FAQ</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Emergency Response</span>
              <a href="tel:0800777888" className="text-2xl font-black text-slate-900 hover:text-red-600 transition-colors tracking-tight">0800 777 888</a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-600/20">
              Get Instant Quote
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4">
            <a href="#services" className="block text-sm font-bold">Services</a>
            <a href="#process" className="block text-sm font-bold">How It Works</a>
            <a href="#reviews" className="block text-sm font-bold">Reviews</a>
            <a href="#faq" className="block text-sm font-bold">FAQ</a>
            <button className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase mt-4">
              Get Quote Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - Action & Lead Form */}
      <section className="relative py-16 lg:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-5 py-2.5 rounded-full font-black text-xs uppercase mb-8 border border-red-100">
                <AlertCircle size={16} className="animate-pulse" /> Same-Day Inspection Guaranteed
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tight">
                Stop The <span className="text-red-600">Leak.</span><br />
                Save Your Home.
              </h1>
              
              <p className="text-xl text-slate-500 mb-10 max-w-lg font-medium leading-relaxed">
                Don't let a small leak turn into a £10,000 disaster. Professional roof repairs with <strong className="text-slate-900">1-hour response times</strong> across the Midlands.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-red-200 transition-colors">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Response</p>
                    <p className="font-black text-slate-900 text-xl">Under 1 Hour</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-red-200 transition-colors">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <Shield size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Warranty</p>
                    <p className="font-black text-slate-900 text-xl">10yr Certified</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/48?u=rapid${i}`} className="w-12 h-12 rounded-full border-3 border-white" alt="" />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={18} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-slate-500 text-sm">4.9/5 from 500+ Reviews</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="relative">
              <div className="bg-slate-900 p-8 lg:p-10 rounded-3xl shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Teams Available Now</span>
                </div>
                
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Priority Quote Ticket</h3>
                
                <form className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Your Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-red-500 text-white font-medium" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-red-500 text-white font-medium" placeholder="For callback" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Issue Type</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-red-500 text-white font-medium appearance-none">
                      <option>Active Leak / Water Damage</option>
                      <option>Storm / Wind Damage</option>
                      <option>Missing / Broken Tiles</option>
                      <option>Gutter Problems</option>
                      <option>Full Roof Replacement</option>
                      <option>Other Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Postcode</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-red-500 text-white font-medium" placeholder="e.g. B1 1AA" />
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-black uppercase tracking-wider text-lg shadow-xl transition-colors flex items-center justify-center gap-3">
                    Get My Quote <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium">
                    ⚡ Average callback time: 15 minutes
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Timer size={28} />, value: '1 Hour', label: 'Response Time' },
              { icon: <BadgeCheck size={28} />, value: '10 Year', label: 'Guarantee' },
              { icon: <Users size={28} />, value: '15,000+', label: 'Repairs Done' },
              { icon: <Star size={28} />, value: '4.9/5', label: 'Google Rating' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-black text-2xl text-slate-900">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Quick Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest mb-4 block">What We Fix</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Fast Fixes. <span className="text-red-600">Fair Prices.</span></h2>
            <p className="text-xl text-slate-500">No job too small. From emergency tarps to complete replacements—we do it all.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Emergency Repairs', price: 'From £95', desc: 'Same-day emergency callouts for active leaks and storm damage.', icon: <CloudRain size={32} />, img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop', urgent: true },
              { title: 'Tile Replacement', price: 'From £150', desc: 'Broken, slipped or missing tiles replaced with matching materials.', icon: <Home size={32} />, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', urgent: false },
              { title: 'Flat Roof Repair', price: 'From £250', desc: 'Expert repairs to felt, rubber and GRP flat roofing systems.', icon: <Shield size={32} />, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop', urgent: false },
              { title: 'Gutter Clearing', price: 'From £65', desc: 'Full gutter clean and flush to prevent water damage.', icon: <Wrench size={32} />, img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop', urgent: false },
              { title: 'Chimney Repairs', price: 'From £200', desc: 'Repointing, flashing and full chimney stack repairs.', icon: <Hammer size={32} />, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', urgent: false },
              { title: 'Full Re-Roof', price: 'From £3,500', desc: 'Complete roof replacement with 10-year warranty included.', icon: <Award size={32} />, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop', urgent: false },
            ].map((service, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {service.urgent && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
                      24/7 Available
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                    <span className="text-red-600 font-black text-sm">{service.price}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <button className="text-red-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Book Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="text-red-500 font-black text-sm uppercase tracking-widest mb-4 block">Why RoofRapid</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8">Speed Without <span className="text-red-500">Compromise.</span></h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                When your roof is leaking, you need action—not excuses. Our rapid-response teams are trained, equipped, and ready to protect your home.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Truck size={24} />, title: 'Fully Stocked Vans', desc: 'Our teams carry all common materials. Most repairs completed same-visit.' },
                  { icon: <BadgeCheck size={24} />, title: 'Trained & Certified', desc: 'All roofers hold valid CSCS cards and are fully insured.' },
                  { icon: <HeartHandshake size={24} />, title: 'No Fix, No Fee', desc: 'If we can\'t solve your problem, you don\'t pay a penny.' },
                  { icon: <Shield size={24} />, title: '10-Year Warranty', desc: 'Every repair backed by our comprehensive guarantee.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" 
                alt="RoofRapid team at work" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-black mb-1">15K+</div>
                <div className="text-red-100 font-medium">Roofs Fixed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest mb-4 block">How It Works</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">From Call To <span className="text-red-600">Fixed.</span></h2>
            <p className="text-xl text-slate-500">Our streamlined process gets your roof fixed fast—without the runaround.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'You Call', desc: 'Ring our emergency line or fill out the quick form above.', time: '2 mins' },
              { step: '2', title: 'We Dispatch', desc: 'Nearest available team assigned to your location.', time: '15 mins' },
              { step: '3', title: 'We Arrive', desc: 'Fully equipped team assesses and quotes on-site.', time: '1 hour' },
              { step: '4', title: 'We Fix', desc: 'Repair completed with warranty documentation.', time: 'Same day' },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black">
                  {item.step}
                </div>
                <div className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">{item.time}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-red-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Stats Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-black mb-2">1HR</div>
              <div className="text-red-100 font-bold uppercase tracking-wider">Avg Response Time</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">98%</div>
              <div className="text-red-100 font-bold uppercase tracking-wider">Same-Day Fix Rate</div>
            </div>
            <div>
              <div className="text-6xl font-black mb-2">4.9★</div>
              <div className="text-red-100 font-bold uppercase tracking-wider">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest mb-4 block">Reviews</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Real People. <span className="text-red-600">Real Fixes.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Mike Johnson', location: 'Birmingham', text: 'Woke up to water dripping through the ceiling. Called RoofRapid at 7am, they were here by 8:30 and had it fixed by lunch. Unbelievable service!', rating: 5, verified: true },
              { name: 'Lisa Chen', location: 'Coventry', text: 'Storm ripped off a load of tiles. These guys came out in the pouring rain and got us weathertight within 2 hours. Absolute legends.', rating: 5, verified: true },
              { name: 'Robert Taylor', location: 'Wolverhampton', text: 'Fair price, fast work, no mess. What more could you ask for? Will definitely use again and have already recommended to neighbours.', rating: 5, verified: true },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle size={12} /> Verified
                    </span>
                  )}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-black text-slate-600">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-black text-slate-900">{review.name}</div>
                    <div className="text-slate-500 text-sm flex items-center gap-1">
                      <MapPin size={12} /> {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest mb-4 block">Coverage</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">We Cover The <span className="text-red-600">Midlands.</span></h2>
            <p className="text-xl text-slate-500">Rapid response roofing across Birmingham and the surrounding areas.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Birmingham", "Coventry", "Wolverhampton", "Dudley", "Walsall", "Solihull", "West Bromwich", "Sutton Coldfield", "Tamworth", "Nuneaton", "Rugby", "Redditch", "Bromsgrove", "Cannock", "Lichfield", "Stafford"].map((area) => (
              <span key={area} className="bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-700 px-6 py-3 rounded-full font-bold transition-colors cursor-pointer">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest mb-4 block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Quick <span className="text-red-600">Answers.</span></h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How quickly can you get to me?', a: 'Our average response time is under 1 hour for emergency callouts within our coverage area. During peak times, it may take up to 2 hours.' },
              { q: 'Do you charge a callout fee?', a: 'We charge a small diagnostic fee of £49 which covers inspection and quote. This is deducted from your final bill if you proceed with the work.' },
              { q: 'What payment methods do you accept?', a: 'We accept cash, card, bank transfer, and offer finance options for larger jobs. Payment is due on completion of work.' },
              { q: 'Are your roofers qualified?', a: 'All our roofers hold valid CSCS cards, are fully insured, and undergo regular training. We\'re members of the NFRC and CompetentRoofer scheme.' },
              { q: 'What warranty do you offer?', a: 'All repairs come with a 10-year workmanship guarantee. Full re-roofs include manufacturer warranties on materials which typically range from 20-40 years.' },
              { q: 'Can you help with insurance claims?', a: 'Absolutely. We work with all major insurers and can provide detailed reports and photos to support your claim. We\'ve helped thousands of customers with storm damage claims.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-slate-900 pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-red-600 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Don't Wait For <span className="text-red-500">The Rain.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Get ahead of the problem. Book your free inspection today and get peace of mind that your roof is protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider text-lg shadow-xl flex items-center justify-center gap-3">
              Book Free Inspection <ArrowRight size={20} />
            </button>
            <a href="tel:0800777888" className="border-2 border-white/20 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
              <Phone size={20} /> 0800 777 888
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 shadow-xl">
        <a href="tel:0800777888" className="w-full bg-red-600 text-white flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-wider">
          <Phone size={20} /> Call Emergency Line
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Zap className="text-red-500" size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter">ROOFRAPID</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                The Midlands' fastest-responding roofing service. Available 24/7 for emergencies.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-500">Certified:</span>
                <span className="text-xs font-bold uppercase text-slate-400">NFRC</span>
                <span className="text-xs font-bold uppercase text-slate-400">Checkatrade</span>
                <span className="text-xs font-bold uppercase text-slate-400">TrustMark</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-black uppercase tracking-wider text-sm mb-4">Services</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Emergency Repairs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tile Replacement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flat Roofing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Full Re-Roofs</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-black uppercase tracking-wider text-sm mb-4">Contact</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>0800 777 888</li>
                <li>help@roofrapid.co.uk</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 RoofRapid Ltd. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
