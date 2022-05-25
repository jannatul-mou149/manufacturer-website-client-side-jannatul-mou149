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

            </div>
            <img className='img-fluid' id="map" src={map} alt="" />
        </div>
    );
};

export default BusinessSummary;