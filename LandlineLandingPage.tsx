
import React, { useState } from 'react';
import { Button } from "./components/Button";
import { CheckCircle, Smartphone, WhatsAppSolid, Globe, Phone, Shield, CreditCard, Zap, Check, Lock, Server } from "./components/icons";
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import { Logo } from './components/Logo';
import Accordion from './Accordion';
import { useNavigation } from './NavigationContext';

interface FormErrors {
    name?: string;
    email?: string;
    contactNumber?: string;
    areaCode?: string;
    minuteBundle?: string;
    terms?: string;
}

const LandlineLandingPage: React.FC = () => {
  const navigate = useNavigation();

  // Form State
  const [formData, setFormData] = useState({ name: '', company: '', email: '', contactNumber: '', areaCode: '', minuteBundle: '250 minutes' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const areaCodes = "010,012,013,014,015,016,017,018,021,022,023,027,028,031,032,033,034,035,036,039,041,042,043,044,045,046,047,048,049,051,053,054,056,057,058,086,087".split(',');

  const minuteBundles = [
    { name: "250 minutes", price: "99" },
    { name: "500 minutes", price: "199" },
    { name: "750 minutes", price: "289" },
    { name: "1000 minutes", price: "395" },
    { name: "2000 minutes", price: "790" },
    { name: "2500 minutes", price: "980" },
  ];

  const faqs = [
    {
        q: "Do I need a physical phone line?",
        a: "No. Our landline numbers are 100% digital and operate over the internet (VoIP). You do not need a Telkom copper line. You just need a stable internet connection on your mobile or computer."
    },
    {
        q: "How do I answer calls?",
        a: "You answer calls using our free App on your smartphone (iOS or Android). When someone dials your 011 or 021 number, your mobile phone rings."
    },
    {
        q: "Can I keep my existing number?",
        a: "Yes! We can port your existing number from Telkom or any other provider to our network. Simply select 'Porting' when our team contacts you."
    }
  ];

  const validate = (): FormErrors => {
      const newErrors: FormErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim()) {
          newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email address is invalid.";
      }
      if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
      if (!formData.areaCode) newErrors.areaCode = "Select an area code.";
      if (!acceptedTerms) newErrors.terms = "Please accept the terms.";
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
                  _subject: `Landing Page Lead: Landline Number`,
                  source: 'Landing Page'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      if (errors[id as keyof FormErrors]) setErrors(prev => ({ ...prev, [id]: undefined }));
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      
      {/* Simplified Header */}
      <header className="bg-white border-b border-gray-200 py-4 fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <div onClick={() => navigate('/')} className="cursor-pointer">
                  <Logo className="h-8 w-auto" />
              </div>
              <div className="flex items-center gap-4">
                  <span className="hidden sm:inline text-sm font-medium text-gray-600">Questions?</span>
                  <a href="tel:+27120048444" className="text-sm font-bold text-brand-blue hover:underline">+27 12 004 8444</a>
              </div>
          </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-brand-blue/20 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 text-center lg:text-left">
                      <div className="inline-flex items-center space-x-2 bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-sm font-bold mb-6 border border-brand-green/30">
                          <Zap className="w-4 h-4" />
                          <span>Limited Time Offer</span>
                      </div>
                      <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                          Get a Business Landline Number on your <span className="text-brand-green">Mobile Phone</span>
                      </h1>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                          Stop losing customers to voicemail. Get a 011, 021, or 087 number that rings directly on your cellphone App. Look professional instantly.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                          <div className="flex items-center text-sm font-medium text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-2" /> No Contracts
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-2" /> Instant Setup
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-2" /> Keep Your Number
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-2" /> R49.00 / month
                          </div>
                      </div>
                  </div>

                  {/* High Converting Form */}
                  <div className="lg:col-span-5">
                      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-gray-900 border-t-8 border-brand-green">
                          <div className="text-center mb-6">
                              <h3 className="text-2xl font-bold">Get Connected Now</h3>
                              <p className="text-gray-500 text-sm">Fill in your details to secure your number.</p>
                          </div>

                          {status === 'success' ? (
                              <div className="text-center py-10">
                                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                      <Check className="w-8 h-8 text-green-600" />
                                  </div>
                                  <h4 className="text-xl font-bold mb-2">Request Sent!</h4>
                                  <p className="text-gray-600">Our team will call you shortly to finalize your number selection.</p>
                              </div>
                          ) : (
                              <form onSubmit={handleSubmit} className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                      <div>
                                          <Label htmlFor="name" className="text-xs">Full Name</Label>
                                          <Input id="name" value={formData.name} onChange={handleChange} className={`h-10 ${errors.name ? 'border-red-500' : ''}`} />
                                          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                                      </div>
                                      <div>
                                          <Label htmlFor="contactNumber" className="text-xs">Mobile Number</Label>
                                          <Input id="contactNumber" value={formData.contactNumber} onChange={handleChange} className={`h-10 ${errors.contactNumber ? 'border-red-500' : ''}`} />
                                          {errors.contactNumber && <span className="text-red-500 text-xs">{errors.contactNumber}</span>}
                                      </div>
                                  </div>
                                  <div>
                                      <Label htmlFor="email" className="text-xs">Email Address</Label>
                                      <Input id="email" type="email" value={formData.email} onChange={handleChange} className={`h-10 ${errors.email ? 'border-red-500' : ''}`} />
                                      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                                  </div>
                                  <div>
                                      <Label htmlFor="areaCode" className="text-xs">Preferred Area Code</Label>
                                      <select id="areaCode" value={formData.areaCode} onChange={handleChange} className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${errors.areaCode ? 'border-red-500' : 'border-gray-300'}`}>
                                          <option value="">Select Code...</option>
                                          {areaCodes.map(code => <option key={code} value={code}>{code}</option>)}
                                      </select>
                                      {errors.areaCode && <span className="text-red-500 text-xs">{errors.areaCode}</span>}
                                  </div>
                                  
                                  <div className="flex items-start gap-2 pt-2">
                                      <input type="checkbox" checked={acceptedTerms} onChange={e => setAcceptedTerms(e.target.checked)} className="mt-1 h-4 w-4 text-brand-green rounded border-gray-300" />
                                      <span className="text-xs text-gray-500">I accept the Terms & Conditions.</span>
                                  </div>
                                  {errors.terms && <span className="text-red-500 text-xs">{errors.terms}</span>}

                                  <Button type="submit" className="w-full h-12 font-bold text-lg shadow-lg" disabled={status === 'submitting'}>
                                      {status === 'submitting' ? 'Processing...' : 'Get My Number'}
                                  </Button>
                              </form>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-6">Trusted by South African Businesses</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                   {/* Reusing icons as faux logos for layout purposes */}
                   <div className="flex items-center gap-2 font-bold text-xl"><Shield className="w-6 h-6"/> SecureVoice</div>
                   <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6"/> GlobalConnect</div>
                   <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6"/> FastFibre</div>
                   <div className="flex items-center gap-2 font-bold text-xl"><Server className="w-6 h-6"/> CloudHost</div>
              </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Go Digital</h2>
                  <p className="text-lg text-gray-600">Old copper lines are dying. Move to the cloud for reliability and flexibility.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                          <Smartphone className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">App Based</h3>
                      <p className="text-gray-600">No need for a second phone. The landline runs as an app on your existing device.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                          <WhatsAppSolid className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Business</h3>
                      <p className="text-gray-600">Link your new number to WhatsApp Business to separate work chats from personal ones.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                          <CreditCard className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Savings</h3>
                      <p className="text-gray-600">Save up to 50% vs traditional Telkom lines. Pure per-second billing with no hidden fees.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <Accordion key={index} title={item.q}>
                        <p>{item.a}</p>
                    </Accordion>
                ))}
            </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div onClick={() => navigate('/')} className="cursor-pointer inline-block mb-4">
                   <Logo className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm mb-6">
                  &copy; {new Date().getFullYear()} IPT One Telecoms. All rights reserved.
              </p>
              <div className="flex justify-center gap-6 text-sm">
                  <button onClick={() => navigate('/privacy-policy')} className="hover:text-white">Privacy Policy</button>
                  <button onClick={() => navigate('/terms-and-conditions')} className="hover:text-white">Terms & Conditions</button>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default LandlineLandingPage;
