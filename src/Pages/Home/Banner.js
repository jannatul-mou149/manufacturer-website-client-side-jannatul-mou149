import React from 'react';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(https://www.hdwallpapers.in/download/black_laptop_computer_on_brown_wooden_table_4k_5k_hd_cool-1920x1080.jpg)`,
            backgroundSize: 'cover'

        }}>
            <div className="hero-content">

                <div>
                    <h1 className="text-5xl font-bold text-white">Dream PC Build</h1>
                    <p className="py-6 text-white">Dream PC Build Ltd is the largest computer shop and IT Solution Provider in Bangladesh. We provide you with Genuine IT related products like Desktop PCs, Laptops, servers, workstation and many other products to help you achieve your goals..</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;