
import React, { useState } from 'react';
import Hero from './components/Hero';
import { 
    CheckCircle, Check, Phone, Cloud, Settings, Voicemail, Shield, Users, 
    Bot, Database, GitBranch, Zap, Monitor, Smartphone 
} from './components/icons';
import Modal from './Modal';
import VPBXSignUpForm from './VPBXSignUpForm';
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
        name: "Starter",
        price: "199",
        description: "Perfect for new businesses and solo entrepreneurs.",
        extensions: "Up to 2 Extensions",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"]
    },
    {
        name: "Basic",
        price: "449",
        description: "Great for startups and small teams.",
        extensions: "Up to 5 Extensions",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"]
    },
    {
        name: "Regular",
        price: "759",
        description: "Ideal for growing businesses needing flexibility.",
        extensions: "Up to 10 Extensions",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"]
    },
    {
        name: "Classic",
        price: "1 099",
        description: "Our most popular plan for established teams.",
        extensions: "Up to 15 Extensions",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"],
        isPopular: true
    },
    {
        name: "Deluxe",
        price: "1 289",
        description: "Suits businesses with higher call volumes.",
        extensions: "Up to 20 Extensions",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"]
    },
    {
        name: "Premium",
        price: "65",
        description: "The ultimate solution for larger organizations.",
        extensions: "21+ Extensions (Per User)",
        features: ["Call Recording", "IVR Management", "Call Management", "Virtual Assistants"]
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

const VPBXPage: React.FC = () => {
    const navigate = useNavigation();
    const keyBenefits = [
        {
            icon: <Settings className="w-6 h-6 text-brand-blue" />,
            title: "Simple Management",
            description: "A user-friendly web interface that puts you in control. No IT degree required."
        },
        {
            icon: <Cloud className="w-6 h-6 text-brand-blue" />,
            title: "Cloud Powered",
            description: "No expensive hardware to buy or maintain. Everything runs securely in the cloud."
        },
        {
            icon: <Shield className="w-6 h-6 text-brand-blue" />,
            title: "Business Continuity",
            description: "Never miss a call with automatic failover to mobile or voicemail-to-email."
        }
    ];

    const vpbxFeaturesList = [
        {
            title: "Auto Attendant",
            description: "Auto Attendant allows callers to be automatically transferred to an extension without the intervention of a receptionist.",
            icon: <Bot />
        },
        {
            title: "Call Recording",
            description: "Call Recordings are stored for seven days. CallVault can be activated if an extended period is required.",
            icon: <Database />
        },
        {
            title: "Multi-Level IVR Menu Management",
            description: "Multi-Level IVR Menu Management assists customers who dial in using a preconfigured recording to guide and provide a more efficient way to respond to customers.",
            icon: <GitBranch />
        },
        {
            title: "Easy Number Porting",
            description: "Automated access to number porting via the user interface.",
            icon: <Phone />
        }
    ];

    const callFeatures = [
        "Call Forwarding", "Call Hold", "Call Recording", "Call Transfer", 
        "Advanced Call Flow", "Call Waiting", "Call Logs", "Three-Way Calling", "Caller ID"
    ];

    const voicemailFeatures = [
        "Voicemail to Email", "Visual Voicemail", "Password Protection", 
        "Custom Greetings", "Multiple Mailboxes"
    ];

    const additionalFeatures = [
        "Digital Receptionist (IVR)", "Real Time Reports", "Time Conditions",
        "Do Not Disturb", "Ring Groups", "Hunt Lists", "Music on Hold",
        "Follow Me", "Day/Night Mode", "Easy Number Porting"
    ];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [activeTab, setActiveTab] = useState('call');

    const featureTabs = [
        { id: 'call', name: 'Call Control', features: callFeatures, icon: <Phone className="w-4 h-4 mr-2" /> },
        { id: 'voicemail', name: 'Voicemail', features: voicemailFeatures, icon: <Voicemail className="w-4 h-4 mr-2" /> },
        { id: 'additional', name: 'Advanced Tools', features: additionalFeatures, icon: <Settings className="w-4 h-4 mr-2" /> },
    ];

    const handleSignUpClick = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <>
            <Hero
                title={
                    <>
                        Big Business Voice. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Small Business Price.</span>
                    </>
                }
                subtitle="The plug-and-play cloud phone system that turns any device into a professional office extension. Setup in minutes, scale instantly."
                badge={
                    <>
                        <Zap className="w-4 h-4" />
                        <span>Instant Setup</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                        {/* Core Glow */}
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[100px] -z-10"></div>
                        
                        {/* Central Cloud Node */}
                        <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl w-48 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,83,155,0.6)] animate-pulse">
                                <Cloud className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white font-bold mb-1">vPBX Cloud</h3>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-400">System Online</span>
                            </div>
                        </div>

                        {/* Orbiting Devices */}
                        {/* Mobile App */}
                        <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-slow">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Smartphone className="w-5 h-5 text-brand-blue" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Mobile App</p>
                                <p className="text-[10px] text-gray-500">Connected</p>
                            </div>
                        </div>

                        {/* Softphone */}
                        <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-float-reverse">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                <Monitor className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Softphone</p>
                                <p className="text-[10px] text-gray-500">Active</p>
                            </div>
                        </div>

                        {/* Desk Phone */}
                        <div className="absolute top-20 left-[-20px] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-bounce-slow">
                            <div className="bg-orange-100 p-2 rounded-lg">
                                <Phone className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Desk Phone</p>
                                <p className="text-[10px] text-gray-500">Registered</p>
                            </div>
                        </div>

                        {/* Connection Lines (Simulated with absolute divs - purely decorative) */}
                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-gray-700 to-transparent -translate-x-full -translate-y-1/2 -z-10 rotate-[135deg] opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-gray-700 to-transparent -translate-y-1/2 -z-10 rotate-[-45deg] opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-gray-700 to-transparent -translate-x-1/2 -translate-y-full -z-10 rotate-[-120deg] opacity-50"></div>

                        {/* Incoming Call Badge */}
                        <div className="absolute -bottom-4 right-10 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center text-sm font-bold animate-bounce border border-white/20">
                            <Phone className="w-4 h-4 mr-2" />
                            Incoming Call...
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

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <img
                            src="/images/vpbx.png"
                            alt="vPBX Cloud PBX Logo – IPT One"
                            loading="lazy"
                            className="mx-auto h-12 md:h-16 w-auto object-contain mb-6"
                        />
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                            <Users className="w-4 h-4 mr-2" />
                            Built for SMEs
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Professionalize Your Communications
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Stop using your personal cell phone for business. vPBX gives you a professional landline number, auto-attendants, and call routing capabilities that make you look like a Fortune 500 company.
                        </p>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            Whether you are a team of 2 or 20, our platform scales effortlessly. Add extensions in seconds and manage everything from a simple web portal.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {keyBenefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-white p-4 rounded-xl mb-4 shadow-sm text-brand-blue border border-gray-100">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h4>
                                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* VPBX Features Section */}
            <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">VPBX Features</h2>
                        <p className="text-lg text-gray-600">Enterprise capabilities, simplified for you.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {vpbxFeaturesList.map((feat, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-blue-50 p-4 rounded-2xl mr-6 flex-shrink-0 mb-4 sm:mb-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(feat.icon as React.ReactElement<any>, { className: "w-8 h-8 text-brand-blue group-hover:text-white transition-colors" })}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{feat.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Interactive Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature-Packed Platform</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore the tools available to manage your business calls effectively.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="flex flex-wrap border-b border-gray-100">
                            {featureTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-4 px-6 text-sm sm:text-base font-semibold transition-all flex items-center justify-center ${
                                        activeTab === tab.id
                                            ? 'bg-brand-blue text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                        <div className="p-8 sm:p-12 bg-white">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featureTabs.find(tab => tab.id === activeTab)?.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="bg-white p-1 rounded-full shadow-sm mr-3">
                                            <CheckCircle className="w-4 h-4 text-brand-green" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
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
                            Scalable packages designed to grow with your business. No hidden license fees.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
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
                                        <span className="text-gray-500 ml-2">{plan.name === 'Premium' ? '/month /ext' : '/month'}</span>
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
                                    className={`w-full font-bold py-6 ${plan.isPopular ? 'bg-brand-blue hover:bg-blue-800' : ''}`}
                                    variant={plan.isPopular ? 'default' : 'outline'}
                                >
                                    Select {plan.name}
                                </Button>
                            </div>
                        ))}
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
                <Modal title={`Sign Up for vPBX: ${selectedPlan.name} Plan`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
                   <VPBXSignUpForm plan={selectedPlan} />
                </Modal>
            )}
        </>
    );
};

export default VPBXPage;
