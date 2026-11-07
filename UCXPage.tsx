
import React, { useState } from 'react';
import Hero from './components/Hero';
import { 
    CheckCircle, Check, Phone, Cloud, Settings, Voicemail, Shield, Users, 
    Bot, Database, GitBranch, Zap, Monitor, Smartphone, Activity, ArrowRight,
    Clock, Mail, Server, MessageSquare, Headset, RefreshCw, Globe
} from './components/icons';
import Modal from './Modal';
import UCXSignUpForm from './UCXSignUpForm';
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
        name: "Per User / Per Seat",
        price: "79",
        description: "Complete unified communications solution with included minutes.",
        extensions: "Per User",
        features: [
            "Call Recording",
            "IVR Management",
            "Call Management",
            "Virtual Assistants",
            "Local Landline to Landline",
            "Local Landline to Mobile",
            "International call excluded."
        ],
        isPopular: true
    }
];

const minuteBundles = [
    { name: "250 minutes", price: "R99" },
    { name: "500 minutes", price: "R199" },
    { name: "750 minutes", price: "R289" },
    { name: "1000 minutes", price: "R395" },
    { name: "2000 minutes", price: "R790" },
    { name: "2500 minutes", price: "R980" },
    { name: "5000 minutes", price: "R1750" },
    { name: "10 000 minutes", price: "R2950" },
];

const UCXPage: React.FC = () => {
    const navigate = useNavigation();

    // Detailed feature data with specific icons
    const featuresData = {
        call: [
            { title: "Call Forwarding", icon: <ArrowRight className="w-5 h-5 text-blue-500" /> },
            { title: "Call Recording", icon: <Database className="w-5 h-5 text-red-500" /> },
            { title: "Call Transfer", icon: <Phone className="w-5 h-5 text-green-500" /> },
            { title: "Call Waiting", icon: <Clock className="w-5 h-5 text-orange-500" /> },
            { title: "Three-Way Calling", icon: <Users className="w-5 h-5 text-purple-500" /> },
            { title: "Caller ID", icon: <CheckCircle className="w-5 h-5 text-teal-500" /> },
            { title: "Call Logs", icon: <Activity className="w-5 h-5 text-indigo-500" /> },
            { title: "Call Hold", icon: <Phone className="w-5 h-5 text-gray-500" /> },
            { title: "Advanced Flow", icon: <GitBranch className="w-5 h-5 text-pink-500" /> },
        ],
        voicemail: [
            { title: "Voicemail to Email", icon: <Mail className="w-5 h-5 text-blue-500" /> },
            { title: "Visual Voicemail", icon: <Voicemail className="w-5 h-5 text-purple-500" /> },
            { title: "Password Protection", icon: <Shield className="w-5 h-5 text-green-500" /> },
            { title: "Custom Greetings", icon: <MessageSquare className="w-5 h-5 text-orange-500" /> },
            { title: "Multiple Mailboxes", icon: <Server className="w-5 h-5 text-red-500" /> },
        ],
        advanced: [
            { title: "Digital Receptionist", icon: <Bot className="w-5 h-5 text-indigo-500" /> },
            { title: "Real Time Reports", icon: <Activity className="w-5 h-5 text-green-500" /> },
            { title: "Time Conditions", icon: <Clock className="w-5 h-5 text-blue-500" /> },
            { title: "Do Not Disturb", icon: <Shield className="w-5 h-5 text-red-500" /> },
            { title: "Ring Groups", icon: <Users className="w-5 h-5 text-orange-500" /> },
            { title: "Music on Hold", icon: <Headset className="w-5 h-5 text-purple-500" /> },
            { title: "Follow Me", icon: <Smartphone className="w-5 h-5 text-teal-500" /> },
            { title: "Number Porting", icon: <RefreshCw className="w-5 h-5 text-pink-500" /> },
        ]
    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [activeTab, setActiveTab] = useState<'call' | 'voicemail' | 'advanced'>('call');

    const featureTabs = [
        { id: 'call', name: 'Call Control', icon: <Phone className="w-4 h-4 mr-2" /> },
        { id: 'voicemail', name: 'Voicemail', icon: <Voicemail className="w-4 h-4 mr-2" /> },
        { id: 'advanced', name: 'Advanced Tools', icon: <Settings className="w-4 h-4 mr-2" /> },
    ];

    const handleSignUpClick = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const highlights = [
        "Voice, video, messaging & presence in one platform",
        "Advanced call logging & cloud-based TMS",
        "Built-in video calls & real-time chat",
        "Real-time analytics & performance insights",
        "Secure tools for hybrid & remote teams",
        "Scales easily from small teams to enterprises"
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        UCX Hosted <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">PBX.</span>
                    </>
                }
                subtitle="Unified Customer Experience. A powerful, all-in-one cloud communication platform designed for modern business interaction."
                badge={
                    <>
                        <Zap className="w-4 h-4" />
                        <span>Next Gen CX</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                        {/* Core Glow */}
                        <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[100px] -z-10"></div>
                        
                        {/* Central Cloud Node */}
                        <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl w-48 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,83,155,0.6)] animate-pulse">
                                <Activity className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white font-bold mb-1">UCX Core</h3>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-400">System Online</span>
                            </div>
                        </div>

                        {/* Orbiting Devices */}
                        <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-slow">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Smartphone className="w-5 h-5 text-brand-blue" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Mobile App</p>
                                <p className="text-[10px] text-gray-500">Connected</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-reverse">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                <Monitor className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Desktop</p>
                                <p className="text-[10px] text-gray-500">Active</p>
                            </div>
                        </div>

                        <div className="absolute top-20 left-[-20px] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-bounce-slow">
                            <div className="bg-orange-100 p-2 rounded-lg">
                                <Phone className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Desk Phone</p>
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

            {/* About UCX XCaaS Section */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About UCX XCaaS</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        UCX is transforming the future of business communications as a leading Software-as-a-Service provider of UCX XCaaS, an integrated contact center, voice communications, video, chat and API solution built on one global cloud communications platform.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        UCX is powering all employees globally to connect individuals and teams so they can collaborate faster and work smarter. Real-time business analytics and intelligence provide businesses unique insights across all interactions and channels so they can delight end-customers and accelerate their business.
                    </p>
                </div>
            </section>

            {/* UCX Cloud Bundle Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                            <Cloud className="w-4 h-4 mr-2" />
                            Unified Cloud Communications
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">UCX Cloud Bundle</h2>
                        
                        <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
                            <p className="mb-6">
                                The UCX Cloud Bundle is a fully integrated cloud communications solution that combines voice, video, messaging, and presence on a single secure platform.
                            </p>
                            <p className="mb-6">
                                Includes all the core UC features your business needs, plus advanced call logging, cloud-based telephony management, and real-time analytics. Designed for hybrid and remote teams, UCX Cloud supports built-in video calls, instant chat, and smart tools for performance tracking.
                            </p>
                            <p>
                                Scalable from small teams to enterprise deployments, it’s built to support how modern businesses connect and grow.
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
            
            {/* Interactive Features Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature-Packed Platform</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need in a modern phone system.</p>
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
                            Scalable packages designed to grow with your business.
                        </p>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 gap-8 items-start max-w-lg w-full">
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
            
             {/* Bundles Section */}
             <section className="py-20 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Outbound Minute Bundles</h2>
                            <p className="text-gray-600">Add a predictable voice bundle to control your monthly spend.</p>
                        </div>
                        <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm text-gray-600">
                            <span className="font-bold text-brand-blue">Note:</span> International calls billed separately.
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {minuteBundles.map(bundle => (
                            <div key={bundle.name} className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-brand-blue hover:shadow-md transition-all">
                                <p className="font-bold text-gray-700 mb-1">{bundle.name}</p>
                                <p className="text-2xl font-extrabold text-brand-blue">{bundle.price}</p>
                                <p className="text-xs text-gray-400 mt-1">per month</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
            
            {isModalOpen && selectedPlan && (
                <Modal title={`Sign Up for UCX: ${selectedPlan.name} Plan`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
                   <UCXSignUpForm plan={selectedPlan} />
                </Modal>
            )}
        </>
    );
};

export default UCXPage;
