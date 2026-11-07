
import React from 'react';
import Hero from './components/Hero';
import { 
  Phone, 
  Monitor, 
  Smartphone, 
  Server, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Activity,
  MessageSquare
} from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const VoIPSolutionsPage: React.FC = () => {
  const navigate = useNavigation();

  // Features with descriptions
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-brand-blue" />,
      title: "HD Voice Clarity",
      description: "Experience crystal-clear audio with high-definition voice codecs. Say goodbye to crackly lines and dropped calls."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-blue" />,
      title: "Work From Anywhere",
      description: "Your office extension travels with you. Make and receive business calls from your mobile or laptop, anywhere in the world."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-blue" />,
      title: "Significant Cost Savings",
      description: "Reduce your monthly phone bill by up to 50% compared to traditional copper landlines. Free inter-branch calling."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      title: "Enterprise Security",
      description: "Built-in encryption (TLS/SRTP) ensures your conversations remain private and secure from eavesdropping."
    },
    {
      icon: <Server className="w-8 h-8 text-brand-blue" />,
      title: "Scalability on Demand",
      description: "Add or remove extensions instantly via our portal. Pay only for what you use, when you use it."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-blue" />,
      title: "Unified Communications",
      description: "Integrate voicemail, email, instant messaging, and video conferencing into a single, cohesive platform."
    }
  ];

  // Device Ecosystem
  const devices = [
    { name: "IP Desk Phones", icon: <Phone className="w-12 h-12 mb-4 text-gray-700" />, desc: "Compatible with Yealink, Fanvil, Snom & more." },
    { name: "Desktop Softphone", icon: <Monitor className="w-12 h-12 mb-4 text-gray-700" />, desc: "Native apps for Windows, Mac, and Linux." },
    { name: "Mobile App", icon: <Smartphone className="w-12 h-12 mb-4 text-gray-700" />, desc: "Stay connected on iOS and Android." }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Enterprise <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">VoIP Solutions.</span>
            </>
        }
        subtitle="Future-proof your communication infrastructure. Switch to a reliable, cloud-based voice platform that grows with your business and lowers your bottom line."
        badge={
            <>
                <Phone className="w-4 h-4" />
                <span>Next-Gen Telephony</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
                <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <Phone className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Incoming Call</p>
                                <p className="text-xs text-gray-400">012 004 8444</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600"><Phone className="w-4 h-4 text-white rotate-[135deg]" /></div>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 animate-pulse"><Phone className="w-4 h-4 text-white" /></div>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="bg-gray-700/50 p-3 rounded-xl flex items-center justify-between">
                            <div className="flex items-center">
                                <Activity className="w-4 h-4 text-brand-blue mr-3" />
                                <span className="text-sm text-gray-300">Call Quality</span>
                            </div>
                            <span className="text-xs font-bold text-green-400">HD Voice</span>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-xl flex items-center justify-between">
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 text-brand-blue mr-3" />
                                <span className="text-sm text-gray-300">Encryption</span>
                            </div>
                            <span className="text-xs font-bold text-green-400">TLS / SRTP</span>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Active Extensions</p>
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
                            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-white">SM</div>
                            <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-white">AK</div>
                            <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center text-xs text-white">+5</div>
                        </div>
                    </div>
                </div>
            </div>
        }
      >
        <Button size="lg" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
            Get Connected
        </Button>
        <Button 
            size="lg" 
            variant="outline" 
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })} 
            className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
        >
            Why Switch?
        </Button>
      </Hero>

      {/* Intro & Form Section */}
      <section id="inquiry" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
              Next-Gen Telephony
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              More than just a phone line. <br/> It's a productivity engine.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Traditional copper phone lines are becoming obsolete. They are expensive to maintain, inflexible, and lack the features modern businesses need to compete.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              IPT One VoIP (Voice over Internet Protocol) utilizes your existing internet connection to deliver high-quality voice calls. But we don't just stop at dial-tone. We provide a fully managed ecosystem that integrates with your CRM, allows for seamless remote work, and provides deep insights into your business communications.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-800">Keep your existing geographic numbers (012, 011, 021...)</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-800">Quick and seamless installation process</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-800">99.9% Network Uptime Guarantee</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-green/20 rounded-full blur-xl -z-10"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Custom Quote</h3>
            <p className="text-gray-500 mb-6 text-sm">Tell us about your requirements and we'll design a solution for you.</p>
            <ServiceInquiryForm serviceName="VoIP Solutions" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Modern Businesses Choose VoIP</h2>
                <p className="text-lg text-gray-600">Upgrade to a system that offers more features for less money.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Legacy Lines vs. IPT One VoIP</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="p-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">Feature</th>
                            <th className="p-6 text-sm font-bold text-gray-700 uppercase tracking-wider w-1/3">Traditional Landline</th>
                            <th className="p-6 text-sm font-bold text-brand-blue uppercase tracking-wider w-1/3 bg-blue-50">IPT One VoIP</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="p-6 font-medium text-gray-900">Setup Cost</td>
                            <td className="p-6 text-gray-600">High (Cabling & Hardware)</td>
                            <td className="p-6 text-gray-900 bg-blue-50/30 font-semibold">Low (Minimal Hardware)</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-medium text-gray-900">Call Rates</td>
                            <td className="p-6 text-gray-600">Expensive per minute</td>
                            <td className="p-6 text-gray-900 bg-blue-50/30 font-semibold">Up to 50% Cheaper</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-medium text-gray-900">Flexibility</td>
                            <td className="p-6 text-gray-600">Tied to physical location</td>
                            <td className="p-6 text-gray-900 bg-blue-50/30 font-semibold">Work from Anywhere</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-medium text-gray-900">Scalability</td>
                            <td className="p-6 text-gray-600">Requires new lines installed</td>
                            <td className="p-6 text-gray-900 bg-blue-50/30 font-semibold">Instant (Software based)</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-medium text-gray-900">Maintenance</td>
                            <td className="p-6 text-gray-600">On-site technician required</td>
                            <td className="p-6 text-gray-900 bg-blue-50/30 font-semibold">Remote Management</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Communicate Your Way</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                Our platform is device agnostic. Whether you prefer a traditional desk phone, a headset connected to your PC, or a mobile app on the go, we have you covered.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
                {devices.map((device, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 text-center transform transition-all hover:scale-105">
                        <div className="flex justify-center">
                            {device.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{device.name}</h3>
                        <p className="text-gray-600">{device.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default VoIPSolutionsPage;
