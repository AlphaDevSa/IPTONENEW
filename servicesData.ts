
import React from 'react';
import { Cloud, Server, Wifi, Globe, Users, Database, Tower, SimCard, Phone, CheckCircle, Zap, Signal, RefreshCw, Headset } from "./components/icons";

export interface NavItem {
    name: string;
    path: string;
    isCategory?: boolean;
    icon?: React.ReactNode;
    description?: string;
    content?: string;
    image?: string;
    subServices?: NavItem[];
}

export const connectivityCategory: NavItem = {
    name: 'Connectivity',
    path: '/connectivity',
    isCategory: true,
    icon: React.createElement(Wifi, { className: "w-8 h-8 text-brand-blue" }),
    description: 'Fibre, LTE & 5G connectivity solutions.',
    content: 'Business-grade internet access tailored to speed, coverage, and reliability needs.',
    subServices: [
        {
            name: 'Fibre Internet',
            path: '/connectivity/fiber-internet',
            icon: React.createElement(Wifi, { className: "w-6 h-6 text-brand-blue" }),
            description: 'Symmetrical fibre connectivity for homes, offices, and growing businesses.',
            subServices: [
                { name: 'Home Fibre', path: '/connectivity/fiber-internet/home' },
                { name: 'Business Fibre', path: '/connectivity/fiber-internet/business' },
                { name: 'Corporate Fibre', path: '/connectivity/fiber-internet/corporate' },
            ],
        },
        {
            name: 'LTE / 5G',
            path: '/connectivity/lte-5g',
            icon: React.createElement(Tower, { className: "w-6 h-6 text-brand-blue" }),
            description: 'Flexible wireless connectivity with fast setup and nationwide access.',
            subServices: [
                { name: 'Fixed LTE & 5G', path: '/connectivity/lte-5g/fixed' },
                { name: 'Mobile Data', path: '/connectivity/lte-5g/mobile' },
            ],
        },
    ]
};

export const navStructure: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Services',
        path: '/services',
        isCategory: true,
        icon: React.createElement(Cloud, { className: "w-8 h-8 text-brand-blue" }),
        description: "VoIP, SIP Trunks & more.",
        content: "A complete suite of telecommunication services to connect your team and customers.",
        subServices: [
            { 
                name: "SIP Trunks", 
                path: "/services/sip-trunks",
                icon: React.createElement(Server, { className: "w-6 h-6 text-brand-blue" }),
                description: "Connect your existing PBX to our powerful voice network.",
            },
            { 
                name: "VoIP Solutions", 
                path: "/services/voip-solutions",
                icon: React.createElement(Phone, { className: "w-6 h-6 text-brand-blue" }),
                description: "Harness the power of the internet for business communications.",
            },
            {
                name: "Connectivity",
                path: "/connectivity",
                icon: React.createElement(Wifi, { className: "w-6 h-6 text-brand-blue" }),
                description: "High-speed fibre internet, LTE and 5G connectivity for homes and businesses.",
            },
            { 
                name: "Landline Numbers", 
                path: "/services/landline-numbers",
                icon: React.createElement(Globe, { className: "w-6 h-6 text-brand-blue" }),
                description: "Establish a professional, local presence anywhere in South Africa.",
            },
            { 
                name: "Mobile CLI", 
                path: "/services/mobile-cli",
                icon: React.createElement(Signal, { className: "w-6 h-6 text-brand-blue" }),
                description: "Present recognised South African mobile numbers on outbound calls.",
            },
            {
                name: "Number Rotation",
                path: "/services/number-rotation",
                icon: React.createElement(RefreshCw, { className: "w-6 h-6 text-brand-blue" }),
                description: "MobiCaller and MobiCaller+ rotate CLIs and monitor spam reputation.",
            },
            {
                name: "Number Porting",
                path: "/services/number-porting",
                icon: React.createElement(Phone, { className: "w-6 h-6 text-brand-blue" }),
                description: "Keep your existing numbers when you switch to us.",
            },
        ]
    },
    {
        name: "Hosted PBX",
        path: "/services/hosted-pbx",
        isCategory: true,
        icon: React.createElement(Cloud, { className: "w-8 h-8 text-brand-blue" }),
        description: "Powerful, flexible, and scalable cloud-based phone systems.",
        content: "Choose the platform that best fits your business needs.",
        subServices: [
            { name: "VitalPBX", path: "/services/hosted-pbx/vitalpbx", image: "/images/vitalpbx.png" },
            { name: "Vodia", path: "/services/hosted-pbx/vodia", image: "/images/vodia.png" },
            { name: "UCX Hosted PBX", path: "/services/hosted-pbx/ucx" },
            { name: "Yeastar Hosted PBX", path: "/services/hosted-pbx/yeastar", image: "/images/yeastar.png" },
            { name: "Bicom PBX", path: "/services/hosted-pbx/bicom-pbx", image: "/images/bicom.png" },
            { name: "IPT Hosted Extensions", path: "/services/hosted-pbx/ipt-hosted-extensions", image: "/images/ipthostedextensions.png" },
        ]
    },
    {
        name: 'Call Center',
        path: '/services/call-center',
        isCategory: true,
        icon: React.createElement(Headset, { className: "w-8 h-8 text-brand-blue" }),
        description: "Contact centre platforms & solutions.",
        content: "Deliver faster, smarter customer conversations across every channel.",
        subServices: [
            {
                name: "Call Center Solutions",
                path: "/services/call-center-solutions",
                icon: React.createElement(Headset, { className: "w-6 h-6 text-brand-blue" }),
                description: "Empower your teams with our feature-rich call center platform.",
            },
            {
                name: "BPO and Outsourced Contact Centres",
                path: "/services/call-center/bpo",
                icon: React.createElement(Users, { className: "w-6 h-6 text-brand-blue" }),
                description: "Platform, mobile CLIs and CLI rotation for outsourced contact centres.",
            },
        ]
    },
    {
        name: 'Connectivity',
        path: '/connectivity',
        isCategory: true,
        icon: React.createElement(Wifi, { className: "w-8 h-8 text-brand-blue" }),
        description: 'Fibre, LTE & 5G connectivity solutions.',
        content: 'Business-grade internet access tailored to speed, coverage, and reliability needs.',
        subServices: connectivityCategory?.subServices || [],
    },
    {
        name: 'Partners',
        path: '/partners',
        isCategory: true,
        icon: React.createElement(Users, { className: "w-8 h-8 text-brand-blue" }),
        description: "Agent, Reseller & Wholesale Programs.",
        content: "Leverage our network and solutions to grow your business.",
        subServices: [
            { name: 'Agents', path: '/partners/agents' },
            { name: 'Resellers', path: '/partners/resellers' },
            { 
                name: 'Wholesale', 
                path: '/partners/wholesale',
                subServices: [
                    { name: 'VoIP Billing Platform', path: '/partners/wholesale/billing-platform' },
                    { name: 'Wholesale Voice Rates', path: '/partners/wholesale/voice-rates' },
                    { name: 'Vodia Multi Tenant PBX', path: '/partners/wholesale/vodia-multi-tenant' },
                    { name: 'VitalPBX Multi Tenant PBX', path: '/partners/wholesale/vitalpbx-multi-tenant' },
                    { name: 'Bicom Multi Tenant PBX', path: '/partners/wholesale/bicom-multi-tenant' }
                ]
            },
        ]
    },
    { name: 'Contact', path: '/contact' },
];

const getCategory = (path: string) => navStructure.find(item => item.path === path);

export const servicesCategory = getCategory('/services');
export const hostingCategory = getCategory('/web-hosting');
export const domainsCategory = getCategory('/web-hosting/domains');
export const hostedPbxCategory = getCategory('/services/hosted-pbx');
