
import React from 'react';
import Hero from './components/Hero';
import { useNavigation } from './NavigationContext';
import { Button } from './components/Button';
import CtaSection from './components/CtaSection';
import { Input } from './components/Input';
import { FORMSPREE_ENDPOINT } from './config';
import { Globe, Shield, Lock, Mail, Settings, Zap, Check, Server, Users, Search, CheckCircle, Database, Tag } from './components/icons';

const DomainRegistrationPage: React.FC = () => {
  const navigate = useNavigation();

  const domainPrices = [
    { tld: ".co.za", price: "R99.00", label: "South Africa's #1 Choice", popular: true },
    { tld: ".com", price: "R289.00", label: "Global Standard", popular: false },
    { tld: ".net", price: "R329.00", label: "Network & Tech", popular: false },
    { tld: ".org", price: "R329.00", label: "Non-Profits", popular: false },
    { tld: ".africa", price: "R499.00", label: "Pan-African Identity", popular: false },
    { tld: ".io", price: "R1299.00", label: "Tech Startups", popular: false },
  ];

  const features = [
    {
      icon: <Settings className="w-6 h-6 text-brand-blue" />,
      title: "DNS Management",
      description: "Manage your DNS records (A, MX, CNAME, TXT) via our intuitive control panel at no extra cost."
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-blue" />,
      title: "Email Forwarding",
      description: "Create email aliases like sales@yourdomain.com and forward them to your existing email account."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-blue" />,
      title: "Domain Theft Protection",
      description: "Lock your domain to prevent unauthorized transfers. You stay in complete control of your asset."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
      title: "Instant Activation",
      description: "Get online fast. Most domain extensions are registered and active within minutes of payment."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
      title: "Whois Privacy",
      description: "Optional ID protection to hide your personal details from the public Whois database to reduce spam."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-blue" />,
      title: "Easy Renewal",
      description: "Never lose your domain. Set up auto-renewal or receive timely reminders before expiration."
    }
  ];

  return (
    <>
      <Hero
        title={
            <>
                Domain Name <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Registration.</span>
            </>
        }
        subtitle="Your name is your brand. Secure your perfect domain today with South Africa's most reliable registrar. Instant search, instant ownership."
        badge={
            <>
                <Globe className="w-4 h-4" />
                <span>ZACR Accredited</span>
            </>
        }
        visual={
            <div className="relative w-full max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>

                {/* Main Domain Asset Card */}
                <div className="relative z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Browser Header */}
                    <div className="flex items-center space-x-2 mb-6 border-b border-gray-800 pb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="ml-4 bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 flex-grow font-mono flex justify-between items-center">
                            <span>https://www.yourbrand.co.za</span>
                            <Lock className="w-3 h-3 text-green-500" />
                        </div>
                    </div>

                    {/* Central Status */}
                    <div className="text-center py-8">
                        <div className="inline-flex justify-center items-center w-20 h-20 bg-green-500/10 rounded-full mb-4 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Available!</h3>
                        <p className="text-gray-400 text-sm">Register it before someone else does.</p>
                    </div>

                    {/* Features Row */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <Shield className="w-5 h-5 text-brand-blue mx-auto mb-1" />
                            <p className="text-[10px] text-gray-400">Protected</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                            <p className="text-[10px] text-gray-400">Instant</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <Database className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                            <p className="text-[10px] text-gray-400">DNS Ready</p>
                        </div>
                    </div>
                </div>

                {/* Floating TLD Cards */}
                <div className="absolute -top-4 -right-4 z-30 bg-white text-gray-900 p-3 rounded-lg shadow-xl font-bold text-sm transform rotate-6 border border-gray-200">
                    .co.za
                </div>
                <div className="absolute top-10 -left-6 z-10 bg-brand-green text-gray-900 p-3 rounded-lg shadow-xl font-bold text-sm transform -rotate-12 border border-brand-green/50">
                    .africa
                </div>
                <div className="absolute -bottom-4 right-10 z-30 bg-brand-blue text-white p-3 rounded-lg shadow-xl font-bold text-sm transform -rotate-3 border border-brand-blue/50">
                    .com
                </div>
            </div>
        }
      >
        <div className="w-full max-w-lg">
            <form action={FORMSPREE_ENDPOINT} method="POST" className="relative group">
                <input type="hidden" name="_subject" value="Domain Search Inquiry" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative flex items-center bg-gray-900 border border-gray-700 rounded-full p-2 pr-2 shadow-2xl">
                    <Search className="ml-4 w-6 h-6 text-gray-400" />
                    <input 
                        type="text" 
                        name="query" 
                        placeholder="Search your domain name..."
                        className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 px-4 h-12 text-lg"
                        aria-label="Domain search"
                    />
                    <Button type="submit" className="rounded-full px-8 h-12 font-bold bg-brand-green text-gray-900 hover:bg-white border-transparent">
                        Check
                    </Button>
                </div>
            </form>
            
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400 font-medium">
                <span>Trending:</span>
                <span className="text-white hover:text-brand-green cursor-pointer transition-colors">.co.za</span>
                <span className="text-gray-600">•</span>
                <span className="text-white hover:text-brand-green cursor-pointer transition-colors">.com</span>
                <span className="text-gray-600">•</span>
                <span className="text-white hover:text-brand-green cursor-pointer transition-colors">.online</span>
                <span className="text-gray-600">•</span>
                <span className="text-white hover:text-brand-green cursor-pointer transition-colors">.africa</span>
            </div>
        </div>
      </Hero>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Domain Extensions</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">Competitive pricing on all major Top-Level Domains (TLDs). No hidden fees.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {domainPrices.map((domain) => (
                    <div key={domain.tld} className={`bg-white rounded-xl p-6 text-center border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${domain.popular ? 'border-brand-blue ring-1 ring-brand-blue shadow-md' : 'border-gray-200'}`}>
                        {domain.popular && <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-brand-blue bg-blue-50 rounded-full">Best Seller</span>}
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{domain.tld}</h3>
                        <p className="text-sm text-gray-500 mb-4">{domain.label}</p>
                        <p className="text-xl font-bold text-brand-green">{domain.price}</p>
                        <p className="text-xs text-gray-400">/year</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a href="https://website365.co.za/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline flex items-center justify-center">
                    View full price list <Shield className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Manage Your Domain</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">Every domain registration comes packed with free features to give you total control.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                            {feature.icon}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Service Types Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Registration Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                    <div className="bg-brand-blue p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                        <div className="flex items-center space-x-3 mb-2 relative z-10">
                            <Globe className="w-8 h-8 text-brand-green" />
                            <h3 className="text-2xl font-bold">Domain Registration</h3>
                        </div>
                        <p className="text-blue-100 relative z-10">For individuals and businesses</p>
                    </div>
                    <div className="p-8 flex-grow">
                        <p className="text-gray-600 mb-6">
                            Secure your personal name or business brand instantly. Our registration process is simple, secure, and comes with full ownership rights.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Instant Registration
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Full DNS Control
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                24/7 Support
                            </li>
                        </ul>
                        <Button onClick={() => navigate('/web-hosting/domains/domain-registration')} className="w-full">
                            Register a Domain
                        </Button>
                    </div>
                </div>

                {/* Reseller Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gray-900 p-8 text-white relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-brand-green opacity-10 rounded-full blur-2xl"></div>
                        <div className="flex items-center space-x-3 mb-2 relative z-10">
                            <Users className="w-8 h-8 text-brand-green" />
                            <h3 className="text-2xl font-bold">Domain Reseller</h3>
                        </div>
                        <p className="text-gray-400 relative z-10">For agencies, ISPs and entrepreneurs</p>
                    </div>
                    <div className="p-8 flex-grow">
                        <p className="text-gray-600 mb-6">
                            Start your own domain business or add value to your existing services. Get wholesale pricing and a white-label platform.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                Wholesale Pricing tiers
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                White-Label API & Modules
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Check className="w-5 h-5 text-brand-green mr-3" />
                                WHMCS Integration
                            </li>
                        </ul>
                        <Button onClick={() => navigate('/web-hosting/domains/domain-reseller')} variant="outline" className="w-full">
                            Become a Reseller
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Stack/Reliability Strip */}
      <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center space-x-2">
                      <Server className="w-8 h-8 text-gray-600" />
                      <span className="font-bold text-xl text-gray-700">ZACR Accredited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <Shield className="w-8 h-8 text-gray-600" />
                      <span className="font-bold text-xl text-gray-700">Secure DNS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <Globe className="w-8 h-8 text-gray-600" />
                      <span className="font-bold text-xl text-gray-700">Global Reach</span>
                  </div>
              </div>
          </div>
      </section>

      <CtaSection />
    </>
  );
};

export default DomainRegistrationPage;
