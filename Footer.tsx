
import React from 'react';
import { useNavigation } from './NavigationContext';
import { navStructure } from './servicesData';
import { Phone, Mail, Linkedin, Facebook, WhatsApp, XSocial, Smartphone, Youtube, MapPin } from './components/icons';
import { Separator } from './components/Separator';
import { Logo } from './components/Logo';

const Footer: React.FC = () => {
    const navigate = useNavigation();
    
    const servicesCategory = navStructure.find(item => item.path === '/services');
    const hostedPbx = navStructure.find(item => item.path === '/services/hosted-pbx');
    const callCenter = navStructure.find(item => item.path === '/services/call-center');
    const hostingCategory = navStructure.find(item => item.path === '/web-hosting');

    // Combine for footer display
    const footerServices = [
        ...(hostedPbx ? [hostedPbx] : []),
        ...(callCenter ? [callCenter] : []),
        ...(servicesCategory?.subServices || []),
        ...(hostingCategory ? [hostingCategory] : [])
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & About */}
                    <div className="space-y-6">
                        <button onClick={() => navigate('/')} aria-label="IPT One Home">
                            <Logo className="h-20" />
                        </button>
                        <p className="text-sm text-gray-400">
                            Leading provider of Hosted PBX, SIP Trunks, VoIP solutions, Connectivity and ICT Solutions in South Africa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/iptone.co.za" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-gray-400 hover:text-brand-green transition-colors"><Facebook className="h-6 w-6" /></a>
                            <a href="https://www.linkedin.com/company/ipt-one-telecoms" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="text-gray-400 hover:text-brand-green transition-colors"><Linkedin className="h-6 w-6" /></a>
                            <a href="https://x.com/IPTOneTelecoms" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="text-gray-400 hover:text-brand-green transition-colors"><XSocial className="h-5 w-5" /></a>
                            <a href="https://www.youtube.com/@IPTOneTelecoms" target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube" className="text-gray-400 hover:text-brand-green transition-colors"><Youtube className="h-6 w-6" /></a>
                            <a href="https://wa.me/27836000152" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="text-gray-400 hover:text-brand-green transition-colors"><WhatsApp className="h-6 w-6" /></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                        <ul className="mt-4 space-y-2">
                            {footerServices.map(service => (
                                <li key={service.path}><button onClick={() => navigate(service.path)} className="text-base text-gray-400 hover:text-brand-green transition-colors text-left">{service.name}</button></li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                             <li><button onClick={() => navigate('/partners')} className="text-base text-gray-400 hover:text-brand-green transition-colors">Partners</button></li>
                            <li><button onClick={() => navigate('/about')} className="text-base text-gray-400 hover:text-brand-green transition-colors">About</button></li>
                            <li><button onClick={() => navigate('/faq')} className="text-base text-gray-400 hover:text-brand-green transition-colors">FAQ</button></li>
                            <li><button onClick={() => navigate('/contact')} className="text-base text-gray-400 hover:text-brand-green transition-colors">Contact Us</button></li>
                            <li><button onClick={() => navigate('/privacy-policy')} className="text-base text-gray-400 hover:text-brand-green transition-colors">Privacy Policy</button></li>
                            <li><button onClick={() => navigate('/terms-and-conditions')} className="text-base text-gray-400 hover:text-brand-green transition-colors">Terms & Conditions</button></li>
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Get in Touch</h3>
                        <ul className="mt-4 space-y-4 text-gray-400">
                            <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" /> <div><p className="font-semibold text-gray-300 mb-1">Head Office</p><p>5th Floor</p><p>Bloukrans Building</p><p>Lynnwood Bridge</p><p>Pretoria, 0081</p><p>South Africa</p></div></li>
                            <li className="flex items-start"><Mail className="w-5 h-5 mr-3 mt-1 shrink-0" /> <a href="mailto:info@iptone.co.za" className="hover:text-brand-green transition-colors">info@iptone.co.za</a></li>
                            <li className="flex items-start"><Phone className="w-5 h-5 mr-3 mt-1 shrink-0" /> <a href="tel:+27120048444" className="hover:text-brand-green transition-colors">+27 12 004 8444</a></li>
                            <li className="flex items-start"><Phone className="w-5 h-5 mr-3 mt-1 shrink-0" /> <span>National: <a href="tel:0861995065" className="hover:text-brand-green transition-colors">086 199 5065</a></span></li>
                            <li className="flex items-start"><Smartphone className="w-5 h-5 mr-3 mt-1 shrink-0" /> <span>Mobile: <a href="tel:+27836000152" className="hover:text-brand-green transition-colors">+27 83 600 0152</a></span></li>
                            <li className="flex items-start"><WhatsApp className="w-5 h-5 mr-3 mt-1 shrink-0" /> <span>WhatsApp: <a href="https://wa.me/27836000152" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">+27 83 600 0152</a></span></li>
                        </ul>
                    </div>
                </div>
                
                <Separator className="my-8 bg-gray-700" />
                
                <div className="text-center">
                    <p className="text-base text-gray-400">&copy; 2024 IPT One Telecoms. All rights reserved.</p>
                    <p className="mt-2 text-sm text-gray-500">Designed and Maintained by <a href="https://www.website365.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Website365</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
