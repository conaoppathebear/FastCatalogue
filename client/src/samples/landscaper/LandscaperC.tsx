import React from 'react';
import { Sparkles, Palette, Layers, Wind, Droplets, ArrowRight, Instagram, Facebook, Twitter, Mail, MapPin, Phone, Info, ChevronRight, Menu, X } from 'lucide-react';

export function LandscaperC() {
  const [activeService, setActiveService] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-serif text-[#2D2926]">
      {/* Luxury Navigation */}
      <nav className="fixed w-full z-50 px-6 py-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center bg-white/40 backdrop-blur-xl border border-white/20 rounded-full px-10 py-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-light tracking-[0.3em] uppercase text-[#2D2926]">Auric <span className="font-bold">Gardens</span></span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.25em]">
            <a href="#" className="hover:text-[#C5A059] transition-colors">The Studio</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Principles</a>
            <a href="#" className="bg-[#2D2926] text-white px-8 py-3 rounded-full hover:bg-[#C5A059] transition-all">Inquire</a>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Minimalist & Elegant */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1600&h=1200&fit=crop" 
            className="w-full h-full object-cover opacity-[0.15] scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCFB]/50 to-[#FDFCFB]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <div className="h-px w-20 bg-[#C5A059]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059]">Architecture Of Nature</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-light leading-[1] mb-12 tracking-tight">
              Curated <br /> 
              <span className="italic serif">Outdoors.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#5D5956] leading-relaxed max-w-2xl mb-16 border-l-2 border-[#C5A059]/30 pl-10">
              We specialize in the creation of exceptional outdoor living spaces that harmonize modern architecture with the wild soul of nature. 
            </p>
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
              <button className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#C5A059] transition-all">
                <span className="w-20 h-20 rounded-full border border-[#2D2926] flex items-center justify-center group-hover:bg-[#2D2926] group-hover:text-white transition-all duration-500">
                  <ArrowRight size={24} />
                </span>
                Begin Journey
              </button>
              <div className="flex gap-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A09C99] mb-2">Est.</p>
                  <p className="text-lg font-light">2008</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A09C99] mb-2">Projects</p>
                  <p className="text-lg font-light">450+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[9px] uppercase tracking-[0.3em]">Discover</span>
          <div className="w-px h-20 bg-[#2D2926]" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative mb-20 lg:mb-0">
              <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[20rem] shadow-2xl relative z-10 border-[1.5rem] border-[#FDFCFB]">
                <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&h=1000&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C5A059] rounded-full flex flex-col items-center justify-center text-white p-10 text-center z-20 shadow-xl">
                <Sparkles size={32} className="mb-4" />
                <p className="text-xs uppercase font-bold tracking-[0.2em] leading-relaxed">Voted Best Boutique Garden Studio 2024</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-12 leading-tight">The Art Of <br /> <span className="italic">Observation.</span></h2>
              <div className="space-y-12">
                {[
                  { title: 'Subtle Integration', desc: 'Design that feels like it was always meant to be there, flowing perfectly from your interior spaces.' },
                  { title: 'Sustainable Luxury', desc: 'Sourcing the finest eco-conscious materials and selecting flora that thrives locally with grace.' },
                  { title: 'Tailored Narrative', desc: 'Every garden tells a story. We work intimately with you to translate your lifestyle into landscape.' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-4 group-hover:translate-x-2 transition-transform duration-500 block">Principle {i+1}</h4>
                    <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                    <p className="text-[#5D5956] leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Services - High End Slider Logic */}
      <section className="py-32 bg-[#FDFCFB] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059] mb-6">Expertise</h2>
              <h3 className="text-5xl font-light italic">Refined Services</h3>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-[#2D2926]/10 flex items-center justify-center hover:bg-[#2D2926] hover:text-white transition-all">
                <ChevronRight className="rotate-180" size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-[#2D2926]/10 flex items-center justify-center hover:bg-[#2D2926] hover:text-white transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Estate Design', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=1000&fit=crop', category: 'Master Planning' },
              { title: 'Lumina Patios', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=1000&fit=crop', category: 'Hardscape' },
              { title: 'Verdant Walls', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=1000&fit=crop', category: 'Vertical Flora' },
            ].map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-[#2D2926]/10 group-hover:bg-transparent transition-all" />
                </div>
                <div className="flex justify-between items-center border-b border-[#2D2926]/10 pb-6">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A09C99]">{s.category}</span>
                    <h4 className="text-2xl font-light">{s.title}</h4>
                  </div>
                  <Plus size={24} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft - Why Choose Us */}
      <section className="py-32 bg-[#2D2926] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-32">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059] mb-10">The Studio</h2>
            <h3 className="text-5xl font-light italic mb-10 leading-tight">Craftsmanship Without Compromise</h3>
            <p className="text-[#A09C99] font-light leading-relaxed">
              We employ a full-time team of landscape architects, stone masons, and horticulturalists. By keeping every discipline in-house, we ensure absolute fidelity to the original design intent.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { label: 'Experience', val: '15 Years' },
              { label: 'Planting', val: 'Bespoke' },
              { label: 'Management', val: 'Dedicated' },
              { label: 'Warranty', val: 'Lifetime' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-12 border border-white/5 hover:border-[#C5A059]/30 transition-all duration-700">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A09C99] mb-6">{stat.label}</p>
                <p className="text-3xl font-light italic">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Quote / Social Proof */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-px bg-[#C5A059] mx-auto mb-16" />
          <h2 className="text-4xl md:text-6xl font-light italic leading-relaxed mb-16">
            "They didn't just build a garden; they created a sanctuary. Every view from our home is now a living painting."
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[#C5A059] p-1 mb-2">
              <img src="https://i.pravatar.cc/150?u=luxury" className="w-full h-full rounded-full object-cover" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D2926]">Alastair & Victoria Vane</p>
            <p className="text-[9px] uppercase tracking-widest text-[#A09C99]">Hampshire Estate</p>
          </div>
        </div>
      </section>

      {/* FAQ - Editorial Style */}
      <section className="py-32 px-6 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059] mb-10">Inquiry</h2>
            <h3 className="text-4xl font-light italic mb-8">Details & Considerations</h3>
            <p className="text-[#5D5956] font-light leading-relaxed mb-10">
              Understanding the process is the first step toward your new garden. We invite you to explore the most common points of discussion.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#2D2926] pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
              Download Studio Brochure
            </button>
          </div>
          
          <div className="lg:w-2/3 space-y-16">
            {[
              { q: 'What is the initial engagement process?', a: 'Every project begins with a private site viewing where we assess the topography, soil structure, and architectural relationship of your property.' },
              { q: 'How long does a master plan development take?', a: 'A full estate design typically spans 4-6 weeks from initial survey to final rendered visualizations and planting plans.' },
              { q: 'Do you manage planning permissions for structural works?', a: 'Yes. Our studio handles all necessary council applications and heritage site permissions on your behalf.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#2D2926]/5 pb-10">
                <h4 className="text-2xl font-light mb-6 flex gap-8">
                  <span className="text-[#C5A059] serif italic">0{i+1}</span>
                  {faq.q}
                </h4>
                <div className="pl-16">
                  <p className="text-[#5D5956] font-light leading-relaxed max-w-xl">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas - Minimalist list */}
      <section className="py-20 border-t border-[#2D2926]/5 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#A09C99] mb-12">Studios Across The South East</p>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 text-[10px] font-bold uppercase tracking-[0.3em]">
            {['Mayfair', 'Cotswolds', 'Surrey Hills', 'Sevenoaks', 'Ascot', 'Winchester'].map(city => (
              <span key={city} className="hover:text-[#C5A059] transition-colors cursor-default">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call - Minimalist */}
      <section className="py-40 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-light leading-[1.1] mb-16 tracking-tighter">
            Let's discuss <br /> your <span className="italic serif text-[#C5A059]">vision.</span>
          </h2>
          <div className="flex flex-col items-center gap-12">
            <button className="bg-[#2D2926] text-white px-16 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all shadow-2xl">
              Request Portfolio Access
            </button>
            <div className="h-px w-20 bg-[#C5A059]" />
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A09C99] mb-4">Direct Inquiry</p>
              <a href="tel:0208123456" className="text-4xl font-light hover:text-[#C5A059] transition-colors tracking-tight">0208 123 456</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Elegant */}
      <footer className="bg-[#FDFCFB] pt-40 pb-16 px-6 border-t border-[#2D2926]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-2">
              <h3 className="text-3xl font-light tracking-[0.3em] uppercase mb-12">Auric <span className="font-bold">Gardens</span></h3>
              <p className="text-[#5D5956] font-light leading-relaxed max-w-sm text-lg italic">
                A design studio dedicated to the intersection of modern luxury and biological diversity.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-10">Connections</h5>
              <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09C99]">
                <li className="flex items-center gap-3 hover:text-[#2D2926] cursor-pointer transition-colors"><Instagram size={14} /> Instagram</li>
                <li className="flex items-center gap-3 hover:text-[#2D2926] cursor-pointer transition-colors"><Twitter size={14} /> Twitter</li>
                <li className="flex items-center gap-3 hover:text-[#2D2926] cursor-pointer transition-colors"><Facebook size={14} /> Facebook</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-10">Legal</h5>
              <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09C99]">
                <li className="hover:text-[#2D2926] cursor-pointer transition-colors">Privacy Principles</li>
                <li className="hover:text-[#2D2926] cursor-pointer transition-colors">Terms of Engagement</li>
                <li className="hover:text-[#2D2926] cursor-pointer transition-colors">Cookies</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#2D2926]/5 pt-16 text-[9px] uppercase tracking-[0.4em] text-[#A09C99]">
            <p>© 2024 Auric Gardens Studio. All Rights Reserved.</p>
            <div className="flex gap-12">
              <span>Site by AG</span>
              <span>Back to Top</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Plus({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
