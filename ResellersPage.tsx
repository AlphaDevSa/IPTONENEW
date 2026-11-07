
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Server, Globe, Shield, TrendingUp, Layout, CreditCard, Zap, Users, ArrowRight } from './components/icons';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';

const ResellersPage: React.FC = () => {

    const benefits = [
        {
            icon: <Layout className="w-6 h-6 text-brand-blue" />,
            title: "100% White Label",
            description: "Your brand, front and center. From the billing portal to the PBX interface, your customers see your logo, not ours."
        },
        {
            icon: <CreditCard className="w-6 h-6 text-brand-blue" />,
            title: "Automated Billing",
            description: "Get access to our advanced billing platform. Manage invoices, payments, and suspensions automatically."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
            title: "Set Your Margins",
            description: "We provide wholesale rates; you set the retail price. Control your profitability and build a recurring revenue machine."
        },
        {
            icon: <Server className="w-6 h-6 text-brand-blue" />,
            title: "Carrier Infrastructure",
            description: "Leverage our geo-redundant network. Offer enterprise-grade reliability without the capital expenditure."
        },
        {
            icon: <Shield className="w-6 h-6 text-brand-blue" />,
            title: "Partner Protection",
            description: "We never market to your clients. We provide the tools and support; you own the customer relationship completely."
        },
        {
            icon: <Zap className="w-6 h-6 text-brand-blue" />,
            title: "Instant Provisioning",
            description: "Deploy services in minutes via our API or partner portal. No waiting for manual setups."
        }
    ];

    const products = [
        "Hosted PBX (Vodia, VitalPBX, Bicom)",
        "SIP Trunking & DID Numbers",
        "Fiber Connectivity (FTTH & FTTB)",
        "LTE & 5G Data Solutions",
        "Web Hosting & Domains",
        "Microsoft 365 Licensing"
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Launch Your Own <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Telecoms Brand</span>
                    </>
                }
                subtitle="The complete white-label solution for MSPs, ISPs, and Entrepreneurs. We provide the carrier-grade infrastructure; you build the business."
                badge={
                    <>
                        <Layout className="w-4 h-4" />
                        <span>White Label Program</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Main Dashboard Card */}
                        <div className="relative z-20 bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Branded Header Simulation */}
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-[10px]">YOU</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">Your Brand</h3>
                                        <p className="text-[10px] text-gray-400">Reseller Admin</p>
                                    </div>
                                </div>
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-mono text-green-400">ONLINE</span>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">MRR</p>
                                    <p className="text-white font-bold text-lg">R 45,200</p>
                                    <p className="text-[10px] text-green-400 flex items-center">
                                        <TrendingUp className="w-3 h-3 mr-1" /> +12%
                                    </p>
                                </div>
                                <div className="bg-gray-900/50 p-3 rounded-xl border border-gray-700">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Clients</p>
                                    <p className="text-white font-bold text-lg">84</p>
                                    <p className="text-[10px] text-blue-400">Active</p>
                                </div>
                            </div>

                            {/* Product Mix */}
                            <div className="space-y-3">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Product Mix</p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        <span className="text-xs text-gray-300">Hosted PBX</span>
                                    </div>
                                    <div className="w-32 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="w-[65%] h-full bg-purple-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span className="text-xs text-gray-300">Fibre / LTE</span>
                                    </div>
                                    <div className="w-32 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="w-[40%] h-full bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1 */}
                        <div className="absolute -top-4 -right-8 z-30 bg-white text-gray-900 p-3 rounded-xl shadow-xl flex items-center space-x-3 animate-float-slow border border-purple-100">
                            <div className="bg-purple-100 p-1.5 rounded-lg text-purple-600">
                                <Layout className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-500">Interface</p>
                                <p className="text-xs font-bold">White Label</p>
                            </div>
                        </div>

                        {/* Floating Element 2 */}
                        <div className="absolute -bottom-4 -left-8 z-30 bg-brand-blue text-white p-3 rounded-xl shadow-xl flex items-center space-x-3 animate-float-reverse border border-blue-500">
                            <CreditCard className="w-4 h-4" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-blue-200">Billing</p>
                                <p className="text-xs font-bold">Automated</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://login.iptonereseller.co.za/login?signup" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="font-bold shadow-lg shadow-purple-500/20 bg-purple-600 hover:bg-purple-700 text-white border-transparent">
                            Apply Now
                        </Button>
                    </a>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        See How It Works
                    </Button>
                </div>
            </Hero>

            {/* Intro & Business Model */}
            <section className="py-20 bg-white" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                                <Users className="w-4 h-4 mr-2" />
                                Partner Program
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Business, Powered by Us.
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Stop leaving money on the table by referring clients away. The IPT One Reseller Program empowers you to become the service provider. 
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We've built a turnkey ecosystem that handles the complexity of voice, data, and billing. You get a fully branded platform to sell high-margin services to your existing client base, creating a sustainable, recurring revenue stream.
                            </p>
                            
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4">What you can sell:</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {products.map((item, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-green/10 rounded-3xl transform -rotate-2"></div>
                            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-gray-900">The Revenue Model</h3>
                                    <p className="text-gray-500">How you make money</p>
                                </div>
                                
                                <div className="space-y-6 relative">
                                    {/* Connecting Line */}
                                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>

                                    <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100 relative z-10">
                                        <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-md border-4 border-white">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Wholesale Cost</h4>
                                            <p className="text-sm text-gray-600">You buy services from us at discounted reseller rates.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100 relative z-10">
                                        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-md border-4 border-white">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Your Markup</h4>
                                            <p className="text-sm text-gray-600">You set the retail price. Add your margin (e.g., 30-50%).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-brand-blue p-4 rounded-xl shadow-lg relative z-10 transform scale-105 text-white">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-xl mr-6 shadow-md">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Your Profit</h4>
                                            <p className="text-sm text-blue-100">You bill the client. You keep the difference. Recurring monthly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partners Choose Us</h2>
                        <p className="text-lg text-gray-600">We provide the complete toolkit for telecom success.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Reseller */}
            <section className="py-20 bg-brand-blue text-white" id="apply">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Become a Reseller</h2>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                        Ready to start your journey? Click the button below to sign up for the reseller program.
                    </p>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center mr-4">
                                <CheckCircle className="w-6 h-6 text-brand-green" />
                            </div>
                            <span className="font-medium text-lg">No Monthly Platform Fees*</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center mr-4">
                                <CheckCircle className="w-6 h-6 text-brand-green" />
                            </div>
                            <span className="font-medium text-lg">Free Onboarding & Training</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center mr-4">
                                <CheckCircle className="w-6 h-6 text-brand-green" />
                            </div>
                            <span className="font-medium text-lg">Dedicated Channel Manager</span>
                        </div>
                    </div>
                    <a 
                        href="https://login.iptonereseller.co.za/login?signup" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-purple-600 hover:bg-purple-700 border border-transparent rounded-lg shadow-lg shadow-purple-500/20 transition-colors"
                    >
                        Apply Now
                    </a>
                    <p className="text-xs text-blue-300 mt-8 italic">*Terms and conditions apply. Minimum spend thresholds may apply for certain tiers.</p>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default ResellersPage;
