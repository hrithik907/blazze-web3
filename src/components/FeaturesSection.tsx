import React from 'react';
import { ArrowRight, Shield, Globe, Zap, Wallet, CreditCard, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  return (
    <Card className="bg-blazze-card border-blazze-border transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10 hover:scale-105 animate-fade-in overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6 relative">
        <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-blazze-primary/10 to-blazze-secondary/5 rounded-bl-full -mr-12 -mt-8 z-0"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 text-white mb-4">
            <Icon className="h-6 w-6 text-blazze-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <p className="text-blazze-text-muted">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Your assets are protected with industry-leading security protocols and multi-factor authentication.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your assets and use your BLAZZE card anywhere in the world with global network support.'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Experience lightning-fast transactions with our optimized blockchain integration.'
    },
    {
      icon: Wallet,
      title: 'Multi-Chain Support',
      description: 'Manage assets across multiple blockchains from a single, unified interface.'
    },
    {
      icon: CreditCard,
      title: 'Crypto Debit Card',
      description: 'Spend your crypto assets in the real world with our VISA-powered debit card.'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Participate in platform decisions through our community-driven governance model.'
    }
  ];

  return (
    <section className="py-24 relative" id="features">
      <div className="absolute inset-0 bg-feature-gradient opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Platform <span className="text-gradient">Features</span></h2>
          <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
            Experience the next generation of Web3 technology with our comprehensive suite of features designed for security, efficiency, and accessibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/features">
            <Button 
              className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6 text-lg"
            >
              Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
