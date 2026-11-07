
import React from 'react';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import { Server, Cloud, Zap, Shield, Database, Mail, Users, CheckCircle, ArrowRight, Lock, Settings, Clock, Globe, Activity } from './components/icons';
import MigrationForm from './MigrationForm';

const WebHostingPage: React.FC = () => {
  const navigate = useNavigation();

  const hostingSolutions = [
    {
      title: "cPanel Hosting",
      icon: <Server className="w-8 h-8 text-brand-blue" />,
      description: "The industry standard for web hosting. Powerful, easy-to-use, and packed with features.",
      features: ["cPanel Control Panel", "Softaculous Installer", "Unlimited Bandwidth"],
      price: "From R40/pm",
      link: "/web-hosting/cpanel-hosting",
      popular: true
    },
    {
      title: "Managed WordPress",
      icon: <CheckCircle className="w-8 h-8 text-brand-green" />,
      description: "Optimized specifically for WordPress websites. Blazing fast speeds and enhanced security.",
      features: ["LiteSpeed Caching", "Auto-Updates", "Malware Scanning"],
      price: "From R75/pm",
      link: "/web-hosting/wordpress-hosting",
      popular: false
    },
    {
      title: "Reseller Hosting",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      description: "Start your own hosting business. Manage multiple client sites from one master dashboard.",
      features: ["WHM Access", "White-Label", "Billing Integration"],
      price: "From R149/pm",
      link: "/web-hosting/reseller-hosting",
      popular: false
    },
    {
      title: "DirectAdmin Hosting",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: "A lightweight, high-performance alternative to cPanel. Perfect for power users.",
      features: ["Low Resource Usage", "Fast Interface", "Cost Effective"],
      price: "Contact Sales",
      link: "/web-hosting/directadmin-hosting",
      popular: false
    },
    {
      title: "Business Email",
      icon: <Mail className="w-8 h-8 text-red-500" />,
      description: "Professional email hosting @yourdomain. Secure, spam-free, and reliable.",
      features: ["10GB+ Storage", "Mobile Sync", "Webmail Access"],
      price: "From R35/pm",
      link: "/web-hosting/cpanel-email-hosting",
      popular: false
    },
    {
      title: "Domain Registration",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      description: "Secure your online identity. Search and register .co.za, .com, and more.",
      features: ["DNS Management", "Theft Protection", "Instant Activation"],
      price: "From R99/yr",
      link: "/web-hosting/domains",
      popular: false
    }
  ];

  const techSpecs = [
      {
          icon: <Zap className="w-6 h-6 text-brand-blue" />,
          title: "LiteSpeed Web Server",
          description: "Powered by LiteSpeed Enterprise, our servers handle traffic spikes effortlessly and serve content up to 9x faster than Apache."
      },
      {
          icon: <Database className="w-6 h-6 text-brand-blue" />,
          title: "NVMe SSD Storage",
          description: "We use enterprise-grade NVMe drives for storage, providing significantly faster read/write speeds for your databases and files."
      },
      {
          icon: <Shield className="w-6 h-6 text-brand-blue" />,
          title: "Imunify360 Security",
          description: "Advanced AI-driven security that proactively detects and blocks malware, brute-force attacks, and other web threats."
      },
      {
          icon: <Cloud className="w-6 h-6 text-brand-blue" />,
          title: "CloudLinux OS",
          description: "Each account is isolated in its own lightweight virtualized environment (LVE), ensuring stability and security for all users."
      }
  ];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px]"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>NVMe SSD Storage Standard</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Scalable Cloud & Web Hosting
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Stop losing customers to slow load times. Deploy your site on our enterprise-grade cloud infrastructure powered by LiteSpeed, CloudLinux, and local South African data centers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-brand-green text-gray-900 hover:bg-white border-transparent">
                            View Plans
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => document.getElementById('migration')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                        >
                            Migrate for Free
                        </Button>
                    </div>
                    
                    <div className="mt-10 flex items-center gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> cPanel Included</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> 99.9% Uptime</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-green"/> Local Support</div>
                    </div>
                </div>

                {/* Graphic/Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Abstract Server Graphic */}
                    <div className="relative w-full max-w-lg">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
                        
                        {/* Main Dashboard Panel */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                                <div className="flex items-center space-x-3">
                                    <Server className="w-5 h-5 text-brand-green" />
                                    <span className="text-sm font-mono text-gray-300">server01.iptone.cloud</span>
                                </div>
                                <span className="inline-flex items-center bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                    ONLINE
                                </span>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Web Server</p>
                                    <p className="text-white font-bold flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-1"/> LiteSpeed</p>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Storage</p>
                                    <p className="text-white font-bold flex items-center"><Database className="w-4 h-4 text-brand-green mr-1"/> NVMe SSD</p>
                                </div>
                            </div>

                            {/* Service Health List */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Globe className="w-4 h-4 mr-2"/> HTTP/HTTPS</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-full animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Database className="w-4 h-4 mr-2"/> MySQL</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-full animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 flex items-center"><Mail className="w-4 h-4 mr-2"/> Exim Mail</span>
                                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 z-30 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center space-x-3 animate-float-slow">
                            <div className="bg-brand-blue p-2 rounded-lg">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Network Uptime</p>
                                <p className="text-sm font-bold text-white">99.99%</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 z-30 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center space-x-3 animate-float-reverse">
                            <div className="bg-brand-green p-2 rounded-lg">
                                <Shield className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Security</p>
                                <p className="text-sm font-bold text-white">Imunify360 Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                  <div className="flex flex-col items-center">
                      <Clock className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">99.9%</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Uptime Guarantee</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Zap className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">LiteSpeed</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Web Server</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Shield className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">Imunify360</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">AI Security</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Database className="w-8 h-8 text-brand-blue mb-2" />
                      <p className="text-3xl font-bold text-gray-900">NVMe</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">SSD Storage</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Main Solutions Grid */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
                <p className="text-lg text-gray-600">
                    We offer a variety of hosting environments tailored to different technical needs and budgets.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingSolutions.map((plan, index) => (
                <div 
                    key={index} 
                    className={`relative flex flex-col bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.popular ? 'border-brand-blue ring-1 ring-brand-blue shadow-lg' : 'border-gray-200'}`}
                >
                  {plan.popular && (
                      <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                          MOST POPULAR
                      </div>
                  )}
                  <div className="p-8 flex-grow">
                      <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                          {plan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{plan.description}</p>
                      
                      <div className="space-y-3 mb-6">
                          {plan.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-sm text-gray-500">
                                  <CheckCircle className="w-4 h-4 text-brand-green mr-2 shrink-0" />
                                  {feature}
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="p-8 pt-0 mt-auto border-t border-gray-50">
                      <div className="flex items-center justify-between mt-6">
                          <div>
                              <p className="text-xs text-gray-400 font-medium uppercase">Starting At</p>
                              <p className="text-lg font-bold text-gray-900">{plan.price}</p>
                          </div>
                          <Button onClick={() => navigate(plan.link)} variant={plan.popular ? 'default' : 'outline'} size="default">
                              View Plans
                          </Button>
                      </div>
                  </div>
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

export default WebHostingPage;
