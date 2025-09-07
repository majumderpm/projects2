import React from 'react'

const features = [
    {
        icon: "/assets/images/diagram.gif",
        title: "40,500+ Trusted Users",
        description:
            "Securing Lives with Trust and Reliability.",
    },
    {
        icon: "/assets/images/medal-lacrosse.gif",
        title: "5+ Years of Excellence",
        description:
            "Over Half a Decade of Quality Surveillance Solutions.",
    },
    {
        icon: "/assets/images/premium-quality.gif",
        title: "50+ Quality Checks",
        description:
            "Exceptional Quality Control for Unbeatable Outcomes.",
    },
    {
        icon: "/assets/images/helpdesk.gif",
        title: "Toll-Free Support",
        description:
            "Seamless Assistance, Just a Call Away.",
    },
];

const Feature = () => {
    return (
        <>
            <section className="feature-boxes-container py-12 mb-5">
                <div className="container mx-auto">
                    <div className="row">
                        {features.map((feature, index) => (
                            <div className='col-lg-3 col-sm-6' key={index}>
                                <div
                                    className="feature-box px-6 text-center  shadow-md rounded-2xl p-6 transition-transform hover:scale-105"
                                >
                                    <div className="feature-box-icon text-4xl mb-4 overflow-hidden">
                                        <i className={feature.icon}></i>
                                        <img
                                            src={feature.icon}

                                        />
                                    </div>
                                    <div className="feature-box-content">
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <h5 className="text-lg text-gray-600">{feature.subtitle}</h5>
                                        <p className="text-gray-500 mt-2">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
