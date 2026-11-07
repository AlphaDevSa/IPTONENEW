
import React from 'react';
import Hero from './components/Hero';
import { Server, Users, Shield, Zap, Globe, Layout, CheckCircle, Smartphone, Database, Activity } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const VodiaMultiTenantPage: React.FC = () => {
  const navigate = useNavigation();
  
  const benefits = [
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "True Multi-Tenancy",
      description: "Host hundreds of separate customer domains on a single server instance. One IP address, one operating system to manage, one upgrade path.",
      bg: "bg-blue-600"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "White Label Ready",
      description: "Your brand is your asset. Customize the web interface, domain names, and even the provisioning templates to reflect your company identity.",
      bg: "bg-purple-600"
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Lucrative Licensing",
      description: "Stop paying per extension. Vodia licenses are based on Simultaneous Calls (SC), allowing you to oversell extensions and maximize margins.",
      bg: "bg-green-600"
    }
  ];

  const features = [
      "Microsoft Teams Direct Routing",
      "WebRTC Softphone & Video",
      "iOS & Android Mobile Apps",
      "CRM Integration (Salesforce, Zoho)",
      "Automatic Call Recording",
      "Hotel PMS Integration",
      "Call Center Wallboards",
      "WHMCS Billing Integration"
  ];

  return (
    <>
      <Hero
        title={
            <>
                The MSP's Choice for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Cloud Voice</span>
            </>
        }
        subtitle="Built from the ground up for multi-tenancy. Vodia allows Service Providers to host, manage, and bill unlimited tenants from a single, rock-solid platform."
        badge={
            <>
                <Users className="w-4 h-4" />
                <span>Multi-Tenant Architecture</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>

                {/* Main Server Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Server className="w-5 h-5 text-brand-blue" />
                            <span className="text-sm font-mono text-gray-300">VODIA_CORE_INSTANCE</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500">RUNNING</span>
                        </div>
                    </div>

                    {/* Tenants Grid Visual */}
                    <div className="space-y-3">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Active Tenants</p>
                        
                        {/* Tenant 1 */}
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-brand-blue/50 transition-colors">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                                    AC
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Acme Corp</p>
                                    <p className="text-[10px] text-gray-400">12 Extensions • Online</p>
                                </div>
                            </div>
                            <Activity className="w-4 h-4 text-green-500" />
                        </div>

                        {/* Tenant 2 */}
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-brand-blue/50 transition-colors">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                                    GS
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Global Services</p>
                                    <p className="text-[10px] text-gray-400">45 Extensions • Online</p>
                                </div>
                            </div>
                            <Activity className="w-4 h-4 text-green-500" />
                        </div>

                        {/* Tenant 3 */}
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-brand-blue/50 transition-colors">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs">
                                    RD
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Red Dog Logistics</p>
                                    <p className="text-[10px] text-gray-400">8 Extensions • DND</p>
                                </div>
                            </div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* System Load */}
                    <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="flex justify-between items-center text-xs mb-1">
                            <span className="text-gray-400">Instance Load</span>
                            <span className="text-brand-blue font-bold">12%</span>
                        </div>
                        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-brand-blue w-[12%] h-full rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <Layout className="w-5 h-5 text-purple-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">White Label</p>
                        <p className="text-xs font-bold text-white">Fully Branded</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Globe className="w-5 h-5 text-green-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Access</p>
                        <p className="text-xs font-bold text-white">Any Device</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-blue/20">
                Get Started
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                Explore Features
            </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Server className="w-4 h-4 mr-2" />
                        Designed for Scale
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        One Server. <br/>Unlimited Opportunities.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Traditional PBX solutions require spinning up a new VM or container for every client. That's inefficient and a nightmare to maintain. 
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        <strong>Vodia is different.</strong> Its true multi-tenant architecture means you install the software once and create virtually unlimited separate tenants (domains) within it. This drastically reduces your hardware footprint and makes maintenance a breeze.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Linux or Windows Support</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Run on Bare Metal or Cloud (AWS, Azure)</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Native SBC Functionality Included</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                            <h3 className="font-bold text-gray-900">Architecture Comparison</h3>
                        </div>
                        
                        <div className="space-y-8">
                            {/* Traditional */}
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Traditional (Inefficient)</p>
                                <div className="flex gap-2 overflow-hidden">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-center w-1/3 opacity-70">
                                            <Server className="w-6 h-6 mx-auto text-gray-400 mb-1" />
                                            <span className="text-xs text-gray-500">OS + PBX</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-red-500 mt-1">High RAM/CPU Overhead per Client</p>
                            </div>

                            {/* Vodia */}
                            <div>
                                <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Vodia (Efficient)</p>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white text-xs px-2 py-0.5 rounded">
                                        Single Instance
                                    </div>
                                    <div className="flex justify-around mt-2">
                                        <div className="bg-white p-2 rounded shadow-sm w-1/4 text-center border border-blue-100">
                                            <span className="text-xs font-bold text-gray-700">Client A</span>
                                        </div>
                                        <div className="bg-white p-2 rounded shadow-sm w-1/4 text-center border border-blue-100">
                                            <span className="text-xs font-bold text-gray-700">Client B</span>
                                        </div>
                                        <div className="bg-white p-2 rounded shadow-sm w-1/4 text-center border border-blue-100">
                                            <span className="text-xs font-bold text-gray-700">Client C</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-brand-green mt-1">Maximized Margins & Performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why MSPs Switch to Vodia</h2>
                <p className="text-lg text-gray-600">Combine technical excellence with a business model that actually makes money.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className={`${benefit.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* MS Teams Integration */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-6">The Best Teams Integration in the Industry</h2>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Vodia is one of the few PBXs in the world with a Microsoft-certified SBC built-in. This allows for seamless Direct Routing without external gateways.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3 mt-1" />
                              <div>
                                  <h4 className="font-bold text-white">Native Presence Sync</h4>
                                  <p className="text-sm text-gray-400">If a user is on a call in Teams, their desk phone shows busy (BLF) and vice-versa.</p>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3 mt-1" />
                              <div>
                                  <h4 className="font-bold text-white">Cost Effective</h4>
                                  <p className="text-sm text-gray-400">Provide Teams calling to your clients at a fraction of the cost of Microsoft Calling Plans.</p>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3 mt-1" />
                              <div>
                                  <h4 className="font-bold text-white">Mix & Match</h4>
                                  <p className="text-sm text-gray-400">Users can have Teams, a physical IP phone, and the Vodia mobile app simultaneously.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 flex justify-center items-center">
                      <div className="text-center">
                          <div className="inline-flex items-center justify-center space-x-8 mb-6">
                              <div className="w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center text-4xl font-bold">V</div>
                              <span className="text-3xl font-light text-gray-400">+</span>
                              <div className="w-20 h-20 bg-[#464EB8] rounded-2xl flex items-center justify-center text-white text-4xl font-bold">T</div>
                          </div>
                          <p className="text-xl font-semibold">Vodia + Microsoft Teams</p>
                          <p className="text-brand-green mt-2 font-bold uppercase tracking-widest">Certified Interop</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature List */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything Your Clients Need</h2>
                  <p className="text-gray-600">A complete Unified Communications suite out of the box.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {features.map((feat, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-blue transition-colors">
                          <CheckCircle className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                          <span className="font-medium text-gray-800 text-sm">{feat}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Wholesale Quote</h2>
                    <p className="text-lg text-gray-600">
                        Get pricing for a Vodia Multi-Tenant license. We offer flexible monthly billing options for Service Providers.
                    </p>
                </div>
                <ServiceInquiryForm serviceName="Vodia Wholesale License" />
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default VodiaMultiTenantPage;
