
import React from 'react';
import { CheckCircle, Check, Mail, Shield, Smartphone, Lock, Globe, Users, Cloud, Monitor, ArrowRight } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent } from './components/Card';

const CPanelEmailHostingPage: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Spam & Virus Protection",
      description: "Built-in SpamAssassin technology filters out junk mail and malicious threats before they reach your inbox.",
      bg: "bg-red-500"
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Secure Encryption",
      description: "All email transmission is protected by SSL/TLS encryption, ensuring your sensitive business communications remain private.",
      bg: "bg-green-500"
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Sync Everywhere",
      description: "Full IMAP support keeps your inbox synchronized across your laptop, phone, and tablet in real-time.",
      bg: "bg-blue-500"
    }
  ];

  const plans = [
    {
        name: "Starter Email",
        price: "35.00",
        description: "Entry-level for freelancers.",
        features: ["10 Email Accounts", "10 GB Disk Space", "Unlimited Bandwidth", "Free SSL Certificate", "Webmail Access"],
        link: "https://website365.co.za/index.php?rp=/store/email-hosting/starter",
        highlight: false
    },
    {
        name: "Business Email",
        price: "50.00",
        description: "Perfect for small teams.",
        features: ["25 Email Accounts", "20 GB Disk Space", "Unlimited Bandwidth", "Free SSL Certificate", "Webmail Access"],
        link: "https://website365.co.za/index.php?rp=/store/email-hosting/business-email",
        highlight: true
    },
    {
        name: "Professional",
        price: "65.00",
        description: "More space for growing companies.",
        features: ["50 Email Accounts", "50 GB Disk Space", "Unlimited Bandwidth", "Free SSL Certificate", "Webmail Access"],
        link: "https://website365.co.za/index.php?rp=/store/email-hosting/professional",
        highlight: false
    },
    {
        name: "Enterprise",
        price: "100.00",
        description: "Maximum capacity for large orgs.",
        features: ["200 Email Accounts", "200 GB Disk Space", "Unlimited Bandwidth", "Free SSL Certificate", "Priority Support"],
        link: "https://website365.co.za/index.php?rp=/store/email-hosting/enterprise-email",
        highlight: false
    }
  ];

  const clients = ["Outlook", "Thunderbird", "Apple Mail", "Gmail App", "Samsung Mail", "iOS Mail"];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-brand-blue">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div className="text-left text-white">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8">
                        <Shield className="w-4 h-4" />
                        <span>Secure & Ad-Free</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Trust starts with your <span className="text-brand-green">Inbox.</span>
                    </h1>
                    <p className="text-lg text-blue-100 mb-10 max-w-xl leading-relaxed">
                        Stop using free email services for your business. Get a professional <strong>@yourcompany.co.za</strong> address that builds credibility and keeps your data secure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                            size="lg" 
                            className="bg-brand-green text-gray-900 hover:bg-white font-bold"
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Plans
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="text-white border-white hover:bg-white hover:text-brand-blue"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Learn More
                        </Button>
                    </div>
                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm font-medium text-blue-200">
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> 99.9% Uptime</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> Spam Protection</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> Mobile Sync</span>
                    </div>
                </div>

                {/* Graphic */}
                <div className="relative lg:h-[500px] flex items-center justify-center">
                    {/* Floating Email Card */}
                    <div className="relative z-20 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">Just now</div>
                        </div>
                        {/* Body */}
                        <div className="space-y-3 mb-6">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                        {/* Attachment / Secure Badge */}
                        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center space-x-2">
                                <div className="bg-brand-blue p-1.5 rounded text-white"><Lock className="w-3 h-3"/></div>
                                <span className="text-xs font-bold text-brand-blue">Encrypted Message</span>
                            </div>
                            <span className="text-xs text-blue-400">256-bit AES</span>
                        </div>
                    </div>

                    {/* Decorative Elements behind */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -top-4 -right-4 z-30 bg-brand-green text-brand-blue font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                        Looking Good!
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Trust/Intro Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Mail className="w-4 h-4 mr-2" />
                        Build Your Brand
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Stop using free email for business.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Nothing says "amateur" like sending an invoice from <code>coolguy88@gmail.com</code>. 
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Upgrade to a professional address like <code>sales@yourcompany.co.za</code>. It builds immediate trust with clients, separates your work life from your personal life, and gives you full control over your data.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Ad-Free Experience
                        </div>
                        <div className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> 99.9% Uptime
                        </div>
                        <div className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Daily Backups
                        </div>
                        <div className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Full Control Panel
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>
                    {/* Abstract Representation of Devices */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                        <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-6">
                            <div className="bg-brand-blue p-3 rounded-xl text-white">
                                <Monitor className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Desktop & Web</h3>
                                <p className="text-sm text-gray-500">Outlook, Thunderbird, Roundcube</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-brand-green p-3 rounded-xl text-white">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Mobile & Tablet</h3>
                                <p className="text-sm text-gray-500">iPhone, Android, iPad</p>
                            </div>
                        </div>
                        
                        {/* Client Tags */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Works seamlessly with</p>
                            <div className="flex flex-wrap gap-2">
                                {clients.map(client => (
                                    <span key={client} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 font-medium">
                                        {client}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure & Reliable Communication</h2>
                <p className="text-lg text-gray-600">We take care of the server technology so you can focus on your message.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8 text-center flex flex-col items-center">
                            <div className={`${benefit.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Monthly Pricing</h2>
                <p className="text-lg text-gray-600">Choose the package that fits your team size. Upgrade anytime.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col bg-white rounded-2xl p-6 transition-all duration-300 ${plan.highlight ? 'border-2 border-brand-blue shadow-xl scale-105 z-10' : 'border border-gray-200 shadow-sm hover:shadow-lg'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Best Value
                                </span>
                            </div>
                        )}
                        
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
                        </div>
                        
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-extrabold text-gray-900">R{plan.price}</span>
                                <span className="text-gray-500 ml-2 text-sm">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <Check className={`w-4 h-4 mr-2 shrink-0 ${plan.highlight ? 'text-brand-blue' : 'text-green-500'}`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <Button 
                            as="a" 
                            href={plan.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full font-bold"
                            variant={plan.highlight ? 'default' : 'outline'}
                        >
                            Select Plan
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Webmail Teaser */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-1/2">
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 mb-6">
                          <Globe className="w-4 h-4 mr-2" />
                          Access Anywhere
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Powerful Webmail Included</h2>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                          Don't have your laptop? No problem. Access your email securely from any browser using our powerful webmail interfaces (Roundcube or Horde). Manage contacts, calendars, and auto-responders directly from the web.
                      </p>
                      <ul className="space-y-3">
                          <li className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Drag-and-drop interface
                          </li>
                          <li className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Full address book management
                          </li>
                          <li className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Advanced search filters
                          </li>
                      </ul>
                  </div>
                  <div className="md:w-1/2">
                      <div className="bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl">
                          <div className="bg-white rounded-lg overflow-hidden aspect-video relative flex items-center justify-center">
                              {/* Placeholder for Webmail UI */}
                              <div className="text-center p-8">
                                  <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                  <p className="text-gray-400 font-medium">Roundcube Webmail Interface</p>
                              </div>
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

export default CPanelEmailHostingPage;
