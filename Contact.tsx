
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Star, ChevronRight, Scale, Gavel, ShieldCheck, HeartPulse, Briefcase, Phone, ChevronLeft, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS, ATTORNEYS, CASE_RESULTS, TRUST_SIGNALS, TESTIMONIALS } from '../constants';
import { VideoLightbox } from '../components/VideoLightbox';

const AnimatedNumber: React.FC<{ value: number; suffix?: string; isVisible: boolean }> = ({ value, suffix = "", isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

export const Home: React.FC = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target === statsRef.current) {
            setStatsVisible(true);
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="overflow-hidden">
      <VideoLightbox 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
            alt="Law Library Background"
            className="w-full h-full object-cover opacity-60 scale-100 animate-parallax"
          />
        </div>
        
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent-gold/20 backdrop-blur-md px-6 py-2 rounded-full border border-accent-gold/30 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="w-2.5 h-2.5 bg-accent-gold rounded-full animate-pulse"></span>
              <span className="text-xs text-accent-gold font-bold uppercase tracking-widest">Available 24/7 For Emergencies</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 font-heading tracking-tight">
              AGGRESSIVE <br/> 
              <span className="text-accent-gold italic">DEFENSE.</span> <br/>
              PROVEN RESULTS.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light tracking-wide animate-in fade-in slide-in-from-bottom-10 duration-1000 text-balance">
              Florida's elite trial lawyers for criminal defense and catastrophic personal injury. We don't just settle. We win.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-gold text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-accent-warm transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(185,106,1,0.3)] flex items-center justify-center space-x-3">
                <span>Free Case Review</span>
                <ArrowRight size={20} />
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
              >
                <Play size={20} className="fill-white" />
                <span>The McKenna Story</span>
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 hidden lg:flex justify-center items-center space-x-16 animate-in fade-in duration-1000 delay-700">
            {TRUST_SIGNALS.slice(0, 3).map((signal, i) => (
              <div key={i} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-accent-gold">{signal.icon}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 reveal">
            <div className="max-w-2xl">
              <p className="text-accent-gold font-bold uppercase tracking-[0.3em] mb-4">Practice Areas</p>
              <h2 className="text-5xl md:text-7xl">EXPERTISE WHERE <br/> IT MATTERS MOST.</h2>
            </div>
            <Link to="/practice-areas" className="flex items-center space-x-2 text-primary font-bold hover:text-accent-gold transition-colors pb-2 border-b-2 border-primary group">
              <span>View All Services</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-100 border border-gray-100 reveal">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-primary group transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-accent-gold mb-8 transform group-hover:scale-110 transition-transform duration-500">
                     {idx === 0 && <Gavel size={48} strokeWidth={1} />}
                     {idx === 1 && <ShieldCheck size={48} strokeWidth={1} />}
                     {idx === 2 && <Scale size={48} strokeWidth={1} />}
                     {idx === 3 && <HeartPulse size={48} strokeWidth={1} />}
                     {idx === 4 && <Briefcase size={48} strokeWidth={1} />}
                     {idx === 5 && <ShieldAlert size={48} strokeWidth={1} />}
                  </div>
                  <h3 className="text-3xl mb-4 group-hover:text-white transition-colors">{area.title}</h3>
                  <p className="text-gray-500 mb-8 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {area.description}
                  </p>
                  <Link to={`/practice-areas/${area.id}`} className="inline-flex items-center space-x-2 text-accent-gold font-bold text-sm uppercase tracking-widest">
                    <span>Explore Strategy</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <span className="font-heading text-8xl text-white">{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results Slider/Stats */}
      <section ref={statsRef} className="py-24 bg-primary text-white overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl mb-12">THE POWER OF <br/><span className="text-accent-gold">PERFORMANCE.</span></h2>
              <div className="space-y-12">
                <div>
                  <div className="text-6xl font-heading text-accent-gold mb-2">
                    <AnimatedNumber value={85} suffix="+ Million" isVisible={statsVisible} />
                  </div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest">Recovered For Injury Clients</p>
                </div>
                <div>
                  <div className="text-6xl font-heading text-accent-gold mb-2">
                    <AnimatedNumber value={2500} suffix="+" isVisible={statsVisible} />
                  </div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest">Dismissed Criminal Charges</p>
                </div>
                <div>
                  <div className="text-6xl font-heading text-accent-gold mb-2">
                    <AnimatedNumber value={40} suffix="+ Years" isVisible={statsVisible} />
                  </div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest">Combined Courtroom Experience</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="flex justify-between items-center mb-4">
                <p className="text-accent-gold font-bold uppercase tracking-[0.3em]">Recent Victories</p>
                <Link to="/case-results" className="text-xs font-bold hover:text-accent-gold transition-colors underline">View All Wins</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CASE_RESULTS.slice(0, 4).map((result, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-10 hover:border-accent-gold/50 transition-colors relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-6">{result.category} Case</div>
                    <h4 className="text-3xl mb-4 leading-tight">{result.outcome}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{result.title}"</p>
                    <p className="text-gray-300 text-sm line-clamp-3">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Attorneys */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <p className="text-accent-gold font-bold uppercase tracking-[0.3em] mb-4">Elite Counsel</p>
            <h2 className="text-5xl md:text-7xl mb-6">MEET OUR FOUNDERS.</h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal">
            {ATTORNEYS.map((lawyer, idx) => (
              <Link to="/attorneys" key={idx} className="group relative block">
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-gray-200">
                  <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary to-transparent text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl mb-1">{lawyer.name}</h4>
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">{lawyer.role}</p>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {lawyer.specialty}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-primary p-12 md:p-24 rounded-sm flex flex-col items-center text-center text-white relative overflow-hidden reveal min-h-[500px] justify-center">
              <div className="absolute top-10 left-10 text-accent-gold opacity-10">
                <Play size={150} />
              </div>
              <p className="text-accent-gold font-bold uppercase tracking-[0.3em] mb-8 z-10">Client Stories</p>
              
              <div className="relative w-full z-10">
                <div className="flex space-x-1 mb-8 justify-center">
                  {[1,2,3,4,5].map(i => <Star key={i} className="text-accent-gold fill-accent-gold w-6 h-6" />)}
                </div>
                
                <div className="transition-all duration-500 ease-in-out transform">
                  <h2 className="text-2xl md:text-5xl mb-12 italic font-light max-w-4xl mx-auto leading-relaxed animate-in fade-in zoom-in-95">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </h2>
                  <p className="font-heading text-2xl tracking-widest">— {TESTIMONIALS[activeTestimonial].author}, {TESTIMONIALS[activeTestimonial].location}</p>
                </div>

                <div className="flex justify-center space-x-6 mt-16">
                  <button onClick={prevTestimonial} className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent-gold transition-all">
                    <ChevronLeft />
                  </button>
                  <button onClick={nextTestimonial} className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent-gold transition-all">
                    <ChevronRight />
                  </button>
                </div>
              </div>
              
              <div className="absolute bottom-10 flex space-x-2">
                {TESTIMONIALS.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-accent-gold w-8' : 'bg-white/20'}`}></div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-accent-gold text-white text-center reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl mb-10 leading-none">ARRESTED? <br/> DON'T WAIT ANOTHER SECOND.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:1800MCKENNA" className="bg-primary text-white px-12 py-6 text-xl font-bold uppercase tracking-widest flex items-center space-x-4 hover:bg-black transition-all transform hover:-translate-y-2">
              <Phone size={24} />
              <span>(800) MCKENNA</span>
            </a>
            <Link to="/contact" className="border-4 border-white text-white px-12 py-5 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent-gold transition-all transform hover:-translate-y-2">
              Free Case Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
