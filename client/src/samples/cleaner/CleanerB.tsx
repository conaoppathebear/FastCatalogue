import React from 'react';
import { Leaf, Recycle, Droplets, Wind, Sun, TreePine, Home, Building, Sparkles, Star, CheckCircle, ArrowRight, Menu, X, Heart, Users, ChevronDown, Mail, Phone, Clock, MapPin, Shield, ThumbsUp, Sprout, Globe } from 'lucide-react';

export function CleanerB() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const services = [
    { title: 'Green Home Cleaning', desc: 'Regular eco cleaning using only plant-based, biodegradable products. Safe for children, pets, and the planet.', icon: Home },
    { title: 'Allergen-Free Deep Clean', desc: 'Specialist deep cleaning that eliminates allergens without harsh chemicals. Perfect for sensitive families.', icon: Wind },
    { title: 'Natural Office Care', desc: 'Sustainable workplace cleaning that supports your corporate environmental goals. B-Corp certified.', icon: Building },
    { title: 'Move-In/Out Clean', desc: 'Thorough eco cleaning for property transitions. Leaves spaces fresh and chemical-free.', icon: Sparkles },
    { title: 'Natural Carpet Care', desc: 'Plant-based carpet and upholstery cleaning that removes stains without toxins.', icon: Droplets },
    { title: 'Zero-Waste Service', desc: 'Our premium package uses reusable cloths and refillable products. Truly zero waste.', icon: Recycle },
  ];

  const ecoFeatures = [
    { icon: Leaf, title: '100% Plant-Based', desc: 'Every product we use is derived from natural, renewable plant sources.' },
    { icon: Droplets, title: 'Water Conservation', desc: 'Our methods use 60% less water than traditional cleaning.' },
    { icon: Recycle, title: 'Zero Single-Use Plastic', desc: 'We use refillable bottles and washable microfibre cloths.' },
    { icon: Globe, title: 'Carbon Neutral', desc: 'We offset all our travel emissions through verified programmes.' },
  ];

  const processSteps = [
    { num: '1', title: 'Tell Us Your Needs', desc: 'Share your cleaning requirements and any sensitivities or preferences.' },
    { num: '2', title: 'Custom Green Plan', desc: 'We create a bespoke cleaning plan using the gentlest effective methods.' },
    { num: '3', title: 'Eco Clean Delivered', desc: 'Our trained team arrives with natural products and sustainable practices.' },
    { num: '4', title: 'Fresh & Safe Home', desc: 'Enjoy a spotless space free from harsh chemicals and toxins.' },
  ];

  const testimonials = [
    { name: 'Hannah Green', location: 'Brighton', text: 'Finally a cleaning service that aligns with our values! My daughter has asthma and has been so much better since switching to Evergreen.', rating: 5 },
    { name: 'Oliver Stone', location: 'Oxford', text: 'As a vegan household, we love that everything Evergreen uses is cruelty-free and plant-based. The house smells amazing naturally!', rating: 5 },
    { name: 'Emma Wilson', location: 'Cambridge', text: 'The zero-waste option is incredible. They bring everything in reusable containers. It\'s given me so much peace of mind.', rating: 5 },
  ];

  const areas = ['Brighton', 'Hove', 'Oxford', 'Cambridge', 'Reading', 'Southampton', 'Portsmouth', 'Winchester', 'Guildford', 'Canterbury', 'Maidstone', 'Tunbridge Wells'];

  const faqs = [
    { q: 'What makes your products eco-friendly?', a: 'All our products are plant-based, biodegradable, and free from parabens, sulphates, and synthetic fragrances. We source from certified B-Corp suppliers and our formulations are cruelty-free.' },
    { q: 'Are natural products as effective as chemical ones?', a: 'Absolutely! Modern plant-based cleaning science has come a long way. Our products are just as effective at killing bacteria and removing stains, without the health risks of traditional chemicals.' },
    { q: 'Is eco-cleaning more expensive?', a: 'Our prices are competitive with traditional services. We believe sustainable cleaning should be accessible to everyone, not a luxury.' },
    { q: 'Can you accommodate allergies and sensitivities?', a: 'Yes! We specialise in this. Let us know about any allergies, MCS, asthma, or sensitivities, and we\'ll customise our approach accordingly.' },
    { q: 'What is your zero-waste service?', a: 'Our premium zero-waste package uses only reusable cloths, refillable product bottles, and we take everything away with us. Nothing goes to landfill.' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">
      <nav className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                <Leaf className="text-white" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-800">Evergreen</span>
                <span className="text-xs text-stone-500 font-medium">Eco Cleaning Co.</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#impact" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Our Impact</a>
              <a href="#areas" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Areas</a>
              <a href="#faq" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">FAQ</a>
              <a href="#book" className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all">
                Book Eco Clean
              </a>
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-stone-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-stone-50 border-t border-stone-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-base font-medium text-stone-700 py-2">Services</a>
              <a href="#impact" className="text-base font-medium text-stone-700 py-2">Our Impact</a>
              <a href="#areas" className="text-base font-medium text-stone-700 py-2">Areas</a>
              <a href="#faq" className="text-base font-medium text-stone-700 py-2">FAQ</a>
              <a href="#book" className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-base font-bold">
                Book Eco Clean
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-stone-50 to-stone-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
              <Sprout size={14} /> 100% Plant-Based • Carbon Neutral • B-Corp Certified
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
              Clean Home.
              <span className="block text-emerald-600 mt-2">Clean Planet.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Professional cleaning that's kind to your family and the environment. No harsh chemicals, no plastic waste, no compromise on results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#book" className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                Get Started <ArrowRight size={20} />
              </a>
              <a href="#impact" className="flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-300 px-8 py-4 rounded-full text-lg font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all">
                <Leaf size={20} /> Our Green Promise
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500" /> Non-Toxic</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500" /> Vegan & Cruelty-Free</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500" /> Zero Plastic</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500" /> Carbon Neutral</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold">50K+</p>
              <p className="text-emerald-100 text-sm mt-1">Eco Cleans Delivered</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold">0</p>
              <p className="text-emerald-100 text-sm mt-1">Plastic Bottles Used</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold">100%</p>
              <p className="text-emerald-100 text-sm mt-1">Plant-Based Products</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold">4.9</p>
              <p className="text-emerald-100 text-sm mt-1">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Eco Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 mb-4">Gentle on Earth, Tough on Dirt</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Every service uses only plant-based, biodegradable products that are safe for your family and the planet.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 lg:py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Our Green Promise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 mb-6">Cleaning That Heals</h2>
              <p className="text-lg text-stone-600 mb-10">Traditional cleaning products contain over 60 toxic chemicals linked to health problems. We believe you shouldn't have to choose between a clean home and a healthy family.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {ecoFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                      <feature.icon className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">{feature.title}</h3>
                      <p className="text-stone-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop" 
                  alt="Natural cleaning products" 
                  className="rounded-3xl shadow-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop" 
                  alt="Eco cleaner at work" 
                  className="rounded-3xl shadow-xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-300 font-bold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">Your Journey to Green Clean</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-800 border-2 border-emerald-400 flex items-center justify-center">
                  <span className="text-3xl font-bold text-emerald-400">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-emerald-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Happy Customers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 mb-4">Families Love Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-emerald-500 fill-emerald-500" size={20} />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Ready to Switch?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-3 mb-6">Try Eco Cleaning Today</h2>
              <p className="text-stone-600 text-lg mb-8">Join thousands of families who've made the switch to healthier, greener cleaning. Your first clean comes with our 100% satisfaction guarantee.</p>
              <ul className="space-y-4 mb-8">
                {['No harsh chemicals in your home', 'Same great results, safer methods', 'Support a sustainable business', '100% satisfaction guaranteed'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <CheckCircle className="text-emerald-500" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Get Your Eco Quote</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none" />
                  <select className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-500 focus:border-emerald-500 focus:outline-none">
                    <option>Select Service</option>
                    <option>Green Home Cleaning</option>
                    <option>Allergen-Free Deep Clean</option>
                    <option>Natural Office Care</option>
                    <option>Zero-Waste Service</option>
                  </select>
                  <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                    Get My Quote <ArrowRight className="inline ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 mb-4">Where We Clean</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Eco cleaning services across the South East of England.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 bg-stone-50 px-4 py-3 rounded-full border border-stone-100 hover:border-emerald-300 transition-colors">
                <MapPin className="text-emerald-600 shrink-0" size={16} />
                <span className="font-medium text-stone-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Questions</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 mb-4">Eco Cleaning FAQ</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-stone-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`text-emerald-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-stone-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-emerald-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <TreePine className="mx-auto mb-6 text-emerald-400" size={56} />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Go Green?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Make the switch to eco-friendly cleaning. Better for your family, better for the planet. Book your first green clean today.</p>
          <a href="#book" className="inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all">
            <Leaf size={22} /> Start Your Eco Journey
          </a>
          <p className="text-emerald-300 mt-6">100% satisfaction guaranteed on every clean</p>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Evergreen</span>
              </div>
              <p className="text-stone-400 text-sm mb-6">Eco-friendly cleaning for homes and offices. Plant-based, carbon neutral, zero plastic waste.</p>
              <div className="flex items-center gap-2 text-sm text-stone-400">
                <Globe size={16} className="text-emerald-400" />
                B-Corp Certified
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Green Home Cleaning</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Allergen-Free Deep Clean</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Natural Office Care</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Zero-Waste Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Areas</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Brighton</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Oxford</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cambridge</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Southampton</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-400" />
                  <a href="tel:08002223333" className="hover:text-emerald-400 transition-colors">0800 222 3333</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-400" />
                  <a href="mailto:hello@evergreencleaning.co.uk" className="hover:text-emerald-400 transition-colors">hello@evergreencleaning.co.uk</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">© 2025 Evergreen Eco Cleaning. All rights reserved.</p>
            <div className="flex gap-6 text-stone-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
