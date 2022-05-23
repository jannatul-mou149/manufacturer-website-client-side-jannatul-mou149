import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Module.AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `http://localhost:5000/products`;
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
                    toast.success('Product added Successfully');
                }
            })
    }
    return (
        <div className='m-5'>
            <h1 className='font-bold mb-5'>Add Items to Inventory</h1>
            <div className='mx-auto'>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-2/4 mb-8' placeholder='Product Name' type="text" {...register("name")} required />
                    <input className='w-2/4 mb-8' value={user?.email} placeholder='Your Email' type="email" {...register("email")} required readOnly />
                    <input className='w-2/4 mb-8' placeholder='Price' type="text" {...register("price")} required />
                    <input className='w-2/4 mb-8' placeholder='Quantity' type="number" {...register("quantity")} required />
                    <input className='w-2/4 mb-8' placeholder='Minimun Order Amount' type="number" {...register("min_order")} required />
                    <input className='w-2/4 mb-8' placeholder='Photo URL' type="text" {...register("img")} required />
                    <input className='w-2/4 mb-8' placeholder='Description' {...register("desc")} required />
                    <input className='w-2/4' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;