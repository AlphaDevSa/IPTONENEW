
import React from 'react';
import Hero from './components/Hero';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { Wifi, MapPin, Zap, ArrowRight, Tower, Smartphone, Globe, CheckCircle, Signal, Activity } from './components/icons';

const MTNLTEPage: React.FC = () => {
  const navigate = useNavigation();

  return (
    <>
      {/* Reimagined Hero Section - Dark Theme with MTN Yellow Accents */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#FFCB05]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gray-700/50 rounded-full blur-[100px]"></div>
            {/* Hex Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="text-left">
                     <div className="inline-flex items-center space-x-2 bg-[#FFCB05]/20 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-bold text-[#FFCB05] border border-[#FFCB05]/30 mb-8">
                        <Signal className="w-4 h-4" />
                        <span>#1 Network Performance</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Connect with <br/>
                        <span className="text-[#FFCB05]">South Africa's Best.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Experience the raw speed of MTN 5G and LTE. Whether you need a fixed connection for your home office or data on the move, we have the package to keep you online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => document.getElementById('fixed-lte')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-[#FFCB05] text-black hover:bg-white font-bold border-transparent">
                            Fixed LTE
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => document.getElementById('mobile-data')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-white border-white hover:bg-white hover:text-black font-bold"
                        >
                            Mobile Data
                        </Button>
                    </div>
                    <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-400">
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-[#FFCB05]"/> Uncapped Options</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-[#FFCB05]"/> 5G Enabled</div>
                        <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-[#FFCB05]"/> Wide Coverage</div>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-[#FFCB05]/10 rounded-full blur-[80px] -z-10"></div>

                        {/* Router/Signal Graphic */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-xs uppercase tracking-wider">Signal Strength</span>
                                    <div className="flex space-x-1 mt-1">
                                        <div className="w-2 h-4 bg-[#FFCB05] rounded-sm"></div>
                                        <div className="w-2 h-6 bg-[#FFCB05] rounded-sm"></div>
                                        <div className="w-2 h-8 bg-[#FFCB05] rounded-sm"></div>
                                        <div className="w-2 h-10 bg-[#FFCB05] rounded-sm animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#FFCB05] font-bold text-2xl">5G</span>
                                    <span className="block text-gray-500 text-xs">Ultra Wideband</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-[#FFCB05]/20 p-2 rounded-lg mr-3">
                                            <Zap className="w-5 h-5 text-[#FFCB05]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Download</p>
                                            <p className="text-gray-500 text-xs">Peak Speed</p>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-mono text-white">500<span className="text-sm text-gray-500 ml-1">Mbps</span></span>
                                </div>

                                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                            <Activity className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Latency</p>
                                            <p className="text-gray-500 text-xs">Ping</p>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-mono text-white">18<span className="text-sm text-gray-500 ml-1">ms</span></span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                                <p className="text-gray-400 text-sm">Router Status: <span className="text-green-500 font-bold">Connected</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Network Stats / Trust */}
      <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="flex flex-col items-center py-4">
                      <div className="bg-[#FFCB05] p-3 rounded-full mb-4 bg-opacity-20 text-black">
                          <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">Fastest 5G Speeds</h3>
                      <p className="text-gray-600 text-sm mt-1">Consistently ranked #1 for download speeds.</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                      <div className="bg-[#FFCB05] p-3 rounded-full mb-4 bg-opacity-20 text-black">
                          <Tower className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">Widest Coverage</h3>
                      <p className="text-gray-600 text-sm mt-1">96% 4G Population coverage in SA.</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                      <div className="bg-[#FFCB05] p-3 rounded-full mb-4 bg-opacity-20 text-black">
                          <Wifi className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">99% Network Uptime</h3>
                      <p className="text-gray-600 text-sm mt-1">Enterprise-grade reliability for business.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Main Options */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Connectivity Type</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      MTN offers distinct solutions depending on whether you need internet at a specific location or everywhere you go.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Fixed Card */}
                  <div id="fixed-lte" className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-8 border-[#FFCB05] group flex flex-col scroll-mt-32">
                      <div className="p-8 flex-grow">
                          <div className="flex justify-between items-start mb-6">
                              <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-[#FFCB05]/10 transition-colors">
                                  <Tower className="w-10 h-10 text-gray-900" />
                              </div>
                              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                  Location Locked
                              </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Fixed LTE & 5G</h3>
                          <p className="text-gray-500 text-sm font-medium mb-6">Best for Home & Office</p>
                          <p className="text-gray-600 mb-8 leading-relaxed">
                              A dedicated connection for your building. By locking the SIM to your local towers, MTN guarantees better speeds and stability. Ideal Fibre alternative.
                          </p>
                          <ul className="space-y-3 mb-8">
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-[#FFCB05] rounded-full mr-3"></div>
                                  Uncapped Data Packages available
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-[#FFCB05] rounded-full mr-3"></div>
                                  Router included options
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-[#FFCB05] rounded-full mr-3"></div>
                                  Plug & Play Setup
                              </li>
                          </ul>
                      </div>
                      <div className="p-8 pt-0 mt-auto">
                          <Button onClick={() => navigate('/connectivity/lte-5g/mtn-fixed')} className="w-full bg-black text-white hover:bg-gray-800">
                              View Fixed Deals
                          </Button>
                      </div>
                  </div>

                  {/* Mobile Card */}
                  <div id="mobile-data" className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-8 border-black group flex flex-col scroll-mt-32">
                      <div className="p-8 flex-grow">
                          <div className="flex justify-between items-start mb-6">
                              <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-black/5 transition-colors">
                                  <Smartphone className="w-10 h-10 text-gray-900" />
                              </div>
                              <span className="bg-[#FFCB05] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                  Roam Anywhere
                              </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile Data</h3>
                          <p className="text-gray-500 text-sm font-medium mb-6">Best for Tablets & Routers</p>
                          <p className="text-gray-600 mb-8 leading-relaxed">
                              Stay connected wherever you are. These data SIMs work in any device and any location with MTN coverage. Perfect for remote teams.
                          </p>
                          <ul className="space-y-3 mb-8">
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                  Use in any compatible device
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                  No location restrictions
                              </li>
                              <li className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                  Month-to-month contracts
                              </li>
                          </ul>
                      </div>
                      <div className="p-8 pt-0 mt-auto">
                          <Button onClick={() => navigate('/connectivity/lte-5g/mtn-mobile')} variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                              View Mobile Deals
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Coverage Check CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCB05] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-bold mb-6">Check Your Coverage</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Before you decide, ensure you have excellent MTN coverage in your area. Our map checks 5G, LTE, and Fiber availability instantly.
              </p>
              <Button onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="bg-[#FFCB05] text-black hover:bg-white font-bold text-lg px-8 py-3 h-auto">
                  Check Coverage
              </Button>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default MTNLTEPage;
