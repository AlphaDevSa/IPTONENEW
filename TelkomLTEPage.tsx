
import React from 'react';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';
import { Wifi, Smartphone, CheckCircle, Signal, MapPin, Zap, ArrowRight, TrendingUp, Globe } from './components/icons';

const TelkomLTEPage: React.FC = () => {
  const navigate = useNavigation();

  return (
    <>
      {/* Reimagined Hero Section - Dark Theme with Telkom Blue Accents */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px]"></div>
             {/* Tech Pattern */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-blue-900/30 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 border border-blue-500/30 mb-8">
                        <TrendingUp className="w-4 h-4 text-teal-400" />
                        <span>SA's Best Value Mobile Network</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        More Data.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Less Moola.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Why pay more? Get massive LTE and 5G data bundles for your home router or smartphone. Telkom delivers the most gigabytes for your Rand, with seamless roaming on MTN for nationwide coverage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                            size="lg" 
                            onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')}
                            className="font-bold text-lg bg-blue-600 text-white hover:bg-blue-500 border-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                        >
                            View Deals
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
                    
                    <div className="mt-10 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center"><Wifi className="w-4 h-4 mr-2 text-teal-400"/> LTE & 5G</div>
                        <div className="flex items-center"><Signal className="w-4 h-4 mr-2 text-teal-400"/> Roams on MTN</div>
                        <div className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-teal-400"/> No Contracts</div>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>

                        {/* 3D-ish Card Container */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-900 rounded-[22px] p-8 h-full relative overflow-hidden">
                                {/* SIM Card Chip Graphic */}
                                <div className="absolute top-8 right-8 w-16 h-12 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md opacity-80 flex flex-col justify-between p-2">
                                    <div className="w-full h-[1px] bg-yellow-600/50"></div>
                                    <div className="w-full h-[1px] bg-yellow-600/50"></div>
                                    <div className="w-full h-[1px] bg-yellow-600/50"></div>
                                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-yellow-600/50 -translate-x-1/2"></div>
                                </div>

                                <div className="mt-12">
                                    <p className="text-blue-400 font-mono text-sm tracking-widest mb-1">PREPAID / TOP-UP</p>
                                    <h3 className="text-3xl font-bold text-white mb-8">Unlimited Data</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-xl border border-gray-700">
                                            <div className="flex items-center">
                                                <div className="bg-blue-600 p-2 rounded-lg mr-3"><Zap className="w-4 h-4 text-white"/></div>
                                                <span className="text-sm font-medium text-gray-300">Speed</span>
                                            </div>
                                            <span className="text-white font-bold">Uncapped</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-xl border border-gray-700">
                                            <div className="flex items-center">
                                                <div className="bg-teal-500 p-2 rounded-lg mr-3"><Globe className="w-4 h-4 text-white"/></div>
                                                <span className="text-sm font-medium text-gray-300">Network</span>
                                            </div>
                                            <span className="text-white font-bold">LTE / 5G</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-500">Starting from</p>
                                        <p className="text-2xl font-bold text-white">R299<span className="text-sm font-normal text-gray-400">/pm</span></p>
                                    </div>
                                    <div className="h-8 w-12 bg-white/10 rounded-md"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 z-30 bg-teal-500 text-gray-900 p-4 rounded-xl shadow-xl border border-teal-400 animate-bounce-slow">
                            <div className="flex items-center space-x-2 font-bold">
                                <CheckCircle className="w-5 h-5" />
                                <span>No Credit Checks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Telkom?</h2>
                  <p className="text-lg text-gray-600">
                      Telkom has revolutionized the mobile data market with massive bundles at a fraction of the cost of other providers.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:border-blue-300 transition-colors">
                      <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-500">
                          <Zap className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Data Caps</h3>
                      <p className="text-gray-600 text-sm">
                          Get significantly more gigabytes for your money compared to other major networks.
                      </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:border-blue-300 transition-colors">
                      <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-500">
                          <Signal className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">National Roaming</h3>
                      <p className="text-gray-600 text-sm">
                          Stay connected even outside Telkom coverage areas by roaming seamlessly on Vodacom & MTN networks.*
                      </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:border-blue-300 transition-colors">
                      <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-500">
                          <CheckCircle className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">No Contracts</h3>
                      <p className="text-gray-600 text-sm">
                          Enjoy the flexibility of month-to-month plans. Upgrade or downgrade as your needs change.
                      </p>
                  </div>
              </div>
              <p className="text-xs text-gray-400 text-center mt-6">*Roaming applies to select plans and areas.</p>
          </div>
      </section>

      {/* Product Selection */}
      <section className="py-20 bg-blue-50" id="options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Solution</h2>
                <p className="text-lg text-gray-600">
                    Two distinct ways to connect. Choose the one that fits your lifestyle.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Data SIM Card */}
                <div id="data-sim" className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 flex flex-col hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-2 bg-blue-500 w-full"></div>
                    <div className="p-8 flex-grow">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Wifi className="w-8 h-8" />
                            </div>
                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                Internet Only
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Data SIM Plans</h3>
                        <p className="text-gray-500 mb-6">Best for Routers, Tablets & Dongles</p>
                        <p className="text-gray-600 mb-8">
                            Pure data connectivity for your home office or mobile devices. Pop this SIM into any LTE/5G router and get online instantly.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                Uncapped Data options available
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                4G & 5G Speeds
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                Use in any compatible device
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                        <Button onClick={() => navigate('/connectivity/lte-5g/telkom-data-sim')} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            View Data Bundles
                        </Button>
                    </div>
                </div>

                {/* Telkom One Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 flex flex-col hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-2 bg-teal-500 w-full"></div>
                    <div className="p-8 flex-grow">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                Voice + Data
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Telkom One</h3>
                        <p className="text-gray-500 mb-6">Best for Smartphones & Employees</p>
                        <p className="text-gray-600 mb-8">
                            The complete mobile package. Get data for browsing, minutes for calling, and WhatsApp bundles in one simple monthly subscription.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                                All-Network Voice Minutes
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                                Data + Social Bundles
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                                Keep your existing number
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                        <Button onClick={() => navigate('/connectivity/lte-5g/telkom-one')} className="w-full bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50">
                            Explore Telkom One
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Coverage Teaser */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
                  
                  <div className="relative z-10 mb-8 md:mb-0 md:w-2/3">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure about coverage?</h2>
                      <p className="text-gray-300 text-lg">
                          Telkom has an extensive network, but signal strength varies. Use our map to check if your area is 5G or LTE ready before you buy.
                      </p>
                  </div>
                  <div className="relative z-10">
                      <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="bg-white text-gray-900 hover:bg-blue-50 font-bold px-8 py-3 h-auto text-lg">
                          Check Coverage
                          <MapPin className="w-5 h-5 ml-2" />
                      </Button>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default TelkomLTEPage;
