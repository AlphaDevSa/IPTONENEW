
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Textarea } from './components/Textarea';
import { FORMSPREE_ENDPOINT } from './config';
import { WhatsAppSolid } from './components/icons';
import * as analytics from './analytics';
import { getAffiliateTrackingFields, saveAffiliateLead } from './affiliateTracking';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  privacy?: string;
}

const interestOptions = [
    "Landline Number",
    "Hosted PBX",
    "SIP Trunks",
    "Wholesale VoIP",
    "Call Center Solutions",
    "Connectivity",
    "Web Hosting",
    "Website Design",
    "Reseller"
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number.";
    }
    
    if (!formData.interest) {
      newErrors.interest = "Please select your interest.";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    if (!acceptedPrivacy) {
        newErrors.privacy = "You must accept the privacy policy.";
    }
    
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
    const affiliateMeta = getAffiliateTrackingFields();
    
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                ...affiliateMeta,
                _subject: `New Website Inquiry: ${formData.interest}`
            }),
        });

        if (response.ok) {
            setStatus('success');
            saveAffiliateLead({
              type: 'contact',
              source: affiliateMeta.affiliate_source || 'direct',
              ref: affiliateMeta.affiliate_ref || undefined,
              affiliate: affiliateMeta.affiliate_ref || undefined,
              campaign: affiliateMeta.affiliate_campaign || undefined,
              page: window.location.pathname,
              name: formData.name,
              email: formData.email,
              interest: formData.interest,
              timestamp: Date.now(),
            });
            analytics.event({
              action: 'submit_form',
              category: 'Contact',
              label: formData.interest,
            });
            setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
            setAcceptedPrivacy(false);
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

    const affiliateMeta = getAffiliateTrackingFields();
    const text = `*New Website Inquiry*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Interest:* ${formData.interest}\n` +
        `*Message:* ${formData.message}\n` +
        (affiliateMeta.affiliate_source ? `*Affiliate Source:* ${affiliateMeta.affiliate_source}\n` : '') +
        (affiliateMeta.affiliate_ref ? `*Affiliate Ref:* ${affiliateMeta.affiliate_ref}\n` : '');

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/27836000152?text=${encodedText}`;
    
    // Track WhatsApp Click
    analytics.event({
      action: 'click_whatsapp',
      category: 'Contact',
      label: 'WhatsApp Submit',
    });

    window.open(whatsappUrl, '_blank');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      
      // Clear error for this field as the user types
      if(errors[id as keyof FormErrors]) {
        setErrors(prev => ({...prev, [id]: undefined}));
      }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
        <h3 className="font-semibold text-lg">Thank you!</h3>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="mt-4">Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again or contact us directly.</p>}
      
      <div>
        <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
        <Input 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name"
          className={errors.name ? 'border-red-500 focus:ring-red-500' : ''}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
        <Input 
          id="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="you@domain.com"
          className={errors.email ? 'border-red-500 focus:ring-red-500' : ''}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
        <Input 
          id="phone" 
          type="tel" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="+27 82 123 4567"
          className={errors.phone ? 'border-red-500 focus:ring-red-500' : ''}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>
      
      <div>
        <Label htmlFor="interest">I am interested in: <span className="text-red-500">*</span></Label>
        <select 
            id="interest" 
            value={formData.interest} 
            onChange={handleChange} 
            className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.interest ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-blue'}`}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? 'interest-error' : undefined}
        >
            <option value="">Please select...</option>
            {interestOptions.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        {errors.interest && <p id="interest-error" className="text-red-600 text-sm mt-1">{errors.interest}</p>}
      </div>
      
      <div>
        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
        <Textarea 
          id="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="How can we assist you?" 
          rows={5} 
          className={errors.message ? 'border-red-500 focus:ring-red-500' : ''}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
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
            {status === 'submitting' ? 'Sending...' : 'Send Email'}
        </Button>
        <Button 
            type="button" 
            onClick={handleWhatsAppSubmit} 
            size="lg" 
            className="w-full font-semibold flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
        >
            <WhatsAppSolid className="w-5 h-5 mr-2" />
            Send via WhatsApp
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
