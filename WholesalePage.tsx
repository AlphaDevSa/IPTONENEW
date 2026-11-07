
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, ChevronRight, Phone, Server, Cloud, WhatsAppSolid, Database, Globe, Shield, TrendingUp, Zap, Users, Activity, Lock, ArrowRight } from './components/icons';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Textarea } from './components/Textarea';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { FORMSPREE_ENDPOINT } from './config';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/Card';

interface FormData {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    website: string;
    businessDescription: string;
    monthlyMinutes: string;
}

interface FormErrors {
    companyName?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    businessDescription?: string;
    monthlyMinutes?: string;
    privacy?: string;
}

const WholesalePage: React.FC = () => {
    const navigate = useNavigation();

    const [formData, setFormData] = useState<FormData>({
        companyName: '', contactName: '', email: '', phone: '', website: '', businessDescription: '', monthlyMinutes: ''
    });
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
        if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.businessDescription.trim()) newErrors.businessDescription = "Business description is required.";
        if (!formData.monthlyMinutes) newErrors.monthlyMinutes = "Please select an estimated volume.";
        if (!acceptedPrivacy) newErrors.privacy = "You must accept the privacy policy.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStatus('submitting');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Wholesale Partner Application: ${formData.companyName}`
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleWhatsAppSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const text = `*New Wholesale Partner Application*\n\n` +
            `*Company:* ${formData.companyName}\n` +
            `*Contact:* ${formData.contactName}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Website:* ${formData.website}\n` +
            `*Minutes Volume:* ${formData.monthlyMinutes}\n` +
            `*Description:* ${formData.businessDescription}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const scrollToForm = () => {
        const formElement = document.getElementById('wholesale-application-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const solutions = [
        {
            icon: <Phone className="w-8 h-8 text-white" />,
            title: "Voice Termination",
            desc: "Premium A-Z voice termination with aggressive volume-based tiered pricing. High ASR and CLI routes guaranteed.",
            link: "/partners/wholesale/voice-rates",
            color: "bg-blue-600"
        },
        {
            icon: <Database className="w-8 h-8 text-white" />,
            title: "Billing & Softswitch",
            desc: "A complete white-label billing platform to manage your clients, rates, and invoices automatically.",
            link: "/partners/wholesale/billing-platform",
            color: "bg-purple-600"
        },
        {
            icon: <Cloud className="w-8 h-8 text-white" />,
            title: "Multi-Tenant PBX",
            desc: "Host unlimited tenants on robust platforms like Vodia, VitalPBX, and Bicom under your own brand.",
            link: "#platforms", // Anchor to platforms section
            color: "bg-brand-green"
        }
    ];

    const platforms = [
        { 
            name: "Vodia", 
            icon: <Cloud className="w-10 h-10 text-blue-500" />,
            desc: "The MSP favorite. Cloud-native, multi-tenant PBX with deep Microsoft Teams integration.",
            features: ["Teams Direct Routing", "White Label Ready", "Lightweight & Fast"],
            path: "/partners/wholesale/vodia-multi-tenant",
            borderColor: "border-blue-500",
            bgHover: "group-hover:bg-blue-50"
        },
        { 
            name: "VitalPBX", 
            icon: <Activity className="w-10 h-10 text-red-500" />,
            desc: "Unified Communications powerhouse. Complete with billing, video conferencing, and chat.",
            features: ["Sonata Billing", "Video Conferencing", "Omnichannel Center"],
            path: "/partners/wholesale/vitalpbx-multi-tenant",
            borderColor: "border-red-500",
            bgHover: "group-hover:bg-red-50"
        },
        { 
            name: "Bicom Systems", 
            icon: <Server className="w-10 h-10 text-green-600" />,
            desc: "Enterprise stability. A robust platform with award-winning desktop and mobile apps.",
            features: ["gloCOM Apps", "Call Center Editions", "High Availability"],
            path: "/partners/wholesale/bicom-multi-tenant",
            borderColor: "border-green-500",
            bgHover: "group-hover:bg-green-50"
        }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Scale Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Telecoms Empire</span>
                    </>
                }
                subtitle="Wholesale Voice, aggressive A-Z rates, and white-label infrastructure for high-growth ISPs and Carriers."
                badge={
                    <>
                        <Server className="w-4 h-4" />
                        <span>Wholesale Infrastructure</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Abstract Background */}
                        <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
                        
                        {/* Main Softswitch Card */}
                        <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                                <div className="flex items-center space-x-3">
                                    <Server className="w-5 h-5 text-brand-green" />
                                    <span className="text-sm font-mono text-gray-300">CORE_SWITCH_01</span>
                                </div>
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-mono text-green-500">CONNECTED</span>
                                </div>
                            </div>

                            {/* Traffic Graph Simulation */}
                            <div className="h-24 flex items-end space-x-1 mb-6 border-b border-gray-800 pb-6">
                                {/* Bars */}
                                <div className="w-full bg-blue-900/50 rounded-t h-[30%]"></div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[50%]"></div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[40%]"></div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[70%]"></div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[60%]"></div>
                                <div className="w-full bg-blue-500 rounded-t h-[85%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        Peak
                                    </div>
                                </div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[65%]"></div>
                                <div className="w-full bg-blue-900/50 rounded-t h-[55%]"></div>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Active Calls</p>
                                    <p className="text-2xl font-bold text-white">2,450</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">ASR (Global)</p>
                                    <p className="text-2xl font-bold text-brand-green">68%</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">PDD</p>
                                    <p className="text-2xl font-bold text-white">~450ms</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Routes</p>
                                    <p className="text-2xl font-bold text-blue-400">Premium</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <Shield className="w-5 h-5 text-brand-blue" />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Fraud Guard</p>
                                <p className="text-xs font-bold text-white">Active Protection</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                            <Globe className="w-5 h-5 text-brand-green" />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Termination</p>
                                <p className="text-xs font-bold text-white">Wholesale Voice</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={scrollToForm} className="font-bold shadow-lg shadow-brand-green/20">
                        Open Wholesale Account
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

            {/* Stats Strip */}
            <div className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
                        <div>
                            <p className="text-3xl font-extrabold text-brand-green">100M+</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Minutes Terminated</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-brand-green">99.99%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Core Uptime</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-brand-green">Wholesale</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Voice Rates</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-brand-green">24/7</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">NOC Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Server className="w-4 h-4 mr-2" />
                        Infrastructure as a Service
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Become a Service Provider</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Leverage our state-of-the-art infrastructure to offer high-quality voice and data services to your own clients. Our wholesale platform gives you the tools, reliability, and competitive pricing you need to build a successful communications business without the massive investment in hardware and network management.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={scrollToForm} size="lg" className="font-bold">
                            Apply for Account
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
                            Talk to Wholesale Team
                        </Button>
                    </div>
                </div>
            </section>
            
            {/* Main Solutions Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((sol, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                                <div className={`p-6 ${sol.color} flex justify-center`}>
                                    {sol.icon}
                                </div>
                                <div className="p-8 flex-grow text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {sol.desc}
                                    </p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <Button 
                                        variant="outline" 
                                        className="w-full justify-between group" 
                                        onClick={() => sol.link.startsWith('#') ? document.getElementById(sol.link.substring(1))?.scrollIntoView({behavior: 'smooth'}) : navigate(sol.link)}
                                    >
                                        Explore <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </section>

            {/* PBX Platforms Section */}
            <section id="platforms" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Tenant Cloud PBX Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Scalable, white-label platforms designed for Service Providers to host multiple customers securely.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {platforms.map((platform, idx) => (
                            <div 
                                key={idx} 
                                className={`group bg-white rounded-2xl border-2 hover:border-transparent transition-all duration-300 flex flex-col hover:shadow-2xl overflow-hidden ${platform.borderColor}`}
                            >
                                <div className={`p-8 text-center flex flex-col items-center flex-grow transition-colors ${platform.bgHover}`}>
                                    <div className="bg-white p-4 rounded-full shadow-md mb-6 transform group-hover:scale-110 transition-transform">
                                        {platform.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{platform.desc}</p>
                                    
                                    <ul className="space-y-3 mb-8 w-full text-left bg-white/50 p-4 rounded-xl">
                                        {platform.features.map((feat, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                                    <Button onClick={() => navigate(platform.path)} className="w-full justify-between group">
                                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Wholesale Advantage</h2>
                        <p className="text-gray-400">Everything you need to scale your telecoms business.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">White Label</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your brand, front and center. Our infrastructure is completely invisible to your end-users.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Volume Pricing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Access tiered rate cards. As your minute volume grows, your rates drop, increasing your margin.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-purple-500">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">API Access</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Full API integration for automated provisioning, billing, and management of your customer base.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Application Form */}
            <section id="wholesale-application-form" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
                        {status === 'success' ? (
                            <div className="text-center p-12 bg-green-50 text-green-800 rounded-2xl">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="font-bold text-2xl mb-4">Application Received!</h3>
                                <p className="text-lg">Your partner application has been successfully submitted. Our wholesale team will review your information and contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">Apply for a Wholesale Account</h2>
                                    <p className="text-gray-600 mt-2">Join our network of successful service providers.</p>
                                </div>
                                
                                {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-4 rounded-lg">Something went wrong. Please try again or contact us directly.</p>}
                                
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <Input id="companyName" value={formData.companyName} onChange={handleChange} className={errors.companyName ? 'border-red-500' : ''} />
                                        {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="contactName">Contact Name</Label>
                                        <Input id="contactName" value={formData.contactName} onChange={handleChange} className={errors.contactName ? 'border-red-500' : ''} />
                                        {errors.contactName && <p className="text-red-600 text-sm mt-1">{errors.contactName}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} />
                                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} />
                                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="website">Website URL (Optional)</Label>
                                    <Input id="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                                </div>
                                
                                <div>
                                    <Label htmlFor="monthlyMinutes">Estimated Monthly Voice Minutes</Label>
                                    <select id="monthlyMinutes" value={formData.monthlyMinutes} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.monthlyMinutes ? 'border-red-500' : 'border-gray-300'}`}>
                                        <option value="">Please select range...</option>
                                        <option value="0-50k">0 - 50,000</option>
                                        <option value="50k-250k">50,001 - 250,000</option>
                                        <option value="250k-1m">250,001 - 1,000,000</option>
                                        <option value="1m+">1,000,000+</option>
                                    </select>
                                    {errors.monthlyMinutes && <p className="text-red-600 text-sm mt-1">{errors.monthlyMinutes}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="businessDescription">Business Description</Label>
                                    <Textarea id="businessDescription" placeholder="Briefly describe your business model and requirements..." value={formData.businessDescription} onChange={handleChange} rows={4} className={errors.businessDescription ? 'border-red-500' : ''} />
                                    {errors.businessDescription && <p className="text-red-600 text-sm mt-1">{errors.businessDescription}</p>}
                                </div>

                                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        checked={acceptedPrivacy}
                                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">
                                        I confirm that I represent a valid business entity and accept the <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a>.
                                    </label>
                                </div>
                                {errors.privacy && <p className="text-red-600 text-sm">{errors.privacy}</p>}

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button type="submit" size="lg" className="w-full font-bold shadow-lg" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
                                    </Button>
                                    <Button 
                                        type="button" 
                                        onClick={handleWhatsAppSubmit} 
                                        size="lg" 
                                        className="w-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent shadow-lg"
                                    >
                                        <WhatsAppSolid className="w-5 h-5 mr-2" />
                                        WhatsApp
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            
            <CtaSection />
        </>
    );
};

export default WholesalePage;
