
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Textarea } from './components/Textarea';
import { FORMSPREE_ENDPOINT } from './config';
import { WhatsAppSolid } from './components/icons';
import * as analytics from './analytics';

interface ServiceInquiryFormProps {
    serviceName: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  extensions?: string;
  minutes?: string;
  agents?: string;
  mobileCli?: string;
  numberRotation?: string;
  numberRotationPackage?: string;
  privacy?: string;
}

const ServiceInquiryForm: React.FC<ServiceInquiryFormProps> = ({ serviceName }) => {
  const [formData, setFormData] = useState({ 
      name: "", 
      company: "", 
      email: "", 
      phone: "", 
      message: "",
      extensions: "",
      minutes: "",
      agents: "",
      mobileCli: "",
      numberRotation: "",
      numberRotationPackage: ""
  });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
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
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    if (serviceName === 'Call Center Solutions') {
        if (!formData.extensions) newErrors.extensions = "Please select the number of extensions.";
        if (!formData.minutes) newErrors.minutes = "Please select the estimated monthly minutes.";
        if (!formData.mobileCli) newErrors.mobileCli = "Please let us know if you require Mobile CLI Numbers.";
        if (!formData.numberRotation) newErrors.numberRotation = "Please let us know if you require Number rotation.";
    }
    if (serviceName === 'VitalPBX Platform') {
        if (!formData.extensions) newErrors.extensions = "Please select the number of extensions.";
    }
    if (serviceName === 'BPO and Outsourced Contact Centres') {
        if (!formData.agents) newErrors.agents = "Please select the number of agents / seats.";
        if (!formData.minutes) newErrors.minutes = "Please select the estimated monthly minutes.";
        if (!formData.mobileCli) newErrors.mobileCli = "Please let us know if you require Mobile CLI.";
        if (!formData.numberRotation) newErrors.numberRotation = "Please let us know if you require Number Rotation.";
    }
    if (serviceName === 'Number Rotation Inquiry') {
        if (!formData.numberRotationPackage) newErrors.numberRotationPackage = "Please select a package.";
    }
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
                _subject: `New Service Inquiry: ${serviceName}`
            }),
        });

        if (response.ok) {
            setStatus('success');
            // Track Form Submission
            analytics.event({
              action: 'submit_form',
              category: 'Service Inquiry',
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

    let text = `*New Service Inquiry: ${serviceName}*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Company:* ${formData.company}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n`;

    if (formData.extensions) text += `*Extensions:* ${formData.extensions}\n`;
    if (formData.agents) text += `*Agents / Seats:* ${formData.agents}\n`;
    if (formData.minutes) text += `*Minutes:* ${formData.minutes}\n`;
    if (formData.mobileCli) text += `*Mobile CLI:* ${formData.mobileCli}\n`;
    if (formData.numberRotation) text += `*Number Rotation:* ${formData.numberRotation}\n`;
    if (formData.numberRotationPackage) text += `*Number Rotation Package:* ${formData.numberRotationPackage}\n`;
    if (formData.message) text += `*Message:* ${formData.message}\n`;

    // Track WhatsApp Click
    analytics.event({
      action: 'click_whatsapp',
      category: 'Service Inquiry',
      label: serviceName,
    });

    window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      if(errors[id as keyof FormErrors]) {
        setErrors(prev => ({...prev, [id]: undefined}));
      }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg h-full flex items-center justify-center">
        <div>
            <h3 className="font-semibold text-lg">Thank you!</h3>
            <p>Your inquiry about {serviceName} has been received. Our team will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquire about {serviceName}</h2>
        <p className="text-gray-500 mb-8">Fill out the form and our team will get back to you with a personalized quote.</p>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again or contact us directly.</p>}
            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : ''} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'si-name-error' : undefined} />
                    {errors.name && <p id="si-name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                 <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value={formData.company} onChange={handleChange} className={errors.company ? 'border-red-500' : ''} aria-invalid={!!errors.company} aria-describedby={errors.company ? 'si-company-error' : undefined} />
                    {errors.company && <p id="si-company-error" className="text-red-600 text-sm mt-1">{errors.company}</p>}
                </div>
            </div>
             <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'si-email-error' : undefined} />
                    {errors.email && <p id="si-email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                 <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'si-phone-error' : undefined} />
                    {errors.phone && <p id="si-phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>
            </div>

            {serviceName === 'Call Center Solutions' && (
                <>
                    <div>
                        <Label htmlFor="extensions">How many Agents / Seats required?</Label>
                        <select id="extensions" value={formData.extensions} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.extensions ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.extensions}>
                            <option value="">Select an option...</option>
                            <option value="1-10">1 to 10</option>
                            <option value="11-25">11 to 25</option>
                            <option value="26-50">26 to 50</option>
                            <option value="51-100">51 to 100</option>
                            <option value="100+">100+</option>
                        </select>
                        {errors.extensions && <p className="text-red-600 text-sm mt-1">{errors.extensions}</p>}
                    </div>
                    <div>
                        <Label htmlFor="minutes">Estimated Monthly Minutes</Label>
                        <select id="minutes" value={formData.minutes} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minutes ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.minutes}>
                            <option value="">Select an option...</option>
                            <option value="0-5000">0 to 5000</option>
                            <option value="5001-10000">5001 to 10 000</option>
                            <option value="10001-25000">10 001 to 25 000</option>
                            <option value="25001-50000">25 001 to 50 000</option>
                            <option value="50000+">50 000+</option>
                        </select>
                        {errors.minutes && <p className="text-red-600 text-sm mt-1">{errors.minutes}</p>}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="mobileCli">Do you require Mobile CLI Numbers?</Label>
                            <select id="mobileCli" value={formData.mobileCli} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.mobileCli ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.mobileCli}>
                                <option value="">Select an option...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.mobileCli && <p className="text-red-600 text-sm mt-1">{errors.mobileCli}</p>}
                        </div>
                        <div>
                            <Label htmlFor="numberRotation">Do you require Number rotation?</Label>
                            <select id="numberRotation" value={formData.numberRotation} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRotation ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRotation}>
                                <option value="">Select an option...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.numberRotation && <p className="text-red-600 text-sm mt-1">{errors.numberRotation}</p>}
                        </div>
                    </div>
                </>
            )}

            {serviceName === 'VitalPBX Platform' && (
                <div>
                    <Label htmlFor="extensions">Extensions Required</Label>
                    <select id="extensions" value={formData.extensions} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.extensions ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.extensions}>
                        <option value="">Select an option...</option>
                        <option value="1-10">1 to 10</option>
                        <option value="11-20">11 to 20</option>
                        <option value="21-50">21 to 50</option>
                        <option value="51-100">51 to 100</option>
                        <option value="100+">100+</option>
                    </select>
                    {errors.extensions && <p className="text-red-600 text-sm mt-1">{errors.extensions}</p>}
                </div>
            )}

            {serviceName === 'Number Rotation Inquiry' && (
                <div>
                    <Label htmlFor="numberRotationPackage">Choose a Number Rotation package</Label>
                    <select id="numberRotationPackage" value={formData.numberRotationPackage} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRotationPackage ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRotationPackage}>
                        <option value="">Select an option...</option>
                        <option value="Mobi-caller 1 — 20 DID Pool — R2 159 / month">Mobi-caller 1 — 20 DID Pool — R2 159 / month</option>
                        <option value="Mobi-caller 2 — 50 DID Pool — R5 039 / month">Mobi-caller 2 — 50 DID Pool — R5 039 / month</option>
                        <option value="Mobi-caller 3 — 100 DID Pool — R8 629 / month">Mobi-caller 3 — 100 DID Pool — R8 629 / month</option>
                        <option value="Top-up DID's — 10 DID Pool — R1 439 / month until spammed">Top-up DID's — 10 DID Pool — R1 439 / month until spammed</option>
                        <option value="Mobi-caller 4 — 20 DID Pool — R3 019 / month">Mobi-caller 4 — 20 DID Pool — R3 019 / month</option>
                        <option value="Mobi-caller 5 — 50 DID Pool — R7 189 / month">Mobi-caller 5 — 50 DID Pool — R7 189 / month</option>
                        <option value="Mobi-caller 6 — 100 DID Pool — R12 939 / month">Mobi-caller 6 — 100 DID Pool — R12 939 / month</option>
                    </select>
                    {errors.numberRotationPackage && <p className="text-red-600 text-sm mt-1">{errors.numberRotationPackage}</p>}
                </div>
            )}

            {serviceName === 'BPO and Outsourced Contact Centres' && (
                <>
                    <div>
                        <Label htmlFor="agents">How many Agents / Seats required?</Label>
                        <select id="agents" value={formData.agents} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.agents ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.agents}>
                            <option value="">Select an option...</option>
                            <option value="1-10">1 to 10</option>
                            <option value="11-25">11 to 25</option>
                            <option value="26-50">26 to 50</option>
                            <option value="51-100">51 to 100</option>
                            <option value="101-250">101 to 250</option>
                            <option value="250+">250+</option>
                        </select>
                        {errors.agents && <p className="text-red-600 text-sm mt-1">{errors.agents}</p>}
                    </div>
                    <div>
                        <Label htmlFor="minutes">How many monthly minutes do you require?</Label>
                        <select id="minutes" value={formData.minutes} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minutes ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.minutes}>
                            <option value="">Select an option...</option>
                            <option value="0-5000">0 to 5000</option>
                            <option value="5001-10000">5001 to 10 000</option>
                            <option value="10001-25000">10 001 to 25 000</option>
                            <option value="25001-50000">25 001 to 50 000</option>
                            <option value="50001-100000">50 001 to 100 000</option>
                            <option value="100000+">100 000+</option>
                        </select>
                        {errors.minutes && <p className="text-red-600 text-sm mt-1">{errors.minutes}</p>}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="mobileCli">Do you require Mobile CLI?</Label>
                            <select id="mobileCli" value={formData.mobileCli} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.mobileCli ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.mobileCli}>
                                <option value="">Select an option...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.mobileCli && <p className="text-red-600 text-sm mt-1">{errors.mobileCli}</p>}
                        </div>
                        <div>
                            <Label htmlFor="numberRotation">Do you require Number Rotation?</Label>
                            <select id="numberRotation" value={formData.numberRotation} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRotation ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRotation}>
                                <option value="">Select an option...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errors.numberRotation && <p className="text-red-600 text-sm mt-1">{errors.numberRotation}</p>}
                        </div>
                    </div>
                </>
            )}

            <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} rows={4} className={errors.message ? 'border-red-500' : ''} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'si-message-error' : undefined} />
                {errors.message && <p id="si-message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
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
                    I accept the <a href="https://www.iptone.co.za/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Privacy Policy</a>
                </label>
            </div>
            {errors.privacy && <p className="text-red-600 text-sm mt-1">{errors.privacy}</p>}

            <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="w-full font-semibold flex-1" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Get a Quote'}
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
    </>
  );
};

export default ServiceInquiryForm;
