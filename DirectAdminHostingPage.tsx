
import React from 'react';
import { CheckCircle, Zap, Server, Shield, Database, Code, Activity, Settings, ArrowRight, Check, Cloud } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';

const DirectAdminHostingPage: React.FC = () => {
  const plans = [
    {
      name: "500MB - DirectAdmin",
      price: "39.00",
      description: "Entry-level hosting.",
      features: [
        "500MB Disk space",
        "3 Email Accounts",
        "1 MySQL Databases",
        "FTP Account",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "1GB - DirectAdmin",
      price: "45.00",
      description: "Great for small sites.",
      features: [
        "1GB Disk space",
        "50 Email Accounts",
        "1 MySQL Databases",
        "FTP Account",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "2GB - DirectAdmin",
      price: "55.00",
      description: "More space for growing sites.",
      features: [
        "2GB Disk space",
        "75 Email Accounts",
        "2 MySQL Databases",
        "2 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "3GB - DirectAdmin",
      price: "65.00",
      description: "Standard hosting plan.",
      features: [
        "3GB Disk space",
        "100 Email Accounts",
        "5 MySQL Databases",
        "5 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "4GB - DirectAdmin",
      price: "75.00",
      description: "Enhanced resources.",
      features: [
        "4GB Disk space",
        "150 Email Accounts",
        "20 MySQL Databases",
        "5 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: true
    },
    {
      name: "10GB - DirectAdmin",
      price: "80.00",
      description: "Plenty of space.",
      features: [
        "10GB Disk space",
        "200 Email Accounts",
        "20 MySQL Databases",
        "5 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "20GB - DirectAdmin",
      price: "90.00",
      description: "Large storage capacity.",
      features: [
        "20GB Disk space",
        "200 Email Accounts",
        "0 MySQL Databases",
        "10 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "50GB - DirectAdmin",
      price: "120.00",
      description: "Serious storage needs.",
      features: [
        "50GB Disk Space",
        "200 Email Accounts",
        "20 MySQL Databases",
        "10 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    },
    {
      name: "100GB - DirectAdmin",
      price: "150.00",
      description: "Maximum DirectAdmin power.",
      features: [
        "100GB Disk Space",
        "200 Email Accounts",
        "20 MySQL Databases",
        "10 FTP Accounts",
        "DirectAdmin Panel",
        "LiteSpeed Web Server"
      ],
      link: "https://billing.alphahosting.co.za/store/shared-hosting",
      highlight: false
    }
  ];

  const features = [
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "Blazing Fast Speed",
        description: "DirectAdmin uses significantly fewer server resources than competitors, meaning your website gets more CPU power for actual traffic."
    },
    {
        icon: <Code className="w-6 h-6 text-brand-blue" />,
        title: "Developer Ready",
        description: "Native support for multiple PHP versions, Node.js, Python, and Git version control directly from the interface."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Secure & Stable",
        description: "Isolated environments with CloudLinux and automated updates keep your hosting secure against vulnerabilities."
    },
    {
        icon: <Settings className="w-6 h-6 text-brand-blue" />,
        title: "Simple Interface",
        description: "A clean, modern GUI that is easy to navigate. Find what you need without digging through cluttered menus."
    },
    {
        icon: <Database className="w-6 h-6 text-brand-blue" />,
        title: "Database Tools",
        description: "Full MySQL/MariaDB management via phpMyAdmin. Create, backup, and restore databases with ease."
    },
    {
        icon: <Activity className="w-6 h-6 text-brand-blue" />,
        title: "Resource Monitor",
        description: "View real-time usage stats for CPU, RAM, and Disk I/O to ensure your site is always performing optimally."
    }
  ];

  return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                     <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-yellow-400 border border-yellow-500/20 mb-8">
                        <Zap className="w-4 h-4" />
                        <span>The Speed King</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Maximum Performance.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Minimum Drag.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        DirectAdmin is designed to be lightweight and fast. When every millisecond counts, strip away the bloat and power your websites with the most efficient control panel on the market.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold text-lg bg-yellow-500 text-gray-900 hover:bg-yellow-400 border-transparent shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                            See Pricing
                        </Button>
                        <Button size="lg" variant="outline" className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900">
                            Features
                        </Button>
                    </div>
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-500"/> LiteSpeed Enterprise</div>
                        <div className="flex items-center"><Database className="w-4 h-4 mr-2 text-yellow-500"/> NVMe Storage</div>
                        <div className="flex items-center"><Activity className="w-4 h-4 mr-2 text-yellow-500"/> Resource Efficient</div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Abstract "Fast" Server Graphic */}
                    <div className="relative w-full max-w-lg">
                        {/* Main Interface Card */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                            {/* Fake Browser Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-500">DirectAdmin</span>
                            </div>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Server Load</p>
                                    <div className="flex items-end space-x-2">
                                        <span className="text-2xl font-bold text-green-400">0.12</span>
                                        <span className="text-xs text-green-500 mb-1">▼ Low</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 w-[10%] h-full"></div>
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                    <p className="text-xs text-gray-400 mb-1">Memory Usage</p>
                                    <div className="flex items-end space-x-2">
                                        <span className="text-2xl font-bold text-blue-400">14%</span>
                                        <span className="text-xs text-blue-500 mb-1">Efficient</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 w-[14%] h-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Speed Comparison */}
                            <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Benchmark Score</p>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-white">DirectAdmin + LiteSpeed</span>
                                            <span className="text-yellow-400 font-bold">98/100</span>
                                        </div>
                                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-[98%] h-full"></div>
                                        </div>
                                    </div>
                                    <div className="opacity-50">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-gray-400">Traditional Hosting</span>
                                            <span className="text-gray-400">65/100</span>
                                        </div>
                                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gray-500 w-[65%] h-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 z-30 bg-yellow-500 text-gray-900 p-4 rounded-xl shadow-lg font-bold flex items-center animate-bounce-slow">
                            <Zap className="w-5 h-5 mr-2" />
                            <span>Blazing Fast</span>
                        </div>
                        
                        <div className="absolute -bottom-6 -left-6 z-10 bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-400" />
                            <span className="text-sm text-gray-300">Developer Friendly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Speed Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    {/* Visual Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-3xl opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl text-white border border-gray-800">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                            <span className="font-mono text-brand-green">Server Load</span>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-gray-400">
                                    <span>DirectAdmin Overhead</span>
                                    <span className="text-white font-bold">Low (1-2%)</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-green w-[5%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-gray-400">
                                    <span>Available for Your Website</span>
                                    <span className="text-white font-bold">Maximized (98%)</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-blue w-[98%]"></div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-700">
                                <p className="text-sm text-gray-400 italic">
                                    "DirectAdmin is designed to be as lightweight as possible, leaving more server resources available for your applications."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Zap className="w-4 h-4 mr-2" />
                        Performance First
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Why choose DirectAdmin?
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        If you value speed and simplicity over complex menus, DirectAdmin is for you. It's a high-performance control panel that does exactly what you need—hosting websites and email—without the resource-heavy processes found in other panels.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We combine this efficient software with our enterprise-grade <strong>NVMe storage</strong> and <strong>LiteSpeed Web Servers</strong> to create a hosting environment that screams speed.
                    </p>
                    
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Faster Page Loads
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Lower Monthly Cost
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" /> Same Powerful Features
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost-Effective Power</h2>
                <p className="text-lg text-gray-600">
                    Get premium performance at a fraction of the cost. Choose the plan that fits your project.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            Sign Up
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Don't let the simplicity fool you. DirectAdmin is packed with powerful tools for admins and developers.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50">
                        <CardContent className="p-8">
                            <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">DirectAdmin vs. cPanel</h2>
                  <p className="text-gray-400">Which one is right for you?</p>
              </div>
              
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-gray-800">
                              <th className="p-6 font-semibold text-gray-300 uppercase text-sm tracking-wider">Feature</th>
                              <th className="p-6 font-bold text-white text-lg w-1/3">DirectAdmin</th>
                              <th className="p-6 font-semibold text-gray-400 text-lg w-1/3">cPanel</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                          <tr>
                              <td className="p-6 text-gray-300">Server Footprint</td>
                              <td className="p-6 text-brand-green font-bold">Very Low (Lightweight)</td>
                              <td className="p-6 text-gray-400">Medium/High</td>
                          </tr>
                          <tr>
                              <td className="p-6 text-gray-300">Speed & Performance</td>
                              <td className="p-6 text-brand-green font-bold">High Performance</td>
                              <td className="p-6 text-gray-400">Standard</td>
                          </tr>
                          <tr>
                              <td className="p-6 text-gray-300">Cost Efficiency</td>
                              <td className="p-6 text-brand-green font-bold">More Affordable</td>
                              <td className="p-6 text-gray-400">Premium Price</td>
                          </tr>
                          <tr>
                              <td className="p-6 text-gray-300">Ease of Use</td>
                              <td className="p-6 text-white">Clean & Simple</td>
                              <td className="p-6 text-gray-400">Feature Dense</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <p className="text-center text-gray-500 text-sm mt-8">
                  Both panels run on our high-speed NVMe infrastructure. DirectAdmin is recommended for users prioritizing speed and budget.
              </p>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default DirectAdminHostingPage;
