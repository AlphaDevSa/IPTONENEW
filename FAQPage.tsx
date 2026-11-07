
import React from 'react';
import Hero from './components/Hero';
import Accordion from './Accordion';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';
import { MessageSquare, Search, Phone, Wifi, CreditCard, ChevronRight } from './components/icons';

export const faqData = [
    {
        category: 'General Questions',
        questions: [
            {
                q: 'What is VoIP?',
                a: 'VoIP stands for Voice over Internet Protocol. It\'s a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line. It converts your voice into a digital signal that travels over the Internet.'
            },
            {
                q: 'Can I keep my existing phone number?',
                a: 'Yes, in most cases you can. This process is called Local Number Portability (LNP). We can port your existing geographic number from your current provider to our network, so you don\'t lose your business identity.'
            },
            {
                q: 'What kind of internet connection do I need?',
                a: 'For optimal performance, we recommend a stable, high-speed broadband connection like business fibre or high-quality LTE/5G. The quality of your VoIP calls is directly related to the quality of your internet connection.'
            },
        ]
    },
    {
        category: 'Hosted PBX',
        questions: [
            {
                q: 'What is a Hosted PBX?',
                a: 'A Hosted PBX is a cloud-based phone system. Instead of having expensive PBX hardware at your office, all the technology is located in our secure data centers. You access the system and its features via your internet connection using IP phones, softphones on your computer, or a mobile app.'
            },
            {
                q: 'What are the main advantages of a Hosted PBX?',
                a: 'The main advantages are lower upfront costs (no expensive hardware to buy), scalability (easily add or remove users), advanced features (like IVR, call recording, queues), and flexibility (work from anywhere).'
            },
            {
                q: 'What happens if my internet goes down?',
                a: 'Our systems are highly flexible. We can configure call forwarding rules so that if your office internet fails, all incoming calls are automatically rerouted to alternative numbers, such as your mobile phone, ensuring you never miss an important call.'
            }
        ]
    },
    {
        category: 'Billing & Support',
        questions: [
            {
                q: 'What are your contract terms?',
                a: 'We offer flexible month-to-month contracts for most of our services, allowing you to scale your services up or down as your business needs change without being locked into a long-term commitment.'
            },
            {
                q: 'How can I get technical support?',
                a: 'We offer 24/7 technical support for our clients. You can reach our support team via phone, email, or our online portal. We pride ourselves on our fast, friendly, and expert local support.'
            }
        ]
    }
];

const FAQPage: React.FC = () => {
    const navigate = useNavigation();

    return (
        <>
            <Hero
                title={
                    <>
                        Your Questions, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Answered.</span>
                    </>
                }
                subtitle="Browse our knowledge base to find quick answers about VoIP setup, Fibre installation processes, billing inquiries, and technical support."
                badge={
                    <>
                        <MessageSquare className="w-4 h-4" />
                        <span>Support Center</span>
                    </>
                }
                visual={
                    <div className="relative w-full max-w-md">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Main Mock Interface */}
                        <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-4 flex items-center mb-6 border border-gray-600">
                                <Search className="w-5 h-5 text-gray-400 mr-3" />
                                <div className="h-2 w-32 bg-gray-600 rounded"></div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <Wifi className="w-4 h-4 mr-3 text-brand-blue" />
                                        Internet Speed Issues
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <Phone className="w-4 h-4 mr-3 text-brand-green" />
                                        VoIP Configuration
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <CreditCard className="w-4 h-4 mr-3 text-purple-400" />
                                        Billing & Invoices
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 z-30 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <MessageSquare className="w-5 h-5 text-brand-green" />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Live Chat</p>
                                <p className="text-xs font-bold text-white">Available</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => document.getElementById('faq-list')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-blue/20">
                        Browse Topics
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => navigate('/contact')} className="font-bold text-white border-white hover:bg-white hover:text-gray-900">
                        Contact Support
                    </Button>
                </div>
            </Hero>

            <section id="faq-list" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {faqData.map((category, index) => (
                        <div key={category.category} className={index > 0 ? 'mt-12' : ''}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((item) => (
                                    <Accordion key={item.q} title={item.q}>
                                        <p>{item.a}</p>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <CtaSection />
        </>
    );
};

export default FAQPage;
