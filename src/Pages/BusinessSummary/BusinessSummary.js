import React from 'react';
import './Module.BusinessSummary.css';
import map from '../../Assests/images/map.png';
const BusinessSummary = () => {
    return (
        <div className="delivery mt-5 pb-28">
            <div className="total-delivery">
                <div className="number">
                    <h1>46,000</h1>
                    <p className='font-bold mt-3'>Deliveries All Over The World</p>
                </div>
                <div className='numbers'>
                    <div className='number'>
                        <i class="fa-solid fa-flag"></i>
                        <h6>56+</h6>
                        <h5>Total Countries</h5>
                    </div>
                    <div className='number'>
                        <i class="fa-solid fa-truck-fast"></i>
                        <h6>62k+</h6>
                        <h5>Success Deliveries</h5>
                    </div>
                    <div className='number'>
                        <i class="fa-solid fa-people-group"></i>
                        <h6>55k+</h6>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className='number'>
                        <i class="fa-solid fa-heart"></i>
                        <h6>33k+</h6>
                        <h5>Total Feedback</h5>
                    </div>
                </div>
                <div className="brands">
                    <div className="img">
                        <img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/headset-vector-icon-tim-hester.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://thumbs.dreamstime.com/b/computer-cpu-icon-flat-style-circuit-board-vector-illustration-white-isolated-background-motherboard-chip-business-concept-166726086.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://png.pngtree.com/png-vector/20190331/ourlarge/pngtree-graphic-card-icon-outline-or-line-style-vector-illustration-png-image_876882.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://thumbs.dreamstime.com/b/laptop-icon-vector-mobile-computer-solid-logo-pictogram-isolat-isolated-white-pixel-perfect-illustration-95987791.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://thumbs.dreamstime.com/b/computer-mouse-icon-computer-mouse-icon-computer-mouse-vector-illustration-139237470.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://image.shutterstock.com/image-vector/keyboard-vector-icon-linear-sign-600w-1482708644.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://www.creativefabrica.com/wp-content/uploads/2021/03/19/Computer-Office-Icon-Outline-illustratio-Graphics-9771156-1-1-580x387.jpg' alt="" />
                    </div>
                </div>

            </div>
            <img className='img-fluid' id="map" src={map} alt="" />
        </div>
    );
};

export default BusinessSummary;