import React, { useState } from 'react';
import { CheckCircle, Clock, WhatsAppSolid } from './components/icons';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

interface CliRange {
    name: string;
    codes: string;
    value: string;
    price: number;
}

interface MobileCLISignUpFormProps {
    cliRanges: CliRange[];
    initialRange?: string;
}

interface FormErrors {
    name?: string;
    company?: string;
    email?: string;
    contactNumber?: string;
    cliRange?: string;
    cliQty?: string;
    minuteBundle?: string;
    terms?: string;
}

const minuteBundles = [
    { name: "250 minutes", price: 99 },
    { name: "500 minutes", price: 199 },
    { name: "750 minutes", price: 289 },
    { name: "1000 minutes", price: 395 },
    { name: "2000 minutes", price: 790 },
    { name: "2500 minutes", price: 980 },
    { name: "5000 minutes", price: 1750 },
    { name: "10 000 minutes", price: 2950 },
];

const MobileCLISignUpForm: React.FC<MobileCLISignUpFormProps> = ({ cliRanges, initialRange = '' }) => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', contactNumber: '', cliRange: initialRange, cliQty: '1', minuteBundle: '' });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const selectedRange = cliRanges.find(r => r.value === formData.cliRange);
    const didPrice = selectedRange ? selectedRange.price : 0;
    const qty = parseInt(formData.cliQty) || 0;
    const cliCost = qty * didPrice;
    const selectedBundle = minuteBundles.find(b => b.name === formData.minuteBundle);
    const bundlePrice = selectedBundle ? selectedBundle.price : 0;
    const totalDueNow = cliCost + bundlePrice;
    const monthlyRecurring = cliCost + bundlePrice;

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
        if (!formData.cliRange) newErrors.cliRange = "Please select a CLI range.";
        if (isNaN(qty) || qty < 1) newErrors.cliQty = "At least 1 CLI is required.";
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
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Mobile CLI Request: ${formData.cliRange}`,
                    cli_range: formData.cliRange,
                    cli_quantity: formData.cliQty,
                    total_due_now: `R${totalDueNow}.00`,
                    monthly_recurring: `R${monthlyRecurring}.00`
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', contactNumber: '', cliRange: '', cliQty: '1', minuteBundle: '' });
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

        const text = `*New Mobile CLI Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.contactNumber}\n` +
            `*CLI Range:* ${formData.cliRange}\n` +
            `*Quantity:* ${formData.cliQty}\n` +
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

    if (status === 'success') {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Your Mobile CLI request has been successfully submitted. Our team will verify your details and contact you to complete the setup.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                    Request More CLIs
                </Button>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {status === 'error' && <p className="text-red-600 bg-red-50 p-3 rounded-md">Something went wrong. Please try again or contact us directly.</p>}

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                            1. Your Details
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} aria-invalid={!!errors.name} />
                                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" value={formData.company} onChange={handleChange} className={errors.company ? 'border-red-500' : ''} aria-invalid={!!errors.company} />
                                {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} aria-invalid={!!errors.email} />
                                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <Label htmlFor="contactNumber">Mobile Number</Label>
                                <Input id="contactNumber" value={formData.contactNumber} onChange={handleChange} className={errors.contactNumber ? 'border-red-500' : ''} aria-invalid={!!errors.contactNumber} />
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

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                            2. Select Your CLI Range
                        </h3>
                        <div>
                            <Label htmlFor="cliRange">Mobile Network &amp; Dialing Code</Label>
                            <select id="cliRange" value={formData.cliRange} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.cliRange ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.cliRange}>
                                <option value="">Select Range...</option>
                                {cliRanges.map(range => <option key={range.name} value={range.value}>{range.name} ({range.codes}) - R{range.price} per DID pm</option>)}
                            </select>
                            {errors.cliRange && <p className="text-red-600 text-xs mt-1">{errors.cliRange}</p>}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                            3. Choose Your Quantity
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="cliQty">Number of CLIs (DIDs)</Label>
                                <Input
                                    id="cliQty"
                                    type="number"
                                    min="1"
                                    value={formData.cliQty}
                                    onChange={handleChange}
                                    className={errors.cliQty ? 'border-red-500' : ''}
                                    aria-invalid={!!errors.cliQty}
                                />
                                {errors.cliQty && <p className="text-red-600 text-xs mt-1">{errors.cliQty}</p>}
                                <p className="text-xs text-gray-500 mt-2">R{didPrice > 0 ? didPrice : 49} per DID per month.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wide text-xs">
                            4. Choose a Call Plan
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="minuteBundle">Monthly Minute Bundle</Label>
                                <select id="minuteBundle" value={formData.minuteBundle} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minuteBundle ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.minuteBundle}>
                                    <option value="">Select Bundle...</option>
                                    {minuteBundles.map(bundle => <option key={bundle.name} value={bundle.name}>{bundle.name} - R{bundle.price} pm</option>)}
                                </select>
                                {errors.minuteBundle && <p className="text-red-600 text-xs mt-1">{errors.minuteBundle}</p>}
                                <p className="text-xs text-gray-500 mt-2">* International calls billed separately.</p>
                            </div>
                        </div>
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
            </div>

            {/* Summary Block */}
            <div>
                <div className="bg-brand-blue text-white p-8 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-bold text-brand-green">Order Summary</h3>
                    <p className="text-blue-200 mb-6">Mobile CLI Selection</p>
                    <div className="space-y-4">
                        <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                            <span>CLI Range</span>
                            <span className="font-bold text-lg text-right">{selectedRange ? `${selectedRange.name} (${selectedRange.codes})` : '-'}</span>
                        </div>
                        <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                            <span>CLIs ({qty > 0 ? qty : 0})</span>
                            <span className="font-bold text-xl">{cliCost > 0 ? `R${cliCost}.00` : '-'}</span>
                        </div>
                        <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                            <span>Minute Bundle</span>
                            <span className="font-bold text-xl">{bundlePrice > 0 ? `R${bundlePrice}.00` : '-'}</span>
                        </div>
                        <div className="flex justify-between items-baseline pt-4">
                            <span className="text-lg font-semibold">Total Due Now</span>
                            <span className="font-bold text-2xl text-brand-green">R{totalDueNow}.00</span>
                        </div>
                        <p className="text-xs text-blue-200 text-right">Includes VAT</p>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="font-semibold">Monthly Recurring: R{monthlyRecurring}.00</p>
                        <p className="mt-4 text-sm text-blue-200">Submit the form to secure your CLIs. Our team will contact you to finalize setup.</p>
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
    );
};

export default MobileCLISignUpForm;
