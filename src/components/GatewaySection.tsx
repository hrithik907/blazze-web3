
import React from 'react';
import { ArrowRight, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GatewaySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-blazze-card border border-blazze-border rounded-2xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="h-8 w-8 bg-gradient-to-br from-blazze-primary to-blazze-secondary rounded-md"></div>
                    <span className="text-2xl font-bold text-white">BLAZZE</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Your gateway<br />to Ethical Web3
                  </h2>
                  
                  <p className="text-blazze-text-muted mb-8">
                    BLAZZE provides globally-accessible opportunity to enter decentralized finance with security and transparency.
                  </p>
                  
                  <Button 
                    className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                  >
                    <Bitcoin className="mr-2 h-4 w-4" /> Buy BLAZZE
                  </Button>
                </div>
                
                <div className="relative h-64 bg-gradient-to-br from-blazze-dark to-black overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-40"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-32 h-32 animate-float">
                      <div className="absolute inset-0 bg-gradient-to-br from-blazze-primary to-blazze-secondary opacity-30 blur-lg rounded"></div>
                      <div className="absolute inset-0 bg-blazze-dark rounded-lg"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-blazze-primary/30 to-blazze-secondary/30 rounded"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-blazze-primary to-blazze-secondary rounded"></div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-gradient-to-r from-blazze-primary/20 to-blazze-secondary/20 filter blur-md rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Platform <span className="text-gradient">features</span>
            </h2>
            
            <div className="bg-blazze-card border border-blazze-border rounded-2xl overflow-hidden mb-8">
              <div className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <h3 className="text-xl font-bold text-gradient">BLAZZE</h3>
                </div>
                
                <p className="text-white mb-6">
                  BLAZZE ecosystem-wide token with full financial compatibility built-in for staking, trading, and spending through our integrated payment network.
                </p>
                
                <Button 
                  className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                >
                  <Bitcoin className="mr-2 h-4 w-4" /> Buy BLAZZE
                </Button>
                
                <div className="mt-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blazze-primary/10 to-blazze-secondary/10 rounded-lg blur-md"></div>
                  <div className="relative p-4 bg-blazze-dark/50 backdrop-blur border border-blazze-border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blazze-text-muted text-sm mb-1">Current Price</p>
                        <p className="text-white font-bold">$42.86 USD</p>
                      </div>
                      <div>
                        <p className="text-green-500 font-medium">+5.23%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border border-blazze-border text-blazze-text hover:bg-blazze-border hover:text-white transition-colors rounded-full"
            >
              Learn More About BLAZZE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
