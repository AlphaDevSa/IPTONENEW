
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Check, Users, Monitor, Server, Lock, Phone, Smartphone, MessageSquare, Activity } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Modal from './Modal';
import BicomSignUpForm from './BicomSignUpForm';

const BicomPBXPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hostedPlan = { name: "Hosted Extension", price: 89 };

  const features = [
    {
        icon: <Monitor className="w-6 h-6 text-brand-blue" />,
        title: "gloCOM Communicator",
        description: "A state-of-the-art desktop and mobile application designed for Unified Communications. Chat, talk, and meet in one app."
    },
    {
        icon: <Users className="w-6 h-6 text-brand-blue" />,
        title: "Meeting & Collaboration",
        description: "Host video meetings, share your screen, and collaborate with your team seamlessly without third-party apps."
    },
    {
        icon: <Server className="w-6 h-6 text-brand-blue" />,
        title: "Call Center Modules",
        description: "Advanced queuing, IVR strategies, and real-time agent monitoring for professional contact centers."
    },
    {
        icon: <Lock className="w-6 h-6 text-brand-blue" />,
        title: "Secure & Stable",
        description: "Built on a rock-solid Linux foundation with built-in encryption for voice and chat traffic."
    },
    {
        icon: <CheckCircle className="w-6 h-6 text-brand-blue" />,
        title: "CRM Integration",
        description: "Pop customer records automatically on incoming calls. Integrates with Salesforce, Zoho, and many more."
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-brand-blue" />,
        title: "Unified Messaging",
        description: "Voicemail-to-email, SMS integration, and instant messaging all in one cohesive platform."
    }
  ];
  
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
                Enterprise-Grade <span className="text-brand-green">Unified Communications</span>
            </>
        }
        subtitle="Power your business with Bicom Systems PBXware. Experience the stability of a carrier-grade platform combined with the versatility of the award-winning gloCOM communicator."
        badge={
            <>
                <Server className="w-4 h-4" />
                <span>Carrier-Grade Platform</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-lg">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>

                {/* Main Desktop App Interface */}
                <div className="relative z-20 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header/Title Bar */}
                    <div className="h-9 bg-gray-800 border-b border-gray-700 flex items-center px-4 justify-between">
                         <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">gloCOM</div>
                        <div className="w-4"></div> {/* spacer */}
                    </div>

                    <div className="flex h-72">
                        {/* Sidebar */}
                        <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
                             {/* Icons */}
                             <div className="p-2 bg-brand-blue rounded-lg text-white shadow-lg"><Phone className="w-5 h-5"/></div>
                             <div className="p-2 text-gray-500 hover:text-white transition-colors"><MessageSquare className="w-5 h-5"/></div>
                             <div className="p-2 text-gray-500 hover:text-white transition-colors"><Users className="w-5 h-5"/></div>
                             <div className="p-2 text-gray-500 hover:text-white transition-colors"><Monitor className="w-5 h-5"/></div>
                        </div>

                        {/* List View */}
                        <div className="w-56 bg-gray-900 border-r border-gray-700 flex flex-col hidden sm:flex">
                            <div className="p-3 border-b border-gray-700">
                                <div className="h-8 w-full bg-gray-800 rounded-md border border-gray-600 flex items-center px-3">
                                    <span className="text-xs text-gray-500">Search...</span>
                                </div>
                            </div>
                            <div className="p-2 space-y-2 overflow-hidden">
                                {/* List Item 1 */}
                                <div className="flex items-center p-2 bg-gray-800 rounded-lg border border-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold mr-2 border border-green-500/30">JD</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 w-20 bg-gray-400 rounded mb-1"></div>
                                        <div className="h-1.5 w-10 bg-gray-600 rounded"></div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                 {/* List Item 2 */}
                                 <div className="flex items-center p-2 hover:bg-gray-800/50 rounded-lg opacity-60">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-xs font-bold mr-2 border border-purple-500/30">AS</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 w-16 bg-gray-500 rounded mb-1"></div>
                                        <div className="h-1.5 w-12 bg-gray-700 rounded"></div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                </div>
                                {/* List Item 3 */}
                                <div className="flex items-center p-2 hover:bg-gray-800/50 rounded-lg opacity-60">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs font-bold mr-2 border border-blue-500/30">MR</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 w-24 bg-gray-500 rounded mb-1"></div>
                                        <div className="h-1.5 w-8 bg-gray-700 rounded"></div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Active Content (Video Meeting) */}
                        <div className="flex-1 bg-gray-800 relative flex flex-col">
                             <div className="absolute inset-0 bg-gray-900 m-2 rounded-lg border border-gray-700 flex flex-col items-center justify-center relative overflow-hidden">
                                  {/* Fake Video Feed */}
                                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                      <span className="text-[10px] text-white font-mono">00:14:22</span>
                                  </div>
                                  
                                  <div className="relative mb-4">
                                      <div className="w-24 h-24 bg-gradient-to-tr from-gray-700 to-gray-600 rounded-full flex items-center justify-center border-2 border-gray-500">
                                          <Users className="w-10 h-10 text-gray-400" />
                                      </div>
                                      <div className="absolute bottom-0 right-0 bg-brand-blue p-1.5 rounded-full border-2 border-gray-900">
                                          <Monitor className="w-3 h-3 text-white" />
                                      </div>
                                  </div>
                                  
                                  <p className="text-sm font-bold text-white mb-1">Weekly Strategy Sync</p>
                                  <p className="text-xs text-brand-green">Connected via gloCOM</p>

                                  <div className="flex gap-4 mt-6">
                                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600">
                                          <Monitor className="w-4 h-4 text-white"/>
                                      </div>
                                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-900/50">
                                          <Phone className="w-4 h-4 text-white rotate-[135deg]"/>
                                      </div>
                                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600">
                                          <MessageSquare className="w-4 h-4 text-white"/>
                                      </div>
                                  </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile Card */}
                <div className="absolute -bottom-6 -right-6 z-30 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3 animate-float-slow w-48">
                    <div className="bg-brand-blue/10 p-2 rounded-lg text-brand-blue">
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">gloCOM GO</p>
                        <p className="text-xs font-bold text-gray-900">Seamless Handoff</p>
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

      {/* App Showcase Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                        <Smartphone className="w-4 h-4 mr-2" />
                        gloCOM GO
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Your Office, <span className="text-brand-blue">Everywhere.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Bicom's <strong>gloCOM</strong> is more than just a softphone. It's a complete collaboration tool. Whether on your desktop or mobile, you have access to your extension, contacts, history, and meetings.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <Check className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Seamless Desktop to Mobile handoff</span>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <Check className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Integrated Video Conferencing</span>
                        </li>
                        <li className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <Check className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">File Transfer & Screen Sharing</span>
                        </li>
                    </ul>
                    <Button onClick={() => setIsModalOpen(true)} size="lg" className="font-bold">
                        Get Started with gloCOM
                    </Button>
                </div>
                
                {/* Abstract Device Mockup */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-50 -z-10"></div>
                    <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl border-4 border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-gray-800 rounded-xl overflow-hidden relative aspect-video flex items-center justify-center">
                            {/* UI Mockup Placeholder */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-blue rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
                                    <MessageSquare className="w-8 h-8" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">gloCOM Meeting</h3>
                                <p className="text-gray-400 text-sm">Join the conference</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"><Phone className="w-4 h-4 text-white rotate-[135deg]" /></div>
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Features</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Built for stability and scale, PBXware offers everything a modern enterprise needs.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="p-10 lg:p-16 text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">Simple Per-User Pricing</h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Get access to the full Bicom suite, including the gloCOM app, for a simple monthly fee. No hidden license costs.
                        </p>
                        <div className="flex items-baseline mb-8">
                            <span className="text-5xl font-extrabold text-white">R{hostedPlan.price}</span>
                            <span className="text-blue-200 ml-2">/user /month</span>
                        </div>
                        <ul className="space-y-3 mb-10">
                            <li className="flex items-center text-blue-50">
                                <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                Full PBX Feature Set
                            </li>
                            <li className="flex items-center text-blue-50">
                                <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                gloCOM Desktop & Mobile App
                            </li>
                            <li className="flex items-center text-blue-50">
                                <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                Online Management Portal
                            </li>
                        </ul>
                        <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-brand-blue hover:bg-gray-100 font-bold w-fit">
                            Sign Up Now
                        </Button>
                    </div>
                    <div className="bg-gray-900 p-10 lg:p-16 relative">
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6">Need a Custom Solution?</h3>
                            <p className="text-gray-400 mb-8">
                                For large call centers or on-premise deployments, we offer tailored packages. Fill out the form below for a custom quote.
                            </p>
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <ServiceInquiryForm serviceName="Bicom Systems Enterprise" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Minute Bundles */}
      <section className="py-20 bg-gray-50">
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
          <Modal title="Sign Up for Bicom Systems PBX" onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
             <BicomSignUpForm plan={hostedPlan} />
          </Modal>
      )}
    </>
  );
};

export default BicomPBXPage;
