import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/new-order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])
    return (
        <div className='mt-10'>
            <h2 className='mb-4 text-primary font-semibold'>My Order List: {orders.length}</h2>
            <div class="overflow-x-auto mr-5">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Payment Amount</th>
                            <th>Shipping Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th>{order.name}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total_price}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-warning text-white'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='btn btn-xs btn-success text-white'>Paid</span></p>
                                        <p>Transaction ID:{order.transactionId} </p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;