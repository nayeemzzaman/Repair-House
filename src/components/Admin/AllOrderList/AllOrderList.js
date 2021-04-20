import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderDataTable from '../OrderDataTable/OrderDataTable';

const AllOrderList = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('https://stormy-lake-37349.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrderData(data)
            })
    }, [])
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute",height:'100vh', right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Orders</h5>
                <OrderDataTable orderData={orderData} />
            </div>
        </div>
    );
};

export default AllOrderList;