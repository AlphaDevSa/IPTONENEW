
import React from 'react';
import { CheckCircle, Check, Server, Zap, Shield, Database, Cloud, Settings, Mail, Lock, Code, Activity, Globe } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';

const CPanelHostingPage: React.FC = () => {
  const techSpecs = [
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "LiteSpeed Enterprise",
        description: "Replace Apache with LiteSpeed for up to 9x faster performance. Includes LSMap and LSCache for blazing fast WordPress sites."
    },
    {
        icon: <Cloud className="w-6 h-6 text-brand-blue" />,
        title: "CloudLinux OS",
        description: "Isolates each account in a Lightweight Virtualized Environment (LVE), ensuring one tenant cannot slow down your website."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Imunify360 Security",
        description: "AI-driven firewall, malware scanning, and proactive defense against brute-force attacks and zero-day exploits."
    },
    {
        icon: <Database className="w-6 h-6 text-brand-blue" />,
        title: "NVMe SSD Storage",
        description: "Enterprise-grade NVMe drives provide read/write speeds significantly faster than standard SATA SSDs."
    }
  ];

  const features = [
    "cPanel Control Panel",
    "Softaculous Auto-Installer",
    "Free AutoSSL Certificates",
    "Unlimited Bandwidth",
    "Daily JetBackup",
    "Node.js & Python Support",
  ];

  const plans = [
    {
      name: "Starter",
      price: "40.00",
      description: "Perfect for personal blogs and simple portfolios.",
      emailAccounts: "10 Email Accounts",
      subdomains: "Unlimited Subdomains",
      features: [
        "Unlimited Disk Space",
        "Unlimited Bandwidth",
        "10 Email Accounts",
        "Free SSL Certificate",
        "Softaculous Installer",
        "LiteSpeed Web Server"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-website-hosting/starter",
      highlight: false
    },
    {
      name: "Growth",
      price: "50.00",
      description: "Great for small businesses getting started online.",
      emailAccounts: "50 Email Accounts",
      subdomains: "Unlimited Subdomains",
      features: [
        "Unlimited Disk Space",
        "Unlimited Bandwidth",
        "50 Email Accounts",
        "Free SSL Certificate",
        "Softaculous Installer",
        "LiteSpeed Web Server"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-website-hosting/growth",
      highlight: false
    },
    {
      name: "Business",
      price: "65.00",
      description: "Our most popular plan for established companies.",
      emailAccounts: "250 Email Accounts",
      subdomains: "Unlimited Subdomains",
      features: [
        "Unlimited Disk Space",
        "Unlimited Bandwidth",
        "250 Email Accounts",
        "Free SSL Certificate",
        "Softaculous Installer",
        "LiteSpeed Web Server",
        "Priority Support"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-website-hosting/business",
      highlight: true
    },
    {
      name: "Corporate",
      price: "80.00",
      description: "Maximum power for resource-intensive websites.",
      emailAccounts: "500 Email Accounts",
      subdomains: "Unlimited Subdomains",
      features: [
        "Unlimited Disk Space",
        "Unlimited Bandwidth",
        "500 Email Accounts",
        "Free SSL Certificate",
        "Softaculous Installer",
        "LiteSpeed Web Server",
        "Priority Support"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-website-hosting/corporate",
      highlight: false
    }
  ];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-orange-400 border border-orange-500/30 mb-8">
                        <Settings className="w-4 h-4 animate-spin-slow" />
                        <span>The World's #1 Control Panel</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Hosting Made <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Simple & Powerful.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Manage your websites, databases, emails, and files with the industry-standard cPanel interface. Powered by LiteSpeed Enterprise for unmatched speed and reliability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-orange-500 text-white hover:bg-orange-600 border-transparent shadow-lg shadow-orange-500/20">
                            View Pricing
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                        >
                            Contact Sales
                        </Button>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> LiteSpeed Web Server</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> CloudLinux OS</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> Imunify360 Security</div>
                    </div>
                </div>

                {/* Graphic/Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Abstract Server Graphic */}
                    <div className="relative w-full max-w-lg">
                        {/* Center Card representing cPanel */}
                        <div className="relative z-20 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-400">cPanel Dashboard</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl flex items-center space-x-3 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Mail className="w-6 h-6"/></div>
                                    <div>
                                        <p className="text-xs text-gray-400">Email</p>
                                        <p className="font-bold text-sm text-white">Accounts</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl flex items-center space-x-3 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Settings className="w-6 h-6"/></div>
                                    <div>
                                        <p className="text-xs text-gray-400">Files</p>
                                        <p className="font-bold text-sm text-white">Manager</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl flex items-center space-x-3 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Database className="w-6 h-6"/></div>
                                    <div>
                                        <p className="text-xs text-gray-400">MySQL</p>
                                        <p className="font-bold text-sm text-white">Databases</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl flex items-center space-x-3 hover:bg-white/10 transition-colors cursor-default">
                                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Code className="w-6 h-6"/></div>
                                    <div>
                                        <p className="text-xs text-gray-400">1-Click</p>
                                        <p className="font-bold text-sm text-white">Installs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400">Server Load</span>
                                    <span className="text-green-400 font-mono">0.42 (Low)</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-[15%] h-full rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element: Softaculous */}
                        <div className="absolute -top-12 -right-8 z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl animate-float-slow">
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-600 p-2 rounded-lg text-white">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">Softaculous</p>
                                    <p className="text-sm font-bold text-white">400+ Apps</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element: Security */}
                        <div className="absolute -bottom-8 -left-8 z-30 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl animate-float-reverse">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-600 p-2 rounded-lg text-white">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">Imunify360</p>
                                    <p className="text-sm font-bold text-white">Protected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Intro Section - Updated to flow from new hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Settings className="w-4 h-4 mr-2" />
                        Complete Control
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Manage your digital presence with ease.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        cPanel provides a graphical interface and automation tools designed to simplify the process of hosting a web site. It is the industry standard for a reason: it puts you in the driver's seat.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you need to create email accounts, manage files, create databases, or install WordPress, cPanel makes it simple—no command line required.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {features.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    {/* Visual Graphic representing cPanel Features */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-blue-50 rounded-3xl transform -rotate-2"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-8">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-xl text-brand-blue">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Management</h4>
                                    <p className="text-sm text-gray-600 mt-1">Create unlimited email accounts, forwarders, and autoresponders. Access via Webmail or Outlook.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                                    <Settings className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">File Manager</h4>
                                    <p className="text-sm text-gray-600 mt-1">Upload, edit, and manage your website files directly from the browser. No FTP client needed.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                                    <Database className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Database Tools</h4>
                                    <p className="text-sm text-gray-600 mt-1">Create MySQL databases and manage them with phpMyAdmin for dynamic applications.</p>
                                </div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                <p className="text-lg text-gray-600">
                    Powerful hosting doesn't have to break the bank. Choose the plan that fits your growth.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col bg-white rounded-2xl p-6 transition-all duration-300 ${plan.highlight ? 'border-2 border-brand-blue shadow-xl scale-105 z-10' : 'border border-gray-200 shadow-sm hover:shadow-lg'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{plan.description}</p>
                        </div>
                        
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-baseline">
                                <span className="text-4xl font-extrabold text-gray-900">R{plan.price}</span>
                                <span className="text-gray-500 ml-2">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? 'text-brand-blue' : 'text-green-500'}`} />
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

      {/* Tech Stack Details */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineered for Performance</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">We don't use standard hardware. Our hosting platform is built on enterprise-grade technology to ensure your website is always fast, secure, and online.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {techSpecs.map((spec, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors">
                          <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4">
                              {spec.icon}
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{spec.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{spec.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Softaculous Strip */}
      <section className="py-16 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                  <Zap className="w-4 h-4 mr-2 text-brand-green" />
                  1-Click Installation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Install 400+ Apps in Seconds</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  With Softaculous included for free, you can install WordPress, Joomla, Drupal, Magento, and hundreds of other scripts with a single click. No coding knowledge required.
              </p>
              <div className="flex flex-wrap justify-center gap-4 opacity-80">
                  {['WordPress', 'Joomla', 'Drupal', 'Magento', 'PrestaShop', 'OpenCart'].map(app => (
                      <span key={app} className="bg-white text-brand-blue px-6 py-2 rounded-lg font-bold shadow-lg">
                          {app}
                      </span>
                  ))}
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default CPanelHostingPage;
