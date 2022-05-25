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
                        <img src='https://brilliantmaps.com/wp-content/uploads/2015/01/Flag_of_Turkey.png' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FqlLlcrXSQVm0VT1KdfrV-dNfN7J0H6D9kohA1_UE_9oWsyU6JCTmknGb_XmIF58Wyc&usqp=CAU' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://qph.cf2.quoracdn.net/main-qimg-3cccfc9fa3cd77f90e25473831360ca7' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://cdn.pixabay.com/photo/2021/05/28/01/08/samoa-6289545_960_720.png' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://cdn.britannica.com/34/4034-004-B478631E/Flag-Myanmar.jpg' alt="" />
                    </div>
                    <div className="img">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png' alt="" />
                    </div>
                </div>

            </div>
            <img className='img-fluid' id="map" src={map} alt="" />
        </div>
    );
};

export default BusinessSummary;