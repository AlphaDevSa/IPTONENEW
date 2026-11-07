
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, WhatsAppSolid, Shield, Headset, Settings, Phone, Users, Zap, Server, Activity } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

interface FormData {
    name: string;
    email: string;
    contactNumber: string;
    whatsappNumber: string;
    company: string;
    extensions: string;
    areaCode: string;
    numberRental: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    contactNumber?: string;
    company?: string;
    extensions?: string;
    areaCode?: string;
    numberRental?: string;
    terms?: string;
}

const areaCodes = "011,010,012,013,014,015,016,017,018,021,022,023,027,028,031,032,033,034,035,036,039,041,042,043,044,045,046,047,048,049,051,053,054,056,057,058,086,087".split(',');

const rentalOptions = [
    "Monthly Line Rental - R49 Per Month",
    "Yearly Line Rental - R199 Per Year"
];

const getPriceFromOption = (option: string | undefined): number => {
    if (!option) return 0;
    const match = option.match(/R\s?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
};

const IPTONEPBXPage: React.FC = () => {
  const managedFeatures = [
    {
        icon: <Headset className="w-6 h-6 text-white" />,
        title: "Dedicated Account Manager",
        description: "Direct access to a human who knows your business. No call center queues.",
        bg: "bg-brand-blue"
    },
    {
        icon: <Settings className="w-6 h-6 text-white" />,
        title: "Bespoke Configuration",
        description: "We configure your IVR, hunt groups, and call flows exactly how you want them.",
        bg: "bg-brand-green"
    },
    {
        icon: <Shield className="w-6 h-6 text-white" />,
        title: "Proactive Security",
        description: "Enterprise-grade firewalls and fraud detection monitoring 24/7.",
        bg: "bg-gray-900"
    }
  ];

  const technicalFeatures = [
    "99.99% Uptime Guarantee",
    "Voice Recording (Compliance)",
    "Mobile App Included",
    "Voicemail to Email",
    "Time-Based Routing",
    "Real-time Call Logs",
    "Music on Hold",
    "Conference Rooms",
    "Digital Receptionist (IVR)"
  ];
  
    const [formData, setFormData] = useState<FormData>({ 
        name: '', email: '', contactNumber: '', whatsappNumber: '', company: '', 
        extensions: '1', areaCode: '', numberRental: '' 
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
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
        if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
        if (!formData.extensions || parseInt(formData.extensions) < 1) newErrors.extensions = "Please enter a valid number of extensions (minimum 1).";
        if (!formData.areaCode) newErrors.areaCode = "Please select an area code.";
        if (!formData.numberRental) newErrors.numberRental = "Please select a rental option.";
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
                    _subject: `New IPT One PBX Sign-Up: ${formData.company}`,
                    extensions_cost: `R${extensionCount * 199}.00`,
                    rental_option: formData.numberRental,
                    total_due_now: `R${totalDueNow}.00`
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', contactNumber: '', whatsappNumber: '', company: '', extensions: '1', areaCode: '', numberRental: '' });
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

        const text = `*New IPT One PBX Sign-Up*\n\n` +
            `*Company:* ${formData.company}\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.contactNumber}\n` +
            `*WhatsApp:* ${formData.whatsappNumber}\n` +
            `*Extensions:* ${formData.extensions}\n` +
            `*Area Code:* ${formData.areaCode}\n` +
            `*Rental:* ${formData.numberRental}`;

        window.open(`https://wa.me/27836000152?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    // Calculation Logic
    const extensionCount = parseInt(formData.extensions) || 0;
    const pricePerUser = 199;
    const extensionsCost = extensionCount * pricePerUser;
    
    const rentalPrice = getPriceFromOption(formData.numberRental);
    const isRentalYearly = formData.numberRental.toLowerCase().includes('year');
    
    const totalDueNow = extensionsCost + rentalPrice;
    const monthlyRecurring = extensionsCost + (isRentalYearly ? 0 : rentalPrice);

  return (
    <>
      <Hero
        title={
            <>
                Your Voice, <span className="text-brand-green">Fully Managed</span>
            </>
        }
        subtitle="Experience the peace of mind that comes with a White-Glove PBX service. We handle the configuration, security, and maintenance. You just pick up the phone."
        badge={
            <>
                <Headset className="w-4 h-4" />
                <span>White-Glove Service</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Management Console */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Shield className="w-5 h-5 text-brand-green" />
                            <span className="text-sm font-bold text-white">IPT Managed Core</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500 font-bold">HEALTHY</span>
                        </div>
                    </div>

                    {/* Activity Log - Simulating "We do the work" */}
                    <div className="space-y-4">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Recent Managed Actions</p>
                        
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 min-w-[4px] h-[4px] rounded-full bg-blue-500"></div>
                            <div>
                                <p className="text-xs text-gray-300">Firmware Update Applied</p>
                                <p className="text-[10px] text-gray-500">System • 02:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 min-w-[4px] h-[4px] rounded-full bg-purple-500"></div>
                            <div>
                                <p className="text-xs text-gray-300">Holiday IVR Configured</p>
                                <p className="text-[10px] text-gray-500">Support Team • Yesterday</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 min-w-[4px] h-[4px] rounded-full bg-green-500"></div>
                            <div>
                                <p className="text-xs text-gray-300">New User Extension Added</p>
                                <p className="text-[10px] text-gray-500">Admin • 2 days ago</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Stats */}
                    <div className="mt-6 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-3">
                            <p className="text-[10px] text-gray-400">Uptime</p>
                            <p className="text-white font-mono font-bold">100%</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                            <p className="text-[10px] text-gray-400">Threats Blocked</p>
                            <p className="text-brand-green font-mono font-bold">24</p>
                        </div>
                    </div>
                </div>

                {/* Floating Card: Dedicated Support */}
                <div className="absolute -top-4 -right-4 z-30 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3 animate-float-slow">
                    <div className="bg-brand-blue/10 p-2 rounded-lg">
                        <Headset className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Support</p>
                        <p className="text-xs font-bold text-gray-900">Dedicated Agent</p>
                    </div>
                </div>

                {/* Floating Card: Configuration */}
                <div className="absolute -bottom-6 -left-2 z-30 bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-700 flex items-center space-x-3 animate-float-reverse">
                    <Settings className="w-5 h-5 text-white" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Config</p>
                        <p className="text-xs font-bold text-white">Custom Tailored</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Get Started
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                View Features
            </Button>
        </div>
      </Hero>

      {/* Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">The White-Glove Difference</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Why Choose Managed?</h2>
                <p className="text-lg text-gray-600">
                    Most cloud PBX providers give you a login and wish you luck. At IPT One, we become your telecoms department.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {managedFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md ${feat.bg}`}>
                            {feat.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                        <p className="text-gray-600">{feat.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Hardware / Feature Split */}
      <section id="features" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Hardware Ecosystem</h2>
                      <p className="text-lg text-gray-600 mb-8">
                          The IPT One PBX is optimized for the world's leading VoIP hardware. While you can use our mobile app or softphone, we highly recommend Fanvil IP phones for the best desk experience.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                              <Phone className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                              <span className="font-bold text-gray-800">Fanvil IP Phones</span>
                              <p className="text-xs text-gray-500">HD Desk Phones</p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                              <Headset className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                              <span className="font-bold text-gray-800">Professional Headsets</span>
                              <p className="text-xs text-gray-500">Noise Cancelling</p>
                          </div>
                      </div>
                      <p className="text-sm text-gray-500 italic">*Hardware sold separately or available on rental finance for qualifying businesses.</p>
                  </div>
                  
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">System Capabilities</h3>
                      <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                          {technicalFeatures.map((item, idx) => (
                              <div key={idx} className="flex items-center">
                                  <CheckCircle className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Order Form Section */}
      <section className="py-20 bg-white scroll-mt-20" id="order">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Connected</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fill out the form below to sign up. Our team will contact you to discuss any hardware needs and schedule your setup.</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-2 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100">
                      {status === 'success' ? (
                          <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-white text-brand-blue rounded-xl border border-blue-100">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                  <Check className="w-8 h-8 text-brand-blue" />
                              </div>
                              <h3 className="font-bold text-2xl mb-2">Thank You!</h3>
                              <p className="text-lg text-gray-600">Your sign-up request has been received. Our team will contact you shortly to complete the onboarding process.</p>
                              <Button onClick={() => window.location.reload()} variant="outline" className="mt-8">
                                  Submit Another
                              </Button>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                              {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-3 rounded-md">Something went wrong. Please try again or contact us directly.</p>}
                              
                              {/* Contact Details Section */}
                              <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 uppercase tracking-wider text-xs">
                                      Contact Information
                                  </h3>
                                  <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                          <Label htmlFor="name">Full Name</Label>
                                          <Input id="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-red-500' : 'bg-white'} aria-invalid={!!errors.name} />
                                          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                      </div>
                                      <div>
                                          <Label htmlFor="company">Company</Label>
                                          <Input id="company" value={formData.company} onChange={handleChange} className={errors.company ? 'border-red-500' : 'bg-white'} aria-invalid={!!errors.company} />
                                          {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
                                      </div>
                                      <div>
                                          <Label htmlFor="email">Email Address</Label>
                                          <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : 'bg-white'} aria-invalid={!!errors.email} />
                                          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                      </div>
                                       <div>
                                          <Label htmlFor="contactNumber">Contact Number</Label>
                                          <Input id="contactNumber" value={formData.contactNumber} onChange={handleChange} className={errors.contactNumber ? 'border-red-500' : 'bg-white'} aria-invalid={!!errors.contactNumber} />
                                          {errors.contactNumber && <p className="text-red-600 text-sm mt-1">{errors.contactNumber}</p>}
                                      </div>
                                      <div>
                                          <Label htmlFor="whatsappNumber">WhatsApp Number (Optional)</Label>
                                          <Input id="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="bg-white" placeholder="+27..." />
                                      </div>
                                  </div>
                              </div>

                              {/* Configuration Section */}
                              <div>
                                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 uppercase tracking-wider text-xs">
                                      System Configuration
                                  </h3>
                                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                                      <div>
                                          <Label htmlFor="extensions">Number of Extensions Required</Label>
                                          <Input 
                                              id="extensions" 
                                              type="number" 
                                              min="1" 
                                              value={formData.extensions} 
                                              onChange={handleChange} 
                                              className={errors.extensions ? 'border-red-500' : 'bg-white'} 
                                              aria-invalid={!!errors.extensions}
                                          />
                                          {errors.extensions && <p className="text-red-600 text-sm mt-1">{errors.extensions}</p>}
                                      </div>
                                      <div>
                                          <Label htmlFor="areaCode">Area Dialing Code Required</Label>
                                          <select id="areaCode" value={formData.areaCode} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.areaCode ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.areaCode}>
                                              <option value="">Select an Area Code...</option>
                                              {areaCodes.map(code => <option key={code} value={code}>{code}</option>)}
                                          </select>
                                          {errors.areaCode && <p className="text-red-600 text-sm mt-1">{errors.areaCode}</p>}
                                      </div>
                                  </div>

                                  <div>
                                      <Label htmlFor="numberRental">Landline Rental</Label>
                                      <select id="numberRental" value={formData.numberRental} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRental ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRental}>
                                          <option value="">Select Rental Option...</option>
                                          {rentalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                      </select>
                                      {errors.numberRental && <p className="text-red-600 text-sm mt-1">{errors.numberRental}</p>}
                                  </div>
                              </div>

                              <div className="pt-6 border-t border-gray-200">
                                  <div className="flex items-start space-x-2 mb-6">
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
                                  {errors.terms && <p className="text-red-600 text-sm -mt-4 mb-6">{errors.terms}</p>}
                                  
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Button type="submit" size="lg" className="w-full font-bold flex-1" disabled={status === 'submitting'}>
                                          {status === 'submitting' ? 'Processing...' : 'Complete Sign Up'}
                                      </Button>
                                      <Button 
                                          type="button" 
                                          onClick={handleWhatsAppSubmit} 
                                          size="lg" 
                                          className="w-full font-bold flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                                      >
                                          <WhatsAppSolid className="w-5 h-5 mr-2" />
                                          WhatsApp
                                      </Button>
                                  </div>
                              </div>
                          </form>
                      )}
                  </div>

                  {/* Order Summary Sticky Card */}
                  <div className="lg:col-span-1">
                      <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-2xl sticky top-24">
                          <h3 className="text-2xl font-bold text-brand-green">Order Summary</h3>
                          <p className="text-blue-200 mb-6">IPT One PBX</p>
                          <div className="space-y-4">
                              <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                                  <span>Extensions ({extensionCount})</span>
                                  <span className="font-bold text-xl">R{extensionsCost}.00</span>
                              </div>
                              <div className="flex justify-between items-baseline pb-2 border-b border-blue-600">
                                  <span>Landline Rental</span>
                                  <span className="font-bold text-xl">{rentalPrice > 0 ? `R${rentalPrice}.00` : '-'}</span>
                              </div>
                              
                              <div className="flex justify-between items-baseline pt-4">
                                  <span className="text-lg font-semibold">Total Due Now</span>
                                  <span className="font-bold text-2xl text-brand-green">
                                      R{totalDueNow}.00
                                  </span>
                              </div>

                              <div className="mt-4 pt-4 border-t border-blue-600 text-sm">
                                <p className="font-bold mb-1 text-brand-green">Fair Usage Policy Included</p>
                                <ul className="space-y-1 text-blue-100 list-disc pl-4">
                                    <li>Unlimited Landline to Landline Calling.</li>
                                    <li>500 Minutes Landline to Mobile Calling (per user).</li>
                                </ul>
                              </div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-blue-600 text-center">
                              <p className="font-semibold text-lg mb-2">
                                  Monthly Recurring: R{monthlyRecurring}.00
                              </p>
                              <p className="text-xs text-blue-200">Submit the form to secure your plan. Our team will contact you to finalize setup.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default IPTONEPBXPage;
