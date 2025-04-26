
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Shield, Zap, Globe } from 'lucide-react';

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-blazze-card border border-blazze-border rounded-xl overflow-hidden animate-fade-in transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10">
    <img
      src={image}
      alt={name}
      className="w-full h-64 object-cover object-center"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-blazze-text-muted">{role}</p>
    </div>
  </div>
);

const AboutPage = () => {
  const team = [
    {
      name: 'Emma Wilson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize the security of user assets and data above all else, implementing the most advanced protection measures in the industry.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our community is at the heart of everything we do. We believe in building together and sharing the benefits of our success.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what's possible in Web3, developing cutting-edge solutions to complex problems.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We're committed to making Web3 technology accessible to everyone, regardless of technical expertise or background.'
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-gradient">BLAZZE</span></h1>
              <p className="text-xl text-blazze-text-muted mb-10">
                We're building the next generation of Web3 infrastructure to create a more accessible, secure, and user-friendly decentralized ecosystem.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our <span className="text-gradient">Mission</span></h2>
                <p className="text-blazze-text-muted mb-6">
                  BLAZZE was founded with a clear mission: to bridge the gap between traditional finance and the world of Web3, making decentralized technology accessible, secure, and practical for everyday use.
                </p>
                <p className="text-blazze-text-muted mb-6">
                  We believe that the future of finance is decentralized, but that future can only arrive if the technology becomes as intuitive and reliable as the systems people already trust.
                </p>
                <p className="text-blazze-text-muted mb-6">
                  Our team of experts from both traditional finance and blockchain technology are working together to create solutions that maintain the core values of decentralization while providing the user experience and security features that consumers expect.
                </p>
                <Button 
                  className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                >
                  Read Our Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 rounded-2xl blur-xl"></div>
                  <div className="bg-blazze-card border border-blazze-border rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      alt="BLAZZE Mission"
                      className="w-full h-80 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-gradient">Values</span></h2>
              <p className="text-blazze-text-muted max-w-2xl mx-auto">
                The core principles that guide our decisions, shape our culture, and define our approach to building in the Web3 space.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-blazze-card border border-blazze-border rounded-xl p-6 animate-fade-in transition-all duration-300 hover:shadow-lg hover:shadow-blazze-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blazze-primary/20 to-blazze-secondary/20 text-white mb-4">
                    <value.icon className="h-6 w-6 text-blazze-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-blazze-text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-blazze-darker">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Meet Our <span className="text-gradient">Team</span></h2>
              <p className="text-blazze-text-muted max-w-2xl mx-auto">
                The passionate individuals driving BLAZZE forward with their expertise, creativity, and commitment to our mission.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-white">Join Our Team</h3>
              <p className="text-blazze-text-muted max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for Web3 and our commitment to excellence.
              </p>
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
              >
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
