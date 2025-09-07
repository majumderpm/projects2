import Testimonials from '@/component/testimonials/Testimonials'
import React from 'react'
import Feature from '../home/feature/Feature'

const About = () => {
    return (
        <>
            <div className="">
                <img src="assets/images/about-bg.jpg" />
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav  mt-8 mb-5">
                <div className="container">
                    <ol className="breadcrumb d-flex justify-content-center align-items-center">
                        <li className="breadcrumb-item"><a href="/"><i class="fa-regular fa-house text-primary"></i></a></li>
                        <li className="breadcrumb-item active fw-medium" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>


            <div className="about-section mt-8 mb-8">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 pe-5'>
                            <h2 className="subtitle">About Velvu Technologies</h2>
                            <p>Established in 2018, Velvu Technologies has grown from humble beginnings into a powerhouse of innovation and excellence in the surveillance industry. Starting with a 2,000 sq. ft. R&D center, we have expanded into a sprawling 32,000 sq. ft. manufacturing hub, showcasing our relentless commitment to progress and innovation.</p>
                            <p>Our journey has been marked by exceptional milestones. From a team of just 4 passionate individuals, we have grown into a thriving organization of 250 dedicated professionals, with more talents joining us every day. We’ve also expanded our product range significantly, offering advanced and reliable surveillance solutions that cater to diverse needs.</p>

                            <p>Velvu now has presence in over 15 states across India, backed up by a systematic and efficient distribution strategy that ensures our products reach clients quickly and reliably. Velvu is more than just a company; we are a community of hustlers who embrace challenges, push the boundaries, and strive perfection every day. Our objective is to disrupt security through delivering creative, affordable and excellent in quality surveillance solutions that inspire trust and safety amongst consumers.</p>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <div className='aboutImg'>
                                  <img src='assets/images/about-img1.jpg' alt='about' />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-8'>
                        <div className='col-lg-6 col-sm-12'>
                            <div className='aboutImg right'>
                                  <img src='assets/images/founder.jpg' alt='about' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 ps-5 '>
                            <h2 className="subtitle">Founder’s Note</h2>
                            <p>Hi, I’m Niket Kabra, Founder and CEO of Velvu Technologies.</p>
                            <p>With my experience in multi-brand distribution in the surveillance industry, I noticed a clear gap in the market for high-quality, reliable, and affordable security solutions. There was a need for more innovation and a consumer-centric approach, and that’s what inspired me to start Velvu.</p>

                            <p>We established our 32,000 sq. ft. manufacturing facility to build a strong foundation for our operations. From the beginning, we’ve focused on creating advanced surveillance products with a commitment to quality at affordable price. We believe in the power of innovation, which is why we invest heavily in Research and Development to stay ahead of the curve.</p>
                            <p>At Velvu, we design solutions that meet the unique security needs of our consumers—whether it’s for homes, businesses, or public spaces. No area should be left unprotected. As a proud "Make in India" brand, we’re dedicated to offering reliable and high-quality products that provide peace of mind. Our core values are integrity, excellence, and creating great user experiences. And, as W.E Deming said, "Quality is not an act, it is a habit." This is the mindset that drives us at Velvu every day.</p>

                            <h6 className='h6 mt-3'>Niket Kabra </h6>
                            <small>Founder & CEO</small>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Feature />
            <Testimonials />
        </>
    )
}

export default About