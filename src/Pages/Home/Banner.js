import React from 'react';
// import bannerImg from '../../Assests/images/bannerImg.jpg';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(https://i.redd.it/2ln5zbm1gvm01.jpg)`,

        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ytimg.com/vi/kPB-GJkcopE/maxresdefault.jpg' className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-white">Welcome to Dream PC Build</h1>
                    <p className="py-6 text-white">Dream PC Build Ltd is the largest computer shop and IT Solution Provider in Bangladesh. We provide you with Genuine IT related products like Desktop PCs, Laptops, servers, workstation and many other products to help you achieve your goals..</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;