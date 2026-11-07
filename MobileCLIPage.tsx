
import React, { useState } from 'react';
import Hero from './components/Hero';
import { CheckCircle, Signal, Phone, Zap, ArrowRight, TrendingUp, Tag } from './components/icons';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import Accordion from './Accordion';
import Modal from './Modal';
import MobileCLISignUpForm from './MobileCLISignUpForm';

const MobileCLIPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState('');

    const openSignUp = (rangeValue: string = '') => {
        setSelectedRange(rangeValue);
        setIsModalOpen(true);
    };

    const cliRanges = [
        {
            name: "Network Neutral",
            codes: "077",
            value: "Network Neutral - 077",
            price: 49,
            desc: "A 077 range that is not tied to a single mobile network operator.",
            accent: "from-slate-600 to-gray-900"
        },
        {
            name: "MTN",
            codes: "083",
            value: "MTN - 083",
            price: 49,
            desc: "Present 083 mobile numbers that customers recognise.",
            accent: "from-amber-400 to-orange-500"
        },
        {
            name: "Vodacom",
            codes: "082 / 076",
            value: "Vodacom - 082 / 076",
            price: 49,
            desc: "Use 082 or 076 mobile numbers for your outbound calls.",
            accent: "from-brand-blue to-blue-600"
        },
    ];

    const faqs = [
        {
            q: "What is a Mobile CLI?",
            a: "CLI stands for Caller Line Identifier — the number your customer sees on their handset when you call. A mobile CLI presents a South African mobile number instead of a landline, withheld or international number, so your outbound calls look familiar to the person receiving them."
        },
        {
            q: "Which networks can I choose from?",
            a: "We offer CLI ranges on Vodacom (082 / 076), MTN (083) and network neutral (077) ranges. Every range is billed at R49 per DID per month."
        },
        {
            q: "What does network neutral mean?",
            a: "A network neutral range is not tied to a single mobile operator. The 077 range sits outside the individual operator ranges, which makes it useful for diversifying the numbers your outbound campaigns present."
        },
        {
            q: "Why do mobile CLIs improve answer rates?",
            a: "Customers are more likely to answer a recognised South African mobile number than an unknown, withheld or international one. Presenting familiar mobile ranges supports better contactability and campaign effectiveness."
        },
        {
            q: "How many CLIs do I need?",
            a: "That depends on your call volumes. Pricing is per DID, so you can start with a single CLI and add more as your outbound volume grows. Select the quantity you need in the sign-up form."
        }
    ];

    const benefits = [
        {
            title: "Improved contactability",
            desc: "Present alternative CLIs across campaigns to reach more customers.",
            icon: <Phone className="w-6 h-6 text-white" />,
            accent: "from-brand-blue to-blue-600"
        },
        {
            title: "Enhanced answer ratios",
            desc: "Reduce call fatigue from repeated calls on a single number by rotating recognised mobile ranges.",
            icon: <TrendingUp className="w-6 h-6 text-white" />,
            accent: "from-brand-green to-emerald-600"
        },
        {
            title: "Multiple network options",
            desc: "Access iMobility Network Neutral, MTN and Vodacom ranges to align with your outbound strategy.",
            icon: <Signal className="w-6 h-6 text-white" />,
            accent: "from-blue-500 to-indigo-600"
        },
        {
            title: "Cost-effective choices",
            desc: "Pick the option that suits your requirements and volumes.",
            icon: <Tag className="w-6 h-6 text-white" />,
            accent: "from-amber-400 to-orange-500"
        },
        {
            title: "Built for scale",
            desc: "Suitable for outbound sales, engagement, lead generation, collections, verification and other high-volume environments.",
            icon: <Zap className="w-6 h-6 text-white" />,
            accent: "from-purple-500 to-indigo-600"
        },
    ];

    const useCases = [
        "BPO and outsourced contact centres.",
        "Insurance and financial services.",
        "Debt collection and account management.",
        "Outbound sales and telesales operations.",
        "Customer retention and win-back campaigns.",
        "Lead generation and customer verification.",
        "Automated outbound dialling environments.",
    ];

    return (
        <>
            <Hero
                title={
                    <>
                        Mobile CLI <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Solutions.</span>
                    </>
                }
                subtitle="Improve outbound contactability and answer rates. Present South African mobile Caller Line Identifiers (CLIs) that customers recognise."
                badge={
                    <>
                        <Signal className="w-4 h-4" />
                        <span>Mobile CLI Ranges</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Abstract Phone Visual */}
                        <div className="relative z-20 bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden aspect-[9/18] transform rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto w-64">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

                            {/* Screen Content */}
                            <div className="bg-gray-800 h-full flex flex-col pt-12 pb-8 px-4 text-white relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                                {/* Outbound Call UI */}
                                <div className="mt-8 text-center">
                                    <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-brand-green">
                                        <CheckCircle className="w-10 h-10 text-brand-green" />
                                    </div>
                                    <h3 className="text-2xl font-light">Outbound Call</h3>
                                    <p className="text-brand-blue font-bold text-lg mt-1">083 555 0123</p>
                                    <p className="text-xs text-gray-400 mt-1">Mobile CLI Presented</p>
                                </div>

                                <div className="mt-auto flex justify-center px-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute z-30 top-20 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl flex items-center space-x-2 animate-float-slow">
                            <Signal className="w-5 h-5 text-brand-green" />
                            <span className="text-xs font-bold text-white">077 · 083 · 082 / 076</span>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => openSignUp()} className="font-bold shadow-lg shadow-brand-green/20">
                        Choose Your CLI Range
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => document.getElementById('cli-options')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-bold text-white border-white hover:bg-white hover:text-gray-900"
                    >
                        View Ranges
                    </Button>
                </div>
            </Hero>

            {/* Contactability Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Outbound Performance</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Improve outbound contactability.</h2>
                            <p className="text-lg text-gray-600 mb-4">Use mobile network CLIs to increase answer rates and campaign effectiveness.</p>
                            <p className="text-gray-600">
                                IPT One Mobile CLI service helps you present recognised mobile number ranges to customers.
                                By accessing CLI ranges across multiple South African mobile networks, you can diversify your
                                outbound numbers and support better customer engagement.
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                            <h3 className="font-bold text-gray-900 mb-6">Available CLI Ranges</h3>
                            <div className="space-y-4">
                                {cliRanges.map(range => (
                                    <div key={range.name} className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4">
                                        <div className="flex items-center">
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${range.accent} flex items-center justify-center mr-4`}>
                                                <Signal className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{range.name}</p>
                                                <p className="text-xs text-gray-500">Dialing code {range.codes}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-brand-blue whitespace-nowrap">R49 / DID pm</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLI Range Options */}
            <section id="cli-options" className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Choose Your Range</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Offer a selection of Vodacom, MTN or Network Neutral</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">Every range is billed at R49 per DID per month. Select a range to start your sign up.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {cliRanges.map(range => (
                            <div key={range.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${range.accent} flex items-center justify-center mb-4`}>
                                    <Signal className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{range.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">Dialing code {range.codes}</p>
                                <div className="flex items-end gap-2 mb-4">
                                    <div className="text-4xl font-extrabold text-brand-blue leading-none">R49</div>
                                    <div className="text-gray-500 mb-1 text-sm">per DID / month</div>
                                </div>
                                <p className="text-gray-600 text-sm mb-6">{range.desc}</p>
                                <Button
                                    size="lg"
                                    className="font-bold mt-auto"
                                    onClick={() => openSignUp(range.value)}
                                >
                                    Select {range.codes} <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for higher answer rates.</h2>
                        <p className="text-lg text-gray-600">Diversify the CLI you present to improve recognition and response.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((b) => (
                            <div key={b.title} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className={`absolute -top-2 left-8 h-1 w-12 rounded-full bg-gradient-to-r ${b.accent}`}></div>
                                <div className="mb-4 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-sm">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-600 text-sm">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for high-volume teams.</h2>
                        <p className="text-lg text-gray-600">Mobile CLI works well in these environments.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {useCases.map(item => (
                            <div key={item} className="flex items-start bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5 mr-3" />
                                <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100" id="order-section">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Get Started</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Configure Your Mobile CLIs</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Choose your CLI range, the number of DIDs you need and a minute bundle. Our team will confirm
                        availability and activate your numbers.
                    </p>
                    <Button size="lg" onClick={() => openSignUp()} className="font-bold shadow-lg shadow-brand-blue/20">
                        Configure & Sign Up <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common queries about our mobile CLI service.</p>
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

            {isModalOpen && (
                <Modal title="Sign Up for Mobile CLI" onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
                    <MobileCLISignUpForm cliRanges={cliRanges} initialRange={selectedRange} />
                </Modal>
            )}
        </>
    );
};

export default MobileCLIPage;
