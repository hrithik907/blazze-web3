
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { WalletConnector } from '@/components/WalletConnector';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TokenomicsPage = () => {
  const tokenomics = [
    { name: 'Community & Ecosystem', value: 40, color: '#3B82F6' },
    { name: 'Team & Advisors', value: 20, color: '#10B981' },
    { name: 'Treasury', value: 15, color: '#60A5FA' },
    { name: 'Development', value: 15, color: '#2563EB' },
    { name: 'Liquidity', value: 10, color: '#4ADE80' }
  ];

  const tokenDetails = [
    { title: 'Token Name', value: 'BLAZZE' },
    { title: 'Token Symbol', value: 'BLZ' },
    { title: 'Total Supply', value: '1,000,000,000' },
    { title: 'Initial Price', value: '$0.10' },
    { title: 'Blockchain', value: 'Ethereum (ERC-20)' }
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
                BLAZZE <span className="text-gradient">Tokenomics</span>
              </h1>
              <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto mb-8">
                Detailed breakdown of BLAZZE token distribution and utility
              </p>
              <WalletConnector />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <Card className="bg-blazze-card border-blazze-border">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white">Token Distribution</h2>
                  <div className="h-80">
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
                          label={({ name, value }) => `${name} (${value}%)`}
                        >
                          {tokenomics.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blazze-card border-blazze-border">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white">Token Details</h2>
                  <div className="space-y-4">
                    {tokenDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-blazze-darker rounded-lg">
                        <span className="text-blazze-text-muted">{detail.title}</span>
                        <span className="text-white font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TokenomicsPage;
