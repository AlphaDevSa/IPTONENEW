
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, Users, Server, Shield, Zap, Phone, Globe, Smartphone, Monitor, Settings } from './components/icons';
import { Button } from './components/Button';
import Modal from './Modal';
import VodiaSignUpForm from './VodiaSignUpForm';
import CtaSection from './components/CtaSection';
import { useNavigation } from './NavigationContext';

const VodiaPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hostedPlan = { name: "Hosted Extension", price: 89 };
  const navigate = useNavigation();

  const minuteBundles = [
    { name: "250 minutes", price: "R99" },
    { name: "500 minutes", price: "R199" },
    { name: "750 minutes", price: "R289" },
    { name: "1000 minutes", price: "R395" },
    { name: "2000 minutes", price: "R790" },
    { name: "2500 minutes", price: "R980" },
    { name: "5000 minutes", price: "R1750" },
    { name: "10 000 minutes", price: "R2950" },
  ];

  return (
    <>
      <Hero
        title={
            <>
                Cloud Voice, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">Built for Business.</span>
            </>
        }
        subtitle={
            <>
                Experience the stability of Vodia PBX — trusted by service providers for rock‑solid uptime, full white‑label control, and seamless Microsoft Teams integration.
                <span className="block text-gray-400 mt-2">Built to scale with your business without adding complexity.</span>
            </>
        }
        badge={
            <>
                <Zap className="w-4 h-4" />
                <span>Teams Integrated</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-lg">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#464EB8]/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Desktop Interface */}
                <div className="relative z-20 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4 justify-between">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] text-gray-300 font-medium">Teams Direct Routing</span>
                        </div>
                    </div>

                    <div className="flex h-64">
                        {/* Sidebar */}
                        <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-6">
                            <div className="p-2 bg-brand-blue rounded-lg text-white"><Phone className="w-5 h-5"/></div>
                            <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors"><Users className="w-5 h-5"/></div>
                            <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors"><Settings className="w-5 h-5"/></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 bg-gray-900 p-6 relative flex flex-col items-center justify-center">
                            {/* Teams Integration Badge in UI */}
                            <div className="absolute top-4 right-4 flex items-center space-x-2">
                                <span className="text-[10px] text-gray-500">Syncing with</span>
                                <div className="bg-[#464EB8] p-1 rounded text-white font-bold text-[10px] px-2">Teams</div>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mx-auto flex items-center justify-center border border-gray-600 shadow-inner">
                                    <span className="text-2xl font-bold text-white">JW</span>
                                </div>
                                <h3 className="text-white font-bold mt-4">John Wick</h3>
                                <p className="text-brand-green text-sm">On a Call • 04:20</p>
                            </div>

                            <div className="mt-8 flex justify-center space-x-4">
                                <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"><Monitor className="w-4 h-4"/></button>
                                <button className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition-colors"><Phone className="w-4 h-4 rotate-[135deg]"/></button>
                                <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"><Smartphone className="w-4 h-4"/></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile Element */}
                <div className="absolute -bottom-6 -left-6 z-30 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3 animate-float-slow w-48">
                    <div className="bg-brand-blue/10 p-2 rounded-lg text-brand-blue">
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Vodia Mobile</p>
                        <p className="text-xs font-bold text-gray-900">Handover Ready</p>
                    </div>
                </div>

                {/* Floating Teams Element */}
                <div className="absolute -top-6 -right-6 z-30 bg-[#464EB8] text-white p-3 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce-slow">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-blue-200 uppercase font-bold">Status</p>
                        <p className="text-xs font-bold">Teams Connected</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
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

      {/* Key Differentiators */}
      <section id="features" className="pt-10 pb-20 bg-white relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <img
                    src="/images/Vodia.png"
                    alt="Vodia PBX Logo – IPT One"
                    title="Vodia PBX – Cloud IP-PBX"
                    loading="lazy"
                    className="mx-auto h-20 md:h-28 lg:h-32 w-auto object-contain mb-6"
                />
                <p className="text-lg text-gray-600 leading-relaxed">
                    Discover a cloud-based IP-PBX phone system developed by Vodia Networks. It is a software application that allows businesses to manage their phone calls, voicemail, and other communication needs from a single platform. The Vodia PBX can be used on various devices, including traditional VoIP phones, mobile phones, laptops, and tablets.
                    <br className="hidden sm:block" /> 
                    The Vodia PBX software transforms devices into versatile communication tools for your employees. Additionally, Vodia seamlessly integrates with Teams and your CRM system
                </p>
            </div>
        </div>
      </section>

      {/* MS Teams Integration Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[128px] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-brand-blue/20 text-blue-200 border border-brand-blue/30 mb-6">
                          <Zap className="w-4 h-4 mr-2" />
                          Certified Integration
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Seamless Microsoft Teams</h2>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Turn Microsoft Teams into your business phone system. Vodia's direct routing capabilities allow you to make and receive calls directly within the Teams interface on desktop and mobile.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-center">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                              <span className="text-lg">Native Teams User Experience</span>
                          </li>
                          <li className="flex items-center">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                              <span className="text-lg">Presence Synchronization</span>
                          </li>
                          <li className="flex items-center">
                              <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                              <span className="text-lg">No Extra Hardware Required</span>
                          </li>
                      </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                      {/* Visual representation of Teams + Vodia */}
                      <div className="space-y-6">
                          <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                              <div className="flex items-center">
                                  <div className="w-10 h-10 bg-[#464EB8] rounded-lg flex items-center justify-center text-white font-bold">T</div>
                                  <div className="ml-4">
                                      <p className="font-bold">Microsoft Teams</p>
                                      <p className="text-xs text-gray-400">Frontend Interface</p>
                                  </div>
                              </div>
                              <div className="h-px w-12 bg-white/30"></div>
                              <div className="flex items-center">
                                  <div className="text-right mr-4">
                                      <p className="font-bold">Vodia PBX</p>
                                      <p className="text-xs text-gray-400">Voice Engine</p>
                                  </div>
                                  <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold">V</div>
                              </div>
                          </div>
                          <p className="text-center text-sm text-gray-400 italic">"The most robust Teams integration in the market."</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete UC Feature Set</h2>
                  <p className="text-lg text-gray-600">Everything you need to communicate effectively.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "WebRTC Softphone", icon: <Globe className="w-6 h-6" /> },
                      { title: "Mobile Apps (iOS/Android)", icon: <Smartphone className="w-6 h-6" /> },
                      { title: "CRM Integration", icon: <Users className="w-6 h-6" /> },
                      { title: "Call Recording", icon: <CheckCircle className="w-6 h-6" /> },
                      { title: "Video Conferencing", icon: <Monitor className="w-6 h-6" /> },
                      { title: "Auto Attendant (IVR)", icon: <Zap className="w-6 h-6" /> },
                      { title: "Call Queues & Reporting", icon: <Server className="w-6 h-6" /> },
                      { title: "Hotel PMS Support", icon: <Check className="w-6 h-6" /> }
                  ].map((feat, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 flex items-center hover:border-brand-blue transition-colors">
                          <div className="text-brand-blue mr-4">{feat.icon}</div>
                          <span className="font-semibold text-gray-800">{feat.title}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
                src="/images/vodia/multidevice.png"
                alt="Vodia Cloud PBX multi-device support in South Africa – desk phones, web, mobile | IPT One"
                title="Vodia Cloud PBX on desk phones, web, and mobile – IPT One"
                loading="lazy"
                className="w-full max-w-5xl mx-auto h-auto object-contain"
            />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Single Extension Pricing */}
                <div className="lg:w-1/2 w-full">
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Hosted Extension</h3>
                        <p className="text-gray-500 mb-8">Perfect for small businesses needing a robust system.</p>
                        
                        <div className="flex items-baseline mb-8">
                            <span className="text-5xl font-extrabold text-gray-900">R{hostedPlan.price}</span>
                            <span className="text-lg text-gray-500 font-normal ml-2">/user /month</span>
                        </div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Unlimited Extensions (Pay per use)
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Mobile & Desktop Apps Included
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Full PBX Feature Set
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Excludes Call Charges
                            </li>
                        </ul>
                        
                        <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full font-bold shadow-lg shadow-brand-blue/20">
                            Sign Up Now
                        </Button>
                    </div>
                </div>

                {/* Reseller / Wholesale Callout */}
                <div className="lg:w-1/2 w-full flex flex-col justify-center h-full pt-8 lg:pt-0">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 w-fit">
                        For Service Providers
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Are you an MSP?</h2>
                    <div className="space-y-4 mb-8">
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-brand-blue" />
                                    <span className="font-semibold text-gray-900">White Label Options</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                Brand the interface as your own and deliver a consistent experience across tenants.
                            </div>
                        </details>
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Server className="w-6 h-6 text-brand-blue" />
                                    <span className="font-semibold text-gray-900">Wholesale Pricing</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                Competitive rates for bulk licensing with margins optimized for MSPs and resellers.
                            </div>
                        </details>
                    </div>
                    <Button onClick={() => navigate('/partners/wholesale/vodia-multi-tenant')} variant="outline" size="lg" className="w-fit">
                        Explore Wholesale Program
                    </Button>
                </div>

            </div>
        </div>
      </section>
      
      {/* Bundles Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Outbound Minute Bundles</h2>
                <p className="text-gray-600">Add a predictable voice bundle to control your monthly spend.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {minuteBundles.map(bundle => (
                    <div key={bundle.name} className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-brand-blue hover:shadow-md transition-all">
                        <p className="font-bold text-gray-700 mb-1">{bundle.name}</p>
                        <p className="text-2xl font-extrabold text-brand-blue">{bundle.price}</p>
                        <p className="text-xs text-gray-400 mt-1">per month</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
               *Minutes include Landline to Landline and Landline to Mobile calling within South Africa.
            </div>
        </div>
      </section>

       <CtaSection />
      
      {isModalOpen && (
          <Modal title="Sign Up for Vodia PBX" onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
             <VodiaSignUpForm plan={hostedPlan} />
          </Modal>
      )}
    </>
  );
};

export default VodiaPage;
