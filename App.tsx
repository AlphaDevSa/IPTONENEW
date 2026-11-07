
import React, { useEffect, useCallback, useMemo } from "react";
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import HostedPBXPage from './HostedPBXPage';
import SIPTrunksPage from './SIPTrunksPage';
import VoIPSolutionsPage from './VoIPSolutionsPage';
import LandlineNumbersPage from './LandlineNumbersPage';
import MobileCLIPage from './MobileCLIPage';
import NumberRotationPage from './NumberRotationPage';
import CallCenterSolutionsPage from './CallCenterSolutionsPage';
import BpoContactCentresPage from './BpoContactCentresPage';
import CallCenterPage from './CallCenterPage';
import NumberPortingPage from './NumberPortingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import VitalPBXPage from "./VitalPBXPage";
import VodiaPage from "./VodiaPage";
import UCXPage from "./UCXPage";
import YeastarPBXPage from "./YeastarPBXPage";
import BicomPBXPage from "./BicomPBXPage";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import FloatingSocialShare from "./FloatingSocialShare";
import NotFoundPage from "./NotFoundPage";
import FAQPage, { faqData } from "./FAQPage";
import CookieConsentBanner from "./CookieConsentBanner";
import VoIPBillingPlatformPage from "./VoIPBillingPlatformPage";
import { NavigationProvider } from './NavigationContext';
import { navStructure, NavItem } from "./servicesData";
import Breadcrumbs from "./Breadcrumbs";
import PartnersPage from "./PartnersPage";
import AgentsPage from "./AgentsPage";
import ResellersPage from "./ResellersPage";
import WholesalePage from "./WholesalePage";
import ConnectivityPage from "./ConnectivityPage";
import FiberInternetPage from "./FiberInternetPage";
import LTE5GPage from "./LTE5GPage";
import DataSimPage from "./DataSimPage";
import FTTHPage from "./FTTHPage";
import FTTBPage from "./FTTBPage";
import CorporateFiberPage from "./CorporateFiberPage";
import MTNFixedLTEPage from "./MTNFixedLTEPage";
import MTNMobileLTEPage from "./MTNMobileLTEPage";
import MTNDataSimPage from "./MTNDataSimPage";
import TelkomDataSimPage from "./TelkomDataSimPage";
import TelkomOnePage from "./TelkomOnePage";
import VodacomLTEPage from "./VodacomLTEPage";
import VodiaMultiTenantPage from "./VodiaMultiTenantPage";
import VitalPBXMultiTenantPage from "./VitalPBXMultiTenantPage";
import BicomMultiTenantPage from "./BicomMultiTenantPage";
import WholesaleVoiceRatesPage from "./WholesaleVoiceRatesPage";
import IPTHostedExtensionsPage from "./IPTHostedExtensionsPage";
import LandlineLandingPage from "./LandlineLandingPage";
import * as analytics from './analytics';
import { initializeAffiliateTracking, saveAffiliateLead } from './affiliateTracking';
import { useLocation, useNavigate } from "react-router-dom";
import AffiliateDashboardPage from './AffiliateDashboardPage';

const pageMetadata: { [key: string]: { title: string; description: string; keywords: string; } } = {
  '/': {
    title: 'Business VoIP, Hosted PBX & Fibre South Africa | IPT One',
    description: 'Premier Business VoIP, Cloud PBX, and Uncapped Fibre solutions for South African organizations. 99.9% uptime and enterprise-grade connectivity.',
    keywords: "VoIP South Africa, Business Fibre, Cloud PBX, Hosted PBX, SIP Trunks, LTE Data, Web Hosting, Telecoms Provider, Business Internet, 087 Numbers, ICT Solutions",
  },
  '/about': {
    title: 'About IPT One | Leading Telecoms Provider in South Africa',
    description: 'We enable business growth through reliable connectivity. Learn about IPT One\'s mission to provide world-class Voice, Fibre & Cloud infrastructure in SA.',
    keywords: "About IPT One, Telecoms Company South Africa, ICT Partner, Business Communication, VoIP Provider, Connectivity Solutions, Local Support, Telephony Experts",
  },
  '/services': {
    title: 'Business ICT Services | VoIP, Fibre & Cloud Solutions SA | IPT One',
    description: "Explore our comprehensive technology solutions. From crystal-clear VoIP and high-speed Fibre to scalable Cloud Hosting for modern businesses in South Africa.",
    keywords: "ICT Services, Business Communication, VoIP Services, Internet Connectivity, Cloud Solutions, Managed Services, Telecoms Solutions, Business Fibre",
  },
  '/connectivity': {
    title: 'Business Connectivity | Fibre Internet, LTE & 5G | IPT One',
    description: 'Reliable Fibre Internet, LTE and 5G connectivity for South African homes and businesses. Fast, scalable, and expertly managed from start to finish.',
    keywords: 'Business Connectivity, Fibre Internet, LTE, 5G, Business Internet South Africa, Connectivity Solutions, Fibre Provider, LTE Data',
  },
  '/connectivity/fiber-internet': {
    title: 'Fibre Internet | Business & Home Connectivity | IPT One',
    description: 'High-speed fibre internet for homes, offices, and businesses. Enjoy low latency, symmetric upload/download speeds, and dependable connectivity.',
    keywords: 'Fibre Internet, Business Fibre, Home Fibre, ISP South Africa, Symmetrical Fibre, Fibre Provider',
  },
  '/connectivity/lte-5g': {
    title: 'LTE & 5G Internet | Flexible Mobile Connectivity | IPT One',
    description: 'Fast LTE and 5G connectivity for homes, offices, and mobile users. Ideal as a fibre alternative or backup solution.',
    keywords: 'LTE, 5G, Mobile Connectivity, Fibre Alternative, Wireless Internet, Business LTE, 5G provider SA',
  },
  '/connectivity/data-sim': {
    title: 'Mobile Data SIMs | LTE & 5G Connectivity | IPT One',
    description: 'Flexible mobile data plans and SIM solutions with MTN, Telkom and Vodacom coverage. Ideal for backup, remote work and business mobility.',
    keywords: 'Mobile Data SIM, LTE Data, 5G Data SIM, MTN Data, Telkom Data, Vodacom Data, Business Internet SIM',
  },
  '/connectivity/fiber-internet/home': {
    title: 'Home Fibre Internet | Fast Symmetrical Connectivity | IPT One',
    description: 'High-speed home fibre with dependable performance, low latency, and flexible packaging for modern homes and remote workers.',
    keywords: 'Home Fibre, Fibre Internet, Symmetrical Fibre, ISP South Africa, Fibre for Home, Residential Fibre',
  },
  '/connectivity/fiber-internet/business': {
    title: 'Business Fibre Internet | Reliable Office Connectivity | IPT One',
    description: 'Business fibre solutions designed for offices, work-from-home teams, and growing operations that need consistent speed and uptime.',
    keywords: 'Business Fibre, Office Internet, Fibre for Business, Reliable Connectivity, Corporate Internet',
  },
  '/connectivity/fiber-internet/corporate': {
    title: 'Corporate Fibre Connectivity | Scalable Internet for Enterprises | IPT One',
    description: 'Enterprise-grade fibre connectivity with scalable bandwidth, security and reliable support for business-critical operations.',
    keywords: 'Corporate Fibre, Enterprise Internet, Business Connectivity, Fibre for Enterprises, Scalable Internet',
  },
  '/connectivity/lte-5g/fixed': {
    title: 'Fixed LTE & 5G | Wireless Business Internet | IPT One',
    description: 'Fixed wireless LTE and 5G packages built for homes, offices and branch sites that need fast, hassle-free connectivity.',
    keywords: 'Fixed LTE, Fixed 5G, Wireless Internet, LTE Business Internet, 5G for Home Office',
  },
  '/connectivity/lte-5g/mobile': {
    title: 'Mobile Data & 5G Access | Flexible Connectivity | IPT One',
    description: 'Stay connected with mobile data plans and wireless connectivity for teams working remotely, on the move or outside fibre zones.',
    keywords: 'Mobile Data, 5G Data, LTE Data, Remote Connectivity, Cellular Internet, Wireless Access',
  },
  '/connectivity/lte-5g/mtn-fixed': {
    title: 'MTN Fixed LTE & 5G | Business Wireless Internet | IPT One',
    description: 'MTN fixed wireless connectivity for reliable internet access with simple setup and flexible business packages.',
    keywords: 'MTN Fixed LTE, MTN 5G, Wireless business internet, Fixed LTE South Africa',
  },
  '/connectivity/lte-5g/mtn-mobile': {
    title: 'MTN Mobile Data | LTE & 5G Connectivity | IPT One',
    description: 'Flexible MTN mobile data solutions for business continuity, remote work, and connectivity across multiple locations.',
    keywords: 'MTN Mobile Data, MTN LTE, MTN 5G, Mobile Business Internet',
  },
  '/connectivity/data-sim/mtn': {
    title: 'MTN Data SIM | Business Mobile Connectivity | IPT One',
    description: 'MTN data SIM packages for hybrid work, travel, backup internet and dependable mobile connectivity across South Africa.',
    keywords: 'MTN Data SIM, Mobile Data, MTN LTE, MTN 5G',
  },
  '/connectivity/lte-5g/telkom-data-sim': {
    title: 'Telkom Data SIM | Flexible LTE & 5G Access | IPT One',
    description: 'Telkom data SIM solutions for home, mobile and business connectivity with strong coverage and simple activation.',
    keywords: 'Telkom Data SIM, Telkom LTE, Telkom 5G, Business Mobile Data',
  },
  '/connectivity/lte-5g/telkom-one': {
    title: 'Telkom One | LTE & 5G Business Plans | IPT One',
    description: 'Telkom One packages designed for everyday connectivity, mobile internet, and reliable access without complex installation.',
    keywords: 'Telkom One, Telkom LTE, Telkom Data, Mobile Internet South Africa',
  },
  '/connectivity/lte-5g/vodacom': {
    title: 'Vodacom LTE & 5G | Business Internet Solutions | IPT One',
    description: 'Vodacom wireless connectivity for homes, offices and branches that need dependable internet with a strong national footprint.',
    keywords: 'Vodacom LTE, Vodacom 5G, Wireless Business Internet, Vodacom Data',
  },
  '/services/hosted-pbx': {
    title: 'Cloud Hosted PBX Systems for SA Businesses | IPT One',
    description: 'Scalable Cloud PBX solutions. Feature-rich VoIP phone systems designed for remote and hybrid teams in South Africa.',
    keywords: "Hosted PBX, Cloud Phone System, Virtual PBX, Business VoIP, Remote Work Phone, Unified Communications, Cloud Voice, Office Phone System, VoIP South Africa",
  },
  '/services/hosted-pbx/vitalpbx': {
    title: 'VitalPBX Unified Communications | Voice, Video & Chat | IPT One',
    description: 'Unified Communications made simple. VitalPBX integrates voice, video conferencing, chat, and file sharing into one powerful platform for modern teams.',
    keywords: "VitalPBX, Unified Communications, Video Conferencing, Business Chat, Collaboration Platform, UCaaS, VitalPBX South Africa, Omni-channel",
  },
  '/services/hosted-pbx/vodia': {
    title: 'Vodia PBX for MSPs | Multi-Tenant Cloud VoIP Solution | IPT One',
    description: 'Vodia PBX: The preferred multi-tenant VoIP solution for MSPs and Resellers. Robust, white-label ready, and seamless Microsoft Teams integration.',
    keywords: "Vodia PBX, Multi-Tenant PBX, MSP VoIP, Reseller PBX, Microsoft Teams Integration, White Label PBX, Teams Direct Routing, Vodia SA",
  },
  '/services/hosted-pbx/ucx': {
    title: 'UCX Hosted PBX | Unified Customer Experience | IPT One',
    description: 'UCX PBX: A powerful, all-in-one cloud communication platform designed for modern business interaction. Unified voice, video, and messaging.',
    keywords: "UCX PBX, Unified Communications, Customer Experience, Cloud PBX, Business VoIP, UCaaS, Hosted PBX",
  },
  '/services/hosted-pbx/yeastar': {
    title: 'Yeastar Hosted PBX | P-Series Cloud Edition | IPT One',
    description: 'Yeastar P-Series Cloud Edition. A converged system for voice, video, applications, and collaboration. Linkus UC clients included.',
    keywords: "Yeastar PBX, P-Series Cloud, Linkus, Cloud PBX, Business VoIP, Yeastar South Africa, Unified Communications",
  },
  '/services/hosted-pbx/bicom-pbx': {
    title: 'Bicom Systems PBXware | Professional Call Center & UC | IPT One',
    description: 'Bicom Systems PBXware: The gold standard for stability and features. Ideal for call centers, large enterprises, and government institutions in SA.',
    keywords: "Bicom Systems, PBXware, Enterprise UC, Call Center PBX, Professional VoIP, Bicom South Africa, GloCOM, Unified Comms",
  },
  '/services/hosted-pbx/ipt-hosted-extensions': {
    title: 'Hosted PBX Extensions | Scalable Per-User Voice Packages | IPT One',
    description: 'Flexible VoIP extension packages tailored to your team size. Pay per user with included features and competitive call rates. Instant setup.',
    keywords: "Hosted Extensions, Cloud Voice Packages, Scalable PBX, Business VoIP Extensions, Per User VoIP, Cloud Telephony Packages, VoIP Seats",
  },
  '/services/sip-trunks': {
    title: 'Business SIP Trunks | Wholesale VoIP Termination SA | IPT One',
    description: 'Connect your on-premise PBX to our carrier-grade network. Save up to 50% on calls with superior voice quality, reliability and redundancy.',
    keywords: "SIP Trunks, Business SIP, VoIP Trunking, IP Telephony, PBX Connectivity, Voice Over IP, Wholesale VoIP, Call Termination, SIP Provider SA",
  },
  '/services/voip-solutions': {
    title: 'Business VoIP Solutions | Modern Unified Communications | IPT One',
    description: 'Future-proof your business with advanced VoIP. Crystal-clear HD voice, seamless mobility, and unified tools for the modern hybrid workforce.',
    keywords: "Business VoIP, Enterprise Voice, Unified Communications, VoIP Solutions, Internet Calling, HD Voice, Corporate Telephony, Digital Voice",
  },
  '/services/landline-numbers': {
    title: '087 & Geographic Business Numbers | Virtual Landlines SA | IPT One',
    description: 'Get a professional business number (011, 021, 087) instantly. Answer calls on your mobile or laptop anywhere in South Africa.',
    keywords: "Virtual Landline, Business Number, 087 Number, 011 Number, 021 Number, VoIP Number, Digital Landline, Geographic Numbers, SA Phone Number",
  },
  '/services/mobile-cli': {
    title: 'Mobile CLI Solutions | SA Mobile Caller Line Identifiers | IPT One',
    description: 'Improve outbound contactability with South African mobile CLIs. Choose Vodacom 082/076, MTN 083 or network neutral 077 ranges at R49 per DID per month.',
    keywords: "Mobile CLI, Caller Line Identifier, Outbound CLI, SA Mobile Numbers, 083 Number, 082 Number, 077 Number, Outbound Caller ID, Contactability, Answer Rates",
  },
  '/services/number-rotation': {
    title: 'MobiCaller Number Rotation | CLI Rotation & Spam Checks | IPT One',
    description: 'Rotate outbound caller IDs at configurable intervals and check spam reputation against Truecaller. MobiCaller and MobiCaller+ keep your DID pool productive.',
    keywords: "MobiCaller, Number Rotation, CLI Rotation, Spam Checks, Truecaller, DID Management, Caller ID Reputation, Outbound Numbers, Preferred Caller Name, Geo DIDs, Mobile DIDs",
  },
  '/services/call-center': {
    title: 'Call Center Solutions | Omnichannel Contact Centre Software | IPT One',
    description: 'Smart routing, live wallboards, analytics and CRM integrations. IPT One delivers cloud contact centre solutions for South African teams.',
    keywords: "Call Center Solutions, Contact Centre Software, Omnichannel Contact Center, Call Center South Africa, Smart Routing, Live Wallboards, Call Recording, CRM Integration, Cloud Contact Centre",
  },
  '/services/call-center/bpo': {
    title: 'BPO & Outsourced Contact Centre Solutions | IPT One',
    description: 'Contact centre platforms, mobile CLIs and CLI rotation for BPOs and outsourced contact centres operating in South Africa.',
    keywords: "BPO Solutions, Outsourced Contact Centre, Contact Centre South Africa, BPO Telecoms, Outbound Contact Centre, Mobile CLI, Number Rotation, Call Centre Platform",
  },
  '/landline-deal': {
    title: 'Get a Business Landline on Your Mobile | R49pm | IPT One',
    description: 'Limited Offer: Get a 011, 021 or 087 landline number on your mobile phone. No contracts. Instant setup. Sign up now.',
    keywords: "Landline on Mobile, Business Number Special, Cheap Landline, 087 Number Deal, VoIP Special",
  },
  '/services/number-porting': {
    title: 'Number Porting Services | Keep Your Business Number | IPT One',
    description: 'Switching to IPT One is easy. We handle the full Number Porting (GNP) process so you keep your existing business telephone numbers.',
    keywords: "Number Porting, Port Phone Number, GNP, LNP, Keep My Number, Switch Telecoms, Number Migration, Business Number Porting, Porting SA",
  },
  '/services/call-center-solutions': {
    title: 'Cloud Call Center Software | Omnichannel Contact Center | IPT One',
    description: 'Empower your agents with our Cloud Contact Center software. Features include predictive dialers, skills-based routing, and real-time analytics.',
    keywords: "Call Center Software, Contact Center Solution, Omnichannel Support, Predictive Dialer, Call Center Analytics, Cloud Contact Center, Call Center VoIP",
  },
  '/partners': {
    title: 'Telecoms Partner Programs | Reseller, Agent & Wholesale | IPT One',
    description: 'Partner with IPT One to grow revenue. Join our Agent referral program, become a White-Label Reseller, or access Wholesale carrier rates.',
    keywords: "Telecoms Partner, Reseller Program, Agent Program, Wholesale Telecoms, Business Partnership, White Label Telecoms, Wholesale VoIP, ICT Partner",
  },
  '/partners/agents': {
    title: 'Telecoms Agent Program | Earn Recurring Commissions | IPT One',
    description: 'Become an IPT One Agent and build passive income. Refer clients for VoIP, Fibre, and Hosting to earn recurring monthly commissions.',
    keywords: "Telecoms Agent, Referral Program, Commission Based, Sales Agent, Partner Program, Affiliate Program, Earn Passive Income",
  },
  '/partners/resellers': {
    title: 'White Label Telecoms Reseller | Start Your Own VoIP Business | IPT One',
    description: 'Launch your own VoIP brand with our turnkey Reseller Program. We provide platform, billing, and support; you own the customer relationship.',
    keywords: "VoIP Reseller, White Label Telecoms, Reseller Business, Telecoms Franchise, Start VoIP Business, White Label Solution, MSP Program",
  },
  '/partners/wholesale': {
    title: 'Wholesale VoIP & Connectivity | Carrier Services SA | IPT One',
    description: 'Carrier-grade wholesale Voice & Data for ISPs. Access premium voice termination, white-label platforms, and bulk data at wholesale rates.',
    keywords: "Wholesale VoIP, Carrier Services, Wholesale Data, Voice Termination, ISP Services, Wholesale Call Minutes, Voice Servers, Telecoms Wholesale",
  },
  '/partners/wholesale/billing-platform': {
    title: 'VoIP Billing Platform & Softswitch | Wholesale VoIP Management | IPT One',
    description: 'Advanced VoIP Billing Platform and Softswitch. Real-time rating, multi-tenant management, and automated billing for service providers.',
    keywords: "VoIP Billing, Softswitch, Telecom Billing Software, Wholesale VoIP Platform, VoIP Management, Billing System, PortaOne, Class 5 Switch",
  },
  '/partners/wholesale/voice-rates': {
    title: 'Wholesale Voice Rates | Bulk VoIP Termination South Africa | IPT One',
    description: 'Maximize margins with competitive Wholesale Voice Rates. Premium CLI routes, high ASR, and volume-based discounts for carriers.',
    keywords: "Wholesale Voice Rates, VoIP Termination, Bulk Voice, CLI Routes, Call Center Rates, Wholesale Call Minutes, ASR, Voice Termination",
  },
  '/partners/wholesale/vodia-multi-tenant': {
    title: 'Vodia Multi-Tenant PBX | Wholesale Cloud Voice Platform | IPT One',
    description: 'Vodia Multi-Tenant PBX for Service Providers. Scalable, cloud-native platform to offer robust hosted PBX services under your brand.',
    keywords: "Vodia Multi-Tenant, Wholesale PBX, Cloud Voice Platform, MSP PBX, Service Provider VoIP, Vodia PBX, White Label Hosted PBX",
  },
  '/partners/wholesale/vitalpbx-multi-tenant': {
    title: 'VitalPBX Carrier Edition | Wholesale Multi-Tenant Switch | IPT One',
    description: 'VitalPBX Multi-Tenant Carrier Edition. Powerful softswitch with integrated billing and routing for wholesale VoIP providers and carriers.',
    keywords: "VitalPBX Multi-Tenant, Carrier PBX, Wholesale UC, Multi-Tenant Switch, VoIP Carrier, VitalPBX, Sonata Switch, Unified Communications",
  },
  '/partners/wholesale/bicom-multi-tenant': {
    title: 'Bicom PBXware Multi-Tenant | White Label UC Platform | IPT One',
    description: 'Bicom PBXware Multi-Tenant: The industry standard for hosted VoIP. Complete white-label UC solution for Telecoms Service Providers.',
    keywords: "Bicom Multi-Tenant, PBXware, White Label UC, ITSP Platform, Hosted VoIP Platform, Bicom Systems, Softswitch, GloCOM Branding",
  },
  '/contact': {
    title: 'Contact IPT One | Sales & Support for Business Telecoms',
    description: 'Contact IPT One for sales & support. Get custom quotes, technical help, or expert advice on VoIP & connectivity solutions 24/7.',
    keywords: "Contact IPT One, Telecoms Support, Sales Inquiry, Customer Service, Tech Support, VoIP Help, Fibre Support, Contact Us",
  },
  '/faq': {
    title: 'Telecoms FAQ | Support for VoIP, Fibre & Hosting | IPT One',
    description: 'IPT One FAQ: Answers to common questions about VoIP quality, Number Porting, Fibre installation, and Web Hosting. Expert advice.',
    keywords: "Telecoms FAQ, VoIP Questions, Internet Help, Hosting Support, Frequently Asked Questions, Knowledge Base, Support Center",
  },
  '/admin/affiliate-dashboard': {
    title: 'Affiliate Dashboard | IPT One',
    description: 'Review affiliate and referral tracking performance for IPT One campaigns, agents and partner sources.',
    keywords: 'affiliate dashboard, referral tracking, partner tracking, IPT One, campaign analytics',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Data Protection & POPIA Compliance | IPT One',
    description: 'Read our Privacy Policy. We are committed to protecting your personal information and ensuring POPIA compliance.',
    keywords: "Privacy Policy, POPIA, Data Protection, Personal Information, Terms of Service, GDPR Compliance, Legal",
  },
  '/terms-and-conditions': {
    title: 'General Terms and Conditions | Service Agreement | IPT One',
    description: 'Review IPT One\'s Terms & Conditions. Understand your rights and obligations regarding the use of our services.',
    keywords: "Terms and Conditions, Service Agreement, Legal Terms, Customer Rights, Telecoms Contract, Acceptable Use Policy, SLA",
  },
  '404': {
    title: '404 - Page Not Found | IPT One Telecoms',
    description: '404 - Page Not Found. Return to IPT One to explore reliable Business VoIP, Hosted PBX & Connectivity solutions.',
    keywords: "404 Error, Page Not Found, Broken Link, IPT One Telecoms, Error Page",
  },
};

const routeComponents: { [key: string]: React.FC } = {
  '/': HomePage,
  '/services': ServicesPage,
  '/connectivity': ConnectivityPage,
  '/connectivity/fiber-internet': FiberInternetPage,
  '/connectivity/fiber-internet/home': FTTHPage,
  '/connectivity/fiber-internet/business': FTTBPage,
  '/connectivity/fiber-internet/corporate': CorporateFiberPage,
  '/connectivity/lte-5g': LTE5GPage,
  '/connectivity/lte-5g/fixed': MTNFixedLTEPage,
  '/connectivity/lte-5g/mobile': MTNMobileLTEPage,
  '/connectivity/data-sim': DataSimPage,
  '/connectivity/data-sim/mtn': MTNDataSimPage,
  '/connectivity/lte-5g/mtn-fixed': MTNFixedLTEPage,
  '/connectivity/lte-5g/mtn-mobile': MTNMobileLTEPage,
  '/connectivity/lte-5g/telkom-data-sim': TelkomDataSimPage,
  '/connectivity/lte-5g/telkom-one': TelkomOnePage,
  '/connectivity/lte-5g/vodacom': VodacomLTEPage,
  '/services/hosted-pbx': HostedPBXPage,
  '/services/sip-trunks': SIPTrunksPage,
  '/services/voip-solutions': VoIPSolutionsPage,
  '/services/landline-numbers': LandlineNumbersPage,
  '/services/mobile-cli': MobileCLIPage,
  '/services/number-rotation': NumberRotationPage,
  '/services/call-center': CallCenterSolutionsPage,
  '/services/call-center/bpo': BpoContactCentresPage,
  '/landline-deal': LandlineLandingPage,
  '/services/number-porting': NumberPortingPage,
  '/partners/wholesale/billing-platform': VoIPBillingPlatformPage,
  '/partners/wholesale/voice-rates': WholesaleVoiceRatesPage,
  '/partners/wholesale/vodia-multi-tenant': VodiaMultiTenantPage,
  '/partners/wholesale/vitalpbx-multi-tenant': VitalPBXMultiTenantPage,
  '/partners/wholesale/bicom-multi-tenant': BicomMultiTenantPage,
  '/services/call-center-solutions': CallCenterPage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPolicyPage,
  '/terms-and-conditions': TermsAndConditionsPage,
  '/services/hosted-pbx/vitalpbx': VitalPBXPage,
  '/services/hosted-pbx/vodia': VodiaPage,
  '/services/hosted-pbx/ucx': UCXPage,
  '/services/hosted-pbx/yeastar': YeastarPBXPage,
  '/services/hosted-pbx/bicom-pbx': BicomPBXPage,
  '/services/hosted-pbx/ipt-hosted-extensions': IPTHostedExtensionsPage,
  '/faq': FAQPage,
  '/partners': PartnersPage,
  '/partners/agents': AgentsPage,
  '/partners/resellers': ResellersPage,
  '/partners/wholesale': WholesalePage,
  '/admin/affiliate-dashboard': AffiliateDashboardPage,
};

const updateSeoTags = (metadata: { title: string; description: string; keywords: string; }, path: string) => {
    document.title = metadata.title;
    const origin = 'https://iptone.co.za';
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const fullUrl = origin + normalizedPath;
    const socialImageUrl = 'https://iptone.co.za/ipt-one-og-image.jpg';
    const socialImageAlt = 'IPT One Telecoms - Business VoIP, Hosted PBX and Fibre in South Africa';

    const setAttr = (selector: string, attr: string, value: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute(attr, value);
            return;
        }

        const created = document.createElement('meta');
        if (selector.startsWith('meta[property="')) {
            const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
            if (prop) created.setAttribute('property', prop);
        } else if (selector.startsWith('meta[name="')) {
            const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
            if (name) created.setAttribute('name', name);
        }
        created.setAttribute(attr, value);
        document.head.appendChild(created);
    };

    setAttr('meta[name="description"]', 'content', metadata.description);
    setAttr('meta[name="keywords"]', 'content', metadata.keywords);
    setAttr('#canonical-link', 'href', fullUrl);
    setAttr('#og-title', 'content', metadata.title);
    setAttr('#og-description', 'content', metadata.description);
    setAttr('#og-url', 'content', fullUrl);
    setAttr('meta[property="og:image"]', 'content', socialImageUrl);
    setAttr('meta[property="og:image:secure_url"]', 'content', socialImageUrl);
    setAttr('meta[property="og:image:alt"]', 'content', socialImageAlt);
    setAttr('meta[property="og:image:type"]', 'content', 'image/jpeg');
    setAttr('meta[property="og:image:width"]', 'content', '1200');
    setAttr('meta[property="og:image:height"]', 'content', '630');
    setAttr('#twitter-title', 'content', metadata.title);
    setAttr('#twitter-description', 'content', metadata.description);
    setAttr('#twitter-url', 'content', fullUrl);
    setAttr('meta[name="twitter:image"]', 'content', socialImageUrl);
    setAttr('meta[name="twitter:image:alt"]', 'content', socialImageAlt);
    setAttr('meta[property="twitter:image"]', 'content', socialImageUrl);
    setAttr('meta[property="twitter:image:alt"]', 'content', socialImageAlt);
    
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'index, follow');
};

const SERVICE_AREA_SERVED = [
    { "@type": "Country", "name": "South Africa" },
    { "@type": "City", "name": "Pretoria" },
    { "@type": "City", "name": "Johannesburg" },
    { "@type": "City", "name": "Cape Town" },
    { "@type": "City", "name": "Durban" },
    { "@type": "City", "name": "Gqeberha" },
    { "@type": "City", "name": "East London" },
    { "@type": "City", "name": "George" },
    { "@type": "City", "name": "Bloemfontein" },
    { "@type": "City", "name": "Nelspruit" },
    { "@type": "City", "name": "Polokwane" }
];

const updateStructuredData = (path: string, trail: { name: string; path: string }[]) => {
    const scriptId = 'page-specific-schema';
    document.getElementById(scriptId)?.remove();
    
    const metadata = pageMetadata[path] || pageMetadata['/'];
    if (!metadata) return;

    const origin = 'https://iptone.co.za';
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const fullUrl = origin + normalizedPath;
    const serviceName = metadata.title.split('|')[0].trim();
    const schemas = [];

    if (trail && trail.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${fullUrl}#breadcrumb`,
            "itemListElement": trail.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": origin + crumb.path
            }))
        });
    }

    if (path === '/faq') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.flatMap(category => 
                category.questions.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            )
        });
    } else if (path.startsWith('/services/') || path.startsWith('/partners/')) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${fullUrl}#service`,
            "name": serviceName,
            "serviceType": serviceName,
            "description": metadata.description,
            "url": fullUrl,
            "provider": {
                "@type": "Organization",
                "@id": "https://iptone.co.za/#organization",
                "name": "IPT One Telecoms",
                "url": "https://iptone.co.za"
            },
            "areaServed": SERVICE_AREA_SERVED,
            "audience": { "@type": "BusinessAudience", "audienceType": "Businesses in South Africa" },
            "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": fullUrl,
                "servicePhone": {
                    "@type": "ContactPoint",
                    "telephone": "+27-12-004-8444",
                    "contactType": "sales"
                }
            },
            "termsOfService": "https://iptone.co.za/terms-and-conditions"
        });
    } else {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${fullUrl}#webpage`,
            "url": fullUrl,
            "name": metadata.title,
            "description": metadata.description,
            "inLanguage": "en-ZA",
            "isPartOf": { "@id": "https://iptone.co.za/#website" },
            "publisher": { "@id": "https://iptone.co.za/#organization" }
        });
    }
    
    if(schemas.length > 0) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemas
      });
      document.head.appendChild(script);
    }
}

export default function App() {
  const location = useLocation();
  const routerNavigate = useNavigate();
  const currentPath = location.pathname || '/';

  const pathMap = useMemo(() => {
      const map = new Map<string, string>();
      const traverse = (items: NavItem[], basePath = '', baseName = '') => {
          items.forEach(item => {
              map.set(item.path, item.name);
              if (item.subServices) traverse(item.subServices, item.path, item.name);
          });
      };
      traverse(navStructure);
      map.set('/about', 'About');
      map.set('/contact', 'Contact');
      map.set('/admin/affiliate-dashboard', 'Affiliate Dashboard');
      map.set('/privacy-policy', 'Privacy Policy');
      map.set('/terms-and-conditions', 'Terms and Conditions');
      map.set('/faq', 'FAQ');
      return map;
  }, []);

  const generateBreadcrumbTrail = useCallback((path: string) => {
      if (path === '/') return [];
      const homeCrumb = { name: 'Home', path: '/' };
      const trail = [homeCrumb];
      const segments = path.split('/').filter(Boolean);
      let currentPath = '';

      for (const segment of segments) {
          currentPath += `/${segment}`;
          const name = pathMap.get(currentPath);
          if (name) {
              trail.push({ name, path: currentPath });
          }
      }
      return trail;
  }, [pathMap]);

  const navigate = useCallback((path: string) => {
    routerNavigate(path);
    window.scrollTo(0, 0);
  }, [routerNavigate]);

  useEffect(() => {
    const affiliate = initializeAffiliateTracking(location.search);
    if (affiliate) {
      analytics.event({
        action: 'affiliate_visit',
        category: 'Affiliate',
        label: affiliate.source,
      });
      saveAffiliateLead({
        type: 'visit',
        source: affiliate.source,
        ref: affiliate.ref,
        affiliate: affiliate.affiliate,
        agent: affiliate.agent,
        partner: affiliate.partner,
        campaign: affiliate.campaign,
        page: location.pathname,
        timestamp: Date.now(),
      });
    }

    const isNotFound = !routeComponents[currentPath];
    const metadataKey = isNotFound ? '404' : currentPath;
    const metadata = pageMetadata[metadataKey] || pageMetadata['/'];
    const breadcrumbTrail = generateBreadcrumbTrail(currentPath);
    
    updateSeoTags(metadata, currentPath);
    updateStructuredData(currentPath, breadcrumbTrail);
    analytics.pageview(currentPath);

    return () => {
      document.getElementById('page-specific-schema')?.remove();
    }
  }, [currentPath, generateBreadcrumbTrail, location.search]);

  const PageComponent = routeComponents[currentPath] || NotFoundPage;
  const breadcrumbTrail = generateBreadcrumbTrail(currentPath);
  const isLandingPage = currentPath === '/landline-deal';

  return (
    <NavigationProvider value={navigate}>
      <div className={`bg-gray-50 min-h-screen font-sans text-gray-800 ${isLandingPage ? '' : 'pt-24'}`}>
          {!isLandingPage && <Header currentPath={currentPath} />}
          <main>
              {currentPath !== '/' && !isLandingPage && breadcrumbTrail.length > 0 && (
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Breadcrumbs trail={breadcrumbTrail} />
                    </div>
                </div>
              )}
              <PageComponent key={currentPath} />
          </main>
          {!isLandingPage && <Footer />}
          <FloatingWhatsAppButton />
          <FloatingSocialShare />
          <CookieConsentBanner />
      </div>
    </NavigationProvider>
  );
}
