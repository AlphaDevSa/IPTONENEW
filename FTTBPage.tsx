
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Server, TrendingUp, Shield, Zap, Building, Globe, Activity, Lock, ArrowRight, Briefcase } from './components/icons';
import CoverageCheckForm from './CoverageCheckForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './components/Card';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const FTTBPage: React.FC = () => {
  const navigate = useNavigation();

  const features = [
    {
        icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
        title: "Symmetrical Speeds",
        description: "Upload as fast as you download. Crucial for cloud backups, sending large files, and high-quality video conferencing."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Business SLAs",
        description: "Service Level Agreements that guarantee uptime and priority fault resolution. We keep you online."
    },
    {
        icon: <Server className="w-6 h-6 text-brand-blue" />,
        title: "Static IP Options",
        description: "Essential for hosting servers, VPN access, and securing remote connections to your office network."
    },
    {
        icon: <Activity className="w-6 h-6 text-brand-blue" />,
        title: "Low Contention Ratio",
        description: "Unlike home fiber, business lines are not oversold. You get consistent speeds even during peak hours."
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Fiber To The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Business.</span>
            </>
        }
        subtitle="Enterprise-grade connectivity for modern businesses. Uncapped, unshaped, and symmetrical speeds backed by industry-leading Service Level Agreements."
        badge={
            <>
                <Briefcase className="w-4 h-4" />
                <span>Business Grade</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Interface Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Building className="w-5 h-5 text-brand-blue" />
                            <div>
                                <h3 className="text-white font-bold text-sm">Office Gateway</h3>
                                <p className="text-gray-500 text-[10px] font-mono">PTA_MAIN_HQ</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-900/20 px-2 py-1 rounded text-blue-400 text-xs font-bold border border-blue-900/30">
                            <Activity className="w-3 h-3" />
                            <span>STABLE</span>
                        </div>
                    </div>

                    {/* Bandwidth Monitor */}
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Dedicated Bandwidth</span>
                            <span className="text-white font-bold text-lg">200 Mbps</span>
                        </div>
                        <div className="h-32 flex items-end space-x-1 border-b border-gray-700 pb-1">
                            {/* Simulated Traffic Bars */}
                            {[30, 45, 60, 50, 70, 85, 65, 55, 80, 90, 75, 60, 50, 40, 60].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className="w-full bg-brand-blue/60 rounded-t-sm hover:bg-brand-blue transition-colors"></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                            <span>09:00</span>
                            <span>12:00</span>
                            <span>15:00</span>
                        </div>
                    </div>

                    {/* Status Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center justify-between">
                            <span className="text-xs text-gray-400">SLA Status</span>
                            <span className="text-green-400 font-bold text-xs">Met</span>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center justify-between">
                            <span className="text-xs text-gray-400">Static IP</span>
                            <span className="text-white font-bold text-xs">Active</span>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 z-30 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-slow">
                    <Server className="w-5 h-5 text-brand-blue" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Priority</p>
                        <p className="text-xs font-bold text-gray-900">Voice Traffic</p>
                    </div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-30 bg-brand-blue text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Shield className="w-5 h-5" />
                    <div>
                        <p className="text-[10px] text-blue-200 uppercase font-bold">Security</p>
                        <p className="text-xs font-bold">Firewall Ready</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-blue/20">
                Check Business Coverage
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Get Custom Quote
            </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6 border border-blue-100">
                <Building className="w-4 h-4 mr-2" />
                Business Grade
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Built for Business, <br/>Not Just Browsing
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Home internet connects people to entertainment. Business Fiber connects people to productivity. FTTB is engineered to handle the demands of multiple concurrent users, VoIP calls, and cloud applications without breaking a sweat.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a focus on stability and low latency, our business fiber ensures your Zoom calls don't freeze and your cloud ERP responds instantly.
            </p>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-800">Prioritized Voice Traffic</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-800">Direct Access to Support Engineers</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative" id="inquiry">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl -z-10"></div>
             <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Check Business Coverage</h3>
                 <p className="text-gray-500">Find out if your office building is fiber-ready.</p>
             </div>
             <CoverageCheckForm serviceName="Fiber To The Business" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Business Advantage</h2>
                <p className="text-lg text-gray-600">Why upgrade from standard broadband?</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Inquiry Form Section (Replaces Speed Tiers) */}
      <section className="py-20 bg-white" id="plans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Business Fiber Quote</h2>
                    <p className="text-lg text-gray-600">
                        Business fiber pricing varies by location and provider. Fill out the form below to get a custom quote tailored to your office's needs.
                    </p>
                </div>
                
                <CoverageCheckForm serviceName="Fiber To The Business Inquiry" />
            </div>
        </div>
      </section>

      {/* Tech Strip */}
      <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center opacity-70">
                  <Lock className="w-6 h-6 mr-3" />
                  <span className="font-bold text-lg">Secure Network</span>
              </div>
              <div className="flex items-center opacity-70">
                  <Globe className="w-6 h-6 mr-3" />
                  <span className="font-bold text-lg">Low Latency</span>
              </div>
              <div className="flex items-center opacity-70">
                  <Zap className="w-6 h-6 mr-3" />
                  <span className="font-bold text-lg">99.9% Uptime</span>
              </div>
          </div>
      </section>

       <CtaSection />
    </>
  );
};

export default FTTBPage;
