import React from 'react';
import { Code, PenTool, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Design & Development",
      description: "Siti web moderni e performanti. Integro strumenti AI nel workflow di sviluppo per codice ottimizzato, automazioni intelligenti e soluzioni scalabili.",
    },
    {
      icon: <PenTool size={40} />,
      title: "Content Creation & Branding",
      description: "Narrazione visiva e testuale potenziata dalla Generative AI. Creazione rapida di asset creativi e copy persuasivo che definiscono l'identità del brand.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Media Buying & Advertising",
      description: "Gestione strategica del budget pubblicitario. Utilizzo algoritmi predittivi e analisi AI-driven per massimizzare il ROI su Meta e Google.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Miei Servizi</h2>
          <p className="text-gray-400 text-lg">
            Un approccio integrato e tecnologicamente avanzato per coprire ogni aspetto della tua presenza online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark p-8 rounded-xl border border-brand-gray hover:border-brand-accent transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-gray rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;