
import React from 'react';
import Hero from './components/Hero';
import { CheckCircle, Phone, Cloud, TrendingUp, Shield, Zap, Check, ArrowRight, RefreshCw, Smartphone } from './components/icons';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';
import { Card, CardContent } from './components/Card';
import Accordion from './Accordion';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const NumberPortingPage: React.FC = () => {
  const navigate = useNavigation();

  const steps = [
    {
      title: "1. Submit Request",
      description: "Send us your latest phone bill and a signed Letter of Authorization. We handle the paperwork.",
    },
    {
      title: "2. Verification",
      description: "We coordinate with your current provider to verify ownership and schedule a port date.",
    },
    {
      title: "3. The Switch",
      description: "On the scheduled date, your number seamlessly moves to our network. Little to no downtime.",
    }
  ];

  const benefits = [
    {
        icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
        title: "Slash Your Phone Bill",
        description: "Moving to VoIP typically reduces call costs by 30-50% compared to traditional Telkom lines."
    },
    {
        icon: <Cloud className="w-6 h-6 text-brand-blue" />,
        title: "Future-Proof Tech",
        description: "Ditch the copper cables. Your number lives in the cloud, accessible from anywhere."
    },
    {
        icon: <Shield className="w-6 h-6 text-brand-blue" />,
        title: "Business Continuity",
        description: "Keep your advertised business number. No need to update marketing materials or website details."
    },
    {
        icon: <Zap className="w-6 h-6 text-brand-blue" />,
        title: "Instant Scalability",
        description: "Once ported, you can add unlimited concurrent channels to your number instantly."
    }
  ];

  const faqs = [
      {
          q: "How long does porting take?",
          a: "Individual numbers usually take 7-14 working days. Large blocks of numbers (100+) may take slightly longer depending on the losing carrier."
      },
      {
          q: "Will I lose service during the port?",
          a: "Downtime is minimal, often just a few minutes while routing tables update across the networks. We schedule ports for off-peak times whenever possible."
      },
      {
          q: "Can I port 087 and 0800 numbers?",
          a: "Yes! We can port Geographic (011, 021), Non-Geographic (087), and Toll-Free (0800) numbers from all major South African networks."
      },
      {
          q: "Should I cancel my old line first?",
          a: "NO! Do not cancel your line with your current provider until the port is complete. If the line is cancelled, the number is lost and cannot be ported."
      }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Number Porting <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Services.</span>
            </>
        }
        subtitle="Migrate your existing business numbers to the cloud without interruption. We handle the admin, you keep your identity."
        badge={
            <>
                <RefreshCw className="w-4 h-4" />
                <span>Seamless Porting</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Transfer Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                        <div className="flex items-center space-x-3">
                            <Smartphone className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-bold text-white">011 555 0123</span>
                        </div>
                        <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-2 py-1 rounded">PORTING</span>
                    </div>

                    {/* Transfer Visual */}
                    <div className="flex items-center justify-between px-2 mb-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2 border border-gray-600">
                                <span className="text-xs text-gray-500 font-bold">OLD</span>
                            </div>
                            <p className="text-[10px] text-gray-500">Legacy Telco</p>
                        </div>

                        <div className="flex-1 px-4 relative">
                            {/* Connecting Line */}
                            <div className="h-1 bg-gray-800 rounded-full w-full">
                                <div className="h-1 bg-brand-green w-2/3 rounded-full animate-pulse"></div>
                            </div>
                            {/* Moving Dot */}
                            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-brand-green/50"></div>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-2 shadow-lg shadow-brand-blue/30">
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-[10px] text-brand-blue font-bold">IPT One</p>
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-3 bg-gray-800/50 p-4 rounded-xl">
                        <div className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-brand-green mr-3" />
                            <span>Ownership Verified</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-brand-green mr-3" />
                            <span>Port Date Scheduled</span>
                        </div>
                        <div className="flex items-center text-sm text-white font-semibold">
                            <div className="w-4 h-4 rounded-full border-2 border-brand-green border-t-transparent animate-spin mr-3"></div>
                            <span>Syncing to Cloud...</span>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float-reverse">
                    <Shield className="w-5 h-5 text-brand-green" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Risk Free</p>
                        <p className="text-xs font-bold text-white">No Downtime</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('start-port')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Start Your Port
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
            >
                How It Works
            </Button>
        </div>
      </Hero>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Hassle-Free Transition</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">How Number Porting Works</h2>
                <p className="text-lg text-gray-600">
                    Geographic Number Portability (GNP) allows you to move your number between networks. We manage the entire administrative process for you.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-white p-6 relative">
                        <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 text-2xl font-bold text-brand-blue">
                            {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section id="start-port" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left: Info & Requirements */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why switch your number to us?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Old copper lines are unreliable, expensive, and prone to theft. By porting to IPT One, you move your number to a secure, redundant cloud environment.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                    <p className="text-sm text-gray-500">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-brand-green mr-2" />
                            Porting Requirements
                        </h3>
                        <p className="text-blue-200 mb-6 text-sm">To ensure a successful port request, please have the following ready:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                                <span>Copy of ID of the account holder</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                                <span>Latest phone bill (proof of ownership)</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                                <span>Signed Letter of Authorization (we provide this)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-brand-blue p-2 rounded-lg">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Start Your Port</h3>
                        </div>
                        <p className="text-gray-600 mb-8">Fill in the details below to initiate a number port request. Our team will verify portability and contact you for the required documents.</p>
                        <ServiceInquiryForm serviceName="Number Porting Request" />
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Porting FAQ</h2>
                <p className="text-gray-600">Common questions about moving your number.</p>
            </div>
            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <Accordion key={index} title={item.q}>
                        <p>{item.a}</p>
                    </Accordion>
                ))}
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default NumberPortingPage;
