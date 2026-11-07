
import React from 'react';
import Hero from './components/Hero';
import CtaSection from './components/CtaSection';
import { Shield, CheckCircle, Handshake, Lock, Zap } from './components/icons';
import { Button } from './components/Button';

const TermsAndConditionsPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'services', title: '2. Service Provision' },
    { id: 'billing', title: '3. Billing and Payment' },
    { id: 'usage', title: '4. Acceptable Use Policy' },
    { id: 'liability', title: '5. Limitation of Liability' },
    { id: 'termination', title: '6. Termination' },
    { id: 'privacy', title: '7. Privacy and Data' },
    { id: 'general', title: '8. General' },
  ];

  return (
    <>
      <Hero
        title={
            <>
                Service <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Agreement</span>
            </>
        }
        subtitle="Transparency is the foundation of our partnership. These terms govern the use of our services to ensure a fair, reliable, and secure experience for everyone."
        badge={
            <>
                <Handshake className="w-4 h-4" />
                <span>Mutual Trust</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
                
                {/* Stacked Documents Visual */}
                <div className="relative z-20">
                    {/* Back Paper */}
                    <div className="absolute top-4 left-4 right-4 h-64 bg-gray-800 rounded-2xl border border-gray-700 opacity-60 transform rotate-3"></div>
                    
                    {/* Front Paper (Main Contract) */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">Service Contract</h3>
                                    <p className="text-xs text-gray-500">IPT One Telecoms</p>
                                </div>
                            </div>
                            <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">
                                Active
                            </div>
                        </div>

                        {/* Text Lines Simulation */}
                        <div className="space-y-3 mb-8">
                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-[90%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-[95%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-[80%]"></div>
                        </div>

                        {/* Clauses Preview */}
                        <div className="space-y-3">
                            <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-brand-blue mr-3" />
                                <span className="text-xs font-semibold text-gray-700">99.9% Uptime Guarantee</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-brand-blue mr-3" />
                                <span className="text-xs font-semibold text-gray-700">Fair Usage Policy</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-brand-blue mr-3" />
                                <span className="text-xs font-semibold text-gray-700">Data Privacy Protection</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 z-30 bg-gray-900 text-white p-4 rounded-xl shadow-xl border border-gray-700 flex items-center space-x-3 animate-float-slow">
                    <Lock className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Security</p>
                        <p className="text-sm font-bold">Standard Enforced</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-blue/20">
                Read Terms
            </Button>
        </div>
      </Hero>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2 text-brand-green" />
                <span>Last Updated: <strong>October 27, 2024</strong></span>
            </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Sidebar Navigation */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="font-bold text-gray-900 mb-4 px-2">Table of Contents</h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-md transition-colors"
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9 space-y-12">
                    
                    <section id="introduction" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <div className="prose max-w-none text-gray-600">
                            <p>
                                These General Terms and Conditions ("Terms") constitute a binding agreement between <strong>IPT One Telecoms</strong> ("the Company", "we", "us") and the customer ("Customer", "you"). By applying for or using any services provided by IPT One Telecoms, you agree to be bound by these Terms.
                            </p>
                        </div>
                    </section>

                    <section id="services" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Provision</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                <strong>2.1. Services:</strong> We provide telecommunication services including but not limited to Hosted PBX, SIP Trunking, Internet Connectivity (Fibre, LTE/5G), and Web Hosting.
                            </p>
                            <p>
                                <strong>2.2. Availability:</strong> We strive to provide continuous availability of our services but do not guarantee uninterrupted service. Service availability may be affected by maintenance, technical faults, or force majeure events.
                            </p>
                            <p>
                                <strong>2.3. Equipment:</strong> Any equipment provided by IPT One Telecoms remains the property of the Company unless purchased outright by the Customer.
                            </p>
                        </div>
                    </section>

                    <section id="billing" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Billing and Payment</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                <strong>3.1. Invoicing:</strong> Invoices are generated monthly in advance for recurring charges and in arrears for usage-based charges (e.g., call minutes).
                            </p>
                            <p>
                                <strong>3.2. Payment Terms:</strong> Payment is due upon presentation of invoice unless otherwise agreed in writing. We primarily accept payment via debit order or EFT.
                            </p>
                            <p>
                                <strong>3.3. Suspension:</strong> We reserve the right to suspend services if payment is not received by the due date. Reconnection fees may apply.
                            </p>
                        </div>
                    </section>

                    <section id="usage" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                <strong>4.1. Lawful Use:</strong> Services must not be used for any unlawful purpose, including fraud, harassment, or transmission of illegal content.
                            </p>
                            <p>
                                <strong>4.2. Fair Usage:</strong> Unlimited calling or data plans are subject to our Fair Usage Policy (FUP) to prevent abuse and ensure quality of service for all users.
                            </p>
                        </div>
                    </section>

                    <section id="liability" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                To the maximum extent permitted by law, IPT One Telecoms shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data, arising out of the use or inability to use our services.
                            </p>
                        </div>
                    </section>

                    <section id="termination" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                <strong>6.1. Notice:</strong> Either party may terminate the agreement by providing 30 days' written notice, subject to any specific contract terms (e.g., 12 or 24-month commitments).
                            </p>
                            <p>
                                <strong>6.2. Early Termination:</strong> Early termination of fixed-term contracts may attract penalty fees equal to the remainder of the contract value.
                            </p>
                        </div>
                    </section>

                    <section id="privacy" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                We are committed to protecting your personal information in accordance with POPIA. Please refer to our <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a> for details on how we collect and use data.
                            </p>
                        </div>
                    </section>

                    <section id="general" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. General</h2>
                        <div className="prose max-w-none text-gray-600 space-y-4">
                            <p>
                                These Terms are governed by the laws of the Republic of South Africa. We reserve the right to amend these Terms from time to time, and such amendments will be effective upon posting on our website.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
      </div>
      
      <CtaSection />
    </>
  );
};

export default TermsAndConditionsPage;
