
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (card) {
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blazze-primary/10 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blazze-secondary/10 filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">BLAZZE</span> Debit Card
            </h1>
            <p className="text-xl mb-8 text-blazze-text-muted max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Spend BLAZZE in the real world with our cryptocurrency card. Seamlessly bridge Web3 and traditional finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
              >
                <Wallet className="mr-2 h-5 w-5" /> Connect Wallet
              </Button>
              <Button 
                variant="outline" 
                className="border-blazze-border text-blazze-text hover:bg-blazze-border hover:text-white transition-colors px-8 py-6 rounded-full text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div
              ref={cardRef}
              className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-blazze-primary to-blazze-secondary p-0.5 shadow-lg transition-transform duration-200"
            >
              <div className="absolute inset-[1px] rounded-2xl bg-blazze-dark flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-gradient-to-br from-blazze-primary to-blazze-secondary rounded-md opacity-80"></div>
                  <div className="text-white font-bold text-xl">VISA</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="mb-4">
                    <div className="h-8 w-12 rounded bg-gradient-to-r from-blazze-primary/60 to-blazze-secondary/60 backdrop-blur-sm"></div>
                  </div>
                  <div className="text-white font-mono tracking-widest text-xl mb-1">•••• •••• •••• 1234</div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-blazze-text-muted text-xs mb-0.5">Card Holder</p>
                      <p className="text-white">JOHN DOE</p>
                    </div>
                    <div>
                      <p className="text-blazze-text-muted text-xs mb-0.5">Expires</p>
                      <p className="text-white">12/28</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card glow effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blazze-primary to-blazze-secondary opacity-30 blur-xl"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blazze-primary to-blazze-secondary opacity-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
