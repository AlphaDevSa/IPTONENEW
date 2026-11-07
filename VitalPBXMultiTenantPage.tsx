
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Server, Database, Globe, CreditCard, Shield, Activity, Settings, TrendingUp, Users, Monitor, Phone, Zap } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const VitalPBXMultiTenantPage: React.FC = () => {
  const navigate = useNavigation();

  const modules = [
    {
      title: "Sonata Switch",
      description: "The core Class 4/5 Softswitch engine. Create unlimited tenants, manage DIDs, and configure trunks from a central administration console.",
      icon: <Server className="w-8 h-8 text-white" />,
      bg: "bg-red-600"
    },
    {
      title: "Sonata Billing",
      description: "A complete billing solution integrated directly into the switch. Handle prepaid/postpaid accounts, generate invoices, and process payments automatically.",
      icon: <CreditCard className="w-8 h-8 text-white" />,
      bg: "bg-blue-600"
    },
    {
      title: "VitXi WebRTC",
      description: "A fully featured WebRTC softphone for your customers. Video calling, chat, screen sharing, and file transfer directly in the browser.",
      icon: <Globe className="w-8 h-8 text-white" />,
      bg: "bg-purple-600"
    }
  ];

  const carrierFeatures = [
      "Least Cost Routing (LCR)",
      "High Availability (HA) Failover",
      "Real-Time Call Analytics",
      "Automated Provisioning",
      "Fraud Detection & Security",
      "White-Label Reseller Portals"
  ];

  return (
    <>
      <Hero
        title={
            <>
                Build Your VoIP Empire with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">VitalPBX Carrier</span>
            </>
        }
        subtitle="The all-in-one Multi-Tenant solution. Combine a powerful Softswitch, advanced Billing engine, and modern WebRTC clients to launch your own Service Provider business."
        badge={
            <>
                <Activity className="w-4 h-4" />
                <span>Carrier-Grade Softswitch</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-[80px] -z-10"></div>
                
                {/* Main Switch Dashboard */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Server className="w-5 h-5 text-red-500" />
                            <span className="text-sm font-mono text-gray-300">SONATA_SWITCH_CORE</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500">ONLINE</span>
                        </div>
                    </div>

                    {/* Live Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Active Tenants</p>
                            <div className="flex items-center">
                                <Users className="w-4 h-4 text-blue-400 mr-2" />
                                <span className="text-white font-bold text-xl">142</span>
                            </div>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Concurrent Calls</p>
                            <div className="flex items-center">
                                <Activity className="w-4 h-4 text-green-400 mr-2" />
                                <span className="text-white font-bold text-xl">856</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity Graph Simulation */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Traffic Load</span>
                            <span>84%</span>
                        </div>
                        <div className="flex items-end h-16 space-x-1 border-b border-gray-800 pb-1">
                            {[30, 45, 35, 60, 75, 50, 65, 80, 70, 55, 60, 40, 50, 70, 85].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${h > 70 ? 'bg-red-500' : 'bg-red-500/40'}`}></div>
                            ))}
                        </div>
                    </div>

                    {/* System Modules */}
                    <div className="mt-4 flex gap-2">
                        <span className="px-2 py-1 rounded bg-blue-900/30 border border-blue-800 text-[10px] text-blue-300 font-mono">Billing: OK</span>
                        <span className="px-2 py-1 rounded bg-purple-900/30 border border-purple-800 text-[10px] text-purple-300 font-mono">LCR: Active</span>
                    </div>
                </div>

                {/* Floating Badge: Billing */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Sonata Billing</p>
                        <p className="text-xs font-bold text-white">Auto-Invoicing</p>
                    </div>
                </div>

                {/* Floating Badge: WebRTC */}
                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">VitXi WebRTC</p>
                        <p className="text-xs font-bold text-white">Client Connected</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-red-500/20 bg-red-600 hover:bg-red-700 text-white border-transparent">
                View Modules
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                Contact Sales
            </Button>
        </div>
      </Hero>

      {/* Intro / Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Activity className="w-4 h-4 mr-2" />
                        Sonata Suite
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        More Than Just a PBX.<br/>A Complete Telco Stack.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        VitalPBX Multi-Tenant (Carrier Edition) removes the need for disparate systems. Instead of buying a switch from Vendor A and billing software from Vendor B, you get a unified platform designed to work together seamlessly.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you are a startup ITSP or an established carrier looking to modernize, the Sonata Suite provides the scalability and control you need to compete with the giants.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Class 4 & 5 Capabilities</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Integrated Payment Gateways (Stripe, PayPal)</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                            <span className="text-gray-700 font-medium">Tenant Isolation & Branding</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-blue-50 rounded-3xl transform -rotate-2"></div>
                    <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                            <h3 className="font-bold text-white">System Architecture</h3>
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-green-500 font-mono">ONLINE</span>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            {/* Layer 1: Admin */}
                            <div className="bg-gray-800 p-4 rounded-xl border border-gray-600 text-center relative">
                                <span className="text-xs text-gray-400 uppercase tracking-widest absolute top-2 left-1/2 transform -translate-x-1/2">Service Provider Layer</span>
                                <div className="mt-4 flex justify-center gap-4">
                                    <div className="bg-blue-600 px-3 py-1 rounded text-xs text-white font-bold">Billing</div>
                                    <div className="bg-red-600 px-3 py-1 rounded text-xs text-white font-bold">Routing</div>
                                    <div className="bg-purple-600 px-3 py-1 rounded text-xs text-white font-bold">Rates</div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center">
                                <div className="h-6 w-0.5 bg-gray-600"></div>
                            </div>

                            {/* Layer 2: Tenants */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-gray-800 p-3 rounded-lg border border-gray-600 text-center">
                                    <Users className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                                    <p className="text-xs text-gray-300">Tenant A</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg border border-gray-600 text-center">
                                    <Users className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                                    <p className="text-xs text-gray-300">Tenant B</p>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg border border-gray-600 text-center">
                                    <Users className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                                    <p className="text-xs text-gray-300">Tenant C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Core Modules */}
      <section id="modules" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Sonata Ecosystem</h2>
                <p className="text-lg text-gray-600">VitalPBX's power lies in its modular approach. Activate what you need, when you need it.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {modules.map((mod, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className={`${mod.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                            {mod.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{mod.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {mod.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Billing Detail Section */}
      <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                      <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                              <TrendingUp className="w-5 h-5 text-brand-blue mr-2" />
                              Least Cost Routing (LCR)
                          </h4>
                          <p className="text-sm text-gray-600 mb-6">
                              Automatically route calls through the cheapest carrier based on the destination prefix. Maximize your profit margins on every minute.
                          </p>
                          <div className="space-y-2">
                              <div className="flex justify-between text-xs font-mono bg-white p-2 rounded border border-gray-200">
                                  <span>Dest: +27 82 (Vodacom)</span>
                                  <span className="text-green-600">Route: Carrier A (R0.35)</span>
                              </div>
                              <div className="flex justify-between text-xs font-mono bg-white p-2 rounded border border-gray-200">
                                  <span>Dest: +27 83 (MTN)</span>
                                  <span className="text-green-600">Route: Carrier B (R0.32)</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="order-1 lg:order-2">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Automate Your Revenue</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          Billing is the heartbeat of any telecom business. With Sonata Billing, you can manage subscription plans, call rates, and invoicing without external software.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                              <div>
                                  <h4 className="font-bold text-gray-900">Prepaid & Postpaid</h4>
                                  <p className="text-sm text-gray-600">Top-up wallets for strict control or bill in arrears for corporate clients.</p>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                              <div>
                                  <h4 className="font-bold text-gray-900">Automatic Suspension</h4>
                                  <p className="text-sm text-gray-600">System automatically disables trunks when credit limits are reached to prevent fraud loss.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature List */}
      <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Carrier-Grade Features</h2>
                  <p className="text-gray-400">Everything you need to run a stable, scalable VoIP network.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {carrierFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-brand-green transition-colors">
                          <CheckCircle className="w-5 h-5 text-brand-green mr-4 flex-shrink-0" />
                          <span className="font-medium text-gray-200">{feat}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Carrier Quote</h2>
                    <p className="text-lg text-gray-600">
                        Interested in licensing VitalPBX Multi-Tenant for your operation? Contact us for wholesale pricing and deployment options.
                    </p>
                </div>
                <ServiceInquiryForm serviceName="VitalPBX Multi-Tenant PBX" />
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default VitalPBXMultiTenantPage;
