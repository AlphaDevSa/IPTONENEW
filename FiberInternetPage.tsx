
import React from 'react';
import { CheckCircle, Zap, Shield, Server, Home, Building, Globe, MapPin, ArrowRight, Activity, Wifi } from './components/icons';
import CtaSection from './components/CtaSection';
import { useNavigation } from './NavigationContext';
import { connectivityCategory } from './servicesData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';

const FiberInternetPage: React.FC = () => {
  const navigate = useNavigation();
  const fiberService = connectivityCategory?.subServices?.find(s => s.path === '/connectivity/fiber-internet');

  // Categorize services for better display
  const partnerServices = fiberService?.subServices?.filter(s => s.name.includes('MTN') || s.name.includes('Vodacom')) || [];
  const useCaseServices = fiberService?.subServices?.filter(s => !s.name.includes('MTN') && !s.name.includes('Vodacom')) || [];
  const fibreProviders = ['Frogfoot', 'Vuma', 'OpenServe', 'MetroFibre', 'Octotel', 'Evotel', 'Link Africa', 'Dark Fibre Africa', 'Vodacom Fibre', 'MTN Fibre'];
  const providerMarquee = [...fibreProviders, ...fibreProviders];

  return (
    <>
      {/* Reimagined Hero Section - Matches Web Hosting Page structure */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px]"></div>
            {/* Fiber Light Trails Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="text-left">
                    <div className="inline-flex items-center space-x-2 bg-cyan-900/30 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-cyan-300 border border-cyan-500/30 mb-8">
                        <Zap className="w-4 h-4" />
                        <span>Gigabit Speeds Available</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                        Speed of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">Light.</span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                        Upgrade to the ultimate connectivity standard. Uncapped, unshaped, and symmetrical fibre internet delivering low-latency performance for your home and business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                            size="lg" 
                            onClick={() => window.open('https://iptoneconnect.co.za', '_blank', 'noopener,noreferrer')}
                            className="font-bold text-lg bg-cyan-500 text-gray-900 hover:bg-white border-transparent shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                        >
                            <MapPin className="w-5 h-5 mr-2" />
                            Check Coverage
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="font-bold text-lg text-white border-gray-600 hover:bg-gray-800 hover:border-white"
                            onClick={() => window.open('https://www.iptoneconnect.co.za/?section=Fibre', '_blank', 'noopener,noreferrer')}
                        >
                            View Packages
                        </Button>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-3 gap-4 text-gray-400 text-sm font-medium">
                        <div>
                            <p className="text-3xl font-bold text-white">1<span className="text-sm text-cyan-400 ml-1">Gbps</span></p>
                            <p className="text-xs uppercase tracking-wider mt-1">Max Speed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">99<span className="text-sm text-brand-green ml-1">%</span></p>
                            <p className="text-xs uppercase tracking-wider mt-1">Uptime SLA</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">20<span className="text-sm text-gray-400 ml-1">+</span></p>
                            <p className="text-xs uppercase tracking-wider mt-1">Networks</p>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-md perspective-1000">
                        {/* Glowing Fiber Core Graphic */}
                        <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full -z-10"></div>
                        
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                            {/* Speedometer Simulation */}
                            <div className="relative w-64 h-32 mx-auto mb-8 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-700 rounded-t-full opacity-50"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full rounded-t-full border-[12px] border-gray-600 border-b-0"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full rounded-t-full border-[12px] border-cyan-500 border-b-0 border-l-transparent border-r-transparent rotate-45"></div>
                                <div className="absolute bottom-0 left-1/2 w-1 h-24 bg-red-500 origin-bottom transform -rotate-12 transition-transform duration-1000 animate-pulse-slow"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            
                            <div className="text-center mb-8">
                                <div className="text-5xl font-black text-white tracking-tight">
                                    940 <span className="text-lg font-medium text-gray-400">Mbps</span>
                                </div>
                                <div className="text-xs text-cyan-400 font-mono mt-2 flex justify-center items-center">
                                    <Activity className="w-3 h-3 mr-2 animate-pulse" />
                                    CONNECTION STABLE
                                </div>
                            </div>

                            {/* Network List */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-700">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium text-gray-200">Vumatel</span>
                                    </div>
                                    <Wifi className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-700">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium text-gray-200">OpenServe</span>
                                    </div>
                                    <Wifi className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-700">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium text-gray-200">MetroFibre</span>
                                    </div>
                                    <Wifi className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 z-30 bg-brand-green text-gray-900 p-4 rounded-xl shadow-lg border border-white/20 animate-bounce-slow flex items-center gap-3">
                            <Shield className="w-6 h-6" />
                            <div>
                                <p className="text-xs font-bold uppercase opacity-80">Protection</p>
                                <p className="font-bold">Unshaped Data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                <Zap className="w-4 h-4 mr-2" />
                Next Generation Connectivity
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                The Backbone of <span className="text-brand-blue">Digital Life</span>
              </h2>

              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Reliable fibre connectivity is no longer a luxury. It is the foundation for work, learning, entertainment, and the smart experiences people expect every day.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From streaming and video calls to cloud tools and business operations, fibre keeps your digital life fast, stable, and ready for what is next.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                  <div className="bg-green-100 p-2 rounded-xl w-fit mb-4">
                    <Zap className="w-5 h-5 text-green-700" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Symmetrical speeds</h4>
                  <p className="text-sm text-gray-600">Upload and download at the same performance level, without lag or bottlenecks.</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-xl w-fit mb-4">
                    <Shield className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Uncapped connectivity</h4>
                  <p className="text-sm text-gray-600">Enjoy smooth browsing, streaming, and remote work with no restrictive data caps.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-blue-100 to-green-100 rounded-[2rem] blur-3xl opacity-60"></div>

              <div className="relative bg-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[0_32px_80px_rgba(15,23,42,0.18)] border border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Live performance</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">Always on</h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Stable connection
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4">
                    <p className="text-2xl font-black text-white">1 Gbps</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mt-2">Peak speed</p>
                  </div>
                  <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4">
                    <p className="text-2xl font-black text-white">99%</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mt-2">Uptime</p>
                  </div>
                  <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4">
                    <p className="text-2xl font-black text-white">24/7</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mt-2">Support</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    'Home streaming without buffering',
                    'Video conferences with crystal clarity',
                    'Business cloud apps that stay responsive',
                    'Smart homes and connected devices that never lag'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-800/70 border border-slate-700 px-4 py-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-300">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-emerald-500/15 border border-cyan-400/20 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-2">Built for modern life</p>
                  <p className="text-lg font-semibold text-white">High-speed fibre that keeps every connection moving at the speed of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - Use Cases */}
      <section className="py-20 bg-gray-50" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Solution</h2>
                <p className="text-lg text-gray-600">Tailored packages designed for different needs and budgets.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {useCaseServices.map((sub) => (
                    <div key={sub.path} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue flex flex-col">
                        <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                            {sub.name.includes('Home') ? <Home className="w-8 h-8" /> : 
                             sub.name.includes('Corporate') ? <Server className="w-8 h-8" /> : 
                             <Building className="w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{sub.name}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            {sub.name.includes('Home') ? "High-speed entertainment and remote work connectivity for your household." :
                             sub.name.includes('Corporate') ? "Dedicated 1:1 contention ratio with guaranteed uptime SLAs for enterprise." :
                             "Professional connectivity for SMEs with prioritized support and static IPs."}
                        </p>
                        <Button onClick={() => window.open('https://www.iptoneconnect.co.za/?section=Fibre', '_blank', 'noopener,noreferrer')} variant="outline" className="w-full justify-between group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
                            View Packages <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Network Partners */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Network Partners</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">We leverage the infrastructure of South Africa's top Tier-1 providers.</p>
              </div>

              <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-slate-50 via-cyan-50 to-emerald-50 py-4 shadow-sm">
                  <style>{`
                    @keyframes provider-marquee {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .provider-marquee {
                      animation: provider-marquee 24s linear infinite;
                    }
                    .provider-marquee:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  <div className="provider-marquee flex min-w-max gap-4 px-4">
                    {providerMarquee.map((provider, index) => (
                      <div
                        key={`${provider}-${index}`}
                        className="flex shrink-0 items-center justify-center rounded-full border border-cyan-100 bg-white/90 px-5 py-3 text-sm font-bold tracking-wide text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-brand-blue"
                      >
                        {provider}
                      </div>
                    ))}
                  </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {partnerServices.map((sub) => (
                      <div key={sub.path} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer" onClick={() => navigate(sub.path)}>
                          <div className="flex items-center">
                              <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                                  <Globe className="w-6 h-6 text-gray-700" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-gray-900">{sub.name}</h4>
                                  <p className="text-xs text-gray-500">Business Fibre</p>
                              </div>
                          </div>
                          <div className="text-brand-blue">
                              <ArrowRight className="w-5 h-5" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default FiberInternetPage;
