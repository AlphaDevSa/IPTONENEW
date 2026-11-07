
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, WhatsAppSolid, Tower, Wifi, MapPin, Home, Signal } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Modal from './Modal';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

interface OrderFormData {
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    suburb: string;
    city: string;
    postalCode: string;
    province: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    streetAddress?: string;
    city?: string;
    postalCode?: string;
    province?: string;
    terms?: string;
}

const OrderForm: React.FC<{ plan: { name: string; price: string }; onClose: () => void }> = ({ plan, onClose }) => {
    const [formData, setFormData] = useState<OrderFormData>({ 
        name: '', email: '', phone: '', 
        streetAddress: '', suburb: '', city: '', postalCode: '', province: '' 
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
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
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
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    plan_selection: `${plan.name} (R${plan.price}/month)`,
                    activation_fee: `R${activationFee}`,
                    total_signup_cost: `R${totalDue}`,
                    _subject: `New MTN Fixed LTE Order: ${plan.name}`
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

        const text = `*New MTN Fixed LTE Order*\n\n` +
            `*Plan:* ${plan.name} (R${plan.price}/month)\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Address:* ${formData.streetAddress}, ${formData.suburb}, ${formData.city}, ${formData.province}, ${formData.postalCode}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) { setErrors(prev => ({...prev, [id]: undefined})); }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
                <h3 className="font-semibold text-lg">Thank You!</h3>
                <p>Your order for the {plan.name} plan has been received. Our team will contact you shortly to confirm coverage and arrange delivery.</p>
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
                    <h3 className="text-lg font-semibold text-gray-800">Installation Address</h3>
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

const MTNFixedLTEPage: React.FC = () => {
  const features = [
    "High-Speed Fixed LTE & 5G",
    "Plug & Play Router Setup",
    "No Landline Required",
    "Coverage Dependent Service",
    "Use Your Own Compatible Router",
    "Flexible Month-to-Month Contracts",
  ];
  
  return (
    <>
      <Hero
        title={
            <>
                Fixed Wireless for <br/>
                <span className="text-[#FFCB05]">Home & Business.</span>
            </>
        }
        subtitle="Reliable, high-speed internet without the wait. Plug-and-play 5G & LTE routers locked to your location for optimized performance and stability."
        badge={
            <>
                <MapPin className="w-4 h-4" />
                <span>Location Locked</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#FFCB05]/10 rounded-full blur-[80px] -z-10"></div>

                {/* Main Visual: Router Concept */}
                <div className="relative z-20 bg-gray-900 border border-gray-700 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Abstract Map Background inside card */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-gray-300">TOWER_LOCK_ACTIVE</span>
                        </div>
                        <Tower className="w-5 h-5 text-[#FFCB05]" />
                    </div>

                    {/* Router Representation */}
                    <div className="relative z-10 flex flex-col items-center mb-8">
                        <div className="w-40 h-32 bg-gradient-to-b from-gray-800 to-black rounded-xl border border-gray-600 shadow-xl flex flex-col items-center justify-end py-4 relative">
                            {/* Antennae */}
                            <div className="absolute -top-6 left-4 w-1.5 h-10 bg-gray-600 rounded-full"></div>
                            <div className="absolute -top-6 right-4 w-1.5 h-10 bg-gray-600 rounded-full"></div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1.5 h-12 bg-gray-600 rounded-full"></div>
                            
                            {/* Status Lights */}
                            <div className="flex space-x-3 mb-4">
                                <div className="w-1.5 h-1.5 bg-[#FFCB05] rounded-full shadow-[0_0_5px_#FFCB05]"></div>
                                <div className="w-1.5 h-1.5 bg-[#FFCB05] rounded-full shadow-[0_0_5px_#FFCB05]"></div>
                                <div className="w-1.5 h-1.5 bg-[#FFCB05] rounded-full shadow-[0_0_5px_#FFCB05]"></div>
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            
                            <div className="text-center w-full border-t border-gray-700 pt-2">
                                <Wifi className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                            </div>
                        </div>
                        {/* Signal Waves */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-[#FFCB05]/10 rounded-full animate-ping-slow pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#FFCB05]/5 rounded-full pointer-events-none"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        <div className="bg-gray-800/80 p-3 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Connection</p>
                            <p className="text-white font-bold text-sm flex items-center"><Signal className="w-3 h-3 mr-1 text-[#FFCB05]"/> Fixed LTE/5G</p>
                        </div>
                        <div className="bg-gray-800/80 p-3 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Data Priority</p>
                            <p className="text-[#FFCB05] font-bold text-sm">High</p>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-30 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <Home className="w-5 h-5 text-gray-900" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Best For</p>
                        <p className="text-xs font-bold text-gray-900">Home & Office</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')} className="bg-[#FFCB05] text-black hover:bg-white border-transparent font-bold shadow-lg shadow-[#FFCB05]/20">
                View Packages
            </Button>
        </div>
      </Hero>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reliable Fixed Wireless</h2>
            <p className="text-lg text-gray-600 mx-auto max-w-3xl">
              Enjoy fibre-like speeds without the cables. MTN Fixed LTE/5G is designed to be used at a specific location (home or office), ensuring network resources are optimized for your area. It's the perfect alternative where fibre is unavailable or for instant connectivity.
            </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fixed LTE?</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Benefits of a dedicated fixed wireless connection.</p>
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
      
       <CtaSection />
    </>
  );
};

export default MTNFixedLTEPage;
