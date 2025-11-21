import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-8 border-t border-brand-gray">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold text-white">GPEmporium</span>
          <span className="text-gray-500 ml-2 text-sm">© {new Date().getFullYear()} Tutti i diritti riservati.</span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;