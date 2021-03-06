import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-cliffs-15419.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://pure-cliffs-15419.herokuapp.com/products/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const remaining = products.filter(product => product._id !== id);
                            setProducts(remaining);
                        })
                    swal("Product has been removed!", {
                        icon: "success",
                    });
                } else {
                    swal("Product remains as before!");
                }
            });
    }
    return (
        <div className='mt-10'>
            <h2 className='mb-4 text-primary font-semibold'>All Products: {products.length}</h2>
            <div class="overflow-x-auto mr-5">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Minumun Order</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <th>{product.name}</th>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.min_order}</td>
                                <td>{<button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error text-white'>Remove</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;