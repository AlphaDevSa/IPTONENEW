
import React from 'react';
import Hero from './components/Hero';
import { 
  Cloud, 
  GitBranch, 
  Bot, 
  Mail, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  WhatsApp, 
  Users, 
  Building,
  Tag,
  Check,
  Server,
  Zap,
  Phone
} from './components/icons';
import { navStructure } from './servicesData';
import { useNavigation } from './NavigationContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from './components/Card';
import ServiceInquiryForm from './ServiceInquiryForm';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';

const HostedPBXPage: React.FC = () => {
  const navigate = useNavigation();
  const hostedPbxService = navStructure.find(item => item.path === '/services/hosted-pbx');

  const enterpriseFeatures = [
      { name: "Advanced IVR", icon: <Bot className="w-6 h-6 text-brand-green" />, desc: "Auto-attendants to route calls professionally." },
      { name: "Call Recording", icon: <Server className="w-6 h-6 text-brand-green" />, desc: "Compliance and training made easy." },
      { name: "Mobile Apps", icon: <Smartphone className="w-6 h-6 text-brand-green" />, desc: "Take your extension anywhere." },
      { name: "Video Conferencing", icon: <Users className="w-6 h-6 text-brand-green" />, desc: "Face-to-face meetings built-in." },
      { name: "CRM Integration", icon: <GitBranch className="w-6 h-6 text-brand-green" />, desc: "Pop-ups for Salesforce, Zoho, and more." },
      { name: "Real-time Analytics", icon: <TrendingUp className="w-6 h-6 text-brand-green" />, desc: "Live wallboards and detailed reporting." },
  ];

  const platforms = hostedPbxService?.subServices || [];

  return (
    <>
      <Hero
        title={"Enterprise-Grade Hosted PBX"}
        subtitle="Eliminate expensive on-premise hardware. Upgrade to a flexible, cloud-based phone system that empowers your team to work from anywhere, on any device."
        badge={
            <>
                <Cloud className="w-4 h-4" />
                <span>Cloud Communications</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md" role="img" aria-label="IPT One Cloud PBX Dashboard Interface">
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>
                <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(0,83,155,0.5)]">
                            <Cloud className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">IPT Cloud PBX</h3>
                        <p className="text-sm text-gray-400">Centralized Management</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                            <Smartphone className="w-6 h-6 text-brand-green mx-auto mb-2" />
                            <p className="text-xs text-gray-300">Mobile</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                            <Phone className="w-6 h-6 text-brand-green mx-auto mb-2" />
                            <p className="text-xs text-gray-300">Desk Phone</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                            <Server className="w-6 h-6 text-brand-green mx-auto mb-2" />
                            <p className="text-xs text-gray-300">Softphone</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">System Status</span>
                            <span className="text-green-400 font-bold flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                Operational
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        }
      >
        <Button size="lg" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
            View Platforms
        </Button>
        <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/contact')} 
            className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
        >
            Talk to Sales
        </Button>
      </Hero>

      {/* Porting Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4">
              <div className="flex items-center text-brand-blue">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Keep your existing number (011, 021, 087, etc.)</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center text-brand-blue">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Free inter-branch calling</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center text-brand-blue">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Quick & Easy Setup</span>
              </div>
          </div>
      </div>

      {/* Value Prop & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why switch to Hosted PBX?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Traditional phone systems are heavy, expensive, and tie you to a desk. Hosted PBX moves your "brain" to the cloud, giving you enterprise-grade features for a fraction of the cost.
            </p>
            
            <div className="space-y-8">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-blue text-white">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900">Reduce Costs</h3>
                        <p className="mt-2 text-gray-600">Save up to 50% on your monthly phone bill. No expensive hardware maintenance or upgrade fees.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-blue text-white">
                            <Globe className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900">Work Anywhere</h3>
                        <p className="mt-2 text-gray-600">Your office extension follows you. Answer calls on your desk phone, PC softphone, or mobile app seamlessly.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-blue text-white">
                            <Zap className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900">Scalability</h3>
                        <p className="mt-2 text-gray-600">Add extensions instantly as you hire new staff. Scale up or down with your business needs.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-green/20 rounded-full blur-xl -z-10"></div>
             <ServiceInquiryForm serviceName="Hosted PBX Solution" />
          </div>
        </div>
      </section>

      {/* Dark Feature Grid */}
      <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Enterprise Features Included</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Don't pay extra for the features you need. Our platforms come packed with functionality to boost productivity.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {enterpriseFeatures.map((feature, idx) => (
                      <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand-green transition-colors group">
                          <div className="mb-4 bg-gray-900 p-3 rounded-lg w-fit group-hover:bg-gray-700 transition-colors">
                              {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                          <p className="text-gray-400">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Platform Selection */}
      <section id="plans" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Flexibility First</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Choose Your Engine</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    We aren't tied to a single vendor. We offer the world's leading PBX platforms so you get the perfect fit for your specific business requirements.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platforms.map((platform) => (
                    <Card key={platform.path} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="pb-4">
                            <div className="h-12 flex items-center mb-4">
                                {platform.image ? (
                                    <img 
                                      src={platform.image} 
                                      alt={`${platform.name} Authorized Provider South Africa`} 
                                      className="max-h-full max-w-[150px] object-contain"
                                      data-name={platform.name}
                                      onError={(e) => {
                                        const target = e.currentTarget as HTMLImageElement & { dataset: { idx?: string, name?: string, failed?: string } };
                                        if (target.dataset.failed === '1') return;
                                        const name = (target.dataset.name || '').toLowerCase();
                                        const slug = name
                                          .replace(/hosted pbx|pbx|cloud|ip[ -]?t|one|extensions|platform|system/gi, '')
                                          .replace(/[^a-z0-9]+/g, '')
                                          .trim() || name.replace(/[^a-z0-9]+/g, '');
                                        const idx = parseInt(target.dataset.idx || '0', 10);
                                        const candidates = [
                                          `/images/${slug}.png`,
                                          `/images/${slug}.svg`,
                                          `/images/${slug}-logo.png`,
                                          `/images/${name.replace(/[^a-z0-9]+/g, '')}.png`,
                                        ].filter(Boolean);
                                        if (candidates[idx] && target.src.indexOf(candidates[idx]) === -1) {
                                          target.dataset.idx = String(idx + 1);
                                          target.src = candidates[idx];
                                          return;
                                        }
                                        target.dataset.failed = '1';
                                        // Final fallback: readable placeholder
                                        const text = encodeURIComponent(platform.name.replace(/\s+PBX/i, ''));
                                        target.src = `https://placehold.co/200x80/eef2ff/00539B?text=${text}`;
                                      }}
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-gray-800">{platform.name}</span>
                                )}
                            </div>
                            <CardTitle className="text-xl">{platform.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-gray-600 mb-4">
                                {platform.path.includes('vital') ? "A powerful Unified Communications platform with video, chat, and voice in one." :
                                 platform.path.includes('vodia') ? "Perfect for businesses requiring a robust, cloud PBX with Teams integration." :
                                 platform.path.includes('yeastar') ? "Yeastar P-Series Cloud PBX with Linkus UC Clients for voice, video, and collaboration." :
                                 platform.path.includes('ucx') ? "UCX is transforming the future of business communications as a leading Software-as-a-Service provider of UCX XCaaS, an integrated contact center, voice communications, video, chat and API solution built on one global cloud communications platform." :
                                 platform.path.includes('bicom') ? "PBXware Business Edition stands out as an ideal and cost-effective solution for medium-sized businesses and enterprises, providing robust features and integrations." :
                                 "A fully managed, white-glove service where we handle everything for you."}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => navigate(platform.path)} variant="outline" className="w-full">
                                View Packages
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <CtaSection />
    </>
  );
};

export default HostedPBXPage;
