
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const PracticeArea: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  if (id) {
    const area = PRACTICE_AREAS.find(a => a.id === id);
    if (!area) return <div className="pt-32 text-center h-screen">Practice area not found.</div>;

    return (
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <Link to="/practice-areas" className="inline-flex items-center space-x-2 text-accent-gold font-bold mb-12 hover:translate-x-1 transition-transform">
            <ArrowLeft size={20} />
            <span>BACK TO ALL SERVICES</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-accent-gold font-bold uppercase tracking-widest mb-4">{area.category} Expertise</p>
              <h1 className="text-6xl md:text-8xl mb-10">{area.title}</h1>
              <p className="text-2xl text-gray-500 font-light leading-relaxed mb-10">
                {area.fullContent}
              </p>
              
              <div className="space-y-6 mb-12">
                {['Aggressive Litigation Strategy', 'Former Prosecutor Perspective', 'Comprehensive Case Investigation', '24/7 Direct Attorney Communication'].map((point, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-accent-gold w-6 h-6" />
                    <span className="text-lg font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-block bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-accent-deep transition-all transform hover:scale-105">
                Schedule a Private Strategy Session
              </Link>
            </div>
            
            <div className="bg-gray-100 p-12 rounded-sm border-l-8 border-accent-gold">
              <h2 className="text-4xl mb-8">WHY DEFENSE COUNSEL MATTERS.</h2>
              <p className="text-gray-700 leading-loose mb-8">
                The legal system in Florida is notoriously aggressive. Whether you are facing criminal charges or dealing with an insurance company after a life-altering accident, you are up against entities with nearly unlimited resources.
              </p>
              <p className="text-gray-700 leading-loose mb-8">
                McKenna Laws levels the playing field. We leverage decades of experience, insider knowledge of prosecution tactics, and a network of medical experts to ensure that your rights are not just protected, but prioritized.
              </p>
              <div className="bg-white p-8 border border-gray-200 shadow-sm">
                <p className="text-sm font-bold text-accent-gold mb-2 uppercase tracking-widest">Immediate Action Required</p>
                <p className="text-sm text-gray-600">The first 48 hours after an incident are critical. Evidence disappears, and memories fade. Secure your counsel today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-6xl md:text-8xl mb-8">OUR PRACTICE.</h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-500">From the boardroom to the courtroom, we provide sophisticated legal solutions across two primary domains: Criminal Justice and Civil Recovery.</p>
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRACTICE_AREAS.map((area, idx) => (
          <Link to={`/practice-areas/${area.id}`} key={idx} className="bg-white p-12 border border-gray-100 hover:shadow-2xl transition-all group">
            <h3 className="text-3xl mb-4">{area.title}</h3>
            <p className="text-gray-500 mb-8">{area.description}</p>
            <span className="text-accent-gold font-bold text-sm tracking-widest group-hover:underline">LEARN MORE →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
