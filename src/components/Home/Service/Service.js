import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import crackedScreen from '../../../images/phone-repair2.jpg';
import softwareFix from '../../../images/phone-repair3.jpg';
import brokenCase from '../../../images/phone-repair5.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import  './Service.css';
// const serviceData = [
//     {
//         name: 'Cracked Screeens',
//         image: crackedScreen,
//         price: 30
//     },
//     {
//         name: 'Broken Casings',
//         image: brokenCase,
//         price: 40
//     },
//     {
//         name: 'Software Fixes',
//         image: softwareFix,
//         price: 60
//     }
// ]

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://stormy-lake-37349.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section id="service" className='services-container'>
            <div className='text-center pt-5'>
                <h1 style={{fontWeight:'700'}} className='text-white'>What Kind of Repairs Can We Do?</h1>
                <p className="mt-4" style={{color: 'lightgray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className='w-90 row mt-4 pt-3 mb-5'>
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;