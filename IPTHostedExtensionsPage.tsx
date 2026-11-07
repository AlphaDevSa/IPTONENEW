
import React, { useState } from 'react';
import Hero from './components/Hero';
import { Phone, Smartphone, CheckCircle, Zap, Users, Server, Globe, Shield, Monitor, TrendingUp } from './components/icons';
import CtaSection from './components/CtaSection';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/Card';
import { Button } from './components/Button';
import Modal from './Modal';
import { IPTHostedExtensionsSignUpForm } from './IPTHostedExtensionsSignUpForm';
import { useNavigation } from './NavigationContext';

interface Package {
    id: number;
    name: string;
    extensions: number;
    basePrice: number;
    finalPrice: string; // Calculated: Base * 1.15 (Markup) * 1.15 (VAT)
    isPopular?: boolean;
}

// Helper to calculate price: Base * 1.15 (Markup) * 1.15 (VAT) = Base * 1.3225
// Rounded up to the nearest 10
const calculatePrice = (base: number) => {
    const markup = 1.15;
    const vat = 1.15;
    const total = base * markup * vat;
    return `R${Math.ceil(total / 10) * 10}`;
};

const packages: Package[] = [
    { id: 1, name: "Hosted PBX 1", extensions: 1, basePrice: 80, finalPrice: calculatePrice(80) },
    { id: 2, name: "Hosted PBX 2", extensions: 2, basePrice: 160, finalPrice: calculatePrice(160) },
    { id: 3, name: "Hosted PBX 3", extensions: 3, basePrice: 240, finalPrice: calculatePrice(240) },
    { id: 5, name: "Hosted PBX 5", extensions: 5, basePrice: 360, finalPrice: calculatePrice(360), isPopular: true },
    { id: 10, name: "Hosted PBX 10", extensions: 10, basePrice: 480, finalPrice: calculatePrice(480), isPopular: true },
    { id: 20, name: "Hosted PBX 20", extensions: 20, basePrice: 960, finalPrice: calculatePrice(960), isPopular: true },
    { id: 30, name: "Hosted PBX 30", extensions: 30, basePrice: 1440, finalPrice: calculatePrice(1440) },
    { id: 40, name: "Hosted PBX 40", extensions: 40, basePrice: 1920, finalPrice: calculatePrice(1920) },
    { id: 50, name: "Hosted PBX 50", extensions: 50, basePrice: 2400, finalPrice: calculatePrice(2400) },
    { id: 100, name: "Hosted PBX 100", extensions: 100, basePrice: 4000, finalPrice: calculatePrice(4000) },
    { id: 125, name: "Hosted PBX 125", extensions: 125, basePrice: 4825, finalPrice: calculatePrice(4825) },
    { id: 150, name: "Hosted PBX 150", extensions: 150, basePrice: 5700, finalPrice: calculatePrice(5700) },
    { id: 175, name: "Hosted PBX 175", extensions: 175, basePrice: 6475, finalPrice: calculatePrice(6475) },
    { id: 200, name: "Hosted PBX 200", extensions: 200, basePrice: 7200, finalPrice: calculatePrice(7200) },
    { id: 300, name: "Hosted PBX 300", extensions: 300, basePrice: 9600, finalPrice: calculatePrice(9600) },
    { id: 400, name: "Hosted PBX 400", extensions: 400, basePrice: 12000, finalPrice: calculatePrice(12000) },
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

const IPTHostedExtensionsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const navigate = useNavigation();

    const handleOrder = (pkg: Package) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const features = [
        { icon: <Smartphone className="w-6 h-6 text-brand-blue" />, title: "Mobile App Included", desc: "Turn your smartphone into your office extension." },
        { icon: <Monitor className="w-6 h-6 text-brand-blue" />, title: "Self-Service Portal", desc: "Manage extensions, view logs, and listen to recordings online." },
        { icon: <Server className="w-6 h-6 text-brand-blue" />, title: "Call Recording", desc: "Automatic recording on all extensions for compliance." },
        { icon: <Shield className="w-6 h-6 text-brand-blue" />, title: "Secure Voice", desc: "Encrypted calls to ensure your privacy." },
        { icon: <Zap className="w-6 h-6 text-brand-blue" />, title: "Instant Setup", desc: "Extensions are provisioned instantly upon approval." },
        { icon: <Globe className="w-6 h-6 text-brand-blue" />, title: "Work Anywhere", desc: "Plug in your IP phone anywhere with internet." }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Business Voice, <span className="text-brand-green">Perfectly Scaled</span>
                    </>
                }
                subtitle="Stop paying for capacity you don't use. Our Hosted Extension packages allow you to add or remove users instantly, ensuring you only pay for what your business needs today."
                badge={
                    <>
                        <Users className="w-4 h-4" />
                        <span>Scalable Cloud Voice</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>

                        {/* Central Core */}
                        <div className="relative z-10 w-32 h-32 bg-gray-900 rounded-full border-4 border-gray-800 flex items-center justify-center shadow-2xl">
                            <Server className="w-12 h-12 text-brand-blue" />
                            <div className="absolute -bottom-3 px-3 py-1 bg-gray-800 rounded-full border border-gray-700 text-[10px] font-bold text-white tracking-widest">CLOUD PBX</div>
                        </div>

                        {/* Orbital Ring */}
                        <div className="absolute w-[280px] h-[280px] border border-dashed border-gray-700/50 rounded-full animate-[spin_60s_linear_infinite]"></div>

                        {/* Floating Extensions */}
                        {/* Ext 1 */}
                        <div className="absolute top-0 right-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-slow w-40 transform hover:scale-105 transition-transform">
                            <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Ext 101</p>
                                <p className="text-[10px] text-gray-500">Sales • Active</p>
                            </div>
                        </div>

                        {/* Ext 2 */}
                        <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-reverse w-40 transform hover:scale-105 transition-transform">
                            <div className="bg-blue-100 p-2 rounded-lg text-brand-blue">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Ext 105</p>
                                <p className="text-[10px] text-gray-500">Mobile • Remote</p>
                            </div>
                        </div>

                        {/* Ext 3 */}
                        <div className="absolute bottom-10 right-0 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow w-40 transform hover:scale-105 transition-transform">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                <Monitor className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Ext 108</p>
                                <p className="text-[10px] text-gray-500">Support • Active</p>
                            </div>
                        </div>

                        {/* Cost Efficiency Badge */}
                        <div className="absolute -top-4 left-4 bg-brand-green text-gray-900 px-3 py-1.5 rounded-full shadow-lg font-bold text-xs flex items-center border border-white/20 transform -rotate-6">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Pay Per User
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        View Pricing
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => navigate('/contact')} 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        Contact Sales
                    </Button>
                </div>
            </Hero>

            {/* Value Prop */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-green bg-green-50 mb-6 border border-green-100">
                                <Users className="w-4 h-4 mr-2" />
                                Scalable Architecture
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hosted Extensions?</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Traditional phone systems require buying a box with a fixed capacity. If you grew, you had to buy a bigger box.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                With IPT Hosted Extensions, the "box" is in the cloud. You simply subscribe to the number of extensions you need today. Adding a new employee? Upgrade your plan instantly. It's the most cost-effective way to manage business telephony.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                    <span className="font-medium text-gray-700">No hardware maintenance costs</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                    <span className="font-medium text-gray-700">Free inter-branch calling</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                    <span className="font-medium text-gray-700">Enterprise features included</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feat, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-white p-3 rounded-xl w-fit mb-4 shadow-sm">
                                        {feat.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{feat.title}</h3>
                                    <p className="text-xs text-gray-500">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Grid */}
            <section id="pricing" className="py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Package Pricing</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Select the tier that matches your workforce size. Prices include system access, management portal, and support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className={`flex flex-col h-full bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.isPopular ? 'border-brand-blue ring-1 ring-brand-blue shadow-lg relative overflow-hidden' : 'border-gray-200'}`}>
                                {pkg.isPopular && (
                                    <div className="bg-brand-blue text-white text-xs font-bold px-3 py-1 text-center uppercase tracking-wider w-full">
                                        Popular Choice
                                    </div>
                                )}
                                <div className="p-6 flex-grow flex flex-col items-center text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                    <div className="my-4">
                                        <span className="text-4xl font-extrabold text-gray-900">{pkg.finalPrice}</span>
                                        <span className="text-gray-500 text-sm block mt-1">per month</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 text-brand-blue bg-blue-50 px-4 py-2 rounded-full mb-6 w-full font-medium text-sm">
                                        <Users className="w-4 h-4" />
                                        <span>{pkg.extensions} Extension{pkg.extensions > 1 ? 's' : ''}</span>
                                    </div>
                                    
                                    <ul className="text-sm text-gray-500 space-y-2 mb-6 w-full text-left pl-4">
                                        <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2"/> Full PBX Features</li>
                                        <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2"/> Mobile App Access</li>
                                        <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2"/> Online Portal</li>
                                    </ul>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <Button onClick={() => handleOrder(pkg)} className={`w-full font-semibold ${pkg.isPopular ? 'bg-brand-blue hover:bg-blue-800' : 'bg-white text-brand-blue border border-brand-blue hover:bg-blue-50'}`}>
                                        Select Plan
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minute Bundles Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard Minute Bundle Packages</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Add a predictable outbound calling bundle to manage your monthly spend while keeping your team connected.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {minuteBundles.map((bundle) => (
                            <div key={bundle.name} className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-brand-blue hover:shadow-md transition-all">
                                <p className="font-bold text-gray-700 mb-1 capitalize">{bundle.name}</p>
                                <p className="text-2xl font-extrabold text-brand-blue">{bundle.price}</p>
                                <p className="text-xs text-gray-400 mt-1">per month</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        *Minutes include South African landline and mobile calling. Bundle pricing is designed for predictable monthly voice usage.
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Need Custom Configuration?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        If your requirements fall outside these standard packages, or if you need a specialized enterprise setup with over 400 extensions, our team is ready to build a bespoke solution for you.
                    </p>
                    <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-brand-blue hover:bg-gray-100 font-bold px-8">
                        Contact Sales Team
                    </Button>
                </div>
            </section>

            <CtaSection />

            {isModalOpen && selectedPackage && (
                <Modal 
                    title={`Order ${selectedPackage.name}`} 
                    onClose={() => setIsModalOpen(false)} 
                    maxWidth="max-w-4xl"
                >
                    <IPTHostedExtensionsSignUpForm plan={{
                        name: selectedPackage.name,
                        price: selectedPackage.finalPrice,
                        extensions: selectedPackage.extensions
                    }} />
                </Modal>
            )}
        </>
    );
};

export default IPTHostedExtensionsPage;
