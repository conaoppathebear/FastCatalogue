import React from 'react';
import { ArrowRight, Mail, Phone, ChevronRight, Menu, X, Shield, Award, MapPin, Star, ChevronDown, CheckCircle, ArrowUpRight, Sparkles, Clock, Users } from 'lucide-react';

export function RooferC() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-['Cormorant_Garamond',serif] text-[#1A1714]">
      {/* Luxury Navigation - Floating Pill */}
      <nav className="fixed w-full z-50 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl border border-stone-200/50 rounded-full px-8 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider font-sans">CR</span>
              </div>
              <span className="text-xl tracking-[0.15em] uppercase text-[#1A1714]">
                <span className="font-light">Crown</span> <span className="font-bold">Roofing</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-10 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#5D5550]">
              <a href="#services" className="hover:text-[#8B7355] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#8B7355] transition-colors">Portfolio</a>
              <a href="#process" className="hover:text-[#8B7355] transition-colors">Process</a>
              <a href="#testimonials" className="hover:text-[#8B7355] transition-colors">Testimonials</a>
              <a href="#faq" className="hover:text-[#8B7355] transition-colors">FAQ</a>
              <a href="#contact" className="bg-[#1A1714] text-white px-8 py-3 rounded-full hover:bg-[#8B7355] transition-all">Enquire</a>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white mt-4 rounded-3xl p-8 shadow-xl border border-stone-100">
            <div className="space-y-4 text-center">
              <a href="#services" className="block text-lg py-2">Services</a>
              <a href="#portfolio" className="block text-lg py-2">Portfolio</a>
              <a href="#process" className="block text-lg py-2">Process</a>
              <a href="#testimonials" className="block text-lg py-2">Testimonials</a>
              <a href="#faq" className="block text-lg py-2">FAQ</a>
              <button className="w-full bg-[#1A1714] text-white py-4 rounded-full font-sans font-semibold uppercase tracking-widest text-sm mt-4">
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Elegant Split */}
      <section className="min-h-screen flex items-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 mb-16 lg:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-16 bg-[#8B7355]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355]">Architectural Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1] mb-10 tracking-tight">
                The Art of <br /> 
                <span className="font-semibold italic text-[#1A1714]">Protection.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-[#5D5550] leading-relaxed max-w-lg mb-12 border-l-2 border-[#8B7355]/30 pl-8">
                Meticulous restoration and bespoke engineering of exceptional roofing systems for the UK's most distinguished properties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-16">
                <a href="#contact" className="group flex items-center gap-5 text-[12px] font-sans font-semibold uppercase tracking-[0.3em] text-[#1A1714] hover:text-[#8B7355] transition-all">
                  <span className="w-16 h-16 rounded-full border-2 border-[#1A1714] flex items-center justify-center group-hover:bg-[#1A1714] group-hover:text-white transition-all duration-500">
                    <ArrowRight size={20} />
                  </span>
                  Private Consultation
                </a>
                <div className="h-px w-12 bg-stone-300 hidden sm:block" />
                <div className="flex gap-12">
                  <div>
                    <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8B7355] mb-1">Est.</p>
                    <p className="text-2xl font-light italic">1988</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8B7355] mb-1">Portfolio</p>
                    <p className="text-2xl font-light italic">£250M+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-t-full rounded-b-[15rem] overflow-hidden shadow-2xl relative border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
                  alt="Luxury heritage roof restoration"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8B7355]/5 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Subtle Credentials */}
      <section className="py-12 border-y border-stone-200/50 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              'Guild of Master Craftsmen',
              'Historic England Approved',
              'NFRC Member',
              'Grade I-II Listed Specialist',
              'The Georgian Group'
            ].map((cert) => (
              <span key={cert} className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-stone-400 hover:text-[#8B7355] transition-colors cursor-default">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Elegant Cards */}
      <section id="services" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">Our Disciplines</span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Specialist Services for <br /><span className="italic font-semibold">Exceptional Properties</span>
            </h2>
            <p className="text-xl text-[#5D5550] font-light leading-relaxed">
              Each project receives the same meticulous attention, from historic restorations to contemporary architectural installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Heritage Slate Restoration', desc: 'Expert restoration using reclaimed Welsh, Westmorland, and Spanish slates. Matched patina for seamless integration with existing roofscape.', icon: <Award size={28} /> },
              { title: 'Architectural Leadwork', desc: 'Traditional sand-cast lead installations for valleys, dormers, and decorative features. Executed by master leadworkers.', icon: <Shield size={28} /> },
              { title: 'Period Chimney Rebuilds', desc: 'Structural restoration and repointing using lime mortars. Conservation-grade materials and techniques throughout.', icon: <Sparkles size={28} /> },
              { title: 'Contemporary Roofing', desc: 'Modern zinc, copper, and composite systems for new-build luxury properties. Clean lines, hidden fixings, superior performance.', icon: <ArrowUpRight size={28} /> },
              { title: 'Flat Roof Systems', desc: 'Single-ply membranes and liquid-applied systems for modern extensions. Green roof and terrace installations.', icon: <CheckCircle size={28} /> },
              { title: 'Maintenance Programmes', desc: 'Bespoke annual inspection and maintenance contracts for estates, portfolios, and heritage properties.', icon: <Clock size={28} /> },
            ].map((service, i) => (
              <div key={i} className="group p-10 bg-white rounded-3xl border border-stone-100 hover:shadow-xl hover:border-[#8B7355]/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#FDFBF7] flex items-center justify-center text-[#8B7355] mb-8 group-hover:bg-[#8B7355] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-[#5D5550] leading-relaxed mb-6 font-light">{service.desc}</p>
                <a href="#contact" className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8B7355] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  Enquire <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Philosophy */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="mb-16 lg:mb-0">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">The Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-light italic leading-snug mb-12">
                "A roof is not merely a structure; it is the silent guardian of your legacy."
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: '01', title: 'Material Purity', desc: 'We source only the finest Welsh slates, heritage tiles, and high-purity lead to ensure generational longevity and authentic character.' },
                  { num: '02', title: 'Bespoke Engineering', desc: 'Every architectural detail is considered, from structural load-bearings to aesthetic symmetry, ensuring perfect integration with your property.' },
                  { num: '03', title: 'Discreet Execution', desc: 'Our teams operate with absolute professional discretion, ensuring minimal impact on your estate and complete privacy throughout.' },
                ].map((item, i) => (
                  <div key={i} className="group border-b border-stone-100 pb-10">
                    <h4 className="text-xl font-light mb-3 flex items-center gap-4">
                      <span className="text-[#8B7355] font-semibold italic">{item.num}</span>
                      {item.title}
                    </h4>
                    <p className="text-[#5D5550] leading-relaxed font-light pl-12">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=600&fit=crop" className="rounded-3xl mt-16 grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Craftsman at work" />
              <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=500&h=600&fit=crop" className="rounded-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Finished roofwork" />
              <div className="absolute -bottom-8 -right-4 bg-[#1A1714] rounded-full p-8 flex flex-col items-center justify-center text-white text-center z-20 shadow-2xl">
                <Award size={24} className="text-[#8B7355] mb-3" />
                <p className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em]">Excellence Award 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 bg-[#1A1714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">The Process</span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              A Considered <span className="italic font-semibold">Approach</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: 'I', title: 'Consultation', desc: 'Initial site visit and detailed assessment. We understand your property, your requirements, and your vision.', duration: 'Week 1' },
              { step: 'II', title: 'Specification', desc: 'Comprehensive proposal with material samples, detailed drawings, and transparent fixed pricing.', duration: 'Week 2-3' },
              { step: 'III', title: 'Execution', desc: 'Our master craftsmen commence work with minimal disruption. Daily updates and complete site management.', duration: 'Bespoke' },
              { step: 'IV', title: 'Completion', desc: 'Final inspection, documentation, and handover. Lifetime warranty on all workmanship.', duration: 'Upon Finish' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-[80px] font-light text-[#8B7355]/10 leading-none mb-4">{item.step}</div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#8B7355] mb-3 block">{item.duration}</span>
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-20 right-0 w-12 h-px bg-stone-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Featured Projects */}
      <section id="portfolio" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">Selected Works</span>
              <h2 className="text-4xl md:text-5xl font-light">Architectural <span className="italic font-semibold">Portfolio</span></h2>
            </div>
            <a href="#" className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8B7355] flex items-center gap-2 border-b border-[#8B7355] pb-1 hover:text-[#1A1714] hover:border-[#1A1714] transition-colors">
              View All Projects <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'The Hampshire Estate', category: 'Complete Slate Restoration', value: '£1.2M', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop' },
              { title: 'Belgravia Mews House', category: 'Modern Leadwork', value: '£450K', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop' },
              { title: 'Cotswold Priory', category: 'Heritage Tiling', value: '£890K', img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&h=800&fit=crop' },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-8 bg-stone-100 rounded-3xl relative">
                  <img src={project.img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#8B7355] mb-3 block">{project.category}</span>
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-light group-hover:text-[#8B7355] transition-colors">{project.title}</h4>
                  <ChevronRight size={20} className="text-[#8B7355] opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-stone-400 text-sm mt-2 font-sans">Project Value: {project.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '36', label: 'Years of Excellence' },
              { value: '500+', label: 'Projects Completed' },
              { value: '£250M', label: 'Portfolio Value' },
              { value: 'Lifetime', label: 'Workmanship Warranty' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-light italic text-[#1A1714] mb-2">{stat.value}</div>
                <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8B7355]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-light">Words from <span className="italic font-semibold">Our Clients</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Sir Julian Harte-Jones', title: 'The Surrey Estate', text: 'The transformation was absolute. Crown Roofing didn\'t just fix our leaks; they returned the architectural soul to our family estate. Their craftsmen treated our 400-year-old roof with the reverence it deserved.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
              { name: 'Lady Charlotte Pemberton', title: 'Berkshire Manor', text: 'Discretion, expertise, and an unwavering commitment to quality. They managed the entire restoration while we continued living in the property—we barely knew they were there. Remarkable.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-12 shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-[#8B7355] text-[#8B7355]" />
                  ))}
                </div>
                <p className="text-2xl font-light italic leading-relaxed mb-10 text-[#1A1714]">"{review.text}"</p>
                <div className="flex items-center gap-5">
                  <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#8B7355]" />
                  <div>
                    <div className="text-lg font-semibold text-[#1A1714]">{review.name}</div>
                    <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8B7355]">{review.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.5em] text-[#8B7355] mb-8 block">Studios Across The Home Counties</span>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 text-lg font-light">
            {['Chelsea', 'Richmond', 'Windsor', 'Oxshott', 'Sevenoaks', 'Ascot', 'Virginia Water', 'Esher', 'Cobham', 'Sunningdale'].map((area) => (
              <span key={area} className="hover:text-[#8B7355] transition-colors cursor-default">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-[#8B7355] mb-6 block">Frequently Asked</span>
            <h2 className="text-4xl md:text-5xl font-light">Common <span className="italic font-semibold">Enquiries</span></h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What sets Crown Roofing apart from other contractors?', a: 'We exclusively focus on high-value, architecturally significant properties. Our team includes master craftsmen with decades of experience in heritage materials and techniques. We maintain in-house specialists rather than subcontracting, ensuring consistent quality and complete accountability.' },
              { q: 'Do you work on listed buildings?', a: 'Absolutely. We are approved by Historic England and regularly work on Grade I and Grade II listed properties. We understand the nuances of conservation area requirements and work closely with local authorities to ensure compliance while achieving exceptional results.' },
              { q: 'What warranty do you provide?', a: 'All our workmanship carries a lifetime guarantee, fully underwritten by independent warranty providers. Materials carry manufacturer warranties ranging from 25 to 100+ years depending on the specification. We provide comprehensive documentation for insurance and resale purposes.' },
              { q: 'How long does a typical project take?', a: 'Timelines vary significantly based on scope and complexity. A heritage slate restoration on a country estate might take 8-16 weeks, while modern installations can often be completed in 2-4 weeks. We provide detailed programmes during the specification phase.' },
              { q: 'What is your pricing structure?', a: 'We provide fixed-price proposals following a thorough site assessment. Our pricing reflects the quality of materials and craftsmanship we deliver. While we are not the cheapest option, clients consistently report that the value far exceeds the investment.' },
              { q: 'Can you provide references?', a: 'We maintain a portfolio of completed projects with client testimonials and are happy to arrange site visits to previous works. Many of our clients prefer discretion, and we always seek permission before sharing contact details.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-stone-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-light pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8B7355] transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-[#5D5550] leading-relaxed font-light border-t border-stone-100 pt-6">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Elegant */}
      <section id="contact" className="py-40 bg-[#1A1714] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[80px] border-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[60px] border-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-12">
            Let's Craft Your <br /><span className="italic font-semibold text-[#8B7355]">Legacy.</span>
          </h2>
          <p className="text-xl text-stone-400 mb-16 max-w-2xl mx-auto font-light">
            Begin with a private consultation. We'll assess your property, understand your requirements, and present a bespoke proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <button className="bg-[#8B7355] hover:bg-[#A08060] text-white px-12 py-5 rounded-full text-[12px] font-sans font-semibold uppercase tracking-[0.3em] transition-all shadow-xl">
              Request Consultation
            </button>
            <a href="tel:+442081234567" className="border-2 border-stone-700 hover:border-[#8B7355] text-white px-12 py-5 rounded-full text-[12px] font-sans font-semibold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3">
              <Phone size={18} /> +44 20 8123 4567
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-stone-500">
            <a href="mailto:studio@crownroofing.co.uk" className="flex items-center justify-center gap-3 hover:text-white transition-colors">
              <Mail size={16} /> studio@crownroofing.co.uk
            </a>
            <span className="flex items-center justify-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MapPin size={16} /> Esher, Surrey
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#FDFBF7] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider font-sans">CR</span>
              </div>
              <span className="text-lg tracking-[0.15em] uppercase text-[#1A1714]">
                <span className="font-light">Crown</span> <span className="font-bold">Roofing</span>
              </span>
            </div>
            
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-stone-400">
              © 2024 Crown Roofing Specialists. All Rights Reserved.
            </p>
            
            <div className="flex gap-8 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-stone-400">
              <a href="#" className="hover:text-[#1A1714] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1A1714] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1A1714] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
