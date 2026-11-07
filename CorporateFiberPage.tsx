
import React from 'react';
import Hero from './components/Hero';
import { Server, Shield, Activity, Zap, CheckCircle, Lock, Globe, Clock, Building, ArrowRight, Users } from './components/icons';
import CoverageCheckForm from './CoverageCheckForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const CorporateFiberPage: React.FC = () => {
  const navigate = useNavigation();

  const features = [
    {
        icon: <Activity className="w-6 h-6 text-brand-blue" />,
        title: "1:1 Contention Ratio",
        description: "Your bandwidth is exclusively yours. Unlike broadband which is shared with neighbors, dedicated fiber guarantees your full speed 24/7."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Guaranteed SLAs",
        description: "We back our service with strict Service Level Agreements on uptime (99.9%), packet loss, and latency."
    },
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "Symmetrical Speeds",
        description: "Upload as fast as you download. Critical for cloud backups, large file transfers, and hosting services."
    },
    {
        icon: <Clock className="w-6 h-6 text-brand-blue" />,
        title: "Proactive Monitoring",
        description: "Our NOC monitors your link 24/7. We often start fixing issues before you even realize there is a problem."
    }
  ];

  const industries = [
      { name: "Financial Services", desc: "Low latency trading and secure transactions." },
      { name: "Call Centers", desc: "Crystal clear VoIP with zero jitter or packet loss." },
      { name: "Cloud Heavy Businesses", desc: "Fast access to Azure, AWS, and Google Cloud." },
      { name: "Large Campuses", desc: "High capacity backhaul for hundreds of users." }
  ];

  return (
    <>
      <Hero
        title={
            <>
                The Ultimate Connection <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">for Enterprise.</span>
            </>
        }
        subtitle="Dedicated 1:1 Fiber Internet for organizations where downtime is not an option. Uncontended bandwidth, industry-leading SLAs, and direct access to our Network Operations Center."
        badge={
            <>
                <Server className="w-4 h-4" />
                <span>Mission Critical</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-purple-900/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Server className="w-5 h-5 text-purple-500" />
                            <div>
                                <h3 className="text-white font-bold text-sm">Primary Link</h3>
                                <p className="text-gray-500 text-[10px] font-mono">PTA_CORE_01</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-purple-900/20 px-2 py-1 rounded text-purple-400 text-xs font-bold border border-purple-900/30">
                            <Activity className="w-3 h-3" />
                            <span>DEDICATED</span>
                        </div>
                    </div>

                    {/* Real-time Graph Simulation */}
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Throughput (1:1)</span>
                            <span className="text-white font-bold text-lg">1000 Mbps</span>
                        </div>
                        <div className="h-24 flex items-end space-x-1">
                            {/* Flat line at top to represent constant dedicated speed */}
                            {[95, 98, 96, 99, 97, 98, 99, 100, 98, 97, 99, 98, 96, 99, 100].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className="w-full bg-purple-500/80 rounded-sm"></div>
                            ))}
                        </div>
                        <div className="w-full h-px bg-gray-800 mt-1"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Uptime SLA</p>
                            <div className="flex items-center text-white font-bold">
                                <Shield className="w-4 h-4 text-green-500 mr-2" />
                                99.99%
                            </div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Contention</p>
                            <div className="flex items-center text-white font-bold">
                                <Users className="w-4 h-4 text-blue-500 mr-2" />
                                1:1
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 z-30 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Latency</p>
                        <p className="text-xs font-bold text-gray-900">&lt; 2ms</p>
                    </div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-30 bg-purple-600 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Lock className="w-5 h-5 text-white" />
                    <div>
                        <p className="text-[10px] text-purple-200 uppercase font-bold">Secure</p>
                        <p className="text-xs font-bold">Private Route</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-purple-900/20 bg-purple-600 hover:bg-purple-700 text-white border-transparent">
                Get Custom Quote
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => navigate('/contact')}
            >
                Contact Engineers
            </Button>
        </div>
      </Hero>

      {/* Intro Stats */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
                  <div className="p-4">
                      <p className="text-4xl font-extrabold text-brand-green">99.9%</p>
                      <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">Uptime SLA</p>
                  </div>
                  <div className="p-4">
                      <p className="text-4xl font-extrabold text-brand-green">1:1</p>
                      <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">Contention Ratio</p>
                  </div>
                  <div className="p-4">
                      <p className="text-4xl font-extrabold text-brand-green">4h</p>
                      <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">Mean Time to Repair</p>
                  </div>
                  <div className="p-4">
                      <p className="text-4xl font-extrabold text-brand-green">24/7</p>
                      <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">NOC Support</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Main Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                        <Server className="w-4 h-4 mr-2" />
                        Enterprise Grade
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        When "Best Effort" isn't good enough.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Standard business broadband (FTTB) shares capacity with other users in your area. During peak times, your speed fluctuates. 
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        <strong>Corporate Dedicated Fiber</strong> provides a direct, uncontended pipe to the internet backbone. If you pay for 100Mbps, you get 100Mbps, all day, every day. It is designed for organizations where internet connectivity is the lifeblood of their operation.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Included with Corporate Fiber:</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-brand-green mr-2" />
                                Static IP Range (/29)
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-brand-green mr-2" />
                                Managed Router
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-brand-green mr-2" />
                                Usage Reporting
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-brand-green mr-2" />
                                Priority Support Line
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Dedicated vs Broadband</h3>
                        
                        <div className="space-y-6">
                            {/* Feature Row */}
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-gray-500 text-sm font-medium w-1/3">Reliability</span>
                                <div className="text-center w-1/3">
                                    <span className="block font-bold text-brand-blue">High</span>
                                    <span className="text-xs text-gray-400">Broadband</span>
                                </div>
                                <div className="text-center w-1/3 border-l border-gray-100 pl-4">
                                    <span className="block font-bold text-brand-green">Critical</span>
                                    <span className="text-xs text-gray-400">Dedicated</span>
                                </div>
                            </div>
                            
                            {/* Feature Row */}
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-gray-500 text-sm font-medium w-1/3">Speed Guarantee</span>
                                <div className="text-center w-1/3">
                                    <span className="block font-bold text-gray-600">Best Effort</span>
                                    <span className="text-xs text-gray-400">Fluctuates</span>
                                </div>
                                <div className="text-center w-1/3 border-l border-gray-100 pl-4">
                                    <span className="block font-bold text-brand-green">100%</span>
                                    <span className="text-xs text-gray-400">Guaranteed</span>
                                </div>
                            </div>

                            {/* Feature Row */}
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-gray-500 text-sm font-medium w-1/3">Contention</span>
                                <div className="text-center w-1/3">
                                    <span className="block font-bold text-gray-600">1:10+</span>
                                    <span className="text-xs text-gray-400">Shared</span>
                                </div>
                                <div className="text-center w-1/3 border-l border-gray-100 pl-4">
                                    <span className="block font-bold text-brand-green">1:1</span>
                                    <span className="text-xs text-gray-400">Exclusive</span>
                                </div>
                            </div>

                             {/* Feature Row */}
                             <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm font-medium w-1/3">Response Time</span>
                                <div className="text-center w-1/3">
                                    <span className="block font-bold text-gray-600">Next Business Day</span>
                                </div>
                                <div className="text-center w-1/3 border-l border-gray-100 pl-4">
                                    <span className="block font-bold text-brand-green">4 Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Specs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Who needs Dedicated Fiber?</h2>
                  <p className="text-blue-200 max-w-2xl mx-auto">
                      Any organization where a dropped connection means lost revenue or severe operational risk.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                  {industries.map((ind, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                          <Building className="w-8 h-8 mb-4 text-brand-green" />
                          <h4 className="font-bold text-lg mb-2">{ind.name}</h4>
                          <p className="text-sm text-blue-100">{ind.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white" id="inquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Corporate Quote</h2>
                    <p className="text-lg text-gray-600">
                        Dedicated fiber solutions are custom-built. Pricing depends on your location's distance from the fiber ring and required capacity.
                    </p>
                </div>
                
                <CoverageCheckForm serviceName="Corporate Fiber Inquiry" />
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default CorporateFiberPage;
