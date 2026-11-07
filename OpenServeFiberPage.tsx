
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Zap, Shield, Wifi, Globe, Server, Activity, ArrowRight, Home } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';
import Modal from './Modal';
import OpenServeFiberSignUpForm from './OpenServeFiberSignUpForm';
import CoverageCheckForm from './CoverageCheckForm';

interface Plan {
    name: string;
    speed: string;
    upload: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
    isPremium?: boolean;
}

const OpenServeFiberPage: React.FC = () => {
  const navigate = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Pricing Logic: Base Price + 15%, rounded to nearest 9
  const pricingPlans: Plan[] = [
    {
        name: "Premium Fibre 20Mbps",
        speed: "20 Mbps",
        upload: "10 Mbps",
        price: "R649.00", // (559 * 1.15 = 642.85 -> 649)
        features: ["Uncapped & Unshaped", "Free-to-Use Router", "Free Installation", "No FUP"],
        isFeatured: false
    },
    {
        name: "Premium Fibre 25Mbps",
        speed: "25 Mbps",
        upload: "25 Mbps",
        price: "R689.00", // (599 * 1.15 = 688.85 -> 689)
        features: ["Symmetrical Speed", "Uncapped & Unshaped", "Free-to-Use Router", "Free Installation"],
        isFeatured: true
    },
    {
        name: "Premium Fibre 50Mbps",
        speed: "50 Mbps",
        upload: "25 Mbps",
        price: "R979.00", // (849 * 1.15 = 976.35 -> 979)
        features: ["Priority Network Access", "Uncapped & Unshaped", "Free-to-Use Router", "Free Installation"],
        isFeatured: false,
        isPremium: true
    }
  ];

  const handleOrder = (plan: Plan) => {
      setSelectedPlan(plan);
      setIsModalOpen(true);
  };

  return (
    <>
      <Hero
        title={
            <>
                OpenServe <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Premium Fibre.</span>
            </>
        }
        subtitle="Experience the stability of South Africa's largest fibre network. Premium, uncapped connectivity with a 14-day speed boost on activation."
        badge={
            <>
                <Globe className="w-4 h-4" />
                <span>OpenServe Network</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Dashboard Card */}
                <div className="relative z-20 bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                    
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <Wifi className="w-8 h-8 text-blue-600" />
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">OpenServe</h3>
                                <p className="text-gray-500 text-xs">Home Connect</p>
                            </div>
                        </div>
                        <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                            ACTIVE
                        </div>
                    </div>

                    <div className="text-center py-6 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Activation Bonus</p>
                        <span className="text-4xl font-black text-gray-900">50 Mbps</span>
                        <p className="text-green-600 text-sm font-medium mt-1 flex justify-center items-center">
                            <Activity className="w-3 h-3 mr-1" /> First 14 Days
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span>Free Premium Router</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span>Free Installation</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span>Uncapped Data</span>
                        </div>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://www.iptoneconnect.co.za/?section=Fibre', '_blank', 'noopener,noreferrer')} className="font-bold shadow-lg shadow-blue-600/20 bg-blue-600 hover:bg-blue-700 text-white">
                View Packages
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open('https://www.iptoneconnect.co.za', '_blank', 'noopener,noreferrer')}
            >
                Check Coverage
            </Button>
        </div>
      </Hero>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white bg-blue-600 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Special Offer
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Get a 50Mbps Jumpstart
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             Get connected to OpenServe Fibre and enjoy a superior internet experience. As a welcome bonus, <strong>all new installations get 50Mbps speeds for the first 14 days</strong>, regardless of the package you choose.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the full potential of fibre while you settle in. After 14 days, your line automatically switches to your selected package speed.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">Connect in 3-5 Days</span>
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">R299 Upfront All-Inclusive</span>
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">Refundable if No Coverage</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-blue-600 relative">
             <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Check Availability</h3>
                 <p className="text-gray-500">Verify if your home is OpenServe Fibre ready.</p>
             </div>
             <CoverageCheckForm serviceName="OpenServe Fibre" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Fibre Packages</h2>
                <p className="text-lg text-gray-600">
                    Select the speed that fits your lifestyle. All packages include a free-to-use router and free installation.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {pricingPlans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                            plan.isFeatured 
                            ? 'border-2 border-brand-green shadow-2xl scale-105 z-10' 
                            : 'border border-gray-200 shadow-lg'
                        }`}
                    >
                        {plan.isFeatured && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-brand-green text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Best Value
                                </span>
                            </div>
                        )}
                        {plan.isPremium && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Priority Access
                                </span>
                            </div>
                        )}

                        <div className="p-8 flex-grow text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="my-6">
                                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500 text-sm block mt-2">/month</span>
                            </div>

                            <div className="flex justify-center items-center space-x-4 mb-6">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 uppercase font-bold">Download</p>
                                    <p className="text-xl font-bold text-brand-blue">{plan.speed}</p>
                                </div>
                                <div className="h-8 w-px bg-gray-200"></div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 uppercase font-bold">Upload</p>
                                    <p className="text-xl font-bold text-brand-blue">{plan.upload}</p>
                                </div>
                            </div>
                            
                            <ul className="space-y-3 text-left bg-gray-50 p-4 rounded-xl">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                                {plan.isPremium && (
                                     <li className="flex items-start text-sm text-gray-900 font-bold">
                                        <Zap className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                                        Priority Service Queue
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <Button 
                                onClick={() => handleOrder(plan)} 
                                className={`w-full font-bold ${
                                    plan.isFeatured 
                                    ? 'bg-brand-green text-gray-900 hover:bg-opacity-90' 
                                    : plan.isPremium 
                                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                                    : 'bg-brand-blue text-white hover:bg-blue-800'
                                }`}
                            >
                                Order Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-2xl mx-auto">
                <p className="text-sm text-blue-800">
                    <strong>Note:</strong> A once-off upfront payment of <strong>R299</strong> is required to activate your service. This covers your installation, premium router, and the first 14 days of connectivity.
                </p>
            </div>
        </div>
      </section>

      {/* Tech Strip */}
      <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold mb-8">Why OpenServe?</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  <div className="flex items-center opacity-80">
                      <Shield className="w-6 h-6 mr-3 text-blue-400" />
                      <span className="font-bold text-lg">Resilient Network</span>
                  </div>
                  <div className="flex items-center opacity-80">
                      <Globe className="w-6 h-6 mr-3 text-blue-400" />
                      <span className="font-bold text-lg">National Coverage</span>
                  </div>
                  <div className="flex items-center opacity-80">
                      <Zap className="w-6 h-6 mr-3 text-blue-400" />
                      <span className="font-bold text-lg">Low Latency</span>
                  </div>
              </div>
          </div>
      </section>

       <CtaSection />

       {isModalOpen && selectedPlan && (
        <Modal title={`Order ${selectedPlan.name}`} onClose={() => setIsModalOpen(false)} maxWidth="max-w-4xl">
            <OpenServeFiberSignUpForm plan={selectedPlan} onClose={() => setIsModalOpen(false)} />
        </Modal>
       )}
    </>
  );
};

export default OpenServeFiberPage;
