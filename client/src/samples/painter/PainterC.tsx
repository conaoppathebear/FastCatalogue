import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Layers, 
  Wind, 
  Droplets, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  Info, 
  ChevronRight, 
  Menu, 
  X, 
  PaintBucket,
  Search,
  BookOpen,
  Feather,
  Compass
} from 'lucide-react';

export function PainterC() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-serif text-[#1C1C1C] selection:bg-[#6554c0] selection:text-white">
      {/* Editorial Navigation */}
      <nav className="fixed w-full z-50 px-6 py-10 transition-all duration-700 bg-transparent hover:bg-white/40 hover:backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto flex justify-between items-end">
          <div className="flex items-center gap-4 group cursor-pointer">
             <span className="text-4xl font-light tracking-tighter serif italic group-hover:text-[#6554c0] transition-colors">Atelier</span>
             <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#A09C99] mt-2 border-l border-[#A09C99] pl-4">Color Study</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-16 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1C1C1C]">
            <a href="#portfolio" className="hover:text-[#6554c0] transition-colors pb-1 border-b border-transparent hover:border-[#6554c0]">The Portfolio</a>
            <a href="#techniques" className="hover:text-[#6554c0] transition-colors pb-1 border-b border-transparent hover:border-[#6554c0]">Techniques</a>
            <a href="#philosophy" className="hover:text-[#6554c0] transition-colors pb-1 border-b border-transparent hover:border-[#6554c0]">Philosophy</a>
            <button className="text-[#6554c0] border border-[#6554c0] px-10 py-4 rounded-full hover:bg-[#6554c0] hover:text-white transition-all shadow-xl shadow-[#6554c0]/10">
              Consultation
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Editorial Layout */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative z-10">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#6554c0] mb-8 block animate-fade-in">Bespoke Finish & Color</span>
              <h1 className="text-8xl md:text-[10rem] font-light leading-[0.85] mb-12 tracking-tighter">
                Walls As <br /> <span className="italic serif">Fine Art.</span>
              </h1>
              <p className="text-2xl font-light text-[#5D5956] leading-relaxed max-w-xl mb-16 serif italic">
                A boutique decorating studio specializing in editorial-grade finishes, custom color blending, and historical restoration.
              </p>
              <div className="flex items-center gap-12">
                 <button className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] hover:text-[#6554c0] transition-all">
                   Begin Selection <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <div className="w-16 h-px bg-[#1C1C1C]/10" />
                 <span className="text-[9px] font-bold uppercase tracking-widest text-[#A09C99]">Based in London & Edinburgh</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
             <div className="aspect-[4/5] bg-stone-200 rounded-[5rem] overflow-hidden relative shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=1000&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Luxury Room" />
                <div className="absolute inset-0 bg-[#6554c0]/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
             </div>
             {/* Abstract shape */}
             <div className="absolute -top-10 -right-10 w-64 h-64 border border-[#6554c0]/20 rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Bar - Quiet Minimalism */}
      <section className="py-20 bg-[#FAF9F6] border-y border-[#1C1C1C]/5">
         <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
               <span className="text-xs font-bold uppercase tracking-[0.4em]">Farrow & Ball Master Artisan</span>
               <span className="text-xs font-bold uppercase tracking-[0.4em]">Royal Academy of Interior Design</span>
               <span className="text-xs font-bold uppercase tracking-[0.4em]">London Heritage Trust</span>
            </div>
         </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-40 bg-white px-6">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#6554c0] mb-16">The Philosophy</h2>
            <h3 className="text-5xl md:text-7xl font-light italic serif leading-tight mb-16">
              "We believe color is the most profound architecture. It shapes emotion, light, and the silence of a room."
            </h3>
            <div className="flex justify-center gap-20">
               <div className="text-center">
                 <p className="text-5xl font-light mb-4">0.5mm</p>
                 <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A09C99]">Surface Precision</p>
               </div>
               <div className="text-center">
                 <p className="text-5xl font-light mb-4">Mineral</p>
                 <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A09C99]">Pigment Source</p>
               </div>
               <div className="text-center">
                 <p className="text-5xl font-light mb-4">48hr</p>
                 <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A09C99]">Curing Protocol</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid - Editorial Cards */}
      <section id="techniques" className="py-40 px-6 bg-[#FAF9F6]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-32 border-b border-[#1C1C1C]/10 pb-10">
             <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A09C99] mb-4 block">Our Techniques</span>
                <h2 className="text-6xl font-light italic serif">The Atelier <br /> Specialisms.</h2>
             </div>
             <p className="text-sm text-[#5D5956] max-w-sm font-light italic leading-relaxed">
                We combine historical knowledge with modern application to achieve depth and texture impossible with standard methods.
             </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { title: 'Chiaroscuro Interior', cat: 'Lighting Study', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=1000&fit=crop', desc: 'A multi-layered technique that plays with shadow and light for dramatic depth.' },
              { title: 'Venetian Plaster', cat: 'Texture Finish', img: 'https://images.unsplash.com/photo-1589939705384-5185138a047f?w=800&h=1000&fit=crop', desc: 'Hand-burnished lime-based plaster for a marble-like finish and feel.' },
              { title: 'Historical Gilding', cat: 'Restoration', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=1000&fit=crop', desc: 'Application of 24k gold and silver leaf using traditional water-gilding methods.' }
            ].map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-10 bg-stone-100 rounded-[3rem] transition-all duration-1000 group-hover:rounded-[1rem] shadow-xl">
                  <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={s.title} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A09C99] mb-4 block">{s.cat}</span>
                <h4 className="text-3xl font-light italic serif flex justify-between items-center group-hover:text-[#6554c0] transition-colors mb-6">
                  {s.title}
                  <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                </h4>
                <p className="text-sm font-light italic text-[#5D5956] leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Atelier? - Grid of Intention */}
      <section className="py-40 bg-white px-6">
         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
               <div className="aspect-square bg-stone-50 rounded-[5rem] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=1000&h=1000&fit=crop" className="w-full h-full object-cover grayscale" alt="The Process" />
                  <div className="absolute inset-0 bg-[#6554c0]/5 mix-blend-multiply" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-[#FAF9F6] p-12 rounded-[3rem] shadow-2xl border border-[#1C1C1C]/5">
                  <p className="text-5xl font-light mb-2">98%</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#A09C99]">Pure Pigment Bias</p>
               </div>
            </div>
            <div>
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#6554c0] mb-8 block">Why Choose Atelier</span>
               <h2 className="text-6xl font-light italic serif mb-12 leading-tight">Quiet Luxury. <br /> Loud <span className="text-[#A09C99]">Excellence.</span></h2>
               <div className="space-y-16">
                  {[
                    { title: 'Chromotherapy Consultation', desc: 'We don\'t just pick colors; we study the psychiatric impact of light in your specific space.' },
                    { title: 'Curation Of Substrate', desc: 'Our preparation phase involves microscopic correction of wall texture to ensure zero light diffraction.' },
                    { title: 'Archival Materials', desc: 'We source mineral pigments that evolve with age, growing more beautiful over decades.' }
                  ].map((item, i) => (
                    <div key={i} className="max-w-md group">
                       <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-[#1C1C1C] flex items-center gap-4">
                          <span className="w-10 h-px bg-[#6554c0] group-hover:w-16 transition-all" />
                          {item.title}
                       </h4>
                       <p className="text-lg font-light italic text-[#5D5956] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* The Studio - Social Proof */}
      <section id="portfolio" className="py-40 bg-[#1C1C1C] text-white px-6 overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto">
           <div className="lg:grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative z-10">
                 <h2 className="text-7xl font-light serif italic mb-12 leading-none">The Quiet <br /> Authority.</h2>
                 <div className="space-y-16">
                    {[
                      { q: 'The level of preparation was unlike anything I\'ve seen. They spent 3 days just sanding before a single drop of paint touched the walls.', a: 'Marcus Thorne, Lead Architect' },
                      { q: 'Atelier doesn\'t just paint; they curate the light of your home. The depth of color they achieved is breathtaking.', a: 'Elena Rossi, Creative Director' }
                    ].map((t, i) => (
                      <div key={i} className="max-w-lg">
                        <p className="text-3xl font-light text-white/90 italic leading-relaxed mb-6">"{t.q}"</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6554c0]">{t.a}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative mt-20 lg:mt-0 flex justify-center">
                 <div className="aspect-square w-full max-w-md border border-white/10 rounded-full flex items-center justify-center p-20 animate-[spin_20s_linear_infinite]">
                    <div className="w-full h-full border border-white/20 rounded-full flex items-center justify-center">
                       <div className="w-32 h-32 bg-[#6554c0] rounded-full blur-3xl opacity-50" />
                    </div>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <p className="text-[10rem] md:text-[15rem] font-light italic serif mb-4 opacity-10">500</p>
                    <p className="text-[10px] font-bold uppercase tracking-[1em] text-[#A09C99] -mt-20">Residences Refined</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Local Areas - Curated Regions */}
      <section className="py-40 bg-white px-6">
         <div className="max-w-[1600px] mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A09C99] mb-16 text-center">Selected Regions Of Operation</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
               {['Chelsea & Kensington', 'Notting Hill', 'Edinburgh New Town', 'The Cotswolds', 'Westminster'].map(area => (
                 <div key={area} className="text-center group cursor-default">
                    <div className="w-12 h-px bg-[#1C1C1C]/10 mx-auto mb-8 group-hover:bg-[#6554c0] group-hover:w-20 transition-all" />
                    <p className="text-sm font-light italic serif text-[#5D5956] group-hover:text-[#1C1C1C] transition-colors">{area}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ - Studio Inquiries */}
      <section className="py-40 bg-[#FAF9F6] px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light italic serif mb-20 text-center text-[#1C1C1C]">Studio <br /> Enquiries.</h2>
            <div className="space-y-10">
               {[
                 { q: 'How long is the typical engagement?', a: 'A full residence restoration typically spans 4 to 12 weeks, depending on the complexity of architectural detail and the curing protocols required for specialist finishes.' },
                 { q: 'Do you collaborate with architects?', a: 'Regularly. We speak the language of technical drawings and are often brought in at the planning stage to consult on light and material interaction.' },
                 { q: 'What is your color philosophy?', a: 'We avoid trends. Instead, we use mineral-rich pigments and hand-mixed emulsions to create "living color" that reacts beautifully to natural light shifts throughout the day.' }
               ].map((faq, i) => (
                 <div key={i} className="group border-b border-[#1C1C1C]/5 pb-10">
                    <h4 className="text-xl font-light italic serif mb-6 group-hover:text-[#6554c0] transition-colors flex justify-between items-center">
                       {faq.q}
                       <ChevronRight size={18} className="text-[#A09C99]" />
                    </h4>
                    <p className="text-sm font-light italic text-[#5D5956] leading-relaxed max-w-2xl">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA - Minimalist Final Note */}
      <section className="py-60 px-6 bg-white text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A09C99] mb-12 block animate-pulse">The Next Selection</span>
            <h2 className="text-7xl md:text-9xl font-light italic serif leading-[0.85] mb-20 tracking-tighter">
              Let's craft <br /> your <span className="text-[#6554c0]">palette.</span>
            </h2>
            <div className="flex flex-col items-center gap-16">
               <button className="bg-[#1C1C1C] text-white px-24 py-8 rounded-full text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-[#6554c0] transition-all shadow-2xl hover:scale-105">
                 Request Studio Visit
               </button>
               <div className="flex flex-col md:flex-row gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A09C99]">
                  <span className="flex items-center gap-3 hover:text-[#1C1C1C] cursor-pointer transition-colors"><Mail size={14} /> studio@atelier.com</span>
                  <span className="flex items-center gap-3 hover:text-[#1C1C1C] cursor-pointer transition-colors"><Phone size={14} /> +44 20 8123 456</span>
               </div>
            </div>
         </div>
         {/* Decorative radial blur */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#6554c0]/5 blur-[120px] -z-10" />
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#FAF9F6] border-t border-[#1C1C1C]/5 px-6">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-bold uppercase tracking-[0.4em] text-[#A09C99]">
            <p>© 2024 Atelier Color Study. All Rights Reserved.</p>
            <div className="flex gap-12">
               <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors">Instagram</span>
               <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors">Journal</span>
               <span className="hover:text-[#1C1C1C] cursor-pointer transition-colors">Privacy</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
