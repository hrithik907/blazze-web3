
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TokenomicsSection = () => {
  const tokenomics = [
    { name: 'Community & Ecosystem', value: 40, color: '#3B82F6' },
    { name: 'Team & Advisors', value: 20, color: '#10B981' },
    { name: 'Treasury', value: 15, color: '#60A5FA' },
    { name: 'Development', value: 15, color: '#2563EB' },
    { name: 'Liquidity', value: 10, color: '#4ADE80' }
  ];

  const renderLabel = (entry: any) => `${entry.name} (${entry.value}%)`;

  return (
    <section className="py-24 bg-blazze-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">BLAZZE <span className="text-gradient">Tokenomics</span></h2>
          <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
            Our token distribution is designed to ensure long-term sustainability, community governance, and equitable growth of the ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-blazze-card border border-blazze-border rounded-2xl p-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomics}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderLabel}
                  >
                    {tokenomics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value}%`, 'Allocation']}
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      borderColor: '#1F2937',
                      borderRadius: '0.5rem',
                      color: '#F3F4F6'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 text-white">Token Allocation</h3>
            
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-blazze-text">{item.name}</span>
                      <span className="text-blazze-text-muted">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-blazze-border rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${item.value}%`, 
                          backgroundColor: item.color 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Token Utility</h3>
              <ul className="space-y-2 text-blazze-text-muted">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blazze-primary mt-2 mr-3"></div>
                  <span>Platform governance and voting rights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blazze-primary mt-2 mr-3"></div>
                  <span>Transaction fee discounts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blazze-primary mt-2 mr-3"></div>
                  <span>Staking rewards and passive income</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blazze-primary mt-2 mr-3"></div>
                  <span>Access to premium features and services</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
              >
                View Tokenomics Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
