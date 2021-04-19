import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../../PaymentProcess/ProcessPayment/ProcessPayment';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    console.log(loggedInUser);
    const [service, setService] = useState([]);
    const [orderData, setOrderData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/order/${id}`)
            .then(res => res.json())
            .then(data => setService(data[0]))
    }, [])
    const handleSubmit = data => {
        setOrderData(data);
    }
    const handlePayment = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            Order: orderData,
            paymentId: paymentId,
            orderTime: new Date()
        };


        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully.')
                }
            })
    }
    return (

        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", height: '100vh', right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand" style={{ fontWeight: '600' }}>Take Service</h5>
                <div style={{display: orderData? 'none': 'block'}}>
                    <form style={{ width: '35%' }} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Customer Name</label>
                            <input type="text" className="form-control" name="name" value={loggedInUser.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Customer Mail</label>
                            <input type="text" className="form-control" name="price" value={loggedInUser.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Service Name</label>
                            <input type="text" className="form-control" name="price" value={service.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Service Price</label>
                            <input type="text" className="form-control" name="price" value={'$' + service.price} />
                        </div>

                        <button type="submit" className="btn-style">Submit</button>
                    </form>
                </div>
                <div style={{display: orderData? 'block': 'none', width:'35%'}}>
                    <h5>Payment with Card</h5>
                    <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Order;