
import React from 'react';

const PartnersSection = () => {
  // Partner logos would typically be imported from your assets
  const partners = [
    { id: 1, name: 'Partner 1', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+1' },
    { id: 2, name: 'Partner 2', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+2' },
    { id: 3, name: 'Partner 3', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+3' },
    { id: 4, name: 'Partner 4', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+4' },
    { id: 5, name: 'Partner 5', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+5' },
    { id: 6, name: 'Partner 6', logo: 'https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Partner+6' },
  ];

  return (
    <section className="py-16 bg-blazze-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Trusted <span className="text-gradient">Partners</span></h2>
          <p className="text-blazze-text-muted">Working with industry leaders to build the future of Web3</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="flex justify-center animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
