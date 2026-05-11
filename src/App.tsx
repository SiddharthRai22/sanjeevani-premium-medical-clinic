/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Stethoscope, 
  User, 
  Baby, 
  Activity, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <a 
    href={href} 
    className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-200 text-sm"
  >
    {children}
  </a>
);

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="premium-card p-8 group"
  >
    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="font-display text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm mb-6">{description}</p>
    <a href="#appointment" className="flex items-center text-sky-600 font-semibold text-sm group/link">
      Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

const FounderCard = ({ 
  image, 
  name, 
  title, 
  experience, 
  description, 
  delay 
}: { 
  image: string; 
  name: string; 
  title: string; 
  experience: string; 
  description: string; 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="premium-card overflow-hidden h-full flex flex-col"
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-sky-600 uppercase tracking-widest flex items-center shadow-sm">
          <ShieldCheck size={12} className="mr-1" />
          {experience} Experience
        </div>
      </div>
    </div>
    <div className="p-6 md:p-8 flex-grow">
      <h3 className="font-display text-2xl font-bold mb-1 text-slate-900">{name}</h3>
      <p className="text-sky-600 font-semibold text-sm mb-4 uppercase tracking-wider">{title}</p>
      <div className="h-px w-12 bg-sky-200 mb-4"></div>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, rating }: { name: string; role: string; content: string; rating: number }) => (
  <div className="premium-card p-8 italic">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
      ))}
    </div>
    <p className="text-slate-600 mb-6 leading-relaxed">"{content}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold mr-3">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
        <p className="text-slate-400 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "py-3 bg-white/90 backdrop-blur-md border-slate-200 shadow-sm" 
            : "py-5 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight block uppercase">SANJEEVANI</span>
              <span className="text-[10px] text-sky-600 font-black uppercase tracking-[0.2em] leading-none">Health is Wealth</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#founders">Expert Team</NavItem>
            <NavItem href="#testimonials">Reviews</NavItem>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-500/20 active:scale-95 transition-all">
              Consult Now
            </button>
          </div>

          <button 
            className="md:hidden text-slate-900" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            <a href="#home" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#founders" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Founders</a>
            <a href="#testimonials" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <button className="bg-sky-600 text-white py-4 rounded-2xl font-bold text-lg">Book Appointment</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-28 lg:pt-32 pb-16 lg:pb-0 overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full bg-sky-100/30 skew-x-[-12deg] translate-x-12 lg:translate-x-24 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 lg:mb-8">
              <ShieldCheck size={14} />
              Accredited Clinical Excellence
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 lg:mb-8">
              Compassionate Care, <span className="text-sky-600 underline decoration-sky-200 decoration-4 sm:decoration-8 underline-offset-4">Advanced</span> Medicine.
            </h1>
            <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
              Sanjeevani combines over five decades of medical expertise with modern technology to provide families with premium healthcare services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2 group transition-all active:scale-95">
                Make an Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold border border-slate-200 flex items-center justify-center gap-2 transition-all active:scale-95">
                View Services
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-10 border-t border-slate-200 pt-8">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">50+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">Years Exp.</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">10k+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">Patients</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">24/7</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold">Support</span>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative px-0 order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-4 sm:border-8 border-white aspect-[4/3] lg:aspect-auto">
              <img 
                src="/images/hero-clinic.png" 
                alt="Expert Medical Care" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Gloss Floating Info */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 z-20 glass p-3 sm:p-5 rounded-xl sm:rounded-3xl shadow-xl flex items-center gap-2 sm:gap-4 max-w-[140px] sm:max-w-none">
              <div className="w-8 h-8 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                <ShieldCheck size={18} className="sm:hidden" /><ShieldCheck size={28} className="hidden sm:block" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Trust Factor</p>
                <p className="text-xs sm:text-base font-bold text-slate-900 leading-tight">Patient Safety Verified</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 z-20 glass p-3 sm:p-5 rounded-xl sm:rounded-3xl shadow-xl flex items-center gap-2 sm:gap-4 max-w-[140px] sm:max-w-none">
              <div className="w-8 h-8 sm:w-14 sm:h-14 bg-sky-500 rounded-full flex items-center justify-center text-white shrink-0">
                <Calendar size={18} className="sm:hidden" /><Calendar size={28} className="hidden sm:block" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Availability</p>
                <p className="text-xs sm:text-base font-bold text-slate-900 leading-tight">Open 6 Days a Week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <h2 className="font-display text-sky-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-4">Our Specializations</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Healthcare Solutions for Every Family Member</p>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base lg:text-lg">From pediatric care to complex diagnostics, we provide a wide range of services under one roof with expert supervision.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceCard 
              icon={Baby}
              title="Pediatric Care"
              description="Comprehensive child primary healthcare including well-child check-ups and treatment for childhood illnesses."
              delay={0.1}
            />
            <ServiceCard 
              icon={User}
              title="Women's Health"
              description="Specialized care in gynecology, maternal health, and women's wellness led by our expert female consultants."
              delay={0.2}
            />
            <ServiceCard 
              icon={Activity}
              title="Adult Health"
              description="Holistic primary care and chronic disease management for adults, focusing on preventive medicine."
              delay={0.3}
            />
            <ServiceCard 
              icon={Stethoscope}
              title="Diagnostics"
              description="Advanced pathological investigations using state-of-the-art machinery for accurate results."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 lg:py-32 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 lg:mb-24 gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-display text-sky-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-4">Meet Our Experts</h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">The Multi-Generational Team Behind Your Wellness</p>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed">Our clinic is powered by a legacy of healthcare professionals dedicated to providing exceptional care.</p>
            </div>
            <button className="flex items-center gap-2 text-sky-600 font-bold hover:gap-4 transition-all group shrink-0">
              View Full Team <ArrowRight size={20} className="group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <FounderCard 
              image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800"
              name="Dr. V.K. Sanjeev"
              title="Senior Consultant & Founder"
              experience="50+"
              description="Head of our healthcare team with over 5 decades of clinical wisdom, leading the clinic's mission of trust and integrity."
              delay={0.1}
            />
            <FounderCard 
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
              name="Dr. Amit Sanjeev"
              title="Board-Certified Pediatrician"
              experience="15+"
              description="Expert in pediatric primary health, focusing on child development and promoting long-term family wellness."
              delay={0.2}
            />
            <FounderCard 
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
              name="Dr. Rakhi Sanjeev"
              title="Women's Health Specialist"
              experience="12+"
              description="Passionate expert in maternal-fetal health and pathology, building lasting doctor-patient bonds based on empathy."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl -translate-x-16 -translate-y-16"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-sky-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-4">Patient Stories</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">What Our Patients Say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard 
              name="Rahul Sharma"
              role="Father of 2"
              content="Dr. Amit is wonderful with kids. He made my son feel extremely comfortable during the visit. Best pediatric care in the city."
              rating={5}
            />
            <TestimonialCard 
              name="Priya Singh"
              role="Regular Patient"
              content="I've been visiting Sanjeevani for 10 years. Dr. Rakhi's attention to detail is unmatched. Very professional and polite staff."
              rating={5}
            />
            <TestimonialCard 
              name="Manish Kumar"
              role="Business Owner"
              content="The diagnostics here are very efficient. I received my reports within hours. Dr. Bhola's experience really shows in his diagnosis."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="appointment" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-slate-900 overflow-hidden p-8 sm:p-12 md:p-20">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500 opacity-10 skew-x-[15deg] translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-sky-500 opacity-5 -skew-x-[15deg] -translate-x-12"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">Ready to Prioritize Your Family's Health?</h2>
                <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0">Book a priority consultation today and experience premium healthcare that puts you first.</p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group transition-all shadow-xl shadow-sky-900/40">
                    Book Now <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Call Us Now</p>
                      <p className="text-base font-bold">+91 88225-56677</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Clock className="text-sky-400 mb-4" size={32} />
                  <h4 className="text-white font-bold mb-2">Flexible Hours</h4>
                  <p className="text-slate-400 text-sm">Mon-Sat: 09:00 - 20:00</p>
                </div>
                <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <MapPin className="text-sky-400 mb-4" size={32} />
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-slate-400 text-sm">Sanjeevani Square, Medical District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
                  <Stethoscope size={18} />
                </div>
                <span className="font-display font-bold text-lg text-slate-900 tracking-tight uppercase">SANJEEVANI</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Premium healthcare services established with a vision to provide accessible, compassionate, and expert medical care for all generations.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 hover:text-sky-600 cursor-pointer transition-colors">
                  <Mail size={16} />
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 hover:text-sky-600 cursor-pointer transition-colors">
                  <Phone size={16} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">About Clinic</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Our Services</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Meet Doctors</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Pediatric Care</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Women's Wellness</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">Pathology Lab</a></li>
                <li><a href="#" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">General Medicine</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Find Us</h4>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-sky-600 shrink-0" size={20} />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Sanjeevani Wellness Center,<br />
                  12/A Sanjeevani Square, Medical District
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-sky-600 shrink-0" size={20} />
                <div>
                  <p className="text-slate-900 font-bold text-sm">Opening Hours</p>
                  <p className="text-slate-500 text-xs">Mon - Sat: 9 AM - 8 PM<br />Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs text-center">
              © {new Date().getFullYear()} Sanjeevani Medical Clinic. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-sky-600 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-sky-600 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
