import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://pure-cliffs-15419.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Review added Successfully');
                }
            })
    }
    return (
        <div className='m-5'>
            <h1 className='font-bold mb-5'>Add Your Valuable Review</h1>
            <div className='mx-auto'>
                <form className='flex flex-col' style={{ "position": "relative", "left": "50%", "transform": "translateX(-25%)" }} onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-2/4 mb-8' placeholder='Your Name' type="text" {...register("name")} required />
                    <input className='w-2/4 mb-8' placeholder='Give number of stars' max="5" min="1" type="number" {...register("rating")} required />
                    <input className='w-2/4 mb-8' placeholder='Your Location' type="text" {...register("location")} required />
                    <textarea className='w-2/4 mb-8' placeholder='Write a review' type="text" {...register("review")} required />
                    <input className='w-2/4 mb-8' placeholder='Your Photo URL' type="text" {...register("img")} required />
                    <input className='w-2/4' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;