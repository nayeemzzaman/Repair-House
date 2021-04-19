import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const ServiceDetails = ({ service }) => {
    const history = useHistory();
    const handleOrder = key => {
        history.push(`/order/${key}`);
    }
    return (
        <div className='col-md-4 pb-4'>
            <div className='d-flex text-white'>
                <div className="mr-3 text-center">
                    <img style={{ height: '120px', width: '120px', borderRadius: '50%' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                    <h4 className="mt-3" style={{ color: 'orange' }}>from${service.price}</h4>
                </div>
                <div >
                    <h5 className='mb-4'>{service.name}</h5>
                    <p style={{ color: 'gray' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, voluptate aliquid possimus obcaecati nemo ipsum.</p>
                </div>
            </div>
            <div>
                <button onClick= {() => handleOrder(service._id)} className='btn-brand mt-5' style={{width: '200px'}}>Appoint Service</button>
            </div>
        </div>
    );
};

export default ServiceDetails;