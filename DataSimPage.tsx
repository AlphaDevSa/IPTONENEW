
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, ChevronRight, Wifi, Building, Smartphone, Globe, Zap, Shield, SimCard, Tower, Check } from './components/icons';
import { navStructure } from './servicesData';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import ServiceInquiryForm from './ServiceInquiryForm';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';

const DataSimPage: React.FC = () => {
  const features = [
    {
        icon: <Wifi className="w-6 h-6 text-brand-blue" />,
        title: "Home Internet",
        description: "Perfect for LTE/5G routers. Get your home connected instantly without waiting for fibre installations."
    },
    {
        icon: <Building className="w-6 h-6 text-brand-blue" />,
        title: "Business Continuity",
        description: "Keep your point-of-sale and office systems online with a reliable backup connection."
    },
    {
        icon: <Smartphone className="w-6 h-6 text-brand-blue" />,
        title: "Mobile Workforce",
        description: "Keep your team connected on the road with data for tablets, laptops, and mobile hotspots."
    },
    {
        icon: <Globe className="w-6 h-6 text-brand-blue" />,
        title: "Nationwide Coverage",
        description: "Powered by MTN's award-winning network, ensuring you have signal wherever you go."
    },
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "High-Speed LTE & 5G",
        description: "Experience blazing fast speeds suitable for streaming, video conferencing, and large downloads."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Control Your Spend",
        description: "Flexible top-up options and capped packages ensure you never run into unexpected bills."
    }
  ];

  const navigate = useNavigation();
  const connectivityCategory = navStructure.find(cat => cat.path === '/connectivity');
  const dataSimService = connectivityCategory?.subServices?.find(s => s.path === '/connectivity/data-sim');

  return (
    <>
      <Hero
        title={
            <>
                Pure Data, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">Pure Speed.</span>
            </>
        }
        subtitle="The versatile connectivity solution for Home, Office, and Mobile use. Plug into any device and get online instantly with South Africa's best network."
        badge={
            <>
                <SimCard className="w-4 h-4" />
                <span>Mobile Data SIMs</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="relative z-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-gray-900 rounded-[22px] p-8 h-full relative overflow-hidden">
                        {/* Sim Card Chip */}
                        <div className="absolute top-8 right-8 w-14 h-10 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded opacity-90 flex flex-col justify-between p-1.5 shadow-lg">
                            <div className="w-full h-px bg-yellow-600/40"></div>
                            <div className="w-full h-px bg-yellow-600/40"></div>
                            <div className="w-full h-px bg-yellow-600/40"></div>
                            <div className="absolute top-0 left-1/2 w-px h-full bg-yellow-600/40 -translate-x-1/2"></div>
                        </div>

                        <div className="mt-16">
                            <p className="text-gray-400 text-xs font-mono tracking-widest mb-1">MTN / TELKOM / VODACOM</p>
                            <h3 className="text-3xl font-bold text-white mb-2">5G Data SIM</h3>
                            <p className="text-brand-green font-medium mb-8">Uncapped & Capped Options</p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="flex items-center">
                                        <div className="bg-brand-blue p-2 rounded-lg mr-3"><Wifi className="w-4 h-4 text-white"/></div>
                                        <span className="text-sm font-medium text-gray-200">Connectivity</span>
                                    </div>
                                    <span className="text-white font-bold text-sm">LTE / 5G</span>
                                </div>
                                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="flex items-center">
                                        <div className="bg-purple-500 p-2 rounded-lg mr-3"><Globe className="w-4 h-4 text-white"/></div>
                                        <span className="text-sm font-medium text-gray-200">Coverage</span>
                                    </div>
                                    <span className="text-white font-bold text-sm">National</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-30 bg-white text-gray-900 p-4 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3">
                    <Tower className="w-6 h-6 text-brand-blue" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Network Status</p>
                        <p className="text-sm font-bold">Active • 5 Bars</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-brand-green/20">
                View Pricing
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.open('https://www.iptoneconnect.co.za/?section=LTE', '_blank', 'noopener,noreferrer')} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                Get a Quote
            </Button>
        </div>
      </Hero>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                Home & Business Ready
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One Sim, Endless Possibilities</h2>
            <p className="text-lg text-gray-600 mb-6">
              Why wait for installation? Our MTN Data Sim Cards offer an immediate internet solution that works as hard as you do. Whether you need to power your home Wi-Fi, keep your business running during outages, or stay connected while traveling, we have a package for you.
            </p>
            <p className="text-lg text-gray-600">
              Compatible with all standard LTE/5G routers, smartphones, and tablets. Simply insert the sim and start browsing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <ServiceInquiryForm serviceName="MTN Data Sim Inquiry" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose an MTN Data Sim?</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Designed for flexibility, speed, and reliability.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="bg-blue-50 inline-block p-3 rounded-xl mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {dataSimService?.subServices && (
        <section className="py-16 bg-white" id="pricing">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">View Data Packages</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Select a data bundle that suits your usage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {dataSimService.subServices.map(sub => (
                <a key={sub.path} href={sub.path} onClick={(e) => { e.preventDefault(); navigate(sub.path); }} className="block group rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 md:col-start-2">
                  <Card className="h-full text-center hover:border-brand-blue transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">{sub.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500">Explore affordable monthly data plans.</p>
                    </CardContent>
                    <CardFooter>
                       <Button as="span" className="w-full font-semibold">
                          View Pricing
                      </Button>
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

       <CtaSection />
    </>
  );
};

export default DataSimPage;
