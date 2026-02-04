import React from 'react';
import { Sparkles, Shield, Clock, Phone, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Award, Home, Building, Sofa, SprayCanIcon, Heart, Users, ChevronDown, Mail, Leaf, ThumbsUp, Calendar, Droplets, Wind } from 'lucide-react';

export function CleanerA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { title: 'Regular Domestic Cleaning', desc: 'Weekly, fortnightly, or monthly cleans tailored to your home. Consistent cleaners who know your preferences.', icon: Home, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop' },
    { title: 'Deep Cleaning', desc: 'Intensive top-to-bottom cleaning for move-ins, spring cleans, or post-renovation. Every corner covered.', icon: Sparkles, image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop' },
    { title: 'Office & Commercial', desc: 'Professional cleaning for offices, retail spaces, and commercial properties. Flexible scheduling around your business hours.', icon: Building, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
    { title: 'End of Tenancy', desc: 'Get your full deposit back with our comprehensive end of tenancy cleaning. Landlord and letting agent approved.', icon: Sofa, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { title: 'Carpet & Upholstery', desc: 'Professional deep cleaning for carpets, rugs, sofas, and mattresses. Remove stains, odours, and allergens.', icon: SprayCanIcon, image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=400&fit=crop' },
    { title: 'Airbnb & Holiday Lets', desc: 'Quick turnaround cleaning between guests. Laundry service and restocking available. 5-star reviews guaranteed.', icon: Calendar, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop' },
  ];

  const processSteps = [
    { step: '01', title: 'Book Online', desc: 'Choose your service and pick a time that suits you. Instant confirmation.' },
    { step: '02', title: 'Meet Your Cleaner', desc: 'We match you with a vetted, experienced cleaner who fits your needs.' },
    { step: '03', title: 'Relax & Enjoy', desc: 'Come home to a sparkling clean space. Happiness guaranteed.' },
    { step: '04', title: 'Easy Rebooking', desc: 'Set up regular cleans or book again with one click. Simple as that.' },
  ];

  const testimonials = [
    { name: 'Sophie Williams', location: 'Bristol', text: 'Crystal Clean has been looking after our home for 2 years now. Sarah is fantastic - thorough, reliable, and trustworthy. Highly recommend!', rating: 5 },
    { name: 'Mark Johnson', location: 'Bath', text: 'Used them for an end of tenancy clean. The flat looked better than when I moved in! Got my full deposit back with no questions.', rating: 5 },
    { name: 'Lucy Chen', location: 'Cardiff', text: 'As a busy mum of three, having Crystal Clean come every week is a lifesaver. The house always smells amazing and looks spotless.', rating: 5 },
  ];

  const areas = ['Bristol', 'Bath', 'Cardiff', 'Newport', 'Gloucester', 'Cheltenham', 'Weston-super-Mare', 'Swindon', 'Exeter', 'Plymouth', 'Taunton', 'Bridgwater'];

  const faqs = [
    { q: 'Do I need to provide cleaning supplies?', a: 'No, our cleaners bring all their own professional-grade, eco-friendly products and equipment. If you have preferences for specific products, just let us know.' },
    { q: 'Are your cleaners insured and vetted?', a: 'Absolutely. Every cleaner is fully insured, DBS background checked, and has references verified. Your home is in safe hands.' },
    { q: 'What if I\'m not happy with the clean?', a: 'We offer a 100% satisfaction guarantee. If anything isn\'t up to standard, we\'ll send someone back to put it right at no extra cost.' },
    { q: 'Can I have the same cleaner each time?', a: 'Yes! We assign you a regular cleaner who gets to know your home and preferences. If they\'re unavailable, we\'ll always check with you first.' },
    { q: 'How do I pay?', a: 'Payment is simple and secure online. You can pay after each clean or set up automatic payments for regular bookings.' },
  ];

  const stats = [
    { value: '10K+', label: 'Happy Homes' },
    { value: '4.9', label: 'Star Rating' },
    { value: '500+', label: 'Vetted Cleaners' },
    { value: '98%', label: 'Rebook Rate' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <nav className="fixed w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900">Crystal Clean</span>
                <span className="text-xs text-slate-500 font-medium">Professional Cleaning</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#areas" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Areas</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">FAQ</a>
              <a href="#book" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-teal-200 transition-all">
                Book Now <ArrowRight size={16} />
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
              <a href="#how-it-works" className="text-base font-medium text-slate-700 py-2">How It Works</a>
              <a href="#areas" className="text-base font-medium text-slate-700 py-2">Areas</a>
              <a href="#faq" className="text-base font-medium text-slate-700 py-2">FAQ</a>
              <a href="#book" className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full text-base font-bold">
                Book Now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50/50 to-white">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200 rounded-full opacity-20 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-xs font-bold mb-6">
                <Star size={14} className="fill-teal-600" /> Rated 4.9/5 by 2,500+ customers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                A Spotless Home,
                <span className="block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mt-2">Without the Effort</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Professional, reliable, and eco-friendly cleaning services for homes and offices across the South West. Book online in 60 seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#book" className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-teal-200 transition-all">
                  Get Instant Quote <ArrowRight size={20} />
                </a>
                <a href="tel:08001234567" className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-teal-500 hover:text-teal-600 transition-all">
                  <Phone size={20} /> 0800 123 4567
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-teal-500" /> 100% Satisfaction Guarantee</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-teal-500" /> Vetted & Insured Cleaners</div>
                <div className="flex items-center gap-2"><CheckCircle size={18} className="text-teal-500" /> Eco-Friendly Products</div>
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-200 to-teal-200 rounded-3xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=900&fit=crop" 
                    alt="Professional cleaner at work" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                      <ThumbsUp className="text-teal-600" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">10,000+</p>
                      <p className="text-sm text-slate-500">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-4xl font-bold text-teal-400">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
            <div className="flex items-center gap-3">
              <Shield className="text-white/80" size={28} />
              <span className="font-bold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-white/80" size={28} />
              <span className="font-bold">DBS Checked</span>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="text-white/80" size={28} />
              <span className="font-bold">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-white/80" size={28} />
              <span className="font-bold">Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Cleaning That Fits Your Life</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From regular home cleans to one-off deep cleans, we've got you covered with services designed around your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
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

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Why Crystal Clean?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-6">Trusted by Thousands of Homes</h2>
              <p className="text-lg text-slate-600 mb-10">We're not just another cleaning company. We're a team of passionate professionals dedicated to making your space shine while respecting your home and the environment.</p>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Consistent Cleaners', desc: 'Same cleaner every time who knows your home and preferences.' },
                  { icon: Shield, title: 'Fully Vetted & Insured', desc: 'DBS checked, referenced, and £5 million public liability cover.' },
                  { icon: Leaf, title: 'Eco-Friendly Products', desc: 'We use non-toxic, biodegradable cleaning products that are safe for your family and pets.' },
                  { icon: ThumbsUp, title: '100% Satisfaction Guarantee', desc: 'Not happy? We\'ll come back and clean it again, free of charge.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-teal-600" size={24} />
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
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=700&fit=crop" 
                alt="Happy home after cleaning" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-bold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">Booking Made Simple</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Get your home cleaned in four easy steps. No phone calls, no hassle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-3xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">{t.name.charAt(0)}</span>
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

      <section id="book" className="py-20 bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Get Your Free Quote</h2>
              <p className="text-teal-100 text-lg mb-6">Tell us about your cleaning needs and we'll get back to you with a personalised quote within the hour.</p>
              <ul className="space-y-3">
                {['No obligation quote', 'Same-day response', 'Flexible scheduling', 'Transparent pricing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-white" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Quote</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none" />
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-500 focus:border-teal-500 focus:outline-none">
                    <option>Select Service</option>
                    <option>Regular Domestic Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>End of Tenancy</option>
                    <option>Office Cleaning</option>
                    <option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                    Get My Quote <ArrowRight className="inline ml-2" size={18} />
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
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Areas We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide cleaning services across the South West of England.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-100 hover:border-teal-300 transition-colors">
                <MapPin className="text-teal-600 shrink-0" size={18} />
                <span className="font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 mt-8">Don't see your area? Contact us - we may still be able to help!</p>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`text-teal-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
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
          <Sparkles className="mx-auto mb-6 text-teal-400" size={48} />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Book your first clean today and experience the Crystal Clean difference. New customers get 20% off their first booking!</p>
          <a href="#book" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all">
            Book Your Clean <ArrowRight size={22} />
          </a>
          <p className="text-slate-400 mt-6">Or call us on <a href="tel:08001234567" className="text-teal-400 hover:underline">0800 123 4567</a></p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Crystal Clean</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Professional, eco-friendly cleaning services across the South West. Making homes sparkle since 2015.</p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Award size={16} className="text-teal-400" />
                Which? Trusted Trader
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Regular Cleaning</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Deep Cleaning</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">End of Tenancy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Office Cleaning</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Carpet Cleaning</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Areas</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Bristol</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Bath</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cardiff</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Gloucester</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Exeter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-teal-400" />
                  <a href="tel:08001234567" className="hover:text-teal-400 transition-colors">0800 123 4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-teal-400" />
                  <a href="mailto:hello@crystalclean.co.uk" className="hover:text-teal-400 transition-colors">hello@crystalclean.co.uk</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-teal-400" />
                  Mon-Sat: 8am - 6pm
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Crystal Clean. All rights reserved.</p>
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
