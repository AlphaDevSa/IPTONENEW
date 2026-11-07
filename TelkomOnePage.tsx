
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, Smartphone, Phone, MessageSquare, Signal, Wifi, Zap, Tag } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Modal from './Modal';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

interface Plan {
    name: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

const pricingPlans: Plan[] = [
    { name: "Telkom One Starter", price: "349.00", features: ["10GB Full Speed Data then 0.5Mbps Uncapped", "Roams on MTN & Vodacom", "100 All Network Minutes", "1000 Telkom to Telkom Minutes", "250 SMS Messages"] },
    { name: "Telkom One Pro", price: "459.00", features: ["15GB Full Speed Data then 0.5Mbps Uncapped", "Roams on MTN & Vodacom*", "250 All Network Minutes", "2000 Telkom to Telkom Minutes", "Unlimited WhatsApp & Telegram"], isFeatured: true },
    { name: "Telkom One Prime", price: "579.00", features: ["20GB Full Speed Data then 0.5Mbps Uncapped", "Roams on MTN & Vodacom", "350 All Network Minutes", "3000 Telkom to Telkom Minutes", "Unlimited WhatsApp & Telegram"] },
    { name: "Telkom One Business", price: "919.00", features: ["50GB Full Speed Data then 0.5Mbps Uncapped", "Roams on MTN & Vodacom", "1000 All Network Minutes", "Unlimited Telkom to Telkom Minutes", "Network Priority"] },
    { name: "Telkom One", price: "1729.00", features: ["100GB Full Speed Data then 0.5Mbps", "Unlimited All Network Minutes*", "Roams on MTN & Vodacom", "Network Priority", "*FUP: 6000 mins"] },
];

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal",
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

interface OrderFormData {
    name: string; email: string; phone: string; streetAddress: string;
    suburb: string; city: string; postalCode: string; province: string;
}

interface FormErrors {
    name?: string; email?: string; phone?: string; streetAddress?: string;
    city?: string; postalCode?: string; province?: string; terms?: string;
}

const OrderForm: React.FC<{ plan: Plan; onClose: () => void }> = ({ plan, onClose }) => {
    const [formData, setFormData] = useState<OrderFormData>({
        name: '', email: '', phone: '', streetAddress: '',
        suburb: '', city: '', postalCode: '', province: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const activationFee = 99;
    const planPrice = parseFloat(plan.price);
    const totalDue = activationFee + planPrice;

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) { newErrors.email = "Email is required."; }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Email address is invalid."; }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required.";
        if (!formData.province) newErrors.province = "Please select a province.";
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
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    plan_selection: `${plan.name} (R${plan.price}/month)`,
                    activation_fee: `R${activationFee}`,
                    total_signup_cost: `R${totalDue}`,
                    _subject: `New Telkom One Order: ${plan.name}`
                }),
            });
            if (response.ok) { setStatus('success'); }
            else { throw new Error('Form submission failed'); }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) { setErrors(prev => ({ ...prev, [id]: undefined })); }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
                <h3 className="font-semibold text-lg">Thank You!</h3>
                <p>Your order for the {plan.name} plan has been received. Our team will contact you shortly to confirm and arrange delivery.</p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again.</p>}
                    
                    <div className="md:hidden bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="font-semibold text-brand-blue">Ordering: {plan.name}</p>
                        <p className="text-sm">Total Due: R{totalDue.toFixed(2)}</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} aria-invalid={!!errors.name} />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} aria-invalid={!!errors.phone} />
                            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} aria-invalid={!!errors.email} />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <hr className="my-6 border-gray-200" />
                    <h3 className="text-lg font-semibold text-gray-800">Delivery Address</h3>
                    <div>
                        <Label htmlFor="streetAddress">Street Address</Label>
                        <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} className={errors.streetAddress ? 'border-red-500' : ''} placeholder="e.g., 123 Main Street" aria-invalid={!!errors.streetAddress} />
                        {errors.streetAddress && <p className="text-red-600 text-sm mt-1">{errors.streetAddress}</p>}
                    </div>
                    <div>
                        <Label htmlFor="suburb">Suburb (Optional)</Label>
                        <Input id="suburb" value={formData.suburb} onChange={handleChange} placeholder="e.g., Sandton" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" value={formData.city} onChange={handleChange} className={errors.city ? 'border-red-500' : ''} placeholder="e.g., Johannesburg" aria-invalid={!!errors.city} />
                            {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
                        </div>
                        <div>
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input id="postalCode" value={formData.postalCode} onChange={handleChange} className={errors.postalCode ? 'border-red-500' : ''} placeholder="e.g., 2196" aria-invalid={!!errors.postalCode} />
                            {errors.postalCode && <p className="text-red-600 text-sm mt-1">{errors.postalCode}</p>}
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="province">Province</Label>
                        <select id="province" value={formData.province} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.province ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.province}>
                            <option value="">Select a Province...</option>
                            {southAfricanProvinces.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                        </select>
                        {errors.province && <p className="text-red-600 text-sm mt-1">{errors.province}</p>}
                    </div>

                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I accept the <a href="https://www.iptone.co.za/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Terms and Conditions</a>
                        </label>
                    </div>
                    {errors.terms && <p className="text-red-600 text-sm mt-1">{errors.terms}</p>}

                    <Button type="submit" size="lg" className="w-full font-semibold" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Submitting Order...' : 'Submit Order'}
                    </Button>
                </form>
            </div>

            {/* Summary Block */}
            <div className="hidden md:flex bg-brand-blue text-white p-8 rounded-xl flex-col h-full shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold text-brand-green">Order Summary</h3>
                <p className="text-blue-200 mb-6">{plan.name}</p>
                <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                        <span>Sim, Activation & Delivery</span>
                        <span className="font-bold text-xl">R{activationFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                        <span>Monthly Plan</span>
                        <span className="font-bold text-xl">R{planPrice.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline pt-4">
                        <span className="text-lg font-semibold">Total Due Now</span>
                        <span className="font-bold text-2xl text-brand-green">
                            R{totalDue.toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="font-semibold">
                        Monthly Recurring: R{planPrice.toFixed(2)}
                    </p>
                    <p className="mt-4 text-sm text-blue-200">Submit the form to claim this offer. Our team will contact you to finalize details.</p>
                </div>
            </div>
        </div>
    );
};

const TelkomOnePage: React.FC = () => {
    const features = [
        "All-Network Calling Minutes",
        "Unlimited Data (FUP Applies)",
        "Free SMS Bundles",
        "Free Social Bundles",
        "Golden Number Option",
        "Free Incoming Number Included",
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const handleOrderClick = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <>
            <Hero
                title={
                    <>
                        One Plan. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Infinite Possibilities.</span>
                    </>
                }
                subtitle="The ultimate all-in-one mobile solution. Get Data, All-Network Minutes, SMS, and Unlimited WhatsApp in a single package. Plus, choose your own Golden Number."
                badge={
                    <>
                        <Smartphone className="w-4 h-4" />
                        <span>All-In-One Mobile</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                         {/* Background Glow */}
                         <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>

                         {/* Phone Visual */}
                         <div className="relative z-20 bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[9/18] mx-auto w-72 transform hover:scale-[1.02] transition-transform duration-500">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-30"></div>
                            
                            {/* Screen Content */}
                            <div className="h-full bg-gray-800 flex flex-col relative overflow-hidden">
                                {/* Header */}
                                <div className="pt-12 px-6 pb-6 bg-gradient-to-br from-blue-600 to-teal-500">
                                    <div className="flex justify-between items-center text-white mb-4">
                                         <span className="text-xs font-bold uppercase tracking-wider opacity-80">My Plan</span>
                                         <Signal className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Telkom One</h3>
                                    <p className="text-blue-100 text-xs">Active • 081 123 4567</p>
                                </div>
                                
                                {/* Usage Stats */}
                                <div className="flex-grow p-6 space-y-6">
                                    {/* Data */}
                                    <div>
                                         <div className="flex justify-between text-white text-sm mb-2">
                                            <span className="flex items-center"><Wifi className="w-4 h-4 mr-2 text-teal-400"/> Data</span>
                                            <span className="font-bold">15.0 GB</span>
                                         </div>
                                         <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-400 w-3/4 rounded-full"></div>
                                         </div>
                                    </div>
                                     {/* Minutes */}
                                    <div>
                                         <div className="flex justify-between text-white text-sm mb-2">
                                            <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-400"/> Voice</span>
                                            <span className="font-bold">500 Min</span>
                                         </div>
                                         <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-400 w-1/2 rounded-full"></div>
                                         </div>
                                    </div>
                                     {/* WhatsApp */}
                                    <div className="bg-gray-700/50 p-4 rounded-xl flex items-center justify-between border border-gray-600">
                                         <div className="flex items-center text-white">
                                            <div className="bg-[#25D366] p-1.5 rounded-full mr-3 text-white">
                                                <MessageSquare className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">WhatsApp</span>
                                         </div>
                                         <span className="text-xs font-bold text-[#25D366] uppercase bg-[#25D366]/10 px-2 py-1 rounded">Unlimited</span>
                                    </div>
                                </div>

                                {/* Bottom Action */}
                                <div className="p-6 pt-0">
                                     <div className="w-full bg-white/10 h-12 rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-white/20 transition-colors cursor-pointer">
                                        Top Up
                                     </div>
                                </div>
                            </div>
                         </div>

                         {/* Floating Elements */}
                         <div className="absolute top-10 -right-4 z-30 bg-white text-gray-900 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                             <div className="bg-yellow-400 p-1.5 rounded-lg text-white">
                                <Zap className="w-4 h-4" />
                             </div>
                             <div>
                                 <p className="text-[10px] text-gray-500 uppercase font-bold">Premium</p>
                                 <p className="text-xs font-bold">Golden Number</p>
                             </div>
                         </div>
                         
                         <div className="absolute bottom-20 -left-6 z-30 bg-teal-500 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                             <Signal className="w-5 h-5" />
                             <div>
                                 <p className="text-[10px] text-teal-100 uppercase font-bold">Coverage</p>
                                 <p className="text-xs font-bold">All Networks</p>
                             </div>
                         </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-500 text-white font-bold border-transparent shadow-lg shadow-blue-600/20">
                        View Packages
                    </Button>
                </div>
            </Hero>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ultimate All-in-One Package</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Telkom One offers you a comprehensive package with All Network Calling Minutes, Unlimited Data, Free SMS bundles, and Free Social bundles. It's designed for users who need a complete communication solution without the hassle of managing multiple plans.
                        </p>
                        <p className="text-lg text-gray-600">
                            As a unique benefit, you also get the option to add a Golden Number - a special, memorable number like 067 767 7677. Plus, every user gets a free incoming number included.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Telkom One?</h3>
                            <p className="text-gray-600 mb-6">Let's find the perfect plan for you. Explore our pricing below or contact us for a custom quote.</p>
                            <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features of Telkom One</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">All the benefits included in this comprehensive package.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="bg-blue-100 inline-block p-3 rounded-full mb-4">
                                    <CheckCircle className="w-7 h-7 text-brand-blue" />
                                </div>
                                <p className="text-gray-700 font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="pricing" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Telkom One Pricing</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Choose the all-in-one plan that best suits your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {pricingPlans.map(plan => (
                            <div key={plan.name} className={`rounded-2xl border bg-white flex flex-col p-6 text-center shadow-lg ${plan.isFeatured ? 'border-brand-blue border-2 relative' : 'border-gray-200'}`}>
                                {plan.isFeatured && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Featured</div>}
                                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                                <p className="mt-4 flex-grow-0">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">R{plan.price}</span><br />
                                    <span className="text-base font-medium text-gray-500">/month</span>
                                </p>
                                <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-grow text-left">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-brand-blue mr-2 shrink-0 mt-1" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button onClick={() => handleOrderClick(plan)} className="mt-8 w-full font-semibold">Order Now</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />

            {isModalOpen && selectedPlan && (
                <Modal title={`Order Telkom One: ${selectedPlan.name}`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
                    <OrderForm plan={selectedPlan} onClose={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </>
    );
};

export default TelkomOnePage;
