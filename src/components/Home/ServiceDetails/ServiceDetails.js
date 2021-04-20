import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = ({ service }) => {
    const history = useHistory();
    const handleOrder = key => {
        history.push(`/order/${key}`);
    }
    return (
        <div className='col-md-4 p-4 service-details'>
            <div className='d-flex text-white'>
                <div className="mr-3 text-center">
                    <img className="image-style" src={`data:image/png;base64,${service.image.img}`} alt="" />
                    <h4 className="mt-3" style={{ color: 'orange' }}>from${service.price}</h4>
                </div>
                <div >
                    <h5 className='mb-4'>{service.name}</h5>
                    <p style={{ color: 'gray' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, voluptate aliquid possimus obcaecati nemo ipsum.</p>
                </div>
            </div>
            <div className="serviceBtn ">
                <button onClick= {() => handleOrder(service._id)} className='btn-brand   mt-5' style={{width: '200px'}}>Appoint Service</button>
            </div>
        </div>
    );
};

export default ServiceDetails;