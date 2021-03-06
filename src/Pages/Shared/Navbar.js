import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const userName = user?.displayName;

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li className='text-violet-900 font-semibold'><Link to="/">Home</Link></li>
        <li className='text-violet-900 font-semibold'><Link to="/blogs">Blogs</Link></li>
        <li className='text-violet-900 font-semibold'><Link to="/myportfolio">My Portfolio</Link></li>

        {
            user && <li className='text-violet-900 font-semibold'><Link to="/dashboard">Dashboard</Link></li>
        }
        <li className='text-violet-900 font-semibold'><Link to="/">{userName}</Link></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>

    </>
    return (
        <div>
            <div className="navbar text-violet-900 lg:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case lg:text-xl sm:text-sm">Dream PC Build</Link>
                </div>
                <div className="navbar-end sm:text-xs">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>Expand
                    </label>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;