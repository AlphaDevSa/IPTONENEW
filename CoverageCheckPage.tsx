
import React from 'react';
import Hero from './components/Hero';
import CoverageCheckForm from './CoverageCheckForm';
import { Wifi, MapPin, CheckCircle, Search, Server, Zap, Tower, Globe, Check } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';

const CoverageCheckPage: React.FC = () => {
    const providers = [
        "OpenServe", "Vumatel", "Frogfoot", "MetroFibre", "Octotel", 
        "Evotel", "Link Africa", "MTN", "Vodacom", "Telkom"
    ];

    const benefits = [
        {
            icon: <Search className="w-6 h-6 text-brand-green" />,
            title: "One Search, All Networks",
            description: "Don't waste time checking individual coverage maps. We scan all major Fibre, LTE, and 5G providers instantly."
        },
        {
            icon: <Zap className="w-6 h-6 text-brand-green" />,
            title: "Unbiased Recommendations",
            description: "We aren't tied to a single network. We recommend the best connection based on speed, price, and reliability for your specific area."
        },
        {
            icon: <Server className="w-6 h-6 text-brand-green" />,
            title: "Business-Grade Solutions",
            description: "We filter for high-stability connections suitable for VoIP, Cloud ERPs, and heavy business usage."
        }
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Is your area <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Fibre Ready?</span>
                    </>
                }
                subtitle="Don't settle for slow internet. We check availability across OpenServe, Vumatel, Frogfoot, MetroFibre and 20+ other networks instantly to find you the best deal."
                badge={
                    <>
                        <MapPin className="w-4 h-4" />
                        <span>Live Coverage Map</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md" role="img" aria-label="South Africa Fibre Coverage Map Tool">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-brand-green/10 rounded-full blur-[80px] -z-10"></div>
                        
                        {/* Main Analysis Card */}
                        <div className="relative z-20 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-brand-blue p-2 rounded-lg text-white">
                                        <Search className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">Coverage Analysis</h3>
                                        <p className="text-xs text-gray-400">Scanning Grid...</p>
                                    </div>
                                </div>
                                <div className="flex space-x-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Simulated Results */}
                                <div className="bg-gray-900/50 p-3 rounded-xl flex items-center justify-between border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Wifi className="w-5 h-5 text-brand-green" />
                                        <span className="text-sm text-gray-200 font-medium">Fibre to the Home</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">AVAILABLE</span>
                                </div>
                                
                                <div className="bg-gray-900/50 p-3 rounded-xl flex items-center justify-between border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Tower className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm text-gray-200 font-medium">5G / LTE-A</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">EXCELLENT</span>
                                </div>

                                <div className="bg-gray-900/50 p-3 rounded-xl flex items-center justify-between border border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <Globe className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm text-gray-200 font-medium">Microwave 1:1</span>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20">CHECKING</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-700">
                                <p className="text-xs text-gray-500 uppercase font-bold mb-3">Detected Providers</p>
                                <div className="flex space-x-2">
                                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-[10px] font-bold text-gray-800" title="Vumatel">V</div>
                                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white" title="OpenServe">O</div>
                                    <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white" title="Frogfoot">F</div>
                                    <div className="w-8 h-8 rounded bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-black" title="MTN">M</div>
                                    <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-[10px] font-bold text-white">+15</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -top-6 -right-6 z-30 bg-brand-green text-gray-900 p-4 rounded-xl shadow-xl flex items-center space-x-2 animate-float-slow border border-white/20">
                            <MapPin className="w-5 h-5" />
                            <div>
                                <p className="text-xs uppercase font-bold opacity-80">Location</p>
                                <p className="text-sm font-bold">Pinpointed</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('check-form')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        Check My Address
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => document.getElementById('providers')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        View Providers
                    </Button>
                </div>
            </Hero>

            {/* Provider Ticker / Trust Strip */}
            <div id="providers" className="bg-gray-50 border-y border-gray-200 py-12 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                        Checking availability across South Africa's Leading Networks
                    </h3>
                </div>
                
                <div className="relative w-full overflow-hidden group">
                    {/* Gradients for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Scrolling Track */}
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                        {/* Repeat list 4 times for smooth infinite scroll on large screens */}
                        {[...providers, ...providers, ...providers, ...providers].map((provider, index) => (
                            <div key={index} className="mx-3">
                                <span className="inline-block px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-base shadow-sm whitespace-nowrap hover:border-brand-blue hover:text-brand-blue hover:shadow-md transition-all duration-300 cursor-default">
                                    {provider}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white relative">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Left Column: Sales Pitch & Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Why check with <span className="text-brand-blue">IPT One?</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Finding the right internet service provider can be a maze of coverage maps and confusing packages. We simplify the process by aggregating data from all top-tier infrastructure providers.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 bg-brand-blue/10 p-3 rounded-xl">
                                            {benefit.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                                            <p className="text-gray-600 mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-5 h-5 text-brand-green mr-2" />
                                    The Process
                                </h4>
                                <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                                    <li className="mb-2 ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">1</span>
                                        <h3 className="font-semibold text-gray-900">Enter your details</h3>
                                        <p className="text-sm text-gray-500">Provide your exact installation address for accurate results.</p>
                                    </li>
                                    <li className="mb-2 ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">2</span>
                                        <h3 className="font-semibold text-gray-900">We analyze the grid</h3>
                                        <p className="text-sm text-gray-500">Our system cross-references your location with 20+ fibre and LTE networks.</p>
                                    </li>
                                    <li className="ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-green rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">3</span>
                                        <h3 className="font-semibold text-gray-900">Get your options</h3>
                                        <p className="text-sm text-gray-500">Receive a curated list of the best available speeds and prices.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Right Column: The Form */}
                        <div id="check-form" className="lg:col-span-7">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                                <div className="bg-brand-blue h-2 w-full"></div>
                                <div className="p-8 sm:p-10">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
                                            <MapPin className="w-8 h-8 text-brand-blue" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Check Availability</h3>
                                        <p className="text-gray-500">No obligation. 100% Free.</p>
                                    </div>
                                    <CoverageCheckForm serviceName="General Coverage" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <CtaSection />
        </>
    );
};

export default CoverageCheckPage;
