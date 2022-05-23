import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='mb-16'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>What Clients Say</h2>
                <h4 className='text-xl'>We are always happy to hear your honest opinion about us!</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.slice(0, 6).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default MyReviews;