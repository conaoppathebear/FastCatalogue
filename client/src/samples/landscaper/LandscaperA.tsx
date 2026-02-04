import React from 'react';
import { Leaf, Calendar, CheckCircle2, Star, ArrowRight, Shield, Award, MapPin, ChevronRight, Phone, MessageSquare, Menu, X } from 'lucide-react';

export function LandscaperA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">EverGreen <span className="text-emerald-600">Landscapes</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Our Work</a>
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">The Process</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                Book Consultation
              </a>
            </div>

            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
                <Award size={14} /> Award Winning Garden Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Transform Your Garden Into A <span className="text-emerald-600">Masterpiece.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Premium landscaping and bespoke garden design for homeowners who demand excellence. From concept to completion, we build outdoor spaces that inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2">
                  Get a Free Quote <ArrowRight size={20} />
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-emerald-600 hover:text-emerald-600 transition-all flex items-center justify-center gap-2">
                  View Portfolio
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="client" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Trusted by 500+ happy clients</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=1000&fit=crop" 
                  alt="Beautiful Garden" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Project Success</p>
                    <p className="text-lg font-bold text-slate-900">100% Guaranteed</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "They turned our muddy yard into a paradise. Simply incredible!"
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Featured Partners & Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['RHS MEMBER', 'CHAS ACCREDITED', 'BALI REGISTERED', 'TRUSTMARK', 'EXCELLENCE 2024'].map(logo => (
              <span key={logo} className="text-xl font-black text-slate-900 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Expert Services For <span className="text-emerald-600">Every Garden.</span></h2>
            <p className="text-lg text-slate-600">We offer a comprehensive range of landscaping and maintenance services, executed with precision and care.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Garden Design', desc: 'Creative 3D planning and material selection to bring your vision to life.', icon: <Leaf /> },
              { title: 'Hard Landscaping', desc: 'Expert installation of patios, driveways, walls, and structural elements.', icon: <CheckCircle2 /> },
              { title: 'Lawn Mastery', desc: 'Full turfing, artificial grass, and specialized lawn care treatments.', icon: <Award /> },
              { title: 'Planting Schemes', desc: 'Bespoke planting plans tailored to your soil, light, and lifestyle.', icon: <Star /> },
              { title: 'Fencing & Decking', desc: 'High-quality timber and composite solutions for privacy and style.', icon: <Shield /> },
              { title: 'Maintenance', desc: 'Year-round care to keep your outdoor investment looking its best.', icon: <Calendar /> },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="mb-16 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Homeowners <span className="text-emerald-400">Trust Us.</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Unrivaled Workmanship', desc: 'Our team consists of certified professionals with decades of combined experience.' },
                  { title: 'Fully Insured & Guaranteed', desc: 'Your peace of mind is paramount. We are fully insured and offer a 2-year plant guarantee.' },
                  { title: 'Clear Project Timelines', desc: 'No hidden delays. We provide a strict schedule and stick to it, every time.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=600&fit=crop" alt="Work 1" className="rounded-2xl mt-8 shadow-2xl" />
                <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=600&fit=crop" alt="Work 2" className="rounded-2xl shadow-2xl" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500 rounded-full blur-[100px] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Seamless <span className="text-emerald-600">Process.</span></h2>
            <p className="text-lg text-slate-600">From the first call to the final plant, we ensure your journey is stress-free and exciting.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            {[
              { step: '01', title: 'Consultation', desc: 'We visit your site to understand your vision and requirements.' },
              { step: '02', title: 'Design', desc: 'Our architects create a bespoke 3D plan for your approval.' },
              { step: '03', title: 'Build', desc: 'Our professional team carries out the work with total precision.' },
              { step: '04', title: 'Handover', desc: 'We walk you through your new space and provide care guides.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl shadow-emerald-200 border-8 border-white">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our <span className="text-emerald-600">Clients Say.</span></h2>
              <p className="text-lg text-slate-600 mb-8">We take pride in our reputation. See why local homeowners choose EverGreen.</p>
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500 font-bold uppercase">Google Rating</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900">250+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase">5-Star Reviews</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
              {[
                { name: 'Sarah Jenkins', loc: 'Surrey', quote: 'Absolute professionals. They took my messy garden and made it a place I never want to leave.', img: '1' },
                { name: 'David Thompson', loc: 'Kent', quote: 'The attention to detail in the stone work is incredible. Worth every penny of the investment.', img: '2' },
                { name: 'Emma Wilson', loc: 'Hampshire', quote: 'Friendly, tidy, and on time. My new lawn is the envy of the entire street!', img: '3' },
              ].map((t, i) => (
                <div key={i} className="min-w-[400px] snap-center p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="flex text-amber-400 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/150?u=${i+20}`} className="w-14 h-14 rounded-full border-2 border-emerald-100" />
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.loc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Common <span className="text-emerald-600">Questions.</span></h2>
          <div className="space-y-6">
            {[
              { q: 'How long does a typical garden redesign take?', a: 'Small projects can be finished in a week, while large-scale redesigns typically take 3-5 weeks depending on weather and scope.' },
              { q: 'Do you offer free quotes?', a: 'Yes! We provide a free initial consultation and a detailed, no-obligation written quote for every project.' },
              { q: 'Are you insured for larger structural work?', a: 'Absolutely. We carry comprehensive public liability and professional indemnity insurance for all structural landscaping work.' },
              { q: 'Can you work with my specific budget?', a: 'Yes, we are experts at value engineering. We can recommend materials and designs that maximize your budget while maintaining high quality.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-100 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 text-lg font-bold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  {faq.q}
                  <ChevronRight size={20} className="group-open:rotate-90 transition-transform text-emerald-600" />
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-8">Serving Local Communities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire', 'Berkshire'].map(city => (
              <div key={city} className="px-6 py-2 bg-white rounded-full border border-slate-200 text-sm font-semibold text-slate-600 shadow-sm flex items-center gap-2">
                <MapPin size={14} className="text-emerald-600" /> {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[3rem] bg-emerald-600 p-8 md:p-16 overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                Ready To Build Your <span className="text-emerald-200 underline">Dream Garden?</span>
              </h2>
              <p className="text-xl text-emerald-50 mb-10 leading-relaxed opacity-90">
                Book your free design consultation today and let's discuss how we can transform your outdoor space into something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-white text-emerald-600 px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
                  Start Your Project <MessageSquare size={24} />
                </button>
                <div className="flex flex-col justify-center">
                  <p className="text-emerald-100 text-sm font-bold uppercase tracking-wider mb-1">Call Our Office</p>
                  <a href="tel:08001234567" className="text-2xl font-black text-white hover:text-emerald-200 transition-colors">0800 123 4567</a>
                </div>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&h=800&fit=crop" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
            </div>
            <div className="absolute top-1/2 right-20 -translate-y-1/2 w-64 h-64 border-[30px] border-emerald-500/20 rounded-full hidden xl:block" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                  <Leaf className="text-white" size={18} />
                </div>
                <span className="text-2xl font-bold tracking-tight">EverGreen Landscapes</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                Premier landscaping services dedicated to quality, innovation, and customer satisfaction. We don't just build gardens; we create lifestyles.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all cursor-pointer">
                    <Star size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-8 uppercase tracking-widest text-emerald-400">Quick Links</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Residential</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Commercial</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-8 uppercase tracking-widest text-emerald-400">Contact Info</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} className="text-emerald-500" />
                  123 Design Studio, London
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone size={18} className="text-emerald-500" />
                  0800 123 4567
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <MessageSquare size={18} className="text-emerald-500" />
                  hello@evergreen.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© 2024 EverGreen Landscapes. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
