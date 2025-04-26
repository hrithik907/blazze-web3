
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-blazze-primary/20 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-blazze-secondary/20 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blazze-primary to-blazze-secondary rounded-3xl p-0.5 shadow-lg shadow-blazze-primary/20 animate-scale-in">
            <div className="bg-blazze-dark rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blazze-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blazze-secondary/10 rounded-full filter blur-3xl"></div>
              
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="text-gradient">Join the Future</span> of Web3?</h2>
                <p className="text-xl text-blazze-text-muted mb-10 max-w-2xl mx-auto">
                  Connect your wallet now and experience the power of the BLAZZE ecosystem. Start managing your digital assets with unparalleled security and convenience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
                  >
                    <Wallet className="mr-2 h-5 w-5" /> Connect Wallet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blazze-border text-white hover:bg-blazze-border transition-colors px-8 py-6 rounded-full text-lg"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
