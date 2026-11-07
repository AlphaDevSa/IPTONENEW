
import React from 'react';
import { Button } from './Button';
import { useNavigation } from '../NavigationContext';
import { Phone, MapPin, Zap, ArrowRight } from './icons';
import * as analytics from '../analytics';

const CtaSection: React.FC = () => {
  const navigate = useNavigation();

  const handleGetStartedClick = () => {
    analytics.event({
      action: 'click_cta',
      category: 'CTA Section',
      label: 'Get Started'
    });
    navigate('/contact');
  };

  const handleExploreServicesClick = () => {
    analytics.event({
      action: 'click_cta',
      category: 'CTA Section',
      label: 'Explore Services'
    });
    navigate('/services');
  };

  const handleCallClick = () => {
    analytics.event({
      action: 'click_cta',
      category: 'CTA Section',
      label: 'Call Us'
    });
    window.location.href = 'tel:+27120048444';
  };

  const handleCheckCoverageClick = () => {
    analytics.event({
        action: 'click_cta',
        category: 'CTA Section',
        label: 'Check Coverage'
    });
    navigate('/coverage-check');
  };

  const handlePartnerClick = () => {
    analytics.event({
        action: 'click_cta',
        category: 'CTA Section',
        label: 'Partner Program'
    });
    navigate('/partners');
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900 isolate">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),theme(colors.gray.900))] opacity-40" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-brand-blue/10 ring-1 ring-brand-blue/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powering South Africa's <br />
            <span className="text-brand-green">Digital Future</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join thousands of businesses that trust IPT One for their critical connectivity and voice infrastructure. Experience the difference of a partner that puts uptime first.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleGetStartedClick}
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 shadow-lg transition-all hover:scale-105"
            >
              Get Started Now
            </Button>
            <button 
                onClick={handleExploreServicesClick}
                className="text-sm font-semibold leading-6 text-white flex items-center hover:text-brand-green transition-colors group"
            >
                View Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </button>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {/* Card 1: Coverage */}
            <div 
                onClick={handleCheckCoverageClick}
                className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 cursor-pointer hover:bg-white/10 transition-colors group"
            >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-green">
                  <MapPin className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-base font-semibold leading-7 text-white group-hover:text-brand-green transition-colors">Check Coverage</h3>
                  <p className="text-sm leading-6 text-gray-400">See if Fibre or LTE is available at your location instantly.</p>
                </div>
            </div>

            {/* Card 2: Support */}
            <div 
                onClick={handleCallClick}
                className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 cursor-pointer hover:bg-white/10 transition-colors group"
            >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-blue border border-white/20">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-base font-semibold leading-7 text-white group-hover:text-blue-300 transition-colors">Speak to Sales</h3>
                  <p className="text-sm leading-6 text-gray-400">Need advice? Call our local team directly on 012 004 8444.</p>
                </div>
            </div>

            {/* Card 3: Partners */}
            <div 
                onClick={handlePartnerClick}
                className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 cursor-pointer hover:bg-white/10 transition-colors group"
            >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-purple-600/80">
                  <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-base font-semibold leading-7 text-white group-hover:text-purple-300 transition-colors">Become a Partner</h3>
                  <p className="text-sm leading-6 text-gray-400">Resell our services or refer clients to earn recurring revenue.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
