"use client"
import React, { useState } from 'react';
import "./header.css";
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname();
    // helper function
    const isActive = (href) => pathname === href;
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <div>
            <header className="header">
                {/* Header Middle */}
                <div
                    className="header-middle sticky-header"
                // data-sticky-options='{"mobile": true}'
                >
                    <div className="container d-flex align-items-center">
                        <div className="header-left w-auto pl-0">
                            <button
                                className="mobile-menu-toggler text-primary mr-2"
                                type="button"
                                onClick={() => setMenuOpen(true)}
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <a href="demo4.html" className="logo">
                                <img
                                    src="assets/images/logo.jpg"
                                    width="111"
                                    height="44"
                                    alt="Porto Logo"
                                />
                            </a>
                        </div>

                        {/* Header Right */}
                        <div className="header-right w-lg-max">
                            {/* Search */}
                            <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
                                <a href="#" className="search-toggle" role="button">
                                    <i className="fa-solid fa-magnifying-glass"></i>

                                </a>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper">
                                        <input
                                            type="search"
                                            className="form-control"
                                            name="q"
                                            id="q"
                                            placeholder="Search..."
                                            required
                                        />
                                        <div className="select-custom">
                                            <select id="cat" name="cat">
                                                <option value="">All Categories</option>
                                                <option value="1">NVR</option>
                                                <option value="2">DVR</option>
                                                <option value="3">IP Camera</option>
                                                <option value="4">AHD Camera</option>
                                                <option value="5">SMPS and Adaptors</option>
                                                <option value="6">Storage Device</option>
                                                <option value="7">Cables</option>
                                                <option value="8">WiFi Camera</option>
                                                <option value="9">Network Devices</option>
                                                <option value="10">Biometric</option>
                                                <option value="11">Monitors</option>
                                                <option value="12">Smart Board</option>
                                                <option value="13">Computer Accessories</option>
                                            </select>
                                            {/* <i className="fa-solid fa-chevron-down downArrow"></i> */}
                                        </div>
                                        <button
                                            className="btn icon-magnifier p-0"
                                            title="search"
                                            type="submit"
                                        ></button>
                                    </div>
                                </form>
                            </div>

                            {/* Contact */}
                            <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                                <i className="fa-solid fa-phone"></i>
                                <h6>
                                    <span>Call us now</span>
                                    <a href="tel:917703847709" className="text-dark font1">
                                        +91-77038 47709
                                    </a>
                                </h6>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Header Bottom */}
                <div className="header-bottom sticky-header"
                >
                    <div className="container">
                        <nav className="main-nav w-100">
                            <ul className="menu">
                                <li className={isActive("/") ? "active" : ""}>
                                    <a href="/" >Home</a>
                                </li>


                                <li className={`drop_menu ${pathname.startsWith("/products") ? "active" : ""} ${isOpen ? "open" : ""
                                    }`}>
                                    <a href="#" className="menu-toggle"
                                        onClick={() => setIsOpen(!isOpen)}>products </a>
                                    {isOpen && (
                                        <ul className="submenu">
                                            <li><a href="/productDetails">NVR</a></li>
                                            <li><a href="/dvr">DVR</a></li>
                                            <li><a href="/ip-camera">IP Camera</a></li>
                                            <li><a href="/ahd-camera">AHD Camera</a></li>
                                            <li><a href="/smps-adaptors">SMPS and Adaptors</a></li>
                                            <li><a href="/storage-device">Storage Device</a></li>
                                            <li><a href="/cables">Cables</a></li>
                                            <li><a href="/wifi-camera">WiFi Camera</a></li>
                                            <li><a href="/network-devices">Network Devices</a></li>
                                            <li><a href="/biometric">Biometric</a></li>
                                            <li><a href="/monitors">Monitors</a></li>
                                            <li><a href="/smart-board">Smart Board</a></li>
                                            <li><a href="/computer-accessories">Computer Accessories</a></li>

                                        </ul>
                                    )}
                                </li>
                                <li className={isActive("/about") ? "active" : ""}>
                                    <a href="/about">About Us</a>
                                </li>
                                <li className={isActive("/contact") ? "active" : ""}>
                                    <a href="/contact" >Contact Us</a>
                                </li>
                                <li className={`float-right ms-3 `}>
                                    <a
                                        href="/"
                                        rel="noopener"
                                        className="pl-5"
                                        target="_blank"
                                    >
                                        Buy Porto!
                                    </a>
                                </li>
                                <li className={`float-right `}>
                                    <a href="#" className="pl-5">
                                        Special Offer!
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* mobile header */}
                <div className={`mobileHeder ${menuOpen ? "show" : ""}`} >
                    <div className="container">
                        <button className='border-0 bg-transparent closeBtn' onClick={() => setMenuOpen(false)}><i className="fa-solid fa-xmark"></i></button>
                        <nav className="main-nav w-100">
                            <ul className="menu">
                                <li className={isActive("/") ? "active" : ""}>
                                    <a href="/" >Home</a>
                                </li>


                                <li className={`drop_menu ${pathname.startsWith("/products") ? "active" : ""} ${isOpen ? "open" : ""
                                    }`}>
                                    <a href="#" className="menu-toggle"
                                        onClick={() => setIsOpen(!isOpen)}>products </a>
                                    {isOpen && (
                                        <ul className="submenu">
                                            <li><a href="/nvr">NVR</a></li>
                                            <li><a href="/dvr">DVR</a></li>
                                            <li><a href="/ip-camera">IP Camera</a></li>
                                            <li><a href="/ahd-camera">AHD Camera</a></li>
                                            <li><a href="/smps-adaptors">SMPS and Adaptors</a></li>
                                            <li><a href="/storage-device">Storage Device</a></li>
                                            <li><a href="/cables">Cables</a></li>
                                            <li><a href="/wifi-camera">WiFi Camera</a></li>
                                            <li><a href="/network-devices">Network Devices</a></li>
                                            <li><a href="/biometric">Biometric</a></li>
                                            <li><a href="/monitors">Monitors</a></li>
                                            <li><a href="/smart-board">Smart Board</a></li>
                                            <li><a href="/computer-accessories">Computer Accessories</a></li>

                                        </ul>
                                    )}
                                </li>
                                <li className={isActive("/about") ? "active" : ""}>
                                    <a href="/about">About Us</a>
                                </li>
                                <li className={isActive("/contact") ? "active" : ""}>
                                    <a href="/contact" >Contact Us</a>
                                </li>
                                <li className={`float-right ms-3 `}>
                                    <a
                                        href="/"
                                        rel="noopener"
                                        className="pl-5"
                                        target="_blank"
                                    >
                                        Buy Porto!
                                    </a>
                                </li>
                                <li className={`float-right `}>
                                    <a href="#" className="pl-5">
                                        Special Offer!
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header