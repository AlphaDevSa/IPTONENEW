
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, Smartphone, Signal, Zap, Wifi, MapPin } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Modal from './Modal';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

const commonFeatures = [
    "Premium MTN Network Access",
    "Mobile Use any 4G/5G Router or Smartphone",
    "SIM Only",
    "No Location or Tower Locks",
    "Priority on Network"
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
        else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Email address is invalid.";}
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
                    _subject: `New MTN Mobile LTE Order: ${plan.name}`
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
        if (errors[id as keyof FormErrors]) { setErrors(prev => ({...prev, [id]: undefined})); }
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

const MTNMobileLTEPage: React.FC = () => {
  return (
    <>
      <Hero
        title={
            <>
                Freedom to <br/>
                <span className="text-[#FFCB05]">Roam.</span>
            </>
        }
        subtitle="High-speed MTN LTE & 5G data that travels with you. No fixed location, no contracts. Just pure connectivity for your smartphone, tablet, or router."
        badge={
            <>
                <Smartphone className="w-4 h-4" />
                <span>Mobile Data</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                 {/* Background Glow */}
                <div className="absolute inset-0 bg-[#FFCB05]/20 rounded-full blur-[80px] -z-10"></div>

                {/* Smartphone Visual */}
                <div className="relative z-20 bg-gray-900 border-4 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[9/19] transform rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto w-72">
                    {/* Screen */}
                    <div className="h-full bg-gray-800 relative overflow-hidden flex flex-col">
                        {/* Notch area */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 rounded-b-xl mx-12"></div>
                        
                        {/* Status Bar */}
                        <div className="px-6 pt-3 flex justify-between text-[10px] text-white font-medium z-20">
                            <span>09:41</span>
                            <div className="flex space-x-1">
                                <Signal className="w-3 h-3" />
                                <div className="w-4 h-3 bg-white rounded-sm text-black text-[8px] flex items-center justify-center font-bold">5G</div>
                            </div>
                        </div>

                        {/* Main App Content */}
                        <div className="p-6 flex-grow flex flex-col z-10">
                            <div className="mt-8 mb-6">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Current Balance</p>
                                <h3 className="text-4xl font-bold text-white">50.0 <span className="text-lg text-[#FFCB05]">GB</span></h3>
                            </div>

                            {/* Usage Graph */}
                            <div className="bg-gray-700/50 rounded-2xl p-4 mb-4 border border-gray-600">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs text-gray-300">Daily Usage</span>
                                </div>
                                <div className="flex items-end space-x-1 h-16">
                                     {[30, 50, 40, 70, 50, 80, 60].map((h, i) => (
                                        <div key={i} style={{height: `${h}%`}} className={`flex-1 rounded-t-sm ${i===5 ? 'bg-[#FFCB05]' : 'bg-gray-600'}`}></div>
                                     ))}
                                </div>
                            </div>

                             <div className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <div className="p-1.5 bg-[#FFCB05] rounded-full mr-2">
                                            <Zap className="w-3 h-3 text-black" />
                                        </div>
                                        <span className="text-sm font-bold text-white">Speed Test</span>
                                    </div>
                                    <span className="text-xs text-green-400">Excellent</span>
                                </div>
                                <p className="text-2xl font-mono text-white">150 <span className="text-xs text-gray-400">Mbps</span></p>
                            </div>
                        </div>
                        
                        {/* Background Pattern on screen */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-20 -right-4 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow z-30">
                    <Wifi className="w-5 h-5 text-gray-900" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Hotspot</p>
                        <p className="text-xs font-bold text-gray-900">Ready</p>
                    </div>
                </div>

                <div className="absolute bottom-32 -left-8 bg-[#FFCB05] text-black p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse z-30">
                    <MapPin className="w-5 h-5" />
                    <div>
                        <p className="text-[10px] uppercase font-bold opacity-80">Location</p>
                        <p className="text-xs font-bold">Unrestricted</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Internet That Moves With You</h2>
            <p className="text-lg text-gray-600 mx-auto max-w-3xl">
              Get access to our MTN Mobile data services for ultimate flexibility. Unlike fixed services, MTN Mobile can be used anywhere there is MTN coverage in South Africa and does not lock to a specific address. Simply insert the SIM into your favorite device—whether it's a smartphone, tablet, or mobile router—and get connected instantly.
            </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MTN Mobile?</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">The key benefits of a flexible, mobile data solution.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {commonFeatures.map((feature, index) => (
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

export default MTNMobileLTEPage;
