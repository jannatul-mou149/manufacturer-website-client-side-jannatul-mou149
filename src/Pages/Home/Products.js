import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-secondary text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Products We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
                {
                    products.map(product => <Product
                        key={products._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;