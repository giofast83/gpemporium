import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Parliamo del tuo progetto</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Hai un'idea in mente o hai bisogno di ottimizzare la tua presenza digitale? 
              Sono disponibile per nuove collaborazioni e consulenze.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-dark rounded-lg text-brand-accent border border-brand-gray">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:info@gpemporium.com" className="text-gray-400 hover:text-brand-accent transition-colors">
                    info@gpemporium.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-dark rounded-lg text-brand-accent border border-brand-gray">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sede</h4>
                  <p className="text-gray-400">
                    Disponibile in remoto e in sede su richiesta.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Seguimi su</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="p-3 bg-brand-dark rounded-full text-gray-400 hover:text-white hover:bg-brand-accent transition-all duration-300">
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a href="#" aria-label="Instagram" className="p-3 bg-brand-dark rounded-full text-gray-400 hover:text-white hover:bg-brand-accent transition-all duration-300">
                  <Instagram size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-dark p-8 rounded-2xl border border-brand-gray shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Messaggio Inviato!</h3>
                <p className="text-gray-400">Grazie per avermi contattato. Ti risponderò al più presto.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-brand-accent hover:text-white transition-colors text-sm font-medium"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-gray-600"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-gray-600"
                    placeholder="tua@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Messaggio</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-gray-600 resize-none"
                    placeholder="Descrivi brevemente il tuo progetto..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-brand-accent hover:bg-brand-accentHover text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-accent/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
