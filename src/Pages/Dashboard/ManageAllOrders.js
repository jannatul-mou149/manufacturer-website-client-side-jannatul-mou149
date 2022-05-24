import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllOrders = () => {

    return (
        <div>
            <h4>All Order list</h4>
        </div>
    );
};

export default ManageAllOrders;