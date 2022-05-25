import React from 'react';
import './OurServices.css';
const OurServices = () => {
    return (
        <div className='mb-40'>
            <section class="services-sec container">
                <h2 className='text-primary text-3xl font-bold mb-2'>Our Available Services</h2>
                <div class="services">
                    <div class="service service1">
                        <div class="icon">
                            <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div class="title">
                            <h3>Free Diagnostics</h3>
                        </div>

                        <div class="des">
                            <p>Diagnosis of PC warning light and fault codes with our OBD2 scanner equipment. Book your diagnostic fault code check</p>
                        </div>
                    </div>
                    <div class="service service2">
                        <div class="icon">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <div class="title">
                            <h3>Quick Repair Process</h3>
                        </div>

                        <div class="des">
                            <p>Our goal is to see you succeed and we help you reach that through our fast and reliable computer repair services.</p>
                        </div>
                    </div>
                    <div class="service service3">
                        <div class="icon">
                            <i class="fa-solid fa-house-circle-check"></i>
                        </div>
                        <div class="title">
                            <h3>Home Service</h3>
                        </div>

                        <div class="des">
                            <p>Largest service marketplace and one-stop solution for your home services in Bangladesh. Order any service</p>
                        </div>
                    </div>
                    <div class="service service4">
                        <div class="icon">
                            <i class="fa-solid fa-robot"></i>
                        </div>
                        <div class="title">
                            <h3>Service Warranty</h3>
                        </div>

                        <div class="des">
                            <p>We guarantee our service, including replacement parts, for 90 days or the remaining term of your warranty coverage</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;