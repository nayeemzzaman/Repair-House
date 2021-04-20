import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderData from '../OrderData/OrderData';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        // fetch('https://stormy-lake-37349.herokuapp.com/orders')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setOrders(data)
        //     })
        fetch('https://stormy-lake-37349.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            })
    }, [])
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0,height:"100vh", backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Orders</h5>
                <OrderData orders={orders} />
            </div>
        </div>
    );
};

export default OrderList;