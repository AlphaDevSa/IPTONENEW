
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import { WhatsAppSolid } from './components/icons';

interface IPTHostedExtensionsSignUpFormProps {
    plan: {
        name: string;
        price: string;
        extensions: number;
    };
}

interface FormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    streetAddress: string;
    city: string;
    areaCode: string;
    numberRental: string;
    minuteBundle: string;
}

interface FormErrors {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    streetAddress?: string;
    city?: string;
    areaCode?: string;
    numberRental?: string;
    minuteBundle?: string;
    terms?: string;
}

const minuteBundleOptions = [
    "250 minutes - R99 pm", "500 minutes - R199 pm", "750 minutes - R289 pm", "1000 minutes - R395 pm",
    "2000 minutes - R790 pm", "2500 minutes - R980 pm", "5000 minutes - R1750 pm", "10 000 minutes - R2950 pm"
];

const areaCodeOptions = "010,012,013,014,015,016,017,018,021,022,023,027,028,031,032,033,034,035,036,039,041,042,043,044,045,046,047,048,049,051,053,054,056,057,058,086,087".split(',');

const rentalOptions = [
    "Monthly Line Rental - R49 Per Month",
    "Yearly Line Rental - R199 Per Year"
];

const getPriceFromOption = (option: string | undefined): number => {
    if (!option) return 0;
    const match = option.match(/R\s?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
};

const parsePlanPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/\D/g, ''), 10) || 0;
};

const IPTHostedExtensionsSignUpForm: React.FC<IPTHostedExtensionsSignUpFormProps> = ({ plan }) => {
    const [formData, setFormData] = useState<FormData>({ 
        name: "", company: "", email: "", phone: "", streetAddress: "", city: "", areaCode: "", numberRental: "", minuteBundle: ""
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.company.trim()) newErrors.company = "Company is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.areaCode) newErrors.areaCode = "Please select an area code.";
        if (!formData.numberRental) newErrors.numberRental = "Please select a rental option.";
        if (!formData.minuteBundle) newErrors.minuteBundle = "Please select a minute bundle.";
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
                    plan_selection: `${plan.name} (${plan.extensions} Extensions) - ${plan.price}/month`,
                    number_rental: formData.numberRental,
                    minute_bundle: formData.minuteBundle,
                    _subject: `New IPT Hosted Extension Order: ${plan.name}`
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

        const text = `*New IPT Hosted Extension Order*\n\n` +
            `*Plan:* ${plan.name} (${plan.price}/month)\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*City:* ${formData.city}\n` +
            `*Area Code:* ${formData.areaCode}\n` +
            `*Rental:* ${formData.numberRental}\n` +
            `*Minute Bundle:* ${formData.minuteBundle}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if(errors[id as keyof FormErrors]) {
            setErrors(prev => ({...prev, [id]: undefined}));
        }
    };

    // Calculation Logic
    const planPrice = parsePlanPrice(plan.price);
    const rentalPrice = getPriceFromOption(formData.numberRental);
    const bundlePrice = getPriceFromOption(formData.minuteBundle);
    const isRentalYearly = formData.numberRental.toLowerCase().includes('year');
    const totalDueNow = planPrice + rentalPrice + bundlePrice;
    const monthlyRecurring = planPrice + bundlePrice + (isRentalYearly ? 0 : rentalPrice);

    if (status === 'success') {
        return (
            <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
                <div>
                    <h3 className="font-semibold text-lg">Thank you!</h3>
                    <p>Your order for {plan.name} has been received. Our team will contact you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again.</p>}
                    
                    <div className="text-center mb-6 bg-gray-50 p-4 rounded-lg md:hidden">
                        <p className="font-semibold text-gray-800">Selected: <span className="text-brand-blue">{plan.name}</span></p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" value={formData.company} onChange={handleChange} className={errors.company ? 'border-red-500' : ''} />
                            {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
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

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="streetAddress">Address (Optional)</Label>
                            <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                        </div>
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" value={formData.city} onChange={handleChange} className={errors.city ? 'border-red-500' : ''} />
                            {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="areaCode">Area Dialing Code Required</Label>
                            <select id="areaCode" value={formData.areaCode} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.areaCode ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.areaCode}>
                                <option value="">Select an Area Code...</option>
                                {areaCodeOptions.map(code => <option key={code} value={code}>{code}</option>)}
                            </select>
                            {errors.areaCode && <p className="text-red-600 text-sm mt-1">{errors.areaCode}</p>}
                        </div>
                        <div>
                            <Label htmlFor="numberRental">Landline Number Rental</Label>
                            <select id="numberRental" value={formData.numberRental} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRental ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRental}>
                                <option value="">Please select...</option>
                                {rentalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                            {errors.numberRental && <p className="text-red-600 text-sm mt-1">{errors.numberRental}</p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="minuteBundle">Minute Bundle</Label>
                        <select id="minuteBundle" value={formData.minuteBundle} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minuteBundle ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.minuteBundle}>
                            <option value="">Please select a bundle...</option>
                            {minuteBundleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        {errors.minuteBundle && <p className="text-red-600 text-sm mt-1">{errors.minuteBundle}</p>}
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

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button type="submit" size="lg" className="w-full font-semibold flex-1" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Submitting...' : 'Place Order'}
                        </Button>
                        <Button 
                            type="button" 
                            onClick={handleWhatsAppSubmit} 
                            size="lg" 
                            className="w-full font-semibold flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                        >
                            <WhatsAppSolid className="w-5 h-5 mr-2" />
                            WhatsApp
                        </Button>
                    </div>
                </form>
            </div>

            {/* Summary Block */}
            <div className="bg-brand-blue text-white p-8 rounded-xl flex flex-col h-full shadow-xl">
                <h3 className="text-2xl font-bold text-brand-green">Order Summary</h3>
                <p className="text-blue-200 mb-6">{plan.name}</p>
                
                <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-center pb-2 border-b border-blue-600">
                        <span>Extensions Included</span>
                        <span className="font-bold text-xl">{plan.extensions}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-blue-600">
                        <span>Monthly Subscription</span>
                        <span className="font-bold text-xl">{plan.price}</span>
                    </div>
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                        <span>Number Rental</span>
                        <span className="font-bold text-xl">{rentalPrice > 0 ? `R${rentalPrice}.00` : '-'}</span>
                    </div>
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                        <span>Minute Bundle</span>
                        <span className="font-bold text-xl">{bundlePrice > 0 ? `R${bundlePrice}.00` : '-'}</span>
                    </div>
                    
                    <div className="pt-4">
                        <div className="flex justify-between items-baseline pt-4">
                            <span className="text-lg font-semibold">Total Due Now</span>
                            <span className="font-bold text-2xl text-brand-green">
                                R{totalDueNow}.00
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 text-center">
                    <p className="font-semibold">
                        Monthly Recurring: R{monthlyRecurring}.00
                    </p>
                    <p className="mt-4 text-sm text-blue-200">Call charges excluded.</p>
                </div>
            </div>
        </div>
    );
};

export default IPTHostedExtensionsSignUpForm;
export { IPTHostedExtensionsSignUpForm };
