import React from 'react';
import { Sparkles, Crown, Star, Diamond, Shield, Clock, Phone, MapPin, CheckCircle, ArrowRight, Menu, X, Award, Users, ChevronDown, Mail, Heart, Home, Building, Gem, Palette, Wine, Key } from 'lucide-react';

export function CleanerC() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { 
      title: 'Private Residence Care', 
      desc: 'Bespoke cleaning programmes for luxury homes and estates. Your dedicated team knows every detail of your property.',
      icon: Home
    },
    { 
      title: 'Event Preparation', 
      desc: 'Immaculate presentation for dinner parties, gatherings, and special occasions. Pre and post-event services.',
      icon: Wine
    },
    { 
      title: 'Property Management', 
      desc: 'Comprehensive care for second homes, pied-à-terres, and rental properties between visits.',
      icon: Key
    },
    { 
      title: 'Art & Antiques Care', 
      desc: 'Specialist cleaning for fine art, antiques, and precious materials by trained conservators.',
      icon: Palette
    },
    { 
      title: 'Seasonal Deep Clean', 
      desc: 'Intensive seasonal refreshes including chandeliers, draperies, and hard-to-reach spaces.',
      icon: Sparkles
    },
    { 
      title: 'Wardrobe & Linen', 
      desc: 'Organisation and care of fine wardrobes, linens, and delicates. Specialist fabric handling.',
      icon: Diamond
    },
  ];

  const differentiators = [
    { icon: Crown, title: 'Assigned Household Team', desc: 'The same trusted team for every visit, thoroughly trained to your specifications.' },
    { icon: Shield, title: 'Absolute Discretion', desc: 'NDAs signed as standard. Your privacy is paramount.' },
    { icon: Diamond, title: 'Premium Products', desc: 'We use only the finest products suitable for delicate surfaces and materials.' },
    { icon: Clock, title: 'Flexible Scheduling', desc: 'Service when you need it, around your lifestyle and schedule.' },
  ];

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'A senior manager visits your property to understand your requirements and preferences.' },
    { num: '02', title: 'Team Selection', desc: 'We curate a dedicated team matched to your property type and personal standards.' },
    { num: '03', title: 'Trial Service', desc: 'An initial service allows you to experience our work before committing.' },
    { num: '04', title: 'Ongoing Care', desc: 'Regular service with quarterly reviews to ensure continued excellence.' },
  ];

  const testimonials = [
    { 
      name: 'Private Client', 
      location: 'Mayfair', 
      text: 'Pristine has been caring for our London residence for five years. Their attention to detail is extraordinary, and the discretion impeccable.',
      type: 'Townhouse'
    },
    { 
      name: 'Estate Office', 
      location: 'Cotswolds', 
      text: 'They manage all our properties with the same exacting standards. The transition between tenants is seamless.',
      type: 'Country Estate'
    },
    { 
      name: 'Art Collector', 
      location: 'Knightsbridge', 
      text: 'Finding a team I trust around my collection was difficult. Pristine\'s specialist training gives me complete confidence.',
      type: 'Private Collection'
    },
  ];

  const areas = ['Mayfair', 'Knightsbridge', 'Chelsea', 'Belgravia', 'Kensington', 'Notting Hill', 'Holland Park', 'St John\'s Wood', 'Hampstead', 'Richmond', 'Cotswolds', 'Surrey Hills'];

  const faqs = [
    { q: 'How do you select and train your staff?', a: 'All team members undergo a rigorous selection process including enhanced DBS checks, reference verification, and personal interviews. They complete our comprehensive training programme covering luxury property care, handling of fine materials, and our discretion protocols.' },
    { q: 'Can the same team always attend my property?', a: 'Absolutely. We assign a dedicated team to each client who become intimately familiar with your property, preferences, and standards. Continuity is essential to our service.' },
    { q: 'Do you sign confidentiality agreements?', a: 'Yes. All staff sign comprehensive NDAs, and we can accommodate additional client-specific confidentiality requirements. Discretion is fundamental to everything we do.' },
    { q: 'Can you care for fine art and antiques?', a: 'Yes. Our specialist team includes trained conservators who understand the specific requirements of caring for fine art, antiques, gilding, and delicate materials.' },
    { q: 'What products do you use?', a: 'We use premium, pH-neutral products suitable for the finest surfaces. We can also accommodate specific product preferences and work with specialist conservation-grade materials when required.' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFA] font-serif antialiased">
      <nav className="fixed w-full z-50 px-6 py-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 shadow-sm border border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                <Crown className="text-[#D4AF37]" size={18} />
              </div>
              <span className="text-xl tracking-[0.15em] uppercase font-light text-[#2C3E50]">Pristine</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-10">
              <a href="#services" className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-500 hover:text-[#2C3E50] transition-colors">Services</a>
              <a href="#approach" className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-500 hover:text-[#2C3E50] transition-colors">Approach</a>
              <a href="#areas" className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-500 hover:text-[#2C3E50] transition-colors">Areas</a>
              <a href="#contact" className="bg-[#2C3E50] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-colors">
                Private Enquiry
              </a>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl p-6 shadow-xl border border-stone-100">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sm uppercase tracking-widest text-stone-500 py-2">Services</a>
              <a href="#approach" className="text-sm uppercase tracking-widest text-stone-500 py-2">Approach</a>
              <a href="#areas" className="text-sm uppercase tracking-widest text-stone-500 py-2">Areas</a>
              <a href="#contact" className="bg-[#2C3E50] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-center">
                Private Enquiry
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-[#FDFCFA] to-[#FDFCFA]" />
        <div className="absolute top-0 right-0 w-[55%] h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FDFCFA]/60 to-[#FDFCFA] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1000&fit=crop" 
            alt="Luxury interior" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-32">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] mb-8 border-b border-[#D4AF37] pb-2">
              Luxury Household Management
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight text-[#2C3E50]">
              Impeccable<br />
              <span className="font-bold italic">Standards.</span><br />
              <span className="text-stone-400">Absolute</span><br />
              <span className="font-bold">Discretion.</span>
            </h1>
            <p className="text-xl text-stone-500 leading-relaxed mb-12 font-light max-w-lg">
              Bespoke cleaning and household management for London's finest properties. A dedicated team who understand the meaning of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#2C3E50] text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all">
                Request Consultation <ArrowRight size={16} />
              </a>
              <a href="tel:02079461234" className="inline-flex items-center justify-center gap-3 border border-[#2C3E50] text-[#2C3E50] px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#2C3E50] hover:text-white transition-all">
                <Phone size={16} /> 020 7946 1234
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#2C3E50] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#D4AF37]">25+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Years Excellence</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#D4AF37]">200+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Private Clients</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#D4AF37]">100%</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Client Retention</p>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-[#D4AF37]" size={32} />
              <div className="text-left">
                <p className="text-sm font-bold">UKHA Member</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Household Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight text-[#2C3E50]">Bespoke <span className="font-bold italic">Care</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group p-10 border border-stone-100 rounded-3xl hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2C3E50] transition-colors">
                  <service.icon className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-light text-[#2C3E50] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FDFCFA]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">The Pristine Difference</span>
              <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-8 tracking-tight text-[#2C3E50]">Service <span className="font-bold italic">Redefined</span></h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-12">
                For over two decades, we have set the standard for luxury household care in London. Our clients trust us not merely to clean, but to maintain the very essence of their homes.
              </p>
              
              <div className="space-y-8">
                {differentiators.map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                      <item.icon className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-1">{item.title}</h3>
                      <p className="text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <div className="absolute -top-8 -left-8 w-full h-full border border-[#D4AF37] rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop" 
                alt="Luxury interior care" 
                className="rounded-3xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-24 lg:py-32 bg-[#2C3E50] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">The <span className="font-bold italic">Journey</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl hover:border-[#D4AF37]/30 transition-colors">
                <span className="text-6xl font-light text-[#D4AF37]/30">{step.num}</span>
                <h3 className="text-xl font-light mt-4 mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight text-[#2C3E50]">Client <span className="font-bold italic">Reflections</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#FDFCFA] p-10 rounded-3xl border border-stone-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                  ))}
                </div>
                <p className="text-lg text-[#2C3E50] leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="border-t border-stone-200 pt-6">
                  <p className="font-bold text-[#2C3E50]">{t.name}</p>
                  <p className="text-sm text-stone-500">{t.location} · {t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#2C3E50]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light mb-4 tracking-tight">Complimentary <span className="font-bold italic">Consultation</span></h2>
              <p className="text-lg opacity-80 mb-6">
                Discover how Pristine can transform the care of your property. Our senior managers provide personal consultations to understand your needs.
              </p>
              <ul className="space-y-3 mb-8">
                {['Property assessment', 'Service recommendations', 'Team selection discussion', 'No obligation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <h3 className="text-xl font-bold mb-6">Request Consultation</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-stone-400 text-[#2C3E50]" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-stone-400 text-[#2C3E50]" />
                  <input type="tel" placeholder="Telephone" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-stone-400 text-[#2C3E50]" />
                  <input type="text" placeholder="Property Location" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-stone-400 text-[#2C3E50]" />
                  <button type="submit" className="w-full bg-[#2C3E50] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#1a252f] transition-colors">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 lg:py-32 bg-[#FDFCFA]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Service Areas</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight text-[#2C3E50]">Prime <span className="font-bold italic">Locations</span></h2>
            <p className="text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
              We serve London's most prestigious addresses and the surrounding home counties.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-full border border-stone-100 hover:border-[#D4AF37] transition-colors">
                <MapPin className="text-[#D4AF37]" size={14} />
                <span className="text-sm font-medium text-[#2C3E50]">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-stone-400 mt-10 text-sm">
            Services also available throughout the Home Counties by arrangement.
          </p>
        </div>
      </section>

      <section id="faq" className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Information</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight text-[#2C3E50]">Frequently <span className="font-bold italic">Asked</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-medium text-[#2C3E50] pr-4">{faq.q}</span>
                  <ChevronDown className={`text-[#D4AF37] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-stone-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 lg:py-32 bg-[#2C3E50] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Begin</span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6 tracking-tight">Experience <span className="font-bold italic">Pristine</span></h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Discover how we can elevate the care of your property. Our senior managers are available for personal consultations at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02079461234" className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#2C3E50] px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C5A028] transition-colors">
              <Phone size={18} /> 020 7946 1234
            </a>
            <a href="mailto:enquiries@pristinelondon.co.uk" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#2C3E50] transition-colors">
              <Mail size={18} /> Send Enquiry
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a252f] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2C3E50] border border-white/10 rounded-full flex items-center justify-center">
                  <Crown className="text-[#D4AF37]" size={18} />
                </div>
                <span className="text-xl tracking-[0.15em] uppercase font-light">Pristine</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                Luxury household management for London's finest properties. Impeccable standards, absolute discretion.
              </p>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Award size={16} className="text-[#D4AF37]" />
                <span className="uppercase tracking-wider">UK Household Association Member</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Services</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Private Residence Care</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Event Preparation</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Property Management</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Art & Antiques Care</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:02079461234" className="hover:text-[#D4AF37] transition-colors block">020 7946 1234</a>
                    <span className="text-xs">General Enquiries</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <a href="mailto:enquiries@pristinelondon.co.uk" className="hover:text-[#D4AF37] transition-colors">enquiries@pristinelondon.co.uk</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Mon-Sat: 8am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs uppercase tracking-wider">© 2025 Pristine London. All rights reserved.</p>
            <div className="flex gap-6 text-white/40 text-xs uppercase tracking-wider">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
