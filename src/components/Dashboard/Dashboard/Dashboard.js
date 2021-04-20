import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import AllOrderList from '../../Admin/AllOrderList/AllOrderList';
import OrderList from '../../Customer/OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://stormy-lake-37349.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <section>
            <div className="row">
                {
                    isAdmin ? <AllOrderList></AllOrderList>
                    : <OrderList></OrderList>
                }
            </div>
        </section>
    );
};

export default Dashboard;