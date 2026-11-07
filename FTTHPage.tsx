
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Wifi, Monitor, Zap, MapPin, Gamepad, Film, Home as HomeIcon } from './components/icons';
import CoverageCheckForm from './CoverageCheckForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import { Button } from './components/Button';

const FTTHPage: React.FC = () => {

  const benefits = [
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "Blazing Fast Speeds",
        description: "Download large files in seconds and stream 4K content without buffering. Options ranging from 25Mbps up to 1Gbps."
    },
    {
        icon: <Wifi className="w-6 h-6 text-brand-blue" />,
        title: "Uncapped & Unshaped",
        description: "No data caps, no throttling. Enjoy unlimited internet access 24/7 without worrying about running out of data."
    },
    {
        icon: <Gamepad className="w-6 h-6 text-brand-blue" />,
        title: "Low Latency Gaming",
        description: "Experience lag-free online gaming with stable, low-latency fiber connections direct to your home."
    },
    {
        icon: <HomeIcon className="w-6 h-6 text-brand-blue" />,
        title: "Free Router & Install*",
        description: "Most of our packages include a premium Wi-Fi router and free installation on select networks (terms apply)."
    }
  ];

  const providers = ["Vumatel", "OpenServe", "Frogfoot", "MetroFibre", "Octotel", "Evotel"];

  return (
    <>
      <Hero
        title={
            <>
                Fiber To The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Home.</span>
            </>
        }
        subtitle="Transform your home entertainment and remote work experience. Reliable, ultra-fast fiber internet from South Africa's top networks."
        badge={
            <>
                <HomeIcon className="w-4 h-4" />
                <span>Residential Fiber</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-lg mx-auto">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-blue/20 rounded-full blur-[100px] -z-10"></div>

                {/* Central Device: Stylized Router */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden text-center transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-brand-green/30 animate-pulse">
                        <Wifi className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Gigabit Home</h3>
                    <p className="text-blue-200 text-sm mb-6">Status: Online & Blazing Fast</p>
                    
                    {/* Speedometer Simulation */}
                    <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue to-brand-green w-[95%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>0 Mbps</span>
                        <span>1000 Mbps</span>
                    </div>
                </div>

                {/* Floating Usage Cards */}
                
                {/* Streaming */}
                <div className="absolute -top-6 -right-6 z-20 bg-gray-900 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-red-600 p-2 rounded-lg text-white">
                        <Film className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Streaming</p>
                        <p className="text-xs font-bold text-white">4K Buffer-Free</p>
                    </div>
                </div>

                {/* Gaming */}
                <div className="absolute top-1/2 -left-12 z-20 bg-gray-900 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow delay-700">
                    <div className="bg-purple-600 p-2 rounded-lg text-white">
                        <Gamepad className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Gaming</p>
                        <p className="text-xs font-bold text-white">Low Latency</p>
                    </div>
                </div>

                {/* Downloads */}
                <div className="absolute -bottom-8 -right-0 z-20 bg-gray-900 border border-gray-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <div className="bg-blue-600 p-2 rounded-lg text-white">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Downloads</p>
                        <p className="text-xs font-bold text-white">Uncapped</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-brand-green/20">
                Check Availability
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Get Custom Quote
            </Button>
        </div>
      </Hero>

      {/* Provider Strip */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 overflow-hidden" id="options">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Available on major networks</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {providers.map(p => (
                      <span key={p} className="text-xl font-bold text-gray-700 bg-white px-6 py-2 rounded-full border border-gray-200 shadow-sm">{p}</span>
                  ))}
              </div>
          </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                <Wifi className="w-4 h-4 mr-2" />
                Home Connectivity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Ultimate Home Internet Upgrade
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Copper is dead. Fiber optic technology uses light to transmit data, offering speeds and reliability that old ADSL or LTE connections simply cannot match.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're binge-watching Netflix, dominating in Fortnite, or hosting Zoom meetings from your home office, our FTTH solutions ensure everyone in the house stays connected at full speed, all at the same time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="mb-3">{benefit.icon}</div>
                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-500 leading-snug">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl -z-10"></div>
             <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Check Availability</h3>
                 <p className="text-gray-500">Enter your address to see which fibre networks cover your home.</p>
             </div>
             <CoverageCheckForm serviceName="Fiber To The Home" />
          </div>
        </div>
      </section>

      {/* Inquiry Form Section (Replaces Speed Examples) */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Home Fiber Quote</h2>
                    <p className="text-lg text-gray-600">
                         Check availability and pricing for your home. We'll find the best packages available in your specific area.
                    </p>
                </div>
                
                <CoverageCheckForm serviceName="Fiber To The Home Inquiry" />
            </div>
        </div>
      </section>

      {/* Streaming/Gaming Section */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center">
                      <div className="bg-red-50 p-4 rounded-full mr-6">
                          <Film className="w-10 h-10 text-red-500" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Streaming Paradise</h3>
                          <p className="text-gray-600">Buffer-free HD and 4K streaming on Netflix, YouTube, Showmax, and Disney+. Watch what you want, when you want.</p>
                      </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center">
                      <div className="bg-purple-50 p-4 rounded-full mr-6">
                          <Gamepad className="w-10 h-10 text-purple-500" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Gamer's Choice</h3>
                          <p className="text-gray-600">Low latency (ping) is crucial for online gaming. Fiber provides the most stable connection to gaming servers locally and abroad.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default FTTHPage;
