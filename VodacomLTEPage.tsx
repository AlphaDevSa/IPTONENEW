
import React from 'react';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { CheckCircle, Signal, Shield, Zap, MapPin, Server, Smartphone, Wifi, TrendingUp, Activity, Lock } from './components/icons';

const VodacomLTEPage: React.FC = () => {
  const navigate = useNavigation();

  return (
    <>
      {/* Reimagined Hero Section - Dark Theme with Vodacom Red Accents */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]"></div>
             {/* Map Pattern */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-red-900/30 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-red-200 border border-red-500/30 mb-8 shadow-sm">
                        <Signal className="w-4 h-4 text-red-400" />
                        <span>SA's Leading Network</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                        Further <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Together.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed font-medium">
                        Connect your home and business with South Africa's most reliable network. Experience the speed of Vodacom 5G and the stability of business-grade LTE.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                            size="lg" 
                            onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')}
                            className="font-bold text-lg bg-red-600 text-white hover:bg-red-500 border-transparent shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                        >
                            View Packages
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-white hover:bg-white hover:text-gray-900"
                            onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')}
                        >
                            Check Coverage
                        </Button>
                    </div>
                    
                    <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-800 pt-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">99.9%</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Population Coverage</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">5G</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Ultra-Fast Speed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">#1</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Network Quality</span>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative lg:h-[550px] flex items-center justify-center">
                    <div className="relative w-full max-w-md perspective-1000">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-red-600/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Main Interface Card */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl overflow-hidden transform rotate-y-12 hover:rotate-0 transition-transform duration-700">
                            {/* Card Header */}
                            <div className="bg-gray-900 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Network Monitor</span>
                            </div>
                            
                            {/* Card Body */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-red-500/20 rounded-full text-red-500">
                                            <Wifi className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase font-bold">Status</p>
                                            <p className="text-white font-bold text-lg">Connected</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-xs uppercase font-bold">Technology</p>
                                        <p className="text-red-500 font-black text-2xl">5G</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Download Speed</span>
                                            <span className="text-white font-bold">125 Mbps</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-600 w-3/4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Signal Strength</span>
                                            <span className="text-white font-bold">Excellent</span>
                                        </div>
                                        <div className="flex gap-1 h-2">
                                            <div className="w-1/5 bg-red-600 rounded-full"></div>
                                            <div className="w-1/5 bg-red-600 rounded-full"></div>
                                            <div className="w-1/5 bg-red-600 rounded-full"></div>
                                            <div className="w-1/5 bg-red-600 rounded-full"></div>
                                            <div className="w-1/5 bg-red-900 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <div className="flex-1 bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                                        <Activity className="w-5 h-5 mx-auto text-gray-400 mb-1" />
                                        <p className="text-xs text-gray-400">Latency</p>
                                        <p className="font-bold text-white">12ms</p>
                                    </div>
                                    <div className="flex-1 bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                                        <Lock className="w-5 h-5 mx-auto text-gray-400 mb-1" />
                                        <p className="text-xs text-gray-400">Security</p>
                                        <p className="font-bold text-green-500">Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 z-30 bg-gray-900 text-white p-4 rounded-xl shadow-xl flex items-center space-x-3 border border-gray-700 animate-bounce-slow">
                            <div className="bg-red-600 p-2 rounded-lg">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Power Backup</p>
                                <p className="text-sm font-bold">Network Resilient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="flex flex-col items-center p-4">
                      <Signal className="w-8 h-8 text-red-600 mb-2" />
                      <span className="font-bold text-gray-900 text-lg">Best Network Score</span>
                      <span className="text-gray-500 text-sm">Consistently ranked #1 in SA</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <Wifi className="w-8 h-8 text-red-600 mb-2" />
                      <span className="font-bold text-gray-900 text-lg">Widest 4G Coverage</span>
                      <span className="text-gray-500 text-sm">Reaching 99% of the population</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <TrendingUp className="w-8 h-8 text-red-600 mb-2" />
                      <span className="font-bold text-gray-900 text-lg">Low Latency</span>
                      <span className="text-gray-500 text-sm">Optimized for gaming & video</span>
                  </div>
              </div>
          </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50" id="options">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Connection</h2>
                  <p className="text-lg text-gray-600">
                      Tailored connectivity solutions designed for your specific lifestyle and business requirements.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* Home Internet Card */}
                  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-red-600 p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                          <div className="bg-red-50 p-3 rounded-full mr-4">
                              <Wifi className="w-8 h-8 text-red-600" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">Home Internet</h3>
                              <p className="text-sm text-gray-500">Plug-and-play Wi-Fi</p>
                          </div>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">
                          Get fast, reliable home internet without the wait for installation. Vodacom Home LTE & 5G offers simple plug-and-play connectivity perfect for streaming, gaming, and working from home.
                      </p>
                      <ul className="space-y-3 mb-8">
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                              Speeds up to 100Mbps+ (5G)
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                              Uncapped & Capped Data Plans
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                              Free Router on Contracts
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                              Sim-Only Options Available
                          </li>
                      </ul>
                      <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Check Home Internet
                      </Button>
                  </div>

                  {/* Business Internet Card */}
                  <div className="bg-white rounded-2xl shadow-lg border-t-4 border-gray-900 p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                          <div className="bg-gray-100 p-3 rounded-full mr-4">
                              <Server className="w-8 h-8 text-gray-900" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">Business Internet</h3>
                              <p className="text-sm text-gray-500">Enterprise-grade connectivity</p>
                          </div>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">
                          Keep your business online with robust LTE and 5G solutions. Ideal for primary connectivity, branch redundancy, or rapid deployment sites. Prioritized traffic ensuring stability for business apps.
                      </p>
                      <ul className="space-y-3 mb-8">
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                              Static IP Addresses Available
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                              Business-Grade Routers
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                              Failover Capabilities
                          </li>
                          <li className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                              VoIP Compatible
                          </li>
                      </ul>
                      <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Check Business Internet
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Coverage Check Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-red-600 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-800/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>
                  
                  <div className="relative z-10 mb-8 md:mb-0 md:w-2/3 text-white">
                      <div className="flex items-center mb-4">
                          <MapPin className="w-6 h-6 mr-2 text-white" />
                          <h2 className="text-2xl md:text-3xl font-bold">Check Availability in Your Area</h2>
                      </div>
                      <p className="text-red-100 text-lg">
                          Vodacom's network is vast, but signal types vary by location. Verify if your address is 5G, LTE, or Fibre ready before you order to ensure the best possible experience.
                      </p>
                  </div>
                  <div className="relative z-10">
                      <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 h-auto text-lg shadow-lg">
                          Check Coverage
                      </Button>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default VodacomLTEPage;
