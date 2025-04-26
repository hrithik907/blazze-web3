
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  stars: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Alex Johnson',
      role: 'Crypto Investor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'BLAZZE has completely transformed how I interact with Web3. The debit card makes spending crypto as easy as using a regular bank card.',
      stars: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Blockchain Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'As a developer, I appreciate the technical robustness of the BLAZZE platform. The API integration is seamless, and the security protocols are top-notch.',
      stars: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'Implementing BLAZZE payments in my business has been a game-changer. The transaction speeds are incredible, and the fees are much lower than traditional processors.',
      stars: 4
    },
  ];

  return (
    <section className="py-24 relative bg-blazze-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">User <span className="text-gradient">Testimonials</span></h2>
          <p className="text-xl text-blazze-text-muted max-w-2xl mx-auto">
            Discover why users love the BLAZZE platform and how it's transforming their experience with Web3 technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-blazze-card border-blazze-border transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-blazze-text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-blazze-text mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-blazze-primary"
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-blazze-text-muted text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
