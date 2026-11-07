
import React from 'react';
import Hero from './components/Hero';
import { Headset, Phone, Monitor, TrendingUp, Bot, GitBranch, Database, Users, CheckCircle, ArrowRight } from './components/icons';
import { navStructure } from './servicesData';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';

const CallCenterSolutionsPage: React.FC = () => {
    const navigate = useNavigation();
    const callCenterService = navStructure.find(item => item.path === '/services/call-center');
    const solutions = callCenterService?.subServices || [];

    const features = [
        {
            icon: <GitBranch className="w-8 h-8 text-white" />,
            title: "Smart Routing",
            description: "Intelligent skills-based routing ensures calls reach the best-qualified agent, reducing transfer times and improving first-call resolution.",
            color: "bg-blue-500"
        },
        {
            icon: <Monitor className="w-8 h-8 text-white" />,
            title: "Live Wallboards",
            description: "Monitor agent status, queue lengths, and wait times in real-time. Make instant adjustments to staffing and flow based on live data.",
            color: "bg-green-500"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            title: "Deep Analytics",
            description: "Comprehensive historical reporting allows you to analyze trends, peak times, and agent performance to optimize operations.",
            color: "bg-purple-500"
        },
        {
            icon: <Database className="w-8 h-8 text-white" />,
            title: "Compliance Recording",
            description: "Secure, searchable call recordings for quality assurance, training, and regulatory compliance. Storage options to suit your needs.",
            color: "bg-orange-500"
        },
        {
            icon: <Bot className="w-8 h-8 text-white" />,
            title: "IVR & Auto-Attendant",
            description: "Professional multi-level IVR menus guide callers to the right department automatically, freeing up agents for complex queries.",
            color: "bg-indigo-500"
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "CRM Integration",
            description: "Pop customer details on screen before the agent answers. Seamlessly integrate with Zoho, Salesforce, Zendesk and more.",
            color: "bg-red-500"
        }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Call Center <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Solutions.</span>
                    </>
                }
                subtitle="Smart routing, live wallboards, analytics and CRM integrations in one cloud contact centre platform."
                badge={
                    <>
                        <Headset className="w-4 h-4" />
                        <span>Contact Centre</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md" role="img" aria-label="IPT One Contact Centre Dashboard Interface">
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                        <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden p-6">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-bold">Contact Centre</span>
                                <span className="flex items-center text-xs text-brand-green font-semibold">
                                    <div className="w-2 h-2 bg-brand-green rounded-full mr-2 animate-pulse"></div>
                                    Live
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                    <Phone className="w-5 h-5 text-brand-green mb-2" />
                                    <p className="text-xs text-gray-400">Calls in queue</p>
                                    <p className="text-xl font-bold text-white">4</p>
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                    <Headset className="w-5 h-5 text-brand-green mb-2" />
                                    <p className="text-xs text-gray-400">Agents online</p>
                                    <p className="text-xl font-bold text-white">18</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {["Sales Queue", "Support Queue", "Billing Queue"].map((queue, idx) => (
                                    <div key={queue} className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">{queue}</span>
                                        <span className="flex items-center text-white font-semibold">
                                            <span className="h-1.5 w-20 bg-gray-700 rounded-full mr-3 overflow-hidden inline-block">
                                                <span className={`block h-full rounded-full bg-brand-green`} style={{ width: `${70 - idx * 20}%` }}></span>
                                            </span>
                                            {12 - idx * 3}s
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        View Solutions <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/contact')}
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        Talk to Sales
                    </Button>
                </div>
            </Hero>

            {/* Capabilities */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Platform Capabilities</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Everything your contact centre needs.</h2>
                        <p className="text-lg text-gray-600">Route, monitor and report on every customer conversation from a single platform.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className={`mb-4 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shadow-sm`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section id="solutions" className="py-20 bg-gray-50 border-t border-gray-100 scroll-mt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Call Center Solutions</h2>
                        <p className="text-lg text-gray-600">Choose the platform that fits the way your team works.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map(solution => (
                            <Card key={solution.path} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader className="pb-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center mb-4">
                                        <Headset className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">{solution.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-gray-600">{solution.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={() => navigate(solution.path)} variant="outline" className="w-full">
                                        View Solutions
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                        <CheckCircle className="w-5 h-5 text-brand-green" />
                        <span className="text-gray-700">Keep your existing number — no downtime when you switch.</span>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default CallCenterSolutionsPage;
