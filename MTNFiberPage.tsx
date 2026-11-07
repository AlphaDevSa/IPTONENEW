
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Zap, Shield, TrendingUp, Server, Globe, ArrowRight, Activity, Wifi } from './components/icons';
import CtaSection from './components/CtaSection';
import CoverageCheckForm from './CoverageCheckForm';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const MTNFiberPage: React.FC = () => {
  const navigate = useNavigation();

  const features = [
    {
        icon: <Zap className="w-6 h-6 text-[#FFCB05]" />,
        title: "Symmetrical Speeds",
        description: "Upload as fast as you download. Crucial for cloud backups, VoIP, and smooth video meetings."
    },
    {
        icon: <Shield className="w-6 h-6 text-[#FFCB05]" />,
        title: "Uncapped & Unshaped",
        description: "No data limits, no throttling. Experience the internet exactly as it was meant to be, 24/7."
    },
    {
        icon: <Server className="w-6 h-6 text-[#FFCB05]" />,
        title: "Low Contention",
        description: "Business-grade contention ratios ensure you get the speed you pay for, even during peak hours."
    },
    {
        icon: <Globe className="w-6 h-6 text-[#FFCB05]" />,
        title: "National Coverage",
        description: "Leverage MTN's massive fibre footprint across South Africa to connect your branches."
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Business Speed at <br/>
                <span className="text-[#FFCB05]">Light Speed.</span>
            </>
        }
        subtitle="Unleash the full potential of your business with South Africa's most awarded network. Symmetrical, uncapped, and ultra-reliable fibre internet."
        badge={
            <>
                <Zap className="w-4 h-4" />
                <span>Gigabit Ready</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#FFCB05]/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 overflow-hidden">
                    {/* Fiber Strand Graphic (Abstract) */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#FFCB05]/10 rounded-full blur-2xl"></div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="bg-[#FFCB05] p-2 rounded-lg text-black">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">MTN Business</h3>
                                <p className="text-gray-400 text-xs">Fibre Interface</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs font-bold">CONNECTED</span>
                        </div>
                    </div>

                    {/* Speed Meter */}
                    <div className="text-center py-6 relative">
                        {/* Speed Arc Background */}
                        <div className="w-48 h-24 border-t-8 border-l-8 border-r-8 border-gray-700 rounded-t-full mx-auto"></div>
                        {/* Active Arc */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-24 border-t-8 border-l-8 border-r-8 border-[#FFCB05] rounded-t-full border-b-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></div>
                        
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                            <span className="text-5xl font-black text-white tracking-tighter">940</span>
                            <span className="text-gray-400 text-sm font-medium block mt-1">Mbps</span>
                        </div>
                    </div>

                    {/* Symmetrical Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between border border-gray-700">
                            <div>
                                <p className="text-gray-500 text-xs uppercase font-bold">Download</p>
                                <p className="text-white font-bold text-lg">940 <span className="text-xs text-gray-500">Mbps</span></p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#FFCB05] rotate-90" />
                        </div>
                        <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between border border-gray-700">
                            <div>
                                <p className="text-gray-500 text-xs uppercase font-bold">Upload</p>
                                <p className="text-white font-bold text-lg">940 <span className="text-xs text-gray-500">Mbps</span></p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#FFCB05] -rotate-90" />
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 z-30 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <Activity className="w-5 h-5 text-green-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Latency</p>
                        <p className="text-sm font-bold text-white">2ms</p>
                    </div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-30 bg-[#FFCB05] text-black p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Shield className="w-5 h-5" />
                    <div>
                        <p className="text-[10px] uppercase font-bold opacity-80">Reliability</p>
                        <p className="text-sm font-bold">Uncapped</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-[#FFCB05]/20 bg-[#FFCB05] text-black hover:bg-white border-transparent">
                Check Coverage
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-black"
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Get Custom Quote
            </Button>
        </div>
      </Hero>

      {/* Intro & Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-black bg-[#FFCB05] mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Premium Connectivity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Connectivity on a <br/> Trusted Network
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             MTN Business Fibre offers a robust and dependable internet connection built on one of South Africa's leading infrastructure backbones. It provides the low latency and stability required for modern business applications, from cloud ERPs to crystal-clear VoIP.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you are a startup needing a stable line or a corporation requiring redundancy, MTN's fibre network delivers consistent performance.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FFCB05] mr-3" />
                    <span className="text-gray-700 font-medium">Free Installation on 24-month contracts*</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FFCB05] mr-3" />
                    <span className="text-gray-700 font-medium">Includes Business-Grade Router</span>
                </div>
                <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FFCB05] mr-3" />
                    <span className="text-gray-700 font-medium">Optional Static IP Addresses</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#FFCB05] relative">
             <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Check Availability</h3>
                 <p className="text-gray-500">Verify if your business address is MTN Fibre ready.</p>
             </div>
             <CoverageCheckForm serviceName="MTN Fiber" />
          </div>
        </div>
      </section>

      {/* Quote Form Section (Replaces Speed Tiers) */}
      <section className="py-20 bg-white" id="quote">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get an MTN Business Fiber Quote</h2>
                    <p className="text-lg text-gray-600">
                         Connect with South Africa's best network. Fill out the form below for a tailored business fiber solution.
                    </p>
                </div>
                
                <CoverageCheckForm serviceName="MTN Fiber Inquiry" />
            </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[#FFCB05] transition-colors group">
                        <div className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default MTNFiberPage;
