import React from 'react';
import { Lock, Shield, Clock, Phone, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Award, AlertTriangle, Key, Users, Home, Building, Car, ChevronDown, Mail, Wrench, Zap, ThumbsUp, BadgeCheck, Timer, HeadphonesIcon } from 'lucide-react';

export function LocksmithA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { title: 'Emergency Lockout', desc: 'Locked out of your home or car? Our 24/7 emergency team will get you back inside within 30 minutes, using non-destructive entry methods.', icon: AlertTriangle, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { title: 'Lock Replacement', desc: 'Upgrade your security with British Standard 3621 locks. We supply and fit high-security mortice and cylinder locks for all door types.', icon: Lock, image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop' },
    { title: 'Key Cutting', desc: 'Precision key cutting for all types of keys including dimple, laser cut, and restricted keys. Same-day service available.', icon: Key, image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=400&fit=crop' },
    { title: 'Commercial Security', desc: 'Complete security solutions for businesses including access control systems, master key suites, and high-security locks.', icon: Building, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
    { title: 'UPVC Door Repairs', desc: 'Specialist repair and replacement of UPVC door locks, handles, and mechanisms. All major brands serviced.', icon: Home, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop' },
    { title: 'Auto Locksmith', desc: 'Car lockout assistance, key replacement, and ignition repairs for all vehicle makes and models.', icon: Car, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop' },
  ];

  const processSteps = [
    { step: '01', title: 'Call Us', desc: 'Phone our 24/7 helpline and speak to a real person, not a call centre.' },
    { step: '02', title: 'Fast Response', desc: 'A local locksmith will be dispatched immediately, usually arriving within 30 minutes.' },
    { step: '03', title: 'Fixed Quote', desc: 'Before any work begins, you\'ll receive a clear, fixed price with no hidden fees.' },
    { step: '04', title: 'Job Complete', desc: 'Work is completed to the highest standard with a 12-month guarantee on all parts and labour.' },
  ];

  const testimonials = [
    { name: 'Sarah Mitchell', location: 'Manchester', text: 'Locked out at 2am with my baby inside. They were here in 20 minutes and got us in without any damage. Absolute lifesavers!', rating: 5 },
    { name: 'James Thompson', location: 'Liverpool', text: 'Professional service from start to finish. Fair pricing and excellent workmanship. Highly recommend for any lock-related needs.', rating: 5 },
    { name: 'Emma Roberts', location: 'Leeds', text: 'Had all my locks upgraded after a break-in. The team was compassionate and thorough. Feel so much safer now.', rating: 5 },
  ];

  const areas = ['Manchester', 'Liverpool', 'Leeds', 'Sheffield', 'Birmingham', 'Nottingham', 'Leicester', 'Bradford', 'Wakefield', 'Huddersfield', 'Bolton', 'Stockport'];

  const faqs = [
    { q: 'How quickly can you get to me?', a: 'Our average response time is 20-30 minutes. We have locksmiths stationed across the region to ensure fast coverage.' },
    { q: 'Will you damage my door or lock?', a: 'We specialise in non-destructive entry techniques. In over 95% of cases, we can gain entry without causing any damage.' },
    { q: 'Do you provide a guarantee?', a: 'Yes, all our work comes with a 12-month guarantee on parts and labour. We only use quality, British Standard approved products.' },
    { q: 'Are your locksmiths vetted?', a: 'Absolutely. All our locksmiths are DBS checked, fully insured, and members of the Master Locksmiths Association.' },
    { q: 'Do you charge for call-outs?', a: 'We provide free quotes over the phone. The price we quote is the price you pay - no hidden charges or call-out fees.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Lock className="text-white" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900">Guardian Locks</span>
                <span className="text-xs text-slate-500 font-medium">Professional Locksmiths</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#areas" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Areas</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="tel:08001234567" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                <Phone size={18} /> 0800 123 4567
              </a>
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-base font-medium text-slate-700 py-2">Services</a>
              <a href="#process" className="text-base font-medium text-slate-700 py-2">How It Works</a>
              <a href="#areas" className="text-base font-medium text-slate-700 py-2">Areas</a>
              <a href="#faq" className="text-base font-medium text-slate-700 py-2">FAQ</a>
              <a href="tel:08001234567" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold">
                <Phone size={18} /> 0800 123 4567
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Shield size={14} /> MLA Approved Locksmiths
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Professional Locksmith Services
                <span className="block text-blue-600 mt-2">24 Hours a Day</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Locked out? Need your locks changed? Our team of certified locksmiths provides fast, reliable service across the region. No call-out fees, no hidden charges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:08001234567" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  <Phone size={22} /> Call Now Free
                </a>
                <a href="#services" className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
                  View Services <ArrowRight size={20} />
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Clock size={18} className="text-blue-600" /> 24/7 Available</div>
                <div className="flex items-center gap-2"><Timer size={18} className="text-blue-600" /> 30 Min Response</div>
                <div className="flex items-center gap-2"><BadgeCheck size={18} className="text-blue-600" /> DBS Checked</div>
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-3xl" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-300 rounded-full opacity-30 blur-2xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=900&fit=crop" 
                    alt="Professional locksmith at work" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">15,000+</p>
                      <p className="text-sm text-slate-500">Jobs Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="text-blue-400" size={28} />
              <span className="font-bold text-lg">MLA Approved</span>
              <span className="text-slate-400 text-sm">Master Locksmiths</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-blue-400" size={28} />
              <span className="font-bold text-lg">Fully Insured</span>
              <span className="text-slate-400 text-sm">£5M Coverage</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BadgeCheck className="text-blue-400" size={28} />
              <span className="font-bold text-lg">DBS Checked</span>
              <span className="text-slate-400 text-sm">Vetted Staff</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ThumbsUp className="text-blue-400" size={28} />
              <span className="font-bold text-lg">4.9/5 Rating</span>
              <span className="text-slate-400 text-sm">2,500+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Our Professional Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From emergency lockouts to complete security upgrades, we have the expertise to handle all your lock and key needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-6">Trusted by Thousands of Customers</h2>
              <p className="text-lg text-slate-600 mb-10">When you're locked out or need security advice, you need a locksmith you can trust. Here's why thousands of customers choose us every year.</p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: 'Rapid Response', desc: 'Average arrival time of just 30 minutes, 24 hours a day, 7 days a week.' },
                  { icon: BadgeCheck, title: 'Certified Professionals', desc: 'All our locksmiths are MLA approved and DBS background checked.' },
                  { icon: Wrench, title: 'Quality Workmanship', desc: 'We use only the best tools and parts, backed by our 12-month guarantee.' },
                  { icon: Shield, title: 'No Hidden Fees', desc: 'Fixed price quotes with no call-out charges or surprise costs.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0">
                      <item.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=700&fit=crop" 
                alt="Locksmith with tools" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">How It Works</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Getting help is simple. Here's what to expect when you call us.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-800 p-8 rounded-2xl h-full border border-slate-700 hover:border-blue-500 transition-colors">
                  <span className="text-5xl font-black text-blue-500 opacity-50">{step.step}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-slate-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Security Assessment</h2>
              <p className="text-blue-100 text-lg mb-6">Not sure if your home is secure? Book a free security assessment with one of our experts. We'll check your locks and advise on any upgrades.</p>
              <ul className="space-y-3">
                {['Complete lock inspection', 'Vulnerability assessment', 'Upgrade recommendations', 'No obligation quote'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-200" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Book Your Free Assessment</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-blue-200 text-white" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-blue-200 text-white" />
                  <input type="text" placeholder="Postcode" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-blue-200 text-white" />
                  <button type="submit" className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                    Request Assessment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Areas We Cover</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide locksmith services across the North of England with rapid response times.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-100 hover:border-blue-300 transition-colors">
                <MapPin className="text-blue-600 shrink-0" size={18} />
                <span className="font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 mt-8">Don't see your area? Give us a call - we may still be able to help.</p>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-bold mb-6">
            <AlertTriangle size={16} /> Emergency? We're Ready
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">Locked Out Right Now?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Don't wait in the cold. Our emergency locksmiths are available 24/7 with an average response time of just 30 minutes.</p>
          <a href="tel:08001234567" className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50">
            <Phone size={28} /> 0800 123 4567
          </a>
          <p className="text-slate-400 mt-6">Free call • No call-out fee • Fixed prices</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Lock className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Guardian Locks</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Professional locksmith services across the North of England. Available 24 hours a day, 7 days a week.</p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Award size={16} className="text-blue-400" />
                MLA Approved Member
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Emergency Lockout</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lock Replacement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Key Cutting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Auto Locksmith</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Areas</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Manchester</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liverpool</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leeds</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sheffield</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Birmingham</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:08001234567" className="hover:text-white transition-colors">0800 123 4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:info@guardianlocks.co.uk" className="hover:text-white transition-colors">info@guardianlocks.co.uk</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-400" />
                  24/7 Emergency Service
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Guardian Locks. All rights reserved.</p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
