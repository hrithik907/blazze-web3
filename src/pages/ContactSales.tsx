
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactSales = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Here you would typically send this data to your backend
      console.log('Form data:', data);
      toast.success('Message sent successfully! Our team will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-blazze-dark text-blazze-text">
      <NavBar />
      <div className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Contact <span className="text-gradient">Sales</span>
                </h1>
                <p className="text-xl text-blazze-text-muted">
                  Get in touch with our sales team to learn more about BLAZZE enterprise solutions.
                </p>
              </div>

              <Card className="bg-blazze-card border-blazze-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-white mb-2">Full Name</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full p-3 rounded-lg bg-blazze-darker border border-blazze-border text-white"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Company</label>
                      <input
                        {...register('company', { required: true })}
                        className="w-full p-3 rounded-lg bg-blazze-darker border border-blazze-border text-white"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Email</label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        className="w-full p-3 rounded-lg bg-blazze-darker border border-blazze-border text-white"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Message</label>
                      <textarea
                        {...register('message', { required: true })}
                        className="w-full p-3 rounded-lg bg-blazze-darker border border-blazze-border text-white h-32"
                        placeholder="Tell us about your needs"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
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

export default ContactSales;
