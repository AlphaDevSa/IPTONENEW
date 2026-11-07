
import React, { useState } from 'react';
import Hero from './components/Hero';
import ContactForm from './ContactForm';
import { Mail, Phone, Smartphone, WhatsApp, MapPin, Clock, MessageSquare, Headset, CheckCircle, Handshake, Users, Link as LinkIcon } from './components/icons';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FORMSPREE_ENDPOINT } from './config';
import { getAffiliateTrackingFields, saveAffiliateLead } from './affiliateTracking';

const agents = [
  {
    name: "Gauteng Sales Team (Jhb)",
    province: "Gauteng",
    phone: "+27 11 367 4100",
    whatsapp: "+27 83 600 0152",
    email: "gauteng@iptone.co.za"
  },
  {
    name: "Gauteng Sales Team (Pretoria)",
    province: "Gauteng",
    phone: "+27 12 004 8444",
    whatsapp: "+27 83 600 0152",
    email: "gauteng@iptone.co.za"
  },
  {
    name: "Western Cape Sales Team",
    province: "Western Cape",
    phone: "+27 21 301 2177",
    whatsapp: "+27 83 600 0152",
    email: "wc@iptone.co.za"
  },
  {
    name: "KZN Sales Team",
    province: "KwaZulu-Natal",
    phone: "+27 86 199 5070",
    whatsapp: "+27 83 600 0152",
    email: "kzn@iptone.co.za"
  }
];

const ReferralForm: React.FC = () => {
    const [formData, setFormData] = useState({
        yourName: '', yourEmail: '', yourWhatsapp: '',
        friendName: '', friendEmail: '', friendWhatsapp: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const affiliateMeta = getAffiliateTrackingFields();
        const messageBody = `
            Hi ${formData.friendName},
            
            ${formData.yourName} thinks you would benefit from IPT One Telecoms services.
            
            Check out their website: https://www.iptone.co.za
            
            Specifically, take a look at their Digital Landline Numbers which allow you to have a landline on your mobile:
            https://www.iptone.co.za/services/landline-numbers
            
            Best regards,
            The IPT One Team
        `;

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _subject: `New Referral from ${formData.yourName}`,
                    referrer_name: formData.yourName,
                    referrer_email: formData.yourEmail,
                    referrer_whatsapp: formData.yourWhatsapp,
                    friend_name: formData.friendName,
                    friend_email: formData.friendEmail,
                    friend_whatsapp: formData.friendWhatsapp,
                    intended_message: messageBody,
                    affiliate_source: affiliateMeta.affiliate_source || '',
                    affiliate_ref: affiliateMeta.affiliate_ref || '',
                    affiliate_campaign: affiliateMeta.affiliate_campaign || '',
                    _cc: 'info@iptone.co.za'
                }),
            });

            if (response.ok) {
                setStatus('success');
                saveAffiliateLead({
                    type: 'referral',
                    source: affiliateMeta.affiliate_source || 'direct',
                    ref: affiliateMeta.affiliate_ref || undefined,
                    affiliate: affiliateMeta.affiliate_ref || undefined,
                    campaign: affiliateMeta.affiliate_campaign || undefined,
                    page: window.location.pathname,
                    name: formData.yourName,
                    email: formData.yourEmail,
                    timestamp: Date.now(),
                });
                setFormData({
                    yourName: '', yourEmail: '', yourWhatsapp: '',
                    friendName: '', friendEmail: '', friendWhatsapp: ''
                });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 p-8 rounded-xl border border-green-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Referral Sent!</h3>
                <p className="text-gray-600 mb-6">Thanks for sharing. We've sent the details to our team and will reach out to your friend shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Refer Another Friend</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Your Details */}
                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Your Details</h4>
                    <div>
                        <Label htmlFor="yourName">Your Name</Label>
                        <Input id="yourName" value={formData.yourName} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div>
                        <Label htmlFor="yourEmail">Your Email</Label>
                        <Input id="yourEmail" type="email" value={formData.yourEmail} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                    <div>
                        <Label htmlFor="yourWhatsapp">Your WhatsApp Number</Label>
                        <Input id="yourWhatsapp" value={formData.yourWhatsapp} onChange={handleChange} required placeholder="082 123 4567" />
                    </div>
                </div>

                {/* Friend Details */}
                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Friend's Details</h4>
                    <div>
                        <Label htmlFor="friendName">Friend's Name</Label>
                        <Input id="friendName" value={formData.friendName} onChange={handleChange} required placeholder="Jane Smith" />
                    </div>
                    <div>
                        <Label htmlFor="friendEmail">Friend's Email</Label>
                        <Input id="friendEmail" type="email" value={formData.friendEmail} onChange={handleChange} required placeholder="jane@example.com" />
                    </div>
                    <div>
                        <Label htmlFor="friendWhatsapp">Friend's WhatsApp Number</Label>
                        <Input id="friendWhatsapp" value={formData.friendWhatsapp} onChange={handleChange} required placeholder="083 987 6543" />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <Button type="submit" size="lg" className="w-full font-bold bg-brand-green text-gray-900 hover:bg-white border-transparent shadow-md" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Referral'}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">
                    By clicking send, you confirm you have permission to share these details.
                </p>
            </div>
        </form>
    );
};

const ContactPage: React.FC = () => {
  const navigate = useNavigation();

  const quickContacts = [
      {
          label: "Sales Inquiry",
          icon: <Phone className="w-6 h-6 text-brand-blue" />,
          action: "+27 12 004 8444",
          sub: "sales@iptone.co.za",
          link: "tel:+27120048444"
      },
      {
          label: "Technical Support",
          icon: <Clock className="w-6 h-6 text-brand-green" />,
          action: "24/7 Support",
          sub: "For existing clients",
          link: "mailto:support@iptone.co.za"
      },
      {
          label: "WhatsApp Chat",
          icon: <WhatsApp className="w-6 h-6 text-green-600" />,
          action: "Chat Instantly",
          sub: "+27 83 600 0152",
          link: "https://wa.me/27836000152"
      }
  ];

  return (
    <>
      <div className="relative">
          <Hero
            title={
                <>
                    We're Here to <span className="text-brand-green">Connect.</span>
                </>
            }
            subtitle="Ready to upgrade your business connectivity? Whether you need technical support or a custom quote, our local team is standing by to help."
            badge={
                <>
                    <MessageSquare className="w-4 h-4" />
                    <span>24/7 Support Available</span>
                </>
            }
            visual={
                <div className="relative w-full max-w-md">
                     {/* Background Glow */}
                     <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
    
                     {/* Main Card: Support Status */}
                     <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                                    <Headset className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Support Team</h3>
                                    <p className="text-xs text-gray-400">Pretoria, ZA</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                 <span className="text-xs font-mono text-green-500">ONLINE</span>
                            </div>
                        </div>
    
                        <div className="space-y-4">
                            <div className="bg-gray-700/50 p-4 rounded-xl flex justify-between items-center border border-gray-600 hover:border-blue-500 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm text-gray-200">Phone Support</span>
                                </div>
                                <span className="text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded">Instant</span>
                            </div>
                            <div className="bg-gray-700/50 p-4 rounded-xl flex justify-between items-center border border-gray-600 hover:border-green-500 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <WhatsApp className="w-5 h-5 text-green-400" />
                                    <span className="text-sm text-gray-200">WhatsApp</span>
                                </div>
                                <span className="text-xs font-bold text-white bg-green-600 px-2 py-1 rounded">~2 min</span>
                            </div>
                            <div className="bg-gray-700/50 p-4 rounded-xl flex justify-between items-center border border-gray-600 hover:border-orange-500 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-orange-400" />
                                    <span className="text-sm text-gray-200">Email Ticket</span>
                                </div>
                                <span className="text-xs font-bold text-white bg-orange-600 px-2 py-1 rounded">&lt; 1 hour</span>
                            </div>
                        </div>
                     </div>
    
                     {/* Floating Element */}
                     <div className="absolute -bottom-6 -right-6 z-30 bg-white text-gray-900 p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce-slow border border-gray-100">
                         <div className="bg-brand-green p-2 rounded-full">
                             <CheckCircle className="w-5 h-5 text-white" />
                         </div>
                         <div>
                             <p className="text-xs text-gray-500 uppercase font-bold">Customer Satisfaction</p>
                             <p className="text-sm font-bold">4.9/5 Stars</p>
                         </div>
                     </div>
                </div>
            }
          >
              <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                      Message Us
                  </Button>
                  <Button 
                      size="lg" 
                      variant="outline" 
                      className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open('tel:+27120048444', '_self')}
                  >
                      Call Now
                  </Button>
              </div>
          </Hero>
          
          {/* Floating Contact Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 sm:-mt-24 pointer-events-none">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
                  {quickContacts.map((contact, index) => (
                      <a 
                        key={index} 
                        href={contact.link}
                        target={contact.label.includes('WhatsApp') ? "_blank" : undefined}
                        className="bg-white rounded-xl shadow-xl p-6 flex items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                      >
                          <div className="bg-gray-50 p-4 rounded-full mr-5 group-hover:bg-blue-50 transition-colors">
                              {contact.icon}
                          </div>
                          <div>
                              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{contact.label}</p>
                              <p className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{contact.action}</p>
                              <p className="text-sm text-gray-400">{contact.sub}</p>
                          </div>
                      </a>
                  ))}
              </div>
          </div>
      </div>

      {/* Main Content Area */}
      <section className="pt-32 pb-24 bg-gray-50" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left Side: Context & Info */}
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How can we help?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <Clock className="w-6 h-6 text-brand-blue mr-3" />
                            <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                <span>Monday - Friday</span>
                                <span className="font-semibold text-gray-900">08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                <span>Weekends & Public Holidays</span>
                                <span className="font-semibold text-gray-900">Closed</span>
                            </li>
                        </ul>
                        <div className="mt-6 bg-blue-50 p-4 rounded-lg flex items-start">
                            <div className="shrink-0 mt-1">
                                <MessageSquare className="w-5 h-5 text-brand-blue" />
                            </div>
                            <p className="ml-3 text-sm text-blue-800">
                                <strong>Need after-hours support?</strong><br/>
                                Existing clients can log emergency tickets 24/7 via our support portal or email.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900">National Presence</h3>
                        <div className="flex items-start text-gray-600">
                            <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Head Office</p>
                                <p>5th Floor</p>
                                <p>Bloukrans Building</p>
                                <p>Lynnwood Bridge</p>
                                <p>Pretoria, 0081</p>
                                <p>South Africa</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Phone className="w-5 h-5 text-brand-blue mr-3" />
                            <span>National Line: <a href="tel:0861995065" className="hover:text-brand-blue font-medium">086 199 5065</a></span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Mail className="w-5 h-5 text-brand-blue mr-3" />
                            <span>General Inquiries: <a href="mailto:info@iptone.co.za" className="hover:text-brand-blue font-medium">info@iptone.co.za</a></span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Mail className="w-5 h-5 text-brand-blue mr-3" />
                            <span>Support: <a href="mailto:support@iptone.co.za" className="hover:text-brand-blue font-medium">support@iptone.co.za</a></span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-brand-blue p-2"></div> {/* Decorative top strip */}
                        <div className="p-8 sm:p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500 mb-8">We usually respond within a few hours.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Regional Teams Grid */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Representatives</h2>
                <p className="text-lg text-gray-600">Connect directly with an IPT One agent in your province.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {agents.map((agent, index) => (
                    <div key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="bg-gray-50 p-6 border-b border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{agent.name}</h3>
                                    <div className="flex items-center text-brand-blue mt-1">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm font-medium">{agent.province}</span>
                                    </div>
                                </div>
                                <div className="bg-white p-2 rounded-full shadow-sm">
                                    <Smartphone className="w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {agent.phone && (
                                <a href={`tel:${agent.phone.replace(/\s+/g, '')}`} className="flex items-center text-gray-600 hover:text-brand-blue transition-colors group/link">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover/link:bg-blue-100">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{agent.phone}</span>
                                </a>
                            )}
                            {agent.whatsapp && (
                                <a href={`https://wa.me/${agent.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600 transition-colors group/link">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover/link:bg-green-100">
                                        <WhatsApp className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{agent.whatsapp}</span>
                                </a>
                            )}
                            <a href={`mailto:${agent.email}`} className="flex items-center text-gray-600 hover:text-brand-blue transition-colors group/link">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover/link:bg-blue-100">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="font-medium truncate">{agent.email}</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Refer A Friend Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50 border-t border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-green-700 bg-green-100 mb-6 border border-green-200">
                          <Handshake className="w-4 h-4 mr-2" />
                          Share the Benefit
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Refer a Friend</h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          Know someone who needs reliable connectivity or a professional business line? Connect us!
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex">
                              <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-sm">
                                  <Users className="w-6 h-6 text-brand-green" />
                              </div>
                              <div className="ml-4">
                                  <h4 className="text-lg font-bold text-gray-900">Help them get connected</h4>
                                  <p className="text-gray-600 text-sm">We'll introduce them to our services, like our popular Digital Landlines.</p>
                              </div>
                          </div>
                          <div className="flex">
                              <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-sm">
                                  <LinkIcon className="w-6 h-6 text-brand-blue" />
                              </div>
                              <div className="ml-4">
                                  <h4 className="text-lg font-bold text-gray-900">Digital Landlines</h4>
                                  <p className="text-gray-600 text-sm">
                                      We specialize in helping businesses cut costs and stay mobile with 
                                      <a href="/services/landline-numbers" className="text-brand-blue font-semibold hover:underline ml-1">
                                          VoIP Landline Numbers
                                      </a>.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-brand-green/20 rounded-full blur-xl -z-10"></div>
                      <ReferralForm />
                  </div>
              </div>
          </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-brand-blue py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Grow Your Business with IPT One</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Are you an IT consultant or MSP? Join our partner network as an Agent, Reseller, or Wholesaler and unlock new revenue streams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate('/partners')} size="lg" className="bg-brand-green text-gray-900 hover:bg-white font-bold">
                      View Partner Programs
                  </Button>
                  <Button onClick={() => navigate('/partners/agents')} variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      Become an Agent
                  </Button>
              </div>
          </div>
      </section>
    </>
  );
};

export default ContactPage;
