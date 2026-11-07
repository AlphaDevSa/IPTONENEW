
import React from 'react';
import Hero from './components/Hero';
import { Button } from './components/Button';
import { Shield, Zap, CheckCircle, Users, TrendingUp, Code } from './components/icons';
import { useNavigation } from './NavigationContext';
import CtaSection from './components/CtaSection';

const stats = [
  { label: 'Uptime Guarantee', value: '99.99%' },
  { label: 'Happy Clients', value: '250+' },
  { label: 'Support Available', value: '24/7' },
  { label: 'National Coverage', value: '100%' },
];

const values = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Uncompromising Reliability",
    description: "We understand that downtime costs money. Our carrier-grade infrastructure enables us to offer industry-leading SLAs.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Human-Centric Support",
    description: "No automated loops. Access expert, local South African support agents who understand your business context.",
    gradient: "from-brand-blue to-cyan-600"
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Innovation First",
    description: "We constantly evolve our stack, bringing you the latest in VoIP, Cloud, and 5G technology before the competition.",
    gradient: "from-brand-green to-brand-green"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Scalable Growth",
    description: "From a single home office to a multi-branch enterprise, our solutions scale instantly with your needs.",
    gradient: "from-gray-800 to-black"
  }
];

const AboutPage: React.FC = () => {
  const navigate = useNavigation();
  
  return (
    <>
      <Hero
        title={
            <>
                The Digital Backbone of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">South African Business.</span>
            </>
        }
        subtitle="We don't just supply internet; we engineer the ecosystems that allow modern businesses to thrive. From Cape Town to Musina, we are connecting the nation."
        badge={
            <>
                <Shield className="w-4 h-4" />
                <span>Established 2021</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[90px] -z-10"></div>
                <div className="relative z-20 bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl w-56 text-center flex flex-col items-center">
                    <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(0,83,155,0.6)]">
                        <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white font-bold">IPT ONE</h3>
                    <p className="text-xs text-gray-400">Digital Backbone</p>
                </div>
                <div className="absolute -top-2 right-2 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-float-slow">
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <Shield className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-900">Security</p>
                        <p className="text-[10px] text-gray-500">Protected</p>
                    </div>
                </div>
                <div className="absolute bottom-8 -left-2 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-float-reverse">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-900">Support</p>
                        <p className="text-[10px] text-gray-500">Local Team</p>
                    </div>
                </div>
                <div className="absolute top-16 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-bounce-slow">
                    <div className="bg-orange-100 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-900">Uptime</p>
                        <p className="text-[10px] text-gray-500">99.99%</p>
                    </div>
                </div>
                <div className="absolute bottom-2 right-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-float-slow">
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <Code className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-900">Automation</p>
                        <p className="text-[10px] text-gray-500">Ready</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex gap-4">
            <Button size="lg" onClick={() => navigate('/contact')} className="font-semibold shadow-lg shadow-brand-green/20">
                Partner With Us
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/services')} className="font-semibold text-white border-white hover:bg-white/10 hover:text-white">
                View Capabilities
            </Button>
        </div>
      </Hero>

      {/* Floating Stats Section */}
      <div className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform translate-y-4">
            {stats.map((stat, index) => (
                <div key={index} className={`p-6 text-center border-b md:border-b-0 border-gray-100 ${index !== stats.length - 1 ? 'md:border-r' : ''}`}>
                    <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* About IPT One Section */}
      <section className="pt-32 pb-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About IPT One</h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                  <p>
                      IPT One Telecoms is a premium provider of fully managed, Blueprint ICT Solutions. We serve as a single, trusted partner for businesses and channel partners seeking integrated technology systems that deliver high performance without unnecessary complexity.
                  </p>
                  <p>
                      Our approach is defined by precision, reliability, and accountability. With over 20+ years of industry experience, IPT One Telecoms was founded by a team that recognised a critical gap in the market: ICT services that are intelligently designed, thoroughly tested, and professionally managed from start to finish.
                  </p>
                  <p>
                      IPT One Telecoms has been providing premium business telecommunications and automation since 2021 by means of internet connectivity, data packages, VoIP, IP telephones, cloud PBX, call management (TMS), network security, installations and cabling.
                  </p>
                  <p>
                      We specialise in unified communications – focusing on mobility and remote collaboration, as well as long-term, cost-savings for small to large enterprises.
                  </p>
              </div>
          </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        To democratize access to enterprise-grade telecommunications infrastructure for South African businesses of all sizes. We believe that reliable connectivity and crystal-clear voice communication are the cornerstones of economic growth.
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        To be the most trusted ICT partner in South Africa, known not just for our technology, but for the human relationships we build and the success we enable for our clients.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue/10 rounded-3xl transform rotate-3"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                        alt="IPT One Telecoms Team in South Africa – Business Communications Experts" 
                        className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pt-12 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((item, index) => (
                      <div key={index} className="relative rounded-2xl p-8 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                          <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                          <div className="mb-5 w-14 h-14 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-sm">
                              {item.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      

      <CtaSection />
    </>
  );
};

export default AboutPage;
