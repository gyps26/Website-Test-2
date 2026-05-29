import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1558904541-efa843a96f09?w=1920&q=80" 
              alt="Beautifully landscaped lawn and house"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Landscaping Services <span className="text-green-400">You Can Rely On</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert landscaping in Grove City and surrounding areas. For years, we have provided reliable, high-quality lawn care and landscape design to transform your outdoor spaces.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#quote" 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-stone-950 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get a Free Quote Today
              </Link>
              <Link 
                href="#services" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1592424001844-3294326584dc?w=800&q=80" 
                  alt="Landscaping team at work"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-green-600/20 rounded-3xl pointer-events-none" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  <Leaf className="w-4 h-4" /> About Us
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Rooted in Grove City, Dedicated to Excellence
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stages Lawn and Landscape of Ohio is proud to be Grove City&#39;s trusted choice for premium lawn care and landscape enhancements. We built our business on the simple promises of reliability, hard work, and a genuine passion for the outdoors.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Over a decade of local landscaping experience",
                    "Fully licensed, bonded, and insured team",
                    "Customized care plans for every unique property",
                    "Commitment to 100% customer satisfaction"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full text-green-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call us today</p>
                    <a href="tel:555-0123" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">(555) 123-4567</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                From weekly maintenance to complete backyard overhauls, we have the expertise to make your property stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Lawn Care",
                  desc: "Mowing, edging, and fertilization programs to keep your grass lush, green, and healthy year-round.",
                  img: "https://images.unsplash.com/photo-1589926618585-88339da97793?w=800&q=80"
                },
                {
                  title: "Landscape Design",
                  desc: "Transform your outdoor space with custom planting beds, mulching, and aesthetic layouts.",
                  img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
                },
                {
                  title: "Hardscaping",
                  desc: "Beautiful and functional stone patios, retaining walls, fire pits, and walkways.",
                  img: "https://images.unsplash.com/photo-1627998634892-06b2ef32dc07?w=800&q=80"
                },
                {
                  title: "Seasonal Maintenance",
                  desc: "Spring cleanups, fall leaf removal, and winterizing to protect your landscape investment.",
                  img: "https://images.unsplash.com/photo-1599813589882-de29aed714bc?w=800&q=80"
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 md:py-28 bg-green-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Our Process
              </h2>
              <p className="text-lg text-green-100">
                We make transforming your yard simple, transparent, and completely stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "We meet on-site to discuss your vision, budget, and property needs." },
                { step: "02", title: "Design & Quote", desc: "You receive a clear, detailed proposal and timeline for your project." },
                { step: "03", title: "Installation", desc: "Our respectful, professional crew executes the plan with precision." },
                { step: "04", title: "Walkthrough", desc: "We review the finished work together to ensure complete satisfaction." }
              ].map((p, idx) => (
                <div key={idx} className="relative text-center md:text-left">
                  {/* Connecting Line */}
                  {idx !== 3 && <div className="hidden md:block absolute top-[40px] left-[calc(50%+40px)] w-full h-[2px] bg-green-700/50" />}
                  
                  <div className="w-20 h-20 mx-auto md:mx-0 bg-green-800 rounded-2xl flex items-center justify-center font-bold text-3xl text-green-400 mb-6 shadow-xl border border-green-700/50 relative z-10">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-green-100/80 leading-relaxed text-sm md:text-base">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="work" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                See Our Work
              </h2>
              <p className="text-lg text-gray-600">
                A picture is worth a thousand words. Browse some of our recent projects transforming homes across Ohio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                "https://images.unsplash.com/photo-1584622781564-1d987f739670?w=600&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
                "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=600&q=80",
                "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?w=600&q=80",
                "https://images.unsplash.com/photo-1416879598555-22d7ba644265?w=600&q=80",
                "https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=600&q=80"
              ].map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image 
                    src={img}
                    alt={`Landscaping project work example ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wider uppercase text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Project</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="#quote" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors">
                Ready to transform your yard? Let&#39;s talk <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 md:py-28 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16 text-center">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", area: "Grove City", text: "Stages Lawn completely leveled up our backyard. They installed a gorgeous paver patio and handled our mulching. Professional, timely, and fairly priced!" },
                { name: "David T.", area: "Columbus", text: "Reliable weekly mowing service. They always show up on their scheduled day, leave the edges crisp, and blow the clippings off the driveway. Couldn't ask for better." },
                { name: "Jessica R.", area: "Commercial Point", text: "The team did a massive spring cleanup for us—removing overgrown bushes and laying down fresh topsoil & seed. The yard looked brand new within weeks." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-lg">&quot;{review.text}&quot;</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served & FAQ Section */}
        <section id="faq" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* FAQ */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    { q: "Do you offer free estimates?", a: "Yes! We provide free, no-obligation quotes for all landscaping and hardscaping projects." },
                    { q: "Are you licensed and insured?", a: "Absolutely. We carry comprehensive insurance to protect your property and our workers." },
                    { q: "What areas do you serve?", a: "We primarily serve Grove City, Columbus, Commercial Point, and surrounding local communities." },
                    { q: "Do you do commercial landscaping?", a: "Yes, we handle accounts of all sizes, from residential properties to commercial business parks." }
                  ].map((faq, idx) => (
                    <details key={idx} className="group border border-gray-200 rounded-xl bg-stone-50 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between font-medium cursor-pointer p-5 text-gray-900 hover:text-green-600 transition-colors">
                        {faq.q}
                        <span className="transition group-open:rotate-180">
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 border-t border-gray-200/50 pt-4 bg-white">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-stone-100 p-10 rounded-3xl h-full flex flex-col justify-center">
                <div className="inline-block p-4 bg-white rounded-full text-green-600 mb-6 self-start shadow-sm line-clamp-1">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proudly Serving These Areas</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We bring premium lawn and landscape services right to your doorstep. If you don&#39;t see your city listed, give us a call—we might still be able to help!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Grove City", "Columbus", "Commercial Point", "Galloway", "Orient", "Hilliard"].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                       <span className="font-medium text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section id="quote" className="py-24 bg-green-800 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-green-900 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Get A Free Quote Today!
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Ready to create the outdoor space you have been dreaming of? Fill out the form or give us a call to get started.
            </p>
            
            {/* Simple form representation */}
            <form className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl text-left space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-white">
                  <option>Lawn Maintenance</option>
                  <option>Landscape Design</option>
                  <option>Hardscaping / Patios</option>
                  <option>Cleanups & Mulch</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg">
                  Request Free Estimate
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">We respect your privacy and will never share your information.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-6 h-6 text-green-500" />
                <span className="font-bold text-xl tracking-tight text-white">
                  Stages Lawn & Landscape
                </span>
              </div>
              <p className="mb-6 max-w-sm leading-relaxed">
                Expert landscaping services in Grove City, OH and surrounding areas. Bringing life and beauty to your outdoor spaces with dependable service.
              </p>
              <div className="flex items-center gap-4 text-white">
                <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-green-600 flex items-center justify-center rounded-full transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22,12C22,6.48 17.52,2 12,2C6.48,2 2,6.48 2,12C2,16.84 5.44,20.87 10.13,21.8V14.89H7.68V12H10.13V9.79C10.13,7.39 11.56,6.05 13.76,6.05C14.81,6.05 15.91,6.24 15.91,6.24V8.6H14.7C13.51,8.6 13.14,9.34 13.14,10.1V12H15.82L15.39,14.89H13.14V21.8C17.83,20.87 21.27,16.84 22,12Z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-green-600 flex items-center justify-center rounded-full transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="hover:text-green-500 transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-green-500 transition-colors">Our Services</Link></li>
                <li><Link href="#work" className="hover:text-green-500 transition-colors">Our Work</Link></li>
                <li><Link href="#reviews" className="hover:text-green-500 transition-colors">Testimonials</Link></li>
                <li><Link href="#faq" className="hover:text-green-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Grove City, OH 43123</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a href="tel:5550123" className="hover:text-white transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} Stages Lawn and Landscape of Ohio. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
