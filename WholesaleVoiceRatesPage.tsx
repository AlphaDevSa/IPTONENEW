
import React from 'react';
import Hero from './components/Hero';
import { Phone, TrendingUp, Shield, CheckCircle, Server, Globe, Zap, Lock, Activity, ArrowRight, DollarSign, Clock } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const WholesaleVoiceRatesPage: React.FC = () => {
  const navigate = useNavigation();

  const stats = [
      { label: "Answer Seizure Ratio (ASR)", value: "60%+" },
      { label: "Average Call Duration (ACD)", value: "High" },
      { label: "Billing Pulse", value: "1/1 (Per Second)" },
      { label: "Uptime SLA", value: "99.99%" }
  ];

  const routeTypes = [
      {
          title: "Premium CLI",
          description: "Guaranteed Caller Line Identification. The highest quality routes for business, call centers, and banks where identity is critical.",
          features: ["100% CLI Delivery", "Direct Interconnects", "Highest ASR", "Roaming Support"],
          icon: <Shield className="w-8 h-8 text-brand-green" />
      },
      {
          title: "Standard Routes",
          description: "Cost-effective routing for bulk volume where CLI is not mandatory. Ideal for marketing blasts and non-sensitive traffic.",
          features: ["Best Effort CLI", "Aggressive Pricing", "Tier-1 Carriers", "High Capacity"],
          icon: <TrendingUp className="w-8 h-8 text-brand-blue" />
      }
  ];

  const tiers = [
    {
        name: "Standard",
        volume: "< 50k Minutes",
        desc: "Competitive entry rates for startups.",
        color: "border-gray-200"
    },
    {
        name: "Silver",
        volume: "50k - 250k Minutes",
        desc: "Discounted rates for growing ISPs.",
        color: "border-gray-300"
    },
    {
        name: "Gold",
        volume: "250k - 1M Minutes",
        desc: "Aggressive pricing for established carriers.",
        color: "border-yellow-400"
    },
    {
        name: "Platinum",
        volume: "1M+ Minutes",
        desc: "Market-leading floor rates.",
        color: "border-brand-blue"
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Wholesale Voice <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Termination Rates</span>
            </>
        }
        subtitle="Wholesale Voice Rates. Premium CLI routes. Aggressive volume-based pricing. The engine for Carriers, ISPs, and Call Centers."
        badge={
            <>
                <Activity className="w-4 h-4" />
                <span>Live Route Monitoring</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>
                
                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Server className="w-5 h-5 text-brand-green" />
                            <span className="text-sm font-mono text-gray-300">ROUTE_OPTIMIZER</span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500">ACTIVE</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Avg. ASR</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                62% <TrendingUp className="w-4 h-4 text-brand-green ml-1" />
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Avg. PDD</p>
                            <p className="text-white font-bold text-xl flex items-center">
                                ~800ms
                            </p>
                        </div>
                    </div>

                    {/* Route List */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-gray-800 rounded border border-gray-700">
                            <div className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-2"></div>
                                <span className="text-xs text-gray-300">Premium CLI</span>
                            </div>
                            <span className="text-xs font-mono text-brand-green">100% Delivery</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-800 rounded border border-gray-700">
                            <div className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                                <span className="text-xs text-gray-300">Standard</span>
                            </div>
                            <span className="text-xs font-mono text-yellow-500">Vol Optimized</span>
                        </div>
                    </div>

                    {/* Graph Simulation */}
                    <div className="mt-6 pt-4 border-t border-gray-800">
                        <p className="text-[10px] text-gray-500 mb-2">Traffic Volume (24h)</p>
                        <div className="flex items-end space-x-1 h-12">
                            {[40, 60, 45, 70, 85, 65, 55, 75, 90, 60, 50, 80].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-brand-blue/40 rounded-t-sm hover:bg-brand-blue/60 transition-colors"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-slow">
                    <DollarSign className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Rates</p>
                        <p className="text-xs font-bold text-white">Aggressive</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Billing</p>
                        <p className="text-xs font-bold text-white">1/1 Per Second</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Request Rate Sheet
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

      {/* Stats Strip */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
                  {stats.map((stat, idx) => (
                      <div key={idx}>
                          <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                          <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Route Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Quality First</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Choose Your Routing Class</h2>
                <p className="text-lg text-gray-600">
                    We offer distinct routing profiles to match your traffic mix and budget requirements.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {routeTypes.map((route, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-brand-blue transition-colors">
                        <div className="flex items-center justify-between mb-6">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                {route.icon}
                            </div>
                            {index === 0 && <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{route.title}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">{route.description}</p>
                        <ul className="space-y-3">
                            {route.features.map((feat, i) => (
                                <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Tiers & Volume */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Volume-Based Savings</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        In wholesale, volume is king. Our dynamic billing engine automatically adjusts your rate deck based on your committed monthly volume.
                    </p>
                    <p className="text-gray-600 mb-8">
                        We bill purely on a <strong>per-second (1/1)</strong> basis from the very first second. No connection fees, no minimum call durations. You pay only for exactly what you use.
                    </p>
                    
                    <div className="space-y-4">
                        {tiers.map((tier, idx) => (
                            <div key={idx} className={`flex items-center p-4 bg-white rounded-xl border-l-4 shadow-sm ${tier.color}`}>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-gray-900">{tier.name} Tier</h4>
                                    <p className="text-sm text-gray-500">{tier.volume}</p>
                                </div>
                                <div className="text-right text-sm font-medium text-brand-blue">
                                    {tier.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-brand-blue rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Request Rate Sheet</h3>
                        <p className="text-blue-100 mb-8">
                            Rates fluctuate based on interconnect agreements. Fill out the form to receive our latest A-Z rate deck instantly.
                        </p>
                        <div className="bg-white rounded-xl p-6 shadow-inner">
                            <ServiceInquiryForm serviceName="Wholesale Rate Sheet Request" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                  <p className="text-gray-600">Built for seamless interoperability with any softswitch or PBX.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <Server className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Protocols</h4>
                      <p className="text-sm text-gray-600">SIP (UDP/TCP/TLS)</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <Activity className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Codecs</h4>
                      <p className="text-sm text-gray-600">G.711, G.729, G.722</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Auth Methods</h4>
                      <p className="text-sm text-gray-600">IP-Based / Digest</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <Globe className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Media</h4>
                      <p className="text-sm text-gray-600">Direct Media / Proxy</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-bold mb-6">Need Interconnect Testing?</h2>
              <p className="text-gray-400 text-lg mb-8">
                  We offer a free $5 test credit for carriers looking to verify our route quality and PDD (Post Dial Delay).
              </p>
              <Button onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-green text-gray-900 hover:bg-white font-bold px-8">
                  Request Interconnect
              </Button>
          </div>
      </section>

      <CtaSection />
    </>
  );
};

export default WholesaleVoiceRatesPage;
