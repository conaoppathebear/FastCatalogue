import React from 'react';
import { Lock, Shield, ArrowRight, Instagram, Mail, Phone, ChevronDown, Menu, X, Award, Star, CheckCircle, Clock, MapPin, Users, Key, Building, Fingerprint, Eye, Crown, Diamond, Gem } from 'lucide-react';

export function LocksmithC() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { 
      title: 'Bespoke Access Systems', 
      desc: 'Custom-designed electronic access solutions for estates, penthouses, and private residences. Biometric, keypad, and proximity integration.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    { 
      title: 'High-Security Installations', 
      desc: 'Banham, Chubb, and Abloy premium locks. Multi-point locking systems for uncompromising protection.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    { 
      title: 'Safe & Vault Services', 
      desc: 'Installation, relocation, and discrete opening of luxury safes. Fire-rated and insurance-approved solutions.',
      image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop'
    },
    { 
      title: 'Smart Home Integration', 
      desc: 'Seamless integration with existing home automation systems. Remote access, monitoring, and audit trails.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
    },
  ];

  const features = [
    { icon: Eye, title: 'Discretion Assured', desc: 'Complete confidentiality for high-profile clients. NDAs available upon request.' },
    { icon: Crown, title: 'White Glove Service', desc: 'Appointments at your convenience. Our specialists arrive in unmarked vehicles.' },
    { icon: Diamond, title: 'Premium Products', desc: 'Only the finest security hardware from world-renowned manufacturers.' },
    { icon: Shield, title: 'Lifetime Warranty', desc: 'Every installation backed by our comprehensive lifetime guarantee.' },
  ];

  const testimonials = [
    { 
      name: 'Private Client', 
      location: 'Kensington', 
      text: 'Vanguard redesigned the entire security infrastructure of our townhouse. The attention to detail and discretion was exemplary.',
      type: 'Residential'
    },
    { 
      name: 'Family Office', 
      location: 'Mayfair', 
      text: 'We entrust all our properties to Vanguard. Their expertise in high-security systems is unmatched in London.',
      type: 'Portfolio'
    },
    { 
      name: 'Art Collector', 
      location: 'Chelsea', 
      text: 'The vault installation exceeded all expectations. Insurance-approved and beautifully integrated into the space.',
      type: 'Private Collection'
    },
  ];

  const areas = ['Mayfair', 'Belgravia', 'Kensington', 'Chelsea', 'Knightsbridge', 'Notting Hill', 'Holland Park', 'St John\'s Wood', 'Hampstead', 'Richmond', 'Wimbledon', 'Surrey'];

  const faqs = [
    { q: 'Do you offer consultations before committing to a project?', a: 'Absolutely. We begin every engagement with a complimentary security assessment at your property. This allows us to understand your requirements and provide tailored recommendations.' },
    { q: 'How do you ensure client confidentiality?', a: 'Discretion is fundamental to our service. All team members sign comprehensive NDAs, we use unmarked vehicles, and client records are encrypted and stored securely.' },
    { q: 'What brands do you work with?', a: 'We partner with the world\'s finest security manufacturers including Banham, Chubb, Abloy, Mul-T-Lock, and custom solutions from European artisan workshops.' },
    { q: 'Can you work with my architect or interior designer?', a: 'Certainly. We frequently collaborate with design professionals to ensure security solutions complement the aesthetic vision of a property.' },
    { q: 'What is your typical project timeline?', a: 'This varies based on scope. A lock upgrade can be completed same-day, while comprehensive security redesigns typically take 2-4 weeks from consultation to completion.' },
  ];

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'A senior security consultant visits your property to assess requirements and understand your lifestyle.' },
    { num: '02', title: 'Design', desc: 'We create a bespoke security architecture, balancing protection with aesthetics and convenience.' },
    { num: '03', title: 'Installation', desc: 'Our master craftsmen install with precision, respecting your schedule and minimising disruption.' },
    { num: '04', title: 'Aftercare', desc: 'Ongoing support, maintenance, and 24/7 emergency response for complete peace of mind.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-serif antialiased">
      <nav className="fixed w-full z-50 px-6 py-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center bg-white/80 backdrop-blur-2xl rounded-full px-8 py-4 shadow-sm border border-black/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                <Shield className="text-[#C5A059]" size={20} />
              </div>
              <span className="text-xl tracking-[0.15em] uppercase font-light">Vanguard <span className="font-bold">Security</span></span>
            </div>
            
            <div className="hidden lg:flex items-center gap-10">
              <a href="#services" className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5D5956] hover:text-[#1A1A1A] transition-colors">Services</a>
              <a href="#approach" className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5D5956] hover:text-[#1A1A1A] transition-colors">Approach</a>
              <a href="#areas" className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5D5956] hover:text-[#1A1A1A] transition-colors">Areas</a>
              <a href="#contact" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors">
                Private Enquiry
              </a>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl p-6 shadow-xl border border-black/5">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sm uppercase tracking-widest text-[#5D5956] py-2">Services</a>
              <a href="#approach" className="text-sm uppercase tracking-widest text-[#5D5956] py-2">Approach</a>
              <a href="#areas" className="text-sm uppercase tracking-widest text-[#5D5956] py-2">Areas</a>
              <a href="#contact" className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-center">
                Private Enquiry
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0] to-[#FAFAF8]" />
        <div className="absolute top-0 right-0 w-[60%] h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FAFAF8]/50 to-[#FAFAF8] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1000&fit=crop" 
            alt="Luxury residence" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-32">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059] mb-8 border-b border-[#C5A059] pb-2">
              Bespoke Security Architecture
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
              Invisible<br />
              <span className="font-bold italic text-[#1A1A1A]">Protection.</span><br />
              <span className="text-[#5D5956]">Absolute</span><br />
              <span className="font-bold">Discretion.</span>
            </h1>
            <p className="text-xl text-[#5D5956] leading-relaxed mb-12 font-light max-w-lg">
              Bespoke security solutions for discerning clients. We design, install, and maintain the world's most sophisticated residential protection systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all">
                Request Consultation <ArrowRight size={16} />
              </a>
              <a href="tel:02079461234" className="inline-flex items-center justify-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-white transition-all">
                <Phone size={16} /> 020 7946 1234
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#C5A059]">25+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#C5A059]">500+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Prime Properties</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-1 text-[#C5A059]">24/7</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Emergency Response</p>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-[#C5A059]" size={32} />
              <div className="text-left">
                <p className="text-sm font-bold">MLA Approved</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Master Locksmiths</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">Specialist <span className="font-bold italic">Services</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-[#F5F5F0]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-light mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-[#5D5956] leading-relaxed">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mt-6 hover:text-[#1A1A1A] transition-colors">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">The Vanguard Difference</span>
              <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-8 tracking-tight">Why Clients <span className="font-bold italic">Choose Us</span></h2>
              <p className="text-lg text-[#5D5956] leading-relaxed mb-12">
                For over two decades, London's most discerning homeowners have trusted Vanguard to protect what matters most. We combine traditional craftsmanship with cutting-edge technology, delivered with absolute discretion.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center shrink-0">
                      <feature.icon className="text-[#C5A059]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[#5D5956]">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full border border-[#C5A059] rounded-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=800&fit=crop" 
                  alt="Security specialist" 
                  className="rounded-3xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-24 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">A Considered <span className="font-bold italic">Process</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl hover:border-[#C5A059]/30 transition-colors">
                <span className="text-6xl font-light text-[#C5A059]/30">{step.num}</span>
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
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">Client <span className="font-bold italic">Reflections</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#FAFAF8] p-10 rounded-3xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-[#C5A059] fill-[#C5A059]" size={16} />
                  ))}
                </div>
                <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="border-t border-black/10 pt-6">
                  <p className="font-bold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-sm text-[#5D5956]">{t.location} · {t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#C5A059] to-[#D4B068] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light mb-4 tracking-tight">Complimentary Security <span className="font-bold italic">Assessment</span></h2>
              <p className="text-lg opacity-80 mb-6">
                Discover vulnerabilities and opportunities in your property's security. Our senior consultants provide a comprehensive evaluation with no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {['Full property walkthrough', 'Risk assessment report', 'Tailored recommendations', 'Budget guidance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <h3 className="text-xl font-bold mb-6">Request Your Assessment</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-[#5D5956] text-[#1A1A1A]" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-[#5D5956] text-[#1A1A1A]" />
                  <input type="tel" placeholder="Telephone" className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-[#5D5956] text-[#1A1A1A]" />
                  <textarea placeholder="Property Details" rows={3} className="w-full px-5 py-4 rounded-xl bg-white/80 border-0 placeholder-[#5D5956] text-[#1A1A1A] resize-none" />
                  <button type="submit" className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 lg:py-32 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Service Areas</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">Prime <span className="font-bold italic">Locations</span></h2>
            <p className="text-lg text-[#5D5956] mt-4 max-w-2xl mx-auto">
              We serve London's most prestigious addresses and the surrounding home counties.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-full border border-black/5 hover:border-[#C5A059] transition-colors">
                <MapPin className="text-[#C5A059]" size={14} />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-[#5D5956] mt-10 text-sm">
            Services also available throughout the Home Counties and internationally by arrangement.
          </p>
        </div>
      </section>

      <section id="faq" className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Information</span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 tracking-tight">Frequently <span className="font-bold italic">Asked</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-black/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFAF8] transition-colors"
                >
                  <span className="font-medium text-[#1A1A1A] pr-4">{faq.q}</span>
                  <ChevronDown className={`text-[#C5A059] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#5D5956] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 lg:py-32 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">Begin Your Journey</span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6 tracking-tight">Let's Discuss Your <span className="font-bold italic">Requirements</span></h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Whether you're securing a new acquisition or enhancing an existing residence, our team is ready to provide expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02079461234" className="inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4B068] transition-colors">
              <Phone size={18} /> 020 7946 1234
            </a>
            <a href="mailto:enquiries@vanguardsecurity.co.uk" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-colors">
              <Mail size={18} /> Send Enquiry
            </a>
          </div>
          <p className="text-white/40 mt-8 text-sm">
            Private line available 24 hours for existing clients
          </p>
        </div>
      </section>

      <footer className="bg-[#0F0F0F] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center">
                  <Shield className="text-[#C5A059]" size={18} />
                </div>
                <span className="text-xl tracking-[0.15em] uppercase font-light">Vanguard <span className="font-bold">Security</span></span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                Bespoke security architecture for London's most discerning homeowners. Absolute discretion, uncompromising quality.
              </p>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Award size={16} className="text-[#C5A059]" />
                <span className="uppercase tracking-wider">Master Locksmiths Association Approved</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Services</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">Access Systems</a></li>
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">High-Security Locks</a></li>
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">Safe Services</a></li>
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">Smart Integration</a></li>
                <li><a href="#" className="hover:text-[#C5A059] transition-colors">Emergency Response</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:02079461234" className="hover:text-[#C5A059] transition-colors block">020 7946 1234</a>
                    <span className="text-xs">General Enquiries</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <a href="mailto:enquiries@vanguardsecurity.co.uk" className="hover:text-[#C5A059] transition-colors">enquiries@vanguardsecurity.co.uk</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <span>24/7 Emergency Line for Clients</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs uppercase tracking-wider">© 2025 Vanguard Security. All rights reserved.</p>
            <div className="flex gap-6 text-white/40 text-xs uppercase tracking-wider">
              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
