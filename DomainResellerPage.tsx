
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Tag, Shield, TrendingUp, Database, Mail, Server, Globe, Zap, ArrowRight, Lock, Code, Layout, Settings, Activity, Briefcase } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle } from './components/Card';

const DomainResellerPage: React.FC = () => {
  const processSteps = [
    {
        step: "01",
        title: "Sign Up",
        description: "Apply for a reseller account. Once approved, you get access to wholesale pricing tiers immediately."
    },
    {
        step: "02",
        title: "Integrate",
        description: "Connect your billing system (WHMCS, Blesta) using our white-label API or ready-made modules."
    },
    {
        step: "03",
        title: "Sell & Profit",
        description: "Set your own margins. Your clients buy from you, we handle the technical registration in the background."
    }
  ];

  const features = [
    {
        icon: <Tag className="w-6 h-6 text-white" />,
        title: "White-Label Ready",
        description: "Your brand, front and center. Sell domains under your own name with fully customizable control panels and email notifications.",
        bg: "bg-blue-500"
    },
    {
        icon: <Code className="w-6 h-6 text-white" />,
        title: "Powerful API & WHMCS",
        description: "Automate everything. Our robust API and WHMCS modules allow for seamless provisioning, renewals, and management.",
        bg: "bg-purple-500"
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        title: "Set Your Margins",
        description: "Buy at wholesale, sell at retail. You have complete control over your pricing strategy and profitability.",
        bg: "bg-green-500"
    },
    {
        icon: <Shield className="w-6 h-6 text-white" />,
        title: "Enterprise Security",
        description: "Lock down your account with 2FA and IP restrictions. We prioritize the security of your portfolio.",
        bg: "bg-red-500"
    },
    {
        icon: <Database className="w-6 h-6 text-white" />,
        title: "Bulk Management",
        description: "Tools designed for scale. Manage thousands of domains, DNS records, and contacts from a single dashboard.",
        bg: "bg-orange-500"
    },
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        title: "150+ TLDs",
        description: "Offer your clients the world. From local .co.za to global .com and niche extensions like .tech or .io.",
        bg: "bg-indigo-500"
    },
    {
        icon: <Settings className="w-6 h-6 text-white" />,
        title: "DNS Management",
        description: "Give clients full control. Integrated tools for managing A, MX, CNAME, and TXT records directly from the portal.",
        bg: "bg-teal-500"
    },
    {
        icon: <Server className="w-6 h-6 text-white" />,
        title: "White Label Name Servers",
        description: "Professionalize your hosting. Use your own custom nameservers (ns1.yourbrand.com) instead of generic registrar ones.",
        bg: "bg-gray-800"
    },
    {
        icon: <Layout className="w-6 h-6 text-white" />,
        title: "White Label Control Panel",
        description: "A client portal that looks like you. Fully customizable CSS and logo placement to ensure seamless brand continuity.",
        bg: "bg-pink-600"
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Your Brand. Your Business. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Our Infrastructure.</span>
            </>
        }
        subtitle="Launch your own fully automated domain registrar business. We provide the accreditation, the API, and the wholesale rates—you keep 100% of the profit."
        badge={
            <>
                <Briefcase className="w-4 h-4" />
                <span>Registrar in a Box</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-green/10 rounded-full blur-[80px] -z-10"></div>

                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header with "Your Logo" placeholder */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
                        <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase">Admin Panel</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Total Sales</p>
                            <p className="text-xl font-bold text-white mt-1">R 124,500</p>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Active Domains</p>
                            <p className="text-xl font-bold text-brand-green mt-1">1,842</p>
                        </div>
                    </div>

                    {/* Recent Registrations List */}
                    <div className="space-y-2">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-2">Live Transactions</p>
                        <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded border border-gray-700/50">
                            <div className="flex items-center">
                                <Globe className="w-3 h-3 text-brand-blue mr-2" />
                                <span className="text-xs text-gray-300">my-shop.co.za</span>
                            </div>
                            <span className="text-xs text-green-400 font-mono">+R20.00</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded border border-gray-700/50">
                            <div className="flex items-center">
                                <Globe className="w-3 h-3 text-purple-400 mr-2" />
                                <span className="text-xs text-gray-300">tech-startup.io</span>
                            </div>
                            <span className="text-xs text-green-400 font-mono">+R150.00</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded border border-gray-700/50">
                            <div className="flex items-center">
                                <Globe className="w-3 h-3 text-yellow-400 mr-2" />
                                <span className="text-xs text-gray-300">portfolio.africa</span>
                            </div>
                            <span className="text-xs text-green-400 font-mono">+R45.00</span>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-30 bg-brand-blue text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow transform rotate-3">
                    <Tag className="w-5 h-5" />
                    <div>
                        <p className="text-[10px] text-blue-200 uppercase font-bold">Pricing</p>
                        <p className="text-xs font-bold">Wholesale Tier</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-30 bg-white text-gray-900 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse transform -rotate-2">
                    <Code className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Integration</p>
                        <p className="text-xs font-bold">API Ready</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Become a Reseller
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                How It Works
            </Button>
        </div>
      </Hero>

      {/* Stats / Trust Strip */}
      <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                  <div className="flex flex-col items-center">
                      <Globe className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">150+</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">TLD Extensions</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Layout className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">100%</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">White Label</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Code className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">API</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Full Integration</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Shield className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">24/7</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Partner Support</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Value Prop & Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        For Service Providers
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Stop Referring. <br/>Start Selling.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Stop sending your clients to third-party registrars. With the IPT One Domain Reseller program, <strong>you</strong> become the registrar. We provide the heavy lifting: ZACR accreditation, technical backend, and wholesale pricing—you provide the brand.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you are a web designer managing 10 domains or an ISP managing 10,000, our platform scales effortlessly with your business, allowing you to monetize every domain you register.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="font-medium text-gray-700">No monthly fees or minimum commitments</span>
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="font-medium text-gray-700">Free WHMCS Registrar Module</span>
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="font-medium text-gray-700">Tiered pricing based on volume</span>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                        {/* Visual Logic Representation */}
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue font-bold">C</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">Your Client</p>
                                        <p className="text-xs text-gray-500">Buys domain from you</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-green-600">Pays R99.00</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                            </div>

                            <div className="flex justify-between items-center bg-brand-blue text-white p-4 rounded-xl shadow-lg transform scale-105">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue font-bold">Y</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold">You (Reseller)</p>
                                        <p className="text-xs text-blue-200">Set margin & automate</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-brand-green">Profit R20.00+</p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                            </div>

                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-75">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">I</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">IPT One Backend</p>
                                        <p className="text-xs text-gray-500">Registry processing</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-600">Cost R7X.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Start Selling in 3 Steps</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">We've removed the complexity from becoming a registrar.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {processSteps.map((step, idx) => (
                      <div key={idx} className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-blue transition-colors group">
                          <div className="absolute -top-6 left-8 text-6xl font-black text-gray-700/50 group-hover:text-brand-blue/20 transition-colors">
                              {step.step}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 mt-2 relative z-10">{step.title}</h3>
                          <p className="text-gray-400 relative z-10">{step.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">A comprehensive toolkit designed for the modern web professional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-8">
                            <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 sm:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join our reseller program today. Complete the form below to apply for a reseller account and access our wholesale rate card.
                    </p>
                </div>
                <div className="bg-white p-8 sm:p-12 rounded-t-3xl sm:rounded-3xl sm:mx-4 sm:mb-4 shadow-inner">
                    <ServiceInquiryForm serviceName="Domain Reseller Program" />
                </div>
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default DomainResellerPage;
