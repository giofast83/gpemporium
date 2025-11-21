import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-brand-gray rounded-full bg-brand-dark/50 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
            Portfolio Professionale & AI Solutions
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          GPEmporium<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 text-4xl md:text-6xl">
             Web Design, Content & Media Buying
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluzioni digitali integrate per far crescere il tuo business. 
          Competenza tecnica, creatività e la potenza dell'<strong>Intelligenza Artificiale</strong> al servizio della tua visione.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-brand-accent hover:bg-brand-accentHover text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group"
          >
            Contattami
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 bg-transparent border border-gray-600 hover:border-white text-white font-semibold rounded-lg transition-all duration-300"
          >
            Vedi i Progetti
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;