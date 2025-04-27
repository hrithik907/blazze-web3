
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Wallet, Shield, Globe, Zap, Users, Star } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Multi-Chain Wallet',
      description: 'Secure storage and management of assets across multiple blockchain networks.',
      link: '/wallet'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Industry-leading security protocols with multi-factor authentication.',
      link: '/security'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your assets and services from anywhere in the world.',
      link: '/global'
    },
    {
      icon: Zap,
      title: 'Fast Transactions',
      description: 'Lightning-fast transactions with optimized blockchain integration.',
      link: '/transactions'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Participate in platform decisions through our governance model.',
      link: '/community'
    },
    {
      icon: Star,
      title: 'BLAZZE Token',
      description: 'Our native token powering the entire ecosystem.',
      link: '/token'
    }
  ];

  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      <div className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BLAZZE <span className="text-gradient">Features</span>
              </h1>
              <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
                Explore the complete suite of features that make BLAZZE the ultimate Web3 platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-blazze-card border-blazze-border hover:shadow-lg hover:shadow-blazze-primary/10 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 mb-4">
                      <feature.icon className="h-6 w-6 text-blazze-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-blazze-text-muted mb-4">{feature.description}</p>
                    <Link to={feature.link}>
                      <Button 
                        className="w-full bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
