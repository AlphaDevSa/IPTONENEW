
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import * as analytics from './analytics';

interface FormData {
    name: string;
    email: string;
    phone: string;
    domain: string;
    currentProvider: string;
    websiteCount: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    domain?: string;
    privacy?: string;
    websiteCount?: string;
}

const MigrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        domain: '',
        currentProvider: '',
        websiteCount: '1'
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
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.domain.trim()) newErrors.domain = "Domain name is required.";
        if (!formData.websiteCount || parseInt(formData.websiteCount) < 1) newErrors.websiteCount = "Please enter a valid number.";
        if (!acceptedPrivacy) newErrors.privacy = "You must accept the terms.";
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
                    _subject: `New Migration Request: ${formData.domain} (${formData.websiteCount} sites)`
                }),
            });

            if (response.ok) {
                setStatus('success');
                analytics.event({
                    action: 'submit_form',
                    category: 'Migration',
                    label: formData.domain,
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-8 h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received</h3>
                <p className="text-gray-600 mb-6">We'll analyze your current site(s) and contact you shortly to schedule the move.</p>
                <Button onClick={() => window.location.reload()} variant="outline">Start New Request</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {status === 'error' && <p className="text-red-600 text-sm bg-red-50 p-2 rounded">Submission failed. Please try again.</p>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} />
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>
            </div>

            <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <Label htmlFor="domain">Primary Domain Name</Label>
                    <Input id="domain" placeholder="example.co.za" value={formData.domain} onChange={handleChange} className={errors.domain ? 'border-red-500' : ''} />
                    {errors.domain && <p className="text-red-600 text-xs mt-1">{errors.domain}</p>}
                </div>
                <div>
                    <Label htmlFor="websiteCount">How many sites?</Label>
                    <Input id="websiteCount" type="number" min="1" value={formData.websiteCount} onChange={handleChange} className={errors.websiteCount ? 'border-red-500' : ''} />
                    {errors.websiteCount && <p className="text-red-600 text-xs mt-1">{errors.websiteCount}</p>}
                </div>
            </div>

            <div>
                <Label htmlFor="currentProvider">Current Host (Optional)</Label>
                <Input id="currentProvider" placeholder="e.g. GoDaddy, Afrihost" value={formData.currentProvider} onChange={handleChange} />
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
                    I agree to the Terms & Privacy Policy.
                </label>
            </div>
            {errors.privacy && <p className="text-red-600 text-xs">{errors.privacy}</p>}

            <Button type="submit" className="w-full font-bold" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Submit Migration Request'}
            </Button>
        </form>
    );
};

export default MigrationForm;
