import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../../PaymentProcess/ProcessPayment/ProcessPayment';
import './Order.css'
const Order = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const history = useHistory();
    const [service, setService] = useState([]);
    const [orderData, setOrderData] = useState(null);
    useEffect(() => {
        fetch(`https://stormy-lake-37349.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setService(data[0]))
    }, [id])
    const onSubmit = data => {
        console.log(data);
        setOrderData(data);
    }
    const handlePayment = paymentId => {
        console.log(orderData);
        const orderDetails = {
            ...loggedInUser,
            Order: orderData,
            status: 'pending',
            paymentId: paymentId,
            orderTime: new Date()
        };


        fetch('https://stormy-lake-37349.herokuapp.com/addOrder', {
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
                    history.push('/orderList')
                }
            })
    }
    return (

        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", height: '100vh', right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand" style={{ fontWeight: '600' }}>Take Service</h5>
                <div style={{display: orderData? 'none': 'block'}}>
                    <form className="order-form" style={{ width: '35%' }} onSubmit={handleSubmit(onSubmit)}>
                        < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                        {errors.name && <span className="error">Name is required</span>}

                        < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  />
                        {errors.email && <span className="error">Email is required</span>}

                        < input name="serviceName" value={service.name} ref={register({ required: true })} />
                        
                        < input name="servicePrice" value={service.price} ref={register({ required: true })} />

                        < input name="address" ref={register({ required: true })} placeholder="Your address" />
                        {errors.address && <span className="error">Address is required</span>}

                        < input name="phone" ref={register({ required: true })} placeholder="Your phone number" />
                        {errors.phone && <span className="error">Phone Number is required</span>}
                        
                        <input className="btn-brand" type="submit" />
                    </form>
                </div>
                <div style={{display: orderData? 'block': 'none', width:'35%'}}>
                    <h5 className="mb-4 mt-3">Payment with Card</h5>
                    <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Order;