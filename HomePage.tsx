
import React, { useState } from 'react';
import { Button } from "./components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import { 
    ChevronRight, 
    Headset, 
    TrendingUp, 
    HardHat, 
    Tag, 
    CheckCircle, 
    WhatsAppSolid, 
    MapPin, 
    Wifi, 
    Phone, 
    Cloud,
    Tower,
    Server,
    Globe,
    Zap,
    Activity,
    Shield
} from "./components/icons";
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import Hero from './components/Hero';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';

interface FormErrors {
    name?: string;
    company?: string;
    email?: string;
    contactNumber?: string;
    whatsappNumber?: string;
    areaCode?: string;
    minuteBundle?: string;
    numberRental?: string;
    terms?: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigation();
  
  const trustLogos: { name: string; candidates: string[] }[] = [
    { name: '3CX',        candidates: ['/images/3cx.png', '/images/3cx.svg', '/images/3cx-logo.png'] },
    { name: 'Audiocodes', candidates: ['/images/audiocodes.png', '/images/audiocodes.svg', '/images/audiocodes-logo.png'] },
    { name: 'Bicom Systems', candidates: ['/images/bicom.png', '/images/bicom.svg', '/images/bicom-logo.png'] },
    { name: 'Vodia',      candidates: ['/images/Vodia.png', '/images/vodia.png', '/images/vodia.svg', '/images/vodia-logo.png'] },
    { name: 'Portsip',    candidates: ['/images/portsip.png', '/images/portsip.svg', '/images/portsip-logo.png'] },
    { name: 'Teltonika',  candidates: ['/images/teltonika.png', '/images/teltonika.svg', '/images/teltonika-logo.png'] },
    { name: 'Poly',       candidates: ['/images/polylogo.png', '/images/poly.svg', '/images/Poly_Logo.png', '/images/poly.png', '/images/poly-logo.png'] },
    { name: 'Fanvil',     candidates: ['/images/Fanvil.png', '/images/fanvil.png', '/images/fanvil.svg', '/images/fanvil-logo.png'] },
    { name: 'Epygi',      candidates: ['/images/Epygi_Logo.png', '/images/epygi.svg', '/images/epygi.png', '/images/epygi-logo.png'] },
    { name: 'Enreach',    candidates: ['/images/Enreach_Logo.png', '/images/enreach.svg', '/images/enreach.png', '/images/enreach-logo.png'] },
    { name: 'TP-Link',    candidates: ['/images/TP-Link.png', '/images/tp-link.png', '/images/tplink.svg', '/images/tplink-logo.png'] },
    { name: 'VitalPBX',   candidates: ['/images/vitalpbx.png', '/images/VitalPBX.png', '/images/VitalPBX_Logo-Colour.png', '/images/vitalpbx-logo.png'] },
    { name: 'Yealink',    candidates: ['/images/yealink.png', '/images/Yealink_Logo.png', '/images/yealink.svg', '/images/yealink-logo.png'] },
    { name: 'Callvault',  candidates: ['/images/callvault.png', '/images/CallVault-Colour-768x171-1-300x67.png', '/images/callvault.svg', '/images/callvault-logo.png'] },
    { name: 'Zoiper',     candidates: ['/images/zoiper.png', '/images/zoiper.svg', '/images/zoiper-logo.png'] },
  ];

  const coreServices = [
      {
          title: "Voice & Communication",
          description: "Crystal-clear Cloud PBX, Hosted PBX, VoIP, and SIP Trunking solutions designed for the modern hybrid workforce. Perfect for businesses of all sizes, from small startups to large enterprises looking for reliable business telephony in South Africa.",
          icon: <Phone className="w-8 h-8 text-white" />,
          color: "bg-blue-600",
          textColor: "text-blue-600",
          link: "/services/voip-solutions"
      },
      {
          title: "Connectivity Page",
          description: "Business Fibre Internet and LTE & 5G connectivity solutions designed to keep your organisation online with speed, reliability, and flexible coverage. Explore high-performance access options for offices, branches, remote teams, and home workers.",
          icon: <Wifi className="w-8 h-8 text-white" />,
          color: "bg-gray-800",
          textColor: "text-gray-800",
          link: "https://iptoneconnect.co.za"
      },
      {
          title: "Cloud & Digital",
          description: "Secure Web Hosting, Domain Registration, cPanel Hosting, WordPress Hosting, and Cloud infrastructure to power your digital presence. Local South African support with fast, reliable servers and 99.9% uptime guarantee.",
          icon: <Cloud className="w-8 h-8 text-white" />,
          color: "bg-brand-green",
          textColor: "text-brand-green",
          link: "/web-hosting"
      }
  ];

  const minuteBundles = [
    { name: "250 minutes", price: "99" },
    { name: "500 minutes", price: "199" },
    { name: "750 minutes", price: "289" },
    { name: "1000 minutes", price: "395" },
    { name: "2000 minutes", price: "790" },
    { name: "2500 minutes", price: "980" },
    { name: "5000 minutes", price: "1750" },
    { name: "10 000 minutes", price: "2950" },
  ];

  const rentalOptions = [
      "Monthly Line Rental - R49 Per Month",
      "Yearly Line Rental - R199 Per Year"
  ];

  // Landline Form Logic
  const [formData, setFormData] = useState({ name: '', company: '', email: '', contactNumber: '', whatsappNumber: '', areaCode: '', minuteBundle: '', numberRental: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const areaCodes = "010,012,013,014,015,016,017,018,021,022,023,027,028,031,032,033,034,035,036,039,041,042,043,044,045,046,047,048,049,051,053,054,056,057,058,086,087".split(',');

  const getPriceFromOption = (option: string | undefined): number => {
    if (!option) return 0;
    const match = option.match(/R\s?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

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
      if (!formData.areaCode) newErrors.areaCode = "Please select an area code.";
      if (!formData.minuteBundle) newErrors.minuteBundle = "Please select a minute bundle.";
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
              headers: { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify({
                  ...formData,
                  _subject: `New Landline Number Request (Home Page): ${formData.areaCode} with ${formData.minuteBundle}`,
                  number_rental: formData.numberRental,
                  total_due_now: `R${totalDueNow}.00`
              }),
          });

          if (response.ok) {
              setStatus('success');
              setFormData({ name: '', company: '', email: '', contactNumber: '', whatsappNumber: '', areaCode: '', minuteBundle: '', numberRental: '' });
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

        const text = `*New Landline Number Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.contactNumber}\n` +
            `*WhatsApp:* ${formData.whatsappNumber}\n` +
            `*Area Code:* ${formData.areaCode}\n` +
            `*Rental:* ${formData.numberRental}\n` +
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

  const selectedBundle = minuteBundles.find(b => b.name === formData.minuteBundle);
  const bundlePrice = selectedBundle ? parseInt(selectedBundle.price) : 0;
  const rentalPrice = getPriceFromOption(formData.numberRental);
  const isRentalYearly = formData.numberRental.toLowerCase().includes('year');
  const totalDueNow = rentalPrice + bundlePrice;
  const monthlyRecurring = bundlePrice + (isRentalYearly ? 0 : rentalPrice);

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px]"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8">
                        <Activity className="w-4 h-4" />
                        <span>The Modern Telecoms Partner</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Business VoIP, Hosted PBX & Fibre Solutions in South Africa
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Empower your organization with enterprise-grade Cloud PBX, Hosted PBX, Uncapped Fibre, SIP Trunks, and Scalable Web Hosting. As a leading VoIP provider in South Africa, we build reliable connectivity infrastructure designed for your business growth with 99.9% uptime and 24/7 support.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => navigate('/services/hosted-pbx')} className="font-bold text-lg bg-brand-green text-gray-900 hover:bg-white border-transparent">
                            Explore Cloud Voice
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Sales
                        </Button>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> 99.9% Uptime</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> 24/7 Support</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> Nationwide Coverage</div>
                    </div>
                </div>

                {/* Visual Graphic */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-lg" role="img" aria-label="IPT One Cloud PBX Dashboard Interface">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
                        
                        {/* Main Dashboard Panel */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                                <div className="flex items-center space-x-3">
                                    <Server className="w-5 h-5 text-brand-green" />
                                    <span className="text-sm font-mono text-gray-300">IPT One Dashboard</span>
                                </div>
                                <span className="inline-flex items-center bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                    SYSTEM OPTIMAL
                                </span>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Active Calls</p>
                                    <p className="text-white font-bold text-2xl flex items-center">
                                        248
                                        <span className="text-xs text-green-400 ml-2 font-normal">▲ 12%</span>
                                    </p>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Network Load</p>
                                    <p className="text-white font-bold text-2xl flex items-center">
                                        450 <span className="text-xs text-gray-500 ml-1 font-normal">Mbps</span>
                                    </p>
                                </div>
                            </div>

                            {/* Service Health List */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Phone className="w-4 h-4 mr-2"/> Cloud PBX</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-green w-full animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Wifi className="w-4 h-4 mr-2"/> Fibre Access</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-blue w-full animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Server className="w-4 h-4 mr-2"/> Hosted Services</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 z-30 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center space-x-3 animate-float-slow">
                            <div className="bg-brand-blue p-2 rounded-lg">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Connectivity</p>
                                <p className="text-sm font-bold text-white">Uncapped</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 z-30 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center space-x-3 animate-float-reverse">
                            <div className="bg-brand-green p-2 rounded-lg">
                                <Shield className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Security</p>
                                <p className="text-sm font-bold text-white">Protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Landline Section - Moved below Hero */}
      <section className="py-20 bg-white" aria-labelledby="landline-offer-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Limited Time Offer</span>
                <h2 id="landline-offer-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Get a Professional Business Number</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">Secure a local (012, 021) or national (087) landline number instantly. No contracts, just clear calls.</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-7 p-8 sm:p-12">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-green-50 text-green-800 rounded-2xl">
                                <CheckCircle className="w-16 h-16 mb-4 text-green-500" />
                                <h3 className="font-bold text-2xl mb-2">Request Received!</h3>
                                <p>Your landline application is being processed. Our team will contact you shortly to finalize your number selection.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Application Details</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
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
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''} aria-invalid={!!errors.email} />
                                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="contactNumber">Phone Number</Label>
                                        <Input id="contactNumber" value={formData.contactNumber} onChange={handleChange} className={errors.contactNumber ? 'border-red-500' : ''} aria-invalid={!!errors.contactNumber} />
                                        {errors.contactNumber && <p className="text-red-600 text-xs mt-1">{errors.contactNumber}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="areaCode">Preferred Area Code</Label>
                                        <select id="areaCode" value={formData.areaCode} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.areaCode ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.areaCode}>
                                            <option value="">Select Code...</option>
                                            {areaCodes.map(code => <option key={code} value={code}>{code}</option>)}
                                        </select>
                                        {errors.areaCode && <p className="text-red-600 text-xs mt-1">{errors.areaCode}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="numberRental">Landline Number Rental</Label>
                                        <select id="numberRental" value={formData.numberRental} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.numberRental ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.numberRental}>
                                            <option value="">Select Rental Option...</option>
                                            {rentalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                        {errors.numberRental && <p className="text-red-600 text-xs mt-1">{errors.numberRental}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="minuteBundle">Call Package</Label>
                                    <select id="minuteBundle" value={formData.minuteBundle} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${errors.minuteBundle ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.minuteBundle}>
                                        <option value="">Select Bundle...</option>
                                        {minuteBundles.map(bundle => <option key={bundle.name} value={bundle.name}>{bundle.name} - R{bundle.price} pm</option>)}
                                    </select>
                                    {errors.minuteBundle && <p className="text-red-600 text-xs mt-1">{errors.minuteBundle}</p>}
                                </div>
                                
                                <div className="flex items-start space-x-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                                    />
                                    <label htmlFor="terms" className="text-xs text-gray-500">
                                        I accept the <a href="https://www.iptone.co.za/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Terms & Conditions</a>
                                    </label>
                                </div>
                                {errors.terms && <p className="text-red-600 text-xs">{errors.terms}</p>}
                                
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button type="submit" size="lg" className="w-full font-bold flex-1" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Processing...' : 'Get My Number'}
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
                            </form>
                        )}
                    </div>
                    
                    {/* Summary Sidebar */}
                    <div className="md:col-span-5 bg-gradient-to-br from-brand-blue to-blue-900 text-white p-8 sm:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Your Plan</h3>
                            <p className="text-blue-200 text-sm mb-8">Digital Landline</p>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-blue-700/50 pb-4">
                                    <span className="text-blue-100">Number Rental</span>
                                    <span className="text-xl font-bold">{rentalPrice > 0 ? `R${rentalPrice}` : '-'}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-blue-700/50 pb-4">
                                    <span className="text-blue-100">Monthly Minutes</span>
                                    <span className="text-xl font-bold">{bundlePrice > 0 ? `R${bundlePrice}` : '-'}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-semibold">Total Due Now</span>
                                    <span className="text-3xl font-extrabold text-brand-green">
                                        R{totalDueNow}
                                    </span>
                                </div>
                                <div className="text-center pt-4 border-t border-blue-700/50">
                                     <p className="text-blue-100 text-sm">Monthly Recurring</p>
                                     <p className="text-xl font-bold text-white">R{monthlyRecurring}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12 bg-blue-800/50 rounded-xl p-4 text-sm text-blue-100">
                            <p className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-brand-green" /> No Sim Card Required
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-brand-green" /> Works on iPhone & Android
                            </p>
                            <p className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-brand-green" /> Keep Your Existing Number
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Service Universes */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Business ICT Solutions</h2>
                  <p className="text-lg text-gray-600">
                      We've simplified technology into three core pillars. Choose the solutions that power your specific business needs.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  {coreServices.map((service, index) => (
                      <div 
                        key={index} 
                        onClick={() => {
                          if (service.link.startsWith('http')) {
                            window.open(service.link, '_blank', 'noopener,noreferrer');
                            return;
                          }
                          navigate(service.link);
                        }}
                        className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden h-full flex flex-col"
                      >
                          {/* Top Border Accent */}
                          <div className={`absolute top-0 left-0 w-full h-1.5 ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                          
                          <div className="relative z-10 flex flex-col h-full">
                              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                  {service.icon}
                              </div>
                              
                              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                                  {service.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                  {service.description}
                              </p>
                              
                              <div className="flex items-center text-sm font-bold uppercase tracking-wide text-gray-500 group-hover:text-brand-blue transition-colors mt-auto">
                                  Learn More 
                                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                              </div>
                          </div>
                          
                          {/* Large faded icon in background */}
                          <div className={`absolute -bottom-8 -right-8 w-40 h-40 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none ${service.textColor}`}>
                               {/* Use a clone of the icon with full size and current text color */}
                               {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-full h-full" })}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Why Choose IPT One */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IPT One as Your Telecoms Partner?</h2>
                  <p className="text-lg text-gray-600">
                      As a trusted business VoIP and fibre internet provider in South Africa, we focus on delivering reliable, scalable solutions with exceptional support.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                          <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">99.9% Uptime Guarantee</h3>
                              <p className="text-gray-600 leading-relaxed">We know how important constant connectivity is for your business. Our hosted PBX and fibre solutions deliver industry-leading uptime so you never miss a call.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                          <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Headset className="w-6 h-6 text-brand-green" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Expert Support</h3>
                              <p className="text-gray-600 leading-relaxed">Our South African support team is available around the clock to help with your business telephony, internet, and hosting needs.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                          <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                              <p className="text-gray-600 leading-relaxed">Whether you're a small business or large enterprise, our VoIP, fibre, and hosting solutions grow with your needs.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                          <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Globe className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">Nationwide Coverage</h3>
                              <p className="text-gray-600 leading-relaxed">We provide business VoIP, fibre internet, LTE and 5G solutions to businesses across South Africa with extensive coverage.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                          <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Shield className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                              <p className="text-gray-600 leading-relaxed">Your business communications and data are protected with enterprise-grade security and redundancy.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                          <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Tag className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                              <p className="text-gray-600 leading-relaxed">Get access to enterprise-grade VoIP, fibre, and hosting at affordable prices with no hidden costs.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Coverage Checker Teaser */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8">
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Live Coverage Map</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Is your area <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Fibre Ready?</span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 mb-10 max-w-xl">
                        Don't settle for slow internet. We check availability across <strong>OpenServe, Vumatel, Frogfoot, MetroFibre</strong> and 20+ other networks instantly to find you the best deal.
                    </p>

                    {/* Mock Search Input */}
                    <div 
                        onClick={() => navigate('/coverage-check')}
                        className="group relative max-w-md bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                    >
                        <MapPin className="w-6 h-6 text-gray-400 mr-3" />
                        <span className="text-gray-500 text-lg flex-grow">Enter your street address...</span>
                        <button className="bg-brand-blue text-white rounded-full p-3 px-6 font-bold group-hover:bg-blue-700 transition-colors">
                            Check Now
                        </button>
                    </div>
                    
                    <p className="mt-4 text-sm text-gray-500 pl-4">
                        Checks Fibre, LTE & 5G availability.
                    </p>
                </div>

                {/* Visual Side */}
                <div className="relative">
                    {/* Floating Cards simulating coverage results */}
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700 p-6 rounded-2xl shadow-xl transform translate-y-8">
                            <Wifi className="w-8 h-8 text-brand-green mb-4" />
                            <h4 className="text-white font-bold text-lg">Fibre</h4>
                            <p className="text-gray-400 text-sm">Up to 1Gbps</p>
                            <div className="mt-4 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-green w-full"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700 p-6 rounded-2xl shadow-xl transform -translate-y-8">
                            <Tower className="w-8 h-8 text-brand-blue mb-4" />
                            <h4 className="text-white font-bold text-lg">5G / LTE</h4>
                            <p className="text-gray-400 text-sm">Instant Connect</p>
                            <div className="mt-4 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-blue w-3/4"></div>
                            </div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-2xl shadow-xl flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Supported Networks</p>
                                <div className="flex -space-x-2 mt-3">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-[10px] text-white font-bold">
                                            {i === 1 ? 'V' : i === 2 ? 'O' : i === 3 ? 'F' : 'M'}
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-800 flex items-center justify-center text-[10px] text-white font-bold">
                                        +20
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-bold text-white">100%</span>
                                <span className="text-xs text-brand-green">Coverage Check</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Technology Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden" aria-labelledby="trusted-by-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10">
            <h2 id="trusted-by-heading" className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                Powered by Global Leaders
            </h2>
        </div>

        <div className="relative w-full overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                            <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                {[...trustLogos, ...trustLogos].map((logo, index) => (
                    <div key={index} className="mx-6 sm:mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <img 
                            className="h-10 sm:h-12 w-auto max-w-[160px] object-contain transition-all duration-300" 
                            src={logo.candidates[0]} 
                                            alt={`${logo.name} Authorized Provider South Africa`} 
                            loading="lazy"
                            onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                const cur = parseInt(target.dataset.idx || '0', 10);
                                const next = cur + 1;
                                if (logo.candidates[next]) {
                                  target.dataset.idx = String(next);
                                  target.src = logo.candidates[next];
                                  return;
                                }
                                if (!target.dataset.placeholder) {
                                  target.dataset.placeholder = '1';
                                  const text = encodeURIComponent(logo.name);
                                  target.src = `https://placehold.co/200x80/eef2ff/00539B?text=${text}`;
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default HomePage;
