import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import AISolutionsSection from '@/components/home/AISolutionsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { companyInfo } from '@/lib/constants';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TECTINE | AI Automation, Chatbots & Digital Marketing Solutions</title>
        <meta 
          name="description" 
          content="TECTINE provides cutting-edge AI solutions for business automation, chatbots, telemarketing, and digital marketing to drive growth and efficiency. Trust in Tech. Lead the Trend."
        />
        <meta property="og:title" content="TECTINE | AI Automation, Chatbots & Digital Marketing Solutions" />
        <meta 
          property="og:description" 
          content="Empower your brand with intelligent AI solutions for automation, customer engagement, and growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tectine.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
      </Helmet>
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AISolutionsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;