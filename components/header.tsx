'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { basePath } from '../utils/config';
import Link from 'next/link';

const navItems = [
    { name: "Home", href: `${basePath}` },
    { name: "About Us", href: `${basePath}/about` },
    {
        name: "Services",
        items: [
            {
                name: "New Applications",
                items: [
                    { name: "New Passport (India/Canada)", href: `${basePath}` },
                    { name: "Passport Renewal (India/Canada)", href: `${basePath}` },
                    { name: "PCC (Middle-East/India/Canada)", href: `${basePath}` },
                    { name: "OCI Applications", href: `${basePath}` },
                    { name: "Surrender Certificate", href: `${basePath}` },
                    { name: "PR Card Renewal", href: `${basePath}` },
                    { name: "Visitor Visa Applications", href: `${basePath}` },
                    { name: "Driving Extract", href: `${basePath}` },
                ],
            },
            {
                name: "Translation Services",
                items: [
                    { name: "Documents", href: `${basePath}/translationServices` },
                    { name: "Whatsapp Chat", href: `${basePath}` },

                ],
            },
            {
                name: "Notary Services",
                items: [
                    { name: "Affidavits", href: `${basePath}` },
                    { name: "Document Notarization", href: `${basePath}` },

                ],
            },
            {
                name: "Power of Attorney",
                items: [
                    { name: "General POA", href: `${basePath}` },
                    { name: "Specific POA", href: `${basePath}` },

                ],
            },
            {
                name: "Run Away Marriges",
                items: [
                    { name: "In Middle-east", href: `${basePath}` },

                ],
            },
            {
                name: "ILETS Training",
                href: `${basePath}/about`,
            },
        ],
    },

    { name: "Blogs", href: `${basePath}` },
    { name: "Testimonials", href: `${basePath}` },
    { name: "Contact Us", href: `${basePath}/contacts` },
];

const NavLink = ({ item, depth = 0, isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const linkClasses = `block px-4 py-2 text-base text-white hover:bg-gray-700 hover:text-gray-100 rounded `; // Rounded hover effect
    const buttonClasses = `flex items-center justify-between w-full px-4 py-2 text-base text-white hover:bg-gray-700 hover:text-gray-100 rounded`; // Rounded buttons for parent menu

    // Dropdown classes for widescreen
    const dropdownClasses = depth === 0
        ? 'absolute left-0 mt-0 w-max z-50 border-4 border-custom-bg-light rounded'
        : 'absolute left-full w-max  top-0 mt-0 w-48 z-50 ml-1.5 border-4 border-custom-bg-light rounded '; // Rounded and bordered dropdown for submenus

    // Apply custom background for both 1st and 2nd level by default
    const dropdownBgClasses = depth <= 1
        ? 'bg-custom-bg'
        : 'bg-custom-bg';

    // Mobile behavior: Expand submenus downwards with full width
    const mobileDropdownClasses = isMobile
        ? `w-full bg-grey-800 ${isOpen ? 'block' : 'hidden'} border-2 border-custom-bg-light rounded  ` // Rounded and bordered dropdowns in mobile view
        : `${dropdownClasses} ${dropdownBgClasses}`;

    if (item.href) {
        return (
            <a href={item.href} className={linkClasses}>
                {item.name}
            </a>
        );
    }

    return (
        <div ref={ref} className="relative">
            <button onClick={handleToggle} className={buttonClasses}>
                {item.name}
                {item.items && (depth === 0 ? <ChevronDown className="ml-1 h-4 w-4" /> : <ChevronRight className="ml-1 h-4 w-4" />)}
            </button>
            {isOpen && item.items && (
                <div className={mobileDropdownClasses}>
                    {item.items.map((subItem) => (
                        <NavLink key={subItem.name} item={subItem} depth={depth + 1} isMobile={isMobile} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-custom-bg sticky top-0 z-50 md:flex md:justify-center md:items-center text-sm font-medium">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center space-x-2 mb-2 md:mb-0 md:mr-4 ">
                                <img src={`${basePath}/logo.png`} alt="Logo" className="h-14 w-auto" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <NavLink key={item.name} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-800 ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            {isOpen && (
                <div className="md:hidden z-50">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <NavLink key={item.name} item={item} isMobile={true} />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
