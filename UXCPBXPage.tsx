
import React, { useState } from 'react';
import Hero from './components/Hero';
import { 
    CheckCircle, Check, Phone, Cloud, Settings, Voicemail, Shield, Users, 
    Bot, Database, GitBranch, Zap, Monitor, Smartphone, Activity, ArrowRight,
    Clock, Mail, Server, MessageSquare, Headset, RefreshCw, Globe
} from './components/icons';
import Modal from './Modal';
import UXCSignUpForm from './UXCSignUpForm';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import { useNavigation } from './NavigationContext';

interface Plan {
    name: string;
    price: string;
    description: string;
    extensions: string;
    features: string[];
    isPopular?: boolean;
}

const pricingPlans: Plan[] = [
    {
        name: "UXC Enterprise",
        price: "89",
        description: "Standard enterprise unified communications for growing teams.",
        extensions: "Per User",
        features: [
            "UXC Mobile & Desktop Clients",
            "Advanced Call Routing",
            "Standard Call Recording",
            "Includes 500 minutes (Per seat)",
            "Local Landline to Landline",
            "Local Landline to Mobile",
            "International call excluded."
        ]
    },
    {
        name: "UXC Ultimate",
        price: "129",
        description: "The complete UXC suite with premium collaboration tools.",
        extensions: "Per User",
        features: [
            "UXC Mobile & Desktop Clients",
            "Omnichannel Support",
            "Advanced Analytics",
            "Unlimited Call Recording",
            "Includes 500 minutes (Per seat)",
            "Local Landline to Landline",
            "Local Landline to Mobile",
            "International call excluded."
        ],
        isPopular: true
    }
];

const UXCPBXPage: React.FC = () => {
    const navigate = useNavigation();

    const uxcFeaturesList = [
        {
            title: "User Experience Focused",
            description: "A platform built with the end-user in mind. Intuitive interfaces and seamless workflows for every department.",
            icon: <Users />
        },
        {
            title: "Cloud Native Engine",
            description: "Built for the modern cloud. Scalable, high-availability architecture ensuring your business never misses a beat.",
            icon: <Cloud />
        },
        {
            title: "Smart Analytics",
            description: "Gain deep insights into your communication patterns with real-time data and actionable reports.",
            icon: <Activity />
        },
        {
            title: "Global Connectivity",
            description: "Connect your global offices on a single, unified dial-plan with zero-latency inter-branch calling.",
            icon: <Globe />
        },
         {
            title: "AI Receptionist",
            description: "Next-gen IVR that understands natural language and routes callers with precision.",
            icon: <Bot />
        },
        {
            title: "Secure by Design",
            description: "Bank-grade encryption and proactive threat monitoring built into the core of the platform.",
            icon: <Shield />
        }
    ];

    const featuresData = {
        call: [
            { title: "Smart Forwarding", icon: <ArrowRight className="w-5 h-5 text-blue-500" /> },
            { title: "Compliance Recording", icon: <Database className="w-5 h-5 text-red-500" /> },
            { title: "Drag-and-Drop Transfer", icon: <Phone className="w-5 h-5 text-green-500" /> },
            { title: "Dynamic Waiting", icon: <Clock className="w-5 h-5 text-orange-500" /> },
            { title: "Group Conferencing", icon: <Users className="w-5 h-5 text-purple-500" /> },
            { title: "Smart Caller ID", icon: <CheckCircle className="w-5 h-5 text-teal-500" /> },
            { title: "Interaction Logs", icon: <Activity className="w-5 h-5 text-indigo-500" /> },
            { title: "Intelligent Hold", icon: <Phone className="w-5 h-5 text-gray-500" /> },
            { title: "Custom Dial Plans", icon: <Zap className="w-5 h-5 text-pink-500" /> },
        ],
        voicemail: [
            { title: "Transcribed Voicemail", icon: <Mail className="w-5 h-5 text-blue-500" /> },
            { title: "Visual Mailbox", icon: <Voicemail className="w-5 h-5 text-purple-500" /> },
            { title: "Secure PIN Access", icon: <Shield className="w-5 h-5 text-green-500" /> },
            { title: "AI Greetings", icon: <MessageSquare className="w-5 h-5 text-orange-500" /> },
            { title: "Shared Inboxes", icon: <Users className="w-5 h-5 text-red-500" /> },
        ],
        advanced: [
            { title: "Omnichannel IVR", icon: <Bot className="w-5 h-5 text-indigo-500" /> },
            { title: "Predictive Queues", icon: <Users className="w-5 h-5 text-green-500" /> },
            { title: "Work Hours Logic", icon: <Clock className="w-5 h-5 text-blue-500" /> },
            { title: "Spam Guard", icon: <Shield className="w-5 h-5 text-red-500" /> },
            { title: "Priority Groups", icon: <Users className="w-5 h-5 text-orange-500" /> },
            { title: "Bespoke Hold Music", icon: <Headset className="w-5 h-5 text-purple-500" /> },
            { title: "Seamless Mobility", icon: <Smartphone className="w-5 h-5 text-teal-500" /> },
            { title: "Global Porting", icon: <RefreshCw className="w-5 h-5 text-pink-500" /> },
        ]
    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [activeTab, setActiveTab] = useState<'call' | 'voicemail' | 'advanced'>('call');

    const featureTabs = [
        { id: 'call', name: 'Communication', icon: <Phone className="w-4 h-4 mr-2" /> },
        { id: 'voicemail', name: 'Messaging', icon: <Voicemail className="w-4 h-4 mr-2" /> },
        { id: 'advanced', name: 'Intelligence', icon: <Settings className="w-4 h-4 mr-2" /> },
    ];

    const handleSignUpClick = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const highlights = [
        "User-Centric PBX Ecosystem",
        "Native Apps for All Platforms",
        "High-Definition Video Collaboration",
        "Advanced API Ecosystem",
        "Customer Experience Metrics",
        "Enterprise-Grade Scalability"
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        UXC Hosted <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">PBX.</span>
                    </>
                }
                subtitle="The Ultimate Experience Cloud. Modernize your workflow with a communications platform that prioritizes the user experience above all else."
                badge={
                    <>
                        <Zap className="w-4 h-4" />
                        <span>Experience Cloud</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                        {/* Core Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
                        
                        {/* Central Cloud Node */}
                        <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl w-48 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,83,155,0.6)] animate-pulse">
                                <Monitor className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white font-bold mb-1">UXC Cloud</h3>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-400">Node Active</span>
                            </div>
                        </div>

                        {/* Orbiting Devices */}
                        <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-slow">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Smartphone className="w-5 h-5 text-brand-blue" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">UXC Mobile</p>
                                <p className="text-[10px] text-gray-500">Connected</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-reverse">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                <Monitor className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">UXC Desktop</p>
                                <p className="text-[10px] text-gray-500">Online</p>
                            </div>
                        </div>

                        <div className="absolute top-20 left-[-20px] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-bounce-slow">
                            <div className="bg-orange-100 p-2 rounded-lg">
                                <Phone className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">IP Handset</p>
                                <p className="text-[10px] text-gray-500">Registered</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        View Plans
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => navigate('/contact')} 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        Get a Quote
                    </Button>
                </div>
            </Hero>

            {/* About UXC Section */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About UXC Experience Cloud</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        UXC (User eXperience Cloud) is the next evolution in business telephony. We believe that technology should serve people, not the other way around. Our platform is designed to eliminate friction in communication, allowing teams to collaborate effortlessly from any location.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        With a deep focus on mobile integration and cloud-native stability, UXC provides a unified ecosystem for voice, video, and messaging that adapts to the way your business works.
                    </p>
                </div>
            </section>

            {/* UXC Cloud Bundle Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                            <Cloud className="w-4 h-4 mr-2" />
                            UXC Cloud Bundle
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">UXC Cloud Bundle</h2>
                        <p className="text-3xl font-bold text-brand-blue mb-8">
                            R129 Per Month <span className="text-gray-500 text-lg font-normal">- Per User / Extension</span>
                        </p>
                        
                        <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
                            <p className="mb-6">
                                The UXC Cloud Bundle is a fully managed, turn-key PBX solution that delivers a premium communication experience. It includes the full UXC software stack, native clients for all devices, and an intelligent administration engine.
                            </p>
                            <p className="mb-6">
                                Each user gets 500 minutes for local calls and access to the complete suite of collaboration tools. From AI-powered receptionist menus to real-time performance analytics, UXC is built to help your business excel.
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-white p-2 rounded-full shadow-sm mr-4 flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-brand-green" />
                                </div>
                                <span className="text-gray-700 font-medium leading-snug pt-1">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Capabilities</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Unlocking business growth through superior communication technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {uxcFeaturesList.map((feat, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    {React.cloneElement(feat.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Interactive Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The UXC Ecosystem</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything your team needs to stay connected and productive.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="flex flex-wrap border-b border-gray-200 bg-white">
                            {featureTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex-1 py-5 px-6 text-sm sm:text-base font-semibold transition-all flex items-center justify-center ${
                                        activeTab === tab.id
                                            ? 'bg-brand-blue text-white shadow-inner'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                        
                        <div className="p-10 sm:p-14 min-h-[400px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuresData[activeTab].map((feature, idx) => (
                                    <div 
                                        key={idx} 
                                        className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="bg-gray-50 p-4 rounded-full mb-4 group-hover:bg-blue-50 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Transparent Pricing</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Choose Your Plan</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Scalable UXC packages designed for modern business interaction.
                        </p>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl w-full">
                            {pricingPlans.map((plan) => (
                                 <div key={plan.name} className={`relative flex flex-col p-8 bg-white border rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.isPopular ? 'border-brand-blue ring-4 ring-brand-blue/10 z-10 scale-105 shadow-xl' : 'border-gray-200 shadow-lg'}`}>
                                    {plan.isPopular && (
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <span className="bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-md">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                        <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{plan.description}</p>
                                    </div>
                                    
                                    <div className="mb-6 pb-6 border-b border-gray-100">
                                        <div className="flex items-baseline">
                                            <span className="text-4xl font-extrabold text-gray-900">R{plan.price}</span>
                                            <span className="text-gray-500 ml-2">/month</span>
                                        </div>
                                        <p className="text-brand-blue font-semibold text-sm mt-2 flex items-center">
                                            <Users className="w-4 h-4 mr-2" />
                                            {plan.extensions}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <Check className="w-5 h-5 text-brand-green mr-3 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Button 
                                        onClick={() => handleSignUpClick(plan)} 
                                        className={`w-full font-bold py-6 ${plan.isPopular ? 'bg-brand-blue hover:bg-blue-800' : 'outline'}`}
                                        variant={plan.isPopular ? 'default' : 'outline'}
                                    >
                                        Select {plan.name}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Out of Bundle Rates Section */}
             <section className="py-20 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Out of Bundle Call Rates</h2>
                        <p className="text-gray-600">Transparent billing for usage beyond your included minutes.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                            <Phone className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Landline to Landline</h3>
                            <p className="text-4xl font-extrabold text-brand-blue">R0.35 <span className="text-sm font-normal text-gray-500">/min</span></p>
                            <p className="text-xs text-gray-400 mt-2">Billed per second</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                            <Smartphone className="w-10 h-10 text-brand-green mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Landline to Mobile</h3>
                            <p className="text-4xl font-extrabold text-brand-green">R0.65 <span className="text-sm font-normal text-gray-500">/min</span></p>
                            <p className="text-xs text-gray-400 mt-2">Billed per second</p>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
            
            {isModalOpen && selectedPlan && (
                <Modal title={`Sign Up for UXC: ${selectedPlan.name} Plan`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
                   <UXCSignUpForm plan={selectedPlan} />
                </Modal>
            )}
        </>
    );
};

export default UXCPBXPage;
