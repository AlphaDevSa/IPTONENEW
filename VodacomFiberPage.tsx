
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Zap, Shield, Globe, Activity, Server, ArrowRight, Lock } from './components/icons';
import CoverageCheckForm from './CoverageCheckForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent, CardHeader, CardFooter } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const VodacomFiberPage: React.FC = () => {
  const navigate = useNavigation();

  const features = [
    {
        icon: <Shield className="w-6 h-6 text-red-600" />,
        title: "Enterprise Reliability",
        description: "Built on a redundant, carrier-grade backbone designed for 99.9% uptime. Your business stays online, always."
    },
    {
        icon: <Activity className="w-6 h-6 text-red-600" />,
        title: "Low Latency",
        description: "Optimized routing ensures minimal delay, perfect for crystal-clear VoIP calls and responsive cloud applications."
    },
    {
        icon: <Globe className="w-6 h-6 text-red-600" />,
        title: "Extensive Reach",
        description: "Vodacom has one of the largest fiber footprints in South Africa, connecting businesses in metros and remote areas alike."
    },
    {
        icon: <Server className="w-6 h-6 text-red-600" />,
        title: "Static IP Ready",
        description: "Need to host a server or secure your remote access? Optional Static IPs are available on all business packages."
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Vodacom Business <br/>
                <span className="text-red-600">Fibre.</span>
            </>
        }
        subtitle="Future-proof your business with South Africa's leading digital network. Uncapped, unshaped, and symmetrical fibre internet designed for mission-critical operations."
        badge={
            <>
                <Zap className="w-4 h-4" />
                <span>Premium GPON Network</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Interface Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Globe className="w-5 h-5 text-red-600" />
                            <div>
                                <h3 className="text-white font-bold text-sm">Vodacom Gateway</h3>
                                <p className="text-gray-500 text-[10px] font-mono">ID: VODA_ZA_01</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-green-900/20 px-2 py-1 rounded text-green-500 text-xs font-bold border border-green-900/30">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span>ONLINE</span>
                        </div>
                    </div>

                    {/* Speed Visual */}
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Bandwidth Usage</span>
                            <span className="text-white font-bold">500 Mbps</span>
                        </div>
                        {/* Multi-colored bar representing usage */}
                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden flex">
                            <div className="h-full bg-red-600 w-[60%]"></div>
                            <div className="h-full bg-red-800 w-[20%]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 mt-2">
                            <span>Down: 500 Mbps</span>
                            <span>Up: 500 Mbps</span>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Latency</p>
                            <div className="flex items-center text-white font-bold">
                                <Activity className="w-4 h-4 text-green-500 mr-2" />
                                4ms
                            </div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Packet Loss</p>
                            <div className="flex items-center text-white font-bold">
                                <Shield className="w-4 h-4 text-green-500 mr-2" />
                                0.0%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 z-30 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <Server className="w-5 h-5 text-red-600" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Static IP</p>
                        <p className="text-xs font-bold text-gray-900">Included</p>
                    </div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-30 bg-red-600 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Lock className="w-5 h-5 text-white" />
                    <div>
                        <p className="text-[10px] text-red-200 uppercase font-bold">Security</p>
                        <p className="text-xs font-bold">Protected</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-red-600/20 bg-red-600 hover:bg-red-700 border-transparent text-white">
                Check Availability
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-red-900"
                onClick={() => window.open('https://www.iptoneconnect.co.za/?section=Fibre', '_blank', 'noopener,noreferrer')}
            >
                Get Custom Quote
            </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white bg-red-600 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Power Your Business
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Benchmark for <br/> Connectivity
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             When uptime is non-negotiable, trust Vodacom's award-winning network. Vodacom Business Fiber provides the stable, high-speed foundation required for modern digital operations, from video conferencing to real-time data backups.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the difference of a network built for business, backed by industry-leading SLAs and 24/7 priority support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                    <div className="bg-red-50 p-2 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Free Installation*</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-red-50 p-2 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Free Activation*</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-red-50 p-2 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Premium Wi-Fi Router</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-red-50 p-2 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Month-to-Month Options</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-red-600 relative">
             <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Check Availability</h3>
                 <p className="text-gray-500">Verify if your business address is Vodacom Fiber ready.</p>
             </div>
             <CoverageCheckForm serviceName="Vodacom Fiber" />
          </div>
        </div>
      </section>

      {/* Quote Form Section (Replaces Speed Tiers) */}
      <section className="py-20 bg-white" id="quote">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Vodacom Business Fiber Quote</h2>
                    <p className="text-lg text-gray-600">
                        Enterprise-grade connectivity for your business. Request a quote today.
                    </p>
                </div>
                
                <CoverageCheckForm serviceName="Vodacom Fiber Inquiry" />
            </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Vodacom Fiber?</h2>
                <p className="text-lg text-gray-600">Building your digital future on a solid foundation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all group">
                        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Tech Strip */}
      <section className="py-12 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold mb-8">Ready to upgrade your connectivity?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 shadow-lg">
                      Check Availability
                  </Button>
                  <Button onClick={() => navigate('/contact')} variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8">
                      Contact Sales
                  </Button>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default VodacomFiberPage;
