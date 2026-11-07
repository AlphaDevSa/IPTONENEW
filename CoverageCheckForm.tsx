
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import { WhatsAppSolid } from './components/icons';
import * as analytics from './analytics';

interface CoverageCheckFormProps {
    serviceName: string;
}

interface FormData {
    name: string;
    company: string;
    email: string;
    telephone: string;
    streetAddress: string;
    suburb: string;
    city: string;
    postalCode: string;
    province: string;
    premisesType: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    streetAddress?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    premisesType?: string;
    privacy?: string;
}

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

const premisesTypes = [
    "Home / Residential",
    "Office / Small Business",
    "Corporate",
    "Farm / Plot (Rural)"
];

const CoverageCheckForm: React.FC<CoverageCheckFormProps> = ({ serviceName }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '', company: '', email: '', telephone: '', 
        streetAddress: '', suburb: '', city: '', postalCode: '', province: '',
        premisesType: ''
    });
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required.";
        if (!formData.province) newErrors.province = "Please select a province.";
        if (!formData.premisesType) newErrors.premisesType = "Please select a premises type.";
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
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New ${serviceName} Coverage Check: ${formData.streetAddress}, ${formData.city}`
                }),
            });

            if (response.ok) {
                setStatus('success');
                // Track Form Submission
                analytics.event({
                    action: 'submit_form',
                    category: 'Coverage',
                    label: serviceName,
                });
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

        const text = `*New Coverage Check Request: ${serviceName}*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.telephone}\n` +
            `*Type:* ${formData.premisesType}\n` +
            `*Address:* ${formData.streetAddress}, ${formData.suburb}, ${formData.city}, ${formData.province}, ${formData.postalCode}`;

        // Track WhatsApp Click
        analytics.event({
            action: 'click_whatsapp',
            category: 'Coverage',
            label: 'WhatsApp Submit',
        });

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
            <div className="text-center p-8 bg-blue-50 text-brand-blue rounded-xl h-full flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-bold text-2xl mb-2">Request Received!</h3>
                <p className="text-blue-800">Our network specialists are analyzing your location. We will be in touch shortly with your connectivity options.</p>
                <Button onClick={() => window.location.reload()} variant="outline" className="mt-6 border-blue-200 hover:bg-blue-100 text-blue-800">
                    Check Another Address
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again.</p>}
            
            {/* Contact Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full text-center leading-6 text-xs mr-2">1</span>
                    Contact Information
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
                        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <Label htmlFor="company">Company Name (Optional)</Label>
                        <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                    </div>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} />
                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <Label htmlFor="telephone">Phone / Mobile (Optional)</Label>
                        <Input id="telephone" placeholder="+27 82 123 4567" value={formData.telephone} onChange={handleChange} />
                    </div>
                </div>
            </div>
            
            {/* Address Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full text-center leading-6 text-xs mr-2">2</span>
                    Installation Address
                </h4>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="streetAddress">Street Address</Label>
                        <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} className={errors.streetAddress ? 'border-red-500' : ''} placeholder="e.g., 123 Main Street" />
                        {errors.streetAddress && <p className="text-red-600 text-xs mt-1">{errors.streetAddress}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="suburb">Suburb (Optional)</Label>
                            <Input id="suburb" value={formData.suburb} onChange={handleChange} placeholder="e.g., Sandton" />
                        </div>
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" value={formData.city} onChange={handleChange} className={errors.city ? 'border-red-500' : ''} placeholder="e.g., Johannesburg" />
                            {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input id="postalCode" value={formData.postalCode} onChange={handleChange} className={errors.postalCode ? 'border-red-500' : ''} placeholder="e.g., 2196" />
                            {errors.postalCode && <p className="text-red-600 text-xs mt-1">{errors.postalCode}</p>}
                        </div>
                        <div>
                            <Label htmlFor="province">Province</Label>
                            <select id="province" value={formData.province} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.province ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Select...</option>
                                {southAfricanProvinces.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                            </select>
                            {errors.province && <p className="text-red-600 text-xs mt-1">{errors.province}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Premises Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full text-center leading-6 text-xs mr-2">3</span>
                    Premises Details
                </h4>
                <div>
                    <Label htmlFor="premisesType">Premises Type</Label>
                    <select id="premisesType" value={formData.premisesType} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.premisesType ? 'border-red-500' : 'border-gray-300'}`}>
                        <option value="">Select Premises Type...</option>
                        {premisesTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                    {errors.premisesType && <p className="text-red-600 text-xs mt-1">{errors.premisesType}</p>}
                </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3 bg-white p-3 rounded-lg border border-gray-100">
                <input
                    type="checkbox"
                    id="privacy"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                    I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Privacy Policy</a> and consent to having my address checked against network provider databases.
                </label>
            </div>
            {errors.privacy && <p className="text-red-600 text-sm">{errors.privacy}</p>}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button type="submit" size="lg" className="w-full flex-1 font-bold text-lg shadow-lg shadow-blue-900/10" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Checking Coverage...' : 'Check Availability'}
                </Button>
                <Button 
                    type="button" 
                    onClick={handleWhatsAppSubmit} 
                    size="lg" 
                    className="w-full sm:flex-1 font-semibold bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                >
                    <WhatsAppSolid className="w-6 h-6 mr-2" />
                    WhatsApp
                </Button>
            </div>
        </form>
    );
}

export default CoverageCheckForm;
