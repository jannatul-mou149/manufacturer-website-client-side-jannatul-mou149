import React from 'react';
import bannerImg from '../../Assests/images/bannerImg.jpg';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${bannerImg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-10"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h2 class="mb-5 text-5xl font-bold">Hello there...</h2>
                    <p class="mb-5">Dream PC Build Ltd is the largest computer shop and IT Solution Provider in Bangladesh. We provide you with Genuine IT related products like Desktop PCs, Laptops, servers, workstation and many other products to help you achieve your goals.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;