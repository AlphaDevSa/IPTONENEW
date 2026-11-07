
import React from 'react';
import { CheckCircle, Zap, Shield, Database, Users, Server, Settings, Globe, Cloud, Layout, CreditCard, ArrowRight, Activity, DollarSign } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent } from './components/Card';

const ResellerHostingPage: React.FC = () => {
  const plans = [
    {
      name: "Reseller 1",
      price: "149.00",
      description: "Great for freelancers managing a few clients.",
      accounts: "50 cPanel Accounts",
      features: [
        "Unlimited NVMe Storage",
        "Unlimited Bandwidth",
        "5000 Email Accounts",
        "100% White Label",
        "WHM Admin Access",
        "Free SSL Certificates",
        "Softaculous Installer"
      ],
      link: "https://website365.co.za/index.php?rp=/store/cpanel-reseller-hosting/reseller-1",
      highlight: false
    },
    {
      name: "Reseller 2",
      price: "189.00",
      description: "The sweet spot for growing agencies.",
      accounts: "100 cPanel Accounts",
      features: [
        "Unlimited NVMe Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "100% White Label",
        "WHM Admin Access",
        "Free SSL Certificates",
        "Softaculous Installer"
      ],
      link: "https://website365.co.za/index.php?rp=/store/cpanel-reseller-hosting/reseller-2",
      highlight: true
    },
    {
      name: "Reseller 3",
      price: "269.00",
      description: "Maximum capacity for hosting companies.",
      accounts: "250 cPanel Accounts",
      features: [
        "Unlimited NVMe Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "100% White Label",
        "WHM Admin Access",
        "Free SSL Certificates",
        "Softaculous Installer"
      ],
      link: "https://website365.co.za/index.php?rp=/store/cpanel-reseller-hosting/reseller-3",
      highlight: false
    }
  ];

  const features = [
    {
        icon: <Users className="w-6 h-6 text-brand-blue" />,
        title: "100% White Label",
        description: "Your clients will never know we exist. Customize the cPanel interface with your own logo and branding."
    },
    {
        icon: <Settings className="w-6 h-6 text-brand-blue" />,
        title: "WHM Control Panel",
        description: "Create, suspend, and manage cPanel accounts effortlessly. Set your own packages, pricing, and limits."
    },
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "LiteSpeed Performance",
        description: "Powered by LiteSpeed Web Server, ensuring your clients' websites load lightning fast."
    },
    {
        icon: <Database className="w-6 h-6 text-brand-blue" />,
        title: "NVMe SSD Storage",
        description: "We use enterprise-grade NVMe drives for superior read/write speeds compared to standard SSDs."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Imunify360 Security",
        description: "AI-driven firewall and malware scanning protects your server and your clients from threats."
    },
    {
        icon: <Cloud className="w-6 h-6 text-brand-blue" />,
        title: "CloudLinux OS",
        description: "Tenant isolation ensures that one resource-heavy site doesn't affect the performance of others."
    }
  ];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <div className="inline-flex items-center space-x-2 bg-purple-900/50 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-purple-200 border border-purple-500/30 mb-8">
                        <Users className="w-4 h-4" />
                        <span>Join 500+ Active Resellers</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Launch your own <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Web Hosting Company.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        We provide the enterprise-grade servers, licenses, and technical support. You create the packages, set the prices, and keep 100% of the profits.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-purple-600 text-white hover:bg-purple-500 border-transparent shadow-lg shadow-purple-900/20">
                            View Packages
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                        >
                            How it Works
                        </Button>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><Settings className="w-4 h-4 mr-2 text-brand-blue"/> WHM Admin</div>
                        <div className="flex items-center"><Layout className="w-4 h-4 mr-2 text-purple-400"/> White Label</div>
                        <div className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-400"/> Managed Security</div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Mockup Container */}
                    <div className="relative w-full max-w-lg">
                        
                        {/* Back Card: Server Status */}
                        <div className="absolute top-0 right-0 w-64 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl transform translate-x-4 -translate-y-8 rotate-3 opacity-60 z-0">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-400">System Status: Online</span>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1 bg-gray-700 rounded-full w-full"><div className="h-1 bg-green-500 rounded-full w-3/4"></div></div>
                                <div className="h-1 bg-gray-700 rounded-full w-full"><div className="h-1 bg-blue-500 rounded-full w-1/2"></div></div>
                            </div>
                        </div>

                        {/* Main Card: Dashboard / Revenue */}
                        <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Monthly Recurring Revenue</p>
                                    <h3 className="text-3xl font-bold text-white mt-1">R 24,500.00</h3>
                                </div>
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <Activity className="w-6 h-6" />
                                </div>
                            </div>
                            
                            {/* Chart Simulation */}
                            <div className="flex items-end justify-between h-32 space-x-2 mb-6">
                                <div className="w-full bg-purple-500/30 rounded-t-sm h-[40%]"></div>
                                <div className="w-full bg-purple-500/40 rounded-t-sm h-[55%]"></div>
                                <div className="w-full bg-purple-500/50 rounded-t-sm h-[45%]"></div>
                                <div className="w-full bg-purple-500/60 rounded-t-sm h-[70%]"></div>
                                <div className="w-full bg-purple-500/70 rounded-t-sm h-[60%]"></div>
                                <div className="w-full bg-purple-500/80 rounded-t-sm h-[85%]"></div>
                                <div className="w-full bg-purple-500 rounded-t-sm h-[95%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        +15%
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity List */}
                            <div className="space-y-3">
                                <p className="text-xs text-gray-400 font-bold uppercase">Recent Activity</p>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">NK</div>
                                        <div>
                                            <p className="text-sm font-medium text-white">New Client</p>
                                            <p className="text-xs text-gray-400">Business Pro Plan</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-bold">+ R250</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs">SJ</div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Domain Renewal</p>
                                            <p className="text-xs text-gray-400">my-shop.co.za</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-bold">+ R99</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element: White Label */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-gray-800 p-4 rounded-xl border border-gray-600 shadow-xl flex items-center space-x-3 animate-float-slow">
                            <div className="bg-brand-blue p-2 rounded-lg">
                                <Layout className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Interface Branding</p>
                                <p className="text-sm font-bold text-white">Your Logo Here</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Layout className="w-4 h-4 mr-2" />
                        Turnkey Business
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Your Agency, Supercharged.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Are you a web designer or developer? Stop sending your clients to third-party hosts. With Reseller Hosting, you can host them yourself and build a recurring revenue stream.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        You get a master <strong>Web Host Manager (WHM)</strong> account to create individual cPanel accounts for each client. You determine the resources, the price, and the features. We handle the server uptime, security, and backups in the background.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Set Your Own Prices</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Keep 100% of the Profit</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Scale As You Grow</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* Visual Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-purple-100 rounded-full blur-3xl opacity-60"></div>
                    <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl text-white border border-gray-700 overflow-hidden">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                            <span className="text-sm font-bold text-white">WHM Dashboard</span>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div>
                                    <p className="font-bold text-sm">Create New Account</p>
                                    <p className="text-xs text-gray-400">client_website.com</p>
                                </div>
                                <Button className="h-8 text-xs bg-brand-green text-gray-900 hover:bg-white">Create</Button>
                            </div>
                            <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div>
                                    <p className="font-bold text-sm">List Accounts</p>
                                    <p className="text-xs text-gray-400">Manage 24 active clients</p>
                                </div>
                                <Button variant="outline" className="h-8 text-xs border-gray-600 text-gray-300">View</Button>
                            </div>
                            <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div>
                                    <p className="font-bold text-sm">Server Status</p>
                                    <p className="text-xs text-green-400">All Services Online</p>
                                </div>
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Reseller Packages</h2>
                <p className="text-lg text-gray-600">
                    High-performance infrastructure at wholesale rates. Choose the plan that fits your client base.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${plan.highlight ? 'border-2 border-brand-blue shadow-xl z-10' : 'border border-gray-200 shadow-md'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Best Value
                                </span>
                            </div>
                        )}
                        
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                        </div>
                        
                        <div className="mb-8 pb-8 border-b border-gray-100">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-extrabold text-gray-900">R{plan.price}</span>
                                <span className="text-gray-500 ml-2">/mo</span>
                            </div>
                            <div className="mt-2 text-brand-blue font-bold text-sm bg-blue-50 inline-block px-2 py-1 rounded">
                                {plan.accounts}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <CheckCircle className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? 'text-brand-blue' : 'text-green-500'}`} />
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
                            Get Started
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Grade Infrastructure</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">We provide the powerful backend so you can focus on sales and support.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feat, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                          <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6">
                              {feat.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feat.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* WHMCS Billing Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-100 mb-6">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Optional Add-on
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">WHMCS Billing Automation</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          Take your reseller business to the next level with WHMCS. It handles everything from client signup and provisioning to billing and support.
                      </p>
                      <ul className="space-y-3 mb-8">
                          <li className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                              Automated Invoicing & Payment Collection
                          </li>
                          <li className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                              Automatic Account Provisioning (cPanel creation)
                          </li>
                          <li className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                              Integrated Support Ticket System
                          </li>
                      </ul>
                  </div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 group bg-white">
                       <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                       <img 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                          alt="WHMCS Billing Dashboard Interface" 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                       />
                  </div>
              </div>
          </div>
      </section>

      {/* Tech Strip */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Powered By Industry Leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                  <div className="text-white font-bold text-xl flex items-center"><Server className="w-6 h-6 mr-2" /> cPanel</div>
                  <div className="text-white font-bold text-xl flex items-center"><Settings className="w-6 h-6 mr-2" /> WHM</div>
                  <div className="text-white font-bold text-xl flex items-center"><Cloud className="w-6 h-6 mr-2" /> CloudLinux</div>
                  <div className="text-white font-bold text-xl flex items-center"><Zap className="w-6 h-6 mr-2" /> LiteSpeed</div>
                  <div className="text-white font-bold text-xl flex items-center"><Shield className="w-6 h-6 mr-2" /> Imunify360</div>
                  <div className="text-white font-bold text-xl flex items-center"><CreditCard className="w-6 h-6 mr-2" /> WHMCS</div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default ResellerHostingPage;
