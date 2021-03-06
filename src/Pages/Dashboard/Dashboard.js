import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content sm:ml-20">
                <h2 className='text-3xl text-primary font-bold mt-10'>Welcome to Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to="/dashboard/myOrders">My Orders</Link></li>}
                    {!admin && <li><Link to="/dashboard/addReviews">Add a Review</Link></li>}
                    {admin && <li><Link to="/dashboard/users">Make an Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/addItem">Add a Product</Link></li>}
                    {<li><Link to="/dashboard">My Profile</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;