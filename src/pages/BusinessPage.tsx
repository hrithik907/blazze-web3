
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building, Users, ArrowRight } from 'lucide-react';

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      
      <div className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BLAZZE for <span className="text-gradient">Business</span>
              </h1>
              <p className="text-xl text-blazze-text-muted mb-10">
                Enterprise-grade solutions for businesses looking to integrate blockchain technology.
              </p>
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
              >
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Building className="h-12 w-12 text-blazze-primary" />
                <h2 className="text-3xl font-bold text-white">Enterprise Solutions</h2>
                <p className="text-blazze-text-muted">
                  Custom blockchain solutions tailored for your business needs, 
                  from supply chain management to decentralized finance.
                </p>
              </div>
              <div className="space-y-6">
                <Users className="h-12 w-12 text-blazze-primary" />
                <h2 className="text-3xl font-bold text-white">Dedicated Support</h2>
                <p className="text-blazze-text-muted">
                  24/7 enterprise-grade support and consultation to ensure 
                  your blockchain infrastructure runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessPage;
