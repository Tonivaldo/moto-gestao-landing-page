
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AIAgent from '../components/AIAgent';
import AutoCalculation from '../components/AutoCalculation';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Features />
      <AIAgent />
      <AutoCalculation />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
