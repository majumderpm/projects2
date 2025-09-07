"use client";
import React, { useState } from "react";

const Contact = () => {
const features = [
    {
        icon: "/assets/images/location.gif",
        title: "Address",
        description:
            "F-2, RIICO Industrial Area, Bindayaka, Jaipur, Rajasthan 302012",
    },
    {
        icon: "/assets/images/call.gif",
        title: "Call / WhatsApp:",
        description:
            "+91-77038 47709",
    },
    {
        icon: "/assets/images/mail.gif",
        title: "Email",
        description:
            "velvu.in@gmail.co ",
        description2:
            "info@velvu.in",
    },
  
];

    return (
        <>

            <div id="map" style={{ height: "500px", background: "#eee" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4308961722872!2d75.6566558748953!3d26.921550959711688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d99db9d4413%3A0x13b37df7c283008!2sVelvu%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1757235036072!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav  mt-8 mb-5">
                <div className="container">
                    <ol className="breadcrumb d-flex justify-content-center align-items-center">
                        <li className="breadcrumb-item"><a href="/"><i class="fa-regular fa-house text-primary"></i></a></li>
                        <li className="breadcrumb-item active fw-medium" aria-current="page">Contact Us</li>
                    </ol>
                </div>
            </nav>


            <div>
                {/* Map Placeholder */}

                <div className="container contact-us-container">
                     <section className="feature-boxes-container py-12 mb-5">
                <div className="container mx-auto">
                    <div className="row">
                        {features.map((feature, index) => (
                            <div className='col-lg-4 col-sm-6' key={index}>
                                <div
                                    className="feature-box px-6 text-center  shadow-md rounded-2xl p-6 transition-transform hover:scale-105"
                                >
                                    <div className="feature-box-icon text-4xl mb-4 overflow-hidden">
                                        <i className={feature.icon}></i>
                                        <img
                                            src={feature.icon}/>
                                    </div>
                                    <div className="feature-box-content">
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <h5 className="text-lg text-gray-600">{feature.subtitle}</h5>
                                        <p className="text-gray-500 mt-2">{feature.description}</p>
                                        <p className="text-gray-500 mt-2">{feature.description2}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                    <div className="getTouch">
                        <div className="row mt-8 mb-8">

                            <div className="col-lg-8 mx-auto">
                                <h2 className="mt-6 mb-8 text-center">Get in touch</h2>
                                <div class="row">
                                    <div class="col-sm">
                                        <label for="exampleFormControlTextarea1" class="form-label">Title</label>
                                        <select id="inputState" class="form-select form-control">
                                            <option selected>Choose...</option>
                                            <option>Mr.</option>
                                            <option>Ms.</option>
                                            <option>Mrs.</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlTextarea1" class="form-label">First name</label>
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlTextarea1" class="form-label">Last name</label>
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleFormControlTextarea1" class="form-label">Company Name</label>
                                        <input type="text" class="form-control" placeholder="Company Name (Optional)" aria-label="Company Name" />
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                                        <input type="text" class="form-control" placeholder="Address" aria-label="Address" />
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleFormControlTextarea1" class="form-label">Postal Code</label>
                                        <input type="text" class="form-control" placeholder="Postal Code" aria-label="Postal Code" />
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleFormControlTextarea1" class="form-label">City</label>
                                        <input type="text" class="form-control" placeholder="City" aria-label="City" />
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleFormControlTextarea1" class="form-label">Country</label>
                                        <select id="inputState" class="form-select form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                                        <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleFormControlTextarea1" class="form-label">Phone Number</label>
                                        <input type="number" class="form-control" placeholder="Number" aria-label="Number" />
                                    </div>
                                    <div class="col-12">
                                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="custombtn2 mt-5">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Contact