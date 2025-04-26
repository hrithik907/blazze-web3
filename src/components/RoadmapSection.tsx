
import React from 'react';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const RoadmapSection = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      quarter: 'Q1 2025',
      title: 'Project Launch',
      description: 'Initial token launch, platform development, and community building.',
      completed: true,
      current: false
    },
    {
      quarter: 'Q2 2025',
      title: 'Wallet Integration',
      description: 'Multi-chain wallet integration with enhanced security features.',
      completed: true,
      current: false
    },
    {
      quarter: 'Q3 2025',
      title: 'Debit Card Release',
      description: 'Launch of the BLAZZE debit card with worldwide supported vendors.',
      completed: false,
      current: true
    },
    {
      quarter: 'Q4 2025',
      title: 'Mobile App',
      description: 'Mobile application release with biometric security and seamless UX.',
      completed: false,
      current: false
    },
    {
      quarter: 'Q1 2026',
      title: 'DeFi Integration',
      description: 'Advanced DeFi protocols integration with yield optimization.',
      completed: false,
      current: false
    },
    {
      quarter: 'Q2 2026',
      title: 'Global Expansion',
      description: 'Expansion into additional markets and regulatory compliance.',
      completed: false,
      current: false
    }
  ];

  return (
    <section className="py-24 relative" id="roadmap">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Development <span className="text-gradient">Roadmap</span></h2>
          <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
            Our strategic plan for developing and expanding the BLAZZE ecosystem over time. Stay updated on our progress and upcoming features.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blazze-border transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                  <div className="bg-blazze-card border border-blazze-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blazze-primary/5 to-blazze-secondary/5 rounded-bl-full -mr-8 -mt-8"></div>
                    <div className="relative">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        item.completed 
                          ? 'bg-green-900/20 text-green-400' 
                          : item.current 
                            ? 'bg-yellow-900/20 text-yellow-400' 
                            : 'bg-blazze-border text-blazze-text-muted'
                      }`}>
                        {item.quarter}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-blazze-text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-12 h-12 relative z-10">
                  <div className={`w-5 h-5 rounded-full ${
                    item.completed 
                      ? 'bg-green-500' 
                      : item.current 
                        ? 'bg-yellow-500' 
                        : 'bg-blazze-border'
                  }`}>
                    {item.completed && (
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-glow opacity-70"></div>
                    )}
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-yellow-500 animate-pulse-glow opacity-70"></div>
                    )}
                  </div>
                </div>
                
                <div className={`md:w-1/2 flex md:hidden mt-4 mb-8 items-center ${index % 2 === 0 ? '' : 'md:order-1 md:pr-12'}`}>
                  <div className={`w-4 h-4 rounded-full mr-3 ${
                    item.completed 
                      ? 'bg-green-500' 
                      : item.current 
                        ? 'bg-yellow-500' 
                        : 'bg-blazze-border'
                  }`}></div>
                  <span className="text-blazze-text-muted">{item.quarter}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
