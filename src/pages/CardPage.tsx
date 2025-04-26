
import React, { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, Zap, Globe, CreditCard } from 'lucide-react';

const CardPage = () => {
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
  
  const features = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Industry-leading security features including real-time transaction monitoring and instant freeze capabilities.'
    },
    {
      icon: Zap,
      title: 'Instant Conversion',
      description: 'Your crypto assets are converted to fiat at the point of sale at competitive market rates.'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Use your BLAZZE card at millions of merchants worldwide wherever VISA is accepted.'
    },
    {
      icon: CreditCard,
      title: 'Contactless Payments',
      description: 'Supports tap-to-pay technology for quick and convenient transactions.'
    }
  ];
  
  const plans = [
    {
      name: 'Standard',
      monthlyFee: '$0',
      features: [
        'Physical and virtual card',
        'Up to $1,000 monthly spending',
        '1% cashback on all purchases',
        'Basic security features'
      ],
      color: 'border-blazze-border bg-blazze-dark',
      recommended: false
    },
    {
      name: 'Premium',
      monthlyFee: '$9.99',
      features: [
        'Metal physical and virtual card',
        'Up to $10,000 monthly spending',
        '2% cashback on all purchases',
        'Advanced security features',
        'Priority customer support',
        'Airport lounge access (2 visits/year)'
      ],
      color: 'border-blazze-primary bg-gradient-to-br from-blazze-primary/10 to-blazze-secondary/10',
      recommended: true
    },
    {
      name: 'Elite',
      monthlyFee: '$29.99',
      features: [
        'Limited edition metal card',
        'Unlimited monthly spending',
        '3% cashback on all purchases',
        'Premium security features',
        '24/7 dedicated customer support',
        'Unlimited airport lounge access',
        'Travel insurance included'
      ],
      color: 'border-blazze-border bg-blazze-dark',
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blazze-primary/10 filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blazze-secondary/10 filter blur-3xl animate-pulse-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="flex-1 text-center lg:text-left animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-gradient">BLAZZE</span> Debit Card
                </h1>
                <p className="text-xl mb-8 text-blazze-text-muted max-w-2xl mx-auto lg:mx-0">
                  Spend your crypto assets seamlessly in the real world. The BLAZZE card bridges the gap between Web3 and traditional finance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
                  >
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blazze-border text-blazze-text hover:bg-blazze-border hover:text-white transition-colors px-8 py-6 rounded-full text-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
        
        {/* Features */}
        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Card <span className="text-gradient">Features</span></h2>
              <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
                The BLAZZE card comes packed with features designed to make spending your crypto assets simple, secure, and rewarding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-blazze-card border border-blazze-border rounded-xl p-6 animate-fade-in transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 text-white mr-4">
                      <feature.icon className="h-6 w-6 text-blazze-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-blazze-text-muted">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Card <span className="text-gradient">Plans</span></h2>
              <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
                Choose the card that best fits your needs and lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`border rounded-xl overflow-hidden animate-fade-in relative ${plan.color} ${plan.recommended ? 'transform md:-translate-y-4' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blazze-primary to-blazze-secondary text-white text-center py-2 text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <div className={`p-6 ${plan.recommended ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-3xl font-bold mb-4 text-gradient">{plan.monthlyFee} <span className="text-sm text-blazze-text-muted font-normal">/ month</span></p>
                    
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-blazze-primary mr-2 flex-shrink-0" />
                          <span className="text-blazze-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        plan.recommended 
                          ? 'bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90' 
                          : 'bg-blazze-card hover:bg-blazze-border'
                      } transition-all text-white rounded-full`}
                    >
                      Select Plan
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
                Apply for your BLAZZE card today and start spending your crypto assets anywhere VISA is accepted.
              </p>
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CardPage;
