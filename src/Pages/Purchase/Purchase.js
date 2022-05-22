import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    return (
        <div >
            <div className='flex justify-center'>
                <img src={product.img} alt="" />
            </div>
            <div className='mb-96'>
                <p className='text-secondary'><small>Product ID: {product._id}</small></p>
                <p className='text-primary font-semibold'>{product.name}</p>
                <p className='font-semibold'>Price: ${product.price}</p>
                <p className='font-semibold'>Available: {product.quantity}</p>
                <p className='font-semibold'>Minimum Order: {product.min_order}</p>
            </div>
        </div>
    );
};

export default Purchase;