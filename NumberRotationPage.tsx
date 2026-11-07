
import React from 'react';
import Hero from './components/Hero';
import { RefreshCw, Shield, Tag, Settings, Layout, Activity, Search, Globe, Database, CheckCircle, Phone, Smartphone, Zap, ArrowRight } from './components/icons';
import { Button } from './components/Button';
import ServiceInquiryForm from './ServiceInquiryForm';
import CtaSection from './components/CtaSection';

const NumberRotationPage: React.FC = () => {
    const highlights = [
        { label: "Auto rotation", icon: <RefreshCw className="w-5 h-5 text-brand-blue" /> },
        { label: "Spam checks", icon: <Shield className="w-5 h-5 text-brand-blue" /> },
        { label: "Preferred name", icon: <Tag className="w-5 h-5 text-brand-blue" /> },
    ];

    const products = [
        {
            name: "MobiCaller",
            icon: <Phone className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600",
            lead: "Automatically rotates outbound Caller Line Identification (CLI) numbers at configurable intervals and performs spam-reputation lookups against Truecaller.",
            body: "Identifies numbers flagged as spam and supports replacement to maintain outbound effectiveness.",
        },
        {
            name: "MobiCaller+",
            icon: <Zap className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600",
            lead: "Includes MobiCaller’s CLI rotation and spam lookups, plus the ability to set a preferred business or brand name for the CLI for a recognisable caller identity.",
            body: "Present your business or brand name alongside your outbound CLI so customers know who is calling.",
        },
    ];

    const monitoring = [
        {
            title: "Configuration",
            desc: "Set the DID rotation interval, define lookup offsets (days) for spam detection, and enable automatic flagging when caller ID name changes are detected.",
            icon: <Settings className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600"
        },
        {
            title: "Account overview report",
            desc: "See active, inactive, recent and spam-flagged numbers in your DID pool to quickly identify numbers that require replacement.",
            icon: <Layout className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600"
        },
        {
            title: "Summary statistics dashboard",
            desc: "Track indicators such as Active Rate and Burn Rate for visibility into DID utilisation, spam impact and the effectiveness of your rotation strategy.",
            icon: <Activity className="w-6 h-6 text-white" />,
            accent: "from-blue-500 to-indigo-600"
        },
    ];

    const capabilities = [
        {
            title: "Automatic CLI rotation",
            desc: "Rotate caller IDs at customised, configurable intervals to spread call load and reduce spam-flagging risk.",
            icon: <RefreshCw className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600"
        },
        {
            title: "Spam reputation lookups",
            desc: "Check numbers against Truecaller to detect spam flags early.",
            icon: <Shield className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600"
        },
        {
            title: "Autodetect and remove",
            desc: "Autodetection and auto removal of spammed DIDs, with support to replace affected numbers.",
            icon: <Search className="w-6 h-6 text-white" />,
            accent: "from-blue-500 to-indigo-600"
        },
        {
            title: "Regional prefix presentation",
            desc: "Present the same prefix per region, for example 010 origination to 010 destinations.",
            icon: <Globe className="w-6 h-6 text-white" />,
            accent: "from-amber-400 to-orange-500"
        },
        {
            title: "Flexible DID bundles",
            desc: "Purchase multiple Geo or Mobile CLI bundles. Packages have a minimal term of 3 months.",
            icon: <Database className="w-6 h-6 text-white" />,
            accent: "from-purple-500 to-indigo-600"
        },
    ];

    const roundMrc = (amount: number) => {
        const rounded = Math.round(amount / 10) * 10 - 1;
        return `R ${new Intl.NumberFormat('en-ZA', { maximumFractionDigits: 0 }).format(rounded)}`;
    };

    const packageGroups = [
        {
            title: "MobiCaller — GEO Numbers",
            icon: <Globe className="w-5 h-5 text-brand-blue" />,
            packages: [
                { name: "Mobi-caller 1", pool: "20", mrc: roundMrc(2156.25), cycle: "Monthly" },
                { name: "Mobi-caller 2", pool: "50", mrc: roundMrc(5031.25), cycle: "Monthly" },
                { name: "Mobi-caller 3", pool: "100", mrc: roundMrc(8625), cycle: "Monthly" },
                { name: "Top-up DID's", pool: "10", mrc: roundMrc(1437.5), cycle: "Until spammed" },
            ],
        },
        {
            title: "MobiCaller — Mobile Numbers",
            icon: <Smartphone className="w-5 h-5 text-brand-blue" />,
            packages: [
                { name: "Mobi-caller 4", pool: "20", mrc: roundMrc(3018.75), cycle: "Monthly" },
                { name: "Mobi-caller 5", pool: "50", mrc: roundMrc(7187.5), cycle: "Monthly" },
                { name: "Mobi-caller 6", pool: "100", mrc: roundMrc(12937.5), cycle: "Monthly" },
                { name: "Top-up DID's", pool: "10", mrc: roundMrc(1437.5), cycle: "Until spammed" },
            ],
        },
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        MobiCaller <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">and MobiCaller+</span>
                    </>
                }
                subtitle="Keep your outbound numbers productive. Rotate outbound caller IDs at configurable intervals and check spam reputation against Truecaller."
                badge={
                    <>
                        <RefreshCw className="w-4 h-4" />
                        <span>Number Rotation</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                        {/* DID Health Dashboard */}
                        <div className="relative z-20 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden p-6 mx-auto w-80 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-bold">DID Health</span>
                                <span className="flex items-center text-xs text-brand-green font-semibold">
                                    <RefreshCw className="w-3.5 h-3.5 mr-1" /> Rotating
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span>Active Rate</span>
                                        <span className="text-white font-bold">97%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[97%] bg-brand-green rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span>Burn Rate</span>
                                        <span className="text-white font-bold">3%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[3%] bg-amber-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center bg-gray-800 rounded-xl p-3 border border-gray-700">
                                <Shield className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400">Truecaller lookup</p>
                                    <p className="text-sm font-bold text-white">Spam flags monitored</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute z-30 -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl flex items-center space-x-2 animate-float-slow">
                            <Tag className="w-5 h-5 text-brand-green" />
                            <span className="text-xs font-bold text-white">Preferred name on CLI</span>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                        View Packages <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        Key Capabilities
                    </Button>
                </div>
            </Hero>

            {/* Highlights Strip */}
            <section className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid sm:grid-cols-3 gap-4">
                        {highlights.map(item => (
                            <div key={item.label} className="flex items-center justify-center bg-white border border-gray-200 rounded-xl px-5 py-4">
                                {item.icon}
                                <span className="font-bold text-gray-900 ml-3">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Message Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Outbound Protection</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Keep calls reaching customers.</h2>
                            <p className="text-lg text-gray-600 mb-4">Stay ahead of spam flagging and keep your outbound campaigns moving.</p>
                            <p className="text-gray-600 mb-4">
                                MobiCaller manages outbound numbers for you. It rotates DIDs on a schedule you set and
                                checks Truecaller so you can act when a number is flagged.
                            </p>
                            <p className="text-gray-600">
                                MobiCaller and MobiCaller+ help you reduce spam-flagging risk, present a consistent
                                identity and keep contact rates steady.
                            </p>
                        </div>
                        <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-xl">
                            <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Key Message</span>
                            <p className="text-2xl font-bold mt-4 leading-snug">
                                Automatically rotate CLIs and monitor spam reputation to maintain outbound effectiveness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Options */}
            <section className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose how numbers and identity are presented.</h2>
                        <p className="text-lg text-gray-600">Pick the option that fits your calling strategy and brand presentation.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {products.map(product => (
                            <div key={product.name} className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${product.accent}`}></div>
                                <div className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center shadow-sm`}>
                                    {product.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                                <p className="text-gray-700 mb-4">{product.lead}</p>
                                <p className="text-gray-600 text-sm flex items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5 mr-2" />
                                    <span>{product.body}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monitoring Section */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Configure, monitor and act.</h2>
                        <p className="text-lg text-gray-600">Use configuration, reports and dashboards to manage DID health and performance.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {monitoring.map(item => (
                            <div key={item.title} className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${item.accent}`}></div>
                                <div className="mb-4 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section id="capabilities" className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate, detect and manage performance.</h2>
                        <p className="text-lg text-gray-600">Key capabilities to keep outbound performance steady.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map(item => (
                            <div key={item.title} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${item.accent}`}></div>
                                <div className="mb-4 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Select your DID pool and channel.</h2>
                        <p className="text-lg text-gray-600">Choose Geo or Mobile numbers. Packages have a minimal term of 3 months.</p>
                    </div>

                    <div className="space-y-10">
                        {packageGroups.map(group => (
                            <div key={group.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                                <div className="flex items-center bg-gray-50 border-b border-gray-200 px-6 py-4">
                                    {group.icon}
                                    <h3 className="text-lg font-bold text-gray-900 ml-3">{group.title}</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Package</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">DID Pool</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">MRC</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Spammed Numbers Cycle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {group.packages.map(pkg => (
                                                <tr key={pkg.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">{pkg.name}</td>
                                                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{pkg.pool}</td>
                                                    <td className="px-6 py-4 font-bold text-brand-blue whitespace-nowrap">{pkg.mrc}</td>
                                                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{pkg.cycle}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-blue-50 border border-blue-100 text-blue-800 rounded-xl px-6 py-4 text-sm max-w-3xl mx-auto">
                        <p>Please note Top-up DID's last until DID is spammed. Packages have a minimal term of 3 months.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div>
                                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Number Rotation</span>
                                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Start protecting your outbound caller IDs.</h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Let us help you configure the right rotation cadence, spam checks and preferred CLI identity for your business.
                                </p>
                            </div>

                            <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-brand-green mr-2" />
                                    What we can help with
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                                        <span>Recommended rotation schedule based on your outbound volume</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                                        <span>Truecaller spam check monitoring and number replacement strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                                        <span>Preferred brand name presentation and DID pool sizing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="bg-brand-blue p-2 rounded-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Request a Quote</h3>
                                </div>
                                <p className="text-gray-600 mb-8">Share your requirements and our team will recommend the best rotation setup for your numbers.</p>
                                <ServiceInquiryForm serviceName="Number Rotation Inquiry" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
};

export default NumberRotationPage;
