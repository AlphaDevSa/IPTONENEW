
import React, { useState } from 'react';
import Hero from './components/Hero';
// Fixed: Removed Download from imports
import { CheckCircle, WhatsAppSolid, Smartphone, Globe, Wifi, Shield, Phone, Zap, ArrowRight, CreditCard, Clock } from './components/icons';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Card, CardContent, CardHeader, CardTitle } from './components/Card';
import CtaSection from './components/CtaSection';
import { FORMSPREE_ENDPOINT } from './config';
import Accordion from './Accordion';
import { useNavigation } from './NavigationContext';

interface FormErrors {
    name?: string;
    company?: string;
    email?: string;
    contactNumber?: string;
    whatsappNumber?: string;
    areaCode?: string;
    minuteBundle?: string;
    numberRental?: string;
    terms?: string;
}

const LandlineNumbersPage: React.FC = () => {
    const navigate = useNavigation();
    const areaCodes = "010,012,013,014,015,016,017,018,021,022,023,027,028,031,032,033,034,035,036,039,041,042,043,044,045,046,047,048,049,051,053,054,056,057,058,086,087".split(',');

    const minuteBundles = [
        { name: "250 minutes", price: "99" },
        { name: "500 minutes", price: "199" },
        { name: "750 minutes", price: "289" },
        { name: "1000 minutes", price: "395" },
        { name: "2000 minutes", price: "790" },
        { name: "2500 minutes", price: "980" },
        { name: "5000 minutes", price: "1750" },
        { name: "10 000 minutes", price: "2950" },
    ];

    const rentalOptions = [
        { label: "Monthly Rental", price: 49, period: "pm" },
        { label: "Yearly Rental", price: 199, period: "yr" }
    ];

    const faqs = [
        {
            q: "Do I need a physical phone line?",
            a: "No. Our landline numbers are 100% digital and operate over the internet (VoIP). You do not need a Telkom copper line or any physical cabling. You just need a stable internet connection (Fibre, LTE, or 5G) on your mobile device or computer."
        },
        {
            q: "How do I answer calls?",
            a: "You answer calls using a specialized App on your smartphone (iOS or Android) or a softphone on your computer. When someone dials your landline number, the App on your phone rings."
        },
        {
            q: "Can I use WhatsApp Business?",
            a: "Yes! You can link your IPT One landline number to WhatsApp Business. This allows your customers to both call and message you on the same professional business number."
        },
        {
            q: "Can I keep my existing number?",
            a: "Absolutely. We can port your existing geographic (011, 021, etc.) or non-geographic (087) number to our network. Select 'Port Existing Number' in the signup process or contact our team."
        },
        {
            q: "What happens if I travel abroad?",
            a: "Since the service is app-based, your landline number works anywhere in the world as long as you have an internet connection (WiFi or local data). You avoid expensive roaming charges."
        }
    ];

    const benefits = [
        { 
            title: "App-Based", 
            desc: "No need for a second phone or SIM card. The landline runs as an app on your existing device.",
            icon: <Smartphone className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600"
        },
        { 
            title: "WhatsApp Business", 
            desc: "Link your new landline number to WhatsApp Business to separate work chats from personal ones.",
            icon: <WhatsAppSolid className="w-6 h-6 text-white" />,
            accent: "from-[#25D366] to-green-600"
        },
        { 
            title: "Global Roaming", 
            desc: "Traveling abroad? Connect to hotel WiFi and make/receive calls at local SA rates. No roaming fees.",
            icon: <Globe className="w-6 h-6 text-white" />,
            accent: "from-blue-500 to-indigo-600"
        },
        { 
            title: "Cost Savings", 
            desc: "Rentals from R49/pm and call rates starting at R0.40/min. Save up to 50% vs traditional lines.",
            icon: <CreditCard className="w-6 h-6 text-white" />,
            accent: "from-amber-400 to-orange-500"
        },
        { 
            title: "Privacy", 
            desc: "Keep your personal cell number private. Present a professional business image when calling clients.",
            icon: <Shield className="w-6 h-6 text-white" />,
            accent: "from-slate-600 to-gray-900"
        },
        { 
            title: "Instant Setup", 
            desc: "No technician needed. We provision your number and send you login details via email.",
            icon: <Zap className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600"
        },
    ];

    const getPriceFromOption = (option: string | undefined): number => {
        if (!option) return 0;
        const match = option.match(/R\s?(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
    };

    const [formData, setFormData] = useState({ name: '', company: '', email: '', contactNumber: '', whatsappNumber: '', areaCode: '', minuteBundle: '', numberRental: '' });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.company.trim()) newErrors.company = "Company name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
        if (!formData.areaCode) newErrors.areaCode = "Please select an area code.";
        if (!formData.minuteBundle) newErrors.minuteBundle = "Please select a minute bundle.";
        if (!formData.numberRental) newErrors.numberRental = "Please select a rental option.";
        if (!acceptedTerms) newErrors.terms = "You must accept the terms and conditions.";
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
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Landline Number Request: ${formData.areaCode} with ${formData.minuteBundle}`,
                    number_rental: formData.numberRental,
                    total_due_now: `R${totalDueNow}.00`
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', contactNumber: '', whatsappNumber: '', areaCode: '', minuteBundle: '', numberRental: '' });
                setAcceptedTerms(false);
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

        const text = `*New Landline Number Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.contactNumber}\n` +
            `*WhatsApp:* ${formData.whatsappNumber}\n` +
            `*Area Code:* ${formData.areaCode}\n` +
            `*Rental:* ${formData.numberRental}\n` +
            `*Bundle:* ${formData.minuteBundle}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const selectedBundle = minuteBundles.find(b => b.name === formData.minuteBundle);
    const bundlePrice = selectedBundle ? parseInt(selectedBundle.price) : 0;
    const rentalPrice = getPriceFromOption(formData.numberRental);
    const isRentalYearly = formData.numberRental.toLowerCase().includes('year');
    
    const totalDueNow = rentalPrice + bundlePrice;
    const monthlyRecurring = bundlePrice + (isRentalYearly ? 0 : rentalPrice);

    return (
        <>
            <Hero
                title={
                    <>
                        Virtual Landline <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Numbers.</span>
                    </>
                }
                subtitle="Turn your smartphone into a powerful business phone system. Get a local 011, 021 or national 087 number instantly. No contracts, no hardware, just an app."
                badge={
                    <>
                        <Smartphone className="w-4 h-4" />
                        <span>Digital Landlines</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>
                        
                        {/* Abstract Phone/App Visual */}
                        <div className="relative z-20 bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden aspect-[9/18] transform rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto w-64">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                            
                            {/* Screen Content */}
                            <div className="bg-gray-800 h-full flex flex-col pt-12 pb-8 px-4 text-white relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                                
                                {/* Incoming Call UI */}
                                <div className="mt-8 text-center">
                                    <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-brand-green">
                                        <CheckCircle className="w-10 h-10 text-brand-green" />
                                    </div>
                                    <h3 className="text-2xl font-light">New Client</h3>
                                    <p className="text-brand-blue font-bold text-lg mt-1">011 555 0123</p>
                                    <p className="text-xs text-gray-400 mt-1">Calling via Business Line</p>
                                </div>

                                <div className="mt-auto flex justify-between px-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                            <Phone className="w-6 h-6 text-white rotate-[135deg]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer animate-pulse">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute z-30 top-20 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl flex items-center space-x-2 animate-float-slow">
                            <WhatsAppSolid className="w-5 h-5 text-[#25D366]" />
                            <span className="text-xs font-bold text-white">WhatsApp Business Linked</span>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        Choose Your Number
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        How It Works
                    </Button>
                </div>
            </Hero>

            {/* How It Works Strip */}
            <section id="how-it-works" className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
                        <p className="text-gray-500">Get connected in three simple steps.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Arrow */}
                        <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gray-100 -z-10 -translate-y-full transform scale-x-50"></div>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-4 text-2xl font-bold">1</div>
                            <h3 className="font-bold text-gray-900 mb-2">Choose Your Number</h3>
                            <p className="text-sm text-gray-600 max-w-xs">Select any local area code (011, 021, 031) or a national 087 number.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-4 text-2xl font-bold">2</div>
                            <h3 className="font-bold text-gray-900 mb-2">Download the App</h3>
                            <p className="text-sm text-gray-600 max-w-xs">Install our recommended softphone app on your iPhone or Android.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-4 text-2xl font-bold">3</div>
                            <h3 className="font-bold text-gray-900 mb-2">Start Calling</h3>
                            <p className="text-sm text-gray-600 max-w-xs">Make and receive calls instantly. Your landline rings wherever you are.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rental Options */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Flexible Rentals</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Choose Your Rental Option</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pick the plan that suits your budget, then configure your number below.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="flex items-baseline justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Landline Rental Monthly</h3>
                                <span className="inline-flex items-center rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 px-3 py-1 text-xs font-bold">Popular</span>
                            </div>
                            <div className="flex items-end gap-2 mb-4">
                                <div className="text-4xl font-extrabold text-brand-blue leading-none">R49</div>
                                <div className="text-gray-500 mb-1">per month</div>
                            </div>
                            <p className="text-gray-600 text-sm mb-6">Perfect for flexible, month-to-month billing.</p>
                            <Button 
                                size="lg" 
                                className="font-bold"
                                onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Configure Your Number <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="flex items-baseline justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Landline Rental Yearly</h3>
                                <span className="inline-flex items-center rounded-full bg-gray-900/5 text-gray-700 border border-gray-900/10 px-3 py-1 text-xs font-bold">Best Value</span>
                            </div>
                            <div className="flex items-end gap-2 mb-4">
                                <div className="text-4xl font-extrabold text-brand-blue leading-none">R199</div>
                                <div className="text-gray-500 mb-1">per year</div>
                            </div>
                            <p className="text-gray-600 text-sm mb-6">Save more with annual billing on your digital landline.</p>
                            <Button 
                                size="lg" 
                                variant="outline"
                                className="font-bold"
                                onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Configure Your Number <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Go Digital?</h2>
                        <p className="text-lg text-gray-600">Old copper lines are dying. Move to the cloud for reliability, flexibility, and savings.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((b, i) => (
                            <div key={b.title} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${b.accent}`}></div>
                                <div className="mb-4 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-sm">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-600 text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Configuration & Order Section */}
            <section className="py-20 bg-white" id="order-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Get Started</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Configure Your Number</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Build your package below. Select your preferred area code, call plan, and billing frequency.</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Order Form */}
                        <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-lg">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                        Your request has been successfully submitted. Our team will verify your details and email you the activation instructions shortly.
                                    </p>
                                    <Button onClick={() => window.location.reload()} variant="outline">
                                        Request Another Number
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                                            1. Select Your Number
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="areaCode">Area Code</Label>
                                                <select id="areaCode" value={formData.areaCode} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.areaCode ? 'border-red-500' : 'border-gray-300'}`}>
                                                    <option value="">Select Code...</option>
                                                    {areaCodes.map(code => <option key={code} value={code}>{code}</option>)}
                                                </select>
                                                {errors.areaCode && <p className="text-red-600 text-xs mt-1">{errors.areaCode}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="numberRental">Rental Frequency</Label>
                                                <select id="numberRental" value={formData.numberRental} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRental ? 'border-red-500' : 'border-gray-300'}`}>
                                                    <option value="">Select Option...</option>
                                                    {rentalOptions.map(opt => <option key={opt.label} value={`${opt.label} - R${opt.price} ${opt.period}`}>{opt.label} (R{opt.price}/{opt.period})</option>)}
                                                </select>
                                                {errors.numberRental && <p className="text-red-600 text-xs mt-1">{errors.numberRental}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                                            2. Choose a Call Plan
                                        </h3>
                                        <div>
                                            <Label htmlFor="minuteBundle">Monthly Minute Bundle</Label>
                                            <select id="minuteBundle" value={formData.minuteBundle} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minuteBundle ? 'border-red-500' : 'border-gray-300'}`}>
                                                <option value="">Select Bundle...</option>
                                                {minuteBundles.map(bundle => <option key={bundle.name} value={bundle.name}>{bundle.name} - R{bundle.price} pm</option>)}
                                            </select>
                                            {errors.minuteBundle && <p className="text-red-600 text-xs mt-1">{errors.minuteBundle}</p>}
                                            <p className="text-xs text-gray-500 mt-2">* Bundles cover calls to all local networks. International calls billed separately.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                                            3. Your Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
                                                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="company">Company</Label>
                                                <Input id="company" value={formData.company} onChange={handleChange} className={errors.company ? 'border-red-500' : ''} />
                                                {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} />
                                                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="contactNumber">Mobile Number</Label>
                                                <Input id="contactNumber" value={formData.contactNumber} onChange={handleChange} className={errors.contactNumber ? 'border-red-500' : ''} />
                                                {errors.contactNumber && <p className="text-red-600 text-xs mt-1">{errors.contactNumber}</p>}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                checked={acceptedTerms}
                                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                                            />
                                            <label htmlFor="terms" className="text-sm text-gray-600">
                                                I accept the <a href="https://www.iptone.co.za/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Terms & Conditions</a>
                                            </label>
                                        </div>
                                        {errors.terms && <p className="text-red-600 text-xs mt-1">{errors.terms}</p>}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Button type="submit" size="lg" className="w-full flex-1 font-bold" disabled={status === 'submitting'}>
                                            {status === 'submitting' ? 'Processing...' : 'Complete Sign Up'}
                                        </Button>
                                        <Button 
                                            type="button" 
                                            onClick={handleWhatsAppSubmit} 
                                            size="lg" 
                                            className="w-full sm:flex-1 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                                        >
                                            <WhatsAppSolid className="w-5 h-5 mr-2" />
                                            WhatsApp
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Order Summary Sticky Sidebar */}
                        <div className="lg:col-span-4 sticky top-24">
                            <div className="bg-brand-blue text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                                
                                <h3 className="text-xl font-bold mb-1">Your Order</h3>
                                <p className="text-blue-200 text-sm mb-8">Digital Landline Package</p>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-blue-600/50">
                                        <span className="text-blue-100">Number Rental</span>
                                        <span className="font-semibold">{rentalPrice > 0 ? `R${rentalPrice}` : '-'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-blue-600/50">
                                        <span className="text-blue-100">Minute Bundle</span>
                                        <span className="font-semibold">{bundlePrice > 0 ? `R${bundlePrice}` : '-'}</span>
                                    </div>
                                    
                                    <div className="pt-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-lg font-medium text-blue-100">Total Due Now</span>
                                            <span className="text-3xl font-extrabold text-brand-green">R{totalDueNow}</span>
                                        </div>
                                        <p className="text-xs text-blue-300 text-right">Includes VAT</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-blue-600/50 text-center">
                                    <p className="text-sm text-blue-200 mb-1">Monthly Recurring</p>
                                    <p className="text-xl font-bold">R{monthlyRecurring}</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 bg-blue-50 text-blue-800 p-4 rounded-xl text-sm border border-blue-100">
                                <p className="flex items-center mb-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>Activation time: ~24 Hours</span>
                                </p>
                                <p className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>No contract lock-in</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common queries about our digital landline service.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <Accordion key={index} title={item.q}>
                                <p>{item.a}</p>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default LandlineNumbersPage;
