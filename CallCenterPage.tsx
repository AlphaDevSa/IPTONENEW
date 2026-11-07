
import React from 'react';
import Hero from './components/Hero';
import { 
  Headset, 
  Monitor, 
  TrendingUp, 
  Users, 
  GitBranch, 
  Database, 
  Bot, 
  CheckCircle,
  Zap,
  Phone,
  MessageSquare,
  Mail,
  Activity,
  Clock
} from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const CallCenterPage: React.FC = () => {
  const navigate = useNavigation();

  const features = [
    {
        icon: <GitBranch className="w-8 h-8 text-white" />,
        title: "Smart Routing",
        description: "Intelligent skills-based routing ensures calls reach the best-qualified agent, reducing transfer times and improving first-call resolution.",
        color: "bg-blue-500"
    },
    {
        icon: <Monitor className="w-8 h-8 text-white" />,
        title: "Live Wallboards",
        description: "Monitor agent status, queue lengths, and wait times in real-time. Make instant adjustments to staffing and flow based on live data.",
        color: "bg-green-500"
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        title: "Deep Analytics",
        description: "Comprehensive historical reporting allows you to analyze trends, peak times, and agent performance to optimize operations.",
        color: "bg-purple-500"
    },
    {
        icon: <Database className="w-8 h-8 text-white" />,
        title: "Compliance Recording",
        description: "Secure, searchable call recordings for quality assurance, training, and regulatory compliance. Storage options to suit your needs.",
        color: "bg-orange-500"
    },
    {
        icon: <Bot className="w-8 h-8 text-white" />,
        title: "IVR & Auto-Attendant",
        description: "Professional multi-level IVR menus guide callers to the right department automatically, freeing up agents for complex queries.",
        color: "bg-indigo-500"
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "CRM Integration",
        description: "Pop customer details on screen before the agent answers. Seamlessly integrate with Zoho, Salesforce, Zendesk and more.",
        color: "bg-red-500"
    }
  ];

  const minuteBundles = [
    { name: "250 Minutes", price: "R99", per: "pm" },
    { name: "500 Minutes", price: "R199", per: "pm" },
    { name: "750 Minutes", price: "R289", per: "pm" },
    { name: "1000 Minutes", price: "R395", per: "pm" },
    { name: "2000 Minutes", price: "R790", per: "pm" },
    { name: "2500 Minutes", price: "R980", per: "pm" },
    { name: "5000 Minutes", price: "R1750", per: "pm" },
    { name: "10 000 Minutes", price: "R2950", per: "pm" },
  ];

  return (
    <>
      <Hero
        title={
            <>
                Cloud Call Center <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Solutions.</span>
            </>
        }
        subtitle="Empower your agents with a unified Omnichannel Cloud Contact Center. Manage Voice, WhatsApp, Email, and Social interactions from a single, intelligent dashboard."
        badge={
            <>
                <Headset className="w-4 h-4" />
                <span>Omnichannel CX Platform</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Dashboard Interface */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Agent Dashboard</p>
                                <p className="text-[10px] text-green-400 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                                    Online • Ready
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-800 px-2 py-1 rounded text-[10px] text-gray-400 border border-gray-700">
                            Queue: 0
                        </div>
                    </div>

                    {/* Active Interaction Streams */}
                    <div className="space-y-3">
                        {/* Voice Call */}
                        <div className="bg-gray-800 p-3 rounded-xl border-l-4 border-brand-green flex items-center justify-between relative overflow-hidden">
                            <div className="flex items-center space-x-3 relative z-10">
                                <div className="bg-brand-green/20 p-2 rounded-lg text-brand-green">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">Incoming Call</p>
                                    <p className="text-[10px] text-gray-400">Sales Queue • 00:14</p>
                                </div>
                            </div>
                            <div className="flex space-x-1 items-end h-4">
                                <div className="w-1 bg-brand-green h-2 animate-[bounce_1s_infinite]"></div>
                                <div className="w-1 bg-brand-green h-4 animate-[bounce_1.2s_infinite]"></div>
                                <div className="w-1 bg-brand-green h-3 animate-[bounce_0.8s_infinite]"></div>
                            </div>
                        </div>

                        {/* WhatsApp Message */}
                        <div className="bg-gray-800 p-3 rounded-xl border-l-4 border-[#25D366] flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#25D366]/20 p-2 rounded-lg text-[#25D366]">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">WhatsApp Inquiry</p>
                                    <p className="text-[10px] text-gray-400">"Do you have stock..."</p>
                                </div>
                            </div>
                            <span className="bg-[#25D366] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                        </div>

                        {/* Email Ticket */}
                        <div className="bg-gray-800 p-3 rounded-xl border-l-4 border-blue-500 flex items-center justify-between opacity-75">
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">Support Ticket #902</p>
                                    <p className="text-[10px] text-gray-400">Pending Response</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase font-bold">Today's CSAT</p>
                            <div className="flex items-center mt-1">
                                <Activity className="w-3 h-3 text-yellow-400 mr-1" />
                                <span className="text-white font-bold text-sm">4.9/5</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-500 uppercase font-bold">Avg Handle Time</p>
                            <div className="flex items-center justify-end mt-1">
                                <Clock className="w-3 h-3 text-blue-400 mr-1" />
                                <span className="text-white font-bold text-sm">2m 30s</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <TrendingUp className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Efficiency</p>
                        <p className="text-xs font-bold text-white">+24% Boost</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">AI Assist</p>
                        <p className="text-xs font-bold text-white">Sentiment Analysis</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Request Demo
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

      <section id="inquiry" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">More Than Just a Call Center</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In today's fast-paced digital world, customers expect instant, personalized support. Our Cloud Contact Center solution provides a unified platform for inbound support, outbound sales, and blended campaigns.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Move beyond simple telephony. Give your supervisors total visibility and your agents the tools they need to succeed—whether they are in the office or working remotely.
                </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Zap className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Rapid Deployment</h4>
                        <p className="text-sm text-gray-500">Setup agents in minutes, not days.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Headset className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Agent Efficiency</h4>
                        <p className="text-sm text-gray-500">Tools to reduce handle time.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <TrendingUp className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Scalability</h4>
                        <p className="text-sm text-gray-500">Scale from 5 to 500+ agents easily.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Phone className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Crystal Clear Voice</h4>
                        <p className="text-sm text-gray-500">Premium Tier-1 voice routes.</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <img
                    src="/images/bicom-systems-screenshot-1.png"
                    alt="Call center dashboard for omnichannel contact center"
                    title="Omnichannel Call Center Dashboard"
                    loading="lazy"
                    className="w-full rounded-2xl border border-gray-200 shadow-md"
                />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
            <ServiceInquiryForm serviceName="Call Center Solutions" />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Features</h2>
                <p className="text-lg text-gray-600">Built to handle high volumes and complex workflows, our platform includes everything modern contact centers need.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gray-100">
                            <div className={`h-full w-1/3 ${feature.color}`}></div>
                        </div>
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors"></div>
                        <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed relative z-10">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 bg-brand-blue text-white overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-green rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Integrate with your favorite tools</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                  Connect your contact center directly to your CRM. Increase productivity by enabling click-to-dial and automatic call logging directly within your business applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-80">
                  {['Salesforce', 'Zoho', 'Zendesk', 'HubSpot', 'Microsoft Dynamics', 'Freshdesk', 'WhatsApp Business', 'Microsoft Teams'].map((crm) => (
                      <span key={crm} className="px-6 py-3 bg-white/10 rounded-full text-white font-semibold backdrop-blur-sm border border-white/20">
                          {crm}
                      </span>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Outbound Minute Bundles</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Control your costs with our predictable minute bundles. <br/>
                    <span className="text-brand-blue font-semibold">Unbeatable rates from R0.40 per minute</span> (blended).
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {minuteBundles.map((bundle) => (
                    <div key={bundle.name} className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-brand-blue hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-brand-blue transition-colors rounded-t-2xl"></div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-brand-blue transition-colors">{bundle.name}</h3>
                        <div className="flex justify-center items-baseline mb-1">
                            <span className="text-3xl font-bold text-gray-900">{bundle.price}</span>
                            <span className="text-gray-500 ml-1 text-sm">/{bundle.per}</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-500">
                                Blended Rate
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-6 text-center max-w-3xl mx-auto border border-gray-200">
               <p className="text-gray-700">
                   <strong>Fair Usage Policy:</strong> Bundles include Landline to Landline and Landline to Mobile calling within South Africa. International calls are billed separately. 
                   <br/>Need a custom volume? <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-brand-blue font-semibold hover:underline">Contact us</a> for wholesale pricing.
               </p>
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default CallCenterPage;
