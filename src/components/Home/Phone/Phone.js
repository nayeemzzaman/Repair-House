import React from 'react';
import './Phone.css'
const Phone = ({phoneData}) => {
    return (
        <div  className="col-md-3 text-center phone">
            <img style={{height:'130px'}} src={phoneData.image} alt=""/>
            <h5 className="mt-3 text-brand phone-name">{phoneData.name}</h5>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
};

export default Phone;