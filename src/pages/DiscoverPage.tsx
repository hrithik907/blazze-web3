
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, TrendingUp, Layers, Wallet, Shield, CreditCard, Globe } from 'lucide-react';

const DiscoverPage = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Multi-Chain Wallet',
      description: 'Store, send, and receive assets across multiple blockchain networks from a single, unified interface.'
    },
    {
      icon: CreditCard,
      title: 'Crypto Debit Card',
      description: 'Spend your crypto assets anywhere that accepts VISA with automatic currency conversion.'
    },
    {
      icon: TrendingUp,
      title: 'DeFi Integration',
      description: 'Access decentralized finance protocols directly through the BLAZZE platform.'
    },
    {
      icon: Layers,
      title: 'NFT Marketplace',
      description: 'Discover, collect, and trade non-fungible tokens with ease on our integrated marketplace.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Protect your assets with industry-leading security features and multi-factor authentication.'
    },
    {
      icon: Globe,
      title: 'Cross-Border Payments',
      description: 'Send and receive payments globally with minimal fees and near-instant settlements.'
    }
  ];
  
  const platforms = [
    {
      name: 'BLAZZE Wallet',
      description: 'Secure multi-chain wallet with intuitive interface',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      comingSoon: false
    },
    {
      name: 'BLAZZE Exchange',
      description: 'Trade cryptocurrencies with low fees',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      comingSoon: false
    },
    {
      name: 'BLAZZE NFT',
      description: 'Discover and trade digital collectibles',
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover <span className="text-gradient">BLAZZE</span></h1>
              <p className="text-xl text-blazze-text-muted mb-10">
                Explore the complete ecosystem of BLAZZE products and services designed to make Web3 accessible, secure, and practical for everyday use.
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Overview */}
        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Key <span className="text-gradient">Features</span></h2>
              <p className="text-blazze-text-muted max-w-2xl mx-auto">
                Discover the powerful features that make BLAZZE the all-in-one platform for your Web3 journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-blazze-card border-blazze-border transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 text-white mb-4">
                      <feature.icon className="h-6 w-6 text-blazze-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-blazze-text-muted">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Platforms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-gradient">Platforms</span></h2>
              <p className="text-blazze-text-muted max-w-2xl mx-auto">
                Each platform in the BLAZZE ecosystem is designed to work seamlessly together while excelling in its specific area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-blazze-card border border-blazze-border rounded-xl overflow-hidden animate-fade-in transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-full h-48 object-cover object-center"
                    />
                    {platform.comingSoon && (
                      <div className="absolute top-0 right-0 bg-blazze-primary m-4 px-3 py-1 rounded-full text-xs font-medium text-white">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{platform.name}</h3>
                    <p className="text-blazze-text-muted mb-4">{platform.description}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                      disabled={platform.comingSoon}
                    >
                      {platform.comingSoon ? 'Notify Me' : 'Explore'} <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Ready to <span className="text-gradient">Get Started</span>?</h2>
              <p className="text-xl text-blazze-text-muted mb-10">
                Join the BLAZZE ecosystem today and experience the future of Web3 technology. Connect your wallet to begin your journey.
              </p>
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
              >
                Connect Wallet <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default DiscoverPage;
