
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, WhatsAppSolid, SimCard, Signal, Zap, Wifi } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Modal from './Modal';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

interface Plan {
    name: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

const dataPlans: Plan[] = [
    {
        name: "MTN 10GB",
        price: "149",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"],
        isPopular: true
    },
    {
        name: "MTN 20GB",
        price: "199",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"]
    },
    {
        name: "MTN 30GB",
        price: "229",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"]
    },
    {
        name: "MTN 40GB",
        price: "249",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"]
    },
    {
        name: "MTN 50GB",
        price: "295",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"]
    },
    {
        name: "MTN 100GB",
        price: "390",
        features: ["Sim Card Only", "LTE/4G/5G Speed", "Use on any device"]
    }
];

const southAfricanProvinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

interface OrderFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    streetAddress: string;
    suburb: string;
    city: string;
    postalCode: string;
    province: string;
    mtnNumber: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    streetAddress?: string;
    city?: string;
    postalCode?: string;
    province?: string;
    mtnNumber?: string;
    terms?: string;
}

const OrderForm: React.FC<{ plan: Plan; onClose: () => void }> = ({ plan, onClose }) => {
    const [orderType, setOrderType] = useState<'new_sim' | 'existing_sim'>('new_sim');
    const [formData, setFormData] = useState<OrderFormData>({ 
        name: '', email: '', phone: '', company: '', 
        streetAddress: '', suburb: '', city: '', postalCode: '', province: '',
        mtnNumber: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const activationFee = orderType === 'new_sim' ? 99 : 0;
    const planPrice = parseInt(plan.price);
    const totalDue = activationFee + planPrice;

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        
        if (orderType === 'new_sim') {
            if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required.";
            if (!formData.city.trim()) newErrors.city = "City is required.";
            if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required.";
            if (!formData.province) newErrors.province = "Please select a province.";
        } else {
            if (!formData.mtnNumber.trim()) newErrors.mtnNumber = "MTN Number is required.";
             // Basic validation for SA number
            if (formData.mtnNumber.trim().length < 10) newErrors.mtnNumber = "Please enter a valid MTN number.";
        }

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
                    order_type: orderType === 'new_sim' ? 'New SIM Card' : 'Topup Existing SIM',
                    mtn_number_to_load: orderType === 'existing_sim' ? formData.mtnNumber : 'N/A',
                    plan_selection: `${plan.name} (R${plan.price}/month)`,
                    activation_fee: `R${activationFee}`,
                    total_signup_cost: `R${totalDue}`,
                    _subject: `New MTN Data Order: ${plan.name} (${orderType === 'new_sim' ? 'New SIM' : 'Existing'})`
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

        let text = `*New MTN Data Order*\n\n` +
            `*Type:* ${orderType === 'new_sim' ? 'New SIM Card' : 'Load Existing SIM'}\n` +
            `*Plan:* ${plan.name} (R${plan.price}/month)\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n`;

        if (orderType === 'new_sim') {
            text += `*Address:* ${formData.streetAddress}, ${formData.suburb}, ${formData.city}, ${formData.province}, ${formData.postalCode}`;
        } else {
            text += `*MTN Number to Load:* ${formData.mtnNumber}`;
        }

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
            <div className="text-center p-6 bg-blue-100 text-brand-blue rounded-lg">
                <div>
                    <h3 className="font-semibold text-lg">Thank You!</h3>
                    <p>Your order for the {plan.name} plan has been received. Our team will contact you shortly to finalize details.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {status === 'error' && <p className="text-red-600 text-center bg-red-50 p-2 rounded-md text-sm">Something went wrong. Please try again.</p>}
                    
                    <div className="md:hidden bg-blue-50 p-3 rounded-lg mb-4 text-sm border border-blue-100 flex justify-between items-center">
                        <span className="font-semibold text-brand-blue">{plan.name}</span>
                        <span className="font-bold">Total: R{totalDue}.00</span>
                    </div>

                    <div>
                        <Label className="mb-1.5 text-xs uppercase text-gray-500 font-bold tracking-wide">Order Type</Label>
                        <div className="grid grid-cols-2 gap-3">
                            <div 
                                onClick={() => setOrderType('new_sim')}
                                className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${orderType === 'new_sim' ? 'border-[#FFCB05] bg-yellow-50 ring-1 ring-[#FFCB05]' : 'border-gray-200 hover:bg-gray-50'}`}
                            >
                                <span className="font-bold text-sm block">New SIM Card</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wide">+ R99 Activation</span>
                            </div>
                            <div 
                                onClick={() => setOrderType('existing_sim')}
                                className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${orderType === 'existing_sim' ? 'border-[#FFCB05] bg-yellow-50 ring-1 ring-[#FFCB05]' : 'border-gray-200 hover:bg-gray-50'}`}
                            >
                                <span className="font-bold text-sm block">Existing SIM</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wide">No Activation Fee</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="name" className="text-xs mb-1">Full Name</Label>
                                <Input id="name" value={formData.name} onChange={handleChange} className={`h-9 ${errors.name ? 'border-red-500' : ''}`} aria-invalid={!!errors.name} />
                                {errors.name && <p className="text-red-600 text-xs mt-0.5">{errors.name}</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-xs mb-1">Phone Number</Label>
                                <Input id="phone" value={formData.phone} onChange={handleChange} className={`h-9 ${errors.phone ? 'border-red-500' : ''}`} aria-invalid={!!errors.phone} />
                                {errors.phone && <p className="text-red-600 text-xs mt-0.5">{errors.phone}</p>}
                            </div>
                        </div>
                        
                        <div>
                            <Label htmlFor="email" className="text-xs mb-1">Email Address</Label>
                            <Input id="email" type="email" value={formData.email} onChange={handleChange} className={`h-9 ${errors.email ? 'border-red-500' : ''}`} aria-invalid={!!errors.email} />
                            {errors.email && <p className="text-red-600 text-xs mt-0.5">{errors.email}</p>}
                        </div>

                         <div>
                            <Label htmlFor="company" className="text-xs mb-1">Company (Optional)</Label>
                            <Input id="company" value={formData.company} onChange={handleChange} className="h-9" />
                        </div>
                    </div>

                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                    </div>
                    
                    {orderType === 'new_sim' ? (
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-gray-800">Delivery Address</h3>
                            <div>
                                <Label htmlFor="streetAddress" className="text-xs mb-1">Street Address</Label>
                                <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} className={`h-9 ${errors.streetAddress ? 'border-red-500' : ''}`} placeholder="e.g., 123 Main Street" aria-invalid={!!errors.streetAddress} />
                                {errors.streetAddress && <p className="text-red-600 text-xs mt-0.5">{errors.streetAddress}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label htmlFor="suburb" className="text-xs mb-1">Suburb</Label>
                                    <Input id="suburb" value={formData.suburb} onChange={handleChange} className="h-9" placeholder="Optional" />
                                </div>
                                <div>
                                    <Label htmlFor="city" className="text-xs mb-1">City</Label>
                                    <Input id="city" value={formData.city} onChange={handleChange} className={`h-9 ${errors.city ? 'border-red-500' : ''}`} aria-invalid={!!errors.city} />
                                </div>
                            </div>
                            {errors.city && <p className="text-red-600 text-xs">{errors.city}</p>}

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <Label htmlFor="province" className="text-xs mb-1">Province</Label>
                                    <select id="province" value={formData.province} onChange={handleChange} className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${errors.province ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.province}>
                                        <option value="">Select...</option>
                                        {southAfricanProvinces.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <Label htmlFor="postalCode" className="text-xs mb-1">Postal Code</Label>
                                    <Input id="postalCode" value={formData.postalCode} onChange={handleChange} className={`h-9 ${errors.postalCode ? 'border-red-500' : ''}`} placeholder="Code" aria-invalid={!!errors.postalCode} />
                                </div>
                            </div>
                             {(errors.province || errors.postalCode) && <p className="text-red-600 text-xs">Address details required.</p>}
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-gray-800">SIM Details</h3>
                            <div>
                                <Label htmlFor="mtnNumber" className="text-xs mb-1">MTN Number to Load</Label>
                                <Input id="mtnNumber" value={formData.mtnNumber} onChange={handleChange} className={`h-9 ${errors.mtnNumber ? 'border-red-500' : ''}`} placeholder="083 123 4567" aria-invalid={!!errors.mtnNumber} />
                                {errors.mtnNumber && <p className="text-red-600 text-xs mt-0.5">{errors.mtnNumber}</p>}
                                <p className="text-[10px] text-gray-500 mt-1">Number must be active on MTN Prepaid.</p>
                            </div>
                        </div>
                    )}

                    <div className="flex items-start space-x-2 pt-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-1 h-3 w-3 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                        />
                        <label htmlFor="terms" className="text-xs text-gray-600">
                            I accept the <a href="https://www.iptone.co.za/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Terms and Conditions</a>
                        </label>
                    </div>
                    {errors.terms && <p className="text-red-600 text-xs mt-0.5">{errors.terms}</p>}

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <Button type="submit" size="default" className="w-full font-bold h-10 text-sm" disabled={status === 'submitting'}>
                            {status === 'submitting' ? '...' : 'Submit Order'}
                        </Button>
                        <Button 
                            type="button" 
                            onClick={handleWhatsAppSubmit} 
                            size="default" 
                            className="w-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent h-10 text-sm"
                        >
                            <WhatsAppSolid className="w-4 h-4 mr-2" />
                            WhatsApp
                        </Button>
                    </div>
                </form>
            </div>

            {/* Summary Block */}
            <div className="hidden md:flex bg-brand-blue text-white p-6 lg:p-8 rounded-xl flex-col h-full shadow-xl sticky top-24">
                <h3 className="text-xl lg:text-2xl font-bold text-brand-green">Order Summary</h3>
                <p className="text-blue-200 mb-6 text-sm lg:text-base">{plan.name}</p>
                <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600 text-sm lg:text-base">
                        <span>Activation & Delivery</span>
                        <span className="font-bold text-lg lg:text-xl">{activationFee > 0 ? `R${activationFee.toFixed(2)}` : 'Free'}</span>
                    </div>
                    <div className="flex justify-between items-baseline pb-2 border-b border-blue-600 text-sm lg:text-base">
                        <span>{plan.name} Package</span>
                        <span className="font-bold text-lg lg:text-xl">R{planPrice.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline pt-4">
                        <span className="text-base lg:text-lg font-semibold">Total Due Now</span>
                        <span className="font-bold text-xl lg:text-2xl text-brand-green">
                            R{totalDue.toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="font-semibold text-sm lg:text-base">
                        Monthly Recurring: R{planPrice.toFixed(2)}
                    </p>
                    <p className="mt-4 text-xs text-blue-200">Submit the form to claim this offer. Our team will contact you to finalize details.</p>
                </div>
            </div>
        </div>
    );
};

const MTNDataSimPage: React.FC = () => {
  const features = [
    "Reliable Nationwide Coverage",
    "Large Data Bundles (Prepaid or Top-up)",
    "APN Solutions Available",
    "Ideal for Mobile Workforce",
    "Perfect for IoT & M2M Devices",
    "Centralized Billing & Management",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleOrderClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <Hero
        title={
            <>
                Data That Moves <br/>
                <span className="text-[#FFCB05]">With You.</span>
            </>
        }
        subtitle="Connect your tablets, routers, and IoT devices to South Africa's best network. High-speed LTE & 5G data wherever you go."
        badge={
            <>
                <SimCard className="w-4 h-4" />
                <span>MTN Business Data</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#FFCB05]/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Card */}
                <div className="relative z-20 bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* SIM Card Graphic */}
                    <div className="aspect-[1.6/1] bg-gradient-to-br from-[#FFCB05] to-yellow-600 rounded-xl relative overflow-hidden mb-8 shadow-lg">
                        {/* Chip */}
                        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-12 h-10 bg-yellow-200 rounded-md grid grid-cols-2 gap-0.5 p-1 opacity-80">
                            <div className="bg-yellow-500/20 rounded-sm"></div>
                            <div className="bg-yellow-500/20 rounded-sm"></div>
                            <div className="bg-yellow-500/20 rounded-sm"></div>
                            <div className="bg-yellow-500/20 rounded-sm"></div>
                        </div>
                        {/* Logo/Text */}
                        <div className="absolute bottom-4 right-4 text-black font-extrabold text-2xl tracking-tighter">MTN</div>
                        <div className="absolute top-4 right-4 text-black/60 font-mono text-xs font-bold">5G / LTE</div>
                        {/* Abstract Lines */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm p-3 bg-gray-800 rounded-lg border border-gray-700">
                            <span className="text-gray-400 flex items-center"><Wifi className="w-4 h-4 mr-2" /> Network Status</span>
                            <span className="text-green-400 font-bold flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                Active
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm p-3 bg-gray-800 rounded-lg border border-gray-700">
                            <span className="text-gray-400 flex items-center"><Signal className="w-4 h-4 mr-2" /> Signal Strength</span>
                            <div className="flex space-x-1">
                                <div className="w-1 h-3 bg-[#FFCB05] rounded-full"></div>
                                <div className="w-1 h-4 bg-[#FFCB05] rounded-full"></div>
                                <div className="w-1 h-5 bg-[#FFCB05] rounded-full"></div>
                                <div className="w-1 h-6 bg-[#FFCB05] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#FFCB05] text-black hover:bg-white border-transparent font-bold shadow-lg shadow-[#FFCB05]/20">
                View Bundles
            </Button>
        </div>
      </Hero>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-black bg-[#FFCB05] mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Connectivity
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data That Works Where You Do</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Empower your team with reliable mobile data from MTN. Our data sim cards provide access to MTN's extensive network, ensuring you and your devices stay connected across South Africa.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Perfect for tablets, mobile routers, and IoT applications, we offer flexible data plans designed for home and business.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
             <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need a custom quote?</h3>
                <p className="text-gray-600 mb-6">Contact us for bulk orders or specialized APN requirements.</p>
                <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} variant="outline">View Pricing</Button>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">The benefits of using MTN Data Sims for your business.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-[#FFCB05] transition-colors duration-300">
                        <div className="bg-[#FFCB05] inline-block p-3 rounded-full mb-4 text-black">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-gray-200">{feature}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
                    Choose between a new Sim Card or topping up an existing one.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Choose Your Data Plan</h3>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                    Select from our range of flexible MTN Data plans designed to meet your connectivity needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {dataPlans.map(plan => (
                  <div key={plan.name} className={`rounded-2xl border bg-white flex flex-col p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 ${plan.isPopular ? 'border-[#FFCB05] border-2 relative' : 'border-gray-200'}`}>
                    {plan.isPopular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#FFCB05] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular Choice</div>}
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <p className="mt-4">
                        <span className="text-4xl font-extrabold tracking-tight text-gray-900">R{plan.price}</span><br/>
                        <span className="text-base font-medium text-gray-500">/month</span>
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-grow text-left">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-center"><Check className="w-5 h-5 text-[#FFCB05] mr-2 shrink-0"/><span>{feature}</span></li>
                      ))}
                    </ul>
                    <Button onClick={() => handleOrderClick(plan)} className={`mt-8 w-full font-bold ${plan.isPopular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Order Now</Button>
                </div>
              ))}
            </div>
        </div>
      </section>

       <CtaSection />
       
       {isModalOpen && selectedPlan && (
          <Modal title={`Order ${selectedPlan.name}`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-4xl">
             <OrderForm plan={selectedPlan} onClose={() => setIsModalOpen(false)} />
          </Modal>
      )}
    </>
  );
};

export default MTNDataSimPage;
