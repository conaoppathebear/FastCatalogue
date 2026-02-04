import React from 'react';
import { Lock, Shield, Clock, Phone, Zap, Star, CheckCircle, ArrowRight, Menu, X, AlertTriangle, Key, Users, Home, Building, Car, ChevronDown, Mail, Wrench, MapPin, Award, Timer, Siren, PhoneCall, Headphones, UserCheck, Gauge, Banknote, CircleCheck } from 'lucide-react';

export function LocksmithB() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { title: 'EMERGENCY ENTRY', desc: 'Locked out? We\'ll get you back in within 20 minutes. Non-destructive entry guaranteed.', icon: Siren, color: 'from-red-500 to-orange-500' },
    { title: 'LOCK UPGRADES', desc: 'High-security British Standard locks installed same day. Insurance approved.', icon: Shield, color: 'from-yellow-500 to-amber-500' },
    { title: 'BROKEN KEYS', desc: 'Snapped key in the lock? We extract and replace on the spot.', icon: Key, color: 'from-green-500 to-emerald-500' },
    { title: 'CAR LOCKOUTS', desc: 'All vehicles covered. No damage entry. Keys cut and programmed.', icon: Car, color: 'from-blue-500 to-cyan-500' },
    { title: 'BURGLARY REPAIRS', desc: 'Emergency boarding and lock replacement after break-ins. Priority service.', icon: AlertTriangle, color: 'from-purple-500 to-pink-500' },
    { title: 'SAFE OPENING', desc: 'Lost your safe combination? We open all types without damage.', icon: Lock, color: 'from-indigo-500 to-violet-500' },
  ];

  const stats = [
    { value: '15', label: 'MINUTE AVG RESPONSE', icon: Timer },
    { value: '24/7', label: 'ALWAYS AVAILABLE', icon: Clock },
    { value: '15K+', label: 'JOBS COMPLETED', icon: CircleCheck },
    { value: '4.9', label: 'STAR RATING', icon: Star },
  ];

  const processSteps = [
    { num: '1', title: 'CALL NOW', desc: 'Speak directly to a locksmith, not a call centre. Get a quote in 60 seconds.', icon: PhoneCall },
    { num: '2', title: 'WE DISPATCH', desc: 'Nearest available locksmith is sent to your location immediately.', icon: Zap },
    { num: '3', title: 'RAPID ARRIVAL', desc: 'Average arrival time is just 15 minutes. Track your locksmith live.', icon: Gauge },
    { num: '4', title: 'PROBLEM SOLVED', desc: 'Professional entry, repair or installation. Fixed price, no surprises.', icon: CircleCheck },
  ];

  const testimonials = [
    { name: 'David K.', time: '15 mins', text: 'Locked out at midnight. Called and they were here in 15 minutes flat. No damage, fair price. Absolute legends!', stars: 5 },
    { name: 'Rachel M.', time: '20 mins', text: 'Break-in left us vulnerable. They came same night, fitted new locks, and made us feel safe again. Brilliant service.', stars: 5 },
    { name: 'Tom B.', time: '12 mins', text: 'Car key snapped in the ignition. Thought I\'d be stranded for hours. They fixed it on the spot. Unbelievable!', stars: 5 },
  ];

  const areas = ['Central London', 'North London', 'South London', 'East London', 'West London', 'Croydon', 'Bromley', 'Enfield', 'Barnet', 'Harrow', 'Ealing', 'Richmond'];

  const faqs = [
    { q: 'What\'s your fastest response time?', a: 'Our record is 8 minutes. Average is 15-20 minutes depending on location and traffic. We have locksmiths positioned across London 24/7.' },
    { q: 'Do you charge more at night?', a: 'Our prices are competitive around the clock. While there\'s a small premium for late-night calls, we\'ll always quote you upfront before dispatching.' },
    { q: 'Can you get in without damaging my door?', a: 'In 98% of cases, yes. Our locksmiths are trained in non-destructive entry techniques. If damage is unavoidable, we\'ll tell you before we start.' },
    { q: 'Are you insured?', a: 'Fully. £5 million public liability insurance. All work guaranteed for 12 months. You\'re completely protected.' },
    { q: 'Do you fit insurance-approved locks?', a: 'Yes. We stock all major brands including Yale, Chubb, and Banham. All our locks meet British Standard BS3621.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-400 selection:text-black">
      <div className="bg-gradient-to-r from-red-600 to-orange-500 py-3 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span className="flex items-center gap-2 font-black text-sm uppercase tracking-widest animate-pulse">
            <Siren size={18} /> EMERGENCY LOCKOUT? WE'RE READY
          </span>
          <a href="tel:08009991234" className="flex items-center gap-2 bg-white text-red-600 px-4 py-1.5 rounded-full font-black text-sm">
            <Phone size={16} /> 0800 999 1234
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Zap className="text-yellow-400" size={36} />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Zap className="text-yellow-400" size={36} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight uppercase">Rapid<span className="text-yellow-400">Lock</span></span>
                <span className="hidden sm:block text-xs text-gray-500 font-bold uppercase tracking-wider">24/7 Emergency Locksmiths</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#areas" className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">Areas</a>
              <a href="tel:08009991234" className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded font-black text-sm uppercase hover:bg-yellow-300 transition-colors">
                <Phone size={18} /> Call Now Free
              </a>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-white/10 py-6 px-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-base font-bold uppercase text-gray-300 py-2">Services</a>
              <a href="#areas" className="text-base font-bold uppercase text-gray-300 py-2">Areas</a>
              <a href="tel:08009991234" className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-4 rounded font-black text-base uppercase">
                <Phone size={18} /> Call Now Free
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded text-yellow-400 text-xs font-black uppercase tracking-widest mb-6">
                <Clock size={14} /> Average Response: 15 Minutes
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 uppercase">
                Locked<br />
                <span className="text-yellow-400">Out?</span><br />
                <span className="text-gray-500">We're On</span><br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Our Way.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-lg font-medium">
                24/7 emergency locksmiths across London. Fast, professional, guaranteed. No call-out fees. Fixed prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:08009991234" className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded font-black text-xl uppercase hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20">
                  <Phone size={24} /> 0800 999 1234
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> No Call-Out Fee</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Fixed Prices</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Guaranteed</div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-1 rounded text-xs font-black uppercase animate-pulse">
                  Priority Request
                </div>
                <h3 className="text-2xl font-black uppercase mb-6">Need Help Now?</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded px-5 py-4 text-white placeholder-gray-600 font-medium focus:border-yellow-400 focus:outline-none" />
                  <input type="tel" placeholder="Mobile Number" className="w-full bg-black/50 border border-white/10 rounded px-5 py-4 text-white placeholder-gray-600 font-medium focus:border-yellow-400 focus:outline-none" />
                  <select className="w-full bg-black/50 border border-white/10 rounded px-5 py-4 text-gray-400 font-medium focus:border-yellow-400 focus:outline-none">
                    <option>Select Problem</option>
                    <option>Locked Out - Home</option>
                    <option>Locked Out - Car</option>
                    <option>Lock Repair</option>
                    <option>Lock Upgrade</option>
                    <option>Burglary Damage</option>
                    <option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-yellow-400 text-black py-5 rounded font-black uppercase text-lg hover:bg-yellow-300 transition-colors">
                    Send Help Now <ArrowRight className="inline ml-2" size={20} />
                  </button>
                </form>
                <p className="text-gray-600 text-xs text-center mt-4 uppercase tracking-wider">We'll call you within 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-2 opacity-60" size={28} />
                <div className="text-4xl lg:text-5xl font-black">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">24/7 Services</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mt-3">What We Fix</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative bg-gray-900 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black uppercase mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Why RapidLock</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase mt-3 mb-8">Speed. Trust. Results.</h2>
              
              <div className="space-y-6">
                {[
                  { icon: Timer, title: 'Fastest Response', desc: 'We\'ve built a network of locksmiths across London. No matter where you are, help is minutes away.' },
                  { icon: UserCheck, title: 'Vetted Professionals', desc: 'Every locksmith is DBS checked, fully insured, and trained in the latest techniques.' },
                  { icon: Banknote, title: 'Honest Pricing', desc: 'We quote before we dispatch. The price you\'re quoted is the price you pay. No hidden fees.' },
                  { icon: Shield, title: '12-Month Guarantee', desc: 'All parts and labour guaranteed. If there\'s a problem, we\'ll fix it free.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-5 bg-black/50 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=800&fit=crop" 
                  alt="Professional locksmith" 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-yellow-400 text-black p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                        <Headphones className="text-yellow-400" size={32} />
                      </div>
                      <div>
                        <p className="font-black uppercase text-sm">24/7 Helpline</p>
                        <p className="text-2xl font-black">0800 999 1234</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Process</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-3">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                  <step.icon size={36} className="text-black" />
                </div>
                <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent hidden lg:block" style={{ transform: i === 3 ? 'scaleX(0)' : 'scaleX(1)' }} />
                <span className="text-5xl font-black text-gray-800">{step.num}</span>
                <h3 className="text-lg font-black uppercase mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-3">Real Results</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-black border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase text-gray-600 bg-gray-800 px-3 py-1 rounded">
                    {t.time} response
                  </span>
                </div>
                <p className="text-gray-300 mb-6">"{t.text}"</p>
                <p className="font-black uppercase text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Coverage</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-3">London-Wide Service</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">We cover all London postcodes with rapid response times. Our network of locksmiths means help is always nearby.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-900 border border-white/5 px-4 py-3 rounded hover:border-yellow-400/30 transition-colors">
                <MapPin className="text-yellow-400 shrink-0" size={16} />
                <span className="font-bold text-sm uppercase">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-sm uppercase tracking-wider">+ All surrounding areas • 15-30 min response</p>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Questions</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase mt-3">FAQ</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-black border border-white/10 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold uppercase pr-4">{faq.q}</span>
                  <ChevronDown className={`text-yellow-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-yellow-400 to-orange-400 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Siren className="mx-auto mb-6 animate-pulse" size={64} />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6">Locked Out Right Now?</h2>
          <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto font-medium">
            Stop waiting. Stop worrying. Our locksmiths are ready to dispatch immediately. Average arrival: 15 minutes.
          </p>
          <a href="tel:08009991234" className="inline-flex items-center gap-4 bg-black text-yellow-400 px-12 py-6 rounded font-black text-2xl uppercase hover:bg-gray-900 transition-colors shadow-2xl">
            <Phone size={32} /> 0800 999 1234
          </a>
          <p className="mt-6 text-sm font-bold uppercase opacity-70">Free Call • No Hidden Fees • 24/7/365</p>
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-yellow-400" size={28} />
                <span className="text-xl font-black uppercase">Rapid<span className="text-yellow-400">Lock</span></span>
              </div>
              <p className="text-gray-500 text-sm mb-6">24/7 emergency locksmith services across London. Fast response, fair prices, guaranteed work.</p>
              <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-wider">
                <Shield size={14} /> Fully Insured & DBS Checked
              </div>
            </div>
            
            <div>
              <h4 className="font-black uppercase mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Emergency Lockout</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Lock Upgrades</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Car Lockouts</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Burglary Repairs</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Safe Opening</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black uppercase mb-4 text-sm">Areas</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Central London</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">North London</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">South London</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">East London</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">West London</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black uppercase mb-4 text-sm">24/7 Helpline</h4>
              <a href="tel:08009991234" className="text-2xl font-black text-yellow-400 hover:text-yellow-300 transition-colors">0800 999 1234</a>
              <p className="text-gray-600 text-sm mt-2">Free call from UK landlines & mobiles</p>
              <div className="mt-6">
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Mail size={14} /> info@rapidlock.co.uk
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2025 RapidLock. All rights reserved.</p>
            <div className="flex gap-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
