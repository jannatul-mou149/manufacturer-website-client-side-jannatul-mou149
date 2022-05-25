import React, { useEffect, useState } from 'react';
import Review from './Review';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='mb-40'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>What Clients Say</h2>
                <h4 className='font-semibold'>We accept your opinion of experience with us!</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-40 my-20'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default MyReviews;