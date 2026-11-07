
import React from 'react';
import { Button } from "./components/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Hero from './components/Hero';
import { servicesCategory, hostingCategory, connectivityCategory, domainsCategory, navStructure } from './servicesData';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';
import { Globe, Cloud, Server, Phone, Database, Wifi, Shield, ArrowRight, Tower, SimCard, Zap, Activity, Headset } from './components/icons';

const ServiceCard: React.FC<{ service: any, dark?: boolean }> = ({ service, dark = false }) => {
  const navigate = useNavigation();
  
  return (
    <a 
      href={service.path} 
      onClick={(e) => { e.preventDefault(); navigate(service.path); }} 
      className="block group h-full"
    >
      <div className={`h-full relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border ${
          dark 
            ? 'bg-gray-800 border-gray-700 hover:border-brand-green/50' 
            : 'bg-white border-gray-100 hover:border-brand-blue/30'
      }`}>
          {/* Decorative Gradient Blob */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
              dark ? 'bg-brand-green' : 'bg-brand-blue'
          }`}></div>

          <div className="p-8 flex flex-col h-full relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 ${
                  dark 
                    ? 'bg-gray-700 text-brand-green' 
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-brand-blue'
              }`}>
                  {service.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
              </h3>
              
              <p className={`text-base leading-relaxed mb-6 flex-grow ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
              </p>
              
              <div className={`flex items-center text-sm font-bold tracking-wide uppercase mt-auto pt-4 border-t ${
                  dark 
                    ? 'border-gray-700 text-brand-green' 
                    : 'border-gray-100 text-brand-blue'
              }`}>
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
          </div>
      </div>
    </a>
  );
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigation();
  
  // Data Preparation
  const hostedPbx = navStructure.find(item => item.path === '/services/hosted-pbx');
  const callCenter = navStructure.find(item => item.path === '/services/call-center');
  
  // Communication Services
  const communicationServices = [
      ...(hostedPbx ? [{...hostedPbx, icon: <Cloud className="w-8 h-8" />}] : []),
      ...(callCenter ? [{...callCenter, icon: <Headset className="w-8 h-8" />}] : []),
      ...(servicesCategory?.subServices || []).map(s => ({
          ...s,
          icon: s.path.includes('sip') ? <Server className="w-8 h-8" /> :
                s.path.includes('voip') ? <Phone className="w-8 h-8" /> :
                s.path.includes('landline') ? <Globe className="w-8 h-8" /> :
                s.path.includes('call-center') ? <Shield className="w-8 h-8" /> : 
                <Phone className="w-8 h-8" />
      }))
  ];

  // Connectivity Services
  const connectivityServices = (connectivityCategory?.subServices || []).map(s => {
      let icon = <Wifi className="w-10 h-10" />;
      if (s.name.includes('LTE') || s.name.includes('5G')) icon = <Tower className="w-10 h-10" />;
      if (s.name.includes('Sim')) icon = <SimCard className="w-10 h-10" />;
      
      return { ...s, icon };
  });

  // Web & Cloud Services
  const webServices = [
      ...(domainsCategory?.subServices || []).map(s => ({...s, icon: <Globe className="w-8 h-8" />})),
      ...(hostingCategory?.subServices || []).map(s => ({...s, icon: <Database className="w-8 h-8" />}))
  ];

  // Wholesale Services
  const partnersCategory = navStructure.find(item => item.path === '/partners');
  const wholesaleCategory = partnersCategory?.subServices?.find(item => item.path === '/partners/wholesale');
  const wholesaleServicesRaw = wholesaleCategory?.subServices || [];

  const wholesaleServices = wholesaleServicesRaw.map(service => {
      let icon = <Server className="w-5 h-5 text-brand-blue" />;
      let description = "Scalable wholesale solution.";

      if (service.path.includes('billing-platform')) {
          icon = <Database className="w-5 h-5 text-brand-blue" />;
          description = "Robust VoIP Softswitch with integrated billing.";
      } else if (service.path.includes('voice-rates')) {
          icon = <Phone className="w-5 h-5 text-brand-blue" />;
          description = "Competitive tier-1 termination rates.";
      } else if (service.path.includes('vodia') || service.path.includes('vitalpbx') || service.path.includes('bicom')) {
          icon = <Cloud className="w-5 h-5 text-brand-blue" />;
          description = "Multi-tenant PBX platforms for MSPs.";
      }

      return { ...service, icon, description };
  });

  return (
    <>
      <Hero
        title={
          <>
            Your Complete <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Digital Ecosystem</span>
          </>
        }
        subtitle="Unify your business operations with our integrated suite of Voice, Data, and Cloud solutions. Engineered for reliability, designed for growth."
        visual={
            <div className="relative w-full max-w-lg mx-auto h-[450px] flex items-center justify-center">
                {/* Background Glows */}
                <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[80px]"></div>
                
                {/* Central Core */}
                <div className="relative z-20 w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-[0_0_60px_rgba(0,83,155,0.5)]">
                    <Activity className="w-12 h-12 text-brand-green" />
                </div>

                {/* Orbit 1: Voice */}
                <div className="absolute w-[240px] h-[240px] border border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-xl shadow-lg border border-blue-400/50">
                        <Phone className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Orbit 2: Connectivity */}
                <div className="absolute w-[360px] h-[360px] border border-dashed border-green-500/30 rounded-full animate-[spin_30s_linear_infinite_reverse]">
                    <div className="absolute bottom-[15%] right-[15%] bg-brand-green p-3 rounded-xl shadow-lg border border-green-400/50">
                        <Wifi className="w-5 h-5 text-gray-900" />
                    </div>
                </div>

                {/* Orbit 3: Cloud */}
                <div className="absolute w-[480px] h-[480px] border border-dashed border-purple-500/30 rounded-full animate-[spin_40s_linear_infinite]">
                    <div className="absolute top-[30%] left-[5%] bg-purple-600 p-3 rounded-xl shadow-lg border border-purple-400/50">
                        <Cloud className="w-5 h-5 text-white" />
                    </div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-10 right-0 bg-gray-800/80 backdrop-blur-md p-3 rounded-lg border border-gray-700 shadow-xl animate-float-slow">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-white">99.9% Uptime</span>
                    </div>
                </div>

                 <div className="absolute bottom-10 left-0 bg-gray-800/80 backdrop-blur-md p-3 rounded-lg border border-gray-700 shadow-xl animate-float-reverse">
                    <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-brand-blue" />
                        <span className="text-xs font-bold text-white">Secure Infrastructure</span>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('communication')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Explore Voice
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.open('https://iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                View Connectivity
            </Button>
        </div>
      </Hero>

      {/* Section 1: Business Communication */}
      <section id="communication" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm bg-blue-100 px-4 py-1.5 rounded-full">Voice & Collaboration</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-6 mb-6">Business Communication</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Crystal-clear voice solutions that keep you connected. From scalable Cloud PBX systems to cost-effective SIP trunking, we modernize how you talk to the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {communicationServices.map((service) => (
                <ServiceCard key={service.path} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Connectivity (Reimagined Grid Layout) */}
      <section id="connectivity" className="relative py-32 bg-gray-900 isolate overflow-hidden scroll-mt-20">
        {/* Background Network Graphic */}
        <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
                <pattern id="connectivity-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#connectivity-pattern)" />
        </svg>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">High-Speed Internet</h2>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    Connectivity Infrastructure
                </p>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Reliable, high-speed internet is the backbone of modern business. We provide a comprehensive suite of connectivity solutions tailored for uptime.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {connectivityServices.map((service) => (
                    <div 
                        key={service.path} 
                        onClick={() => navigate(service.path)}
                        className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            {service.icon}
                        </div>
                        
                        <div className="mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                            <div className="text-brand-green group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">
                            {service.name}
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="flex items-center text-sm font-bold text-brand-blue group-hover:text-white transition-colors">
                            Explore Options <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button onClick={() => window.open('https://iptoneconnect.co.za', '_blank', 'noopener,noreferrer')} size="lg" className="bg-brand-green text-gray-900 hover:bg-white font-bold px-10 shadow-[0_0_20px_rgba(185,215,11,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow">
                    Check Coverage Map
                </Button>
                <p className="text-gray-500 text-sm">
                    <span className="block sm:inline">Checking 20+ Networks including</span>{' '}
                    <span className="text-gray-300 font-semibold">Vumatel, OpenServe, MTN & Vodacom</span>
                </p>
            </div>
        </div>
      </section>

      {/* Section 3: Web & Cloud */}
      <section id="hosting" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1.5 rounded-full">Digital Presence</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-6 mb-6">Web & Cloud Hosting</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Secure your digital identity. From registering the perfect domain to hosting high-traffic websites, our cloud solutions are fast, secure, and reliable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webServices.map((service) => (
                <ServiceCard key={service.path} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Wholesale / Partners Banner */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
                
                <div className="relative z-10 lg:flex items-center justify-between">
                    <div className="lg:w-2/3 mb-10 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Wholesale & Partner Solutions</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
                            Are you an IT Provider, ISP, or Reseller? Access our carrier-grade network and white-label platforms to build your own telecoms business.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {wholesaleServices.slice(0, 4).map(ws => ( // Show first 4 wholesale items
                                <div key={ws.path} className="flex items-center space-x-3 text-blue-50">
                                    <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10 text-brand-green">
                                        {ws.icon}
                                    </div>
                                    <span className="font-medium text-sm">{ws.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-4 items-center lg:items-end">
                        <Button size="lg" onClick={() => navigate('/partners/wholesale')} className="w-full sm:w-auto font-bold bg-brand-green text-gray-900 hover:bg-white border-transparent">
                            Explore Wholesale
                        </Button>
                        <Button variant="outline" onClick={() => navigate('/partners/resellers')} className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                            Reseller Program
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

export default ServicesPage;
