
import React from 'react';
import { CheckCircle, Check, Zap, Shield, Database, Lock, Code, Activity, Globe, Cloud, GitBranch, Settings, RefreshCw } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent } from './components/Card';

const WordPressHostingPage: React.FC = () => {
  const plans = [
    {
      name: "WP Classic",
      price: "75.00",
      description: "Ideal for personal blogs and starter sites.",
      features: [
        "1 WordPress Site",
        "10 GB NVMe Storage",
        "Unlimited Bandwidth",
        "50 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Cache (LSCache)",
        "WordPress Toolkit"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-wordpress-hostig/wordpress-classic",
      highlight: false
    },
    {
      name: "WP Essential",
      price: "99.00",
      description: "More power for growing businesses.",
      features: [
        "5 WordPress Sites",
        "25 GB NVMe Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Cache (LSCache)",
        "WordPress Toolkit Deluxe",
        "Staging Environment"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-wordpress-hostig/wordpress-essential",
      highlight: true
    },
    {
      name: "WP eCommerce",
      price: "129.00",
      description: "High performance for online stores.",
      features: [
        "Unlimited WordPress Sites",
        "50 GB NVMe Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Cache (LSCache)",
        "WordPress Toolkit Deluxe",
        "Smart Updates AI"
      ],
      link: "https://website365.co.za/index.php?rp=/store/unlimited-wordpress-hostig/wordpress-ecommerce",
      highlight: false
    }
  ];

  const toolkitFeatures = [
      {
          icon: <GitBranch className="w-6 h-6 text-brand-blue" />,
          title: "1-Click Staging",
          description: "Test changes safely. Clone your live site to a staging area with one click, make edits, and push back to live without breaking anything."
      },
      {
          icon: <Lock className="w-6 h-6 text-brand-blue" />,
          title: "Security Hardening",
          description: "Automatically apply recommended security settings to your WordPress installation to prevent common vulnerabilities."
      },
      {
          icon: <Activity className="w-6 h-6 text-brand-blue" />,
          title: "Smart Updates",
          description: "Keep your core, plugins, and themes updated automatically. Our AI checks if an update breaks your site before applying it."
      }
  ];

  const techSpecs = [
      { label: "Web Server", value: "LiteSpeed Enterprise" },
      { label: "Storage", value: "NVMe SSD" },
      { label: "Caching", value: "LSCache + QUIC.cloud" },
      { label: "PHP Version", value: "8.0, 8.1, 8.2, 8.3" }
  ];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
            {/* Dot Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/tiny-grid.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 border border-blue-500/30 mb-8">
                        <CheckCircle className="w-4 h-4 text-brand-green" />
                        <span>Optimized for WordPress</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        WordPress Hosting, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-green">Perfected.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Experience the difference of a platform built specifically for WordPress. Blazing fast speeds with LiteSpeed, airtight security with Imunify360, and automated maintenance so you can focus on creating.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-blue-600 text-white hover:bg-blue-500 border-transparent shadow-lg shadow-blue-900/20">
                            View Plans
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                        >
                            Migrate Free
                        </Button>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400"/> LiteSpeed Cache</div>
                        <div className="flex items-center"><Lock className="w-4 h-4 mr-2 text-brand-green"/> Free SSL</div>
                        <div className="flex items-center"><RefreshCw className="w-4 h-4 mr-2 text-blue-400"/> Auto Updates</div>
                    </div>
                </div>

                {/* Visual Graphic */}
                <div className="relative lg:h-[550px] flex items-center justify-center">
                    {/* Floating Dashboard Card */}
                    <div className="relative z-20 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 border border-gray-100">
                        {/* Fake Header */}
                        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-gray-500 flex-grow text-center font-mono">my-wordpress-site.com</div>
                        </div>
                        
                        {/* Body */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 p-2 rounded-lg text-white">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Performance</p>
                                        <p className="text-lg font-bold text-gray-900">PageSpeed Score</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-extrabold text-green-500">99</span>
                                    <span className="text-gray-400 text-sm">/100</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">First Contentful Paint</span>
                                        <span className="text-green-600 font-bold">0.4s</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[95%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Time to Interactive</span>
                                        <span className="text-green-600 font-bold">0.8s</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[90%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Speed Index</span>
                                        <span className="text-green-600 font-bold">0.5s</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[98%]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-blue-500 font-bold uppercase">Security</p>
                                    <p className="text-gray-900 font-bold flex items-center justify-center mt-1">
                                        <Shield className="w-4 h-4 mr-1 text-green-500" /> Secure
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-blue-500 font-bold uppercase">Uptime</p>
                                    <p className="text-gray-900 font-bold flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 mr-1 text-green-500" /> 100%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 z-30 bg-blue-600 text-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                        <div className="flex items-center space-x-2 font-bold">
                            <Zap className="w-5 h-5" />
                            <span>Blazing Fast</span>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-10 -left-10 z-10 w-64 h-64 bg-gradient-to-tr from-brand-green to-blue-400 rounded-full blur-[80px] opacity-40"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Speed & Performance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Zap className="w-4 h-4 mr-2" />
                        Built for Speed
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Don't let a slow site cost you customers.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Google loves fast sites, and so do your visitors. Our Managed WordPress hosting is powered by <strong>LiteSpeed Enterprise</strong> Web Server, which is up to 12x faster than Nginx and 84x faster than Apache.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Combined with the <strong>LSCache plugin</strong> (pre-installed), your pages are cached at the server level, delivering instant load times and handling traffic spikes with ease.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {techSpecs.map((spec, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{spec.label}</p>
                                <p className="text-lg font-bold text-gray-900">{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    {/* Visual Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-blue-100 rounded-full blur-3xl opacity-60"></div>
                    <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl text-white border border-gray-700 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-gray-400">
                                    <span>Traditional Hosting (Apache)</span>
                                    <span>250 req/sec</span>
                                </div>
                                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-500 w-[15%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-gray-400">
                                    <span>Standard Nginx</span>
                                    <span>1,500 req/sec</span>
                                </div>
                                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[45%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-white font-bold">
                                    <span>IPT One (LiteSpeed + LSCache)</span>
                                    <span>5,000+ req/sec</span>
                                </div>
                                <div className="h-3 bg-gray-700 rounded-full overflow-hidden relative">
                                    <div className="h-full bg-gradient-to-r from-brand-green to-green-400 w-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-6 italic">Based on WordPress benchmark tests handling concurrent requests.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">WordPress Pricing</h2>
                <p className="text-lg text-gray-600">
                    Fully managed environments with no hidden fees.
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
                            Order Now
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* WordPress Toolkit Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">WordPress Toolkit Included</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Manage your WordPress sites like a pro. Every plan includes the powerful WordPress Toolkit to automate complex tasks.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {toolkitFeatures.map((feat, index) => (
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

      {/* Feature List */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                  <div>
                      <h2 className="text-3xl font-bold mb-6">Everything else you need</h2>
                      <p className="text-blue-100 text-lg mb-8">
                          We don't hold back on features. All our WordPress plans come with the essentials to keep your site safe and running smoothly.
                      </p>
                      <Button as="a" href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                          Contact Sales
                      </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">Free Domain (Annual Plans)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">Free Migration Service</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">Imunify360 Security</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">Daily JetBackups</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">99.9% Uptime SLA</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                          <span className="font-medium">24/7 Expert Support</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default WordPressHostingPage;
