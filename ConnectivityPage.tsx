
import React from 'react';
import { connectivityCategory } from './servicesData';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';
import { Wifi, Tower, Globe, TrendingUp, MapPin, Zap, Tag, Shield, Check, Server, Building, Activity, Smartphone, Signal, SimCard, ArrowRight, CheckCircle } from './components/icons';
import CtaSection from './components/CtaSection';

const ConnectivityPage: React.FC = () => {
    const navigate = useNavigation();

    return (
    <>
      {/* Reimagined Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Network Animation */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900"></div>
            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            {/* Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-brand-blue/20 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 border border-brand-blue/30 mb-8">
                        <Signal className="w-4 h-4 text-brand-green" />
                        <span>Live on SA's Fastest Networks</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Reliable Business Connectivity
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Powering South Africa's digital life. From ultra-fast Home Fibre to mission-critical Corporate 1:1 links and 5G failover, we deliver the speed and stability you deserve.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => window.open('https://iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="font-bold text-lg bg-brand-green text-gray-900 hover:bg-white border-transparent shadow-[0_0_20px_rgba(185,215,11,0.3)]">
                            Check Coverage
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                            onClick={() => document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Packages
                        </Button>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><Wifi className="w-4 h-4 mr-2 text-brand-green"/> Fibre</div>
                        <div className="flex items-center"><Tower className="w-4 h-4 mr-2 text-brand-blue"/> LTE & 5G</div>
                        <div className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400"/> Microwave</div>
                    </div>
                </div>

                {/* Visual Graphic - Speed Test Dashboard */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-lg" role="img" aria-label="South Africa Fibre Coverage Map Tool">
                        
                        {/* Main Dashboard Card */}
                        <div className="relative z-20 bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center space-x-3">
                                    <Globe className="w-6 h-6 text-brand-green" />
                                    <div>
                                        <h3 className="font-bold text-white">Connection Status</h3>
                                        <p className="text-xs text-gray-400">IPT One Core Network</p>
                                    </div>
                                </div>
                                <div className="bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30 flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-bold text-green-400">ONLINE</span>
                                </div>
                            </div>

                            {/* Speed Gauge Simulation */}
                            <div className="flex items-end justify-center mb-8 relative">
                                <div className="text-center">
                                    <span className="text-6xl font-black text-white tracking-tighter">950</span>
                                    <span className="text-xl text-gray-400 ml-2">Mbps</span>
                                    <p className="text-sm text-brand-blue font-bold mt-2">DOWNLOAD</p>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Activity className="w-4 h-4 text-yellow-400" />
                                        <span className="text-xs font-bold text-gray-300 uppercase">Latency</span>
                                    </div>
                                    <p className="text-xl font-bold text-white">4ms</p>
                                </div>
                                <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Shield className="w-4 h-4 text-brand-blue" />
                                        <span className="text-xs font-bold text-gray-300 uppercase">Security</span>
                                    </div>
                                    <p className="text-xl font-bold text-white">Protected</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-0 -right-8 z-10 bg-brand-blue p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                            <Wifi className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute bottom-10 -left-8 z-10 bg-gray-900 border border-gray-600 p-4 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center space-x-3">
                                <Tower className="w-6 h-6 text-brand-green" />
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Backup</p>
                                    <p className="text-sm font-bold text-white">5G Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Connectivity Options */}
      <section className="py-20 bg-gray-50" id="options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Connection</h2>
                <p className="text-lg text-gray-600">
                    We offer a complete range of connectivity solutions. From dedicated business fibre to flexible mobile data.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {connectivityCategory?.subServices?.map((service, index) => {
                    let icon = <Wifi className="w-10 h-10 text-brand-blue" />;
                    let bg = "bg-blue-50";
                    
                    if (service.path.includes('lte')) {
                        icon = <Tower className="w-10 h-10 text-purple-600" />;
                        bg = "bg-purple-50";
                    } else if (service.path.includes('sim')) {
                        icon = <SimCard className="w-10 h-10 text-brand-green" />;
                        bg = "bg-green-50";
                    }

                    return (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                            <div className="p-8 flex-grow">
                                <div className={`${bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                                    {icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.subServices?.slice(0, 3).map((sub, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                                            {sub.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 pt-0 mt-auto">
                                <Button onClick={() => navigate(service.path)} variant="outline" className="w-full justify-between group">
                                    View Options <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* Coverage Check Section */}
      <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="md:w-2/3">
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what's available in your area?</h2>
                          <p className="text-blue-100 text-lg mb-8 max-w-2xl">
                              Our advanced coverage map checks 20+ networks simultaneously. Enter your address to see if you can get Fibre, LTE, or 5G.
                          </p>
                          <div className="flex flex-wrap gap-4">
                              <span className="flex items-center text-sm font-medium bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 mr-2 text-brand-green"/> Vumatel</span>
                              <span className="flex items-center text-sm font-medium bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 mr-2 text-brand-green"/> OpenServe</span>
                              <span className="flex items-center text-sm font-medium bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 mr-2 text-brand-green"/> MTN</span>
                              <span className="flex items-center text-sm font-medium bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 mr-2 text-brand-green"/> Vodacom</span>
                          </div>
                      </div>
                      <div className="md:w-1/3 text-center">
                          <Button 
                              size="lg" 
                              onClick={() => window.open('https://iptoneconnect.co.za', '_blank', 'noopener,noreferrer')}
                              className="bg-brand-green text-gray-900 hover:bg-white border-transparent font-bold w-full md:w-auto px-10 shadow-lg shadow-brand-green/20"
                          >
                              Check My Coverage
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <CtaSection />
    </>
    );
};

export default ConnectivityPage;
