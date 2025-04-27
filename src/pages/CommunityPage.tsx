
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Building, ArrowRight } from 'lucide-react';
import { WalletConnector } from '@/components/WalletConnector';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      
      <div className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join the <span className="text-gradient">Community</span>
              </h1>
              <p className="text-xl text-blazze-text-muted mb-10">
                Connect with fellow BLAZZE enthusiasts and shape the future of Web3.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WalletConnector />
                <Button 
                  className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
                  onClick={() => window.open('https://discord.gg/blazze', '_blank')}
                >
                  Join Discord <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Users className="h-12 w-12 text-blazze-primary" />
                <h2 className="text-3xl font-bold text-white">Community Events</h2>
                <p className="text-blazze-text-muted">
                  Join our regular meetups, workshops, and conferences to learn 
                  and connect with the BLAZZE community.
                </p>
              </div>
              <div className="space-y-6">
                <Building className="h-12 w-12 text-blazze-primary" />
                <h2 className="text-3xl font-bold text-white">Governance</h2>
                <p className="text-blazze-text-muted">
                  Participate in shaping the future of BLAZZE through our 
                  community governance system.
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

export default CommunityPage;
