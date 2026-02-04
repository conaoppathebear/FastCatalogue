import React from 'react';
import { Shovel, Clock, Phone, Zap, Shield, ArrowRight, Star, Quote, ChevronDown, CheckCircle, ExternalLink, Menu, X } from 'lucide-react';

export function LandscaperB() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 selection:bg-orange-500 selection:text-white">
      {/* Top Bar - Urgency */}
      <div className="bg-orange-600 text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-[0.15em] z-50 relative">
        Limited Slots Available For Spring Landscaping - Book Now!
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center animate-pulse">
              <Shovel className="text-white" size={20} />
            </div>
            <span className="text-2xl font-black italic tracking-tighter text-white">TERRA<span className="text-orange-600 font-normal not-italic tracking-normal">FORCE</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex flex-col items-end mr-4">
              <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">Speak to an Expert</span>
              <a href="tel:0800999000" className="text-xl font-black text-white hover:text-orange-500 transition-colors tracking-tight">0800 999 000</a>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-black uppercase tracking-widest text-xs transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-orange-900/20">
              Get Fast Quote
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Direct & High Conversion */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-52 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left">
              <div className="inline-block bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full mb-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Available for New Projects Today</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                Tired Garden? <br />
                <span className="text-orange-600">Fixed Fast.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
                Professional landscaping without the 6-month wait. We build patios, lawns, and gardens in record time.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl group hover:border-orange-500 transition-colors">
                  <div className="w-10 h-10 bg-orange-600/10 rounded flex items-center justify-center text-orange-500">
                    <Clock size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase text-neutral-500">Start Time</p>
                    <p className="font-bold text-white">Within 14 Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl group hover:border-orange-500 transition-colors">
                  <div className="w-10 h-10 bg-orange-600/10 rounded flex items-center justify-center text-orange-500">
                    <Shield size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase text-neutral-500">Protection</p>
                    <p className="font-bold text-white">Full 5yr Warranty</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-md font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 group">
                  Start Your Fast Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm font-bold">
                  <Star className="text-orange-500 fill-orange-500" size={16} />
                  Rated 4.9/5 by 300+ Local Clients
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-[2rem] shadow-2xl relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Rapid Response Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest block mb-2">Full Name</label>
                    <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest block mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="07123 456 789" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest block mb-2">Project Type</label>
                    <select className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors appearance-none">
                      <option>Complete Redesign</option>
                      <option>Patio & Paving</option>
                      <option>Fencing & Turf</option>
                      <option>Commercial Maintenance</option>
                    </select>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded font-black uppercase tracking-widest text-sm transition-all mt-4">
                    Check Availability
                  </button>
                  <p className="text-[10px] text-center text-neutral-600 mt-4">
                    By clicking you agree to our privacy policy. We never spam.
                  </p>
                </form>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl animate-bounce">
                <span className="text-white font-black text-3xl leading-none">FREE</span>
                <span className="text-white/80 font-bold text-[10px] uppercase tracking-widest">Survey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Social Proof */}
      <section className="bg-neutral-900 py-10 border-y border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
          {['CHECKATRADE', 'TRUSTPILOT', 'GOOGLE GUARANTEED', 'BARCLAYS PARTNER', 'FSB MEMBER'].map(t => (
            <span key={t} className="text-xl font-black italic tracking-tighter text-white">{t}</span>
          ))}
        </div>
      </section>

      {/* Services - Grid Layout */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">Our Core <span className="text-orange-600">Forces.</span></h2>
              <p className="text-xl text-neutral-500 font-medium italic">High-performance landscaping built to survive the British weather.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all">
              All Services <ChevronDown size={16} className="-rotate-90" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Rapid Re-Turfing', price: 'From £495', img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=400&fit=crop' },
              { title: 'Patio Precision', price: 'From £1200', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&h=400&fit=crop' },
              { title: 'Fence Armour', price: 'From £350', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop' },
              { title: 'Drainage Fix', price: 'From £295', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop' },
            ].map((s, i) => (
              <div key={i} className="group relative h-96 overflow-hidden rounded-2xl">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2">{s.price}</p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{s.title}</h3>
                  <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded font-bold uppercase text-[10px] tracking-widest group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-neutral-950 border border-neutral-800 p-12 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">The 14-Day <br /> <span className="text-orange-600">Start Guarantee.</span></h3>
                <p className="text-xl text-neutral-400 max-w-md leading-relaxed mb-8">
                  Unlike local gardeners who book 6 months ahead, we manage a massive specialist network to get your project moving in 2 weeks or less.
                </p>
                <ul className="space-y-4">
                  {['Dedicated Project Manager', 'No-Deposit Booking', 'Fixed Price Guarantee'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest">
                      <CheckCircle className="text-orange-500" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/20 transition-colors" />
            </div>
            <div className="lg:col-span-4 bg-orange-600 p-12 rounded-3xl text-white flex flex-col justify-between">
              <div>
                <Clock size={48} className="mb-8" />
                <h3 className="text-4xl font-black mb-4 uppercase leading-none">Save Time. <br /> Save Stress.</h3>
              </div>
              <p className="text-white/80 font-bold mb-8">We handle every single detail of your project.</p>
              <button className="bg-neutral-950 text-white py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Recent Work */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-orange-600" />
            Latest Transformations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-xl mb-6 border border-neutral-800 relative">
                  <img src={`https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80&i=${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-orange-600 text-[10px] font-black uppercase px-2 py-1 rounded">London Project</div>
                </div>
                <h4 className="text-xl font-black text-white mb-2 uppercase group-hover:text-orange-500 transition-colors">Victorian Garden Restoration</h4>
                <p className="text-neutral-500 font-medium mb-4 italic">"They finished in 4 days. Unbelievable speed and quality." — Mark S.</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                  View Full Case Study <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Vertical Scroll Style */}
      <section className="py-24 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none mb-8">Voices Of <br /> <span className="text-orange-600">The Ground.</span></h2>
              <div className="flex items-center gap-8 mb-12">
                <div className="text-center">
                  <p className="text-5xl font-black text-white">4.9</p>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Average Rating</p>
                </div>
                <div className="w-px h-16 bg-neutral-800" />
                <div className="text-center">
                  <p className="text-5xl font-black text-white">12k+</p>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Square Metres Built</p>
                </div>
              </div>
              <button className="bg-white text-neutral-950 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-all shadow-xl shadow-white/5">
                Join Our Happy Clients
              </button>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Arthur Penhaligon', quote: 'No mess, no fuss. They arrived at 8am sharp and had the old turf out by noon. Incredible team.' },
                { name: 'Sarah Miller', quote: 'The quote was the price. No hidden extras. The quality of the paving is 10/10.' }
              ].map((r, i) => (
                <div key={i} className="bg-neutral-950 p-10 rounded-2xl border border-neutral-800 relative group hover:border-orange-500 transition-colors">
                  <Quote className="absolute top-8 right-8 text-neutral-800 group-hover:text-orange-600 transition-colors" size={48} />
                  <div className="flex text-orange-500 gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-neutral-200 font-medium italic mb-8 leading-relaxed">"{r.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-black text-orange-500">{r.name[0]}</div>
                    <span className="font-black uppercase tracking-widest text-xs text-white">{r.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimalist */}
      <section className="py-24 bg-neutral-950 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 text-center">Operation <span className="text-orange-600">Intel.</span></h2>
          <div className="space-y-4">
            {[
              { q: 'How do I get an accurate quote?', a: 'Just fill in the rapid response form. We usually call back within 1 hour to schedule a 15-minute site visit.' },
              { q: 'Do you charge a deposit?', a: 'No. For projects under £5,000, we don\'t charge a penny until the materials are on-site and work has started.' },
              { q: 'What happens if it rains?', a: 'Our teams are equipped for all weather. We only pause if conditions would compromise the structural quality of the build.' }
            ].map((faq, i) => (
              <details key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg group">
                <summary className="flex justify-between items-center p-6 text-white font-bold cursor-pointer list-none">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-orange-500" size={20} />
                </summary>
                <div className="px-6 pb-6 text-neutral-500 font-medium leading-relaxed border-t border-neutral-800/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas - Grid */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] mb-10">Deploying Teams To:</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['BRIGHTON', 'LONDON', 'READING', 'SLOUGH', 'GUILDFORD', 'CROYDON'].map(area => (
              <span key={area} className="text-sm font-black text-neutral-700 hover:text-orange-500 transition-colors cursor-default">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Aggressive */}
      <section className="py-24 px-6 relative overflow-hidden bg-orange-600">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border-[100px] border-white rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-10 uppercase tracking-tighter italic">
            Get Your Garden <br /> Back In <span className="underline decoration-white underline-offset-8">2 Weeks.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold mb-12 opacity-90 italic">
            Stop waiting. Start building. Check our next available slot in your area now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-neutral-950 text-white px-12 py-6 rounded-md font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Check Availability
            </button>
            <a href="tel:0800999000" className="flex flex-col items-center justify-center">
              <span className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</span>
              <span className="text-3xl font-black text-white">0800 999 000</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Brutalist */}
      <footer className="bg-neutral-950 pt-20 pb-10 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Shovel className="text-white" size={16} />
                </div>
                <span className="text-2xl font-black italic tracking-tighter text-white uppercase">TerraForce</span>
              </div>
              <p className="text-neutral-500 font-medium max-w-sm mb-8 leading-relaxed italic">
                The UK's fastest premium landscaping force. High speed. High quality. No compromises.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 border border-neutral-800 rounded flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors cursor-pointer">
                    <Star size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-12">
              <div>
                <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 underline decoration-orange-600 underline-offset-4">Mission</h5>
                <ul className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Fleet Care</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 underline decoration-orange-600 underline-offset-4">Support</h5>
                <ul className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 underline decoration-orange-600 underline-offset-4">Contact</h5>
                <ul className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <li><a href="#" className="hover:text-white transition-colors">Headquarters</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">
            <p>© 2024 TerraForce Landscaping. Total Performance.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
