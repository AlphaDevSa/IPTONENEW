
import React from 'react';
import Hero from './components/Hero';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import { Users, Building, Server, CheckCircle, ArrowRight, Shield, Zap, TrendingUp, Handshake, Briefcase, Globe } from './components/icons';

const PartnersPage: React.FC = () => {
    const navigate = useNavigation();

    const partnerPrograms = [
        {
            icon: <Users className="w-10 h-10 text-brand-green" />,
            title: "Agent Program",
            subtitle: "Refer & Earn",
            description: "Perfect for IT consultants, cabling installers, and business advisors. Simply refer clients to us, and we handle the rest—sales, billing, and support.",
            idealFor: "Consultants, IT Support, Sales Professionals",
            link: "/partners/agents",
            benefits: ["Recurring Monthly Commission", "No Administrative Burden", "We Support the Customer"]
        },
        {
            icon: <Building className="w-10 h-10 text-brand-blue" />,
            title: "Reseller Program",
            subtitle: "Your Brand, Our Tech",
            description: "Build your own telecoms company. Utilize our white-label platforms to bill your customers under your own brand while we manage the infrastructure.",
            idealFor: "MSPs, ISPs, System Integrators",
            link: "/partners/resellers",
            benefits: ["Set Your Own Margins", "White-Label Billing & Portals", "Full Customer Ownership"]
        },
        {
            icon: <Server className="w-10 h-10 text-purple-600" />,
            title: "Wholesale Solutions",
            subtitle: "Carrier-Grade Scale",
            description: "For established carriers and large service providers needing raw connectivity and voice termination at volume-based tier-1 rates.",
            idealFor: "WISPs, Fibre Network Operators, Telcos",
            link: "/partners/wholesale",
            benefits: ["Volume-Based Pricing", "API Integration", "Direct Interconnects"]
        }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Grow with <span className="text-brand-green">IPT One</span>
                    </>
                }
                subtitle="Join South Africa's fastest-growing ICT ecosystem. Whether you want to earn commissions, build your own brand, or scale your network, we have a partnership model designed for your success."
                badge={
                    <>
                        <Handshake className="w-4 h-4" />
                        <span>Partner Network</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                        {/* Background Network Glow */}
                        <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-[80px]"></div>
                        
                        {/* Orbit Rings */}
                        <div className="absolute w-full h-full border border-dashed border-gray-700/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute w-3/4 h-3/4 border border-dashed border-gray-700/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

                        {/* Central Hub */}
                        <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-brand-blue to-blue-900 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-gray-800 p-4 text-center">
                            <Globe className="w-8 h-8 text-white mb-1" />
                            <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">ECOSYSTEM</span>
                        </div>

                        {/* Connected Nodes - Satellites */}
                        {/* Agent Node */}
                        <div className="absolute top-4 right-10 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-xl flex items-center gap-3 animate-float-slow">
                            <div className="bg-brand-green/20 p-2 rounded-lg">
                                <Briefcase className="w-5 h-5 text-brand-green" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Referral</p>
                                <p className="text-sm font-bold text-white">Agents</p>
                            </div>
                        </div>

                        {/* Reseller Node */}
                        <div className="absolute bottom-12 right-0 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-xl flex items-center gap-3 animate-float-slow delay-700">
                            <div className="bg-brand-blue/20 p-2 rounded-lg">
                                <Building className="w-5 h-5 text-brand-blue" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">White Label</p>
                                <p className="text-sm font-bold text-white">Resellers</p>
                            </div>
                        </div>

                        {/* Wholesale Node */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 p-3 bg-gray-800 rounded-xl border border-gray-700 shadow-xl flex items-center gap-3 animate-float-reverse">
                            <div className="bg-purple-500/20 p-2 rounded-lg">
                                <Server className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">High Volume</p>
                                <p className="text-sm font-bold text-white">Wholesale</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                        size="lg" 
                        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="font-bold bg-brand-green text-gray-900 hover:bg-white border-transparent"
                    >
                        View Programs
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => navigate('/contact')}
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        Contact Channel Manager
                    </Button>
                </div>
            </Hero>

            {/* Intro Stats */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
                        <div className="py-4 md:px-6">
                            <p className="text-4xl font-extrabold text-brand-blue">10+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Industry Experience</p>
                        </div>
                        <div className="py-4 md:px-6">
                            <p className="text-4xl font-extrabold text-brand-blue">20+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Active Partners</p>
                        </div>
                        <div className="py-4 md:px-6">
                            <p className="text-4xl font-extrabold text-brand-blue">100%</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Channel Focused</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Programs Grid */}
            <section id="programs" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Partnership Model</h2>
                        <p className="text-lg text-gray-600">
                            We understand that one size doesn't fit all. Select the program that aligns with your business capabilities and revenue goals.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {partnerPrograms.map((program, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 flex flex-col">
                                <div className="p-8 flex-grow">
                                    <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                                    <p className="text-brand-blue font-medium mb-4">{program.subtitle}</p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {program.description}
                                    </p>
                                    
                                    <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ideal For</p>
                                        <p className="text-sm font-semibold text-gray-900">{program.idealFor}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {program.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600">
                                                <CheckCircle className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 pt-0 mt-auto">
                                    <Button onClick={() => navigate(program.link)} className="w-full justify-between group" variant={index === 1 ? 'default' : 'outline'}>
                                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with IPT One?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We provide the infrastructure, you provide the relationship. Our ecosystem is built to remove technical barriers, allowing you to focus on sales and customer service.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                                            <Shield className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Carrier-Grade Reliability</h3>
                                        <p className="mt-2 text-gray-600">
                                            Your reputation depends on uptime. Our geo-redundant network ensures your clients stay connected 24/7.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                                            <TrendingUp className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">High Margins</h3>
                                        <p className="mt-2 text-gray-600">
                                            Our competitive wholesale rates allow you to build a sustainable, profitable business model with recurring revenue.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                                            <Zap className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Dedicated Support</h3>
                                        <p className="mt-2 text-gray-600">
                                            Get direct access to our Level 3 engineers. No call centers, just experts helping experts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 transform rotate-3 rounded-2xl opacity-10"></div>
                            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                                <h3 className="font-bold text-gray-900 mb-6 text-xl">Comparison Guide</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="py-3 font-semibold text-gray-500">Feature</th>
                                                <th className="py-3 font-bold text-brand-green">Agent</th>
                                                <th className="py-3 font-bold text-brand-blue">Reseller</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="py-3 text-gray-600">Ownership of Customer</td>
                                                <td className="py-3 text-gray-500">IPT One</td>
                                                <td className="py-3 text-gray-900 font-medium">You</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 text-gray-600">Billing Responsibility</td>
                                                <td className="py-3 text-gray-500">IPT One</td>
                                                <td className="py-3 text-gray-900 font-medium">You</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 text-gray-600">Pricing Control</td>
                                                <td className="py-3 text-gray-500">Fixed</td>
                                                <td className="py-3 text-gray-900 font-medium">Flexible</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 text-gray-600">Tech Support Level</td>
                                                <td className="py-3 text-gray-500">We Support</td>
                                                <td className="py-3 text-gray-900 font-medium">You (L1) / Us (L2)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 text-gray-600">White Labeling</td>
                                                <td className="py-3 text-gray-500">No</td>
                                                <td className="py-3 text-gray-900 font-medium">Yes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <CtaSection />
        </>
    );
};

export default PartnersPage;
