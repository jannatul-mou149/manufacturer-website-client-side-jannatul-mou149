import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, desc, price, img, min_order, quantity } = product;
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/products/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <small className='text-secondary'>Avaiable: {quantity}</small>
                <p>{desc}</p>
                <p>Price: ${price}</p>
                <p>Minimun Order: {min_order}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;