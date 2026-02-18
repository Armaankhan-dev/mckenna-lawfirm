
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, RefreshCcw } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="pt-32 bg-white">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20 mb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl mb-6">CONTACT US.</h1>
          <p className="text-xl text-accent-gold font-bold uppercase tracking-widest">Confidential Consultations Available 24/7</p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <h1 className="text-[300px] font-heading translate-y-20">ORLANDO</h1>
        </div>
      </section>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 pb-24">
        {/* Contact Form Container */}
        <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 rounded-sm -mt-32 relative z-20">
          {!isSubmitted ? (
            <>
              <h2 className="text-4xl mb-8">FREE CASE EVALUATION.</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-accent-gold outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input required type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-accent-gold outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-accent-gold outline-none transition-colors" placeholder="(555) 000-0000" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Case Type</label>
                    <select className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-accent-gold outline-none transition-colors">
                      <option>Criminal Defense</option>
                      <option>Personal Injury</option>
                      <option>DUI Defense</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tell us about your case</label>
                  <textarea required rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:border-accent-gold outline-none transition-colors" placeholder="Brief description of the incident..."></textarea>
                </div>
                <button type="submit" className="w-full bg-accent-gold text-white py-5 font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-accent-warm transition-all transform hover:scale-[1.02]">
                  <span>Send Secure Message</span>
                  <Send size={18} />
                </button>
                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  Submitting this form does not create an attorney-client relationship. All submissions are strictly confidential and protected by attorney-client privilege during initial consultation.
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mb-8 shadow-xl">
                <CheckCircle className="text-white w-10 h-10" />
              </div>
              <h2 className="text-4xl mb-4 font-heading tracking-tight">FORM SUBMITTED.</h2>
              <p className="text-xl text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed">
                Thank you. Your inquiry has been securely received. An attorney will review your information and contact you shortly.
              </p>
              <button 
                onClick={handleReset}
                className="flex items-center space-x-3 text-accent-gold font-bold uppercase tracking-widest hover:text-accent-warm transition-colors group"
              >
                <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                <span>Submit Another Response</span>
              </button>
            </div>
          )}
        </div>

        {/* Office Details */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl tracking-widest font-heading mb-6 border-b-2 border-accent-gold inline-block">Direct Lines</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded text-accent-gold">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Main Office</p>
                <p className="text-2xl font-bold">(800) MCKENNA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded text-accent-gold">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Case Inquiries</p>
                <p className="text-2xl font-bold">help@mckennalaws.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <h3 className="text-2xl tracking-widest font-heading mb-6 border-b-2 border-accent-gold inline-block">Office Hours</h3>
             <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded text-accent-gold">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Always Open 24/7</p>
                <p className="text-sm text-gray-500">Initial intake and emergency defense available around the clock.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <h3 className="text-2xl tracking-widest font-heading mb-6 border-b-2 border-accent-gold inline-block">Primary Locations</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-6 bg-gray-50 border border-gray-100">
                 <p className="font-heading text-lg mb-2">Orlando Headquarters</p>
                 <p className="text-sm text-gray-500 mb-4">100 N Orange Ave, Suite 1200<br/>Orlando, FL 32801</p>
                 <a href="#" className="text-xs font-bold text-accent-gold hover:underline">GET DIRECTIONS →</a>
               </div>
               <div className="p-6 bg-gray-50 border border-gray-100">
                 <p className="font-heading text-lg mb-2">Miami Office</p>
                 <p className="text-sm text-gray-500 mb-4">201 S Biscayne Blvd, Suite 2800<br/>Miami, FL 33131</p>
                 <a href="#" className="text-xs font-bold text-accent-gold hover:underline">GET DIRECTIONS →</a>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 relative">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="Map Location" className="w-full h-full object-cover grayscale opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 shadow-2xl rounded-sm text-center border-t-4 border-accent-gold">
            <MapPin className="text-accent-gold w-10 h-10 mx-auto mb-2" />
            <p className="font-heading text-xl">VISIT OUR OFFICES</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Statewide Florida Coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
};
