"use client";
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-white">
                <div className="footer-middle py-10">
                    <div className="container">
                        <div className="row">
                            {/* Contact Info */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="contact-info">
                                        <li>
                                            <span className="contact-info-label">Address:</span>{" "}
                                            123 Street Name, City, England
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Phone:</span>{" "}
                                            <a href="tel:+917703847709">+91-7703847709</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Email:</span>{" "}
                                            <a href="mailto:velvu.in@gmail.com">velvu.in@gmail.com</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Working Hours:</span>{" "}
                                            Mon - Sun / 9:00 AM - 8:00 PM
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <a
                                            href="https://facebook.com"
                                            className="social-icon social-facebook"
                                            target="_blank"
                                            rel="noreferrer"
                                        ></a>
                                        <a
                                            href="https://instagram.com"
                                            className="social-icon social-instagram"
                                            target="_blank"
                                            rel="noreferrer"
                                        ></a>
                                        <a
                                            href="https://twitter.com"
                                            className="social-icon social-twitter"
                                            target="_blank"
                                            rel="noreferrer"
                                        ></a>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Service */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    <ul className="links">
                                        <li><a href="#">Help & FAQs</a></li>
                                        <li><a href="#">Order Tracking</a></li>
                                        <li><a href="#">Shipping & Delivery</a></li>
                                        <li><a href="#">About Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Popular Tags</h4>
                                    <div className="tagcloud">
                                        <a href="#">Bag</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothes</a>
                                        <a href="#">Sports</a>
                                        <a href="#">Blue</a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget-newsletter">
                                    <h4 className="widget-title">Subscribe Newsletter</h4>
                                    <p>
                                        Get all the latest information on events, sales and offers.
                                    </p>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            alert("Subscribed!");
                                        }}
                                    >
                                        <input
                                            type="email"
                                            className="form-control mb-2"
                                            placeholder="Email address"
                                            required
                                        />
                                        <button type="submit" className="btn btn-primary shadow-none">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom py-3">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">
                                © {new Date().getFullYear()} Velvu Technologies. All Rights
                                Reserved
                            </span>
                        </div>
                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <div className="payment-icons">
                                <span className="payment-icon visa"></span>
                                <span className="payment-icon paypal"></span>
                                <span className="payment-icon stripe"></span>
                                <span className="payment-icon verisign"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer