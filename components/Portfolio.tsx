import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "TechCorp Solutions",
      description: "Restyling completo dell'identità aziendale e piattaforma web per un'azienda di consulenza IT.",
      image: "https://picsum.photos/seed/project1/800/600",
      link: "#"
    },
    {
      title: "Urban Style E-commerce",
      description: "Shop online ottimizzato per conversioni con integrazione campagne social media advertising.",
      image: "https://picsum.photos/seed/project2/800/600",
      link: "#"
    },
    {
      title: "Dr. Rossi Medical Studio",
      description: "Landing page professionale per studio medico con sistema di prenotazione appuntamenti integrato.",
      image: "https://picsum.photos/seed/project3/800/600",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-dark border-t border-brand-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Portfolio</h2>
            <div className="w-20 h-1 bg-brand-accent"></div>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-right md:text-left">
            Una selezione dei progetti recenti che dimostrano la qualità e la varietà del mio lavoro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-brand-black rounded-xl overflow-hidden border border-brand-gray shadow-lg">
              {/* Image Container */}
              <div className="overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-semibold text-brand-accent hover:text-white transition-colors"
                  aria-label={`Visita il sito: ${project.title}`}
                >
                  Visita il sito
                  <ExternalLink size={14} className="ml-2" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
