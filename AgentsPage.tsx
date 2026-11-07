
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, WhatsAppSolid, Users, TrendingUp, Shield, Zap, Building, ArrowRight, MessageSquare, Check, Briefcase, DollarSign } from './components/icons';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Textarea } from './components/Textarea';
import { FORMSPREE_ENDPOINT } from './config';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { useNavigation } from './NavigationContext';
import { getAffiliateTrackingFields, saveAffiliateLead } from './affiliateTracking';

interface FormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    city: string;
    province: string;
    about: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    province?: string;
    about?: string;
    privacy?: string;
}

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

const AgentsPage: React.FC = () => {
    const navigate = useNavigation();
    const [formData, setFormData] = useState<FormData>({ name: '', company: '', email: '', phone: '', city: '', province: '', about: '' });
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Your name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.city.trim()) newErrors.city = "City/Town is required.";
        if (!formData.province) newErrors.province = "Please select a province.";
        if (!formData.about.trim()) newErrors.about = "Please tell us a bit about your business.";
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
        const affiliateMeta = getAffiliateTrackingFields();

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    ...affiliateMeta,
                    _subject: `New Agent Program Application: ${formData.company || formData.name}`,
                }),
            });
            if (response.ok) {
                saveAffiliateLead({
                    type: 'agent',
                    source: affiliateMeta.affiliate_source || 'direct',
                    ref: affiliateMeta.affiliate_ref || undefined,
                    affiliate: affiliateMeta.affiliate_ref || undefined,
                    campaign: affiliateMeta.affiliate_campaign || undefined,
                    page: window.location.pathname,
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    timestamp: Date.now(),
                });
                setStatus('success');
            } else { throw new Error('Form submission failed'); }
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

        const text = `*New Agent Program Application*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*City:* ${formData.city}\n` +
            `*Province:* ${formData.province}\n` +
            `*About:* ${formData.about}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({...prev, [id]: undefined}));
        }
    };

    const steps = [
        {
            title: "1. You Refer",
            desc: "Spot an opportunity? Introduce us to a business that needs VoIP, Fibre, or Cloud solutions.",
            icon: <Users className="w-8 h-8 text-white" />,
            bg: "bg-blue-500"
        },
        {
            title: "2. We Close",
            desc: "Our expert sales team handles the consultation, quoting, closing, and onboarding process.",
            icon: <CheckCircle className="w-8 h-8 text-white" />,
            bg: "bg-brand-green"
        },
        {
            title: "3. You Earn",
            desc: "Once the client pays, you get paid. Earn a recurring percentage every single month.",
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            bg: "bg-gray-900"
        }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Turn Your Network Into <span className="text-brand-green">Net Worth</span>
                    </>
                }
                subtitle="Join the IPT One Agent Program. Earn recurring monthly commissions by referring clients to South Africa's most reliable telecoms provider."
                badge={
                    <>
                        <Briefcase className="w-4 h-4" />
                        <span>Partner Program</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Main Dashboard Card */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Estimated Payout</p>
                                    <h3 className="text-3xl font-bold text-white mt-1">R 12,450.00</h3>
                                </div>
                                <div className="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                                    <TrendingUp className="w-6 h-6 text-green-500" />
                                </div>
                            </div>

                            {/* Recent Referrals List */}
                            <div className="space-y-3">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Recent Activity</p>
                                
                                <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-brand-blue/20 p-2 rounded-lg">
                                            <Users className="w-4 h-4 text-brand-blue" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-200">Legal Firm A</p>
                                            <p className="text-xs text-gray-400">Hosted PBX (10 Ext)</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded">+ R850 pm</span>
                                </div>

                                <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-purple-500/20 p-2 rounded-lg">
                                            <Zap className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-200">Design Studio</p>
                                            <p className="text-xs text-gray-400">100Mbps Fibre</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded">+ R450 pm</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
                                <span className="text-xs text-gray-400">Next Payout</span>
                                <span className="text-xs font-mono text-white bg-gray-900 border border-gray-600 px-2 py-1 rounded">25th of Month</span>
                            </div>
                        </div>

                        {/* Floating Element 1 */}
                        <div className="absolute -top-6 -right-6 z-30 bg-brand-green text-gray-900 p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce-slow border border-white/20">
                            <DollarSign className="w-6 h-6" />
                            <div>
                                <p className="text-xs font-bold uppercase opacity-80">Commission</p>
                                <p className="text-sm font-bold">Recurring</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        Join Program
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                        onClick={() => navigate('/contact')}
                    >
                        Email Partner Manager
                    </Button>
                </div>
            </Hero>

            {/* How it works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Process, Serious Revenue</h2>
                        <p className="text-lg text-gray-600">
                            We've stripped away the complexity. You don't need to be a telecoms expert to succeed as an IPT One Agent.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-xl ${step.bg} transform transition-transform group-hover:scale-110 duration-300`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                                <Shield className="w-4 h-4 mr-2" />
                                Risk-Free Partnership
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with IPT One?</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We treat our agents as an extension of our team. We provide the tools, reliability, and support you need to confidently recommend us to your most valued clients.
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                        <Check className="w-4 h-4 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Passive Income Stream</h4>
                                        <p className="text-sm text-gray-600">Build a compounding revenue stream that pays you month after month.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                        <Check className="w-4 h-4 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">No Administrative Burden</h4>
                                        <p className="text-sm text-gray-600">We handle billing, technical support, and installations. You just refer.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                        <Check className="w-4 h-4 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Broad Product Portfolio</h4>
                                        <p className="text-sm text-gray-600">From Hosted PBX to Fiber and 5G, we have solutions for every client.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-6 text-xl">Perfect for:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-default">
                                    <Zap className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                                    <span className="font-medium text-gray-700">IT Consultants</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-default">
                                    <Building className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                                    <span className="font-medium text-gray-700">Property Managers</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-default">
                                    <Users className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                                    <span className="font-medium text-gray-700">Cabling Installers</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-default">
                                    <Briefcase className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                                    <span className="font-medium text-gray-700">Business Coaches</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-20 bg-brand-blue text-white" id="apply">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">Join the Program</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Ready to start earning? Complete the application form. It takes less than 2 minutes. There are no joining fees and no minimum commitments.
                            </p>
                            <div className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700">
                                <div className="flex items-center mb-4">
                                    <MessageSquare className="w-6 h-6 text-brand-green mr-3" />
                                    <span className="font-bold text-lg">Have questions first?</span>
                                </div>
                                <p className="text-blue-200 mb-4">
                                    Our partner manager is available to discuss commission structures and SLAs.
                                </p>
                                <Button 
                                    variant="outline" 
                                    className="border-white text-white hover:bg-white hover:text-brand-blue"
                                    onClick={() => navigate('/contact')}
                                >
                                    Email Partner Team
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white text-gray-900 p-8 sm:p-10 rounded-3xl shadow-2xl">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-2xl mb-4">Application Received!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Thank you for your interest. Our partner team will review your details and contact you within 24 hours to onboard you.
                                    </p>
                                    <Button onClick={() => window.location.reload()} variant="outline">
                                        Submit Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    <h3 className="text-2xl font-bold mb-6">Agent Application</h3>
                                    {status === 'error' && <p className="text-red-600 bg-red-50 p-3 rounded-lg text-sm">Something went wrong. Please try again.</p>}
                                    
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
                                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="company">Company (Optional)</Label>
                                            <Input id="company" value={formData.company} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} />
                                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} />
                                            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" value={formData.city} onChange={handleChange} className={errors.city ? 'border-red-500' : ''} />
                                            {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="province">Province</Label>
                                        <select id="province" value={formData.province} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.province ? 'border-red-500' : 'border-gray-300'}`}>
                                            <option value="">Select a Province...</option>
                                            {southAfricanProvinces.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                                        </select>
                                        {errors.province && <p className="text-red-600 text-xs mt-1">{errors.province}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="about">How do you plan to refer clients?</Label>
                                        <Textarea id="about" placeholder="e.g. I have existing IT clients..." value={formData.about} onChange={handleChange} className={errors.about ? 'border-red-500' : ''} />
                                        {errors.about && <p className="text-red-600 text-xs mt-1">{errors.about}</p>}
                                    </div>

                                    <div className="flex items-start space-x-2 pt-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            checked={acceptedPrivacy}
                                            onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                                        />
                                        <label htmlFor="privacy" className="text-xs text-gray-500">
                                            I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>
                                    {errors.privacy && <p className="text-red-600 text-xs">{errors.privacy}</p>}

                                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <Button type="submit" className="w-full flex-1 font-bold" disabled={status === 'submitting'}>
                                            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                        </Button>
                                        <Button 
                                            type="button" 
                                            onClick={handleWhatsAppSubmit} 
                                            className="w-full sm:flex-1 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                                        >
                                            <WhatsAppSolid className="w-5 h-5 mr-2" />
                                            WhatsApp
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default AgentsPage;
