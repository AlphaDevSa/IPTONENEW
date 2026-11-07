
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Server, Shield, Zap, Globe, Phone, Lock, TrendingUp } from './components/icons';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import Modal from './Modal';
import SIPTrunksSignUpForm from './SIPTrunksSignUpForm';
import CtaSection from './components/CtaSection';
import { useNavigation } from './NavigationContext';

const SIPTrunksPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: number} | null>(null);
  const navigate = useNavigation();

  const handleSignUpClick = (name: string, price: number) => {
      setSelectedPlan({ name, price });
      setIsModalOpen(true);
  };

  const technicalFeatures = [
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "Instant Scalability",
        description: "Scale channels up or down instantly based on demand. No physical line installation required."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Fraud Protection",
        description: "Advanced monitoring systems to detect and block fraudulent call activity in real-time."
    },
    {
        icon: <Server className="w-6 h-6 text-brand-blue" />,
        title: "Geo-Redundancy",
        description: "Our voice network is distributed across multiple data centers to ensure maximum uptime."
    },
    {
        icon: <Lock className="w-6 h-6 text-brand-blue" />,
        title: "Secure Protocols",
        description: "Full support for TLS (Signaling) and SRTP (Media) encryption to secure your conversations."
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

  const brandLogos: { name: string; src: string }[] = [
      { name: "VitalPBX",        src: "/images/VitalPBX.png" },
      { name: "Vodia",           src: "/images/Vodia.png" },
      { name: "Bicom Systems",   src: "/images/bicom.png" },
      { name: "3CX",             src: "/images/3cx.png" },
      { name: "Yeastar",         src: "/images/yeastar.png" },
      { name: "Epygi",           src: "/images/Epygi_Logo.png" },
      { name: "Enreach",         src: "/images/Enreach_Logo.png" },
  ];

  return (
    <>
      <Hero
        title={
            <>
                Business <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">SIP Trunking.</span>
            </>
        }
        subtitle="Connect your on-premise PBX to the world. Replace expensive ISDN and analogue lines with a carrier-grade voice connection that cuts costs, not quality."
        badge={
            <>
                <Server className="w-4 h-4" />
                <span>Carrier-Grade Voice</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
                <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-brand-green font-mono uppercase">Trunk Status: Active</span>
                    </div>
                    
                    <div className="space-y-6">
                        {/* Connection Diagram */}
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-2 mx-auto">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs text-gray-400">Your PBX</span>
                            </div>
                            
                            <div className="flex-grow mx-4 relative">
                                <div className="h-1 bg-gray-600 rounded-full w-full"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-2">
                                    <span className="text-[10px] text-brand-green font-bold">SIP / TLS</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-2 mx-auto">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs text-gray-400">IPT One</span>
                            </div>
                        </div>

                        <div className="bg-gray-700/50 p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-300">Concurrent Calls</span>
                                <span className="text-sm font-bold text-white">12 / 30</span>
                            </div>
                            <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                                <div className="bg-brand-green w-[40%] h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 z-30 bg-gray-900 p-4 rounded-xl border border-gray-700 shadow-xl flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-brand-blue" />
                    <div>
                        <p className="text-xs text-gray-400">Security</p>
                        <p className="text-sm font-bold text-white">Fraud Protection Active</p>
                    </div>
                </div>
            </div>
        }
      >
        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
            View Pricing
        </Button>
        <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/contact')} 
            className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
        >
            Speak to an Expert
        </Button>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                        <Server className="w-4 h-4 mr-2" />
                        Modern Voice Connectivity
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Keep Your Hardware, <br/>Upgrade Your Connection.</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        SIP Trunking is the modern standard for connecting business phone systems to the public telephone network. It allows you to use your existing IP-PBX hardware while benefiting from the flexibility and cost-efficiency of the cloud.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you are using 3CX, Asterisk, Avaya, or Mitel, our SIP trunks are interoperable with all major IP PBX brands. We provide the dial-tone, you keep control of your system.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="font-bold">
                            View Pricing
                        </Button>
                        <Button onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg">
                            Technical Specs
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl text-white border border-gray-700">
                        <div className="flex items-center mb-8 border-b border-gray-700 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-auto text-xs text-gray-400 font-mono">status: connected</span>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Protocol</span>
                                <span className="text-brand-green">SIP / UDP / TCP / TLS</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Codecs</span>
                                <span className="text-brand-green">G.711a/u, G.729, G.722 (HD)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">DTMF</span>
                                <span className="text-brand-green">RFC2833 / Inband</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Auth Type</span>
                                <span className="text-brand-green">IP-Based / Digest Auth</span>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-center text-gray-400 text-xs uppercase tracking-widest">Network Status</p>
                                <div className="flex justify-center items-center mt-2">
                                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                                    <span className="font-bold text-lg">Operational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineered for Reliability</h2>
                <p className="text-lg text-gray-600">Built on a Tier-1 redundant network to ensure your business never misses a call.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technicalFeatures.map((feature, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 pt-8">
                            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                <p className="text-lg text-gray-600">No hidden fees. Pay for the channel capacity you need.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Monthly Plan */}
                <Card className="flex flex-col border-gray-200 shadow-lg hover:border-brand-blue transition-colors">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-2xl">Monthly Flex</CardTitle>
                        <p className="text-gray-500 mt-2">Maximum flexibility, cancel anytime.</p>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                        <div className="my-6">
                            <span className="text-5xl font-extrabold text-gray-900">R99</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-3 text-left max-w-xs mx-auto text-gray-600 mb-8">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-green mr-3"/> Month-to-month contract</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-green mr-3"/> Instant Scalability</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-green mr-3"/> Free Porting*</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => handleSignUpClick('Monthly Plan', 99)} variant="outline" className="w-full h-12 text-lg">
                            Choose Monthly
                        </Button>
                    </CardFooter>
                </Card>

                {/* Yearly Plan */}
                <Card className="flex flex-col border-brand-blue ring-1 ring-brand-blue shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-brand-green text-xs font-bold px-3 py-1 text-gray-900 rounded-bl-lg">
                        BEST VALUE
                    </div>
                    <CardHeader className="text-center pb-2 bg-blue-50/50">
                        <CardTitle className="text-2xl text-brand-blue">Yearly Saver</CardTitle>
                        <p className="text-gray-500 mt-2">Pay for 10 months, get 12.</p>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                        <div className="my-6">
                            <span className="text-5xl font-extrabold text-gray-900">R990</span>
                            <span className="text-gray-500">/yr</span>
                        </div>
                        <ul className="space-y-3 text-left max-w-xs mx-auto text-gray-600 mb-8">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-blue mr-3"/> <strong>2 Months Free</strong></li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-blue mr-3"/> Priority Support</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-blue mr-3"/> Free Porting*</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => handleSignUpClick('Yearly Plan', 990)} className="w-full h-12 text-lg font-bold">
                            Choose Yearly
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </section>

      {/* Minute Bundles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Add a Minute Bundle</h2>
                <p className="text-lg text-gray-600">Predictable monthly costs with our blended outbound voice bundles.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {minuteBundles.map((bundle) => (
                    <div key={bundle.name} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300 text-center group">
                        <h4 className="font-semibold text-gray-700 group-hover:text-brand-blue mb-2">{bundle.name}</h4>
                        <div className="text-2xl font-bold text-gray-900">
                            {bundle.price}<span className="text-sm font-normal text-gray-500">/{bundle.per}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
                *Bundles include calls to all local SA networks (Mobile & Landline). International calls billed separately.
            </p>
        </div>
      </section>

      {/* Compatibility Logos (Reimagined) */}
      <section id="compatibility" className="py-20 bg-white border-top border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Interoperability</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our SIP trunks are rigorously tested and certified with the world's leading IP-PBX platforms and Unified Communications solutions.
              </p>
              <style>
                  {`
                  @keyframes logo-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  `}
              </style>
              <div className="overflow-hidden">
                  <div className="flex items-center gap-12 whitespace-nowrap" style={{ animation: 'logo-scroll 30s linear infinite' }}>
                      {[...brandLogos, ...brandLogos].map(({ name, src }, idx) => (
                          <img
                              key={name + '-' + idx}
                              src={src}
                              alt={`${name} compatibility – IPT One SIP Trunks`}
                              title={`${name} PBX compatibility`}
                              loading="lazy"
                              className="h-10 sm:h-12 w-auto object-contain"
                          />
                      ))}
                  </div>
              </div>
          </div>
      </section>
      
      <CtaSection />

      {isModalOpen && selectedPlan && (
          <Modal title={`Sign Up for SIP Trunks: ${selectedPlan.name}`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
             <SIPTrunksSignUpForm plan={selectedPlan} />
          </Modal>
      )}
    </>
  );
};

export default SIPTrunksPage;
