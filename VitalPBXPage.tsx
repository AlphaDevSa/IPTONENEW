
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Smartphone, Check, Monitor, Zap, Users, Phone, MessageSquare, Wifi } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import Accordion from './Accordion';
import { useNavigation } from './NavigationContext';
import Modal from './Modal';
import VitalPBXSignUpForm from './VitalPBXSignUpForm';

const VitalPBXPage: React.FC = () => {
  const navigate = useNavigation();
  const [isVitalOrderOpen, setIsVitalOrderOpen] = useState(false);
  const vitalHostedPlan = { name: "Hosted Extension", price: 79 };

  const features = [
    {
      title: "Full Unified Communications Suite",
      description: "Unified voice, video, messaging, and file sharing in one interface for seamless collaboration anywhere."
    },
    {
      title: "Video Conferencing & Collaboration",
      description: "Host HD video meetings, screen share, and collaborate effortlessly with teams and clients."
    },
    {
      title: "Advanced Call Center Features",
      description: "Professional tools including skills-based routing, real-time wallboards, and detailed analytics to boost agent performance."
    },
    {
      title: "Call Recording",
      description: "Automatic call recording for compliance and training, easily retrievable via the user portal."
    },
    {
      title: "CRM & Third-Party Integrations",
      description: "Seamlessly connect with Salesforce, Zoho, and HubSpot for click-to-dial, screen pops, and auto-logging."
    },
    {
      title: "Branded Web Portal & Softphone",
      description: "Offer a consistent, professional experience with fully brandable portals and VitXi softphones."
    },
    {
      title: "Robust Reporting & Analytics",
      description: "Actionable insights into call volumes and agent performance to drive data-backed decisions."
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

  const fullFeaturesList = [
    {
        category: "Call Features",
        items: [
            "Boss / Secretary + Whitelist", "Black List", "Busy Lamp Field (BLF)", "Call Flow Control",
            "Call Forwarding", "Call Monitoring", "Call Pickup", "Call Parking", "Call Recording",
            "Call Screening", "Call Spy", "Call Transfer", "Call Waiting", "Caller-ID",
            "Dictation", "DISA", "DND (Do Not Disturb)", "Direct Inward Dial (DID)",
            "Find Me / Follow Me", "Ring Groups", "Music on Hold", "PINSets", "Pickup Groups",
            "Personal IVR", "Video Calling", "Voicemail to Email"
        ]
    },
    {
        category: "Call Center",
        items: [
            "Agent Login/Logout", "Call Barging", "Call Queues", "Caller Name Lookup",
            "Hot-desking", "Queue Priorities", "Real-time Statistics", "Skills-based Routing",
            "Queue Callback", "SLA Alerts", "Detailed Reporting"
        ]
    },
    {
        category: "Unified Communications",
        items: [
            "WebRTC Softphone", "Video Conferencing", "Screen Sharing", "Team Chat",
            "File Sharing", "Status Presence", "Mobile App Support"
        ]
    },
    {
        category: "Administration",
        items: [
            "Web-based Management", "Multi-Tenant Support", "Backup & Restore", "High Availability",
            "Firewall & Security", "Role-based Access", "Bulk Extension Import", "System Dashboards"
        ]
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Unified Communications, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Simplified.</span>
            </>
        }
        subtitle="VitalPBX combines voice, video, chat, and mobility into one powerful platform. Empower your team with a complete suite of collaboration tools designed for the modern hybrid workforce."
        badge={
            <>
                <Users className="w-4 h-4" />
                <span>All-in-One Platform</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-lg mx-auto">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/20 rounded-full blur-[90px] -z-10"></div>

                {/* Main Interface */}
                <div className="relative z-10 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Fake Window Header */}
                    <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-auto text-[10px] text-gray-500 font-medium">VitXi WebRTC</div>
                    </div>

                    <div className="flex h-72">
                        {/* Sidebar Nav */}
                        <div className="w-14 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-6">
                            <div className="p-2 bg-brand-blue rounded-lg text-white shadow-lg shadow-brand-blue/20"><Phone className="w-5 h-5"/></div>
                            <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors"><MessageSquare className="w-5 h-5"/></div>
                            <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors"><Users className="w-5 h-5"/></div>
                            <div className="mt-auto p-2 text-gray-500 hover:text-gray-300 transition-colors"><Monitor className="w-5 h-5"/></div>
                        </div>

                        {/* List Column (Hidden on small, visible on larger within container) */}
                        <div className="w-48 bg-gray-900/50 border-r border-gray-700 p-3 hidden sm:block">
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Recent Chats</div>
                            <div className="space-y-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className={`flex items-center space-x-3 p-2 rounded-lg ${i === 1 ? 'bg-gray-800 border border-gray-700' : 'opacity-50'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${i===1?'bg-purple-500':i===2?'bg-green-500':'bg-yellow-500'}`}>
                                            {i===1?'JD':i===2?'SM':'AK'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="h-2 bg-gray-600 rounded w-16 mb-1"></div>
                                            <div className="h-1.5 bg-gray-700 rounded w-10"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Area - Video Call */}
                        <div className="flex-1 bg-gray-900 relative p-4 flex flex-col items-center justify-center">
                            {/* Status Bar */}
                            <div className="absolute top-3 right-3 flex items-center space-x-2 bg-black/40 px-2 py-1 rounded-full border border-white/5">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] text-white font-mono">04:23</span>
                            </div>

                            {/* Avatar */}
                            <div className="relative mb-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 p-0.5">
                                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">JD</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                                    <div className="w-4 h-4 text-white"><Monitor className="w-2 h-2"/></div>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <h4 className="text-white font-bold text-sm">John Doe</h4>
                                <p className="text-xs text-gray-500">Marketing Director</p>
                            </div>

                            {/* Controls */}
                            <div className="flex space-x-3">
                                <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 transition-colors"><Monitor className="w-4 h-4"/></button>
                                <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 transition-colors"><MessageSquare className="w-4 h-4"/></button>
                                <button className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/20 transition-colors"><Phone className="w-4 h-4 rotate-[135deg]"/></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Mobile Card */}
                <div className="absolute -bottom-6 -right-2 z-20 w-40 bg-gray-800 border border-gray-600 rounded-2xl shadow-2xl p-3 animate-bounce-slow">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-gray-400">Mobile App</span>
                        <Wifi className="w-3 h-3 text-green-500"/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold"><Phone className="w-3 h-3"/></div>
                        <div>
                            <div className="h-2 w-16 bg-gray-600 rounded mb-1"></div>
                            <div className="h-1.5 w-10 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('vitalpbx-extension')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="font-bold shadow-lg shadow-brand-green/20">
                Get Started
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                Download Apps
            </Button>
        </div>
      </Hero>

      <section id="inquiry" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 mx-auto">
                <Users className="w-4 h-4 mr-2" />
                Unified Communications
            </div>
            <img
              src="/images/VitalPBX.png"
              alt="VitalPBX logo – Cloud PBX South Africa | IPT One"
              title="VitalPBX PBX Platform"
              loading="lazy"
              className="h-12 w-auto object-contain mb-4 mx-auto"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
                Unify Your Communications
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              VitalPBX goes beyond a traditional phone system. It's an all-in-one platform designed to break down communication silos and boost team productivity. Host video conferences, collaborate on projects, and manage your calls from a single, intuitive interface.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With powerful integrations and advanced features typically reserved for large enterprises, VitalPBX provides exceptional value. It's the ultimate solution for businesses looking to modernize their technology stack and empower a hybrid workforce.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <Zap className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Feature Rich</h4>
                  <p className="text-gray-600 text-sm">Enterprise-grade features out of the box.</p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <Monitor className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Modern Interface</h4>
                  <p className="text-gray-600 text-sm">Intuitive web management and user portals.</p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Team Collaboration</h4>
                  <p className="text-gray-600 text-sm">Voice, video, chat and presence in one.</p>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <img
                    src="/images/VitalPBX.png"
                    alt="VitalPBX Platform Logo – IPT One"
                    title="VitalPBX PBX Platform"
                    loading="lazy"
                    className="mx-auto h-12 md:h-16 w-auto object-contain mb-4"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">VitalPBX Features</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore the extensive capabilities of the VitalPBX platform.</p>
            </div>
            
            <div className="space-y-4 max-w-3xl mx-auto">
                {fullFeaturesList.map((category, i) => (
                    <details key={category.category} className="group bg-white border border-gray-200 rounded-xl shadow-sm">
                        <summary className="flex items-center justify-between cursor-pointer px-5 py-4">
                            <div className="flex items-center gap-3">
                                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${i % 3 === 0 ? 'bg-green-50 text-brand-green' : i % 3 === 1 ? 'bg-blue-50 text-brand-blue' : 'bg-yellow-50 text-yellow-600'}`}>
                                    <CheckCircle className="w-4 h-4" />
                                </span>
                                <span className="text-lg font-semibold text-gray-900">{category.category}</span>
                            </div>
                            <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="px-5 pb-5">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-brand-green mr-2 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </details>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
                src="/images/vitalpbx/vitalpbx-4-desktop-gui-final.png"
                alt="VitalPBX desktop GUI – unified communications platform | IPT One"
                title="VitalPBX desktop application interface"
                loading="lazy"
                className="w-full max-w-5xl mx-auto h-auto object-contain"
            />
        </div>
      </section>

      <section id="downloads" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <img
                    src="/images/VitalPBX.png"
                    alt="VitalPBX logo – Cloud PBX South Africa | IPT One"
                    title="VitalPBX Cloud PBX"
                    loading="lazy"
                    className="mx-auto h-12 md:h-16 w-auto object-contain mb-4"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Get VitalPBX Communicator</h2>
                <p className="text-gray-600">Install the softphone on your preferred device and start calling anywhere.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="https://www.vitalpbx.com/vitalpbx-communicator/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-brand-blue">
                        <Monitor className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Desktop</h3>
                    <p className="text-sm text-gray-500 mb-2">Windows, macOS, Linux</p>
                    <span className="text-sm font-bold text-brand-blue">Download</span>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.vitalpbx.communicator" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4 text-brand-green">
                        <Smartphone className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Android</h3>
                    <p className="text-sm text-gray-500 mb-2">Phone & Tablet</p>
                    <span className="text-sm font-bold text-brand-blue">Google Play</span>
                </a>
                <a href="https://apps.apple.com/us/app/vitalpbx-communicator/id1543666249" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
                        <Smartphone className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-900">iOS</h3>
                    <p className="text-sm text-gray-500 mb-2">iPhone & iPad</p>
                    <span className="text-sm font-bold text-brand-blue">App Store</span>
                </a>
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div id="vitalpbx-extension" className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">VitalPBX Extension</h3>
                    <p className="text-gray-500 mb-8">Extension is per user per seat – R79 per month</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-5xl font-extrabold text-gray-900">R79</span>
                        <span className="text-lg text-gray-500 font-normal ml-2">/user /month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-brand-green mr-3" />
                            Full PBX feature set
                        </li>
                        <li className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-brand-green mr-3" />
                            Mobile &amp; Desktop Apps Included
                        </li>
                        <li className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-brand-green mr-3" />
                            VitXi softphone access
                        </li>
                    </ul>
                    <Button onClick={() => setIsVitalOrderOpen(true)} size="lg" className="w-full font-bold shadow-lg shadow-brand-blue/20">
                        Sign Up Now
                    </Button>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <div className="space-y-4">
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-brand-green" />
                                    <span className="font-semibold text-gray-900">Pricing</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                R79 per user per month. Billed monthly. Add minute bundles as needed.
                            </div>
                        </details>
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-brand-blue" />
                                    <span className="font-semibold text-gray-900">What’s Included</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                Full PBX features, VitXi softphone, mobile and desktop apps, and a user portal.
                            </div>
                        </details>
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-yellow-500" />
                                    <span className="font-semibold text-gray-900">Add‑Ons</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                Optional outbound minute bundles from 250 to 10&nbsp;000 minutes per month.
                            </div>
                        </details>
                        <details className="group border border-gray-200 rounded-xl bg-white">
                            <summary className="flex items-center justify-between cursor-pointer p-4">
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-purple-600" />
                                    <span className="font-semibold text-gray-900">Setup & Provisioning</span>
                                </div>
                                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600">
                                We provision your tenant and send credentials. Plug in and start calling.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
      </section>
      

      <section id="pricing" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
      
      {isVitalOrderOpen && (
        <Modal title="Sign Up for VitalPBX" onClose={() => setIsVitalOrderOpen(false)} maxWidth="max-w-5xl">
            <VitalPBXSignUpForm plan={{ name: 'VitalPBX Extension', price: 79 }} />
        </Modal>
      )}
    </>
  );
};

export default VitalPBXPage;
