
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import { WhatsAppSolid } from './components/icons';

interface OpenServeFiberSignUpFormProps {
    plan: {
        name: string;
        price: string;
    };
    onClose: () => void;
}

interface FormData {
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

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

const OpenServeFiberSignUpForm: React.FC<OpenServeFiberSignUpFormProps> = ({ plan, onClose }) => {
    const [formData, setFormData] = useState<FormData>({ 
        name: '', email: '', phone: '', 
        streetAddress: '', suburb: '', city: '', postalCode: '', province: '' 
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Logic from prompt: R299 covers Installation + Router + 14 days service
    const upfrontCost = 299; 

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
                    plan_selection: plan.name,
                    monthly_cost: plan.price,
                    upfront_payment_due: `R${upfrontCost}.00`,
                    note: "Client aware of 14-day speed boost (50Mbps) and coverage dependency.",
                    _subject: `New OpenServe Fibre Order: ${plan.name}`
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

        const text = `*New OpenServe Fibre Order*\n\n` +
            `*Plan:* ${plan.name}\n` +
            `*Monthly:* ${plan.price}\n` +
            `*Upfront Due:* R${upfrontCost} (Installation + 14 Days)\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Address:* ${formData.streetAddress}, ${formData.suburb}, ${formData.city}, ${formData.postalCode}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if(errors[id as keyof FormErrors]) {
            setErrors(prev => ({...prev, [id]: undefined}));
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-8 bg-blue-50 text-brand-blue rounded-lg">
                <h3 className="font-bold text-2xl mb-2">Order Received!</h3>
                <p className="mb-4">Thank you for ordering {plan.name}.</p>
                <p className="text-sm text-gray-600 mb-6">
                    Our team is currently verifying OpenServe coverage at your address. 
                    We will contact you shortly to process the <strong>R{upfrontCost}</strong> upfront payment and schedule your installation.
                </p>
                <Button onClick={onClose} variant="outline">Close</Button>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-2 rounded-md text-sm">Something went wrong. Please try again.</p>}

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name" className="text-xs">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={handleChange} className={`h-10 ${errors.name ? 'border-red-500' : ''}`} />
                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone" className="text-xs">Phone Number</Label>
                            <Input id="phone" value={formData.phone} onChange={handleChange} className={`h-10 ${errors.phone ? 'border-red-500' : ''}`} />
                            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email" className="text-xs">Email Address</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={`h-10 ${errors.email ? 'border-red-500' : ''}`} />
                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Installation Address</h4>
                        <div className="space-y-3">
                            <div>
                                <Label htmlFor="streetAddress" className="text-xs">Street Address</Label>
                                <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} className={`h-10 ${errors.streetAddress ? 'border-red-500' : ''}`} placeholder="e.g., 42 Fiber Way" />
                                {errors.streetAddress && <p className="text-red-600 text-xs mt-1">{errors.streetAddress}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label htmlFor="suburb" className="text-xs">Suburb</Label>
                                    <Input id="suburb" value={formData.suburb} onChange={handleChange} className="h-10" />
                                </div>
                                <div>
                                    <Label htmlFor="city" className="text-xs">City</Label>
                                    <Input id="city" value={formData.city} onChange={handleChange} className={`h-10 ${errors.city ? 'border-red-500' : ''}`} />
                                    {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label htmlFor="postalCode" className="text-xs">Postal Code</Label>
                                    <Input id="postalCode" value={formData.postalCode} onChange={handleChange} className={`h-10 ${errors.postalCode ? 'border-red-500' : ''}`} />
                                    {errors.postalCode && <p className="text-red-600 text-xs mt-1">{errors.postalCode}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="province" className="text-xs">Province</Label>
                                    <select id="province" value={formData.province} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ${errors.province ? 'border-red-500' : 'border-gray-300'}`}>
                                        <option value="">Select...</option>
                                        {southAfricanProvinces.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                                    </select>
                                    {errors.province && <p className="text-red-600 text-xs mt-1">{errors.province}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                        />
                        <label htmlFor="terms" className="text-xs text-gray-600">
                            I agree to the Terms & Conditions. I understand coverage is dependent on OpenServe availability.
                        </label>
                    </div>
                    {errors.terms && <p className="text-red-600 text-xs">{errors.terms}</p>}

                    <div className="flex gap-3 pt-2">
                        <Button type="submit" className="w-full flex-1" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Processing...' : 'Place Order'}
                        </Button>
                        <Button 
                            type="button" 
                            onClick={handleWhatsAppSubmit} 
                            className="w-full flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                        >
                            <WhatsAppSolid className="w-5 h-5 mr-2" />
                            WhatsApp
                        </Button>
                    </div>
                </form>
            </div>

            <div className="md:col-span-5 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Selected Plan</p>
                        <p className="text-lg font-bold text-brand-blue">{plan.name}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Monthly Subscription</span>
                        <span className="font-bold">{plan.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Pro-rata (Est.)</span>
                        <span className="font-bold text-gray-400">Calculated on Activation</span>
                    </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-blue-800">Due Upfront</span>
                        <span className="text-xl font-bold text-blue-900">R{upfrontCost}.00</span>
                    </div>
                    <p className="text-xs text-blue-700 leading-tight">
                        Includes Installation, Router & First 14 Days Service. Refundable if no coverage.
                    </p>
                </div>

                <div className="space-y-2 text-xs text-gray-500 border-t border-gray-200 pt-4">
                    <p>• <strong>Promo:</strong> 50Mbps speed for first 14 days.</p>
                    <p>• <strong>Router:</strong> Free-to-use Premium Router included.</p>
                    <p>• <strong>Coverage:</strong> If unavailable, full refund applies.</p>
                </div>
            </div>
        </div>
    );
};

export default OpenServeFiberSignUpForm;
