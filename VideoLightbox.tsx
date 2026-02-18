
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <h1 className="text-[200px] font-heading select-none">MCKENNA</h1>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-accent-gold p-2 rounded">
              <span className="font-heading text-2xl">M</span>
            </div>
            <span className="font-heading text-2xl tracking-tighter">McKenna Laws</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            McKenna Laws is a premier legal firm based in Florida, providing aggressive criminal defense and dedicated advocacy for personal injury victims.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-8 text-accent-gold tracking-widest">Our Expertise</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/practice-areas" className="hover:text-white transition-colors">DUI & Traffic Offenses</Link></li>
            <li><Link to="/practice-areas" className="hover:text-white transition-colors">Drug Crimes Defense</Link></li>
            <li><Link to="/practice-areas" className="hover:text-white transition-colors">Violent Crimes & Felony</Link></li>
            <li><Link to="/practice-areas" className="hover:text-white transition-colors">Car & Truck Accidents</Link></li>
            <li><Link to="/practice-areas" className="hover:text-white transition-colors">Wrongful Death Claims</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-8 text-accent-gold tracking-widest">Florida Locations</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin className="text-accent-gold mt-1 flex-shrink-0" size={16} />
              <span>100 N Orange Ave,<br/>Orlando, FL 32801</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="text-accent-gold mt-1 flex-shrink-0" size={16} />
              <span>201 S Biscayne Blvd,<br/>Miami, FL 33131</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-lg mb-8 text-accent-gold tracking-widest">Get In Touch</h4>
          <a href="tel:1800MCKENNA" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-accent-deep flex items-center justify-center rounded group-hover:bg-accent-gold transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] text-accent-gold font-bold uppercase tracking-widest">Call 24/7</p>
              <p className="text-lg font-bold">(800) MCKENNA</p>
            </div>
          </a>
          <a href="mailto:help@mckennalaws.com" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-accent-deep flex items-center justify-center rounded group-hover:bg-accent-gold transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] text-accent-gold font-bold uppercase tracking-widest">Email Us</p>
              <p className="font-bold">help@mckennalaws.com</p>
            </div>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2024 McKenna Laws. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Attorney Advertising</a>
        </div>
      </div>
    </footer>
  );
};
