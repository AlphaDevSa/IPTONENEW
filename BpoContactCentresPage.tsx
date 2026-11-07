
import React from 'react';
import Hero from './components/Hero';
import { Headset, Phone, Monitor, TrendingUp, Bot, GitBranch, Database, Users, Signal, RefreshCw, CheckCircle, ArrowRight } from './components/icons';
import { useNavigation } from './NavigationContext';
import ServiceInquiryForm from './ServiceInquiryForm';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';

const BpoContactCentresPage: React.FC = () => {
    const navigate = useNavigation();

    const solutions = [
        {
            title: "Contact Centre Platform",
            description: "Smart routing, live wallboards, analytics, compliance recording and CRM integration in a single cloud platform.",
            path: "/services/call-center-solutions",
            icon: <Headset className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600"
        },
        {
            title: "Mobile CLI",
            description: "Present recognised South African mobile numbers on outbound calls to support higher answer rates.",
            path: "/services/mobile-cli",
            icon: <Signal className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600"
        },
        {
            title: "Number Rotation",
            description: "Rotate outbound CLIs at configurable intervals and monitor spam reputation against Truecaller.",
            path: "/services/number-rotation",
            icon: <RefreshCw className="w-6 h-6 text-white" />,
            accent: "from-blue-500 to-indigo-600"
        },
    ];

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
                        BPO and Outsourced <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Contact Centres.</span>
                    </>
                }
                subtitle="Connect your agents, present numbers customers answer, and keep your outbound operations productive."
                badge={
                    <>
                        <Headset className="w-4 h-4" />
                        <span>For BPOs</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md" role="img" aria-label="IPT One BPO operations dashboard interface">
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                        <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden p-6">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-bold">Operations</span>
                                <span className="flex items-center text-xs text-brand-green font-semibold">
                                    <div className="w-2 h-2 bg-brand-green rounded-full mr-2 animate-pulse"></div>
                                    Live
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                    <Phone className="w-5 h-5 text-brand-green mb-2" />
                                    <p className="text-xs text-gray-400">Calls in queue</p>
                                    <p className="text-xl font-bold text-white">6</p>
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                    <Headset className="w-5 h-5 text-brand-green mb-2" />
                                    <p className="text-xs text-gray-400">Agents online</p>
                                    <p className="text-xl font-bold text-white">24</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-3">
                                <p className="text-xs text-gray-400 mb-1">Outbound CLI pool</p>
                                <div className="flex items-center text-white font-bold">
                                    <Signal className="w-4 h-4 text-brand-green mr-2" />
                                    083 · 082 / 076 · 077
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-center">
                                <RefreshCw className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400">Rotation status</p>
                                    <p className="text-sm font-bold text-white">Scheduled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('bpo-solutions')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
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

            {/* Solutions */}
            <section id="bpo-solutions" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Built for Outsourcing</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Run your contact centre on one stack.</h2>
                        <p className="text-lg text-gray-600">
                            Combine the platform your agents work from with the numbers your customers answer.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map(solution => (
                            <div key={solution.title} className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${solution.accent}`}></div>
                                <div className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${solution.accent} flex items-center justify-center shadow-sm`}>
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">{solution.description}</p>
                                <Button onClick={() => navigate(solution.path)} variant="outline" className="w-full mt-auto">
                                    Learn More
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything your agents need.</h2>
                        <p className="text-lg text-gray-600">Route, monitor and report on every customer conversation from a single platform.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
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

            {/* Inquiry */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Talk to us
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Let's scope your contact centre.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Tell us how your team operates and we'll put together the platform, number and connectivity
                            mix that fits your operation.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Contact centre platform and agent seats",
                                "Mobile CLI numbers for outbound campaigns",
                                "CLI rotation and spam reputation monitoring",
                            ].map(item => (
                                <li key={item} className="flex items-start text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5 mr-3" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-green/20 rounded-full blur-xl -z-10"></div>
                        <ServiceInquiryForm serviceName="BPO and Outsourced Contact Centres" />
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default BpoContactCentresPage;
