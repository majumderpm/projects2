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
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                <div className="widget">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="contact-info">
                                        <li className='me-5'>
                                            <span className="contact-info-label">Address:</span>{" "}
                                            F-2, RIICO Industrial Area, Bindayaka,
                                            Jaipur, Rajasthan 302012
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Phone:</span>{" "}
                                            <a href="tel:+917703847709">+91-77038 47709</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Email:</span>{" "}
                                            <a href="mailto:velvu.in@gmail.com">velvu.in@gmail.com</a>
                                        </li>

                                    </ul>
                                    <div className="social-icons">
                                        <a
                                            href="https://www.facebook.com/velvutechnologies"
                                            className="social-icon social-facebook"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><i class="fa-brands fa-facebook-f"></i></a>
                                        <a
                                            href="https://www.linkedin.com/company/velvu/"
                                            className="social-icon social-linkedin"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a
                                            href="https://www.instagram.com/velvutechnologies/"
                                            className="social-icon social-instagram"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><i class="fa-brands fa-instagram"></i></a>
                                        <a
                                            href="youtube.com/@Velvutechnologies/"
                                            className="social-icon social-gplus"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><i class="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Service */}
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>
                                    <ul className="links">
                                        <li><a href="#">About Us </a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Download</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Customer Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 d-flex gap-5 flex_wrap">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Link</h4>
                                    <ul className="links">
                                        <li><a href="#">Photo Gallery </a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Career</a></li>
                                    </ul>
                                </div>
                                <div className="widget ms-8">
                                    <h4 className="widget-title">Our Policies</h4>
                                    <ul className="links">
                                        <li><a href="#">Contact  </a></li>
                                        <li><a href="#">Shipping Policy</a></li>
                                        <li><a href="#">Privacy Policy </a></li>
                                        <li><a href="#">Disclaimer</a></li>
                                        <li><a href="#">Velvu Warranty Policy</a></li>
                                    </ul>
                                </div>
                            </div>


                            {/* Popular Tags */}
                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Our Policies</h4>
                                    <div className="tagcloud">
                                        <a href="#">Bag</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothes</a>
                                        <a href="#">Sports</a>
                                        <a href="#">Blue</a>
                                    </div>
                                </div>
                            </div> */}

                            {/* Newsletter */}
                            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
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
                                <div className="footer-right ml-auto mt-1 mt-sm-0">
                                    <div className="payment-icons d-flex align-items-center gap-3 flex-wrap">
                                        <img src="assets/images/iphone-app.svg" />
                                        <img src="assets/images/android-app.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom py-3">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="footer-left">
                            <span className="footer-copyright">
                                © {new Date().getFullYear()} Velvu Technologies Private Limited. All Rights
                                Reserved
                            </span>
                        </div>
                        <ul className="links d-flex gap-5">
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer