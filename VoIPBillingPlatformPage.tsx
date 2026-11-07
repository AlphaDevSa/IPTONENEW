
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Server, Database, TrendingUp, Shield, Globe, Users, Zap, Settings, CreditCard, Lock, Activity, Monitor, Check, ArrowRight, Smartphone } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent, CardHeader, CardTitle } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const VoIPBillingPlatformPage: React.FC = () => {
  const navigate = useNavigation();

  const coreCapabilities = [
    {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        title: "Rate Management",
        description: "Upload unlimited buy/sell rate decks. Manage margins per destination, per client, or per reseller with granular precision.",
        bg: "bg-green-600"
    },
    {
        icon: <Server className="w-6 h-6 text-white" />,
        title: "Intelligent Routing (LCR)",
        description: "Least Cost Routing ensures every call takes the most profitable path without sacrificing quality. Automatic failover guarantees connection.",
        bg: "bg-blue-600"
    },
    {
        icon: <CreditCard className="w-6 h-6 text-white" />,
        title: "Real-Time Billing",
        description: "True real-time rating for prepaid and postpaid accounts. Automatically cut off calls when credit limits are reached to prevent fraud.",
        bg: "bg-purple-600"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Multi-Tenant & Reseller",
        description: "Create unlimited reseller levels. Your resellers can brand their own portals, set their own rates, and manage their own clients.",
        bg: "bg-orange-600"
    }
  ];

  const features = [
      {
          category: "Billing & Finance",
          items: [
              "Prepaid & Postpaid Accounts",
              "Multi-Currency Support",
              "Automatic Invoicing (PDF)",
              "Payment Gateway Integration",
              "Credit Limit Alerts",
              "Tax/VAT Management"
          ]
      },
      {
          category: "Switching & Routing",
          items: [
              "SIP Peering & Trunking",
              "Codec Transcoding",
              "CLI Manipulation",
              "Topology Hiding",
              "Dynamic Routing Policies",
              "Concurrent Call Limiting"
          ]
      },
      {
          category: "Customer Experience",
          items: [
              "White-Label Self-Care Portal",
              "Real-time CDR View",
              "Balance & Usage History",
              "DID Number Purchasing",
              "Support Ticket Integration",
              "Call Quality Reports (MOS)"
          ]
      },
      {
          category: "Security & Compliance",
          items: [
              "Active Fraud Detection",
              "IP Whitelisting/Blacklisting",
              "Geo-Blocking",
              "SSL/TLS Encryption",
              "Automated Backups",
              "Role-Based Access Control"
          ]
      }
  ];

  return (
    <>
      <Hero
        title={
            <>
                The Engine Room of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">VoIP Business</span>
            </>
        }
        subtitle="A carrier-grade VoIP Softswitch and Billing Platform designed for Service Providers. Manage rates, route calls, and bill customers with precision."
        badge={
            <>
                <Settings className="w-4 h-4" />
                <span>Class 4/5 Softswitch</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
                
                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Server className="w-5 h-5 text-brand-green" />
                            <span className="text-sm font-mono text-gray-300">CORE_SWITCH_01</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500">ONLINE</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Active Calls</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                842 <span className="text-xs text-green-500 ml-2 font-normal">▲ 12%</span>
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">ASR (Global)</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                68% <Activity className="w-4 h-4 text-brand-blue ml-2" />
                            </p>
                        </div>
                    </div>

                    {/* Routing Visual */}
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 mb-2">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-gray-300">LCR Routing</span>
                            <span className="text-[10px] text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">OPTIMIZED</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-500">Carrier A</span>
                                <div className="flex-grow mx-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 w-[70%] h-full"></div>
                                </div>
                                <span className="text-white">R0.22</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-500">Carrier B</span>
                                <div className="flex-grow mx-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 w-[45%] h-full"></div>
                                </div>
                                <span className="text-white">R0.25</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <CreditCard className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Billing</p>
                        <p className="text-xs font-bold text-white">Real-Time</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Shield className="w-5 h-5 text-brand-blue" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Fraud Guard</p>
                        <p className="text-xs font-bold text-white">Active</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-blue/20">
                Request Demo
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                Talk to Sales
            </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Settings className="w-4 h-4 mr-2" />
                        Class 4/5 Capabilities
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Take Control of Your Voice Traffic
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        This is not just a PBX; it is a comprehensive wholesale management platform. It sits at the core of your operation, handling the complex logic between your upstream carriers and your downstream customers.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you are an ITSP, a WISP adding voice services, or a wholesale carrier, our platform gives you the tools to monetize voice traffic effectively, automate billing, and protect your margins.
                    </p>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Stop revenue leakage with real-time billing</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Automate recurring invoices and payments</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-4">
                                <CheckCircle className="w-5 h-5 text-green-700" />
                            </div>
                            <span className="font-medium text-gray-800">Offer White-Label portals to your clients</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                            <h3 className="font-bold text-gray-900">Traffic Flow</h3>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Visualizing the flow */}
                            <div className="flex items-center justify-between">
                                <div className="text-center w-24">
                                    <div className="bg-gray-100 p-3 rounded-xl mb-2 mx-auto w-12 h-12 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <p className="text-xs font-bold text-gray-600">Customers</p>
                                </div>
                                <div className="flex-grow h-1 bg-gray-200 relative mx-4">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        AUTH & RATE
                                    </div>
                                </div>
                                <div className="text-center w-24">
                                    <div className="bg-brand-blue p-3 rounded-xl mb-2 mx-auto w-12 h-12 flex items-center justify-center shadow-lg">
                                        <Activity className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-xs font-bold text-brand-blue">Softswitch</p>
                                </div>
                                <div className="flex-grow h-1 bg-gray-200 relative mx-4">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        LCR ROUTING
                                    </div>
                                </div>
                                <div className="text-center w-24">
                                    <div className="bg-gray-100 p-3 rounded-xl mb-2 mx-auto w-12 h-12 flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <p className="text-xs font-bold text-gray-600">Carriers</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-600">Real-Time Margin Check</span>
                                    <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded">Active</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                                    <div>Buy: R0.15/min</div>
                                    <div>Sell: R0.35/min</div>
                                    <div className="col-span-2 border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900">
                                        <span>Profit:</span>
                                        <span>R0.20/min (57%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to run a profitable telecoms operation.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreCapabilities.map((cap, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                        <div className={`${cap.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                            {cap.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{cap.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {cap.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Detailed Feature List */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                  {features.map((featureSet, index) => (
                      <div key={index}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                              {featureSet.category}
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-4">
                              {featureSet.items.map((item, i) => (
                                  <li key={i} className="flex items-start">
                                      <CheckCircle className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700 text-sm">{item}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* White Label Banner */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-1/2">
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 mb-6">
                          <Lock className="w-4 h-4 mr-2" />
                          Your Brand, Our Tech
                      </div>
                      <h2 className="text-3xl font-bold mb-6">100% White Label Ready</h2>
                      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                          Your customers will never see us. The entire platform—from the URL, logo, and color scheme to the invoices generated—can be fully branded to match your company identity.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-brand-green mr-3" /> Custom Domain (e.g., billing.yourcompany.com)
                          </li>
                          <li className="flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-brand-green mr-3" /> Customizable HTML Email Templates
                          </li>
                          <li className="flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-brand-green mr-3" /> Client Self-Service Portal
                          </li>
                      </ul>
                  </div>
                  <div className="md:w-1/2">
                      <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                          <div className="bg-gray-100 p-3 border-b flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <div className="bg-white px-3 py-1 rounded text-xs text-gray-500 flex-grow text-center mx-4">billing.yourdomain.com</div>
                          </div>
                          <div className="p-8 text-center bg-gray-50 min-h-[250px] flex flex-col justify-center items-center">
                              <div className="w-32 h-10 bg-gray-200 rounded mb-6 animate-pulse"></div>
                              <div className="w-full max-w-xs space-y-3">
                                  <div className="h-8 bg-white border border-gray-200 rounded"></div>
                                  <div className="h-8 bg-white border border-gray-200 rounded"></div>
                                  <div className="h-10 bg-brand-blue rounded shadow-md mt-4"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white" id="demo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Platform Demo</h2>
                    <p className="text-lg text-gray-600">
                        See the power of our billing engine in action. Fill out the form below to schedule a guided tour with a solutions architect.
                    </p>
                </div>
                
                <ServiceInquiryForm serviceName="VoIP Billing Platform Demo" />
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default VoIPBillingPlatformPage;
