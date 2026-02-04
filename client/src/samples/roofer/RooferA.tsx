import React from 'react';
import { Shield, Clock, Phone, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Award, AlertTriangle, Hammer, ChevronDown, Users, Home, Droplets, Wrench, HardHat, ThumbsUp, Calendar, BadgeCheck } from 'lucide-react';

export function RooferA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation - Solid Dark with Red Accent */}
      <nav className="fixed w-full z-50 bg-slate-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <Shield size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">Summit<span className="text-red-600">Roofing</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors">Services</a>
              <a href="#process" className="text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors">Process</a>
              <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors">Why Us</a>
              <a href="#reviews" className="text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors">Reviews</a>
              <a href="#faq" className="text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors">FAQ</a>
              <div className="h-8 w-px bg-slate-700" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Emergency Line</span>
                <a href="tel:0800123456" className="text-lg font-black text-red-500 tracking-tight">0800 123 456</a>
              </div>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-6 space-y-4">
            <a href="#services" className="block text-sm font-bold uppercase tracking-widest">Services</a>
            <a href="#process" className="block text-sm font-bold uppercase tracking-widest">Process</a>
            <a href="#about" className="block text-sm font-bold uppercase tracking-widest">Why Us</a>
            <a href="#reviews" className="block text-sm font-bold uppercase tracking-widest">Reviews</a>
            <a href="#faq" className="block text-sm font-bold uppercase tracking-widest">FAQ</a>
            <button className="w-full bg-red-600 text-white py-4 rounded font-black uppercase tracking-widest mt-4">
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1600&h=900&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Professional roofers at work on residential roof"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-red-600 text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                <Award size={14} /> 25 Year Workmanship Guarantee
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
                Built To <br /> <span className="text-red-600">Weather Any</span> <br /> Storm.
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed border-l-4 border-red-600 pl-6">
                The South's most trusted roofing specialists. From minor repairs to full re-roofs, we provide high-performance solutions that protect your home for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-red-600 text-white px-8 py-5 rounded font-black uppercase tracking-widest text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-900/30 flex items-center justify-center gap-3">
                  Book Free Survey <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white/20 text-white px-8 py-5 rounded font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Phone size={20} /> 0800 123 456
                </button>
              </div>
              <div className="flex flex-wrap gap-6">
                {["Licensed & Insured", "Free Estimates", "Same-Day Response"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" 
                className="rounded-2xl shadow-2xl w-full object-cover"
                alt="Professional roofer installing tiles"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <div className="font-black text-2xl text-slate-900">5,000+</div>
                  <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Roofs Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { name: 'CHECKATRADE', subtitle: 'Verified' },
              { name: 'TRUSTMARK', subtitle: 'Approved' },
              { name: 'NFRC', subtitle: 'Member' },
              { name: 'CHAS', subtitle: 'Accredited' },
              { name: 'FSB', subtitle: 'Registered' }
            ].map((brand) => (
              <div key={brand.name} className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-lg font-black italic tracking-tighter text-slate-900 block">{brand.name}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{brand.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Master <span className="text-red-600 italic">Roofing</span> Disciplines</h2>
            <p className="text-xl text-slate-500 font-medium">Specialized roofing services executed with precision and backed by our 25-year guarantee.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'New Roof Installation', desc: 'Complete roof replacements using premium slate, tile, or modern materials. Full structural assessment included.', icon: <Home size={32} />, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
              { title: 'Roof Repairs', desc: 'From minor leaks to major storm damage. Fast response with permanent solutions, not temporary fixes.', icon: <Wrench size={32} />, img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop' },
              { title: 'Flat Roofing', desc: 'Expert GRP, EPDM rubber, and felt roofing systems for extensions, garages, and commercial properties.', icon: <Shield size={32} />, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop' },
              { title: 'Chimney Repairs', desc: 'Structural repointing, lead flashing, and complete chimney stack rebuilds. Prevent water ingress.', icon: <Hammer size={32} />, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
              { title: 'Guttering & Fascias', desc: 'Premium uPVC, aluminium and cast iron solutions. Protect your property from water damage.', icon: <Droplets size={32} />, img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop' },
              { title: '24/7 Emergency', desc: 'Storm damage? Active leak? Our rapid response team is available around the clock.', icon: <AlertTriangle size={32} />, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop' },
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-red-600 font-bold uppercase text-sm tracking-wider hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative mb-16 lg:mb-0">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=900&fit=crop" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover" alt="Summit Roofing team at work" />
              <div className="absolute -top-8 -left-8 w-48 h-48 border-[20px] border-red-600/20 rounded-full z-0" />
              <div className="absolute -bottom-6 -right-6 bg-red-600 rounded-2xl p-8 z-20 shadow-2xl">
                <div className="text-5xl font-black mb-2">25+</div>
                <div className="text-red-100 font-bold uppercase tracking-wider text-sm">Years Experience</div>
              </div>
            </div>
            
            <div>
              <span className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 italic">The Summit <span className="text-red-600">Standard.</span></h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                We don't just fix roofs—we protect homes. Every project receives the same meticulous attention, whether it's a minor repair or a complete installation.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Certified Master Roofers', desc: 'All Summit roofers are fully qualified with valid CSCS cards and ongoing training in the latest techniques.' },
                  { title: 'Fixed Price Guarantee', desc: 'The quote we give is the price you pay. No hidden extras, no mid-project surprises. Ever.' },
                  { title: 'Clean Site Policy', desc: 'We treat your property like our own. Daily cleanup, protection of gardens and driveways. No mess left behind.' },
                  { title: '25-Year Warranty', desc: 'Our comprehensive workmanship warranty plus manufacturer guarantees on all materials used.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">How We <span className="text-red-600 italic">Work</span></h2>
            <p className="text-xl text-slate-500">A straightforward process designed for your convenience and peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Survey', desc: 'We inspect your roof thoroughly and identify all issues with a comprehensive written report.', icon: <Calendar size={28} /> },
              { step: '02', title: 'Fixed Quote', desc: 'Receive a detailed, itemized quote with all costs clearly explained. No surprises.', icon: <BadgeCheck size={28} /> },
              { step: '03', title: 'Expert Work', desc: 'Our certified team completes the work to the highest standards with minimal disruption.', icon: <HardHat size={28} /> },
              { step: '04', title: 'Final Sign-Off', desc: 'Complete walkthrough, cleanup, and handover with warranty documentation.', icon: <ThumbsUp size={28} /> },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <span className="text-red-600 font-black text-xs uppercase tracking-widest mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Featured Project</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 italic">Victorian <span className="text-red-600">Restoration</span></h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Complete roof restoration of a Grade II listed Victorian property in Surrey. Working with conservation officers, we replaced 2,500 original Welsh slates, rebuilt three chimney stacks, and installed hidden ventilation systems.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-black text-white mb-1">12</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Weeks</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">2,500</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Slates</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100yr</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Lifespan</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-red-700 transition-colors">
                View Full Case Study <ArrowRight size={20} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Before restoration" />
              <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=500&fit=crop" className="rounded-2xl w-full h-64 object-cover mt-8" alt="After restoration" />
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop" className="rounded-2xl w-full h-64 object-cover" alt="Work in progress" />
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop" className="rounded-2xl w-full h-64 object-cover mt-8" alt="Completed project" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">What Our <span className="text-red-600 italic">Clients</span> Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Thompson', location: 'Guildford, Surrey', text: 'Summit replaced our entire roof in just 5 days. The team was professional, tidy, and the quality is outstanding. Couldn\'t recommend them more highly.', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { name: 'David Williams', location: 'Woking, Surrey', text: 'Had an emergency leak during a storm. They were here within 2 hours and had a permanent fix done the next day. Absolutely brilliant service.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
              { name: 'Emma Richardson', location: 'Epsom, Surrey', text: 'We got three quotes and Summit were not the cheapest, but they were by far the most thorough. The finished result speaks for itself. Worth every penny.', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-black text-slate-900">{review.name}</div>
                    <div className="text-slate-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-full px-10 py-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/40?u=summit${i}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-slate-500 font-bold ml-2">+200 Happy Customers</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                <span className="font-black text-slate-900">4.9/5</span>
                <span className="text-slate-500 font-medium">on Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Coverage Area</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Areas <span className="text-red-600 italic">We Serve</span></h2>
            <p className="text-xl text-slate-500">Providing expert roofing services across Surrey, South London, and the surrounding counties.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-lg uppercase tracking-wider mb-6 flex items-center gap-3">
                <MapPin className="text-red-600" /> Surrey & South London
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Guildford", "Woking", "Epsom", "Kingston", "Croydon", "Sutton", "Reigate", "Dorking", "Leatherhead", "Esher", "Cobham", "Weybridge"].map((area) => (
                  <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-600 transition-colors cursor-pointer">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-lg uppercase tracking-wider mb-6 flex items-center gap-3">
                <MapPin className="text-red-600" /> Kent & Sussex Borders
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Sevenoaks", "Tunbridge Wells", "Tonbridge", "Oxted", "Edenbridge", "East Grinstead", "Crawley", "Horsham", "Haywards Heath", "Redhill", "Horley", "Gatwick"].map((area) => (
                  <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-600 transition-colors cursor-pointer">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter">Common <span className="text-red-600 italic">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How much does a new roof cost?', a: 'Costs vary based on size, materials, and complexity. A typical semi-detached house re-roof ranges from £5,000-£12,000. We provide free, detailed quotes for every project with no obligation.' },
              { q: 'How long will a new roof last?', a: 'With quality materials and proper installation, most roofs last 50-100+ years for slate, 30-50 years for concrete tiles, and 20-30 years for flat roofs. We use only premium, manufacturer-backed materials.' },
              { q: 'Do you offer financing options?', a: 'Yes, we offer flexible financing through our partner Kanda. Spread the cost over 12-60 months with competitive rates. Subject to status. Ask about our interest-free options for shorter terms.' },
              { q: 'What warranty do you provide?', a: 'All our work comes with a 25-year workmanship guarantee, fully insurance-backed. Materials carry manufacturer warranties of 20-40 years depending on product.' },
              { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements take 3-7 days depending on size and complexity. We work efficiently to minimize disruption and never leave your property exposed overnight.' },
              { q: 'Do you handle insurance claims?', a: 'Absolutely. We work directly with all major insurers and can handle the entire claims process on your behalf. We document everything thoroughly for smooth claim approval.' },
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
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border-[60px] border-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-[40px] border-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-8 uppercase italic tracking-tighter">
            Ready To Protect <br /> Your Home?
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium">
            Get a free, no-obligation roof survey and fixed-price quote. Our team is ready to help with any roofing challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-10 py-5 rounded font-black uppercase tracking-widest text-lg shadow-2xl hover:scale-105 transition-transform">
              Book Free Survey
            </button>
            <a href="tel:0800123456" className="flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-5 rounded font-black uppercase tracking-widest text-lg hover:bg-white/10 transition-colors">
              <Phone size={24} />
              0800 123 456
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <span className="text-2xl font-black italic tracking-tighter uppercase">Summit Roofing</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                Leading the industry in structural integrity and customer satisfaction. Your home deserves summit-level protection.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-sm font-bold">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-black uppercase tracking-widest text-red-500 mb-6">Services</h5>
              <ul className="space-y-3 text-slate-400">
                {["New Roofs", "Roof Repairs", "Flat Roofing", "Chimney Work", "Guttering", "Emergency Repairs"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-black uppercase tracking-widest text-red-500 mb-6">Contact</h5>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-3"><Phone size={16} className="text-red-600" /> 0800 123 456</li>
                <li className="flex items-center gap-3"><Mail size={16} className="text-red-600" /> info@summitroofing.co.uk</li>
                <li className="flex items-start gap-3"><MapPin size={16} className="text-red-600 mt-1" /> Unit 5, Trade Park<br />Guildford, GU1 1AA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 Summit Roofing Specialists Ltd. All Rights Reserved. Company No: 12345678</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Mail({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
