
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from './NavigationContext';
import { navStructure, NavItem } from './servicesData';
import { Menu, X, ChevronDown, ChevronRight } from './components/icons';
import { Button } from './components/Button';
import { Logo } from './components/Logo';

interface HeaderProps {
    currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
    const [openDesktopSubMenu, setOpenDesktopSubMenu] = useState<string | null>(null);
    const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({});
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    
    const navigate = useNavigation();

    const handleMobileNavClose = () => {
        setIsMenuOpen(false);
        setOpenMobileMenus({});
    };

    const toggleDesktopMenu = (path: string) => {
        setOpenDesktopMenu(prev => {
            const newOpenMenu = prev === path ? null : path;
            if (newOpenMenu !== prev) {
                setOpenDesktopSubMenu(null); 
            }
            return newOpenMenu;
        });
    }

    const toggleDesktopSubMenu = (path: string) => {
        setOpenDesktopSubMenu(prev => (prev === path ? null : path));
    }
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenDesktopMenu(null);
                setOpenDesktopSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = (path: string) => {
        setOpenMobileMenus(prev => ({ ...prev, [path]: !prev[path] }));
    };
    
    const handleNavLinkClick = (path: string) => {
        navigate(path);
        setOpenDesktopMenu(null);
        setOpenDesktopSubMenu(null);
    };

    const handleMobileLinkClick = (path: string) => {
        navigate(path);
        handleMobileNavClose();
    };

    const renderMobileSubMenu = (items: NavItem[], level = 0) => (
        <div className={`pt-1 ${level > 0 ? `pl-3 ml-2` : ''}`}>
            {items.map(item => {
                const isSubItemActive = currentPath === item.path;
                const isSubCategoryActive = item.subServices && currentPath.startsWith(item.path);

                return (
                    <div key={item.path}>
                        {item.subServices ? (
                            <>
                               <button onClick={() => toggleMobileMenu(item.path)} className={`w-full flex justify-between items-center px-3 py-2 text-left rounded-md text-base font-medium hover:text-brand-blue hover:bg-gray-100 ${isSubCategoryActive ? 'text-brand-blue bg-blue-50' : 'text-gray-700'}`}>
                                   <span>- {item.name}</span>
                                   <ChevronDown className={`w-5 h-5 transition-transform ${openMobileMenus[item.path] ? 'rotate-180' : ''}`} />
                               </button>
                               {openMobileMenus[item.path] && (
                                <div className="pt-1 pl-4 border-l-2 border-gray-200 ml-2">
                                    <button onClick={() => handleMobileLinkClick(item.path)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-brand-blue hover:bg-gray-100 ${currentPath === item.path ? 'text-brand-blue bg-blue-100 font-semibold' : 'text-gray-700'}`}>
                                        -- Overview
                                    </button>
                                    {renderMobileSubMenu(item.subServices, level + 1)}
                                </div>
                               )}
                            </>
                        ) : (
                            <button onClick={() => handleMobileLinkClick(item.path)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-brand-blue hover:bg-gray-100 ${isSubItemActive ? 'text-brand-blue bg-blue-100 font-semibold' : 'text-gray-700'}`}>
                                {level > 0 ? `-- ${item.name}` : `- ${item.name}`}
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
    
    return (
        <header 
            ref={headerRef} 
            className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white shadow-md border-gray-200' 
                    : 'bg-white/80 backdrop-blur-md border-gray-200/50 shadow-sm'
            }`}
        >
            <nav className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    <button onClick={() => handleNavLinkClick('/')} className="cursor-pointer flex-shrink-0" aria-label="IPT One Home">
                        <Logo className="h-14 lg:h-16 w-auto" />
                    </button>
                    <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
                        {navStructure.map(item => {
                            const isCategoryActive = item.isCategory && currentPath.startsWith(item.path);
                            const isLinkActive = currentPath === item.path;

                            return item.isCategory ? (
                                <div key={item.path} className="relative">
                                    <button onClick={() => toggleDesktopMenu(item.path)} className={`inline-flex items-center text-xs xl:text-sm hover:text-brand-blue font-medium transition-colors px-1 py-2 ${isCategoryActive ? 'text-brand-blue' : 'text-gray-600'}`}>
                                        {item.name}
                                        <ChevronDown className={`w-3 h-3 ml-0.5 text-gray-500 transition-transform ${openDesktopMenu === item.path ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDesktopMenu === item.path && item.subServices && (
                                        <div className="absolute top-full left-0 mt-1 z-20 w-72 bg-white rounded-xl shadow-2xl border border-gray-200">
                                            <div className="p-2 text-left">
                                                <button onClick={() => handleNavLinkClick(item.path)} className={`block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors ${currentPath === item.path ? 'text-brand-blue font-semibold bg-blue-50' : 'font-semibold text-gray-800'}`}>
                                                    {item.name} Overview
                                                </button>
                                                {item.subServices.map(subItem => (
                                                    <div key={subItem.path} className="relative pr-2 text-left">
                                                         <button 
                                                            onClick={() => subItem.subServices ? toggleDesktopSubMenu(subItem.path) : handleNavLinkClick(subItem.path)}
                                                            className={`w-full flex items-center justify-between gap-2 px-4 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-brand-blue transition-colors text-left ${currentPath.startsWith(subItem.path) ? 'text-brand-blue bg-blue-50' : 'text-gray-700'}`}
                                                          >
                                                            <span className="text-left flex-1">{subItem.name}</span>
                                                            {subItem.subServices && <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${openDesktopSubMenu === subItem.path ? 'rotate-90' : ''}`} />}
                                                        </button>
                                                        {subItem.subServices && openDesktopSubMenu === subItem.path && (
                                                             <div className="absolute top-0 right-full mr-2 z-20 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 text-left">
                                                                <div className="p-2">
                                                                    <button onClick={() => handleNavLinkClick(subItem.path)} className={`block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors ${currentPath === subItem.path ? 'text-brand-blue font-semibold bg-blue-50' : 'font-semibold text-gray-800'}`}>
                                                                        {subItem.name} Overview
                                                                    </button>
                                                                     {subItem.subServices.map(grandChild => (
                                                                        <button key={grandChild.path} onClick={() => handleNavLinkClick(grandChild.path)} className={`block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-brand-blue transition-colors ${currentPath === grandChild.path ? 'text-brand-blue font-semibold bg-blue-50' : 'text-gray-700'}`}>
                                                                            {grandChild.name}
                                                                        </button>
                                                                     ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button key={item.path} onClick={() => handleNavLinkClick(item.path)} className={`text-xs xl:text-sm hover:text-brand-blue font-medium transition-colors whitespace-nowrap px-1 py-2 ${isLinkActive ? 'text-brand-blue font-semibold' : 'text-gray-600'}`}>{item.name}</button>
                            )
                        })}
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navStructure.map(item => {
                            const isCategoryActive = item.isCategory && currentPath.startsWith(item.path);
                            const isLinkActive = currentPath === item.path;

                            return item.isCategory ? (
                                <div key={item.path}>
                                    <button 
                                        onClick={() => toggleMobileMenu(item.path)} 
                                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:text-brand-blue hover:bg-gray-100 ${isCategoryActive ? 'text-brand-blue bg-blue-50' : 'text-gray-800'}`}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${openMobileMenus[item.path] ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openMobileMenus[item.path] && (
                                        <div className="pt-1 pl-4 border-l-2 border-gray-200 ml-2">
                                            <button onClick={() => handleMobileLinkClick(item.path)} className={`block w-full text-left px-3 py-2 rounded-md text-base hover:text-brand-blue hover:bg-gray-100 ${currentPath === item.path ? 'text-brand-blue bg-blue-100 font-semibold' : 'text-gray-800 font-medium'}`}>
                                               <strong>{item.name} Overview</strong>
                                            </button>
                                            {item.subServices && renderMobileSubMenu(item.subServices, 0)}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button key={item.path} onClick={() => handleMobileLinkClick(item.path)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-brand-blue hover:bg-gray-100 ${isLinkActive ? 'text-brand-blue bg-blue-100 font-semibold' : 'text-gray-800'}`}>
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
