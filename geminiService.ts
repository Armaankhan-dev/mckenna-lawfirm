
import React from 'react';
import { ATTORNEYS } from '../constants';
import { Shield, Award, Gavel, Mail, Linkedin } from 'lucide-react';

export const Attorneys: React.FC = () => {
  return (
    <div className="pt-32 bg-white">
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <p className="text-accent-gold font-bold uppercase tracking-[0.3em] mb-4">The Front Line</p>
          <h1 className="text-6xl md:text-8xl mb-8">ELITE ADVOCACY. <br/> UNWAVERING LOYALTY.</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Our team is comprised of trial-tested advocates who refuse to back down. With a background in prosecution and decades of civil litigation, we bring a 360-degree perspective to every case we touch.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 space-y-32 pb-32">
        {ATTORNEYS.map((attorney, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold hidden lg:block -z-10"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-2 text-accent-gold mb-6">
                {idx === 0 ? <Shield size={20} /> : idx === 1 ? <Award size={20} /> : <Gavel size={20} />}
                <span className="font-bold uppercase tracking-widest text-sm">{attorney.role}</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-6">{attorney.name}</h2>
              <p className="text-accent-gold font-heading text-xl mb-8 tracking-wider">{attorney.specialty}</p>
              <div className="w-16 h-1 bg-black mb-8"></div>
              <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                {attorney.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-heading text-sm mb-2 text-gray-400">Education</h4>
                  <p className="text-sm font-bold">University of Florida, J.D.</p>
                </div>
                <div>
                  <h4 className="font-heading text-sm mb-2 text-gray-400">Bar Admissions</h4>
                  <p className="text-sm font-bold">Florida State Bar, Southern District</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-primary text-white p-4 hover:bg-accent-gold transition-colors">
                  <Mail size={20} />
                </button>
                <button className="bg-primary text-white p-4 hover:bg-accent-gold transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
