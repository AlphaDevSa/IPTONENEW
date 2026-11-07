
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Wifi, Smartphone, Zap, MapPin, Tower, Globe, ArrowRight, Check, SimCard, Signal } from './components/icons';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';

const LTE5GPage: React.FC = () => {
  const navigate = useNavigation();

  const categories = [
    {
      title: "Fixed LTE & 5G",
      subtitle: "The Fibre Alternative",
      description: "Plug-and-play internet for your home or office. Locked to your location for optimized speeds and stability. No cables, no installation waiting times.",
      icon: <Tower className="w-10 h-10 text-brand-blue" />,
      features: ["Router Included or SIM Only", "Locked to Tower", "High Data Caps / Uncapped"],
      links: [
        { label: "MTN Fixed LTE/5G", path: "/connectivity/lte-5g/mtn-fixed" },
        { label: "Home Internet (Vodacom & MTN)", path: "/connectivity/lte-5g/mtn-fixed" },
        { label: "Telkom LTE/5G", path: "/connectivity/lte-5g/telkom-data-sim" },
        { label: "Vodacom Fixed LTE/5G", path: "/connectivity/lte-5g/vodacom" }
      ]
    },
    {
      title: "Mobile Data",
      subtitle: "Internet on the Go",
      description: "Flexible data for smartphones, tablets, and portable routers. Stay connected anywhere in South Africa with no location restrictions.",
      icon: <Smartphone className="w-10 h-10 text-brand-green" />,
      features: ["Use in Any Device", "Roam Anywhere", "Top-Up or Contract"],
      links: [
        { label: "MTN Mobile Data", path: "/connectivity/lte-5g/mtn-mobile" },
        { label: "Telkom Data", path: "/connectivity/lte-5g/telkom-data-sim" }
      ]
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Wireless Speed, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">Unleashed.</span>
            </>
        }
        subtitle="Cut the cables without cutting the speed. Instant, plug-and-play 5G and LTE connectivity for your home, business, or mobile workforce."
        badge={
            <>
                <Tower className="w-4 h-4" />
                <span>Next-Gen 5G</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                
                {/* Main Device Visual (Router) */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    {/* Router Antennae */}
                    <div className="flex justify-between px-8 -mt-12 mb-4">
                        <div className="w-2 h-12 bg-gray-800 rounded-t-lg border border-gray-600"></div>
                        <div className="w-2 h-12 bg-gray-800 rounded-t-lg border border-gray-600"></div>
                        <div className="w-2 h-12 bg-gray-800 rounded-t-lg border border-gray-600"></div>
                        <div className="w-2 h-12 bg-gray-800 rounded-t-lg border border-gray-600"></div>
                    </div>

                    {/* Router Face */}
                    <div className="text-center mb-8">
                        <h3 className="text-white font-bold text-xl mb-1">5G Gateway</h3>
                        <p className="text-brand-green text-xs font-mono animate-pulse">● SIGNAL STRONG</p>
                    </div>

                    {/* Signal Bars */}
                    <div className="flex justify-center items-end space-x-2 h-16 mb-8">
                        <div className="w-3 h-4 bg-brand-blue/30 rounded-sm"></div>
                        <div className="w-3 h-8 bg-brand-blue/60 rounded-sm"></div>
                        <div className="w-3 h-12 bg-brand-blue rounded-sm"></div>
                        <div className="w-3 h-16 bg-brand-blue rounded-sm shadow-[0_0_10px_rgba(0,83,155,0.8)]"></div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-800">
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase">Download</p>
                            <p className="text-white font-bold text-xl">500 <span className="text-xs text-gray-500">Mbps</span></p>
                        </div>
                        <div className="text-center border-l border-gray-800">
                            <p className="text-gray-400 text-xs uppercase">Devices</p>
                            <p className="text-white font-bold text-xl">64+</p>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-8 z-30 bg-gray-800 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <Wifi className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Wi-Fi 6</p>
                        <p className="text-xs font-bold text-white">Ready</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-8 z-30 bg-gray-800 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <SimCard className="w-5 h-5 text-purple-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Setup</p>
                        <p className="text-xs font-bold text-white">Plug & Play</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-brand-blue/20">
                View Packages
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')}
            >
                Check Coverage
            </Button>
        </div>
      </Hero>

      {/* Category Split */}
      <section className="py-20 bg-gray-50 relative" id="options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Connectivity Style</h2>
                <p className="text-lg text-gray-600">
                    Not all wireless internet is the same. Select the solution that fits your usage.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat, index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                        <div className="p-8 flex-grow">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-gray-50 p-4 rounded-2xl">
                                    {cat.icon}
                                </div>
                                <span className="px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-full">
                                    {cat.subtitle}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {cat.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {cat.features.map((feat, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Available Packages</p>
                            <div className="grid gap-3">
                                {cat.links.map((link, i) => (
                                    <Button 
                                        key={i} 
                                        onClick={() => navigate(link.path)} 
                                        variant="outline" 
                                        className="w-full justify-between group bg-white hover:bg-brand-blue hover:text-white hover:border-brand-blue"
                                    >
                                        {link.label} 
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5G Spotlight - Dark Mode */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-brand-blue rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-50%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-brand-green bg-brand-green/10 mb-6 border border-brand-green/20">
                          <Zap className="w-4 h-4 mr-2" />
                          The Future is Fast
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                          Enterprise Grade <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">5G Connectivity</span>
                      </h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          5G isn't just an upgrade; it's a revolution. With ultra-low latency and speeds rivaling fibre, 5G enables real-time cloud computing, high-definition video conferencing, and massive IoT deployments without a single cable.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6">
                          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                              <p className="text-3xl font-bold text-white mb-1">500+</p>
                              <p className="text-sm text-gray-400">Mbps Speeds</p>
                          </div>
                          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                              <p className="text-3xl font-bold text-white mb-1">&lt;20ms</p>
                              <p className="text-sm text-gray-400">Low Latency</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="relative">
                      <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                              <h3 className="text-xl font-bold">5G vs 4G/LTE</h3>
                              <Wifi className="w-6 h-6 text-brand-green" />
                          </div>
                          <div className="space-y-6">
                              <div>
                                  <div className="flex justify-between text-sm mb-2">
                                      <span className="text-gray-400">Download Speed</span>
                                      <span className="text-brand-green font-bold">10x Faster</span>
                                  </div>
                                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                      <div className="h-full bg-brand-green w-[95%]"></div>
                                  </div>
                              </div>
                              <div>
                                  <div className="flex justify-between text-sm mb-2">
                                      <span className="text-gray-400">Latency</span>
                                      <span className="text-brand-blue font-bold">Ultra Low</span>
                                  </div>
                                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                      <div className="h-full bg-brand-blue w-[20%]"></div>
                                  </div>
                              </div>
                              <div>
                                  <div className="flex justify-between text-sm mb-2">
                                      <span className="text-gray-400">Capacity</span>
                                      <span className="text-purple-400 font-bold">Massive</span>
                                  </div>
                                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                      <div className="h-full bg-purple-500 w-[90%]"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                              <p className="text-sm text-gray-400 mb-4">Available now on select MTN & Vodacom packages</p>
                              <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="w-full bg-white text-gray-900 hover:bg-gray-100">
                                  Check 5G Coverage
                              </Button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Network Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Network Partners</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We aggregate South Africa's best mobile networks to give you the widest coverage and the best value.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* MTN Card */}
                <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                        FASTEST SPEEDS
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">MTN</h3>
                    <p className="text-gray-500 mb-6">Best for speed and performance.</p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-yellow-500 mr-2" />
                            Award-winning 5G Network
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-yellow-500 mr-2" />
                            High Fixed-LTE Caps
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-yellow-500 mr-2" />
                            Extensive Coverage
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        <Button onClick={() => navigate('/connectivity/lte-5g/mtn-fixed')} variant="outline" className="flex-1 text-xs px-2 min-w-[80px]">Fixed LTE</Button>
                        <Button onClick={() => navigate('/connectivity/lte-5g/mtn-mobile')} variant="outline" className="flex-1 text-xs px-2 min-w-[80px]">Mobile</Button>
                        <Button onClick={() => navigate('/connectivity/data-sim/mtn')} variant="outline" className="flex-1 text-xs px-2 min-w-[80px]">Data Sim</Button>
                    </div>
                </div>

                {/* Telkom Card */}
                <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-400 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                        BEST VALUE
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Telkom</h3>
                    <p className="text-gray-500 mb-6">Best for affordable data.</p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-blue-400 mr-2" />
                            Lowest Cost Per GB
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-blue-400 mr-2" />
                            Telkom One Bundles
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-blue-400 mr-2" />
                            Roaming on MTN
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        <Button onClick={() => navigate('/connectivity/lte-5g/telkom-data-sim')} variant="outline" className="flex-1 text-xs px-2">Data SIM</Button>
                        <Button onClick={() => navigate('/connectivity/lte-5g/telkom-one')} variant="outline" className="flex-1 text-xs px-2">Telkom One</Button>
                    </div>
                </div>

                {/* Vodacom Card */}
                <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-red-500 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                        BEST COVERAGE
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Vodacom</h3>
                    <p className="text-gray-500 mb-6">Best for rural & remote reliability.</p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-red-500 mr-2" />
                            Widest National Footprint
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-red-500 mr-2" />
                            Premium Reliability
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-red-500 mr-2" />
                            Ideal for Business Failover
                        </li>
                    </ul>
                    <Button onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')} variant="outline" className="w-full">
                        View Packages
                    </Button>
                </div>
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default LTE5GPage;
