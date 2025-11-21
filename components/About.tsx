import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "IT Management & Strategy",
    "Sviluppo Web & Automation",
    "Strategie di Advertising",
    "Generative AI & Content"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark border-t border-brand-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-brand-gray">
              <img 
                src="https://picsum.photos/seed/techworkspace/800/1000" 
                alt="Spazio di lavoro professionale" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-lg z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-gray rounded-lg z-0"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Chi Sono
            </h2>
            <div className="w-20 h-1 bg-brand-accent mb-8"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Sono un <strong className="text-white">IT Manager</strong> con una visione a 360 gradi del mondo digitale. 
              Non mi limito a scrivere codice: costruisco ecosistemi digitali intelligenti ed efficienti.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              La mia carriera è definita dall'intersezione tra tecnologia e comunicazione. 
              Specializzato nella creazione di contenuti, nel media buying e nello sviluppo web, integro l'<strong>Intelligenza Artificiale</strong> in ogni fase del processo lavorativo per garantire risultati innovativi e scalabili.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-brand-accent" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;