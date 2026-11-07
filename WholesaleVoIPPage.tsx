
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, ChevronRight, WhatsAppSolid } from './components/icons';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Textarea } from './components/Textarea';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { FORMSPREE_ENDPOINT } from './config';

interface FormData {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    website: string;
    businessDescription: string;
    monthlyMinutes: string;
}

interface FormErrors {
    companyName?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    businessDescription?: string;
    monthlyMinutes?: string;
    privacy?: string;
}

const WholesaleVoIPPage: React.FC = () => {
    const features = [
        "Carrier-Grade Infrastructure",
        "Competitive Tier-1 Call Rates",
        "White-Label Platform Options",
        "Comprehensive Billing & Management Portal",
        "Full API Access for Integration",
        "Dedicated Partner Support",
    ];
    
    const navigate = useNavigation();

    const [formData, setFormData] = useState<FormData>({
        companyName: '', contactName: '', email: '', phone: '', website: '', businessDescription: '', monthlyMinutes: ''
    });
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
        if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.businessDescription.trim()) newErrors.businessDescription = "Business description is required.";
        if (!formData.monthlyMinutes) newErrors.monthlyMinutes = "Please select an estimated volume.";
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Wholesale Partner Application: ${formData.companyName}`
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

        const text = `*New Wholesale Partner Application*\n\n` +
            `*Company:* ${formData.companyName}\n` +
            `*Contact:* ${formData.contactName}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Website:* ${formData.website}\n` +
            `*Minutes Volume:* ${formData.monthlyMinutes}\n` +
            `*Description:* ${formData.businessDescription}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    return (
        <>
            <Hero
                title="Wholesale VoIP"
                subtitle="Power your own telecommunication services with our robust, reliable, and scalable wholesale VoIP platform. The perfect solution for IT providers, resellers, and interconnect carriers."
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a VoIP Provider</h2>
                    <p className="text-lg text-gray-600 mb-6 mx-auto max-w-3xl">
                        Leverage our state-of-the-art infrastructure to offer high-quality VoIP services to your own clients. Our wholesale platform gives you the tools, reliability, and competitive pricing you need to build a successful communications business without the massive investment in hardware and network management.
                    </p>
                    <p className="text-lg text-gray-600 mx-auto max-w-3xl">
                        Whether you want to resell our services under your own brand or integrate our voice network into your existing products, our flexible partner programs are designed to help you succeed. We provide the backend, so you can focus on your customers.
                    </p>
                </div>
            </section>
            
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">VoIP Billing Platform - Softswitch – Wholesale Voice Rates</h2>
                            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">Not to be confused with an IP PBX, our VoIP management system delivers robust and adaptable VoIP Softswitch features.</p>
                             <Button onClick={() => navigate('/services/wholesale-voip/billing-platform')} size="lg" className="font-semibold shadow-sm hover:shadow-md transition-shadow">
                                Learn More <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">The tools and support you need to build your business.</p>
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
            
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-200">
                        {status === 'success' ? (
                            <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
                                <h3 className="font-semibold text-lg">Thank You for Applying!</h3>
                                <p>Your partner application has been received. Our wholesale team will review your information and contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again or contact us directly.</p>}
                                <h2 className="text-3xl font-bold text-gray-900 text-center">Become a Partner</h2>
                                <p className="text-gray-600 mt-4 mb-8 text-center">Fill out the form below to apply for our Wholesale Partner Program.</p>
                                
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <Input id="companyName" value={formData.companyName} onChange={handleChange} className={errors.companyName ? 'border-red-500' : ''} aria-invalid={!!errors.companyName} aria-describedby={errors.companyName ? 'ws-company-error' : undefined} />
                                        {errors.companyName && <p id="ws-company-error" className="text-red-600 text-sm mt-1">{errors.companyName}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="contactName">Contact Name</Label>
                                        <Input id="contactName" value={formData.contactName} onChange={handleChange} className={errors.contactName ? 'border-red-500' : ''} aria-invalid={!!errors.contactName} aria-describedby={errors.contactName ? 'ws-contact-error' : undefined} />
                                        {errors.contactName && <p id="ws-contact-error" className="text-red-600 text-sm mt-1">{errors.contactName}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ws-email-error' : undefined} />
                                        {errors.email && <p id="ws-email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'ws-phone-error' : undefined} />
                                        {errors.phone && <p id="ws-phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="website">Website (Optional)</Label>
                                    <Input id="website" value={formData.website} onChange={handleChange} />
                                </div>
                                <div>
                                    <Label htmlFor="businessDescription">Tell us about your business</Label>
                                    <Textarea id="businessDescription" value={formData.businessDescription} onChange={handleChange} rows={4} className={errors.businessDescription ? 'border-red-500' : ''} aria-invalid={!!errors.businessDescription} aria-describedby={errors.businessDescription ? 'ws-desc-error' : undefined} />
                                    {errors.businessDescription && <p id="ws-desc-error" className="text-red-600 text-sm mt-1">{errors.businessDescription}</p>}
                                </div>
                                 <div>
                                    <Label htmlFor="monthlyMinutes">Estimated Monthly Voice Minutes</Label>
                                    <select id="monthlyMinutes" value={formData.monthlyMinutes} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.monthlyMinutes ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.monthlyMinutes} aria-describedby={errors.monthlyMinutes ? 'ws-minutes-error' : undefined}>
                                        <option value="">Please select...</option>
                                        <option value="0-50k">0 - 50,000</option>
                                        <option value="50k-250k">50,001 - 250,000</option>
                                        <option value="250k-1m">250,001 - 1,000,000</option>
                                        <option value="1m+">1,000,000+</option>
                                    </select>
                                    {errors.monthlyMinutes && <p id="ws-minutes-error" className="text-red-600 text-sm mt-1">{errors.monthlyMinutes}</p>}
                                </div>

                                <div className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        checked={acceptedPrivacy}
                                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">
                                        I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Privacy Policy</a>
                                    </label>
                                </div>
                                {errors.privacy && <p className="text-red-600 text-sm mt-1">{errors.privacy}</p>}

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button type="submit" size="lg" className="w-full font-semibold flex-1" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Submitting Application...' : 'Apply Now'}
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
                        )}
                    </div>
                </div>
            </section>
            
            <CtaSection />
        </>
    );
};

export default WholesaleVoIPPage;
