
import React, { useState } from 'react';
import Hero from './components/Hero';
import { Server, Users, Shield, Zap, Globe, Smartphone, Monitor, Layout, CheckCircle, Lock, MessageSquare, Activity, Phone } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import Modal from './Modal';
import BicomSignUpForm from './BicomSignUpForm';

const BicomMultiTenantPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hostedPlan = { name: "Hosted Extension", price: 89 };

  const highlights = [
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "100% White Label",
      description: "Brand the entire platform as your own. From the web interface to the desktop and mobile apps (gloCOM), your customers see your logo, not ours.",
      bg: "bg-blue-600"
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Class 5 Softswitch",
      description: "A robust, scalable telephony platform supporting thousands of concurrent calls and unlimited tenants on a single partition.",
      bg: "bg-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Carrier Grade Stability",
      description: "Built on open standards but hardened for enterprise use. PBXware is known for its incredible uptime and resilience.",
      bg: "bg-green-600"
    }
  ];

  const editions = [
      {
          name: "Business Edition",
          desc: "Perfect for SMEs. Includes IVR, Voicemail, Conferencing, and standard call features.",
          features: ["Unlimited Extensions", "Standard IVR", "Ring Groups", "Conferencing"]
      },
      {
          name: "Call Center Edition",
          desc: "Advanced features for contact centers. Queues, Agents, Real-time Wallboards, and Reporting.",
          features: ["Skills-based Routing", "Queue Callback", "Agent Monitoring", "Comprehensive Statistics"]
      }
  ];

  return (
    <>
      <Hero
        title={
            <>
                The Gold Standard for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Hosted VoIP</span>
            </>
        }
        subtitle="Bicom Systems PBXware Multi-Tenant is the platform of choice for ITSPs and MSPs worldwide. Launch your own Unified Communications brand with the powerful gloCOM suite."
        badge={
            <>
                <Server className="w-4 h-4" />
                <span>Carrier-Grade Platform</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>

                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Activity className="w-5 h-5 text-brand-green" />
                            <span className="text-sm font-mono text-gray-300">PBXWARE_MT_CORE</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500">STABLE</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Extensions Online</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                2,450 <Users className="w-4 h-4 text-blue-400 ml-2" />
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Tenants Active</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                128 <Server className="w-4 h-4 text-purple-400 ml-2" />
                            </p>
                        </div>
                    </div>

                    {/* App Integration Visual */}
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Smartphone className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-xs font-bold text-gray-300 mb-2">gloCOM Connectivity</p>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-500 flex items-center"><Smartphone className="w-3 h-3 mr-1"/> Mobile Apps</span>
                                <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-[85%] h-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-500 flex items-center"><Monitor className="w-3 h-3 mr-1"/> Desktop Apps</span>
                                <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 w-[70%] h-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badge: Meeting */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Meeting</p>
                        <p className="text-xs font-bold text-white">Video Conf.</p>
                    </div>
                </div>

                {/* Floating Badge: App */}
                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Smartphone className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">gloCOM GO</p>
                        <p className="text-xs font-bold text-white">Connected</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="font-bold shadow-lg shadow-brand-green/20">
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
                        Service Provider Edition
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Built for Providers, <br/>Loved by Users.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        PBXware Multi-Tenant allows you to host unlimited tenants (customers) on a single server instance. This dramatically lowers your operating costs while simplifying management.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Combined with the award-winning <strong>gloCOM</strong> apps, you can offer a complete Unified Communications as a Service (UCaaS) solution that rivals the biggest names in the industry.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Turnkey UCaaS Platform</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Integrated Billing via SERVERware</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">OMNI-Channel Support</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    {/* Visual representation of Multi-Tenancy */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                        <div className="text-center mb-8">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Central Management</span>
                            <h3 className="font-bold text-xl text-gray-900 mt-1">Single Instance</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <p className="font-bold text-sm">Tenant A</p>
                                <p className="text-xs text-gray-500">Law Firm</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <p className="font-bold text-sm">Tenant B</p>
                                <p className="text-xs text-gray-500">Call Center</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                <p className="font-bold text-sm">Tenant C</p>
                                <p className="text-xs text-gray-500">Retail Chain</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <p className="font-bold text-sm">Tenant D</p>
                                <p className="text-xs text-gray-500">Start-up</p>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-brand-blue font-medium">Efficient Resource Sharing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why ISPs Choose Bicom</h2>
                <p className="text-lg text-gray-600">A platform designed to help you sell more, manage less, and grow faster.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* gloCOM Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-6">Unified Communications with gloCOM</h2>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Your customers want to work from anywhere. gloCOM is a powerful desktop and mobile application designed to take business communications to the next level.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-center">
                              <Monitor className="w-6 h-6 text-brand-green mr-4" />
                              <div>
                                  <h4 className="font-bold text-white">Desktop App</h4>
                                  <p className="text-sm text-gray-400">Windows, macOS, Linux</p>
                              </div>
                          </li>
                          <li className="flex items-center">
                              <Smartphone className="w-6 h-6 text-brand-green mr-4" />
                              <div>
                                  <h4 className="font-bold text-white">Mobile App</h4>
                                  <p className="text-sm text-gray-400">iOS & Android (gloCOM GO)</p>
                              </div>
                          </li>
                          <li className="flex items-center">
                              <Users className="w-6 h-6 text-brand-green mr-4" />
                              <div>
                                  <h4 className="font-bold text-white">Meeting Module</h4>
                                  <p className="text-sm text-gray-400">Video Conferencing & Screen Sharing</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="relative">
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <div className="text-center mb-6">
                                <span className="inline-block px-3 py-1 bg-brand-blue rounded-full text-xs font-bold mb-2">YOUR BRAND HERE</span>
                                <h3 className="text-xl font-bold">White Label Ready</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800 rounded-xl p-4 text-center">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2"></div>
                                    <div className="h-2 bg-gray-700 w-16 mx-auto rounded"></div>
                                    <p className="text-xs text-gray-500 mt-2">Custom Logo</p>
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4 text-center">
                                    <div className="w-12 h-12 bg-brand-green rounded-full mx-auto mb-2"></div>
                                    <div className="h-2 bg-gray-700 w-16 mx-auto rounded"></div>
                                    <p className="text-xs text-gray-500 mt-2">Custom Colors</p>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Editions */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Editions</h2>
                  <p className="text-gray-600">Assign different feature sets to different tenants based on their needs.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {editions.map((edition, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-brand-blue transition-colors">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{edition.name}</h3>
                          <p className="text-gray-600 mb-6">{edition.desc}</p>
                          <ul className="space-y-2">
                              {edition.features.map((f, i) => (
                                  <li key={i} className="flex items-center text-sm text-gray-700">
                                      <CheckCircle className="w-4 h-4 text-brand-blue mr-2" />
                                      {f}
                                  </li>
                              ))}
                          </ul>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Wholesale Quote</h2>
                    <p className="text-lg text-gray-600">
                        Interested in becoming a Bicom Systems partner? Contact us for pricing on multi-tenant licenses and server specs.
                    </p>
                </div>
                <ServiceInquiryForm serviceName="Bicom Multi-Tenant PBX" />
            </div>
        </div>
      </section>

       <CtaSection />

       {isModalOpen && (
          <Modal title="Sign Up for Bicom Systems PBX" onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
             <BicomSignUpForm plan={hostedPlan} />
          </Modal>
      )}
    </>
  );
};

export default BicomMultiTenantPage;
