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
                <p>Product ID: {product._id}</p>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Available: {product.quantity}</p>
                <p>Minimun Order: {product.min_order}</p>
            </div>
        </div>
    );
};

export default Purchase;