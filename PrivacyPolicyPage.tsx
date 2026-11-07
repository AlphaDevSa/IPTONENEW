
import React from 'react';
import Hero from './components/Hero';
import { Shield, Mail, Lock, CheckCircle, Database, Server } from './components/icons';
import CtaSection from './components/CtaSection';
import { Button } from './components/Button';

const PrivacyPolicyPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'sharing', title: '4. Sharing Your Information' },
    { id: 'retention', title: '5. Data Retention' },
    { id: 'security', title: '6. Security Measures' },
    { id: 'minors', title: '7. Minors' },
    { id: 'rights', title: '8. Your Privacy Rights' },
    { id: 'updates', title: '9. Updates to Policy' },
    { id: 'contact', title: '10. Contact Us' },
  ];

  return (
    <>
      <Hero
        title={
            <>
                Your Privacy, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Our Priority</span>
            </>
        }
        subtitle="We believe that privacy is a fundamental human right. Transparency is key to our commitment to protecting your personal information."
        badge={
            <>
                <Shield className="w-4 h-4" />
                <span>POPIA Compliant</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-[80px] -z-10"></div>
                
                {/* Main Security Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center border border-brand-green/50 shadow-[0_0_30px_rgba(185,215,11,0.3)]">
                            <Lock className="w-10 h-10 text-brand-green" />
                        </div>
                    </div>
                    
                    <div className="text-center mb-8">
                        <h3 className="text-white font-bold text-xl mb-1">Data Protection</h3>
                        <p className="text-gray-400 text-sm">Secure & Encrypted</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl border border-gray-700">
                            <div className="flex items-center space-x-3">
                                <Server className="w-5 h-5 text-blue-400" />
                                <span className="text-sm text-gray-200">Storage</span>
                            </div>
                            <span className="text-xs font-mono text-brand-green flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" /> Encrypted
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl border border-gray-700">
                            <div className="flex items-center space-x-3">
                                <Lock className="w-5 h-5 text-purple-400" />
                                <span className="text-sm text-gray-200">Access</span>
                            </div>
                            <span className="text-xs font-mono text-brand-green flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" /> Restricted
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl border border-gray-700">
                            <div className="flex items-center space-x-3">
                                <Shield className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm text-gray-200">Compliance</span>
                            </div>
                            <span className="text-xs font-mono text-brand-green flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" /> Verified
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 z-30 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <Database className="w-6 h-6 text-brand-blue" />
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Data Retention</p>
                        <p className="text-sm font-bold text-white">Policy Active</p>
                    </div>
                </div>
            </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold shadow-lg shadow-brand-green/20">
                Contact Privacy Officer
            </Button>
        </div>
      </Hero>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2 text-brand-green" />
                <span>Last Updated: <strong>October 27, 2024</strong></span>
            </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Sidebar Navigation */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="font-bold text-gray-900 mb-4 px-2">Table of Contents</h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-md transition-colors"
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9 space-y-12">
                    
                    {/* Introduction */}
                    <section id="introduction" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <div className="prose max-w-none text-gray-600">
                            <p className="mb-4">
                                Welcome to <strong>IPT One Telecoms</strong> ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:sales@iptone.co.za" className="text-brand-blue hover:underline">sales@iptone.co.za</a>.
                            </p>
                            <p>
                                When you visit our website <strong>https://www.iptone.co.za</strong> (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
                            </p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section id="collection" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information You Disclose to Us</h3>
                                <p className="text-gray-600 mb-4">
                                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Names & Contact Data</span>
                                    </li>
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Phone Numbers</span>
                                    </li>
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Email Addresses</span>
                                    </li>
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Mailing Addresses</span>
                                    </li>
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Billing Information</span>
                                    </li>
                                    <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-700">Account Credentials</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Information Automatically Collected</h3>
                                <p className="text-gray-600">
                                    Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Website.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section id="usage" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-6">
                            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-5 rounded-xl">
                                <h4 className="font-bold text-brand-blue mb-2">To facilitate account creation</h4>
                                <p className="text-sm text-gray-700">We use the information you provide to manage your account and keep it in working order.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-xl">
                                <h4 className="font-bold text-brand-blue mb-2">To send administrative info</h4>
                                <p className="text-sm text-gray-700">We may use your personal information to send you product, service and new feature information.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-xl">
                                <h4 className="font-bold text-brand-blue mb-2">To fulfill and manage orders</h4>
                                <p className="text-sm text-gray-700">We may use your information to fulfill and manage your orders, payments, returns, and exchanges.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-xl">
                                <h4 className="font-bold text-brand-blue mb-2">To protect our Services</h4>
                                <p className="text-sm text-gray-700">We may use your information as part of our efforts to keep our Website safe and secure (e.g. for fraud monitoring).</p>
                            </div>
                        </div>
                    </section>

                    {/* Sharing Information */}
                    <section id="sharing" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Will Your Information Be Shared?</h2>
                        <p className="text-gray-600 mb-4">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                        </ul>
                    </section>

                    {/* Data Retention */}
                    <section id="retention" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <div className="flex items-start">
                            <div className="mr-6 hidden sm:block bg-blue-100 p-3 rounded-full">
                                <Database className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How Long Do We Keep Your Information?</h2>
                                <p className="text-gray-600">
                                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Security */}
                    <section id="security" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <div className="flex items-start">
                            <div className="mr-6 hidden sm:block bg-blue-100 p-3 rounded-full">
                                <Lock className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How Do We Keep Your Information Safe?</h2>
                                <p className="text-gray-600">
                                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Minors */}
                    <section id="minors" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do We Collect Information From Minors?</h2>
                        <p className="text-gray-600">
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
                        </p>
                    </section>

                    {/* Privacy Rights */}
                    <section id="rights" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. What Are Your Privacy Rights?</h2>
                        <p className="text-gray-600 mb-4">
                            In South Africa, under the Protection of Personal Information Act (POPIA), you have certain rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>You can request access to your personal information.</li>
                            <li>You can request correction or deletion of your personal information.</li>
                            <li>You can object to the processing of your personal information.</li>
                            <li>You can request correction of inaccurate data.</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            If you would like to review or change the information in your account or terminate your account, you can contact us using the contact information provided below.
                        </p>
                    </section>

                    {/* Updates */}
                    <section id="updates" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
                        <p className="text-gray-600">
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                        </p>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="bg-brand-blue rounded-2xl shadow-lg border border-transparent p-8 text-white scroll-mt-24">
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                                <p className="mb-6 text-blue-100">
                                    If you have questions or comments about this policy, or if you would like to exercise your privacy rights, please contact us.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 mr-3 text-brand-green" />
                                        <a href="mailto:sales@iptone.co.za" className="text-white hover:text-brand-green hover:underline font-medium">sales@iptone.co.za</a>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 mr-3 mt-1 text-brand-green" />
                                        <span className="text-white">Information Officer<br/>IPT One Telecoms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
      </div>
      
      <CtaSection />
    </>
  );
};

export default PrivacyPolicyPage;
